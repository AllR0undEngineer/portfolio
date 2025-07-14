import React from 'react';
import { Calendar, MapPin, Building2 } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

interface ExperienceProps {
  darkMode: boolean;
}

const Experience: React.FC<ExperienceProps> = ({ darkMode }) => {
  const experiences = [
    {
      title: 'Summer Intern',
      company: 'Linux World',
      period: 'June 2025 – Present',
      location: 'Remote',
      description: [
        'Developed and maintained containerized applications using Docker and Kubernetes',
        'Implemented CI/CD pipelines with Jenkins for automated testing and deployment',
        'Collaborated with cross-functional teams to deliver scalable solutions',
        'Gained hands-on experience with Linux system administration and DevOps practices'
      ],
      technologies: ['Docker', 'Kubernetes', 'Jenkins', 'Linux', 'Python', 'AWS']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-black via-purple-900 to-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 cyber-grid opacity-20"></div>
      <div className="absolute inset-0 circuit-pattern opacity-15"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection direction="up">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 font-mono">
              <span className="neon-text-cyan neon-pulse">&gt; DATA_LOGS.access()</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mx-auto rounded-full neon-glow-cyan"></div>
            <div className="mt-6 terminal-text">
              <span className="neon-text-green">LOADING:</span> 
              <span className="neon-text-cyan ml-2">EXPERIENCE_DATABASE</span>
            </div>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4 mt-4">
              Building expertise through <span className="neon-text-cyan">hands-on experience</span> in 
              <span className="neon-text-pink"> modern development</span> and 
              <span className="neon-text-green"> operations</span>
            </p>
          </div>
        </AnimatedSection>

        <div className="relative">
          {/* Cyberpunk Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500 neon-glow-cyan"></div>

          {experiences.map((experience, index) => (
            <AnimatedSection 
              key={index} 
              direction={index % 2 === 0 ? 'right' : 'left'}
              delay={200}
            >
              <div className="relative mb-12">
                {/* Cyberpunk Timeline Node */}
                <div className="absolute left-6 w-6 h-6 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full border-4 border-black neon-glow-cyan"></div>
                
                {/* Content */}
                <div className="ml-20">
                  <div className="cyber-card p-6 sm:p-8 rounded-2xl transition-all duration-300 neon-border-animated relative overflow-hidden">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold mb-2 neon-text-cyan font-mono">
                          {experience.title}
                        </h3>
                        <div className="flex items-center space-x-2 mb-2">
                          <Building2 className="w-5 h-5 text-pink-400 neon-glow-pink" />
                          <span className="text-base sm:text-lg font-semibold neon-text-pink">
                            {experience.company}
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col sm:items-end space-y-2">
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4 text-green-400 neon-glow-green" />
                          <span className="text-sm font-medium text-gray-300 font-mono">
                            {experience.period}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4 text-orange-400 neon-glow-orange" />
                          <span className="text-sm font-medium text-gray-300 font-mono">
                            {experience.location}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="mb-6">
                      <ul className="space-y-3">
                        {experience.description.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start space-x-3 text-gray-300">
                            <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mt-2 flex-shrink-0 neon-glow-cyan"></div>
                            <span className="text-sm sm:text-base md:text-lg leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-base sm:text-lg font-semibold mb-3 neon-text-green font-mono">
                        TECH_STACK.load()
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 rounded-full text-xs sm:text-sm font-medium font-mono bg-gray-800/50 text-cyan-400 border border-cyan-400/50 neon-glow-cyan"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Holographic Overlay */}
                    <div className="absolute inset-0 holographic opacity-20"></div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Future Opportunities */}
        <AnimatedSection direction="up" delay={400}>
          <div className="text-center mt-16">
            <div className="cyber-card p-6 sm:p-8 rounded-2xl neon-border-animated relative overflow-hidden">
              <div className="terminal-text mb-4">
                <span className="neon-text-green">&gt; career_status.exe</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 neon-text-cyan font-mono">
                SEEKING_NEW_OPPORTUNITIES
              </h3>
              <p className="text-sm sm:text-base md:text-lg mb-6 text-gray-300 leading-relaxed">
                I'm actively seeking <span className="neon-text-cyan">full-time positions</span> where I can contribute to 
                <span className="neon-text-pink"> innovative projects</span> and continue growing as a 
                <span className="neon-text-green">developer and operations specialist</span>.
              </p>
              <a
                href="#contact"
                className="cyber-button inline-flex items-center space-x-2 px-6 py-3 sm:px-8 font-mono font-semibold transition-all duration-300 transform hover:scale-105"
              >
                <span>ESTABLISH_CONNECTION</span>
              </a>
              <div className="absolute inset-0 holographic opacity-20"></div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Experience;