import React from 'react';
import { ExternalLink, Github, Play, Server, BarChart3, Scale } from 'lucide-react';
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
}

const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const projects: Project[] = [
    {
      title: 'DevOps Command Center',
      description: 'A comprehensive Docker and Linux control panel that enables remote system management via SSH. Features real-time monitoring, container orchestration, and automated deployment pipelines.',
      icon: <Server className="w-8 h-8" />,
      technologies: ['Docker', 'Linux', 'SSH', 'Python', 'Flask', 'JavaScript'],
      githubUrl: '#',
      liveUrl: '#',
      featured: true
    },
    {
      title: 'Viral Views Predictor',
      description: 'An ML-powered application that predicts YouTube video views in the first week based on video duration, metadata, and historical patterns. Built with advanced regression models.',
      icon: <BarChart3 className="w-8 h-8" />,
      technologies: ['Python', 'Scikit-learn', 'Streamlit', 'Pandas', 'NumPy'],
      githubUrl: '#',
      liveUrl: '#',
      featured: true
    },
    {
      title: 'AI Legal Advisor',
      description: 'A conversational AI assistant powered by generative AI that provides legal advice and document analysis. Features natural language processing and contextual understanding.',
      icon: <Scale className="w-8 h-8" />,
      technologies: ['Python', 'OpenAI', 'LangChain', 'Streamlit', 'NLP'],
      githubUrl: '#',
      liveUrl: '#',
      featured: true
    }
  ];

  // Placeholder projects for future expansion
  const placeholderProjects = [
    { title: 'Upcoming Project 1', description: 'Coming soon...', featured: false },
    { title: 'Upcoming Project 2', description: 'Coming soon...', featured: false },
    { title: 'Upcoming Project 3', description: 'Coming soon...', featured: false }
  ];

  return (
    <section id="projects" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection direction="up">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-8"></div>
            <p className={`text-base sm:text-lg md:text-xl ${darkMode ? 'text-gray-300' : 'text-gray-700'} max-w-3xl mx-auto px-4`}>
              Showcasing innovative solutions that bridge the gap between development, operations, and AI
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
              <div className={`group relative overflow-hidden rounded-2xl transition-all duration-300 transform hover:scale-105 ${
                darkMode 
                  ? 'bg-gray-800 hover:bg-gray-700' 
                  : 'bg-white hover:bg-gray-50'
              } shadow-xl hover:shadow-2xl`}>
                {/* Glowing Border */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl opacity-0 group-hover:opacity-30 blur transition-opacity duration-300"></div>
                
                <div className="relative p-4 sm:p-6 md:p-8">
                  {/* Project Icon */}
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8">
                      {React.cloneElement(project.icon as React.ReactElement, { 
                        className: "w-full h-full" 
                      })}
                    </div>
                  </div>

                  {/* Project Title */}
                  <h3 className={`text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {project.title}
                  </h3>

                  {/* Project Description */}
                  <p className={`text-sm sm:text-base md:text-lg mb-4 sm:mb-6 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6 sm:mb-8">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`px-2 py-1 sm:px-3 rounded-full text-xs sm:text-sm font-medium ${
                          darkMode 
                            ? 'bg-gray-700 text-gray-300' 
                            : 'bg-gray-100 text-gray-700'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                    <a
                      href={project.githubUrl}
                      className={`flex items-center justify-center space-x-2 px-3 py-2 sm:px-4 rounded-lg font-medium transition-all duration-300 text-sm sm:text-base ${
                        darkMode 
                          ? 'bg-gray-700 hover:bg-gray-600 text-gray-300' 
                          : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                      }`}
                    >
                      <Github className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span>Source</span>
                    </a>
                    <a
                      href={project.liveUrl}
                      className="flex items-center justify-center space-x-2 px-3 py-2 sm:px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-sm sm:text-base"
                    >
                      <Play className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Placeholder Projects */}
        <AnimatedSection direction="up" delay={600}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {placeholderProjects.map((project, index) => (
              <div
                key={project.title}
                className={`p-4 sm:p-6 rounded-xl border-2 border-dashed transition-all duration-300 ${
                  darkMode 
                    ? 'border-gray-700 bg-gray-800/50 hover:border-gray-600' 
                    : 'border-gray-300 bg-gray-50 hover:border-gray-400'
                }`}
              >
                <div className="text-center space-y-4">
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 mx-auto rounded-xl ${
                    darkMode ? 'bg-gray-700' : 'bg-gray-200'
                  } flex items-center justify-center`}>
                    <ExternalLink className={`w-6 h-6 sm:w-8 sm:h-8 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`} />
                  </div>
                  <h3 className={`text-lg sm:text-xl font-semibold ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {project.title}
                  </h3>
                  <p className={`text-sm sm:text-base ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Call to Action */}
        <AnimatedSection direction="up" delay={800}>
          <div className="text-center mt-16">
            <p className={`text-base sm:text-lg mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'} px-4`}>
              Interested in seeing more of my work?
            </p>
            <a
              href="https://github.com/AllR0undEngineer"
              className="inline-flex items-center space-x-2 px-6 py-3 sm:px-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
            >
              <Github className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>View All Projects on GitHub</span>
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Projects;