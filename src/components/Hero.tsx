import React, { useState, useEffect } from 'react';
import { ChevronDown, Code, Brain, Server, User, Award, Mail, Briefcase } from 'lucide-react';

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
    'MLOps Engineer',
    'Full Stack Developer',
    'DevOps Specialist',
    'AI Enthusiast'
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
      label: 'About Me', 
      icon: <User className="w-5 h-5" />, 
      angle: 0,
      radius: 140,
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      id: 'skills', 
      label: 'Skills', 
      icon: <Brain className="w-5 h-5" />, 
      angle: 60,
      radius: 140,
      color: 'from-orange-500 to-red-500'
    },
    { 
      id: 'projects', 
      label: 'Projects', 
      icon: <Code className="w-5 h-5" />, 
      angle: 120,
      radius: 140,
      color: 'from-green-500 to-teal-500'
    },
    { 
      id: 'experience', 
      label: 'Experience', 
      icon: <Briefcase className="w-5 h-5" />, 
      angle: 180,
      radius: 140,
      color: 'from-purple-500 to-violet-500'
    },
    { 
      id: 'achievements', 
      label: 'Achievements', 
      icon: <Award className="w-5 h-5" />, 
      angle: 240,
      radius: 140,
      color: 'from-yellow-500 to-orange-500'
    },
    { 
      id: 'contact', 
      label: 'Contact', 
      icon: <Mail className="w-5 h-5" />, 
      angle: 300,
      radius: 140,
      color: 'from-pink-500 to-rose-500'
    }
  ];

  // Calculate position based on angle and radius
  const getPointPosition = (angle: number, radius: number) => {
    const radian = (angle + globeRotation) * (Math.PI / 180);
    const x = Math.cos(radian) * radius;
    const y = Math.sin(radian) * radius * 0.5; // Flatten for 3D effect
    return {
      left: `calc(50% + ${x}px)`,
      top: `calc(50% + ${y}px)`,
      transform: 'translate(-50%, -50%)'
    };
  };

  return (
    <section id="home" className={`min-h-screen flex items-center justify-center relative overflow-hidden ${
      darkMode ? 'bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900' : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'
    }`}>
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full opacity-30 animate-float ${
              darkMode ? 'bg-blue-400' : 'bg-blue-600'
            }`}
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight">
                <span className={`block ${darkMode ? 'text-white' : 'text-gray-900'}`}>Hi, I'm</span>
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Priyansh Chandwani
                </span>
              </h1>
              <div className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${darkMode ? 'text-gray-300' : 'text-gray-800'} h-16 flex items-center justify-center lg:justify-start`}>
                <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                  {typedText}
                </span>
                <span className="ml-1 w-1 h-8 bg-gradient-to-r from-orange-500 to-red-500 animate-pulse"></span>
              </div>
              <p className={`text-xl ${darkMode ? 'text-gray-400' : 'text-gray-700'} max-w-2xl mx-auto lg:mx-0`}>
                Passionate about building scalable ML pipelines, creating innovative web applications, 
                and implementing cutting-edge AI solutions.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={scrollToProjects}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                View Projects
              </button>
              <button
                onClick={scrollToContact}
                className={`px-8 py-4 border-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                  darkMode 
                    ? 'border-gray-600 text-gray-300 hover:border-gray-400 hover:text-white' 
                    : 'border-gray-400 text-gray-800 hover:border-gray-600 hover:text-gray-900'
                }`}
              >
                Contact Me
              </button>
            </div>
          </div>

          {/* Right Content - Interactive Globe */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-96 h-96">
              {/* Globe Container */}
              <div className="relative w-full h-full">
                {/* Main Globe */}
                <div className={`absolute inset-8 rounded-full border-4 ${
                  darkMode 
                    ? 'border-blue-400/30 bg-gradient-to-br from-blue-900/20 to-purple-900/20' 
                    : 'border-blue-500/30 bg-gradient-to-br from-blue-100/50 to-purple-100/50'
                } backdrop-blur-sm transition-all duration-300 hover:border-blue-400/50`}>
                  
                  {/* Globe Grid Lines */}
                  <div className="absolute inset-0 rounded-full overflow-hidden">
                    {/* Horizontal lines */}
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={`h-${i}`}
                        className={`absolute left-0 right-0 h-px ${
                          darkMode ? 'bg-blue-400/20' : 'bg-blue-500/20'
                        }`}
                        style={{ 
                          top: `${(i + 1) * 12.5}%`,
                          transform: `rotateZ(${globeRotation * 0.3}deg)`
                        }}
                      />
                    ))}
                    {/* Vertical lines */}
                    {[...Array(12)].map((_, i) => (
                      <div
                        key={`v-${i}`}
                        className={`absolute top-0 bottom-0 w-px ${
                          darkMode ? 'bg-blue-400/20' : 'bg-blue-500/20'
                        }`}
                        style={{ 
                          left: `${(i + 1) * 8.33}%`,
                          transform: `rotateZ(${globeRotation * 0.2}deg)`
                        }}
                      />
                    ))}
                  </div>

                  {/* Center Logo */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div 
                      className={`w-20 h-20 rounded-full p-2 flex items-center justify-center animate-pulse shadow-lg cursor-pointer hover:scale-110 transition-transform duration-300 ${
                        darkMode 
                          ? 'bg-gradient-to-r from-blue-600 to-purple-600' 
                          : 'bg-gradient-to-r from-blue-500 to-purple-500'
                      }`}
                      onClick={() => scrollToSection('home')}
                    >
                      <img 
                        src="/src/assets/priyansh-high-resolution-logo-removebg-preview.png" 
                        alt="Priyansh Chandwani Logo" 
                        className={`w-full h-full object-contain transition-all duration-300 ${
                          darkMode 
                            ? 'filter brightness-0 invert' 
                            : 'filter brightness-0'
                        }`}
                      />
                    </div>
                  </div>
                </div>

                {/* Navigation Points */}
                {navigationPoints.map((point, index) => (
                  <div
                    key={point.id}
                    className="absolute cursor-pointer group z-10"
                    style={getPointPosition(point.angle, point.radius)}
                    onClick={() => scrollToSection(point.id)}
                    onMouseEnter={() => setHoveredPoint(point.id)}
                    onMouseLeave={() => setHoveredPoint(null)}
                  >
                    <div 
                      className={`w-12 h-12 rounded-full bg-gradient-to-r ${point.color} flex items-center justify-center text-white shadow-lg transition-all duration-300 group-hover:scale-125 group-hover:shadow-xl transform hover:rotate-12`}
                      style={{
                        animation: `float 3s ease-in-out infinite`,
                        animationDelay: `${index * 0.5}s`
                      }}
                    >
                      {point.icon}
                    </div>
                    
                    {/* Label */}
                    <div className={`absolute -bottom-12 left-1/2 transform -translate-x-1/2 transition-all duration-300 ${
                      hoveredPoint === point.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                    }`}>
                      <div className={`px-3 py-2 rounded-lg ${
                        darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
                      } shadow-lg text-sm font-semibold whitespace-nowrap border ${
                        darkMode ? 'border-gray-700' : 'border-gray-200'
                      }`}>
                        {point.label}
                      </div>
                      <div className={`absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1 w-2 h-2 rotate-45 ${
                        darkMode ? 'bg-gray-800' : 'bg-white'
                      }`}></div>
                    </div>

                    {/* Click Ripple Effect */}
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${point.color} opacity-0 group-active:opacity-50 group-active:animate-ping`}></div>
                    
                    {/* Hover Glow */}
                    <div className={`absolute -inset-2 rounded-full bg-gradient-to-r ${point.color} opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300`}></div>
                  </div>
                ))}

                {/* Orbital Rings */}
                <div 
                  className="absolute inset-0 rounded-full border border-blue-400/10"
                  style={{ transform: `rotate(${globeRotation}deg)` }}
                ></div>
                <div 
                  className="absolute inset-4 rounded-full border border-purple-400/10"
                  style={{ transform: `rotate(${-globeRotation * 0.7}deg)` }}
                ></div>
                <div 
                  className="absolute inset-12 rounded-full border border-indigo-400/10"
                  style={{ transform: `rotate(${globeRotation * 0.5}deg)` }}
                ></div>

                {/* Outer Glow Ring */}
                <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-indigo-600/10 blur-xl animate-pulse"></div>
              </div>

              {/* Interactive Instruction */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                <p className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'} text-center animate-bounce`}>
                  Click points to navigate
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center space-y-2">
          <span className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-700'}`}>
            Explore
          </span>
          <ChevronDown className={`w-8 h-8 ${darkMode ? 'text-gray-400' : 'text-gray-700'}`} />
        </div>
      </div>
    </section>
  );
};

export default Hero;