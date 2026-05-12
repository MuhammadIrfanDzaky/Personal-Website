"use client";

import dynamic from 'next/dynamic';
import { FaGithub, FaExternalLinkAlt, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useState } from 'react';
import Image from 'next/image';
import { image } from 'framer-motion/client';

// Lazy load components
const GlitchText = dynamic(() => import('@/components/GlitchText'), {
  ssr: true,
});
type ProjectCategory = 'ALL' | 'Personal Project' | 'Experimental' | 'Bootcamp' | 'Freelance';

export default function ProjectsPage() {
  const [expandedProjectId, setExpandedProjectId] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('ALL');
  const [imageIndices, setImageIndices] = useState<{[key: number]: number}>({});

  const getImageIndex = (id: number) => imageIndices[id] ?? 0;
  const prevImage = (id: number, total: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setImageIndices(prev => ({ ...prev, [id]: (getImageIndex(id) - 1 + total) % total }));
  };
  const nextImage = (id: number, total: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setImageIndices(prev => ({ ...prev, [id]: (getImageIndex(id) + 1) % total }));
  };

  const projects = [
    {
      id: 1,
      title: "PitchCrush AI",
      type: "Experimental" as ProjectCategory,
      description: "AI-powered pitch stress testing platform that helps founders evaluate startup ideas through multiple perspectives such as investors, customers, competitors, boards, demo day audiences, and incumbent threats.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "OpenRouter API"],
      github: "https://github.com/MuhammadIrfanDzaky/PitchCrushAI",
      live: "https://pitch-crush-ai.vercel.app",
      status: "Completed",
      role: "Solo Developer",
      period: "Apr 2025",
      color: "cyan",
      images: ["/pitchcrushai/pitchcrushai.jpg", "/pitchcrushai/pitchcrushai_analyze.jpeg"],
      image: "/pitchcrushai.jpg",
      highlights: [
        "AI-powered pitch analysis",
        "9 stress test modes",
        "Dynamic goal selection",
        "Structured result dashboard",
        "Fallback analysis system",
        "Multi-perspective analysis",
        "OpenRouter LLM integration",
        "Responsive mobile UI"
      ]
    },
    {
      id: 2,
      title: "WeRent",
      type: "Bootcamp" as ProjectCategory,
      description: "Modern full-stack e-commerce platform with real-time inventory management, secure payment processing, and personalized product recommendations.",
      tech: ["Next.js", "NestJS", "PostgreSQL", "Redis", "Stripe"],
      github: ["https://github.com/MuhammadIrfanDzaky/group-a-be", "https://github.com/MuhammadIrfanDzaky/group-a-fe"],
      live: "https://a-we-rent-fe.vercel.app/",
      status: "Completed",
      role: "Fullstack Engineer",
      period: "Jun – Aug 2025",
      color: "cyan",
      images: ["/werent/werentfe.png", "/werent/werentppt.png"],
      image: "/werent/werentfe.png",
      highlights: [
        "Real-time inventory with Redis caching",
        "Secure Stripe payment integration",
        "JWT-based authentication",
        "Admin dashboard & analytics"
      ]
    },
    {
      id: 3,
      title: "DRIBBLE",
      type: "Bootcamp" as ProjectCategory,
      description: "End-to-end futsal court booking platform with real-time availability, role-based dashboards, and secure authentication—built as RevoU bootcamp final project.",
      tech: ["Next.js", "Tailwind", "NestJS", "PostgreSQL", "Prisma ORM"],
      github: ["https://github.com/MuhammadIrfanDzaky/final-project-fe-MuhammadIrfanDzaky", "https://github.com/MuhammadIrfanDzaky/final-project-be-MuhammadIrfanDzaky"],
      live: null,
      status: "Completed",
      role: "Fullstack Engineer",
      period: "Jul – Aug 2025",
      color: "cyan",
      images: ["/dribble/signin_page.jpg", "/dribble/signup_page.jpg", "/dribble/dashboard_page.png", "/dribble/courts_page.jpg", "/dribble/booking_page.jpg", "/dribble/users_page.jpg", "/dribble/profile_page.jpg"],
      image: "/dribble/signin_page.jpg",
      highlights: [
        "Role-based access control",
        "Real-time booking system",
        "Admin dashboard",
        "RESTful API architecture"
      ]
    },
    {
      id: 4,
      title: "Personal Portfolio",
      type: "Personal Project" as ProjectCategory,
      description: "Modern portfolio website with cyberpunk/neon aesthetic featuring smooth animations, interactive components, and responsive design.",
      tech: ["Next.js", "TypeScript", "Tailwind", "Framer Motion", "Radix UI"],
      github: "https://github.com/MuhammadIrfanDzaky/Personal-Website",
      live: "https://muhammadirfandzaky.netlify.app",
      status: "Completed",
      role: "Solo Developer",
      period: "May 2025 – Present",
      color: "cyan",
      images: ["/personal/portfolio-1.jpg", "/personal/portfolio-2.jpg"],
      image: "/personal/portfolio-1.jpg",
      highlights: [
        "Custom glitch animations",
        "14+ reusable components",
        "Dark/Light theme",
        "Optimized image loading"
      ]
    },
    {
      id: 5,
      title: "Kos-Kosan Gang Family",
      type: "Freelance" as ProjectCategory,
      description: "Boarding house management platform addressing inefficiencies in manual booking processes and property management for dual user personas.",
      tech: ["HTML", "CSS", "Javascript", "PHP", "MySQL"],
      github: "https://github.com/yourusername/koskosan",
      live: null,
      status: "Completed",
      role: "Lead Developer",
      period: "Jan – Mar 2024",
      color: "cyan",
      images: ["/koskosan/koskosan-1.jpg"],
      image: "/koskosan/koskosan-1.jpg",
      highlights: [
        "Multi-role authentication",
        "Room availability tracking",
        "Reservation management",
        "Responsive UI design"
      ]
    }
  ];

  const categories: ProjectCategory[] = ['ALL', 'Personal Project', 'Experimental', 'Bootcamp', 'Freelance'];
  
  const filteredProjects = activeFilter === 'ALL' 
    ? projects 
    : projects.filter(project => project.type === activeFilter);

  const getContainerMinHeight = () => {
    if (expandedProjectId !== null) {
      const thumbnailCount = filteredProjects.length - 1;
      const thumbnailRows = Math.ceil(thumbnailCount / 3);
      return 650 + thumbnailRows * 200 + 20;
    }
    const rows = Math.ceil(filteredProjects.length / 2);
    return rows * 420 + 20;
  };

  return (
    <div className="min-h-screen bg-dark-900 relative overflow-x-hidden">
      {/* Glowing Orb Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-neon-cyan/5 rounded-full blur-[140px]" />
      </div>

      <main className="relative z-10 w-full px-6 md:px-12 lg:px-16 pt-20 md:pt-28 pb-24 md:pb-8">
        <header className="mb-8 md:mb-12 relative">
          <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
            <div className="w-1 md:w-2 h-12 md:h-16 bg-neon-cyan flicker-slow" />
            <div>
              <h1 className="text-3xl md:text-5xl font-bold font-mono text-white">
                <GlitchText text="PROJECTS" delay={2500} />
              </h1>
              <p className="text-gray-500 text-xs md:text-sm font-mono mt-1 md:mt-2">{'<projects> Featured work and experiments </projects>'}</p>
            </div>
          </div>          
          {/* Filter Navigation */}
          <nav aria-label="Project categories" className="flex flex-wrap gap-2 mb-4">
            {categories.map((category) => {
              const getCategoryColors = () => {
                switch(category) {
                  case 'ALL':
                    return {
                      active: 'bg-neon-cyan text-dark-900 border-neon-cyan shadow-lg shadow-neon-cyan/50',
                      inactive: 'bg-transparent text-gray-400 border-gray-600 hover:border-neon-cyan hover:text-neon-cyan hover:shadow-md hover:shadow-neon-cyan/30'
                    };
                  default:
                    return {
                      active: 'bg-neon-cyan text-dark-900 border-neon-cyan shadow-lg shadow-neon-cyan/50',
                      inactive: 'bg-transparent text-gray-400 border-gray-600 hover:border-neon-cyan hover:text-neon-cyan hover:shadow-md hover:shadow-neon-cyan/30'
                    };
                }
              };
              
              const colors = getCategoryColors();
              
              return (
                <button
                  key={category}
                  onClick={() => {
                    setActiveFilter(category);
                    setExpandedProjectId(null);
                  }}
                  className={`px-3 md:px-4 py-1.5 md:py-2 font-mono text-xs md:text-sm border-2 rounded transition-all duration-300 ${
                    activeFilter === category ? colors.active : colors.inactive
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </nav>
          <div className="h-px w-full bg-gradient-to-r from-neon-cyan/50 via-transparent to-transparent" />
        </header>

        {/* Projects Container */}
        <section id="projects-container" className="relative" style={{ minHeight: `${getContainerMinHeight()}px` }} aria-label="Project showcase">
          {filteredProjects.map((project, index) => {
            const isExpanded = expandedProjectId === project.id;
            const isOther = expandedProjectId !== null && !isExpanded;
            
            const colorClasses = {
              cyan: { border: 'border-neon-cyan', text: 'text-neon-cyan', bg: 'bg-neon-cyan', glow: 'shadow-neon-cyan' },
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
                  height: '620px',
                  zIndex: 10,
                };
              } else {
                // Thumbnails at bottom with spacing
                const otherCards = filteredProjects.filter(p => p.id !== expandedProjectId);
                const thumbIndex = otherCards.findIndex(p => p.id === project.id);
                const thumbRow = Math.floor(thumbIndex / 3);
                const thumbCol = thumbIndex % 3;
                return {
                  top: `${650 + thumbRow * 200}px`,
                  left: `${thumbCol * 33.33}%`,
                  width: 'calc(33.33% - 12px)',
                  height: '180px',
                  zIndex: 1,
                };
              }
            };

            const cardStyle = getCardStyle();

            return (
              <article
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
                aria-label={`${project.title} - ${project.type}`}
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
                      {(() => {
                        const images = project.images ?? [project.image];
                        const imgIdx = getImageIndex(project.id);
                        return (
                          <>
                            <Image 
                              src={images[imgIdx]} 
                              alt={`${project.title} screenshot ${imgIdx + 1}`} 
                              fill 
                              className="object-contain transition-opacity duration-500"
                              style={{ objectPosition: 'center' }}
                            />
                            <div 
                              className="absolute inset-0 bg-gradient-to-t from-dark-800 via-dark-800/20 to-transparent transition-opacity duration-1000"
                              style={{ opacity: isExpanded ? 0.4 : 0.6 }}
                            />
                            {isExpanded && images.length > 1 && (
                              <>
                                <button
                                  onClick={(e) => prevImage(project.id, images.length, e)}
                                  className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-1.5 bg-dark-900/70 backdrop-blur-sm border border-white/20 text-white rounded-full hover:bg-dark-900/90 transition-all"
                                >
                                  <FaChevronLeft className="w-3 h-3" />
                                </button>
                                <button
                                  onClick={(e) => nextImage(project.id, images.length, e)}
                                  className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-1.5 bg-dark-900/70 backdrop-blur-sm border border-white/20 text-white rounded-full hover:bg-dark-900/90 transition-all"
                                >
                                  <FaChevronRight className="w-3 h-3" />
                                </button>
                                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-10 flex gap-1.5">
                                  {images.map((_, dotIdx) => (
                                    <button
                                      key={dotIdx}
                                      onClick={(e) => { e.stopPropagation(); setImageIndices(prev => ({ ...prev, [project.id]: dotIdx })); }}
                                      className={`w-1.5 h-1.5 rounded-full transition-all ${
                                        dotIdx === imgIdx ? `${colorClasses.bg} scale-125` : 'bg-white/40 hover:bg-white/70'
                                      }`}
                                    />
                                  ))}
                                </div>
                              </>
                            )}
                          </>
                        );
                      })()}
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
                          <span className={`inline-block font-mono border ${colorClasses.border}/50 ${colorClasses.text} px-2 py-0.5 text-sm rounded`}>
                            {project.type}
                          </span>
                        </div>
                        <h3 className="font-bold font-mono text-white text-lg mb-1 leading-tight">{project.title}</h3>
                        <p className="text-gray-300 text-sm line-clamp-2 leading-relaxed flex-grow">{project.description}</p>
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

                        {/* Meta row — role · period · stats */}
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 mb-3 text-sm font-mono">
                          {project.role && (
                            <span className="flex items-center gap-1.5 text-white/70">
                              <span className={`${colorClasses.text}`}>◈</span>
                              {project.role}
                            </span>
                          )}
                          {project.period && (
                            <span className="flex items-center gap-1.5 text-white/70">
                              <span className={`${colorClasses.text}`}>◈</span>
                              {project.period}
                            </span>
                          )}
                        </div>

                        <p className="text-gray-300 text-base leading-relaxed mb-3.5">{project.description}</p>

                        <div className="mb-3.5">
                          <h4 className="text-sm font-mono text-white/60 uppercase tracking-wider flex items-center gap-1.5 mb-2">
                            <span className={`w-0.5 h-3 ${colorClasses.bg}`} />
                            Key Highlights
                          </h4>
                          <div className="grid grid-cols-2 gap-x-4 gap-y-1.5">
                            {(() => {
                              const left = project.highlights.slice(0, 4);
                              const right = left.length === 4 ? project.highlights.slice(4, 8) : [];
                              const renderItem = (highlight: string, idx: number) => (
                                <div key={idx} className="flex items-start gap-2">
                                  <span className={`${colorClasses.text} text-sm mt-0.5 flex-shrink-0`}>▹</span>
                                  <span className="text-gray-300 text-sm leading-relaxed">{highlight}</span>
                                </div>
                              );
                              return (
                                <>
                                  <div className="space-y-1.5">{left.map(renderItem)}</div>
                                  {right.length > 0 && <div className="space-y-1.5">{right.map((h, i) => renderItem(h, i + 4))}</div>}
                                </>
                              );
                            })()}
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

                        <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/5">
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
              </article>
            );
          })}
        </section>

        {/* Footer */}
        <footer className="text-center py-8">
          <p className="text-gray-500 text-sm font-mono">
            <span className="text-neon-cyan">{'>> '}</span>
            More projects coming soon. Stay tuned!
            <span className="text-neon-cyan">{' <<'}</span>
          </p>
        </footer>
      </main>
    </div>
  );
}