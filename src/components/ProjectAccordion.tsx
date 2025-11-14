
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
                // Official color mapping for each technology (with neon glow)
                const techColors: Record<string, { bg: string; text: string; border: string; shadow: string }> = {
                  'Next.js': { bg: theme === 'dark' ? 'bg-[#000000]' : 'bg-[#FFFFFF]', text: theme === 'dark' ? 'text-white' : 'text-black', border: 'border-[#000000]', shadow: 'shadow-[0_0_8px_#000]' },
                  'Tailwind': { bg: 'bg-[#06B6D4]', text: 'text-white', border: 'border-[#06B6D4]', shadow: 'shadow-[0_0_8px_#06B6D4]' },
                  'NestJS': { bg: 'bg-[#E0234E]', text: 'text-white', border: 'border-[#E0234E]', shadow: 'shadow-[0_0_8px_#E0234E]' },
                  'PostgreSQL': { bg: 'bg-[#336791]', text: 'text-white', border: 'border-[#336791]', shadow: 'shadow-[0_0_8px_#336791]' },
                  'Prisma ORM': { bg: 'bg-[#2D3748]', text: 'text-white', border: 'border-[#2D3748]', shadow: 'shadow-[0_0_8px_#2D3748]' },
                  'Framer Motion': { bg: 'bg-[#0055FF]', text: 'text-white', border: 'border-[#0055FF]', shadow: 'shadow-[0_0_8px_#0055FF]' },
                  'HTML': { bg: 'bg-[#E34F26]', text: 'text-white', border: 'border-[#E34F26]', shadow: 'shadow-[0_0_8px_#E34F26]' },
                  'CSS': { bg: 'bg-[#1572B6]', text: 'text-white', border: 'border-[#1572B6]', shadow: 'shadow-[0_0_8px_#1572B6]' },
                  'Javascript': { bg: 'bg-[#F7DF1E]', text: 'text-black', border: 'border-[#F7DF1E]', shadow: 'shadow-[0_0_8px_#F7DF1E]' },
                  'PHP': { bg: 'bg-[#777BB4]', text: 'text-white', border: 'border-[#777BB4]', shadow: 'shadow-[0_0_8px_#777BB4]' },
                  'MySQL': { bg: 'bg-[#4479A1]', text: 'text-white', border: 'border-[#4479A1]', shadow: 'shadow-[0_0_8px_#4479A1]' },
                };
                const color = techColors[t] || { bg: theme === 'dark' ? 'bg-dark-900/50' : 'bg-gray-100', text: colorClass, border: borderClass, shadow: 'shadow-[0_0_8px_rgba(0,255,255,0.5)]' };
                return (
                  <span
                    key={idx}
                    className={`text-sm font-mono px-2 py-1 ${color.bg} ${color.text} ${color.border} ${color.shadow} rounded border`}
                    style={{ filter: 'brightness(1.2)' }}
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

