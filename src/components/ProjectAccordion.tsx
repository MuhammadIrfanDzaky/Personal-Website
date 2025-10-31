
import * as Accordion from '@radix-ui/react-accordion';
import { useRef } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { useTheme } from '@/contexts/ThemeContext';
type ProjectAccordionProps = {
  description: string;
  keyFeatures: string[];
  tech: string[];
  color: string;
  contribution?: string[];
  demo?: string;
  resource?: React.ReactNode;
};

export default function ProjectAccordion({ description, keyFeatures, tech, color, contribution, demo, resource }: ProjectAccordionProps) {
  const { theme } = useTheme();
  // Neon color classes
  const colorClass = color === 'cyan' ? 'text-neon-cyan' : color === 'pink' ? 'text-neon-pink' : color === 'purple' ? 'text-neon-purple' : 'text-neon-green';
  const borderClass = color === 'cyan' ? 'border-neon-cyan/40' : color === 'pink' ? 'border-neon-pink/40' : color === 'purple' ? 'border-neon-purple/40' : 'border-neon-green/40';
  // Theme-based classes
  const bgClass = theme === 'dark' ? 'bg-dark-900/70' : 'bg-white/80';
  const borderThemeClass = theme === 'dark' ? 'border-dark-700' : 'border-gray-300';
  const textClass = theme === 'dark' ? 'text-gray-300' : 'text-gray-700';

  // Helper for smooth expand animation
  function AnimatedContent({ children, ...props }: React.ComponentProps<typeof Accordion.Content>) {
    const ref = useRef<HTMLDivElement>(null);
    return (
      <Accordion.Content
        {...props}
        className={`overflow-hidden ${bgClass} data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up`}
        ref={ref}
      >
        <div className={`px-6 pb-4 pt-2 text-sm ${textClass}`}>
          {children}
        </div>
      </Accordion.Content>
    );
  }

  return (
    <Accordion.Root type="single" collapsible className={`w-full rounded-xl border ${borderThemeClass} ${bgClass} shadow-inner`}>
      <>
        <Accordion.Item value="desc" className={`border-b ${borderThemeClass}`}>
          <Accordion.Header>
            <Accordion.Trigger className={`flex w-full items-center justify-between px-4 py-3 font-mono text-base font-bold ${colorClass} ${textClass} transition-colors ${theme === 'dark' ? 'hover:bg-dark-800/60 data-[state=open]:bg-dark-800/80' : 'hover:bg-gray-100 data-[state=open]:bg-gray-100'} focus:outline-none`}>
              Brief Description
              <FaChevronDown className="ml-2 transition-transform duration-300 data-[state=open]:rotate-180" />
            </Accordion.Trigger>
          </Accordion.Header>
          <AnimatedContent>
            {description}
          </AnimatedContent>
        </Accordion.Item>
        <Accordion.Item value="features" className={`border-b ${borderThemeClass}`}>
          <Accordion.Header>
            <Accordion.Trigger className={`flex w-full items-center justify-between px-4 py-3 font-mono text-base font-bold ${colorClass} ${textClass} transition-colors ${theme === 'dark' ? 'hover:bg-dark-800/60 data-[state=open]:bg-dark-800/80' : 'hover:bg-gray-100 data-[state=open]:bg-gray-100'} focus:outline-none`}>
              Key Features
              <FaChevronDown className="ml-2 transition-transform duration-300 data-[state=open]:rotate-180" />
            </Accordion.Trigger>
          </Accordion.Header>
          <AnimatedContent>
            <ul className="list-disc list-inside space-y-1">
              {keyFeatures.map((feature: string, idx: number) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </AnimatedContent>
        </Accordion.Item>
        {contribution && contribution.length > 0 && (
          <Accordion.Item value="contribution" className={`border-b ${borderThemeClass}`}>
            <Accordion.Header>
              <Accordion.Trigger className={`flex w-full items-center justify-between px-4 py-3 font-mono text-base font-bold ${colorClass} ${textClass} transition-colors ${theme === 'dark' ? 'hover:bg-dark-800/60 data-[state=open]:bg-dark-800/80' : 'hover:bg-gray-100 data-[state=open]:bg-gray-100'} focus:outline-none`}>
                Contribution
                <FaChevronDown className="ml-2 transition-transform duration-300 data-[state=open]:rotate-180" />
              </Accordion.Trigger>
            </Accordion.Header>
            <AnimatedContent>
              <ul className="list-disc list-inside space-y-1">
                {contribution.map((item: string, idx: number) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </AnimatedContent>
          </Accordion.Item>
        )}
        {resource && (
          <Accordion.Item value="resource" className={`border-b ${borderThemeClass}`}>
            <Accordion.Header>
              <Accordion.Trigger className={`flex w-full items-center justify-between px-4 py-3 font-mono text-base font-bold ${colorClass} ${textClass} transition-colors ${theme === 'dark' ? 'hover:bg-dark-800/60 data-[state=open]:bg-dark-800/80' : 'hover:bg-gray-100 data-[state=open]:bg-gray-100'} focus:outline-none`}>
                Resource
                <FaChevronDown className="ml-2 transition-transform duration-300 data-[state=open]:rotate-180" />
              </Accordion.Trigger>
            </Accordion.Header>
            <AnimatedContent>
              {resource}
            </AnimatedContent>
          </Accordion.Item>
        )}
        <Accordion.Item value="tech" className="">
          <Accordion.Header>
            <Accordion.Trigger className={`flex w-full items-center justify-between px-4 py-3 font-mono text-base font-bold ${colorClass} ${textClass} transition-colors ${theme === 'dark' ? 'hover:bg-dark-800/60 data-[state=open]:bg-dark-800/80' : 'hover:bg-gray-100 data-[state=open]:bg-gray-100'} focus:outline-none`}>
              Tech Stack
              <FaChevronDown className="ml-2 transition-transform duration-300 data-[state=open]:rotate-180" />
            </Accordion.Trigger>
          </Accordion.Header>
          <AnimatedContent>
            <div className="flex flex-wrap gap-2">
              {tech.map((t: string, idx: number) => (
                <span key={idx} className={`text-xs font-mono px-2 py-1 ${theme === 'dark' ? 'bg-dark-900/50' : 'bg-gray-100'} border ${borderClass} ${colorClass} rounded`}>{t}</span>
              ))}
            </div>
          </AnimatedContent>
        </Accordion.Item>
      </>
    </Accordion.Root>
  );
}

