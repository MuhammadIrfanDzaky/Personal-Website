"use client";

import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import Image from 'next/image';
import AnimatedButton from '@/components/AnimatedButton';
import GlitchText from '@/components/GlitchText';
import SquaresBackground from '@/components/SquaresBackground';

export default function ProjectsPage() {
  const [expandedProjectId, setExpandedProjectId] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

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

      <div className="relative z-10 w-full px-6 md:px-12 lg:px-16 pt-20 md:pt-28 pb-24">
        {/* Page Header */}
        <div className="mb-12 md:mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-2 h-16 bg-gradient-to-b from-neon-cyan via-neon-purple to-neon-pink flicker-slow" />
            <div>
              <h1 className="text-4xl md:text-6xl font-bold font-mono bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink bg-clip-text text-transparent">
                <GlitchText text="PROJECTS" delay={2500} />
              </h1>
              <p className="text-gray-400 text-sm md:text-base font-mono mt-2">Featured work and experiments</p>
            </div>
          </div>
          <div className="h-px w-full bg-gradient-to-r from-neon-cyan/50 via-transparent to-transparent" />
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12">
          {projects.map((project) => {
            const isExpanded = expandedProjectId === project.id;
            const colorClasses = {
              cyan: { border: 'border-neon-cyan', text: 'text-neon-cyan', bg: 'bg-neon-cyan', glow: 'shadow-neon-cyan' },
              pink: { border: 'border-neon-pink', text: 'text-neon-pink', bg: 'bg-neon-pink', glow: 'shadow-neon-pink' },
              green: { border: 'border-neon-green', text: 'text-neon-green', bg: 'bg-neon-green', glow: 'shadow-neon-green' },
              purple: { border: 'border-neon-purple', text: 'text-neon-purple', bg: 'bg-neon-purple', glow: 'shadow-neon-purple' }
            }[project.color];

            return (
              <div
                key={project.id}
                className={`${
                  isExpanded ? 'md:col-span-2' : ''
                } transition-all duration-700 ease-in-out`}
                style={{
                  gridRow: isExpanded ? 'span 1' : 'auto',
                }}
              >
                <div
                  className={`bg-dark-800/50 backdrop-blur-sm border-2 ${colorClasses.border}/30 hover:${colorClasses.border}/60 rounded-2xl overflow-hidden group transition-all duration-700 ease-in-out ${
                    isExpanded
                      ? `${colorClasses.border} ${colorClasses.glow}/40 shadow-2xl scale-100`
                      : 'hover:scale-[1.02]'
                  } ${!isExpanded && expandedProjectId !== null ? 'opacity-60 scale-95' : ''}`}
                >
                  {!isExpanded ? (
                    // COMPACT VIEW
                    <div 
                      className="cursor-pointer"
                      onClick={() => setExpandedProjectId(project.id)}
                    >
                      {/* Project Image */}
                      <div className="relative h-48 bg-dark-900/80 overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-dark-800 to-transparent opacity-60" />
                        
                        {/* Status Badge */}
                        <div className="absolute top-4 right-4">
                          <span className={`px-3 py-1 text-xs font-mono border-2 ${colorClasses.border} ${colorClasses.text} bg-dark-900/90 backdrop-blur-sm`}>
                            {project.status}
                          </span>
                        </div>
                      </div>

                      {/* Compact Content */}
                      <div className="p-5">
                        {/* Type Badge */}
                        <span className={`inline-block px-3 py-1 text-xs font-mono border ${colorClasses.border}/50 ${colorClasses.text}/80 mb-3`}>
                          {project.type}
                        </span>

                        {/* Title */}
                        <h3 className="text-xl font-bold text-white font-mono mb-2 group-hover:${colorClasses.text} transition-colors">
                          {project.title}
                        </h3>

                        {/* Short Description */}
                        <p className="text-gray-400 text-sm leading-relaxed mb-3 line-clamp-2">
                          {project.description}
                        </p>

                        {/* Tech Stack Preview (first 3) */}
                        <div className="flex flex-wrap gap-2 mb-3">
                          {project.tech.slice(0, 3).map((tech, idx) => (
                            <span
                              key={idx}
                              className={`px-2 py-1 text-xs font-mono ${colorClasses.bg}/10 ${colorClasses.text} border ${colorClasses.border}/30 rounded`}
                            >
                              {tech}
                            </span>
                          ))}
                          {project.tech.length > 3 && (
                            <span className="px-2 py-1 text-xs font-mono text-gray-400">
                              +{project.tech.length - 3} more
                            </span>
                          )}
                        </div>

                        {/* View More CTA */}
                        <div className={`text-sm font-mono ${colorClasses.text} mt-4 flex items-center gap-2`}>
                          <span>Click to view details</span>
                          <span className="animate-pulse">→</span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    // EXPANDED VIEW
                    <div className="relative">
                      {/* Close Button */}
                      <button
                        onClick={() => setExpandedProjectId(null)}
                        className={`absolute top-4 right-4 z-20 p-2 ${colorClasses.bg}/20 backdrop-blur-sm border-2 ${colorClasses.border} ${colorClasses.text} rounded-lg hover:${colorClasses.bg} hover:text-dark-900 transition-all duration-300`}
                      >
                        <FaTimes className="w-5 h-5" />
                      </button>

                      {/* Expanded Content Layout */}
                      <div className="grid md:grid-cols-2 gap-6">
                        {/* Left: Image */}
                        <div className="relative h-96 bg-dark-900/80 overflow-hidden rounded-l-2xl">
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-dark-800 to-transparent opacity-60" />
                          
                          {/* Status Badge */}
                          <div className="absolute top-4 left-4">
                            <span className={`px-3 py-1 text-xs font-mono border-2 ${colorClasses.border} ${colorClasses.text} bg-dark-900/90 backdrop-blur-sm`}>
                              {project.status}
                            </span>
                          </div>
                        </div>

                        {/* Right: Full Details */}
                        <div className="p-6 space-y-4 max-h-96 overflow-y-auto custom-scrollbar">
                          {/* Type Badge */}
                          <span className={`inline-block px-3 py-1 text-xs font-mono border ${colorClasses.border}/50 ${colorClasses.text}/80`}>
                            {project.type}
                          </span>

                          {/* Title */}
                          <h3 className={`text-3xl font-bold ${colorClasses.text} font-mono`}>
                            {project.title}
                          </h3>

                          {/* Full Description */}
                          <p className="text-gray-300 text-base leading-relaxed">
                            {project.description}
                          </p>

                          {/* Highlights */}
                          <div className="space-y-2">
                            <h4 className="text-sm font-mono text-white uppercase tracking-wider">Highlights:</h4>
                            {project.highlights.map((highlight, idx) => (
                              <div key={idx} className="flex items-start gap-2">
                                <span className={`${colorClasses.text} text-sm mt-0.5`}>▹</span>
                                <span className="text-gray-400 text-sm">{highlight}</span>
                              </div>
                            ))}
                          </div>

                          {/* Full Tech Stack */}
                          <div>
                            <h4 className="text-sm font-mono text-white uppercase tracking-wider mb-2">Tech Stack:</h4>
                            <div className="flex flex-wrap gap-2">
                              {project.tech.map((tech, idx) => (
                                <span
                                  key={idx}
                                  className={`px-3 py-1 text-xs font-mono ${colorClasses.bg}/10 ${colorClasses.text} border ${colorClasses.border}/30 rounded`}
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Action Buttons */}
                          <div className="flex gap-3 pt-4">
                            {Array.isArray(project.github) ? (
                              project.github.map((githubLink, idx) => (
                                <AnimatedButton
                                  key={idx}
                                  href={githubLink}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className={`group/btn flex items-center gap-2 px-4 py-2 text-sm font-mono bg-transparent border-2 ${colorClasses.border} ${colorClasses.text} hover:${colorClasses.bg} hover:text-dark-900 transition-all duration-300 relative overflow-hidden flex-1`}
                                >
                                  <span className="relative z-10 flex items-center gap-2">
                                    <FaGithub />
                                    <span>{idx === 0 ? 'BE' : 'FE'}</span>
                                  </span>
                                  <div className={`absolute inset-0 ${colorClasses.bg} transform -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-300`} />
                                </AnimatedButton>
                              ))
                            ) : (
                              <AnimatedButton
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`group/btn flex items-center gap-2 px-4 py-2 text-sm font-mono bg-transparent border-2 ${colorClasses.border} ${colorClasses.text} hover:${colorClasses.bg} hover:text-dark-900 transition-all duration-300 relative overflow-hidden flex-1`}
                              >
                                <span className="relative z-10 flex items-center gap-2">
                                  <FaGithub />
                                  <span>REPO</span>
                                </span>
                                <div className={`absolute inset-0 ${colorClasses.bg} transform -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-300`} />
                              </AnimatedButton>
                            )}
                            {project.live && (
                              <AnimatedButton
                                href={project.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`group/btn flex items-center gap-2 px-4 py-2 text-sm font-mono bg-transparent border-2 ${colorClasses.border} ${colorClasses.text} hover:${colorClasses.bg} hover:text-dark-900 transition-all duration-300 relative overflow-hidden flex-1`}
                              >
                                <span className="relative z-10 flex items-center gap-2">
                                  <FaExternalLinkAlt />
                                  <span>LIVE</span>
                                </span>
                                <div className={`absolute inset-0 ${colorClasses.bg} transform -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-300`} />
                              </AnimatedButton>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Note */}
        <div className="text-center py-8">
          <p className="text-gray-400 text-base font-mono">
            <span className="text-neon-cyan">{'>> '}</span>
            More projects coming soon. Stay tuned!
            <span className="text-neon-cyan">{' <<'}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
