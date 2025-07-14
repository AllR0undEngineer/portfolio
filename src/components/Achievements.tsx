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
    <section id="achievements" className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 cyber-grid opacity-20"></div>
      <div className="absolute inset-0 circuit-pattern opacity-15"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection direction="up">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 font-mono">
              <span className="neon-text-cyan neon-pulse">{'>'} ACHIEVEMENTS.unlock()</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mx-auto rounded-full neon-glow-cyan"></div>
            <div className="mt-6 terminal-text">
              <span className="neon-text-green">SCANNING:</span> 
              <span className="neon-text-cyan ml-2">CERTIFICATION_DATABASE</span>
            </div>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4 mt-4">
              <span className="neon-text-cyan">Continuous learning</span> and 
              <span className="neon-text-pink"> professional development</span> milestones
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
                {/* Glowing Border Effect */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-sm"
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
                        boxShadow: `0 0 20px ${achievement.neonColor}`
                      }}
                    >
                      <Trophy 
                        className="w-7 h-7 sm:w-8 sm:h-8"
                        style={{ color: achievement.neonColor }}
                      />
                      <div className="absolute inset-0 holographic opacity-40"></div>
                    </div>
                  </div>

                  {/* Achievement Details */}
                  <div className="text-center space-y-4">
                    <h3 
                      className="text-lg sm:text-xl font-bold font-mono"
                      style={{ 
                        color: achievement.neonColor,
                        textShadow: `0 0 10px ${achievement.neonColor}`
                      }}
                    >
                      {achievement.title}
                    </h3>
                    
                    <div className="flex items-center justify-center space-x-2">
                      <Award className="w-4 h-4 text-cyan-400 neon-glow-cyan" />
                      <span className="text-sm font-medium neon-text-cyan font-mono">
                        {achievement.issuer}
                      </span>
                    </div>

                    <div className="flex items-center justify-center space-x-2">
                      <Calendar className="w-4 h-4 text-green-400 neon-glow-green" />
                      <span className="text-sm text-gray-300 font-mono">
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
                          className="cyber-button inline-flex items-center space-x-2 px-4 py-2 text-sm font-mono font-medium transition-all duration-300 border-gray-500 text-gray-300 hover:bg-gray-500"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>VIEW_CERT</span>
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
            </AnimatedSection>
          ))}
        </div>

        {/* Placeholder for Additional Achievements */}
        <AnimatedSection direction="up" delay={600}>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              { title: 'FUTURE_CERT_ALPHA', color: '#ff0080' },
              { title: 'FUTURE_CERT_BETA', color: '#00ff80' },
              { title: 'FUTURE_CERT_GAMMA', color: '#8080ff' }
            ].map((item, index) => (
              <div
                key={`placeholder-${index}`}
                className="p-4 sm:p-6 rounded-xl border-2 border-dashed transition-all duration-300 cyber-card relative overflow-hidden"
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
                    className="text-base sm:text-lg font-semibold font-mono"
                    style={{ 
                      color: item.color,
                      textShadow: `0 0 5px ${item.color}`
                    }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 font-mono">
                    More certifications loading...
                  </p>
                </div>
                <div className="absolute inset-0 holographic opacity-20"></div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Call to Action */}
        <AnimatedSection direction="up" delay={800}>
          <div className="text-center mt-16">
            <div className="cyber-card p-6 sm:p-8 rounded-2xl neon-border-animated relative overflow-hidden">
              <div className="terminal-text mb-4">
                <span className="neon-text-green">{'>'} learning_status.exe</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 neon-text-cyan font-mono">
                CONTINUOUS_LEARNING_PROTOCOL
              </h3>
              <p className="text-sm sm:text-base md:text-lg mb-6 text-gray-300 leading-relaxed">
                I'm constantly <span className="neon-text-cyan">expanding my skill set</span> and pursuing 
                <span className="neon-text-pink"> new certifications</span> to stay at the 
                <span className="neon-text-green">forefront of technology</span>.
              </p>
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                <span className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium font-mono bg-blue-900/30 text-blue-300 border border-blue-400/50 neon-glow-cyan">
                  AWS Solutions Architect - In Progress
                </span>
                <span className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium font-mono bg-purple-900/30 text-purple-300 border border-purple-400/50 neon-glow-purple">
                  Kubernetes CKA - In Progress
                </span>
                <span className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium font-mono bg-green-900/30 text-green-300 border border-green-400/50 neon-glow-green">
                  Docker Certified - In Progress
                </span>
              </div>
              <div className="absolute inset-0 holographic opacity-20"></div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Achievements;