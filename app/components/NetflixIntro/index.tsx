"use client";

import React, { useEffect } from 'react';
import styles from './style.module.scss';

type Letter = "N" | "E" | "T" | "F" | "L" | "I" | "X";

interface NetflixIntroProps {
  letter?: Letter;
  onComplete?: () => void;
  className?: string; // Kept for API compatibility but might handle manually if needed
}

const Brush = () => (
  <div className={styles['effect-brush']}>
    {Array.from({ length: 31 }, (_, i) => i + 1).map(num => (
      <span key={num} className={styles[`fur-${32 - num}` as keyof typeof styles] || styles[`fur-${32 - num}`] /* Fallback for safe access */} />
    ))}
    {/* Wait, the sequence in HTML is fur-31 to fur-1.
        My loop above produces fur-31 down to fur-1.
        (32 - 1 = 31), (32 - 31 = 1). Correct.
     */}
  </div>
);

const Lumieres = () => (
    <div className={styles['effect-lumieres']}>
      {Array.from({ length: 28 }, (_, i) => i + 1).map(num => (
        <span key={num} className={styles[`lamp-${num}` as keyof typeof styles] || styles[`lamp-${num}`]} />
      ))}
    </div>
);

// Map of which helpers are needed for each letter
// N: 1, 2, 3
// E: 1, 2, 3, 4
// T: 1, 2
// F: 1, 2, 3
// L: 1, 2
// I: 1
// X: 1, 2
const config: Record<Letter, number[]> = {
  N: [1, 2, 3],
  E: [1, 2, 3, 4],
  T: [1, 2],
  F: [1, 2, 3],
  L: [1, 2],
  I: [1],
  X: [1, 2],
};

export default function NetflixIntro({ letter = "N", onComplete, className }: NetflixIntroProps) {
  
  useEffect(() => {
    // Play the "Ta-dum" sound
    const audio = new Audio("/Netflix intro - QuickSounds.com.mp3");
    audio.play().catch(error => console.log("Audio playback blocked:", error));

    // Total animation duration seems to be around 4s (zoom-in 3.5s + delay .5s = 4s).
    // Plus lumieres 2s + 1.6s delay = 3.6s.
    // Plus brush 2.5s + 1.2s delay = 3.7s.
    // Max is roughly 4s.
    const timer = setTimeout(() => {
        onComplete?.();
    }, 4500); // 4.5s buffer

    return () => {
      clearTimeout(timer);
      audio.pause(); // Stop audio if component unmounts early (optional but good practice)
    };
  }, [onComplete]);

  const helpers = config[letter] || [1];

  return (
    <div className={styles.container}>
      <div 
        className={`${styles['netflix-intro']} ${className || ''}`}
        data-letter={letter}
      >
        {helpers.map(id => (
            <div key={id} className={`${styles[`helper-${id}`]} ${styles.helper}`}>
                {/* helper-1 always has lumieres in standard template? */}
                {id === 1 && <Lumieres />}
                <Brush />
            </div>
        ))}
      </div>
    </div>
  );
}

// NOTE: cn util might not exist, I will remove it if it fails or check for it. 
// I'll assume standard React setup. I'll define a simple helper inline if needed.
