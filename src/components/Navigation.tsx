'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { FaHome, FaCode, FaEnvelope, FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '@/contexts/ThemeContext';
import Dock from '@/components/Dock';

export default function Navigation() {
  const pathname = usePathname();
  const [isHovered, setIsHovered] = useState(false);
  const [displayText, setDisplayText] = useState('[J]');
  // Simpan posisi terakhir yang tampil (baik maju/mundur)
  const lastStepRef = useRef(0);
  // Simpan interval agar bisa dibersihkan saat hover berubah di tengah animasi
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const { theme, toggleTheme } = useTheme();

  const animationSteps = [
    '[J]',
    '[Je]',
    '[Jek]',
    '[Jek,]',
    '[Jek, i]',
    '[Jek, is]',
    '[Jek, is ]',
    '[Jek, is m]',
    '[Jek, is my]',
    '[Jek, is my ]',
    '[Jek, is my s]',
    '[Jek, is my su]',
    '[Jek, is my sur]',
    '[Jek, is my surn]',
    '[Jek, is my surna]',
    '[Jek, is my surnam]',
    '[Jek, is my surname]',
  ];



  useEffect(() => {
    // Untuk membersihkan interval sebelumnya jika ada
    if (intervalRef.current) clearInterval(intervalRef.current);

    if (isHovered) {
      // Animasi maju dari posisi terakhir yang tampil
      let currentStep = lastStepRef.current;
      intervalRef.current = setInterval(() => {
        if (currentStep < animationSteps.length) {
          setDisplayText(animationSteps[currentStep]);
          lastStepRef.current = currentStep;
          currentStep++;
        } else {
          if (intervalRef.current) clearInterval(intervalRef.current);
        }
      }, 50);
    } else {
      // Animasi mundur dari posisi terakhir yang tampil
      let currentStep = lastStepRef.current;
      intervalRef.current = setInterval(() => {
        if (currentStep >= 0) {
          setDisplayText(animationSteps[currentStep]);
          lastStepRef.current = currentStep;
          currentStep--;
        } else {
          lastStepRef.current = 0;
          if (intervalRef.current) clearInterval(intervalRef.current);
        }
      }, 50);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isHovered]);

  const navItems = [
    { name: 'Home', path: '/', icon: <FaHome />, color: 'cyan' },
    { name: 'Projects', path: '/projects', icon: <FaCode />, color: 'green' },
    { name: 'Contact', path: '/contact', icon: <FaEnvelope />, color: 'purple' },
  ];

  const getColorClasses = (color: string, isActive: boolean) => {
    const colors = {
      cyan: isActive 
        ? 'border-neon-cyan text-neon-cyan bg-neon-cyan/10' 
        : 'border-transparent text-gray-400 hover:text-neon-cyan hover:border-neon-cyan/50',
      pink: isActive 
        ? 'border-neon-pink text-neon-pink bg-neon-pink/10' 
        : 'border-transparent text-gray-400 hover:text-neon-pink hover:border-neon-pink/50',
      green: isActive 
        ? 'border-neon-green text-neon-green bg-neon-green/10' 
        : 'border-transparent text-gray-400 hover:text-neon-green hover:border-neon-green/50',
      purple: isActive 
        ? 'border-neon-purple text-neon-purple bg-neon-purple/10' 
        : 'border-transparent text-gray-400 hover:text-neon-purple hover:border-neon-purple/50',
    };
    return colors[color as keyof typeof colors] || colors.cyan;
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:block fixed top-0 left-0 right-0 z-50 bg-dark-900/80 backdrop-blur-md border-b border-neon-cyan/20 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link 
              href="/" 
              className="text-2xl font-bold group relative inline-block"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <span
                className={`transition-colors duration-300 ${isHovered ? 'text-neon-pink' : 'text-neon-cyan'}`}
                style={{ fontFamily: 'Staatliches, sans-serif' }}
              >
                {displayText}
              </span>
            </Link>

            {/* Nav Links and Theme Toggle */}
            <div className="flex gap-4 items-center">
              {navItems.map((item) => {
                const isActive = pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    className={`
                      flex items-center gap-2 px-4 py-2 font-mono text-sm
                      border-2 transition-all duration-300
                      ${getColorClasses(item.color, isActive)}
                    `}
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </Link>
                );
              })}

              {/* Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                className="flex items-center justify-center w-10 h-10 border-2 border-neon-pink text-neon-pink hover:bg-neon-pink hover:text-dark-900 transition-all duration-300 group/theme"
                title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              >
                {theme === 'dark' ? (
                  <FaSun className="text-lg transition-transform duration-300 group-hover/theme:rotate-180" />
                ) : (
                  <FaMoon className="text-lg transition-transform duration-300 group-hover/theme:rotate-12" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile/Tablet Dock Navigation */}
      <div className="md:hidden">
        <Dock
          items={[
            ...navItems,
            {
              name: 'Theme',
              icon: theme === 'dark' ? <FaSun /> : <FaMoon />,
              color: 'pink',
              onClick: toggleTheme,
            },
          ]}
        />
      </div>
    </>
  );
}
