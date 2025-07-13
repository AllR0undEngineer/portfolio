import React, { useState } from 'react';
import { 
  Code, 
  Database, 
  Cloud, 
  Cpu, 
  GitBranch, 
  Layers,
  Server,
  Monitor,
  Zap,
  Box,
  Settings,
  Brain,
  Globe,
  Terminal
} from 'lucide-react';

interface SkillsProps {
  darkMode: boolean;
}

interface Skill {
  name: string;
  icon: React.ReactNode;
  description: string;
  category: string;
  color: string;
  neonColor: string;
}

const Skills: React.FC<SkillsProps> = ({ darkMode }) => {
  const [isHovered, setIsHovered] = useState(false);

  const skills: Skill[] = [
    // DevOps & Cloud
    { name: 'Docker', icon: <Box className="w-8 h-8" />, description: 'Containerization & orchestration', category: 'DEVOPS', color: 'from-blue-500 to-blue-600', neonColor: '#00ffff' },
    { name: 'Kubernetes', icon: <Settings className="w-8 h-8" />, description: 'Container orchestration platform', category: 'DEVOPS', color: 'from-blue-600 to-indigo-600', neonColor: '#0080ff' },
    { name: 'Jenkins', icon: <GitBranch className="w-8 h-8" />, description: 'CI/CD automation server', category: 'DEVOPS', color: 'from-orange-500 to-red-500', neonColor: '#ff8000' },
    { name: 'Linux', icon: <Terminal className="w-8 h-8" />, description: 'System administration & scripting', category: 'DEVOPS', color: 'from-gray-600 to-gray-700', neonColor: '#00ff00' },
    
    // Programming & Backend
    { name: 'Python', icon: <Code className="w-8 h-8" />, description: 'Backend development & ML', category: 'CODE', color: 'from-yellow-500 to-blue-500', neonColor: '#ffff00' },
    { name: 'Flask', icon: <Zap className="w-8 h-8" />, description: 'Lightweight web framework', category: 'CODE', color: 'from-green-500 to-teal-500', neonColor: '#00ff80' },
    { name: 'Streamlit', icon: <Monitor className="w-8 h-8" />, description: 'ML app development platform', category: 'CODE', color: 'from-red-500 to-pink-500', neonColor: '#ff0080' },
    { name: 'Node.js', icon: <Cpu className="w-8 h-8" />, description: 'Server-side JavaScript runtime', category: 'CODE', color: 'from-green-600 to-green-700', neonColor: '#80ff00' },
    { name: 'Express.js', icon: <Server className="w-8 h-8" />, description: 'Fast Node.js web framework', category: 'CODE', color: 'from-gray-700 to-gray-800', neonColor: '#ffffff' },
    
    // Frontend
    { name: 'React', icon: <Layers className="w-8 h-8" />, description: 'Component-based UI library', category: 'FRONTEND', color: 'from-cyan-500 to-blue-500', neonColor: '#00ffff' },
    { name: 'HTML/CSS', icon: <Globe className="w-8 h-8" />, description: 'Web markup & styling', category: 'FRONTEND', color: 'from-orange-500 to-red-500', neonColor: '#ff4000' },
    { name: 'JavaScript', icon: <Code className="w-8 h-8" />, description: 'Dynamic web programming', category: 'FRONTEND', color: 'from-yellow-400 to-yellow-500', neonColor: '#ffff00' },
    
    // Database & AI
    { name: 'MongoDB', icon: <Database className="w-8 h-8" />, description: 'NoSQL document database', category: 'DATABASE', color: 'from-green-500 to-green-600', neonColor: '#00ff40' },
    { name: 'SQL', icon: <Database className="w-8 h-8" />, description: 'Relational database queries', category: 'DATABASE', color: 'from-blue-500 to-blue-600', neonColor: '#4080ff' },
    { name: 'GenAI', icon: <Brain className="w-8 h-8" />, description: 'Generative AI solutions', category: 'NEURAL', color: 'from-purple-500 to-violet-500', neonColor: '#8000ff' },
    { name: 'Agentic AI', icon: <Brain className="w-8 h-8" />, description: 'Autonomous intelligent agents', category: 'NEURAL', color: 'from-violet-500 to-purple-600', neonColor: '#ff00ff' },
    { name: 'AWS', icon: <Cloud className="w-8 h-8" />, description: 'Cloud infrastructure services', category: 'CLOUD', color: 'from-orange-400 to-orange-500', neonColor: '#ff8040' }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-black via-purple-900 to-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 cyber-grid opacity-20"></div>
      <div className="absolute inset-0 circuit-pattern opacity-15"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 font-mono">
            <span className="neon-text-cyan neon-pulse">&gt; TECH_MATRIX.load()</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mx-auto rounded-full neon-glow-cyan"></div>
          <div className="mt-6 terminal-text">
            <span className="neon-text-green">LOADING:</span> 
            <span className="neon-text-cyan ml-2">QUANTUM_TOOLKIT_v2.1</span>
          </div>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4 mt-4">
            A comprehensive <span className="neon-text-cyan">neural arsenal</span> for building 
            <span className="neon-text-pink"> quantum-enhanced</span> applications and 
            <span className="neon-text-green"> cybernetic</span> ML pipelines
          </p>
        </div>

        {/* Skills Matrix Container */}
        <div 
          className="relative min-h-[500px] overflow-hidden cyber-card p-8"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Floating Animation State */}
          <div className={`transition-all duration-1000 ease-in-out ${
            isHovered ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}>
            {/* First Data Stream - Moving Right */}
            <div className="flex animate-scroll-right space-x-8 mb-8">
              {skills.slice(0, 6).map((skill, index) => (
                <div
                  key={`stream1-${skill.name}`}
                  className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-xl cyber-card p-3 sm:p-4 flex items-center justify-center text-white relative overflow-hidden"
                  style={{
                    background: `linear-gradient(45deg, ${skill.neonColor}20, ${skill.neonColor}40)`,
                    border: `2px solid ${skill.neonColor}`,
                    boxShadow: `0 0 20px ${skill.neonColor}`,
                    animationDelay: `${index * 0.2}s`
                  }}
                >
                  <div className="w-6 h-6 sm:w-8 sm:h-8 relative z-10">
                    {React.cloneElement(skill.icon as React.ReactElement, { 
                      className: "w-full h-full",
                      style: { color: skill.neonColor }
                    })}
                  </div>
                  <div className="absolute inset-0 holographic opacity-30"></div>
                </div>
              ))}
              {/* Duplicate for seamless loop */}
              {skills.slice(0, 6).map((skill, index) => (
                <div
                  key={`stream1-dup-${skill.name}`}
                  className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-xl cyber-card p-3 sm:p-4 flex items-center justify-center text-white relative overflow-hidden"
                  style={{
                    background: `linear-gradient(45deg, ${skill.neonColor}20, ${skill.neonColor}40)`,
                    border: `2px solid ${skill.neonColor}`,
                    boxShadow: `0 0 20px ${skill.neonColor}`
                  }}
                >
                  <div className="w-6 h-6 sm:w-8 sm:h-8">
                    {React.cloneElement(skill.icon as React.ReactElement, { 
                      className: "w-full h-full",
                      style: { color: skill.neonColor }
                    })}
                  </div>
                  <div className="absolute inset-0 holographic opacity-30"></div>
                </div>
              ))}
            </div>

            {/* Second Data Stream - Moving Left */}
            <div className="flex animate-scroll-left space-x-8 mb-8">
              {skills.slice(6, 12).map((skill, index) => (
                <div
                  key={`stream2-${skill.name}`}
                  className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-xl cyber-card p-3 sm:p-4 flex items-center justify-center text-white relative overflow-hidden"
                  style={{
                    background: `linear-gradient(45deg, ${skill.neonColor}20, ${skill.neonColor}40)`,
                    border: `2px solid ${skill.neonColor}`,
                    boxShadow: `0 0 20px ${skill.neonColor}`,
                    animationDelay: `${index * 0.2}s`
                  }}
                >
                  <div className="w-6 h-6 sm:w-8 sm:h-8">
                    {React.cloneElement(skill.icon as React.ReactElement, { 
                      className: "w-full h-full",
                      style: { color: skill.neonColor }
                    })}
                  </div>
                  <div className="absolute inset-0 holographic opacity-30"></div>
                </div>
              ))}
              {/* Duplicate for seamless loop */}
              {skills.slice(6, 12).map((skill, index) => (
                <div
                  key={`stream2-dup-${skill.name}`}
                  className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-xl cyber-card p-3 sm:p-4 flex items-center justify-center text-white relative overflow-hidden"
                  style={{
                    background: `linear-gradient(45deg, ${skill.neonColor}20, ${skill.neonColor}40)`,
                    border: `2px solid ${skill.neonColor}`,
                    boxShadow: `0 0 20px ${skill.neonColor}`
                  }}
                >
                  <div className="w-6 h-6 sm:w-8 sm:h-8">
                    {React.cloneElement(skill.icon as React.ReactElement, { 
                      className: "w-full h-full",
                      style: { color: skill.neonColor }
                    })}
                  </div>
                  <div className="absolute inset-0 holographic opacity-30"></div>
                </div>
              ))}
            </div>

            {/* Third Data Stream - Moving Right */}
            <div className="flex animate-scroll-right space-x-8">
              {skills.slice(12).map((skill, index) => (
                <div
                  key={`stream3-${skill.name}`}
                  className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-xl cyber-card p-3 sm:p-4 flex items-center justify-center text-white relative overflow-hidden"
                  style={{
                    background: `linear-gradient(45deg, ${skill.neonColor}20, ${skill.neonColor}40)`,
                    border: `2px solid ${skill.neonColor}`,
                    boxShadow: `0 0 20px ${skill.neonColor}`,
                    animationDelay: `${index * 0.2}s`
                  }}
                >
                  <div className="w-6 h-6 sm:w-8 sm:h-8">
                    {React.cloneElement(skill.icon as React.ReactElement, { 
                      className: "w-full h-full",
                      style: { color: skill.neonColor }
                    })}
                  </div>
                  <div className="absolute inset-0 holographic opacity-30"></div>
                </div>
              ))}
              {/* Duplicate for seamless loop */}
              {skills.slice(12).map((skill, index) => (
                <div
                  key={`stream3-dup-${skill.name}`}
                  className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-xl cyber-card p-3 sm:p-4 flex items-center justify-center text-white relative overflow-hidden"
                  style={{
                    background: `linear-gradient(45deg, ${skill.neonColor}20, ${skill.neonColor}40)`,
                    border: `2px solid ${skill.neonColor}`,
                    boxShadow: `0 0 20px ${skill.neonColor}`
                  }}
                >
                  <div className="w-6 h-6 sm:w-8 sm:h-8">
                    {React.cloneElement(skill.icon as React.ReactElement, { 
                      className: "w-full h-full",
                      style: { color: skill.neonColor }
                    })}
                  </div>
                  <div className="absolute inset-0 holographic opacity-30"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Grid State - Shown on Hover */}
          <div className={`absolute inset-8 transition-all duration-1000 ease-in-out ${
            isHovered ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4 md:gap-6">
              {skills.map((skill, index) => (
                <div
                  key={`grid-${skill.name}`}
                  className="group p-3 sm:p-4 md:p-6 rounded-xl transition-all duration-500 transform hover:scale-105 cyber-card neon-border relative overflow-hidden"
                  style={{
                    animationDelay: `${index * 0.05}s`,
                    borderColor: skill.neonColor
                  }}
                >
                  {/* Skill Icon */}
                  <div 
                    className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-2 sm:mb-3 md:mb-4 rounded-xl p-2 sm:p-2.5 md:p-3 flex items-center justify-center text-white transition-all duration-300 group-hover:scale-110 relative"
                    style={{
                      background: `linear-gradient(45deg, ${skill.neonColor}30, ${skill.neonColor}60)`,
                      border: `2px solid ${skill.neonColor}`,
                      boxShadow: `0 0 20px ${skill.neonColor}`
                    }}
                  >
                    <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8">
                      {React.cloneElement(skill.icon as React.ReactElement, { 
                        className: "w-full h-full",
                        style: { color: skill.neonColor }
                      })}
                    </div>
                    <div className="absolute inset-0 holographic opacity-40"></div>
                  </div>
                  
                  {/* Skill Name */}
                  <h3 className="text-sm sm:text-base md:text-lg font-semibold text-center mb-1 sm:mb-2 font-mono"
                      style={{ color: skill.neonColor, textShadow: `0 0 10px ${skill.neonColor}` }}>
                    {skill.name}
                  </h3>
                  
                  {/* Skill Description */}
                  <p className="text-xs sm:text-sm text-center text-gray-400 hidden sm:block mb-2">
                    {skill.description}
                  </p>

                  {/* Category Badge */}
                  <div className="flex justify-center mt-1 sm:mt-2 md:mt-3">
                    <span 
                      className="px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full text-xs font-mono font-bold border"
                      style={{ 
                        color: skill.neonColor,
                        borderColor: skill.neonColor,
                        background: `${skill.neonColor}20`,
                        textShadow: `0 0 5px ${skill.neonColor}`
                      }}
                    >
                      {skill.category}
                    </span>
                  </div>

                  {/* Animated Border */}
                  <div 
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                    style={{ background: `linear-gradient(45deg, ${skill.neonColor}20, transparent)` }}
                  ></div>
                  
                  {/* Scan Line */}
                  <div 
                    className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: skill.neonColor, boxShadow: `0 0 10px ${skill.neonColor}` }}
                  ></div>
                </div>
              ))}
            </div>
          </div>

          {/* Interaction Prompt */}
          <div className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 transition-opacity duration-300 ${
            isHovered ? 'opacity-0' : 'opacity-100'
          }`}>
            <div className="terminal-text text-center">
              <span className="neon-text-cyan">HOVER_TO_ACCESS:</span>
              <span className="neon-text-green ml-2">DETAILED_MATRIX</span>
            </div>
          </div>
        </div>

        {/* System Summary */}
        <div className="mt-16 text-center">
          <div className="cyber-card p-8 neon-border-animated relative overflow-hidden">
            <div className="terminal-text mb-4">
              <span className="neon-text-green">&gt; system_summary.exe</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-4 neon-text-cyan font-mono">
              FULL-STACK_NEURAL_ARCHITECTURE
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-4xl mx-auto px-4 leading-relaxed">
              From <span className="neon-text-cyan">containerized microservices</span> to 
              <span className="neon-text-pink"> AI-powered applications</span>, I synthesize 
              <span className="neon-text-green">quantum development practices</span>, 
              robust infrastructure, and cutting-edge machine learning to deliver 
              <span className="neon-text-cyan">scalable, production-ready solutions</span>.
            </p>
            <div className="absolute inset-0 holographic opacity-20"></div>
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;