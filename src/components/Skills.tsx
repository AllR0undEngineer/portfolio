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
}

const Skills: React.FC<SkillsProps> = ({ darkMode }) => {
  const [isHovered, setIsHovered] = useState(false);

  const skills: Skill[] = [
    // DevOps & Cloud
    { name: 'Docker', icon: <Box className="w-8 h-8" />, description: 'Containerization & orchestration', category: 'DevOps', color: 'from-blue-500 to-blue-600' },
    { name: 'Kubernetes', icon: <Settings className="w-8 h-8" />, description: 'Container orchestration platform', category: 'DevOps', color: 'from-blue-600 to-indigo-600' },
    { name: 'Jenkins', icon: <GitBranch className="w-8 h-8" />, description: 'CI/CD automation server', category: 'DevOps', color: 'from-orange-500 to-red-500' },
    { name: 'Linux', icon: <Terminal className="w-8 h-8" />, description: 'System administration & scripting', category: 'DevOps', color: 'from-gray-600 to-gray-700' },
    
    // Programming & Backend
    { name: 'Python', icon: <Code className="w-8 h-8" />, description: 'Backend development & ML', category: 'Programming', color: 'from-yellow-500 to-blue-500' },
    { name: 'Flask', icon: <Zap className="w-8 h-8" />, description: 'Lightweight web framework', category: 'Programming', color: 'from-green-500 to-teal-500' },
    { name: 'Streamlit', icon: <Monitor className="w-8 h-8" />, description: 'ML app development platform', category: 'Programming', color: 'from-red-500 to-pink-500' },
    { name: 'Node.js', icon: <Cpu className="w-8 h-8" />, description: 'Server-side JavaScript runtime', category: 'Programming', color: 'from-green-600 to-green-700' },
    { name: 'Express.js', icon: <Server className="w-8 h-8" />, description: 'Fast Node.js web framework', category: 'Programming', color: 'from-gray-700 to-gray-800' },
    
    // Frontend
    { name: 'React', icon: <Layers className="w-8 h-8" />, description: 'Component-based UI library', category: 'Frontend', color: 'from-cyan-500 to-blue-500' },
    { name: 'HTML/CSS', icon: <Globe className="w-8 h-8" />, description: 'Web markup & styling', category: 'Frontend', color: 'from-orange-500 to-red-500' },
    { name: 'JavaScript', icon: <Code className="w-8 h-8" />, description: 'Dynamic web programming', category: 'Frontend', color: 'from-yellow-400 to-yellow-500' },
    
    // Database & AI
    { name: 'MongoDB', icon: <Database className="w-8 h-8" />, description: 'NoSQL document database', category: 'Database', color: 'from-green-500 to-green-600' },
    { name: 'SQL', icon: <Database className="w-8 h-8" />, description: 'Relational database queries', category: 'Database', color: 'from-blue-500 to-blue-600' },
    { name: 'GenAI', icon: <Brain className="w-8 h-8" />, description: 'Generative AI solutions', category: 'AI', color: 'from-purple-500 to-violet-500' },
    { name: 'Agentic AI', icon: <Brain className="w-8 h-8" />, description: 'Autonomous intelligent agents', category: 'AI', color: 'from-violet-500 to-purple-600' },
    { name: 'AWS', icon: <Cloud className="w-8 h-8" />, description: 'Cloud infrastructure services', category: 'Cloud', color: 'from-orange-400 to-orange-500' }
  ];

  return (
    <section id="skills" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-8"></div>
          <p className={`text-base sm:text-lg md:text-xl ${darkMode ? 'text-gray-300' : 'text-gray-700'} max-w-3xl mx-auto px-4`}>
            A comprehensive toolkit for building modern, scalable applications and ML pipelines
          </p>
        </div>

        {/* Skills Container */}
        <div 
          className="relative min-h-[500px] overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Floating Animation State */}
          <div className={`transition-all duration-1000 ease-in-out ${
            isHovered ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}>
            {/* First Row - Moving Right */}
            <div className="flex animate-scroll-right space-x-8 mb-8">
              {skills.slice(0, 6).map((skill, index) => (
                <div
                  key={`row1-${skill.name}`}
                  className={`flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-gradient-to-r ${skill.color} p-3 sm:p-4 flex items-center justify-center text-white shadow-lg`}
                  style={{
                    animationDelay: `${index * 0.2}s`
                  }}
                >
                  <div className="w-6 h-6 sm:w-8 sm:h-8">
                    {React.cloneElement(skill.icon as React.ReactElement, { 
                      className: "w-full h-full" 
                    })}
                  </div>
                </div>
              ))}
              {/* Duplicate for seamless loop */}
              {skills.slice(0, 6).map((skill, index) => (
                <div
                  key={`row1-dup-${skill.name}`}
                  className={`flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-gradient-to-r ${skill.color} p-3 sm:p-4 flex items-center justify-center text-white shadow-lg`}
                >
                  <div className="w-6 h-6 sm:w-8 sm:h-8">
                    {React.cloneElement(skill.icon as React.ReactElement, { 
                      className: "w-full h-full" 
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* Second Row - Moving Left */}
            <div className="flex animate-scroll-left space-x-8 mb-8">
              {skills.slice(6, 12).map((skill, index) => (
                <div
                  key={`row2-${skill.name}`}
                  className={`flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-gradient-to-r ${skill.color} p-3 sm:p-4 flex items-center justify-center text-white shadow-lg`}
                  style={{
                    animationDelay: `${index * 0.2}s`
                  }}
                >
                  <div className="w-6 h-6 sm:w-8 sm:h-8">
                    {React.cloneElement(skill.icon as React.ReactElement, { 
                      className: "w-full h-full" 
                    })}
                  </div>
                </div>
              ))}
              {/* Duplicate for seamless loop */}
              {skills.slice(6, 12).map((skill, index) => (
                <div
                  key={`row2-dup-${skill.name}`}
                  className={`flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-gradient-to-r ${skill.color} p-3 sm:p-4 flex items-center justify-center text-white shadow-lg`}
                >
                  <div className="w-6 h-6 sm:w-8 sm:h-8">
                    {React.cloneElement(skill.icon as React.ReactElement, { 
                      className: "w-full h-full" 
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* Third Row - Moving Right */}
            <div className="flex animate-scroll-right space-x-8">
              {skills.slice(12).map((skill, index) => (
                <div
                  key={`row3-${skill.name}`}
                  className={`flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-gradient-to-r ${skill.color} p-3 sm:p-4 flex items-center justify-center text-white shadow-lg`}
                  style={{
                    animationDelay: `${index * 0.2}s`
                  }}
                >
                  <div className="w-6 h-6 sm:w-8 sm:h-8">
                    {React.cloneElement(skill.icon as React.ReactElement, { 
                      className: "w-full h-full" 
                    })}
                  </div>
                </div>
              ))}
              {/* Duplicate for seamless loop */}
              {skills.slice(12).map((skill, index) => (
                <div
                  key={`row3-dup-${skill.name}`}
                  className={`flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-gradient-to-r ${skill.color} p-3 sm:p-4 flex items-center justify-center text-white shadow-lg`}
                >
                  <div className="w-6 h-6 sm:w-8 sm:h-8">
                    {React.cloneElement(skill.icon as React.ReactElement, { 
                      className: "w-full h-full" 
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Grid State - Shown on Hover */}
          <div className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            isHovered ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4 md:gap-6 p-2 sm:p-4">
              {skills.map((skill, index) => (
                <div
                  key={`grid-${skill.name}`}
                  className={`group p-3 sm:p-4 md:p-6 rounded-xl transition-all duration-500 transform hover:scale-105 ${
                    darkMode 
                      ? 'bg-gray-900 hover:bg-gray-800 border border-gray-700' 
                      : 'bg-white hover:bg-gray-50 border border-gray-200 shadow-lg'
                  }`}
                  style={{
                    animationDelay: `${index * 0.05}s`
                  }}
                >
                  {/* Skill Icon */}
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-2 sm:mb-3 md:mb-4 rounded-xl bg-gradient-to-r ${skill.color} p-2 sm:p-2.5 md:p-3 flex items-center justify-center text-white transition-all duration-300 group-hover:scale-110`}>
                    <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8">
                      {React.cloneElement(skill.icon as React.ReactElement, { 
                        className: "w-full h-full" 
                      })}
                    </div>
                  </div>
                  
                  {/* Skill Name */}
                  <h3 className={`text-sm sm:text-base md:text-lg font-semibold text-center mb-1 sm:mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {skill.name}
                  </h3>
                  
                  {/* Skill Description */}
                  <p className={`text-xs sm:text-sm text-center ${darkMode ? 'text-gray-400' : 'text-gray-600'} hidden sm:block`}>
                    {skill.description}
                  </p>

                  {/* Category Badge */}
                  <div className="flex justify-center mt-1 sm:mt-2 md:mt-3">
                    <span className={`px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full text-xs font-medium ${
                      darkMode 
                        ? 'bg-gray-700 text-gray-300' 
                        : 'bg-gray-100 text-gray-700'
                    }`}>
                      {skill.category}
                    </span>
                  </div>

                  {/* Animated Border */}
                  <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                </div>
              ))}
            </div>
          </div>

          {/* Hover Instruction */}
          <div className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 transition-opacity duration-300 ${
            isHovered ? 'opacity-0' : 'opacity-100'
          }`}>
            <p className={`text-xs sm:text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'} text-center`}>
              Hover to explore skills in detail
            </p>
          </div>
        </div>

        {/* Skills Summary */}
        <div className="mt-16 text-center">
          <div className={`p-8 rounded-2xl ${darkMode ? 'bg-gray-900' : 'bg-white'} shadow-xl`}>
            <h3 className={`text-xl sm:text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Full-Stack Expertise
            </h3>
            <p className={`text-sm sm:text-base md:text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'} max-w-4xl mx-auto px-4`}>
              From containerized microservices to AI-powered applications, I bring together 
              modern development practices, robust infrastructure, and cutting-edge machine learning 
              to deliver scalable, production-ready solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;