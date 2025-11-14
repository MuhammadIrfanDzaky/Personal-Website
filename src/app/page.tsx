'use client';

import Image from 'next/image';
import GlitchText from '@/components/GlitchText';
import TechBadge from '@/components/TechBadge';
import AnimatedButton from '@/components/AnimatedButton';
import SquaresBackground from '@/components/SquaresBackground';
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
      { name: 'HTML', icon: <FaHtml5 />, color: 'cyan' as const, iconColor: '#E34F26' },      // HTML - orange
      { name: 'CSS', icon: <FaCss3Alt />, color: 'cyan' as const, iconColor: '#1572B6' },     // CSS - blue
      { name: 'JavaScript', icon: <FaJs />, color: 'cyan' as const, iconColor: '#F7DF1E' },   // JS - yellow
      { name: 'TypeScript', icon: <SiTypescript />, color: 'cyan' as const, iconColor: '#3178C6' },  // TS - blue
      { name: 'React', icon: <FaReact />, color: 'cyan' as const, iconColor: '#61DAFB' },     // React - cyan
      { name: 'Next.js', icon: <SiNextdotjs />, color: 'cyan' as const, iconColor: '#FFFFFF' },    // Next.js - white
      { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: 'cyan' as const, iconColor: '#06B6D4' }, // Tailwind - cyan
    ],
    backend: [
      { name: 'PHP', icon: <FaPhp />, color: 'pink' as const, iconColor: '#777BB4' },       // PHP - purple
      { name: 'Node.js', icon: <FaNodeJs />, color: 'pink' as const, iconColor: '#339933' }, // Node - green
      { name: 'NestJS', icon: <SiNestjs />, color: 'pink' as const, iconColor: '#E0234E' },   // NestJS - red
      { name: 'Prisma ORM', icon: <SiPrisma />, color: 'pink' as const, iconColor: '#2D3748' }, // Prisma - dark gray
    ],
    database: [
      { name: 'PostgreSQL', icon: <SiPostgresql />, color: 'green' as const, iconColor: '#4169E1' },  // PostgreSQL - blue
      { name: 'MySQL', icon: <SiMysql />, color: 'green' as const, iconColor: '#4479A1' },          // MySQL - blue
    ],
    tools: [
      { name: 'Git', icon: <FaGitAlt />, color: 'purple' as const, iconColor: '#F05032' },      // Git - orange
      { name: 'npm', icon: <FaNpm />, color: 'purple' as const, iconColor: '#CB3837' },         // npm - red
      { name: 'Postman', icon: <SiPostman />, color: 'purple' as const, iconColor: '#FF6C37' }, // Postman - orange
      { name: 'Swagger', icon: <SiSwagger />, color: 'purple' as const, iconColor: '#85EA2D' }, // Swagger - green
      { name: 'VS Code', icon: <VscCode />, color: 'purple' as const, iconColor: '#007ACC' },   // VS Code - blue
    ],
  };

  return (
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

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-8 min-h-screen flex flex-col">
        
        {/* Hero Section - Full Width Glitch Style */}
        <section className="mb-8 relative">
          <div className="bg-dark-800/50 backdrop-blur-sm border-2 border-neon-cyan/30 rounded-2xl p-8 relative overflow-hidden group hover:border-neon-cyan/60 transition-all duration-500">
            {/* Scanline Effect */}
            <div className="absolute inset-0 pointer-events-none opacity-10">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-cyan to-transparent animate-scan" />
            </div>
            
            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-neon-cyan" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-neon-cyan" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-neon-cyan" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-neon-cyan" />
            
            <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
              {/* Photo Slot with Glitch Effect */}
              <div className="flex-shrink-0 relative group/photo">
                <div className="absolute inset-0 bg-neon-cyan/20 blur-xl rounded-full animate-pulse" />
                <a 
                  href="/profpic.jpg" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-40 h-40 lg:w-48 lg:h-48 rounded-2xl border-4 border-neon-cyan overflow-hidden bg-dark-700 relative hover:border-neon-pink transition-all duration-500 hover:shadow-2xl hover:shadow-neon-cyan hover:rotate-2 transform cursor-pointer"
                  title="Click Me!"
                >
                  <Image 
                    src="/avatar.png" 
                    alt="Muhammad Irfan Dzaky" 
                    fill
                    sizes="(max-width: 768px) 160px, 192px"
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

              {/* Text Content */}
              <div className="space-y-4 flex-1">
                <div className="space-y-3">
                  <div className="inline-block">
                    <p className="text-sm font-mono text-neon-cyan mb-2">{'<developer>'}</p>
                    <h2 className="text-2xl lg:text-3xl text-gray-400 font-light">
                      Hi! My name is
                    </h2>
                  </div>
                  <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink bg-clip-text text-transparent leading-tight">
                    Muhammad Irfan Dzaky
                  </h1>
                  <div className="flex items-center gap-3">
                    <div className="h-px w-12 bg-gradient-to-r from-transparent to-neon-cyan" />
                    <p className="text-xl lg:text-2xl text-gray-500 font-mono">
                      Full Stack Web Developer
                    </p>
                  </div>
                  <p className="text-sm font-mono text-neon-cyan">{'</developer>'}</p>
                </div>
                
                <div className="flex flex-wrap gap-3 pt-4">
                  <AnimatedButton
                    href="https://github.com/MuhammadIrfanDzaky" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group/btn flex items-center justify-center px-4 py-3 text-sm font-mono bg-transparent border-2 border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-dark-900 rounded-none transition-all duration-300 relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center">
                      <FaGithub className="text-lg" />
                      <span className="max-w-0 overflow-hidden group-hover/btn:max-w-xs transition-all duration-300 whitespace-nowrap group-hover/btn:ml-2">GITHUB</span>
                    </span>
                    <div className="absolute inset-0 bg-neon-cyan transform -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-300" />
                  </AnimatedButton>
                  <AnimatedButton
                    href="https://www.linkedin.com/in/mhdirfndzky/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group/btn flex items-center justify-center px-4 py-3 text-sm font-mono bg-transparent border-2 border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-dark-900 rounded-none transition-all duration-300 relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center">
                      <FaLinkedin className="text-lg" />
                      <span className="max-w-0 overflow-hidden group-hover/btn:max-w-xs transition-all duration-300 whitespace-nowrap group-hover/btn:ml-2">LINKEDIN</span>
                    </span>
                    <div className="absolute inset-0 bg-neon-purple transform -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-300" />
                  </AnimatedButton>
                  <AnimatedButton
                    href="mailto:irfndzky@gmail.com"
                    className="group/btn flex items-center justify-center px-4 py-3 text-sm font-mono bg-transparent border-2 border-neon-pink text-neon-pink hover:bg-neon-pink hover:text-dark-900 rounded-none transition-all duration-300 relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center">
                      <FaEnvelope className="text-lg" />
                      <span className="max-w-0 overflow-hidden group-hover/btn:max-w-xs transition-all duration-300 whitespace-nowrap group-hover/btn:ml-2">EMAIL</span>
                    </span>
                    <div className="absolute inset-0 bg-neon-pink transform -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-300" />
                  </AnimatedButton>
                  <AnimatedButton
                    href="/jek's-resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn flex items-center justify-center px-4 py-3 text-sm font-mono bg-transparent border-2 border-neon-green text-neon-green hover:bg-neon-green hover:text-dark-900 rounded-none transition-all duration-300 relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        <div className="grid md:grid-cols-5 gap-6 mb-8">
          
          {/* About Me Section - 3 columns (wider) */}
          <div className="md:col-span-3 bg-dark-800/50 backdrop-blur-sm border-2 border-neon-green/30 rounded-2xl p-6 relative group hover:border-neon-green/60 transition-all duration-500">
            <div className="absolute top-4 right-4 text-neon-green/20 text-6xl font-mono">01</div>
            
              <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-neon-green flicker-slow" />
                <h3 className="text-2xl font-bold font-mono text-white">
                  <GlitchText text="ABOUT_ME" />
                </h3>
              </div>
              <p className="text-gray-400 text-base leading-relaxed mb-6 font-light">
              I am a proactive and adaptable <strong className="text-gray-300 font-semibold">full-stack web developer</strong> with hands-on experience building web-based systems using modern frameworks such as <strong className="text-gray-300 font-semibold">Next.js</strong> and <strong className="text-gray-300 font-semibold">NestJS</strong>, combined with solid skills in <strong className="text-gray-300 font-semibold">JavaScript</strong>, <strong className="text-gray-300 font-semibold">PHP</strong>, and <strong className="text-gray-300 font-semibold">database management</strong>. Committed to effective communication and teamwork, I excel in collaborating with diverse teams to deliver <strong className="text-gray-300 font-semibold">high-quality, user-friendly applications</strong>. My recent project, <strong className="text-gray-300 font-semibold">DRIBBLE</strong>, a futsal booking management system, showcases my ability to <strong className="text-gray-300 font-semibold">learn rapidly</strong>, <strong className="text-gray-300 font-semibold">solve complex problems</strong>, and integrate new technologies efficiently. I&apos;m proficient in <strong className="text-gray-300 font-semibold">self-learning</strong>, <strong className="text-gray-300 font-semibold">critical thinking</strong>, and leveraging <strong className="text-gray-300 font-semibold">AI tools</strong> to drive productivity and deliver impactful solutions. As an aspiring <strong className="text-gray-300 font-semibold">remote software engineer</strong>, I&apos;m building a career that merges technical excellence with entrepreneurial vision in the tech industry.
              </p>
              
              {/* Stats Row */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="border-2 border-neon-green/30 p-4 relative group hover:border-neon-green transition-all duration-300">
                  <div className="absolute top-0 left-0 w-2 h-2 bg-neon-green" />
                  <div className="absolute bottom-0 right-0 w-2 h-2 bg-neon-green" />
                  <p className="text-gray-500 text-sm font-mono mb-2">EXPERIENCE</p>
                  <p className="text-neon-green font-bold text-2xl font-mono">{'>'}1 YR</p>
                </div>
                
                <div className="border-2 border-neon-cyan/30 p-4 relative group hover:border-neon-cyan transition-all duration-300">
                  <div className="absolute top-0 left-0 w-2 h-2 bg-neon-cyan" />
                  <div className="absolute bottom-0 right-0 w-2 h-2 bg-neon-cyan" />
                  <p className="text-gray-500 text-sm font-mono mb-2">PROJECTS</p>
                  <p className="text-neon-cyan font-bold text-2xl font-mono">4</p>
                </div>
              </div>
              
              {/* Info List */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <span className="text-neon-green font-mono">&gt;&gt;</span>
                  <span className="text-gray-500">FOCUS:</span>
                  <span className="text-white font-mono">Full Stack Development</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <span className="text-neon-cyan font-mono">&gt;&gt;</span>
                  <span className="text-gray-500">LOCATION:</span>
                  <span className="text-white font-mono">Indonesia</span>
                </div>
              </div>
            </div>
          </div>

          {/* Education Section - 2 columns (narrower) */}
          <div className="md:col-span-2 bg-dark-800/50 backdrop-blur-sm border-2 border-neon-purple/30 rounded-2xl p-6 relative group hover:border-neon-purple/60 transition-all duration-500">
            <div className="absolute top-4 right-4 text-neon-purple/20 text-6xl font-mono">02</div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-neon-purple flicker-slow" />
                <h3 className="text-2xl font-bold font-mono text-white">
                  <GlitchText text="EDUCATION" delay={4000} />
                </h3>
              </div>
              
              <div className="space-y-6">
                {/* Bootcamp */}
                <div className="border-l-2 border-neon-cyan pl-4 space-y-2 relative before:content-[''] before:absolute before:left-[-5px] before:top-0 before:w-2 before:h-2 before:bg-neon-cyan before:rounded-full">
                  <p className="text-neon-cyan font-bold text-lg font-mono">RevoU</p>
                  <p className="text-gray-300 text-base">Full Stack Software Engineer</p>
                  <p className="text-gray-500 text-sm font-mono">[ February - August 2025 ]</p>
                  <ul className="text-gray-400 text-sm space-y-1 mt-2">
                    <li className="flex items-start gap-2">
                      <span className="text-neon-cyan mt-1">&gt;</span>
                      <span>Intensive bootcamp covering frontend, backend, and database technologies</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-neon-cyan mt-1">&gt;</span>
                      <span>Built full-stack project using Next.js, NestJS, and PostgreSQL</span>
                    </li>
                  </ul>
                </div>
                
                {/* University */}
                <div className="border-l-2 border-neon-purple pl-4 space-y-2 relative before:content-[''] before:absolute before:left-[-5px] before:top-0 before:w-2 before:h-2 before:bg-neon-purple before:rounded-full">
                  <p className="text-neon-purple font-bold text-lg font-mono">Universitas Pembangunan Panca Budi</p>
                  <p className="text-gray-300 text-base">Bachelor of Computer Science (S.Kom)</p>
                  <p className="text-gray-500 text-sm font-mono">[ 2020 - 2024 ] • GPA: 3.89/4.00</p>
                  <ul className="text-gray-400 text-sm space-y-1 mt-2">
                    <li className="flex items-start gap-2">
                      <span className="text-neon-purple mt-1">&gt;</span>
                      <span>Thesis: <br/>Web-Based Management Information System Design for Internship Student Report Data for Mentor (Case Study:Department of Communication and Information Technology Medan)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack - Full Width */}
        <section className="mb-8">
          <div className="bg-dark-800/50 backdrop-blur-sm border-2 border-neon-pink/30 rounded-2xl p-6 relative group hover:border-neon-pink/60 transition-all duration-500">
            <div className="absolute top-4 right-4 text-neon-pink/20 text-6xl font-mono">03</div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-neon-pink flicker-slow" />
                <h3 className="text-2xl font-bold font-mono text-white">
                  <GlitchText text="TECH_STACK" delay={3500} />
                </h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* Frontend */}
                <div className="border-2 border-neon-cyan/30 p-5 relative group/tech hover:border-neon-cyan transition-all duration-300">
                  <div className="absolute top-0 left-0 w-3 h-3 bg-neon-cyan animate-pulse" />
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-neon-cyan animate-pulse" style={{ animationDelay: '0.5s' }} />
                  <h4 className="text-lg font-bold text-neon-cyan mb-4 font-mono flex items-center gap-2">
                    <span>&lt;</span>
                    FRONTEND
                    <span>/&gt;</span>
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {techStack.frontend.map((tech, index) => (
                      <TechBadge key={index} name={tech.name} icon={tech.icon} color={tech.color} iconColor={tech.iconColor} iconOnly />
                    ))}
                  </div>
                </div>

                {/* Backend */}
                <div className="border-2 border-neon-pink/30 p-5 relative group/tech hover:border-neon-pink transition-all duration-300">
                  <div className="absolute top-0 left-0 w-3 h-3 bg-neon-pink animate-pulse" />
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-neon-pink animate-pulse" style={{ animationDelay: '0.5s' }} />
                  <h4 className="text-lg font-bold text-neon-pink mb-4 font-mono flex items-center gap-2">
                    <span>&lt;</span>
                    BACKEND
                    <span>/&gt;</span>
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {techStack.backend.map((tech, index) => (
                      <TechBadge key={index} name={tech.name} icon={tech.icon} color={tech.color} iconColor={tech.iconColor} iconOnly />
                    ))}
                  </div>
                </div>

                {/* Database */}
                <div className="border-2 border-neon-green/30 p-5 relative group/tech hover:border-neon-green transition-all duration-300">
                  <div className="absolute top-0 left-0 w-3 h-3 bg-neon-green animate-pulse" />
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-neon-green animate-pulse" style={{ animationDelay: '0.5s' }} />
                  <h4 className="text-lg font-bold text-neon-green mb-4 font-mono flex items-center gap-2">
                    <span>&lt;</span>
                    DATABASE
                    <span>/&gt;</span>
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {techStack.database.map((tech, index) => (
                      <TechBadge key={index} name={tech.name} icon={tech.icon} color={tech.color} iconColor={tech.iconColor} iconOnly />
                    ))}
                  </div>
                </div>

                {/* Tools */}
                <div className="border-2 border-neon-purple/30 p-5 relative group/tech hover:border-neon-purple transition-all duration-300">
                  <div className="absolute top-0 left-0 w-3 h-3 bg-neon-purple animate-pulse" />
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-neon-purple animate-pulse" style={{ animationDelay: '0.5s' }} />
                  <h4 className="text-lg font-bold text-neon-purple mb-4 font-mono flex items-center gap-2">
                    <span>&lt;</span>
                    TOOLS
                    <span>/&gt;</span>
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {techStack.tools.map((tech, index) => (
                      <TechBadge key={index} name={tech.name} icon={tech.icon} color={tech.color} iconColor={tech.iconColor} iconOnly />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-auto pt-8 pb-4 text-center">
          <div className="flex items-center justify-center gap-2 text-gray-500 text-sm font-mono">
            <span className="text-neon-cyan">&lt;</span>
            <span>Designed & Built by Muhammad Irfan Dzaky</span>
            <span className="text-neon-cyan">/&gt;</span>
          </div>
        </footer>

      </div>
    </div>
  );
}
