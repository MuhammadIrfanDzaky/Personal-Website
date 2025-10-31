'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedButtonProps {
  children: React.ReactNode;
  href: string;
  className?: string;
  target?: string;
  rel?: string;
}

export default function AnimatedButton({ children, href, className, target, rel }: AnimatedButtonProps) {
  return (
    <motion.a
      href={href}
      className={className}
      target={target}
      rel={rel}
      initial={{ scale: 1, y: 0 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {children}
    </motion.a>
  );
}
