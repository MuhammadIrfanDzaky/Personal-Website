'use client';

import { useEffect, useState } from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export default function GlitchText({ text, className = '', delay = 3000 }: GlitchTextProps) {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 1000); 
    }, delay);

    return () => clearInterval(interval);
  }, [delay]);

  return (
    <span 
      className={`${className} ${isGlitching ? 'glitch-text' : ''} inline-block`}
      style={{
        textShadow: isGlitching 
          ? '3px 0 0 rgba(0, 229, 255, 0.8), -3px 0 0 rgba(255, 16, 240, 0.8)'
          : 'none'
      }}
    >
      {text}
    </span>
  );
}
