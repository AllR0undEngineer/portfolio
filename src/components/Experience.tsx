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
    <section id="experience" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection direction="up">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Professional Experience
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-8"></div>
            <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-700'} max-w-3xl mx-auto`}>
              Building expertise through hands-on experience in modern development and operations
            </p>
          </div>
        </AnimatedSection>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>

          {experiences.map((experience, index) => (
            <AnimatedSection 
              key={index} 
              direction={index % 2 === 0 ? 'right' : 'left'}
              delay={200}
            >
              <div className="relative mb-12">
                {/* Timeline Node */}
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white dark:border-gray-800"></div>
                
                {/* Content */}
                <div className="ml-20">
                  <div className={`p-8 rounded-2xl transition-all duration-300 ${
                    darkMode 
                      ? 'bg-gray-900 hover:bg-gray-800' 
                      : 'bg-white hover:bg-gray-50'
                  } shadow-lg hover:shadow-xl`}>
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                      <div>
                        <h3 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                          {experience.title}
                        </h3>
                        <div className="flex items-center space-x-2 mb-2">
                          <Building2 className="w-5 h-5 text-blue-600" />
                          <span className={`text-lg font-semibold ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                            {experience.company}
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col sm:items-end space-y-2">
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4 text-gray-500" />
                          <span className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            {experience.period}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4 text-gray-500" />
                          <span className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            {experience.location}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="mb-6">
                      <ul className="space-y-3">
                        {experience.description.map((item, itemIndex) => (
                          <li key={itemIndex} className={`flex items-start space-x-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-lg leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className={`text-lg font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                          <span
                            key={tech}
                            className={`px-3 py-1 rounded-full text-sm font-medium ${
                              darkMode 
                                ? 'bg-gray-700 text-gray-300' 
                                : 'bg-gray-100 text-gray-700'
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Future Opportunities */}
        <AnimatedSection direction="up" delay={400}>
          <div className="text-center mt-16">
            <div className={`p-8 rounded-2xl ${darkMode ? 'bg-gray-900' : 'bg-white'} shadow-lg`}>
              <h3 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Looking for New Opportunities
              </h3>
              <p className={`text-lg mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                I'm actively seeking full-time positions where I can contribute to innovative projects 
                and continue growing as a developer and operations specialist.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center space-x-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                <span>Let's Connect</span>
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Experience;