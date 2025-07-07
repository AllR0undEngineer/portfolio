import React from 'react';
import { Award, ExternalLink, Calendar, Trophy } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

interface AchievementsProps {
  darkMode: boolean;
}

interface Achievement {
  title: string;
  issuer: string;
  date: string;
  description: string;
  certificateUrl?: string;
  featured: boolean;
}

const Achievements: React.FC<AchievementsProps> = ({ darkMode }) => {
  const achievements: Achievement[] = [
    {
      title: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: 'Coming Soon',
      description: 'Demonstrates expertise in designing distributed systems on AWS',
      certificateUrl: '#',
      featured: true
    },
    {
      title: 'Docker Certified Associate',
      issuer: 'Docker Inc.',
      date: 'Coming Soon',
      description: 'Validates skills in containerization and orchestration',
      certificateUrl: '#',
      featured: true
    },
    {
      title: 'Kubernetes Administrator (CKA)',
      issuer: 'CNCF',
      date: 'Coming Soon',
      description: 'Certifies ability to manage Kubernetes clusters',
      certificateUrl: '#',
      featured: true
    }
  ];

  return (
    <section id="achievements" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection direction="up">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Achievements & Certifications
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-8"></div>
            <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-700'} max-w-3xl mx-auto`}>
              Continuous learning and professional development milestones
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <AnimatedSection 
              key={achievement.title}
              direction={index % 2 === 0 ? 'left' : 'right'}
              delay={index * 150}
            >
              <div className={`group relative overflow-hidden rounded-2xl transition-all duration-300 transform hover:scale-105 ${
                darkMode 
                  ? 'bg-gray-800 hover:bg-gray-700' 
                  : 'bg-white hover:bg-gray-50'
              } shadow-lg hover:shadow-xl`}>
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative p-8">
                  {/* Achievement Icon */}
                  <div className="flex items-center justify-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center">
                      <Trophy className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Achievement Details */}
                  <div className="text-center space-y-4">
                    <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {achievement.title}
                    </h3>
                    
                    <div className="flex items-center justify-center space-x-2">
                      <Award className="w-4 h-4 text-blue-600" />
                      <span className={`text-sm font-medium ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                        {achievement.issuer}
                      </span>
                    </div>

                    <div className="flex items-center justify-center space-x-2">
                      <Calendar className="w-4 h-4 text-gray-500" />
                      <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {achievement.date}
                      </span>
                    </div>

                    <p className={`text-sm leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      {achievement.description}
                    </p>

                    {achievement.certificateUrl && (
                      <div className="pt-4">
                        <a
                          href={achievement.certificateUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                            darkMode 
                              ? 'bg-gray-700 hover:bg-gray-600 text-gray-300' 
                              : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                          }`}
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>View Certificate</span>
                        </a>
                      </div>
                    )}
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-500 to-orange-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Placeholder for Additional Achievements */}
        <AnimatedSection direction="up" delay={600}>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(3)].map((_, index) => (
              <div
                key={`placeholder-${index}`}
                className={`p-6 rounded-xl border-2 border-dashed transition-all duration-300 ${
                  darkMode 
                    ? 'border-gray-700 bg-gray-800/50 hover:border-gray-600' 
                    : 'border-gray-300 bg-gray-50 hover:border-gray-400'
                }`}
              >
                <div className="text-center space-y-4">
                  <div className={`w-12 h-12 mx-auto rounded-full ${
                    darkMode ? 'bg-gray-700' : 'bg-gray-200'
                  } flex items-center justify-center`}>
                    <Award className={`w-6 h-6 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`} />
                  </div>
                  <h3 className={`text-lg font-semibold ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Future Achievement
                  </h3>
                  <p className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                    More certifications coming soon...
                  </p>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Call to Action */}
        <AnimatedSection direction="up" delay={800}>
          <div className="text-center mt-16">
            <div className={`p-8 rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
              <h3 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Continuous Learning Journey
              </h3>
              <p className={`text-lg mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                I'm constantly expanding my skill set and pursuing new certifications to stay at the forefront of technology.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                  darkMode ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-700'
                }`}>
                  AWS Solutions Architect - In Progress
                </span>
                <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                  darkMode ? 'bg-purple-900 text-purple-300' : 'bg-purple-100 text-purple-700'
                }`}>
                  Kubernetes CKA - In Progress
                </span>
                <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                  darkMode ? 'bg-green-900 text-green-300' : 'bg-green-100 text-green-700'
                }`}>
                  Docker Certified - In Progress
                </span>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Achievements;