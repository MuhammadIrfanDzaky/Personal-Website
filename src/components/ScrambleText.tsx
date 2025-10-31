'use client';

import { useState, useEffect } from 'react';

interface ScrambleTextProps {
  text: string;
  scrambleSpeed?: number;
}

export default function ScrambleText({ text, scrambleSpeed = 50 }: ScrambleTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const [isScrambling, setIsScrambling] = useState(false);

  const scrambleInterval = 600 + Math.random() * 1000; // 600-900ms between scrambles
  const scrambleChars = '!@#$%^&*()_+-=[]{}|;:,.<>?/~`';

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isScrambling) {
        setIsScrambling(true);
        
        // Scramble phase
        let iterations = 0;
        const maxIterations = 3;
        
        const scramble = setInterval(() => {
          setDisplayText(
            text
              .split('')
              .map((char, index) => {
                if (char === ' ') return ' ';
                if (Math.random() > 0.5) {
                  return scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
                }
                return char;
              })
              .join('')
          );
          
          iterations++;
          if (iterations >= maxIterations) {
            clearInterval(scramble);
            setDisplayText(text);
            setTimeout(() => setIsScrambling(false), 100);
          }
        }, scrambleSpeed);
      }
    }, scrambleInterval);

    return () => clearInterval(timer);
  }, [text, scrambleSpeed, scrambleInterval, isScrambling]);

  return (
    <span className="inherit">
      {displayText}
    </span>
  );
}
