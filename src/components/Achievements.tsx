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
  neonColor: string;
}

const Achievements: React.FC<AchievementsProps> = ({ darkMode }) => {
  const achievements: Achievement[] = [
    {
      title: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: 'Coming Soon',
      description: 'Demonstrates expertise in designing distributed systems on AWS',
      certificateUrl: '#',
      featured: true,
      neonColor: '#ff8000'
    },
    {
      title: 'Docker Certified Associate',
      issuer: 'Docker Inc.',
      date: 'Coming Soon',
      description: 'Validates skills in containerization and orchestration',
      certificateUrl: '#',
      featured: true,
      neonColor: '#00ffff'
    },
    {
      title: 'Kubernetes Administrator (CKA)',
      issuer: 'CNCF',
      date: 'Coming Soon',
      description: 'Certifies ability to manage Kubernetes clusters',
      certificateUrl: '#',
      featured: true,
      neonColor: '#8000ff'
    }
  ];

  return (
    <section id="achievements" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 cyber-grid opacity-20"></div>
      <div className="absolute inset-0 circuit-pattern opacity-15"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection direction="up">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 font-mono">
              <span className="text-blue-500">Achievements & Certifications</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 mx-auto rounded-full"></div>
            <div className="mt-6 text-gray-400">
              <span className="text-green-500">Professional</span> 
              <span className="text-blue-500 ml-2">certifications & achievements</span>
            </div>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4 mt-4">
              <span className="text-blue-400">Continuous learning</span> and 
              <span className="text-purple-400"> professional development</span> milestones
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {achievements.map((achievement, index) => (
            <AnimatedSection 
              key={achievement.title}
              direction={index % 2 === 0 ? 'left' : 'right'}
              delay={index * 150}
            >
              <div className="group relative overflow-hidden rounded-2xl transition-all duration-300 transform hover:scale-105 cyber-card neon-border-animated">
                <div className="group relative overflow-hidden rounded-2xl transition-all duration-300 transform hover:scale-105 bg-white/5 backdrop-blur-sm border border-gray-600/30 shadow-xl">
                <div 
                  className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-300"
                  style={{ background: `linear-gradient(45deg, ${achievement.neonColor}, transparent)` }}
                ></div>
                
                <div className="relative p-6 sm:p-8">
                  {/* Achievement Icon */}
                  <div className="flex items-center justify-center mb-6">
                    <div 
                      className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 relative overflow-hidden"
                      style={{
                        background: `linear-gradient(45deg, ${achievement.neonColor}30, ${achievement.neonColor}60)`,
                        border: `2px solid ${achievement.neonColor}`,
                        boxShadow: `0 4px 15px ${achievement.neonColor}40`
                      }}
                    >
                      <Trophy 
                        className="w-7 h-7 sm:w-8 sm:h-8"
                        style={{ color: achievement.neonColor }}
                      />
                    </div>
                  </div>

                  {/* Achievement Details */}
                  <div className="text-center space-y-4">
                    <h3 
                      className="text-lg sm:text-xl font-bold"
                      style={{ 
                        color: achievement.neonColor
                      }}
                    >
                      {achievement.title}
                    </h3>
                    
                    <div className="flex items-center justify-center space-x-2">
                      <Award className="w-4 h-4 text-blue-400" />
                      <span className="text-sm font-medium text-blue-400">
                        {achievement.issuer}
                      </span>
                    </div>

                    <div className="flex items-center justify-center space-x-2">
                      <Calendar className="w-4 h-4 text-green-400" />
                      <span className="text-sm text-gray-300">
                        {achievement.date}
                      </span>
                    </div>

                    <p className="text-sm leading-relaxed text-gray-300">
                      {achievement.description}
                    </p>

                    {achievement.certificateUrl && (
                      <div className="pt-4">
                        <a
                          href={achievement.certificateUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-2 px-4 py-2 text-sm font-medium transition-all duration-300 border border-gray-500 text-gray-300 hover:bg-gray-500 hover:text-white rounded-lg"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>View Certificate</span>
                        </a>
                      </div>
                    )}
                  </div>

                  {/* Scan Line Effect */}
                  <div 
                    className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ 
                      background: achievement.neonColor,
                      boxShadow: `0 0 10px ${achievement.neonColor}`
                    }}
                  ></div>
                </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Placeholder for Additional Achievements */}
        <AnimatedSection direction="up" delay={600}>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              { title: 'Future Certification A', color: '#ec4899' },
              { title: 'Future Certification B', color: '#10b981' },
              { title: 'Future Certification C', color: '#8b5cf6' }
            ].map((item, index) => (
              <div
                key={`placeholder-${index}`}
                className="p-4 sm:p-6 rounded-xl border-2 border-dashed transition-all duration-300 bg-white/5 backdrop-blur-sm relative overflow-hidden shadow-lg"
                style={{ borderColor: `${item.color}40` }}
              >
                <div className="text-center space-y-4">
                  <div 
                    className="w-10 h-10 sm:w-12 sm:h-12 mx-auto rounded-full flex items-center justify-center border-2"
                    style={{ 
                      borderColor: item.color,
                      background: `${item.color}10`
                    }}
                  >
                    <Award 
                      className="w-5 h-5 sm:w-6 sm:h-6"
                      style={{ color: item.color }}
                    />
                  </div>
                  <h3 
                    className="text-base sm:text-lg font-semibold"
                    style={{ 
                      color: item.color
                    }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400">
                    More certifications loading...
                  </p>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Call to Action */}
        <AnimatedSection direction="up" delay={800}>
          <div className="text-center mt-16">
            <div className="bg-white/5 backdrop-blur-sm border border-gray-600/30 rounded-2xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
              <div className="text-gray-400 mb-4">
                <span className="text-green-400">Learning Status</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-blue-400">
                Continuous Learning Journey
              </h3>
              <p className="text-sm sm:text-base md:text-lg mb-6 text-gray-300 leading-relaxed">
                I'm constantly <span className="text-blue-400">expanding my skill set</span> and pursuing 
                <span className="text-purple-400"> new certifications</span> to stay at the 
                <span className="text-green-400">forefront of technology</span>.
              </p>
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                <span className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium bg-blue-900/30 text-blue-300 border border-blue-400/50">
                  AWS Solutions Architect - In Progress
                </span>
                <span className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium bg-purple-900/30 text-purple-300 border border-purple-400/50">
                  Kubernetes CKA - In Progress
                </span>
                <span className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium bg-green-900/30 text-green-300 border border-green-400/50">
                  Docker Certified - In Progress
                </span>
              </div>
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Achievements;