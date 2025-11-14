
import * as Accordion from '@radix-ui/react-accordion';
import React, { useRef, useState, useEffect } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useTheme } from '@/contexts/ThemeContext';

type ProjectAccordionProps = {
  description: string;
  keyFeatures: string[];
  tech: string[];
  color: string;
  contribution?: string[];
  demo?: string;
  resource?: React.ReactNode;
  repoType?: string;
  onExpandChange?: (isExpanded: boolean) => void;
};

export default function ProjectAccordion({ description, keyFeatures, tech, color, contribution, demo, resource, onExpandChange }: ProjectAccordionProps) {
  const { theme } = useTheme();
  const colorClass = color === 'cyan' ? 'text-neon-cyan' : color === 'pink' ? 'text-neon-pink' : color === 'purple' ? 'text-neon-purple' : 'text-neon-green';
  const borderClass = color === 'cyan' ? 'border-neon-cyan/40' : color === 'pink' ? 'border-neon-pink/40' : color === 'purple' ? 'border-neon-purple/40' : 'border-neon-green/40';
  const bgClass = theme === 'dark' ? 'bg-dark-900/70' : 'bg-white/80';
  const borderThemeClass = theme === 'dark' ? 'border-dark-700' : 'border-gray-300';
  const textClass = theme === 'dark' ? 'text-gray-300' : 'text-gray-700';

  return (
    <Accordion.Root type="single" collapsible className={`w-full rounded-xl border ${borderThemeClass} ${bgClass} shadow-inner`}>
      {/* Brief Description */}
      <Accordion.Item value="desc" className={`border-b ${borderThemeClass}`}>
        <Accordion.Header>
          <Accordion.Trigger className={`flex w-full items-center justify-between px-4 py-3 font-mono text-base font-bold ${colorClass} ${textClass} transition-colors ${theme === 'dark' ? 'hover:bg-dark-800/60 data-[state=open]:bg-dark-800/80' : 'hover:bg-gray-100 data-[state=open]:bg-gray-100'} focus:outline-none group`}>
            Brief Description
            <FaChevronDown className="ml-2 transition-all duration-300 group-data-[state=open]:hidden" />
            <FaChevronUp className="ml-2 transition-all duration-300 hidden group-data-[state=open]:block" />
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
          <div className={`px-6 pb-4 pt-2 text-sm ${textClass}`}>{description}</div>
        </Accordion.Content>
      </Accordion.Item>
      {/* Key Features */}
      <Accordion.Item value="features" className={`border-b ${borderThemeClass}`}>
        <Accordion.Header>
          <Accordion.Trigger className={`flex w-full items-center justify-between px-4 py-3 font-mono text-base font-bold ${colorClass} ${textClass} transition-colors ${theme === 'dark' ? 'hover:bg-dark-800/60 data-[state=open]:bg-dark-800/80' : 'hover:bg-gray-100 data-[state=open]:bg-gray-100'} focus:outline-none group`}>
            Key Features
            <FaChevronDown className="ml-2 transition-all duration-300 group-data-[state=open]:hidden" />
            <FaChevronUp className="ml-2 transition-all duration-300 hidden group-data-[state=open]:block" />
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
          <div className={`px-6 pb-4 pt-2 text-sm ${textClass}`}>
            <ul className="list-disc list-inside space-y-1">
              {keyFeatures.map((feature: string, idx: number) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>
        </Accordion.Content>
      </Accordion.Item>
      {/* Contribution */}
      {contribution && contribution.length > 0 && (
        <Accordion.Item value="contribution" className={`border-b ${borderThemeClass}`}>
          <Accordion.Header>
            <Accordion.Trigger className={`flex w-full items-center justify-between px-4 py-3 font-mono text-base font-bold ${colorClass} ${textClass} transition-colors ${theme === 'dark' ? 'hover:bg-dark-800/60 data-[state=open]:bg-dark-800/80' : 'hover:bg-gray-100 data-[state=open]:bg-gray-100'} focus:outline-none group`}>
              Contribution
              <FaChevronDown className="ml-2 transition-all duration-300 group-data-[state=open]:hidden" />
              <FaChevronUp className="ml-2 transition-all duration-300 hidden group-data-[state=open]:block" />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
            <div className={`px-6 pb-4 pt-2 text-sm ${textClass}`}>
              <ul className="list-disc list-inside space-y-1">
                {contribution.map((item: string, idx: number) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </Accordion.Content>
        </Accordion.Item>
      )}
      {/* Resource */}
      {resource && (
        <Accordion.Item value="resource" className={`border-b ${borderThemeClass}`}>
          <Accordion.Header>
            <Accordion.Trigger className={`flex w-full items-center justify-between px-4 py-3 font-mono text-base font-bold ${colorClass} ${textClass} transition-colors ${theme === 'dark' ? 'hover:bg-dark-800/60 data-[state=open]:bg-dark-800/80' : 'hover:bg-gray-100 data-[state=open]:bg-gray-100'} focus:outline-none group`}>
              Resource
              <FaChevronDown className="ml-2 transition-all duration-300 group-data-[state=open]:hidden" />
              <FaChevronUp className="ml-2 transition-all duration-300 hidden group-data-[state=open]:block" />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
            <div className={`px-6 pb-4 pt-2 text-sm ${textClass}`}>{resource}</div>
          </Accordion.Content>
        </Accordion.Item>
      )}
      {/* Tech Stack */}
      <Accordion.Item value="tech">
        <Accordion.Header>
          <Accordion.Trigger className={`flex w-full items-center justify-between px-4 py-3 font-mono text-base font-bold ${colorClass} ${textClass} transition-colors ${theme === 'dark' ? 'hover:bg-dark-800/60 data-[state=open]:bg-dark-800/80' : 'hover:bg-gray-100 data-[state=open]:bg-gray-100'} focus:outline-none group`}>
            Tech Stack
            <FaChevronDown className="ml-2 transition-all duration-300 group-data-[state=open]:hidden" />
            <FaChevronUp className="ml-2 transition-all duration-300 hidden group-data-[state=open]:block" />
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
          <div className={`px-6 pb-4 pt-2 text-sm ${textClass}`}>
            <div className="flex flex-wrap gap-2">
              {tech.map((t: string, idx: number) => {
                // Official color mapping for each technology
                // Badges dengan background hitam/gelap akan ada border yang berubah (putih di dark, hitam di light)
                // Badges dengan background berwarna tidak ada border
                const techColors: Record<string, { bg: string; text: string; hasBorder: boolean; borderDark: string; borderLight: string; shadow: string }> = {
                  // Frontend Frameworks
                  'Next.js': { 
                    bg: 'bg-[#000000]', 
                    text: 'text-white',
                    hasBorder: true,
                    borderDark: 'border-[#FFFFFF]/60',
                    borderLight: 'border-[#000000]',
                    shadow: theme === 'dark' ? 'shadow-[0_0_8px_rgba(255,255,255,0.5)]' : 'shadow-[0_0_8px_rgba(0,0,0,0.3)]' 
                  },
                  'React': { 
                    bg: 'bg-[#61DAFB]', 
                    text: 'text-[#282C34]',
                    hasBorder: false,
                    borderDark: '',
                    borderLight: '',
                    shadow: 'shadow-[0_0_8px_rgba(97,218,251,0.5)]' 
                  },
                  
                  // Languages
                  'TypeScript': { 
                    bg: 'bg-[#3178C6]', 
                    text: 'text-white',
                    hasBorder: false,
                    borderDark: '',
                    borderLight: '',
                    shadow: 'shadow-[0_0_8px_rgba(49,120,198,0.5)]' 
                  },
                  'Javascript': { 
                    bg: 'bg-[#F7DF1E]', 
                    text: 'text-white',
                    hasBorder: false,
                    borderDark: '',
                    borderLight: '',
                    shadow: 'shadow-[0_0_8px_rgba(247,223,30,0.5)]' 
                  },
                  'PHP': { 
                    bg: 'bg-[#777BB4]', 
                    text: 'text-white',
                    hasBorder: false,
                    borderDark: '',
                    borderLight: '',
                    shadow: 'shadow-[0_0_8px_rgba(119,123,180,0.5)]' 
                  },
                  'HTML': { 
                    bg: 'bg-[#E34F26]', 
                    text: 'text-white',
                    hasBorder: false,
                    borderDark: '',
                    borderLight: '',
                    shadow: 'shadow-[0_0_8px_rgba(227,79,38,0.5)]' 
                  },
                  'CSS': { 
                    bg: 'bg-[#1572B6]', 
                    text: 'text-white',
                    hasBorder: false,
                    borderDark: '',
                    borderLight: '',
                    shadow: 'shadow-[0_0_8px_rgba(21,114,182,0.5)]' 
                  },
                  
                  // Styling
                  'Tailwind': { 
                    bg: 'bg-[#06B6D4]', 
                    text: 'text-white',
                    hasBorder: false,
                    borderDark: '',
                    borderLight: '',
                    shadow: 'shadow-[0_0_8px_rgba(6,182,212,0.5)]' 
                  },
                  'Tailwind CSS': { 
                    bg: 'bg-[#06B6D4]', 
                    text: 'text-white',
                    hasBorder: false,
                    borderDark: '',
                    borderLight: '',
                    shadow: 'shadow-[0_0_8px_rgba(6,182,212,0.5)]' 
                  },
                  
                  // Backend Frameworks
                  'NestJS': { 
                    bg: 'bg-[#E0234E]', 
                    text: 'text-white',
                    hasBorder: false,
                    borderDark: '',
                    borderLight: '',
                    shadow: 'shadow-[0_0_8px_rgba(224,35,78,0.5)]' 
                  },
                  'Node.js': { 
                    bg: 'bg-[#339933]', 
                    text: 'text-white',
                    hasBorder: false,
                    borderDark: '',
                    borderLight: '',
                    shadow: 'shadow-[0_0_8px_rgba(51,153,51,0.5)]' 
                  },
                  'Express': { 
                    bg: 'bg-[#000000]', 
                    text: 'text-white',
                    hasBorder: true,
                    borderDark: 'border-[#FFFFFF]/60',
                    borderLight: 'border-[#000000]',
                    shadow: theme === 'dark' ? 'shadow-[0_0_8px_rgba(255,255,255,0.5)]' : 'shadow-[0_0_8px_rgba(0,0,0,0.3)]' 
                  },
                  
                  // Databases
                  'PostgreSQL': { 
                    bg: 'bg-[#336791]', 
                    text: 'text-white',
                    hasBorder: false,
                    borderDark: '',
                    borderLight: '',
                    shadow: 'shadow-[0_0_8px_rgba(51,103,145,0.5)]' 
                  },
                  'MySQL': { 
                    bg: 'bg-[#4479A1]', 
                    text: 'text-white',
                    hasBorder: false,
                    borderDark: '',
                    borderLight: '',
                    shadow: 'shadow-[0_0_8px_rgba(68,121,161,0.5)]' 
                  },
                  'MongoDB': { 
                    bg: 'bg-[#47A248]', 
                    text: 'text-white',
                    hasBorder: false,
                    borderDark: '',
                    borderLight: '',
                    shadow: 'shadow-[0_0_8px_rgba(71,162,72,0.5)]' 
                  },
                  
                  // ORMs
                  'Prisma ORM': { 
                    bg: theme === 'dark' ? 'bg-[#1A202C]' : 'bg-[#2D3748]', 
                    text: 'text-white',
                    hasBorder: true,
                    borderDark: 'border-[#FFFFFF]/40',
                    borderLight: 'border-[#2D3748]',
                    shadow: theme === 'dark' ? 'shadow-[0_0_8px_rgba(90,103,216,0.5)]' : 'shadow-[0_0_8px_rgba(45,55,72,0.3)]' 
                  },
                  'Prisma': { 
                    bg: theme === 'dark' ? 'bg-[#1A202C]' : 'bg-[#2D3748]', 
                    text: 'text-white',
                    hasBorder: true,
                    borderDark: 'border-[#FFFFFF]/40',
                    borderLight: 'border-[#2D3748]',
                    shadow: theme === 'dark' ? 'shadow-[0_0_8px_rgba(90,103,216,0.5)]' : 'shadow-[0_0_8px_rgba(45,55,72,0.3)]' 
                  },
                  
                  // Animation & UI Libraries
                  'Framer Motion': { 
                    bg: 'bg-[#0055FF]', 
                    text: 'text-white',
                    hasBorder: false,
                    borderDark: '',
                    borderLight: '',
                    shadow: 'shadow-[0_0_8px_rgba(0,85,255,0.5)]' 
                  },
                  'Radix UI': { 
                    bg: theme === 'dark' ? 'bg-[#161618]' : 'bg-[#FFFFFF]', 
                    text: 'text-white',
                    hasBorder: true,
                    borderDark: 'border-[#FFFFFF]/60',
                    borderLight: 'border-[#161618]',
                    shadow: theme === 'dark' ? 'shadow-[0_0_8px_rgba(255,255,255,0.5)]' : 'shadow-[0_0_8px_rgba(22,22,24,0.3)]' 
                  },
                  'React Hot Toast': { 
                    bg: 'bg-[#FF6B6B]', 
                    text: 'text-white',
                    hasBorder: false,
                    borderDark: '',
                    borderLight: '',
                    shadow: 'shadow-[0_0_8px_rgba(255,107,107,0.5)]' 
                  },
                  
                  // Version Control & Tools
                  'Git': { 
                    bg: 'bg-[#F05032]', 
                    text: 'text-white',
                    hasBorder: false,
                    borderDark: '',
                    borderLight: '',
                    shadow: 'shadow-[0_0_8px_rgba(240,80,50,0.5)]' 
                  },
                  'GitHub': { 
                    bg: 'bg-[#181717]', 
                    text: 'text-white',
                    hasBorder: true,
                    borderDark: 'border-[#FFFFFF]/60',
                    borderLight: 'border-[#181717]',
                    shadow: theme === 'dark' ? 'shadow-[0_0_8px_rgba(255,255,255,0.5)]' : 'shadow-[0_0_8px_rgba(24,23,23,0.3)]' 
                  },
                };
                
                const color = techColors[t] || { 
                  bg: theme === 'dark' ? 'bg-dark-900/50' : 'bg-gray-100', 
                  text: 'text-white',
                  hasBorder: false,
                  borderDark: '',
                  borderLight: '',
                  shadow: 'shadow-[0_0_8px_rgba(0,229,255,0.5)]' 
                };
                
                const borderClass = color.hasBorder 
                  ? (theme === 'dark' ? color.borderDark : color.borderLight)
                  : '';
                
                return (
                  <span
                    key={idx}
                    style={{ color: '#FFFFFF' }}
                    className={`text-sm font-mono font-semibold px-3 py-1.5 rounded transition-all duration-300 hover:scale-105 ${color.bg} ${color.shadow} ${color.hasBorder ? `border-2 ${borderClass}` : ''}`}
                  >
                    {t}
                  </span>
                );
              })}
            </div>
          </div>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
}

