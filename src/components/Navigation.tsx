'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { FaHome, FaCode, FaEnvelope, FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '@/contexts/ThemeContext';

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

export default function Navigation() {
  const pathname = usePathname();
  const [isHovered, setIsHovered] = useState(false);
  const [displayText, setDisplayText] = useState('[J]');
  const [scrollProgress, setScrollProgress] = useState(0);
  // Simpan posisi terakhir yang tampil (baik maju/mundur)
  const lastStepRef = useRef(0);
  // Simpan interval agar bisa dibersihkan saat hover berubah di tengah animasi
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const { theme, toggleTheme } = useTheme();

  // Scroll progress bar
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



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
    { name: 'Projects', path: '/projects', icon: <FaCode />, color: 'cyan' },
    { name: 'Contact', path: '/contact', icon: <FaEnvelope />, color: 'cyan' },
  ];

  const getColorClasses = (color: string, isActive: boolean) => {
    return isActive
      ? 'border-neon-cyan text-neon-cyan bg-neon-cyan/10 shadow-[0_0_15px_rgba(0,229,255,0.5)]'
      : 'border-transparent text-gray-400 hover:text-neon-cyan hover:border-neon-cyan/50 hover:shadow-[0_0_10px_rgba(0,229,255,0.3)]';
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:block fixed top-0 left-0 right-0 z-50 bg-dark-900/80 backdrop-blur-md border-b border-neon-cyan/20 transition-colors duration-300">
        {/* Scroll Progress Bar */}
        <div className="absolute top-0 left-0 h-1 bg-neon-cyan transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
        
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
                className="text-neon-cyan transition-colors duration-300"
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
                      relative flex items-center gap-2 px-4 py-2 font-mono text-sm
                      border-2 transition-all duration-300
                      ${getColorClasses(item.color, isActive)}
                    `}
                  >
                    {item.icon}
                    <span>{item.name}</span>
                    {/* Active underline indicator */}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-neon-cyan to-transparent" />
                    )}
                  </Link>
                );
              })}

              {/* Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                className="flex items-center justify-center w-10 h-10 border-2 border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-dark-900 transition-all duration-300 group/theme"
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

      {/* Mobile/Tablet Navigation - Bottom Navbar */}
      <div className="md:hidden">
        {/* Mobile Top Bar (Logo only) */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-900/95 backdrop-blur-md border-b border-neon-cyan/20">
          {/* Scroll Progress Bar */}
          <div className="absolute top-0 left-0 h-1 bg-neon-cyan transition-all duration-300"
            style={{ width: `${scrollProgress}%` }}
          />
          
          <div className="flex items-center justify-center px-6 py-4">
            {/* Logo */}
            <Link 
              href="/" 
              className="text-xl font-bold"
            >
              <span
                className="text-neon-cyan transition-colors duration-300"
                style={{ fontFamily: 'Staatliches, sans-serif' }}
              >
                [J]
              </span>
            </Link>
          </div>
        </nav>

        {/* Bottom Navigation Bar (Instagram/TikTok style) */}
        <nav className="fixed bottom-0 left-0 right-0 z-50 bg-dark-900/95 backdrop-blur-md border-t border-neon-cyan/20 pb-safe">
          <div className="flex items-center justify-around px-4 py-2">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`
                    relative flex flex-col items-center justify-center gap-1 px-4 py-2 
                    transition-all duration-300 group
                    ${isActive ? 'scale-110' : 'scale-100'}
                  `}
                >
                  {/* Icon */}
                  <div className={`
                    text-2xl transition-all duration-300
                    ${isActive 
                      ? 'text-neon-cyan drop-shadow-[0_0_8px_rgba(0,229,255,0.8)]'
                      : 'text-gray-400 group-hover:text-gray-300'
                    }
                  `}>
                    {item.icon}
                  </div>
                  
                  {/* Label */}
                  <span className={`
                    text-xs font-mono transition-all duration-300
                    ${isActive 
                      ? 'text-neon-cyan font-semibold'
                      : 'text-gray-400 group-hover:text-gray-300'
                    }
                  `}>
                    {item.name}
                  </span>
                </Link>
              );
            })}

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="relative flex flex-col items-center justify-center gap-1 px-4 py-2 transition-all duration-300 group"
            >
              {/* Icon */}
              <div className="text-2xl text-neon-cyan transition-all duration-300 group-hover:text-neon-cyan/80 drop-shadow-[0_0_8px_rgba(0,229,255,0.6)]">
                {theme === 'dark' ? (
                  <FaSun className="transition-transform duration-300 group-hover:rotate-180" />
                ) : (
                  <FaMoon className="transition-transform duration-300 group-hover:rotate-12" />
                )}
              </div>
              
              {/* Label */}
              <span className="text-xs font-mono text-neon-cyan transition-all duration-300 group-hover:text-neon-cyan/80">
                Theme
              </span>
            </button>
          </div>
        </nav>
      </div>
    </>
  );
}
