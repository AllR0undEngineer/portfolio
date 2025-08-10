import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Download, 
  ChevronDown, 
  Code, 
  Server, 
  Database,
  Zap,
  Terminal,
  Cpu
} from 'lucide-react';
import AnimatedSection from './AnimatedSection';

interface HeroProps {
  darkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  const [currentRole, setCurrentRole] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const roles = [
    'MLOps Engineer',
    'Full Stack Developer', 
    'DevOps Specialist',
    'AI/ML Engineer'
  ];

  const orbitalIcons = [
    { icon: <Code className="w-6 h-6" />, label: 'Frontend', delay: 0, color: '#00ffff' },
    { icon: <Server className="w-6 h-6" />, label: 'Backend', delay: 1, color: '#ff00ff' },
    { icon: <Database className="w-6 h-6" />, label: 'Database', delay: 2, color: '#00ff00' },
    { icon: <Zap className="w-6 h-6" />, label: 'DevOps', delay: 3, color: '#ffff00' },
    { icon: <Terminal className="w-6 h-6" />, label: 'Linux', delay: 4, color: '#ff8000' },
    { icon: <Cpu className="w-6 h-6" />, label: 'AI/ML', delay: 5, color: '#8000ff' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTyping(false);
      setTimeout(() => {
        setCurrentRole((prev) => (prev + 1) % roles.length);
        setIsTyping(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github className="w-6 h-6" />,
      url: 'https://github.com/AllR0undEngineer',
      color: 'hover:text-gray-300',
      neonColor: '#ffffff'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-6 h-6" />,
      url: 'www.linkedin.com/in/priyanshchandwani',
      color: 'hover:text-blue-400',
      neonColor: '#0080ff'
    },
    {
      name: 'Email',
      icon: <Mail className="w-6 h-6" />,
      url: 'mailto:priyanshchandwani1st@gmail.com',
      color: 'hover:text-green-400',
      neonColor: '#00ff80'
    }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 cyber-grid opacity-30"></div>
      <div className="absolute inset-0 circuit-pattern opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <AnimatedSection direction="up">
            {/* Main Heading */}
            <div className="mb-8 sm:mb-12">
              <div className="text-gray-400 mb-4 text-sm sm:text-base md:text-lg">
                <span className="text-green-400">Hello, I'm</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 sm:mb-8 font-mono">
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-green-400 bg-clip-text text-transparent neon-pulse">
                  Priyansh Chandwani
                </span>
              </h1>
              
              {/* Dynamic Role Display */}
              <div className="mb-6 sm:mb-8 h-12 sm:h-16 md:h-20 flex items-center justify-center">
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
                  <span className="text-blue-400">I'm a </span>
                  <span 
                    className={`inline-block transition-all duration-500 ${
                      isTyping ? 'opacity-100 transform scale-100' : 'opacity-0 transform scale-95'
                    }`}
                    style={{ 
                      color: currentRole === 0 ? '#00ffff' : 
                             currentRole === 1 ? '#ff00ff' : 
                             currentRole === 2 ? '#00ff00' : '#ffff00',
                      textShadow: `0 0 20px currentColor`
                    }}
                  >
                    {roles[currentRole]}
                  </span>
                  <span className="animate-pulse text-green-400">|</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-12 max-w-4xl mx-auto px-4 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Bridging the gap between <span className="text-blue-400">development</span> and 
                <span className="text-purple-400"> operations</span>, creating scalable 
                <span className="text-green-400"> ML pipelines</span> and 
                <span className="text-blue-400"> intelligent systems</span> that drive innovation.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={200}>
            {/* Orbital Tech Stack Visualization */}
            <div className="mb-12 sm:mb-16 relative">
              <div className="relative w-80 h-80 sm:w-96 sm:h-96 md:w-[28rem] md:h-[28rem] lg:w-[32rem] lg:h-[32rem] mx-auto">
                {/* Central Avatar */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-2xl sm:text-3xl md:text-4xl shadow-2xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-transparent to-purple-400/20"></div>
                    <span className="relative z-10">PC</span>
                    <div className="absolute inset-0 rounded-full border-2 border-blue-400/50 animate-pulse"></div>
                  </div>
                </div>

                {/* Orbital Rings */}
                <div className="absolute inset-0 rounded-full border border-blue-400/30 orbital-ring"></div>
                <div className="absolute inset-4 rounded-full border border-purple-400/20 orbital-ring"></div>
                <div className="absolute inset-8 rounded-full border border-green-400/20 orbital-ring"></div>

                {/* Orbital Icons */}
                {orbitalIcons.map((item, index) => (
                  <div
                    key={item.label}
                    className="absolute orbital-icon"
                    style={{
                      top: '50%',
                      left: '50%',
                      transform: `translate(-50%, -50%) rotate(${index * 60}deg) translateX(var(--orbit-radius, 160px)) rotate(-${index * 60}deg)`,
                      animationDelay: `${item.delay}s`
                    }}
                  >
                    <div 
                      className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-125 relative overflow-hidden shadow-lg group"
                      style={{
                        background: `linear-gradient(45deg, ${item.color}30, ${item.color}60)`,
                        border: `2px solid ${item.color}`,
                        boxShadow: `0 4px 15px ${item.color}40`
                      }}
                    >
                      <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 relative z-10">
                        {React.cloneElement(item.icon as React.ReactElement, { 
                          className: "w-full h-full",
                          style: { color: item.color }
                        })}
                      </div>
                      <div className="absolute inset-0 holographic opacity-30"></div>
                      
                      {/* Tooltip */}
                      <div 
                        className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-2 py-1 rounded text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap border shadow-lg"
                        style={{
                          background: `${item.color}20`,
                          borderColor: item.color,
                          color: item.color
                        }}
                      >
                        {item.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={400}>
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12 sm:mb-16">
              <a
                href="#projects"
                className="group px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl text-sm sm:text-base relative overflow-hidden"
              >
                <span className="relative z-10">View My Work</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <a
                href="#contact"
                className="group px-6 py-3 sm:px-8 sm:py-4 border-2 border-blue-500 text-blue-400 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:bg-blue-500 hover:text-white text-sm sm:text-base relative overflow-hidden"
              >
                <span className="relative z-10">Get In Touch</span>
                <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <a
                href="/src/assets/resumemain(1).pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center space-x-2 px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl text-sm sm:text-base relative overflow-hidden"
              >
                <Download className="w-4 h-4 sm:w-5 sm:h-5 relative z-10" />
                <span className="relative z-10">Resume</span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-700 to-teal-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={600}>
            {/* Social Links */}
            <div className="flex justify-center space-x-6 sm:space-x-8 mb-12 sm:mb-16">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 sm:p-4 rounded-full transition-all duration-300 transform hover:scale-125 bg-white/10 backdrop-blur-sm border-2 relative overflow-hidden shadow-lg"
                  style={{ borderColor: link.neonColor }}
                >
                  <div 
                    className="w-5 h-5 sm:w-6 sm:h-6 transition-colors duration-300"
                    style={{ color: link.neonColor }}
                  >
                    {React.cloneElement(link.icon as React.ReactElement, { 
                      className: "w-full h-full" 
                    })}
                  </div>
                  <div 
                    className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                    style={{ background: link.neonColor }}
                  ></div>
                </a>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={800}>
            {/* Scroll Indicator */}
            <div className="flex flex-col items-center space-y-2 sm:space-y-4">
              <div className="text-gray-400 text-xs sm:text-sm">
                <span className="text-green-400">Scroll</span>
                <span className="text-blue-400 ml-2">to explore</span>
              </div>
              <div className="animate-bounce">
                <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Hero;