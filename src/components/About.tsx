import React from 'react';
import { User, Heart, Target, Cpu, Zap } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

interface AboutProps {
  darkMode: boolean;
}

const About: React.FC<AboutProps> = ({ darkMode }) => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 cyber-grid opacity-20"></div>
      <div className="absolute inset-0 circuit-pattern opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection direction="up">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 font-mono">
              <span className="neon-text-cyan neon-pulse">&gt; NEURAL_PROFILE.exe</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mx-auto rounded-full neon-glow-cyan"></div>
            <div className="mt-4 terminal-text inline-block">
              <span className="neon-text-green">STATUS:</span> 
              <span className="neon-text-cyan ml-2">PROFILE_LOADED</span>
            </div>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Neural Avatar */}
          <AnimatedSection direction="left" delay={200}>
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                {/* Holographic Frame */}
                <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden relative cyber-card neon-border-animated">
                  <div className="w-full h-full bg-gradient-to-br from-cyan-900/30 to-purple-900/30 flex items-center justify-center relative">
                    <img 
                      src="/src/assets/WhatsApp Image 2025-07-07 at 17.51.08_8cd13dd1.jpg"
                      alt="Neural Avatar"
                      className="w-full h-full object-cover rounded-2xl"
                    />
                    {/* Holographic Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 via-transparent to-purple-400/20 holographic"></div>
                    <div className="absolute inset-0 scan-lines"></div>
                  </div>
                </div>
                
                {/* Energy Aura */}
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-600/30 via-purple-600/30 to-pink-600/30 rounded-3xl blur-xl animate-pulse"></div>
                
                {/* Data Points */}
                <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-green-400 flex items-center justify-center neon-glow-green">
                  <Zap className="w-4 h-4 text-black" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-8 h-8 rounded-full bg-pink-400 flex items-center justify-center neon-glow-pink">
                  <Cpu className="w-4 h-4 text-black" />
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Data Profile */}
          <AnimatedSection direction="right" delay={400}>
            <div className="space-y-8">
              <div className="space-y-6">
                {/* Neural Passion Module */}
                <div className="cyber-card p-6 neon-border relative overflow-hidden">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center neon-glow-cyan">
                        <Heart className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-bold neon-text-cyan font-mono mb-2">
                        PASSION_CORE.dll
                      </h3>
                      <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                        Bridging the quantum gap between <span className="neon-text-cyan">development</span> and 
                        <span className="neon-text-pink"> operations</span>, creating seamless ML pipelines that 
                        scale from prototype to <span className="neon-text-green">production reality</span>.
                      </p>
                    </div>
                  </div>
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-transparent rounded-bl-full"></div>
                </div>

                {/* Mission Objective */}
                <div className="cyber-card p-6 neon-border relative overflow-hidden">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center neon-glow-pink">
                        <Target className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-bold neon-text-pink font-mono mb-2">
                        MISSION_OBJECTIVE.exe
                      </h3>
                      <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                        To architect <span className="neon-text-green">innovative AI solutions</span> that create 
                        real-world impact, while maintaining <span className="neon-text-cyan">robust, scalable 
                        infrastructure</span> that developers and businesses can rely on.
                      </p>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-pink-400/20 to-transparent rounded-tr-full"></div>
                </div>
              </div>

              {/* System Specifications */}
              <div className="cyber-card p-6 neon-border-animated relative">
                <div className="terminal-text mb-4">
                  <span className="neon-text-green">&gt; cat system_specs.txt</span>
                </div>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-300">
                  <span className="neon-text-cyan">CORE_ARCHITECTURE:</span> Full-stack development + Operations mastery<br/>
                  <span className="neon-text-pink">SPECIALIZATION:</span> End-to-end ML pipeline automation<br/>
                  <span className="neon-text-green">CAPABILITIES:</span> Frontend interfaces → Backend systems → ML deployment<br/>
                  <span className="neon-text-cyan">INFRASTRUCTURE:</span> Containerization • Orchestration • Cloud platforms
                </p>
                <div className="absolute inset-0 holographic opacity-20"></div>
              </div>

              {/* Personal Data Log */}
              <div className="cyber-card p-6 border-2 border-green-400/50 relative overflow-hidden">
                <div className="terminal-text mb-4">
                  <span className="neon-text-green">&gt; access personal_log.dat</span>
                </div>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-300">
                  When not interfacing with code matrices, you'll find me exploring the latest 
                  <span className="neon-text-cyan"> quantum developments</span> in AI and machine learning, 
                  contributing to <span className="neon-text-pink">open-source repositories</span>, or 
                  experimenting with <span className="neon-text-green">emerging technologies</span>. 
                  Continuous learning and staying at the forefront of technological evolution is my prime directive.
                </p>
                <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent animate-pulse"></div>
              </div>

              {/* Status Indicators */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="w-3 h-3 bg-green-400 rounded-full mx-auto mb-2 animate-pulse neon-glow-green"></div>
                  <span className="text-xs font-mono neon-text-green">LEARNING</span>
                </div>
                <div className="text-center">
                  <div className="w-3 h-3 bg-cyan-400 rounded-full mx-auto mb-2 animate-pulse neon-glow-cyan"></div>
                  <span className="text-xs font-mono neon-text-cyan">BUILDING</span>
                </div>
                <div className="text-center">
                  <div className="w-3 h-3 bg-pink-400 rounded-full mx-auto mb-2 animate-pulse neon-glow-pink"></div>
                  <span className="text-xs font-mono neon-text-pink">INNOVATING</span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default About;