'use client';

import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';

interface TechBadgeProps {
  name: string;
  icon: React.ReactNode;
  color: 'cyan' | 'pink' | 'purple' | 'green';
  iconColor?: string;
  iconOnly?: boolean;
}

export default function TechBadge({ name, icon, color, iconColor, iconOnly = false }: TechBadgeProps) {
  const { theme } = useTheme();
  
  const colorClasses = {
    cyan: 'border-neon-cyan hover:bg-neon-cyan hover:shadow-neon-cyan',
    pink: 'border-neon-pink hover:bg-neon-pink hover:shadow-neon-pink',
    purple: 'border-neon-purple hover:bg-neon-purple hover:shadow-neon-purple',
    green: 'border-neon-green hover:bg-neon-green hover:shadow-neon-green',
  };

  const textColorClasses = {
    cyan: 'text-neon-cyan',
    pink: 'text-neon-pink',
    purple: 'text-neon-purple',
    green: 'text-neon-green',
  };

  // Check if icon color is too similar to hover background (for React's cyan and Tailwind)
  const needsWhiteOnHover = iconColor === '#61DAFB' || iconColor === '#06B6D4';
  
  // Handle Next.js white logo - change to black in light theme
  const isNextJsWhiteLogo = iconColor === '#FFFFFF';
  const displayIconColor = isNextJsWhiteLogo && theme === 'light' ? '#000000' : iconColor;

  return (
    <div
      className={`
        flex items-center gap-2 px-3 py-2
        border-2 ${colorClasses[color]}
        transition-all duration-300
        hover:shadow-lg
        group/badge cursor-default
      `}
      title={name}
    >
      <span 
        className={`text-3xl transition-colors duration-300 ${needsWhiteOnHover ? 'group-hover/badge:!text-white' : ''}`}
        style={displayIconColor ? { color: displayIconColor } : undefined}
      >
        {icon}
      </span>
      {!iconOnly && <span className={`text-sm font-medium ${textColorClasses[color]} group-hover/badge:text-dark-900 transition-colors duration-300`}>{name}</span>}
    </div>
  );
}
