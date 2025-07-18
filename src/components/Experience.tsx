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
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 cyber-grid opacity-20"></div>
      <div className="absolute inset-0 circuit-pattern opacity-15"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection direction="up">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 font-mono">
              <span className="text-blue-500">Work Experience</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 mx-auto rounded-full"></div>
            <div className="mt-6 text-gray-400">
              <span className="text-green-500">My</span> 
              <span className="text-blue-500 ml-2">professional journey</span>
            </div>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4 mt-4">
              Building expertise through <span className="text-blue-400">hands-on experience</span> in 
              <span className="text-purple-400"> modern development</span> and 
              <span className="text-green-400"> operations</span>
            </p>
          </div>
        </AnimatedSection>

        <div className="relative">
          {/* Modern Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500"></div>

          {experiences.map((experience, index) => (
            <AnimatedSection 
              key={index} 
              direction={index % 2 === 0 ? 'right' : 'left'}
              delay={200}
            >
              <div className="relative mb-12">
                {/* Modern Timeline Node */}
                <div className="absolute left-6 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-gray-900 shadow-lg"></div>
                
                {/* Content */}
                <div className="ml-20">
                  <div className="bg-white/5 backdrop-blur-sm border border-gray-600/30 rounded-2xl p-6 sm:p-8 transition-all duration-300 shadow-xl relative overflow-hidden">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold mb-2 text-blue-400">
                          {experience.title}
                        </h3>
                        <div className="flex items-center space-x-2 mb-2">
                          <Building2 className="w-5 h-5 text-purple-400" />
                          <span className="text-base sm:text-lg font-semibold text-purple-400">
                            {experience.company}
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col sm:items-end space-y-2">
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4 text-green-400" />
                          <span className="text-sm font-medium text-gray-300">
                            {experience.period}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4 text-orange-400" />
                          <span className="text-sm font-medium text-gray-300">
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
                            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm sm:text-base md:text-lg leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-base sm:text-lg font-semibold mb-3 text-green-400">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-gray-800/50 text-blue-400 border border-blue-400/50"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Future Opportunities */}
        <AnimatedSection direction="up" delay={400}>
          <div className="text-center mt-16">
            <div className="bg-white/5 backdrop-blur-sm border border-gray-600/30 rounded-2xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
              <div className="text-gray-400 mb-4">
                <span className="text-green-400">Career Status</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-blue-400">
                Open to New Opportunities
              </h3>
              <p className="text-sm sm:text-base md:text-lg mb-6 text-gray-300 leading-relaxed">
                I'm actively seeking <span className="text-blue-400">full-time positions</span> where I can contribute to 
                <span className="text-purple-400"> innovative projects</span> and continue growing as a 
                <span className="text-green-400">developer and operations specialist</span>.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center space-x-2 px-6 py-3 sm:px-8 font-semibold transition-all duration-300 transform hover:scale-105 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
              >
                <span>Get In Touch</span>
              </a>
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Experience;