"use client";

import dynamic from 'next/dynamic';
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import Image from 'next/image';

// Lazy load components
const GlitchText = dynamic(() => import('@/components/GlitchText'), {
  ssr: true,
});
const SquaresBackground = dynamic(() => import('@/components/SquaresBackground'), {
  ssr: false,
  loading: () => null,
});

export default function ProjectsPage() {
  const [expandedProjectId, setExpandedProjectId] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "WeRent",
      type: "Personal Project",
      description: "Modern full-stack e-commerce platform with real-time inventory management, secure payment processing, and personalized product recommendations.",
      tech: ["Next.js", "NestJS", "PostgreSQL", "Redis", "Stripe"],
      github: ["https://github.com/MuhammadIrfanDzaky/group-a-be", "https://github.com/MuhammadIrfanDzaky/group-a-fe"],
      live: "https://a-we-rent-fe.vercel.app/",
      status: "Completed",
      color: "cyan",
      image: "/werentfe.png",
      highlights: [
        "Real-time inventory with Redis caching",
        "Secure Stripe payment integration",
        "JWT-based authentication",
        "Admin dashboard & analytics"
      ]
    },
    {
      id: 2,
      title: "DRIBBLE",
      type: "Final Project - RevoU",
      description: "End-to-end futsal court booking platform with real-time availability, role-based dashboards, and secure authentication—built as RevoU bootcamp final project.",
      tech: ["Next.js", "Tailwind", "NestJS", "PostgreSQL", "Prisma ORM"],
      github: "https://github.com/yourusername/dribble",
      live: null,
      status: "Completed",
      color: "green",
      image: "/dribble/dribble-1.jpg",
      highlights: [
        "Role-based access control",
        "Real-time booking system",
        "Admin dashboard",
        "RESTful API architecture"
      ]
    },
    {
      id: 3,
      title: "Personal Portfolio",
      type: "Personal Project",
      description: "Modern portfolio website with cyberpunk/neon aesthetic featuring smooth animations, interactive components, and responsive design.",
      tech: ["Next.js", "TypeScript", "Tailwind", "Framer Motion", "Radix UI"],
      github: "https://github.com/MuhammadIrfanDzaky/Personal-Website",
      live: "https://muhammadirfandzaky.netlify.app",
      status: "Ongoing",
      color: "cyan",
      image: "/portfolio-1.jpg",
      highlights: [
        "Custom glitch animations",
        "14+ reusable components",
        "Dark/Light theme",
        "Optimized image loading"
      ]
    },
    {
      id: 4,
      title: "Kos-Kosan Gang Family",
      type: "Freelance Project",
      description: "Boarding house management platform addressing inefficiencies in manual booking processes and property management for dual user personas.",
      tech: ["HTML", "CSS", "Javascript", "PHP", "MySQL"],
      github: "https://github.com/yourusername/koskosan",
      live: null,
      status: "Completed",
      color: "pink",
      image: "/koskosan-1.jpg",
      highlights: [
        "Multi-role authentication",
        "Room availability tracking",
        "Reservation management",
        "Responsive UI design"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-dark-900 relative overflow-x-hidden">
      <SquaresBackground
        squareSize={40}
        speed={0.5}
        direction="down"
        borderColor="rgba(255, 16, 240, 0.15)"
        hoverColor={[
          'rgba(0, 229, 255, 0.6)',
          'rgba(255, 16, 240, 0.6)',
          'rgba(168, 85, 247, 0.6)',
          'rgba(16, 240, 160, 0.6)',
        ]}
      />

      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-neon-pink/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-neon-purple/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-neon-green/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 w-full px-6 md:px-12 lg:px-16 pt-20 md:pt-28 pb-24">
        <div className="mb-8 md:mb-12 relative">
          <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
            <div className="w-1 md:w-2 h-12 md:h-16 bg-gradient-to-b from-neon-cyan via-neon-purple to-neon-pink flicker-slow" />
            <div>
              <h1 className="text-3xl md:text-5xl font-bold font-mono bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink bg-clip-text text-transparent">
                <GlitchText text="PROJECTS" delay={2500} />
              </h1>
              <p className="text-gray-500 text-xs md:text-sm font-mono mt-1 md:mt-2">{'<projects> Featured work and experiments </projects>'}</p>
            </div>
          </div>
          <div className="h-px w-full bg-gradient-to-r from-neon-cyan/50 via-transparent to-transparent" />
        </div>

        {/* Projects Container */}
        <div id="projects-container" className="relative min-h-[900px]">
          {projects.map((project, index) => {
            const isExpanded = expandedProjectId === project.id;
            const isOther = expandedProjectId !== null && !isExpanded;
            
            const colorClasses = {
              cyan: { border: 'border-neon-cyan', text: 'text-neon-cyan', bg: 'bg-neon-cyan', glow: 'shadow-neon-cyan' },
              pink: { border: 'border-neon-pink', text: 'text-neon-pink', bg: 'bg-neon-pink', glow: 'shadow-neon-pink' },
              green: { border: 'border-neon-green', text: 'text-neon-green', bg: 'bg-neon-green', glow: 'shadow-neon-green' },
              purple: { border: 'border-neon-purple', text: 'text-neon-purple', bg: 'bg-neon-purple', glow: 'shadow-neon-purple' }
            }[project.color] || { border: 'border-neon-cyan', text: 'text-neon-cyan', bg: 'bg-neon-cyan', glow: 'shadow-neon-cyan' };

            // Calculate position and size
            const getCardStyle = () => {
              if (expandedProjectId === null) {
                // Grid 2x2
                const row = Math.floor(index / 2);
                const col = index % 2;
                return {
                  top: `${row * 420}px`,
                  left: `${col * 50}%`,
                  width: 'calc(50% - 16px)',
                  height: '400px',
                  zIndex: 1,
                };
              } else if (isExpanded) {
                // Expanded - full width at top
                return {
                  top: '0px',
                  left: '0px',
                  width: '100%',
                  height: '500px',
                  zIndex: 10,
                };
              } else {
                // Thumbnails at bottom with spacing
                const otherCards = projects.filter(p => p.id !== expandedProjectId);
                const thumbIndex = otherCards.findIndex(p => p.id === project.id);
                return {
                  top: '530px',
                  left: `${thumbIndex * 33.33}%`,
                  width: 'calc(33.33% - 12px)',
                  height: '180px',
                  zIndex: 1,
                };
              }
            };

            const cardStyle = getCardStyle();

            return (
              <div
                key={project.id}
                className="absolute transition-all duration-1000 ease-out"
                style={{
                  ...cardStyle,
                  opacity: isOther ? 0.7 : 1,
                  cursor: isExpanded ? 'default' : 'pointer',
                }}
                onClick={() => {
                  if (!isExpanded) {
                    setExpandedProjectId(project.id);
                    // Auto scroll to show expanded card
                    setTimeout(() => {
                      const container = document.getElementById('projects-container');
                      if (container) {
                        const containerTop = container.offsetTop;
                        window.scrollTo({
                          top: containerTop - 100,
                          behavior: 'smooth'
                        });
                      }
                    }, 100);
                  }
                }}
              >
                <div
                  className={`h-full bg-dark-800/95 backdrop-blur-xl border-2 rounded-2xl overflow-hidden transition-all duration-1000 ${
                    isExpanded
                      ? `${colorClasses.border} ${colorClasses.glow}/60 shadow-2xl`
                      : `${colorClasses.border}/30 hover:${colorClasses.border}/60 hover:scale-[1.02]`
                  }`}
                >
                  <div 
                    className="h-full flex transition-all duration-1000"
                    style={{
                      flexDirection: isExpanded ? 'row' : 'column',
                    }}
                  >
                    {/* Image */}
                    <div 
                      className="relative overflow-hidden transition-all duration-1000"
                      style={{
                        width: isExpanded ? '45%' : '100%',
                        height: isExpanded ? '100%' : '60%',
                      }}
                    >
                      <Image 
                        src={project.image} 
                        alt={project.title} 
                        fill 
                        className="object-contain"
                        style={{
                          objectPosition: 'center'
                        }}
                      />
                      <div 
                        className="absolute inset-0 bg-gradient-to-t from-dark-800 via-dark-800/20 to-transparent transition-opacity duration-1000"
                        style={{
                          opacity: isExpanded ? 0.4 : 0.6,
                        }}
                      />
                    </div>

                    {/* Content */}
                    <div 
                      className="relative transition-all duration-1000 overflow-y-auto custom-scrollbar flex flex-col"
                      style={{
                        width: isExpanded ? '55%' : '100%',
                        height: isExpanded ? '100%' : '40%',
                        padding: isExpanded ? '20px' : '16px',
                      }}
                    >
                      {/* Close Button */}
                      {isExpanded && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setExpandedProjectId(null);
                          }}
                          className={`absolute top-3 right-3 p-2 z-20 ${colorClasses.bg}/10 backdrop-blur-md border ${colorClasses.border}/50 ${colorClasses.text} rounded-lg hover:${colorClasses.bg}/20 hover:scale-110 hover:rotate-90 transition-all`}
                          style={{
                            animation: 'fadeIn 0.3s ease-out 0.8s both',
                          }}
                        >
                          <FaTimes className="w-4 h-4" />
                        </button>
                      )}

                      {/* Compact View */}
                      <div
                        className="transition-opacity duration-300 h-full flex flex-col"
                        style={{
                          opacity: isExpanded ? 0 : 1,
                          pointerEvents: isExpanded ? 'none' : 'auto',
                          display: isExpanded ? 'none' : 'flex',
                        }}
                      >
                        <div className="mb-1.5">
                          <span className={`inline-block font-mono border ${colorClasses.border}/50 ${colorClasses.text}/80 px-2 py-0.5 text-sm rounded`}>
                            {project.type}
                          </span>
                        </div>
                        <h3 className="font-bold font-mono text-white text-lg mb-1 leading-tight">{project.title}</h3>
                        <p className="text-gray-300 text-sm line-clamp-1 mb-2 leading-relaxed flex-grow">{project.description}</p>
                        <div className="flex flex-wrap gap-1 mt-auto">
                          {project.tech.slice(0, 3).map((tech, idx) => (
                            <span key={idx} className={`font-mono ${colorClasses.bg}/10 ${colorClasses.text} border ${colorClasses.border}/30 rounded px-1.5 py-0.5 text-xs`}>
                              {tech}
                            </span>
                          ))}
                          {project.tech.length > 3 && (
                            <span className="font-mono text-gray-400 px-1.5 py-0.5 text-xs">+{project.tech.length - 3}</span>
                          )}
                        </div>
                      </div>

                      {/* Expanded View */}
                      <div
                        className="transition-opacity duration-500 h-full flex flex-col"
                        style={{
                          opacity: isExpanded ? 1 : 0,
                          pointerEvents: isExpanded ? 'auto' : 'none',
                          transitionDelay: isExpanded ? '0.7s' : '0s',
                          display: isExpanded ? 'flex' : 'none',
                        }}
                      >
                        <div className="mb-2 flex items-center gap-2">
                          <span className={`inline-block font-mono border ${colorClasses.border} ${colorClasses.text} px-2.5 py-1 text-sm rounded`}>
                            {project.type}
                          </span>
                          <span className={`inline-block font-mono bg-dark-900/90 backdrop-blur-sm border ${colorClasses.border} ${colorClasses.text} px-2.5 py-1 text-sm rounded`}>
                            {project.status}
                          </span>
                        </div>
                        <h3 className={`font-bold font-mono ${colorClasses.text} text-3xl mb-2.5 leading-tight`}>{project.title}</h3>
                        <p className="text-gray-300 text-base leading-relaxed mb-3.5">{project.description}</p>

                        <div className="mb-3.5">
                          <h4 className="text-sm font-mono text-white/60 uppercase tracking-wider flex items-center gap-1.5 mb-2">
                            <span className={`w-0.5 h-3 ${colorClasses.bg}`} />
                            Key Highlights
                          </h4>
                          <div className="space-y-1.5">
                            {project.highlights.map((highlight, idx) => (
                              <div key={idx} className="flex items-start gap-2">
                                <span className={`${colorClasses.text} text-sm mt-0.5 flex-shrink-0`}>▹</span>
                                <span className="text-gray-300 text-sm leading-relaxed">{highlight}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="mb-3.5">
                          <h4 className="text-sm font-mono text-white/60 uppercase tracking-wider flex items-center gap-1.5 mb-2">
                            <span className={`w-0.5 h-3 ${colorClasses.bg}`} />
                            Technologies
                          </h4>
                          <div className="flex flex-wrap gap-1.5">
                            {project.tech.map((tech, idx) => (
                              <span key={idx} className={`font-mono ${colorClasses.bg}/10 ${colorClasses.text} border ${colorClasses.border}/30 rounded px-2.5 py-1 text-sm hover:scale-105 transition-transform`}>
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/5 mt-auto">
                          {Array.isArray(project.github) ? (
                            project.github.map((githubLink, idx) => (
                              <a
                                key={idx}
                                href={githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-mono border ${colorClasses.border}/40 ${colorClasses.text} hover:${colorClasses.border} hover:bg-${colorClasses.bg}/5 rounded transition-all`}
                                onClick={(e) => e.stopPropagation()}
                              >
                                <FaGithub className="w-4 h-4" />
                                <span>{idx === 0 ? 'BE' : 'FE'}</span>
                              </a>
                            ))
                          ) : (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-mono border ${colorClasses.border}/40 ${colorClasses.text} hover:${colorClasses.border} hover:bg-${colorClasses.bg}/5 rounded transition-all col-span-2`}
                              onClick={(e) => e.stopPropagation()}
                            >
                              <FaGithub className="w-4 h-4" />
                              <span>Repository</span>
                            </a>
                          )}
                          {project.live && (
                            <a
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-mono ${colorClasses.bg} text-dark-900 hover:opacity-90 rounded transition-all font-semibold ${Array.isArray(project.github) ? '' : 'col-span-2'}`}
                              onClick={(e) => e.stopPropagation()}
                            >
                              <FaExternalLinkAlt className="w-4 h-4" />
                              <span>Demo</span>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <footer className="mt-auto pt-6 md:pt-8 pb-3 md:pb-4 text-center">
          <div className="flex items-center justify-center gap-2 text-gray-400 text-xs md:text-sm font-mono">
            <span className="text-neon-cyan">{'>> '}</span>
            <span>More projects coming soon. Stay tuned!</span>
            <span className="text-neon-cyan">{' <<'}</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
