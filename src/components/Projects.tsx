import React from 'react';
import { ExternalLink, Github, Play, Server, BarChart3, Scale, Zap } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

interface ProjectsProps {
  darkMode: boolean;
}

interface Project {
  title: string;
  description: string;
  icon: React.ReactNode;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  neonColor: string;
  status: string;
}

const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const projects: Project[] = [
    {
      title: 'DEVOPS_COMMAND_CENTER',
      description: 'A quantum-enhanced Docker and Linux control matrix that enables remote system management via encrypted SSH tunnels. Features real-time neural monitoring, container orchestration, and automated deployment pipelines.',
      icon: <Server className="w-8 h-8" />,
      technologies: ['Docker', 'Linux', 'SSH', 'Python', 'Flask', 'JavaScript'],
      githubUrl: '#',
      liveUrl: '#',
      featured: true,
      neonColor: '#00ffff',
      status: 'ACTIVE'
    },
    {
      title: 'VIRAL_PREDICTION_ENGINE',
      description: 'An ML-powered neural network that predicts YouTube video views in the first week using quantum algorithms, metadata analysis, and temporal pattern recognition with 94.7% accuracy.',
      icon: <BarChart3 className="w-8 h-8" />,
      technologies: ['Python', 'Scikit-learn', 'Streamlit', 'Pandas', 'NumPy'],
      githubUrl: '#',
      liveUrl: '#',
      featured: true,
      neonColor: '#ff00ff',
      status: 'DEPLOYED'
    },
    {
      title: 'AI_LEGAL_NEXUS',
      description: 'A cybernetic AI assistant powered by generative neural networks that provides legal advice and document analysis. Features quantum natural language processing and contextual understanding matrices.',
      icon: <Scale className="w-8 h-8" />,
      technologies: ['Python', 'OpenAI', 'LangChain', 'Streamlit', 'NLP'],
      githubUrl: '#',
      liveUrl: '#',
      featured: true,
      neonColor: '#00ff00',
      status: 'BETA'
    }
  ];

  // Placeholder projects for future expansion
  const placeholderProjects = [
    { title: 'QUANTUM_PROJECT_ALPHA', description: 'Neural network in development...', featured: false, neonColor: '#ff8000' },
    { title: 'CYBER_PROJECT_BETA', description: 'AI system initializing...', featured: false, neonColor: '#8000ff' },
    { title: 'MATRIX_PROJECT_GAMMA', description: 'Quantum algorithm loading...', featured: false, neonColor: '#ff0080' }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 cyber-grid opacity-20"></div>
      <div className="absolute inset-0 circuit-pattern opacity-15"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection direction="up">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 font-mono">
              <span className="neon-text-cyan neon-pulse">&gt; CODE_VAULT.access()</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mx-auto rounded-full neon-glow-cyan"></div>
            <div className="mt-6 terminal-text">
              <span className="neon-text-green">ACCESSING:</span> 
              <span className="neon-text-cyan ml-2">FEATURED_PROJECTS.db</span>
            </div>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4 mt-4">
              Showcasing <span className="neon-text-cyan">innovative solutions</span> that bridge the gap between 
              <span className="neon-text-pink">development</span>, <span className="neon-text-green">operations</span>, and 
              <span className="neon-text-cyan">artificial intelligence</span>
            </p>
          </div>
        </AnimatedSection>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {projects.map((project, index) => (
            <AnimatedSection 
              key={project.title}
              direction={index % 2 === 0 ? 'left' : 'right'}
              delay={index * 200}
            >
              <div className="group relative overflow-hidden rounded-2xl transition-all duration-300 transform hover:scale-105 cyber-card neon-border-animated">
                {/* Status Indicator */}
                <div className="absolute top-4 right-4 z-20">
                  <div 
                    className="px-2 py-1 rounded-full text-xs font-mono font-bold border"
                    style={{
                      color: project.neonColor,
                      borderColor: project.neonColor,
                      background: `${project.neonColor}20`,
                      textShadow: `0 0 5px ${project.neonColor}`,
                      boxShadow: `0 0 10px ${project.neonColor}`
                    }}
                  >
                    {project.status}
                  </div>
                </div>

                {/* Glowing Border Effect */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-sm"
                  style={{ background: `linear-gradient(45deg, ${project.neonColor}, transparent)` }}
                ></div>
                
                <div className="relative p-4 sm:p-6 md:p-8">
                  {/* Project Icon */}
                  <div 
                    className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center text-white mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 relative overflow-hidden"
                    style={{
                      background: `linear-gradient(45deg, ${project.neonColor}30, ${project.neonColor}60)`,
                      border: `2px solid ${project.neonColor}`,
                      boxShadow: `0 0 20px ${project.neonColor}`
                    }}
                  >
                    <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 relative z-10">
                      {React.cloneElement(project.icon as React.ReactElement, { 
                        className: "w-full h-full",
                        style: { color: project.neonColor }
                      })}
                    </div>
                    <div className="absolute inset-0 holographic opacity-40"></div>
                  </div>

                  {/* Project Title */}
                  <h3 
                    className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 font-mono"
                    style={{ 
                      color: project.neonColor,
                      textShadow: `0 0 10px ${project.neonColor}`
                    }}
                  >
                    {project.title}
                  </h3>

                  {/* Project Description */}
                  <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6 leading-relaxed text-gray-300">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6 sm:mb-8">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 sm:px-3 rounded-full text-xs sm:text-sm font-mono font-medium border"
                        style={{
                          color: project.neonColor,
                          borderColor: `${project.neonColor}60`,
                          background: `${project.neonColor}10`
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                    <a
                      href={project.githubUrl}
                      className="cyber-button flex items-center justify-center space-x-2 px-3 py-2 sm:px-4 rounded-lg font-mono font-medium transition-all duration-300 text-sm sm:text-base border-gray-500 text-gray-300 hover:bg-gray-500"
                    >
                      <Github className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span>SOURCE</span>
                    </a>
                    <a
                      href={project.liveUrl}
                      className="cyber-button flex items-center justify-center space-x-2 px-3 py-2 sm:px-4 rounded-lg font-mono font-medium transition-all duration-300 text-sm sm:text-base"
                      style={{
                        borderColor: project.neonColor,
                        color: project.neonColor
                      }}
                    >
                      <Play className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span>EXECUTE</span>
                    </a>
                  </div>
                </div>

                {/* Scan Line Effect */}
                <div 
                  className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ 
                    background: project.neonColor,
                    boxShadow: `0 0 10px ${project.neonColor}`
                  }}
                ></div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Placeholder Projects */}
        <AnimatedSection direction="up" delay={600}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-16">
            {placeholderProjects.map((project, index) => (
              <div
                key={project.title}
                className="p-4 sm:p-6 rounded-xl border-2 border-dashed transition-all duration-300 cyber-card relative overflow-hidden"
                style={{ borderColor: `${project.neonColor}40` }}
              >
                <div className="text-center space-y-4">
                  <div 
                    className="w-12 h-12 sm:w-16 sm:h-16 mx-auto rounded-xl flex items-center justify-center border-2"
                    style={{ 
                      borderColor: project.neonColor,
                      background: `${project.neonColor}10`
                    }}
                  >
                    <ExternalLink 
                      className="w-6 h-6 sm:w-8 sm:h-8"
                      style={{ color: project.neonColor }}
                    />
                  </div>
                  <h3 
                    className="text-lg sm:text-xl font-semibold font-mono"
                    style={{ 
                      color: project.neonColor,
                      textShadow: `0 0 5px ${project.neonColor}`
                    }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-400 font-mono">
                    {project.description}
                  </p>
                </div>
                <div className="absolute inset-0 holographic opacity-20"></div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Call to Action */}
        <AnimatedSection direction="up" delay={800}>
          <div className="text-center">
            <div className="terminal-text mb-6">
              <span className="neon-text-green">QUERY:</span>
              <span className="neon-text-cyan ml-2">MORE_PROJECTS_AVAILABLE?</span>
            </div>
            <a
              href="https://github.com/AllR0undEngineer"
              className="cyber-button inline-flex items-center space-x-2 px-6 py-3 sm:px-8 font-mono font-semibold transition-all duration-300 transform hover:scale-105 text-sm sm:text-base border-cyan-400 text-cyan-400 hover:bg-cyan-400 group"
            >
              <Github className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>ACCESS_FULL_REPOSITORY</span>
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 group-hover:animate-pulse" />
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Projects;