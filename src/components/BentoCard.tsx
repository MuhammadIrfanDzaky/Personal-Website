'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface BentoCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: 'cyan' | 'pink' | 'purple' | 'green' | 'blue';
  delay?: number;
}

export default function BentoCard({ 
  children, 
  className = '', 
  glowColor = 'cyan',
  delay = 0
}: BentoCardProps) {
  const glowColors = {
    cyan: 'hover:shadow-neon-cyan/20',
    pink: 'hover:shadow-neon-pink/20',
    purple: 'hover:shadow-neon-purple/20',
    green: 'hover:shadow-neon-green/20',
    blue: 'hover:shadow-neon-blue/20',
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ 
        y: -4,
        transition: { duration: 0.2 }
      }}
      className={`bento-card p-6 ${glowColors[glowColor]} ${className}`}
    >
      {children}
    </motion.div>
  );
}
