'use client';

import { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaWhatsapp, FaExclamationCircle } from 'react-icons/fa';
import AnimatedButton from '@/components/AnimatedButton';
import GlitchText from '@/components/GlitchText';
import SquaresBackground from '@/components/SquaresBackground';
import toast, { Toaster } from 'react-hot-toast';

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  // Validation function
  const validateField = (name: string, value: string): string | undefined => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Name is required';
        if (value.trim().length < 2) return 'Name must be at least 2 characters';
        if (value.trim().length > 50) return 'Name must be less than 50 characters';
        break;
      case 'email':
        if (!value.trim()) return 'Email is required';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) return 'Invalid email format';
        break;
      case 'subject':
        if (!value.trim()) return 'Subject is required';
        if (value.trim().length < 5) return 'Subject must be at least 5 characters';
        if (value.trim().length > 100) return 'Subject must be less than 100 characters';
        break;
      case 'message':
        if (!value.trim()) return 'Message is required';
        if (value.trim().length < 10) return 'Message must be at least 10 characters';
        if (value.trim().length > 1000) return 'Message must be less than 1000 characters';
        break;
    }
    return undefined;
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key as keyof typeof formData]);
      if (error) {
        newErrors[key as keyof FormErrors] = error;
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleBlur = (field: string) => {
    setTouched({ ...touched, [field]: true });
    const error = validateField(field, formData[field as keyof typeof formData]);
    setErrors({ ...errors, [field]: error });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Validate on change if field has been touched
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors({ ...errors, [name]: error });
    }
  };

  const handleWhatsAppClick = () => {
    if (!validateForm()) {
      toast.error('Please fill in all fields correctly', {
        icon: '⚠️',
        style: {
          background: '#12121a',
          color: '#ff10f0',
          border: '2px solid #ff10f0',
          fontFamily: 'monospace',
        },
      });
      return;
    }

    const msg = encodeURIComponent(
      `Hi Jek, saya ${formData.name}\n(${formData.email})\n\n**Subjek:** ${formData.subject}\n\n**Pesan:** ${formData.message}`
    );
    window.open(`https://wa.me/6285767615311?text=${msg}`, '_blank');
  };

  const handleEmailClick = () => {
    if (!validateForm()) {
      toast.error('Please fill in all fields correctly', {
        icon: '⚠️',
        style: {
          background: '#12121a',
          color: '#ff10f0',
          border: '2px solid #ff10f0',
          fontFamily: 'monospace',
        },
      });
      return;
    }

    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(
      `Hi Jek, saya ${formData.name}\n(${formData.email})\n\n**Subjek:** ${formData.subject}\n\n**Pesan:** ${formData.message}`
    );
    window.open(`mailto:irfndzky@gmail.com?subject=${subject}&body=${body}`, '_blank');
  };

  return (
    <>
      <Toaster position="top-right" />
      <div className="min-h-screen bg-dark-900 relative overflow-x-hidden">
      {/* Animated Squares Background */}
      <SquaresBackground
        squareSize={40}
        speed={0.5}
        direction="down"
        borderColor="rgba(168, 85, 247, 0.15)"
        hoverColor={[
          'rgba(0, 229, 255, 0.6)',
          'rgba(255, 16, 240, 0.6)',
          'rgba(168, 85, 247, 0.6)',
          'rgba(16, 240, 160, 0.6)',
        ]}
      />

      {/* Glowing Orbs Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-neon-cyan/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-neon-pink/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-neon-purple/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 md:pt-28 pb-24 md:pb-8">
        
        {/* Page Header */}
        <div className="mb-12 relative">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-2 h-16 bg-gradient-to-b from-neon-cyan via-neon-purple to-neon-pink flicker-slow" />
            <div>
              <h1 className="text-5xl font-bold font-mono bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink bg-clip-text text-transparent">
                <GlitchText text="GET_IN_TOUCH" delay={2800} />
              </h1>
              <p className="text-gray-500 text-sm font-mono mt-2">{'<contact> Let\'s work together </contact>'}</p>
            </div>
          </div>
          <div className="h-px w-full bg-gradient-to-r from-neon-cyan/50 via-transparent to-transparent" />
        </div>

        <div className="flex flex-col gap-8 mb-8">
          {/* Contact Form (SEND_MESSAGE) */}
          <div className="bg-dark-800/50 backdrop-blur-sm border-2 border-neon-cyan/30 rounded-2xl p-8 relative group hover:border-neon-cyan/60 transition-all duration-500 hover:shadow-2xl hover:shadow-neon-cyan/20">
            {/* Scanline Effect on Hover */}
            <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-10 transition-opacity duration-500 overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-cyan to-transparent animate-scan" />
            </div>

            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-neon-cyan" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-neon-cyan" />
            
            {/* Watermark */}
            <div className="absolute top-4 right-4 text-neon-cyan/20 text-6xl font-mono">01</div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-neon-cyan flicker-fast" />
                <h3 className="text-2xl font-bold font-mono text-white">
                  <GlitchText text="SEND_MESSAGE" delay={3200} />
                </h3>
              </div>

              <form className="flex flex-col md:flex-row gap-6">
                {/* Left: Name, Email, Subject */}
                <div className="flex-1 space-y-4">
                  <div>
                    <label className="block text-sm font-mono text-gray-400 mb-2">
                      {'<name>'}
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={() => handleBlur('name')}
                      className={`w-full bg-dark-900/50 border-2 ${
                        touched.name && errors.name 
                          ? 'border-red-500 focus:border-red-500' 
                          : 'border-neon-cyan/30 focus:border-neon-cyan'
                      } text-white px-4 py-3 font-mono focus:outline-none transition-colors duration-300`}
                      placeholder="Your name..."
                    />
                    {touched.name && errors.name && (
                      <div className="flex items-center gap-2 mt-2 text-red-500 text-xs font-mono">
                        <FaExclamationCircle />
                        <span>{errors.name}</span>
                      </div>
                    )}
                    <label className="block text-sm font-mono text-gray-400 mt-1">
                      {'</name>'}
                    </label>
                  </div>
                  <div>
                    <label className="block text-sm font-mono text-gray-400 mb-2">
                      {'<email>'}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={() => handleBlur('email')}
                      className={`w-full bg-dark-900/50 border-2 ${
                        touched.email && errors.email 
                          ? 'border-red-500 focus:border-red-500' 
                          : 'border-neon-cyan/30 focus:border-neon-cyan'
                      } text-white px-4 py-3 font-mono focus:outline-none transition-colors duration-300`}
                      placeholder="your.email@example.com"
                    />
                    {touched.email && errors.email && (
                      <div className="flex items-center gap-2 mt-2 text-red-500 text-xs font-mono">
                        <FaExclamationCircle />
                        <span>{errors.email}</span>
                      </div>
                    )}
                    <label className="block text-sm font-mono text-gray-400 mt-1">
                      {'</email>'}
                    </label>
                  </div>
                  <div>
                    <label className="block text-sm font-mono text-gray-400 mb-2">
                      {'<subject>'}
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      onBlur={() => handleBlur('subject')}
                      className={`w-full bg-dark-900/50 border-2 ${
                        touched.subject && errors.subject 
                          ? 'border-red-500 focus:border-red-500' 
                          : 'border-neon-cyan/30 focus:border-neon-cyan'
                      } text-white px-4 py-3 font-mono focus:outline-none transition-colors duration-300`}
                      placeholder="What's this about?"
                    />
                    {touched.subject && errors.subject && (
                      <div className="flex items-center gap-2 mt-2 text-red-500 text-xs font-mono">
                        <FaExclamationCircle />
                        <span>{errors.subject}</span>
                      </div>
                    )}
                    <label className="block text-sm font-mono text-gray-400 mt-1">
                      {'</subject>'}
                    </label>
                  </div>
                </div>
                {/* Right: Message, Button */}
                <div className="flex-1 flex flex-col space-y-4">
                  <div className="flex-1 flex flex-col">
                    <label className="block text-sm font-mono text-gray-400 mb-2">
                      {'<message>'}
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={() => handleBlur('message')}
                      rows={5}
                      className={`w-full h-full min-h-[120px] bg-dark-900/50 border-2 ${
                        touched.message && errors.message 
                          ? 'border-red-500 focus:border-red-500' 
                          : 'border-neon-cyan/30 focus:border-neon-cyan'
                      } text-white px-4 py-3 font-mono focus:outline-none transition-colors duration-300 resize-none`}
                      placeholder="Your message..."
                    />
                    {touched.message && errors.message && (
                      <div className="flex items-center gap-2 mt-2 text-red-500 text-xs font-mono">
                        <FaExclamationCircle />
                        <span>{errors.message}</span>
                      </div>
                    )}
                    <label className="block text-sm font-mono text-gray-400 mt-1">
                      {'</message>'}
                    </label>
                  </div>

                  <div className="flex flex-row gap-4 w-full">
                    <button
                      type="button"
                      onClick={handleWhatsAppClick}
                      disabled={isLoading}
                      className="group/submit flex-1 flex items-center justify-center gap-2 px-6 py-4 text-sm font-mono bg-transparent border-2 border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-dark-900 transition-all duration-300 relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        <span className="flex flex-col items-center">
                          <span className="relative z-10">{'[ WHATSAPP ]'}</span>
                          <span className="text-xs mt-1 relative z-10 transition-colors duration-300 text-neon-cyan/80 group-hover/submit:text-dark-900 font-semibold tracking-wide">Faster</span>
                        </span>
                      </span>
                      <div className="absolute inset-0 bg-neon-cyan transform -translate-x-full group-hover/submit:translate-x-0 transition-transform duration-300" />
                    </button>
                    <button
                      type="button"
                      onClick={handleEmailClick}
                      disabled={isLoading}
                      className="group/submit flex-1 flex items-center justify-center gap-2 px-6 py-4 text-sm font-mono bg-transparent border-2 border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-dark-900 transition-all duration-300 relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        <span className="flex flex-col items-center">
                          <span className="relative z-10">{'[ EMAIL ]'}</span>
                          <span className="text-xs mt-1 relative z-10 transition-colors duration-300 text-neon-cyan/80 group-hover/submit:text-dark-900 font-semibold tracking-wide">Standard</span>
                        </span>
                      </span>
                      <div className="absolute inset-0 bg-neon-cyan transform -translate-x-full group-hover/submit:translate-x-0 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Social Links */}
          <div className="bg-dark-800/50 backdrop-blur-sm border-2 border-neon-purple/30 rounded-2xl p-6 relative group hover:border-neon-purple/60 transition-all duration-500 hover:shadow-2xl hover:shadow-neon-purple/20">
            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-neon-purple" />
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-neon-purple" />
            {/* Watermark */}
            <div className="absolute top-4 right-4 text-neon-purple/20 text-6xl font-mono">02</div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-neon-purple flicker-slow" />
                <h3 className="text-2xl font-bold font-mono text-white">
                  <GlitchText text="SOCIAL_LINKS" delay={4000} />
                </h3>
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                {/* Kiri: GitHub & LinkedIn */}
                <div className="flex-1 space-y-3">
                  <AnimatedButton
                    href="https://github.com/MuhammadIrfanDzaky"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn w-full flex items-center gap-4 p-4 border-2 border-neon-cyan/30 hover:border-neon-cyan hover:bg-neon-cyan/10 transition-all duration-300"
                  >
                    <FaGithub className="text-neon-cyan text-2xl" />
                    <div className="flex-1 text-left">
                      <p className="text-white font-mono text-sm">GitHub</p>
                      <p className="text-gray-500 text-sm font-mono">@MuhammadIrfanDzaky</p>
                    </div>
                    <span className="text-neon-cyan">{'>'}</span>
                  </AnimatedButton>
                  <AnimatedButton
                    href="https://www.linkedin.com/in/muhammad-irfan-dzaky/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn w-full flex items-center gap-4 p-4 border-2 border-neon-purple/30 hover:border-neon-purple hover:bg-neon-purple/10 transition-all duration-300"
                  >
                    <FaLinkedin className="text-neon-purple text-2xl" />
                    <div className="flex-1 text-left">
                      <p className="text-white font-mono text-sm">LinkedIn</p>
                      <p className="text-gray-500 text-sm font-mono">@muhammad-irfan-dzaky</p>
                    </div>
                    <span className="text-neon-purple">{'>'}</span>
                  </AnimatedButton>
                </div>
                {/* Kanan: Email & WhatsApp */}
                <div className="flex-1 space-y-3">
                  <AnimatedButton
                    href="mailto:irfndzky@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn w-full flex items-center gap-4 p-4 border-2 border-neon-green/30 hover:border-neon-green hover:bg-neon-green/10 transition-all duration-300"
                  >
                    <FaEnvelope className="text-neon-green text-2xl" />
                    <div className="flex-1 text-left">
                      <p className="text-white font-mono text-sm">Email</p>
                      <p className="text-gray-500 text-sm font-mono">irfndzky@gmail.com</p>
                    </div>
                    <span className="text-neon-green">{'>'}</span>
                  </AnimatedButton>
                  <AnimatedButton
                    href="https://wa.me/6285767615311?text=Hi%20Jek!"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn w-full flex items-center gap-4 p-4 border-2 border-neon-pink/30 hover:border-neon-pink hover:bg-neon-pink/10 transition-all duration-300"
                  >
                    <FaWhatsapp className="text-neon-pink text-2xl" />
                    <div className="flex-1 text-left">
                      <p className="text-white font-mono text-sm">WhatsApp</p>
                      <p className="text-gray-500 text-sm font-mono">+62 857-6761-5311</p>
                    </div>
                    <span className="text-neon-pink">{'>'}</span>
                  </AnimatedButton>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Note - Let's Connect! */}
        <div className="text-center py-8">
          <p className="text-gray-500 text-sm font-mono">
            <span className="text-neon-cyan">{'>> '}</span>
            Let&apos;s Connect!
            <span className="text-neon-cyan">{' <<'}</span>
          </p>
        </div>
      </div>
      </div>
    </>
  );
}