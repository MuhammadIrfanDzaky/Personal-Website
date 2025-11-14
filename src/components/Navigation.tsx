'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { FaHome, FaCode, FaEnvelope, FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import { useTheme } from '@/contexts/ThemeContext';
import Dock from '@/components/Dock';

export default function Navigation() {
  const pathname = usePathname();
  const [isHovered, setIsHovered] = useState(false);
  const [displayText, setDisplayText] = useState('[J]');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);



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
        ? 'border-neon-cyan text-neon-cyan bg-neon-cyan/10 shadow-[0_0_15px_rgba(0,229,255,0.5)]' 
        : 'border-transparent text-gray-400 hover:text-neon-cyan hover:border-neon-cyan/50 hover:shadow-[0_0_10px_rgba(0,229,255,0.3)]',
      pink: isActive 
        ? 'border-neon-pink text-neon-pink bg-neon-pink/10 shadow-[0_0_15px_rgba(255,16,240,0.5)]' 
        : 'border-transparent text-gray-400 hover:text-neon-pink hover:border-neon-pink/50 hover:shadow-[0_0_10px_rgba(255,16,240,0.3)]',
      green: isActive 
        ? 'border-neon-green text-neon-green bg-neon-green/10 shadow-[0_0_15px_rgba(16,240,160,0.5)]' 
        : 'border-transparent text-gray-400 hover:text-neon-green hover:border-neon-green/50 hover:shadow-[0_0_10px_rgba(16,240,160,0.3)]',
      purple: isActive 
        ? 'border-neon-purple text-neon-purple bg-neon-purple/10 shadow-[0_0_15px_rgba(168,85,247,0.5)]' 
        : 'border-transparent text-gray-400 hover:text-neon-purple hover:border-neon-purple/50 hover:shadow-[0_0_10px_rgba(168,85,247,0.3)]',
    };
    return colors[color as keyof typeof colors] || colors.cyan;
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:block fixed top-0 left-0 right-0 z-50 bg-dark-900/80 backdrop-blur-md border-b border-neon-cyan/20 transition-colors duration-300">
        {/* Scroll Progress Bar */}
        <div className="absolute top-0 left-0 h-1 bg-gradient-to-r from-neon-cyan via-neon-pink to-neon-purple transition-all duration-300"
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
                      relative flex items-center gap-2 px-4 py-2 font-mono text-sm
                      border-2 transition-all duration-300
                      ${getColorClasses(item.color, isActive)}
                    `}
                  >
                    {item.icon}
                    <span>{item.name}</span>
                    {/* Active underline indicator */}
                    {isActive && (
                      <span 
                        className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${
                          item.color === 'cyan' ? 'from-transparent via-neon-cyan to-transparent' :
                          item.color === 'green' ? 'from-transparent via-neon-green to-transparent' :
                          item.color === 'purple' ? 'from-transparent via-neon-purple to-transparent' :
                          'from-transparent via-neon-pink to-transparent'
                        }`}
                      />
                    )}
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

      {/* Mobile/Tablet Navigation */}
      <div className="md:hidden">
        {/* Mobile Header */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-900/95 backdrop-blur-md border-b border-neon-cyan/20">
          {/* Scroll Progress Bar */}
          <div className="absolute top-0 left-0 h-1 bg-gradient-to-r from-neon-cyan via-neon-pink to-neon-purple transition-all duration-300"
            style={{ width: `${scrollProgress}%` }}
          />
          
          <div className="flex items-center justify-between px-6 py-4">
            {/* Logo */}
            <Link 
              href="/" 
              className="text-xl font-bold"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span
                className="text-neon-cyan transition-colors duration-300"
                style={{ fontFamily: 'Staatliches, sans-serif' }}
              >
                [J]
              </span>
            </Link>

            {/* Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="relative w-10 h-10 flex items-center justify-center text-neon-cyan hover:text-neon-pink transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {/* Animated hamburger icon */}
              <div className="relative w-6 h-5">
                <span className={`absolute left-0 w-full h-0.5 bg-current transition-all duration-300 ease-in-out ${
                  isMobileMenuOpen ? 'top-2 rotate-45' : 'top-0 rotate-0'
                }`} />
                <span className={`absolute left-0 top-2 w-full h-0.5 bg-current transition-all duration-300 ease-in-out ${
                  isMobileMenuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
                }`} />
                <span className={`absolute left-0 w-full h-0.5 bg-current transition-all duration-300 ease-in-out ${
                  isMobileMenuOpen ? 'top-2 -rotate-45' : 'top-4 rotate-0'
                }`} />
              </div>
            </button>
          </div>
        </nav>

        {/* Mobile Menu Overlay */}
        <div 
          className={`fixed inset-0 bg-dark-900/95 backdrop-blur-md z-40 transition-all duration-500 ease-in-out ${
            isMobileMenuOpen 
              ? 'opacity-100 pointer-events-auto' 
              : 'opacity-0 pointer-events-none'
          }`}
          style={{ top: '73px' }} // Height of mobile header
        >
          <div className={`flex flex-col items-center justify-center h-full gap-6 transition-all duration-500 ease-in-out ${
            isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            {navItems.map((item, index) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`
                    relative flex items-center gap-3 px-8 py-4 font-mono text-lg
                    border-2 transition-all duration-300
                    ${getColorClasses(item.color, isActive)}
                  `}
                  style={{
                    transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : '0ms'
                  }}
                >
                  {item.icon}
                  <span>{item.name}</span>
                  {/* Active indicator */}
                  {isActive && (
                    <span 
                      className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${
                        item.color === 'cyan' ? 'from-transparent via-neon-cyan to-transparent' :
                        item.color === 'green' ? 'from-transparent via-neon-green to-transparent' :
                        item.color === 'purple' ? 'from-transparent via-neon-purple to-transparent' :
                        'from-transparent via-neon-pink to-transparent'
                      }`}
                    />
                  )}
                </Link>
              );
            })}

            {/* Theme Toggle in Mobile Menu */}
            <button
              onClick={() => {
                toggleTheme();
                setIsMobileMenuOpen(false);
              }}
              className="flex items-center gap-3 px-8 py-4 font-mono text-lg border-2 border-neon-pink text-neon-pink hover:bg-neon-pink hover:text-dark-900 transition-all duration-300"
              style={{
                transitionDelay: isMobileMenuOpen ? `${navItems.length * 50}ms` : '0ms'
              }}
            >
              {theme === 'dark' ? <FaSun className="text-xl" /> : <FaMoon className="text-xl" />}
              <span>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
