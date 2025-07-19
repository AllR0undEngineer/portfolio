import React, { useState, useEffect } from 'react';
import { ChevronDown, Code, Brain, Server, User, Award, Mail, Briefcase, Zap } from 'lucide-react';

interface HeroProps {
  darkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [globeRotation, setGlobeRotation] = useState(0);
  const [hoveredPoint, setHoveredPoint] = useState<string | null>(null);

  const titles = [
    'MLOPS ENGINEER',
    'FULL STACK DEVELOPER',
    'SOFTWARE ARCHITECT',
    'DATA ENGINEER'
  ];

  useEffect(() => {
    const currentTitle = titles[currentIndex];
    const typingSpeed = isDeleting ? 50 : 150;
    const pauseDelay = isDeleting ? 1000 : 2000;

    const timer = setTimeout(() => {
      if (!isDeleting && typedText === currentTitle) {
        setTimeout(() => setIsDeleting(true), pauseDelay);
      } else if (isDeleting && typedText === '') {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % titles.length);
      } else {
        setTypedText(prev => 
          isDeleting 
            ? prev.slice(0, -1)
            : currentTitle.slice(0, prev.length + 1)
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [typedText, currentIndex, isDeleting]);

  // Globe rotation animation
  useEffect(() => {
    const interval = setInterval(() => {
      setGlobeRotation(prev => (prev + 0.5) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    scrollToSection('projects');
  };

  const scrollToContact = () => {
    scrollToSection('contact');
  };

  const navigationPoints = [
    { 
      id: 'about', 
      label: 'ABOUT ME', 
      icon: <User className="w-5 h-5" />, 
      angle: 0,
      radius: 140,
      color: '#3b82f6'
    },
    { 
      id: 'skills', 
      label: 'SKILLS', 
      icon: <Brain className="w-5 h-5" />, 
      angle: 60,
      radius: 140,
      color: '#8b5cf6'
    },
    { 
      id: 'projects', 
      label: 'PROJECTS', 
      icon: <Code className="w-5 h-5" />, 
      angle: 120,
      radius: 140,
      color: '#10b981'
    },
    { 
      id: 'experience', 
      label: 'EXPERIENCE', 
      icon: <Briefcase className="w-5 h-5" />, 
      angle: 180,
      radius: 140,
      color: '#f59e0b'
    },
    { 
      id: 'achievements', 
      label: 'ACHIEVEMENTS', 
      icon: <Award className="w-5 h-5" />, 
      angle: 240,
      radius: 140,
      color: '#ef4444'
    },
    { 
      id: 'contact', 
      label: 'CONTACT', 
      icon: <Mail className="w-5 h-5" />, 
      angle: 300,
      radius: 140,
      color: '#06b6d4'
    }
  ];

  // Calculate position based on angle and radius
  const getPointPosition = (angle: number, radius: number) => {
    const radian = (angle + globeRotation) * (Math.PI / 180);
    const x = Math.cos(radian) * radius;
    const y = Math.sin(radian) * radius * 0.5;
    return {
      left: `calc(50% + ${x}px)`,
      top: `calc(50% + ${y}px)`,
      transform: 'translate(-50%, -50%)'
    };
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Matrix Rain Background */}
      <div className="matrix-rain">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-px bg-gradient-to-b from-transparent via-cyan-400 to-transparent opacity-20"
            style={{
              left: `${i * 5}%`,
              height: '100vh',
              animation: `matrix-fall ${3 + Math.random() * 2}s linear infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Floating Neon Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="floating-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
              background: i % 3 === 0 ? '#00ffff' : i % 3 === 1 ? '#ff00ff' : '#00ff00'
            }}
          />
        ))}
      </div>

      {/* Scanning Lines */}
      <div className="scan-lines absolute inset-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-6">
              <div className="relative">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight">
                  <span className="block text-white mb-2">INITIALIZING...</span>
                  <span className="block text-white font-bold drop-shadow-lg" style={{ 
                    textShadow: '2px 2px 4px rgba(0,0,0,0.8), 0 0 20px rgba(0,255,255,0.5)' 
                  }}>
                    PRIYANSH CHANDWANI
                  </span>
                </h1>
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 blur-xl -z-10 animate-pulse"></div>
              </div>
              
              <div className="h-16 sm:h-20 flex items-center justify-center lg:justify-start">
                <div className="terminal-text text-lg sm:text-xl md:text-2xl lg:text-3xl font-mono">
                  <span className="neon-text-green">
                    {typedText}
                  </span>
                  <span className="ml-1 w-1 h-8 bg-cyan-400 animate-pulse inline-block neon-glow-cyan"></span>
                </div>
              </div>
              
              <div className="relative">
                <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0 px-4 lg:px-0 leading-relaxed">
                  <span className="text-blue-400">Modern</span> ML pipelines • 
                  <span className="text-purple-400"> Scalable</span> web architectures • 
                  <span className="text-green-400"> Intelligent</span> AI solutions
                </p>
                <div className="absolute inset-0 holographic opacity-30"></div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <button
                onClick={scrollToProjects}
                className="modern-button group relative overflow-hidden bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                <Zap className="w-5 h-5 inline mr-2" />
                VIEW PROJECTS
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </button>
              
              <button
                onClick={scrollToContact}
                className="modern-button group relative overflow-hidden border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                <Mail className="w-5 h-5 inline mr-2" />
                GET IN TOUCH
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-400/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </button>
            </div>
          </div>

          {/* Right Content - Cyberpunk Globe */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
              {/* Energy Field */}
              <div className="absolute inset-0 energy-field rounded-full"></div>
              
              {/* Main Holographic Globe */}
              <div className="relative w-full h-full">
                <div className="absolute inset-4 sm:inset-6 md:inset-8 rounded-full border-2 border-cyan-400/50 bg-gradient-to-br from-cyan-900/20 to-purple-900/20 backdrop-blur-sm neon-border-animated hologram-flicker">
                  
                  {/* Cyberpunk Grid Lines */}
                  <div className="absolute inset-0 rounded-full overflow-hidden circuit-pattern opacity-30">
                    {/* Horizontal scan lines */}
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={`h-${i}`}
                        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60"
                        style={{ 
                          top: `${(i + 1) * 12.5}%`,
                          transform: `rotateZ(${globeRotation * 0.3}deg)`
                        }}
                      />
                    ))}
                    {/* Vertical scan lines */}
                    {[...Array(12)].map((_, i) => (
                      <div
                        key={`v-${i}`}
                        className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-pink-400 to-transparent opacity-40"
                        style={{ 
                          left: `${(i + 1) * 8.33}%`,
                          transform: `rotateZ(${globeRotation * 0.2}deg)`
                        }}
                      />
                    ))}
                  </div>

                  {/* Central Avatar Image */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div 
                      className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full p-1 sm:p-1.5 md:p-2 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300 neon-glow-cyan cyber-card overflow-hidden"
                      onClick={() => scrollToSection('home')}
                    >
                      <img 
                        src="/src/assets/avatar-removebg-preview.png"
                        alt="Priyansh Chandwani"
                        className="w-full h-full object-cover rounded-full border-2 border-emerald-400"
                      />
                    </div>
                  </div>
                </div>

                {/* Navigation Points */}
                {navigationPoints.map((point, index) => (
                  <div
                    key={point.id}
                    className="absolute cursor-pointer group z-10"
                    style={getPointPosition(point.angle, window.innerWidth < 640 ? 90 : window.innerWidth < 768 ? 120 : point.radius + 20)}
                    onClick={() => scrollToSection(point.id)}
                    onMouseEnter={() => setHoveredPoint(point.id)}
                    onMouseLeave={() => setHoveredPoint(null)}
                  >
                    <div 
                      className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-white transition-all duration-300 group-hover:scale-125 transform hover:rotate-12 cyber-card"
                      style={{
                        background: `linear-gradient(45deg, ${point.color}, ${point.color}cc)`,
                        boxShadow: `0 4px 15px ${point.color}40`,
                        border: `2px solid ${point.color}`,
                        animation: `orbit-${point.id} 20s linear infinite, float 3s ease-in-out infinite`,
                        animationDelay: `${index * 0.5}s`
                      }}
                    >
                      <div className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5">
                        {React.cloneElement(point.icon as React.ReactElement, { 
                          className: "w-full h-full" 
                        })}
                      </div>
                    </div>
                    
                    {/* Holographic Label */}
                    <div className={`absolute -bottom-12 sm:-bottom-14 md:-bottom-16 left-1/2 transform -translate-x-1/2 transition-all duration-300 ${
                      hoveredPoint === point.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                    }`}>
                      <div className="px-3 py-2 rounded-lg bg-white/10 backdrop-blur-sm text-xs sm:text-sm font-semibold whitespace-nowrap border shadow-lg"
                           style={{ 
                             borderColor: point.color,
                             color: point.color,
                             textShadow: `0 0 5px ${point.color}40`
                           }}
                    >
                        {point.label}
                      </div>
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1 w-2 h-2 rotate-45"
                           style={{ backgroundColor: point.color }}></div>
                    </div>

                    {/* Energy Pulse */}
                    <div className="absolute inset-0 rounded-full opacity-0 group-active:opacity-50 group-active:animate-ping"
                         style={{ background: point.color }}></div>
                    
                    {/* Hover Aura */}
                    <div className="absolute -inset-4 rounded-full opacity-0 group-hover:opacity-30 blur-md transition-opacity duration-300"
                         style={{ background: point.color }}></div>
                  </div>
                ))}

                {/* Orbital Data Streams */}
                <div 
                  className="absolute inset-0 rounded-full border border-cyan-400/20 data-stream"
                  style={{ transform: `rotate(${globeRotation}deg)` }}
                ></div>
                <div 
                  className="absolute inset-4 rounded-full border border-pink-400/20 data-stream"
                  style={{ transform: `rotate(${-globeRotation * 0.7}deg)` }}
                ></div>
                <div 
                  className="absolute inset-12 rounded-full border border-green-400/20 data-stream"
                  style={{ transform: `rotate(${globeRotation * 0.5}deg)` }}
                ></div>

                {/* Outer Energy Ring */}
                <div className="absolute -inset-8 rounded-full bg-gradient-to-r from-cyan-600/10 via-purple-600/10 to-pink-600/10 blur-2xl animate-pulse"></div>
              </div>

              {/* System Status */}
              <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
                <div className="terminal-text text-xs font-mono">
                  <span className="text-green-400">STATUS:</span> 
                  <span className="text-blue-400 ml-2">AVAILABLE</span>
                  <span className="ml-2 w-2 h-2 bg-green-400 rounded-full inline-block animate-pulse"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-xs sm:text-sm font-mono neon-text-cyan">
            SCROLL TO EXPLORE
          </span>
          <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
        </div>
      </div>

      <style jsx>{`
        @keyframes matrix-fall {
          0% { transform: translateY(-100vh); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default Hero;