"use client";

import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useState } from 'react';
import AnimatedButton from '@/components/AnimatedButton';
import GlitchText from '@/components/GlitchText';
import SquaresBackground from '@/components/SquaresBackground';
import Carousel from '@/components/Carousel';
import ProjectAccordion from '@/components/ProjectAccordion';


export default function ProjectsPage() {
  // State for expandable section
  const [expandedProjectId, setExpandedProjectId] = useState<number | null>(null);

  // Helper for color classes
  const getColorClasses = (color: string) => {
    const colors: Record<string, string> = {
      cyan: "border-neon-cyan/30 hover:border-neon-cyan/60 text-neon-cyan",
      pink: "border-neon-pink/30 hover:border-neon-pink/60 text-neon-pink",
      purple: "border-neon-purple/30 hover:border-neon-purple/60 text-neon-purple",
      green: "border-neon-green/30 hover:border-neon-green/60 text-neon-green",
    };
    return colors[color] || colors.cyan;
  };

  const projects = [
    {
      id: 1,
      title: "DRIBBLE",
      type: "Final Project - RevoU",
      privacy: "Public",
      description: "End-to-end futsal court booking platform that digitizes manual scheduling workflows. Full-stack solution with real-time availability, role-based dashboards for admins and field owners, and secure authentication—built with modern architecture (Next.js, NestJS, PostgreSQL) as RevoU bootcamp final project.",
      tech: ["Next.js", "Tailwind", "NestJS", "PostgreSQL", "Prisma ORM"],
      github: "https://github.com/yourusername/dribble",
      live: null,
      status: "Completed",
      color: "green",
      images: [
        "/dribble/dribble-1.jpg",
        "/dribble/dribble-2.jpg",
        "/dribble/dribble-3.jpg",
        "/dribble/dribble-4.jpg",
        "/dribble/dribble-5.jpg",
        "/dribble/dribble-6.jpg",
        "/dribble/dribble-7.jpg"
      ],
      imagePlaceholders: [
        "Login Page",
        "Register Page",
        "Dashboard Page",
        "Court(s) Page",
        "Booking(s) Page",
        "User(s) Page",
        "Profile Page"
      ],
      keyFeatures: [
        "User authentication & role-based access (player + admin)",
        "Real-time court availability & booking system",
        "Admin dashboard for schedule & reservation management",
        "RESTful API architecture with PostgreSQL database",
        "Responsive UI with modern design patterns"
      ],
      contribution: [
        "Independently designed & developed full-stack application (frontend + backend)",
        "Implemented Scrum methodology with iterative user feedback",
        "Architected scalable RESTful API with NestJS & Prisma ORM",
        "Conducted end-to-end testing & quality assurance"
      ]
    },
    {
      id: 2,
      title: "PERSONAL PORTFOLIO WEBSITE",
      type: "Personal Project",
      privacy: "Public",
      description: "Personal portfolio website to showcase projects, skills, and experience. Built with Next.js, Tailwind CSS, and Framer Motion for smooth animations and modern UI.",
      tech: ["Next.js", "Tailwind", "Framer Motion"],
      github: "https://github.com/yourusername/portfolio",
      live: null,
      status: "Ongoing",
      color: "cyan",
      images: [
        "/portfolio-1.jpg",
        "/portfolio-2.jpg"
      ],
      imagePlaceholders: [
        "Dark Theme",
        "Light Theme"
      ],
      keyFeatures: [
        "Responsive design",
        "Animated transitions",
        "Project showcase"
      ],
      contribution: [
        "Design & development",
        "Content writing"
      ]
    },
    {
      id: 3,
      title: "Kos-Kosan Gang Family No.3",
      type: "Freelance Project",
      privacy: "Private",
      description: "Real-world solution for boarding house business addressing inefficiencies in manual booking processes, property management, and tenant communication. Delivered working platform for dual user personas (property owners & tenants).",
      tech: ["HTML", "CSS", "Javascript", "PHP", "MySQL"],
      github: "https://github.com/yourusername/koskosan",
      live: null,
      status: "Completed",
      color: "pink",
      images: [
        "/koskosan-1.jpg"
      ],
      imagePlaceholders: [
        "Home Page"
      ],
      keyFeatures: [
        "Multi-role authentication (landlord + tenant)",
        "Real-time room availability & booking system",
        "Reservation management & status tracking",
        "Responsive, user-friendly interface",
        "Efficient property management workflows"
      ],
      contribution: [
        "Led frontend architecture & implementation",
        "Designed intuitive UI for dual user personas",
        "Implemented responsive design & client-side validation",
        "Collaborated with backend developer on system integration",
        "Gathered client requirements & incorporated feedback iteratively",
        "Managed quality assurance & user testing"
      ]
    },
    {
      id: 4,
      title: "Absensi SDN 064037",
      type: "Freelance Project",
      privacy: "Private",
      description: "A digital platform for elementary school (SDN) administration, including student data, attendance, and report cards. Built for school digitalization.",
      tech: ["HTML", "CSS", "Javascript", "PHP", "MySQL"],
      github: "https://github.com/yourusername/sdn",
      live: null,
      status: "Completed",
      color: "purple",
      images: [
        "/sdn-1.jpg"
      ],
      imagePlaceholders: [
        "Login Page"
      ],
      keyFeatures: [
        "Student management",
        "Attendance tracking",
        "Report cards"
      ],
      contribution: [
        "Backend",
        "Frontend"
      ]
    }
  ];

  return (
    <div>
      <div className="min-h-screen bg-dark-900 relative overflow-x-hidden">
        {/* Animated Squares Background */}
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

        {/* Glowing Orbs Background */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-neon-pink/10 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-neon-purple/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-neon-green/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-8">
          {/* Page Header */}
          <div className="mb-12 relative">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-2 h-16 bg-gradient-to-b from-neon-cyan via-neon-purple to-neon-pink flicker-slow" />
              <div>
                <h1 className="text-5xl font-bold font-mono bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink bg-clip-text text-transparent">
                  <GlitchText text="PROJECTS" delay={2500} />
                </h1>
                <p className="text-gray-500 text-sm font-mono mt-2">{'<portfolio> Featured work and experiments </portfolio>'}</p>
              </div>
            </div>
            <div className="h-px w-full bg-gradient-to-r from-neon-cyan/50 via-transparent to-transparent" />
          </div>

          {/* Projects Grid */}
          <div className="space-y-8 mb-8">
            {projects.map((project, index) => {
              const isExpanded = expandedProjectId === project.id;
              return (
              <div key={project.id} className="w-full">
                <div
                  className={`bg-dark-800/50 backdrop-blur-sm border-2 ${getColorClasses(project.color)} rounded-2xl relative group transition-all duration-500 ease-in-out hover:shadow-2xl overflow-hidden flex flex-col md:flex-row items-stretch min-h-[340px] p-0 scale-[1.03] shadow-2xl ${
                    isExpanded ? 'animate-section-expand' : ''
                  }`}
                >
                  {/* ODD: Carousel kiri, info kanan; EVEN: info kiri, carousel kanan */}
                  {index % 2 === 0 ? (
                    <>
                      {/* Left: Carousel */}
                      <div className="w-full md:w-1/2 flex items-center justify-center bg-dark-900/80 p-6">
                        <Carousel images={project.images} alt={project.title} imagePlaceholders={project.imagePlaceholders} color={project.color} />
                      </div>
                      {/* Right: Details */}
                      <div className="w-full md:w-1/2 flex flex-col justify-center p-6">
                        <div className="flex items-center justify-between mb-2">
                          <span className={`text-sm font-mono px-3 py-1 border ${project.color === 'cyan' ? 'border-neon-cyan text-neon-cyan' : project.color === 'pink' ? 'border-neon-pink text-neon-pink' : project.color === 'purple' ? 'border-neon-purple text-neon-purple' : 'border-neon-green text-neon-green'}`}>
                            {'[ '}{project.type}{' ]'}
                          </span>
                          <span className={`text-sm font-mono px-3 py-1 border ${project.color === 'cyan' ? 'border-neon-cyan text-neon-cyan' : project.color === 'pink' ? 'border-neon-pink text-neon-pink' : project.color === 'purple' ? 'border-neon-purple text-neon-purple' : 'border-neon-green text-neon-green'}`}>
                            {'[ '}{project.privacy}{' ]'}
                          </span>
                          <span className={`text-sm font-mono px-3 py-1 border ${project.color === 'cyan' ? 'border-neon-cyan text-neon-cyan' : project.color === 'pink' ? 'border-neon-pink text-neon-pink' : project.color === 'purple' ? 'border-neon-purple text-neon-purple' : 'border-neon-green text-neon-green'}`}>
                            {'[ '}{project.status}{' ]'}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold text-white font-mono mb-2">
                          <span className="text-gray-500">{'<'}</span>
                          {project.title}
                          <span className="text-gray-500">{' />'}</span>
                        </h3>
                        <div className="mb-2">
                          <ProjectAccordion
                            description={project.description}
                            keyFeatures={project.keyFeatures}
                            contribution={project.contribution}
                            tech={project.tech}
                            demo={project.github}
                            color={project.color}
                            onExpandChange={(isExpanded) => {
                              setExpandedProjectId(isExpanded ? project.id : null);
                            }}
                            resource={
                              <div className="flex gap-3 pt-2">
                                <AnimatedButton
                                  href={project.github}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className={`group/btn flex items-center gap-2 px-4 py-2 text-sm font-mono bg-transparent border-2 ${project.color === 'cyan' ? 'border-neon-cyan text-neon-cyan hover:bg-neon-cyan' : project.color === 'pink' ? 'border-neon-pink text-neon-pink hover:bg-neon-pink' : project.color === 'purple' ? 'border-neon-purple text-neon-purple hover:bg-neon-purple' : 'border-neon-green text-neon-green hover:bg-neon-green'} hover:text-dark-900 transition-all duration-300 relative overflow-hidden`}
                                >
                                  <span className="relative z-10 flex items-center gap-2">
                                    <FaGithub />
                                    <span>CODE</span>
                                  </span>
                                  <div className={`absolute inset-0 ${project.color === 'cyan' ? 'bg-neon-cyan' : project.color === 'pink' ? 'bg-neon-pink' : project.color === 'purple' ? 'bg-neon-purple' : 'bg-neon-green'} transform -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-300`} />
                                </AnimatedButton>
                                {project.live && (
                                  <AnimatedButton
                                    href={project.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`group/btn flex items-center gap-2 px-4 py-2 text-sm font-mono bg-transparent border-2 ${project.color === 'cyan' ? 'border-neon-cyan text-neon-cyan hover:bg-neon-cyan' : project.color === 'pink' ? 'border-neon-pink text-neon-pink hover:bg-neon-pink' : project.color === 'purple' ? 'border-neon-purple text-neon-purple hover:bg-neon-purple' : 'border-neon-green text-neon-green hover:bg-neon-green'} hover:text-dark-900 transition-all duration-300 relative overflow-hidden`}
                                  >
                                    <span className="relative z-10 flex items-center gap-2">
                                      <FaExternalLinkAlt />
                                      <span>LIVE</span>
                                    </span>
                                    <div className={`absolute inset-0 ${project.color === 'cyan' ? 'bg-neon-cyan' : project.color === 'pink' ? 'bg-neon-pink' : project.color === 'purple' ? 'bg-neon-purple' : 'bg-neon-green'} transform -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-300`} />
                                  </AnimatedButton>
                                )}
                              </div>
                            }
                          />
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Left: Details */}
                      <div className="w-full md:w-1/2 flex flex-col justify-center p-6">
                        <div className="flex items-center justify-between mb-2">
                          <span className={`text-sm font-mono px-3 py-1 border ${project.color === 'cyan' ? 'border-neon-cyan text-neon-cyan' : project.color === 'pink' ? 'border-neon-pink text-neon-pink' : project.color === 'purple' ? 'border-neon-purple text-neon-purple' : 'border-neon-green text-neon-green'}`}>
                            {'[ '}{project.type}{' ]'}
                          </span>
                          <span className={`text-sm font-mono px-3 py-1 border ${project.color === 'cyan' ? 'border-neon-cyan text-neon-cyan' : project.color === 'pink' ? 'border-neon-pink text-neon-pink' : project.color === 'purple' ? 'border-neon-purple text-neon-purple' : 'border-neon-green text-neon-green'}`}>
                            {'[ '}{project.privacy}{' ]'}
                          </span>
                          <span className={`text-sm font-mono px-3 py-1 border ${project.color === 'cyan' ? 'border-neon-cyan text-neon-cyan' : project.color === 'pink' ? 'border-neon-pink text-neon-pink' : project.color === 'purple' ? 'border-neon-purple text-neon-purple' : 'border-neon-green text-neon-green'}`}>
                            {'[ '}{project.status}{' ]'}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold text-white font-mono mb-2">
                          <span className="text-gray-500">{'<'}</span>
                          {project.title}
                          <span className="text-gray-500">{' />'}</span>
                        </h3>
                        <div className="mb-2">
                          <ProjectAccordion
                            description={project.description}
                            keyFeatures={project.keyFeatures}
                            contribution={project.contribution}
                            tech={project.tech}
                            demo={project.github}
                            color={project.color}
                            onExpandChange={(isExpanded) => {
                              setExpandedProjectId(isExpanded ? project.id : null);
                            }}
                            resource={
                              <div className="flex gap-3 pt-2">
                                <AnimatedButton
                                  href={project.github}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className={`group/btn flex items-center gap-2 px-4 py-2 text-sm font-mono bg-transparent border-2 ${project.color === 'cyan' ? 'border-neon-cyan text-neon-cyan hover:bg-neon-cyan' : project.color === 'pink' ? 'border-neon-pink text-neon-pink hover:bg-neon-pink' : project.color === 'purple' ? 'border-neon-purple text-neon-purple hover:bg-neon-purple' : 'border-neon-green text-neon-green hover:bg-neon-green'} hover:text-dark-900 transition-all duration-300 relative overflow-hidden`}
                                >
                                  <span className="relative z-10 flex items-center gap-2">
                                    <FaGithub />
                                    <span>CODE</span>
                                  </span>
                                  <div className={`absolute inset-0 ${project.color === 'cyan' ? 'bg-neon-cyan' : project.color === 'pink' ? 'bg-neon-pink' : project.color === 'purple' ? 'bg-neon-purple' : 'bg-neon-green'} transform -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-300`} />
                                </AnimatedButton>
                                {project.live && (
                                  <AnimatedButton
                                    href={project.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`group/btn flex items-center gap-2 px-4 py-2 text-sm font-mono bg-transparent border-2 ${project.color === 'cyan' ? 'border-neon-cyan text-neon-cyan hover:bg-neon-cyan' : project.color === 'pink' ? 'border-neon-pink text-neon-pink hover:bg-neon-pink' : project.color === 'purple' ? 'border-neon-purple text-neon-purple hover:bg-neon-purple' : 'border-neon-green text-neon-green hover:bg-neon-green'} hover:text-dark-900 transition-all duration-300 relative overflow-hidden`}
                                  >
                                    <span className="relative z-10 flex items-center gap-2">
                                      <FaExternalLinkAlt />
                                      <span>LIVE</span>
                                    </span>
                                    <div className={`absolute inset-0 ${project.color === 'cyan' ? 'bg-neon-cyan' : project.color === 'pink' ? 'bg-neon-pink' : project.color === 'purple' ? 'bg-neon-purple' : 'bg-neon-green'} transform -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-300`} />
                                  </AnimatedButton>
                                )}
                              </div>
                            }
                          />
                        </div>
                      </div>
                      {/* Right: Carousel */}
                      <div className="w-full md:w-1/2 flex items-center justify-center bg-dark-900/80 p-6">
                        <Carousel images={project.images} alt={project.title} imagePlaceholders={project.imagePlaceholders} color={project.color} />
                      </div>
                    </>
                  )}
                </div>
              </div>
            );
            })}
          </div>

          {/* Bottom Note */}
          <div className="text-center py-8">
            <p className="text-gray-500 text-sm font-mono">
              <span className="text-neon-cyan">{'>> '}</span>
              More projects coming soon. Stay tuned!
              <span className="text-neon-cyan">{' <<'}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
