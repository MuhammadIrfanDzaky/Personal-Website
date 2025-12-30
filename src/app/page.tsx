'use client';

import Image from 'next/image';
import GlitchText from '@/components/GlitchText';
import TechBadge from '@/components/TechBadge';
import AnimatedButton from '@/components/AnimatedButton';
import SquaresBackground from '@/components/SquaresBackground';
import { TooltipProvider } from '@/components/Tooltip';
import { 
  FaGithub, 
  FaLinkedin, 
  FaEnvelope, 
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPhp,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaNpm
} from 'react-icons/fa';
import { 
  SiTypescript, 
  SiNextdotjs, 
  SiNestjs, 
  SiPrisma, 
  SiPostgresql, 
  SiMysql,
  SiTailwindcss,
  SiPostman,
  SiSwagger
} from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';

export default function Home() {
  const techStack = {
    frontend: [
      { name: 'Next.js', icon: <SiNextdotjs />, color: 'cyan' as const, iconColor: '#FFFFFF', level: 90, years: '1+' },
      { name: 'React', icon: <FaReact />, color: 'cyan' as const, iconColor: '#61DAFB', level: 85, years: '1+' },
      { name: 'TypeScript', icon: <SiTypescript />, color: 'cyan' as const, iconColor: '#3178C6', level: 85, years: '1+' },
      { name: 'JavaScript', icon: <FaJs />, color: 'cyan' as const, iconColor: '#F7DF1E', level: 90, years: '2+' },
      { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: 'cyan' as const, iconColor: '#06B6D4', level: 90, years: '1+' },
      { name: 'HTML', icon: <FaHtml5 />, color: 'cyan' as const, iconColor: '#E34F26', level: 95, years: '2+' },
      { name: 'CSS', icon: <FaCss3Alt />, color: 'cyan' as const, iconColor: '#1572B6', level: 90, years: '2+' },
    ],
    backend: [
      { name: 'NestJS', icon: <SiNestjs />, color: 'pink' as const, iconColor: '#E0234E', level: 85, years: '1+' },
      { name: 'Node.js', icon: <FaNodeJs />, color: 'pink' as const, iconColor: '#339933', level: 80, years: '1+' },
      { name: 'Prisma ORM', icon: <SiPrisma />, color: 'pink' as const, iconColor: '#2D3748', level: 80, years: '1+' },
      { name: 'PHP', icon: <FaPhp />, color: 'pink' as const, iconColor: '#777BB4', level: 75, years: '2+' },
    ],
    database: [
      { name: 'PostgreSQL', icon: <SiPostgresql />, color: 'green' as const, iconColor: '#4169E1', level: 85, years: '1+' },
      { name: 'MySQL', icon: <SiMysql />, color: 'green' as const, iconColor: '#4479A1', level: 80, years: '2+' },
    ],
    tools: [
      { name: 'Git', icon: <FaGitAlt />, color: 'purple' as const, iconColor: '#F05032', level: 85, years: '2+' },
      { name: 'VS Code', icon: <VscCode />, color: 'purple' as const, iconColor: '#007ACC', level: 90, years: '2+' },
      { name: 'Postman', icon: <SiPostman />, color: 'purple' as const, iconColor: '#FF6C37', level: 85, years: '1+' },
      { name: 'Swagger', icon: <SiSwagger />, color: 'purple' as const, iconColor: '#85EA2D', level: 80, years: '1+' },
      { name: 'npm', icon: <FaNpm />, color: 'purple' as const, iconColor: '#CB3837', level: 85, years: '2+' },
    ],
  };

  return (
    <TooltipProvider delayDuration={200}>
      <div className="min-h-screen bg-dark-900 relative overflow-x-hidden">
        {/* Animated Squares Background */}
        <SquaresBackground
          squareSize={40}
          speed={0.5}
          direction="down"
          borderColor="rgba(0, 229, 255, 0.15)"
          hoverColor={[
            'rgba(0, 229, 255, 0.6)',    // cyan
            'rgba(255, 16, 240, 0.6)',   // pink
            'rgba(168, 85, 247, 0.6)',   // purple
            'rgba(16, 240, 160, 0.6)',   // green
          ]}
        />

      {/* Glowing Orbs Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-neon-cyan/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-neon-pink/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-neon-purple/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 w-full px-6 md:px-12 lg:px-16 pt-20 md:pt-28 pb-24 md:pb-8 flex flex-col">
        
        {/* Hero Section - Full Screen Height */}
        <section className="mb-8 relative flex-1 flex items-center">
          <div className="bg-dark-800/50 backdrop-blur-sm border-2 border-neon-cyan/30 rounded-2xl p-6 md:p-10 lg:p-12 relative overflow-hidden group hover:border-neon-cyan/60 transition-all duration-500 w-full">
            {/* Scanline Effect */}
            <div className="absolute inset-0 pointer-events-none opacity-10">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-cyan to-transparent animate-scan" />
            </div>
            
            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-4 h-4 md:w-8 md:h-8 border-t-2 md:border-t-4 border-l-2 md:border-l-4 border-neon-cyan" />
            <div className="absolute top-0 right-0 w-4 h-4 md:w-8 md:h-8 border-t-2 md:border-t-4 border-r-2 md:border-r-4 border-neon-cyan" />
            <div className="absolute bottom-0 left-0 w-4 h-4 md:w-8 md:h-8 border-b-2 md:border-b-4 border-l-2 md:border-l-4 border-neon-cyan" />
            <div className="absolute bottom-0 right-0 w-4 h-4 md:w-8 md:h-8 border-b-2 md:border-b-4 border-r-2 md:border-r-4 border-neon-cyan" />
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 lg:gap-12 items-center relative z-10">
              {/* Photo Slot with Glitch Effect - 1/4 width */}
              <div className="md:col-span-1 flex justify-center md:justify-start">
                <div className="relative group/photo">
                  <div className="absolute inset-0 bg-neon-cyan/20 blur-xl rounded-full animate-pulse" />
                  <a 
                    href="/profpic.jpg" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-2xl border-4 border-neon-cyan overflow-hidden bg-dark-700 relative hover:border-neon-pink transition-all duration-500 hover:shadow-2xl hover:shadow-neon-cyan hover:rotate-2 transform cursor-pointer"
                    title="Click Me!"
                  >
                    <Image 
                      src="/avatar.png" 
                      alt="Muhammad Irfan Dzaky" 
                      fill
                      sizes="(max-width: 768px) 192px, (max-width: 1024px) 224px, 256px"
                      className="object-cover group-hover/photo:scale-110 transition-transform duration-500"
                      priority
                      quality={90}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neon-cyan/30 to-transparent opacity-0 group-hover/photo:opacity-100 transition-opacity duration-500" />
                  </a>
                  {/* Glitch Lines */}
                  <div className="absolute -right-2 top-1/4 w-20 h-0.5 bg-neon-cyan opacity-0 group-hover/photo:opacity-100 transition-opacity" />
                  <div className="absolute -left-2 bottom-1/4 w-16 h-0.5 bg-neon-pink opacity-0 group-hover/photo:opacity-100 transition-opacity" />
                </div>
              </div>

              {/* Text Content - 3/4 width */}
              <div className="md:col-span-3 space-y-4 md:space-y-6 text-center md:text-left">
                <div className="space-y-3 md:space-y-4">
                  <div>
                    <p className="text-sm md:text-base font-mono text-neon-cyan mb-2 md:mb-3">{'<developer>'}</p>
                    <h2 className="text-xl md:text-3xl lg:text-4xl text-gray-400 font-light mb-3 md:mb-4">
                      Hi! My name is
                    </h2>
                  </div>
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink bg-clip-text text-transparent leading-tight mb-3 md:mb-4">
                    Muhammad Irfan Dzaky
                  </h1>
                  <p className="text-lg md:text-2xl lg:text-3xl text-gray-400 font-light italic mb-4 md:mb-5">
                    Or simply call me <span className="font-mono text-neon-cyan not-italic font-semibold">Jek</span>
                  </p>
                  <div className="flex items-center gap-3 justify-center md:justify-start mb-4 md:mb-6">
                    <div className="h-px w-12 md:w-16 bg-gradient-to-r from-transparent to-neon-cyan" />
                    <p className="text-xl md:text-2xl lg:text-3xl text-gray-400 font-mono">
                      Full Stack Web Developer
                    </p>
                  </div>
                  
                  {/* Brief Bio */}
                  <p className="text-gray-400 text-base md:text-lg lg:text-xl leading-relaxed max-w-3xl text-center md:text-left">
                    Specializing in <span className="text-neon-cyan font-semibold">Next.js</span> & <span className="text-neon-pink font-semibold">NestJS</span>. Building high-quality web applications with modern tech. Fast learner, problem solver, and team collaborator.
                  </p>
                  
                  <p className="text-sm md:text-base font-mono text-neon-cyan mt-4">{'</developer>'}</p>
                </div>
                
                <div className="flex flex-wrap gap-3 md:gap-4 pt-4 md:pt-6 justify-center md:justify-start">
                  <AnimatedButton
                    href="https://github.com/MuhammadIrfanDzaky" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group/btn flex items-center justify-center px-4 md:px-6 py-3 md:py-4 text-sm md:text-base font-mono bg-transparent border-2 border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-dark-900 rounded-none transition-all duration-300 relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center">
                      <FaGithub className="text-lg md:text-xl" />
                      <span className="max-w-0 overflow-hidden group-hover/btn:max-w-xs transition-all duration-300 whitespace-nowrap group-hover/btn:ml-2">GITHUB</span>
                    </span>
                    <div className="absolute inset-0 bg-neon-cyan transform -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-300" />
                  </AnimatedButton>
                  <AnimatedButton
                    href="https://www.linkedin.com/in/mhdirfndzky/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group/btn flex items-center justify-center px-4 md:px-6 py-3 md:py-4 text-sm md:text-base font-mono bg-transparent border-2 border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-dark-900 rounded-none transition-all duration-300 relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center">
                      <FaLinkedin className="text-lg md:text-xl" />
                      <span className="max-w-0 overflow-hidden group-hover/btn:max-w-xs transition-all duration-300 whitespace-nowrap group-hover/btn:ml-2">LINKEDIN</span>
                    </span>
                    <div className="absolute inset-0 bg-neon-purple transform -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-300" />
                  </AnimatedButton>
                  <AnimatedButton
                    href="mailto:irfndzky@gmail.com"
                    className="group/btn flex items-center justify-center px-4 md:px-6 py-3 md:py-4 text-sm md:text-base font-mono bg-transparent border-2 border-neon-pink text-neon-pink hover:bg-neon-pink hover:text-dark-900 rounded-none transition-all duration-300 relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center">
                      <FaEnvelope className="text-lg md:text-xl" />
                      <span className="max-w-0 overflow-hidden group-hover/btn:max-w-xs transition-all duration-300 whitespace-nowrap group-hover/btn:ml-2">EMAIL</span>
                    </span>
                    <div className="absolute inset-0 bg-neon-pink transform -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-300" />
                  </AnimatedButton>
                  <AnimatedButton
                    href="/jek's-resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn flex items-center justify-center px-4 md:px-6 py-3 md:py-4 text-sm md:text-base font-mono bg-transparent border-2 border-neon-green text-neon-green hover:bg-neon-green hover:text-dark-900 rounded-none transition-all duration-300 relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center">
                      <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <span className="max-w-0 overflow-hidden group-hover/btn:max-w-xs transition-all duration-300 whitespace-nowrap group-hover/btn:ml-2">RESUME</span>
                    </span>
                    <div className="absolute inset-0 bg-neon-green transform -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-300" />
                  </AnimatedButton>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-5 gap-4 md:gap-6 mb-8">
          
          {/* About Me Section - 3 columns (wider) */}
          <div className="md:col-span-3 bg-dark-800/50 backdrop-blur-sm border-2 border-neon-green/30 rounded-2xl p-4 md:p-6 relative group hover:border-neon-green/60 transition-all duration-500">
            <div className="absolute top-2 right-2 md:top-4 md:right-4 text-neon-green/20 text-4xl md:text-6xl font-mono">01</div>
            
              <div className="relative z-10">
              <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                <div className="w-1 h-6 md:h-8 bg-neon-green flicker-slow" />
                <h3 className="text-lg md:text-2xl font-bold font-mono text-white">
                  <GlitchText text="ABOUT_ME" />
                </h3>
              </div>
              
              {/* Key Highlights */}
              <div className="space-y-3 mb-5 md:mb-6">
                <div className="flex items-start gap-3 group/item hover:translate-x-1 transition-transform">
                  <span className="text-neon-cyan text-xl md:text-2xl mt-0.5">▹</span>
                  <p className="text-gray-300 text-base md:text-lg"><span className="text-neon-cyan font-semibold">Full-stack developer</span> specializing in <span className="text-white">Next.js</span> and <span className="text-white">NestJS</span></p>
                </div>
                <div className="flex items-start gap-3 group/item hover:translate-x-1 transition-transform">
                  <span className="text-neon-purple text-xl md:text-2xl mt-0.5">▹</span>
                  <p className="text-gray-300 text-base md:text-lg">Passionate about <span className="text-white">rapid learning</span>, <span className="text-white">problem-solving</span>, and leveraging <span className="text-white">AI tools</span></p>
                </div>
                <div className="flex items-start gap-3 group/item hover:translate-x-1 transition-transform">
                  <span className="text-neon-green text-xl md:text-2xl mt-0.5">▹</span>
                  <p className="text-gray-300 text-base md:text-lg">Aspiring <span className="text-white font-semibold">remote software engineer</span> merging technical excellence with entrepreneurial vision</p>
                </div>
              </div>
              
              {/* Stats Row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-4 md:mb-5">
                <div className="border-2 border-neon-green/30 p-3 md:p-4 relative group/stat hover:border-neon-green hover:scale-105 transition-all duration-300">
                  <div className="absolute top-0 left-0 w-2 h-2 bg-neon-green" />
                  <div className="absolute bottom-0 right-0 w-2 h-2 bg-neon-green" />
                  <p className="text-gray-400 text-sm font-mono mb-1">EXPERIENCE</p>
                  <p className="text-neon-green font-bold text-2xl md:text-3xl font-mono">1+ YR</p>
                </div>
                
                <div className="border-2 border-neon-cyan/30 p-3 md:p-4 relative group/stat hover:border-neon-cyan hover:scale-105 transition-all duration-300">
                  <div className="absolute top-0 left-0 w-2 h-2 bg-neon-cyan" />
                  <div className="absolute bottom-0 right-0 w-2 h-2 bg-neon-cyan" />
                  <p className="text-gray-400 text-sm font-mono mb-1">PROJECTS</p>
                  <p className="text-neon-cyan font-bold text-2xl md:text-3xl font-mono">4+</p>
                </div>
                
                <div className="border-2 border-neon-pink/30 p-3 md:p-4 relative group/stat hover:border-neon-pink hover:scale-105 transition-all duration-300">
                  <div className="absolute top-0 left-0 w-2 h-2 bg-neon-pink" />
                  <div className="absolute bottom-0 right-0 w-2 h-2 bg-neon-pink" />
                  <p className="text-gray-400 text-sm font-mono mb-1">TECH STACK</p>
                  <p className="text-neon-pink font-bold text-2xl md:text-3xl font-mono">15+</p>
                </div>
                
                <div className="border-2 border-neon-purple/30 p-3 md:p-4 relative group/stat hover:border-neon-purple hover:scale-105 transition-all duration-300">
                  <div className="absolute top-0 left-0 w-2 h-2 bg-neon-purple" />
                  <div className="absolute bottom-0 right-0 w-2 h-2 bg-neon-purple" />
                  <p className="text-gray-400 text-sm font-mono mb-1">COFFEE</p>
                  <p className="text-neon-purple font-bold text-2xl md:text-3xl font-mono">∞</p>
                </div>
              </div>
              
              {/* Info List */}
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                <div className="flex items-center gap-2 text-sm md:text-base">
                  <span className="text-neon-green font-mono">»</span>
                  <span className="text-gray-400">FOCUS:</span>
                  <span className="text-white font-mono">Full Stack Development</span>
                </div>
                <div className="flex items-center gap-2 text-sm md:text-base">
                  <span className="text-neon-cyan font-mono">»</span>
                  <span className="text-gray-400">LOCATION:</span>
                  <span className="text-white font-mono">Indonesia</span>
                </div>
                <div className="flex items-center gap-2 text-sm md:text-base">
                  <span className="text-neon-pink font-mono">»</span>
                  <span className="text-gray-400">STATUS:</span>
                  <span className="text-neon-green font-mono">Available for work</span>
                </div>
              </div>
            </div>
          </div>

          {/* Education Section - 2 columns (narrower) */}
          <div className="md:col-span-2 bg-dark-800/50 backdrop-blur-sm border-2 border-neon-purple/30 rounded-2xl p-4 md:p-6 relative group hover:border-neon-purple/60 transition-all duration-500">
            <div className="absolute top-2 right-2 md:top-4 md:right-4 text-neon-purple/20 text-4xl md:text-6xl font-mono">02</div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                <div className="w-1 h-6 md:h-8 bg-neon-purple flicker-slow" />
                <h3 className="text-lg md:text-2xl font-bold font-mono text-white">
                  <GlitchText text="EDUCATION" delay={4000} />
                </h3>
              </div>
              
              <div className="space-y-5 md:space-y-6 relative">
                {/* Vertical Timeline Line */}
                <div className="absolute left-2 top-3 bottom-3 w-0.5 bg-gradient-to-b from-neon-cyan via-neon-purple to-transparent opacity-30" />
                
                {/* Bootcamp */}
                <div className="relative pl-8 group/edu hover:translate-x-1 transition-transform">
                  <div className="absolute left-0 top-1 w-4 h-4 rounded-full bg-neon-cyan border-2 border-dark-800 group-hover/edu:scale-125 group-hover/edu:shadow-lg group-hover/edu:shadow-neon-cyan/50 transition-all" />
                  <div className="bg-dark-700/50 border border-neon-cyan/20 rounded-lg p-3 group-hover/edu:border-neon-cyan/60 transition-all">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <p className="text-neon-cyan font-bold text-base md:text-lg font-mono">RevoU</p>
                      <span className="px-2 py-1 bg-neon-cyan/10 border border-neon-cyan/30 rounded text-neon-cyan text-sm font-mono">2025</span>
                    </div>
                    <p className="text-gray-300 text-sm md:text-base font-semibold mb-1">Full Stack Software Engineer</p>
                    <p className="text-gray-400 text-sm font-mono mb-2">Feb - Aug 2025</p>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      <span className="px-2 py-1 bg-neon-cyan/5 text-neon-cyan text-sm rounded border border-neon-cyan/20">Next.js</span>
                      <span className="px-2 py-1 bg-neon-pink/5 text-neon-pink text-sm rounded border border-neon-pink/20">NestJS</span>
                      <span className="px-2 py-1 bg-neon-green/5 text-neon-green text-sm rounded border border-neon-green/20">PostgreSQL</span>
                    </div>
                  </div>
                </div>
                
                {/* University */}
                <div className="relative pl-8 group/edu hover:translate-x-1 transition-transform">
                  <div className="absolute left-0 top-1 w-4 h-4 rounded-full bg-neon-purple border-2 border-dark-800 group-hover/edu:scale-125 group-hover/edu:shadow-lg group-hover/edu:shadow-neon-purple/50 transition-all" />
                  <div className="bg-dark-700/50 border border-neon-purple/20 rounded-lg p-3 group-hover/edu:border-neon-purple/60 transition-all">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <p className="text-neon-purple font-bold text-base md:text-lg font-mono leading-tight">UNPAB</p>
                      <span className="px-2 py-1 bg-neon-purple/10 border border-neon-purple/30 rounded text-neon-purple text-sm font-mono whitespace-nowrap">GPA 3.89</span>
                    </div>
                    <p className="text-gray-300 text-sm md:text-base font-semibold mb-1">Bachelor of Computer Science</p>
                    <p className="text-gray-400 text-sm font-mono mb-2">2020 - 2024</p>
                    <p className="text-gray-400 text-sm leading-relaxed mb-2">Thesis: Web-Based MIS for Internship Student Report Data</p>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      <span className="px-2 py-1 bg-orange-500/5 text-orange-500 text-sm rounded border border-orange-500/20">HTML</span>
                      <span className="px-2 py-1 bg-blue-500/5 text-blue-500 text-sm rounded border border-blue-500/20">CSS</span>
                      <span className="px-2 py-1 bg-yellow-500/5 text-yellow-500 text-sm rounded border border-yellow-500/20">JavaScript</span>
                      <span className="px-2 py-1 bg-purple-500/5 text-purple-500 text-sm rounded border border-purple-500/20">PHP</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack - Full Width */}
        <section className="mb-8">
          <div className="bg-dark-800/50 backdrop-blur-sm border-2 border-neon-pink/30 rounded-2xl p-4 md:p-6 relative group hover:border-neon-pink/60 transition-all duration-500">
            <div className="absolute top-2 right-2 md:top-4 md:right-4 text-neon-pink/20 text-4xl md:text-6xl font-mono">03</div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                <div className="w-1 h-6 md:h-8 bg-neon-pink flicker-slow" />
                <h3 className="text-lg md:text-2xl font-bold font-mono text-white">
                  <GlitchText text="TECH_STACK" delay={3500} />
                </h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                {/* Frontend */}
                <div className="border-2 border-neon-cyan/30 p-3 md:p-5 relative group/tech hover:border-neon-cyan transition-all duration-300">
                  <div className="absolute top-0 left-0 w-2 h-2 md:w-3 md:h-3 bg-neon-cyan animate-pulse" />
                  <div className="absolute bottom-0 right-0 w-2 h-2 md:w-3 md:h-3 bg-neon-cyan animate-pulse" style={{ animationDelay: '0.5s' }} />
                  <h4 className="text-sm md:text-lg font-bold text-neon-cyan mb-3 md:mb-4 font-mono flex items-center gap-2">
                    <span>&lt;</span>
                    FRONTEND
                    <span>/&gt;</span>
                  </h4>
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    {techStack.frontend.map((tech, index) => (
                      <TechBadge key={index} name={tech.name} icon={tech.icon} color={tech.color} iconColor={tech.iconColor} iconOnly showTooltip />
                    ))}
                  </div>
                </div>

                {/* Backend */}
                <div className="border-2 border-neon-pink/30 p-3 md:p-5 relative group/tech hover:border-neon-pink transition-all duration-300">
                  <div className="absolute top-0 left-0 w-2 h-2 md:w-3 md:h-3 bg-neon-pink animate-pulse" />
                  <div className="absolute bottom-0 right-0 w-2 h-2 md:w-3 md:h-3 bg-neon-pink animate-pulse" style={{ animationDelay: '0.5s' }} />
                  <h4 className="text-sm md:text-lg font-bold text-neon-pink mb-3 md:mb-4 font-mono flex items-center gap-2">
                    <span>&lt;</span>
                    BACKEND
                    <span>/&gt;</span>
                  </h4>
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    {techStack.backend.map((tech, index) => (
                      <TechBadge key={index} name={tech.name} icon={tech.icon} color={tech.color} iconColor={tech.iconColor} iconOnly showTooltip />
                    ))}
                  </div>
                </div>

                {/* Database */}
                <div className="border-2 border-neon-green/30 p-3 md:p-5 relative group/tech hover:border-neon-green transition-all duration-300">
                  <div className="absolute top-0 left-0 w-2 h-2 md:w-3 md:h-3 bg-neon-green animate-pulse" />
                  <div className="absolute bottom-0 right-0 w-2 h-2 md:w-3 md:h-3 bg-neon-green animate-pulse" style={{ animationDelay: '0.5s' }} />
                  <h4 className="text-sm md:text-lg font-bold text-neon-green mb-3 md:mb-4 font-mono flex items-center gap-2">
                    <span>&lt;</span>
                    DATABASE
                    <span>/&gt;</span>
                  </h4>
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    {techStack.database.map((tech, index) => (
                      <TechBadge key={index} name={tech.name} icon={tech.icon} color={tech.color} iconColor={tech.iconColor} iconOnly showTooltip />
                    ))}
                  </div>
                </div>

                {/* Tools */}
                <div className="border-2 border-neon-purple/30 p-3 md:p-5 relative group/tech hover:border-neon-purple transition-all duration-300">
                  <div className="absolute top-0 left-0 w-2 h-2 md:w-3 md:h-3 bg-neon-purple animate-pulse" />
                  <div className="absolute bottom-0 right-0 w-2 h-2 md:w-3 md:h-3 bg-neon-purple animate-pulse" style={{ animationDelay: '0.5s' }} />
                  <h4 className="text-sm md:text-lg font-bold text-neon-purple mb-3 md:mb-4 font-mono flex items-center gap-2">
                    <span>&lt;</span>
                    TOOLS
                    <span>/&gt;</span>
                  </h4>
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    {techStack.tools.map((tech, index) => (
                      <TechBadge key={index} name={tech.name} icon={tech.icon} color={tech.color} iconColor={tech.iconColor} iconOnly showTooltip />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-auto pt-6 md:pt-8 pb-3 md:pb-4 text-center">
          <div className="flex items-center justify-center gap-2 text-gray-400 text-xs md:text-sm font-mono">
            <span className="text-neon-cyan">{'>> '}</span>
            <span>Designed & Built by Muhammad Irfan Dzaky</span>
            <span className="text-neon-cyan">{' <<'}</span>
          </div>
        </footer>

        </div>
      </div>
    </TooltipProvider>
  );
}
