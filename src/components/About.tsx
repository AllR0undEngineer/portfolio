import React from 'react';
import { User, Heart, Target, Cpu, Zap } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

interface AboutProps {
  darkMode: boolean;
}

const About: React.FC<AboutProps> = ({ darkMode }) => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 cyber-grid opacity-20"></div>
      <div className="absolute inset-0 circuit-pattern opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection direction="up">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 font-mono">
              <span className="text-blue-500">About Me</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 mx-auto rounded-full"></div>
            <div className="mt-4 text-gray-400 inline-block">
              <span className="text-green-500">Get to know</span> 
              <span className="text-blue-500 ml-2">more about me</span>
            </div>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Neural Avatar */}
          <AnimatedSection direction="left" delay={200}>
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                {/* Modern Profile Frame */}
                <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden relative bg-white/5 backdrop-blur-sm border border-gray-600/30 shadow-2xl">
                  <div className="w-full h-full bg-gradient-to-br from-blue-900/20 to-purple-900/20 flex items-center justify-center relative">
                    <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center">
                      <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-4xl shadow-lg">
                        PC
                      </div>
                    </div>
                    {/* Modern Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-transparent to-purple-400/10"></div>
                  </div>
                </div>
                
                {/* Modern Glow */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-green-500/20 rounded-3xl blur-xl"></div>
                
                {/* Modern Indicators */}
                <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-green-500 flex items-center justify-center shadow-lg">
                  <Zap className="w-4 h-4 text-black" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center shadow-lg">
                  <Cpu className="w-4 h-4 text-black" />
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Data Profile */}
          <AnimatedSection direction="right" delay={400}>
            <div className="space-y-8">
              <div className="space-y-6">
                {/* Passion Section */}
                <div className="bg-white/5 backdrop-blur-sm border border-gray-600/30 rounded-xl p-6 shadow-xl relative overflow-hidden">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                        <Heart className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-bold text-blue-400 mb-2">
                        My Passion
                      </h3>
                      <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                        Bridging the gap between <span className="text-blue-400">development</span> and 
                        <span className="text-purple-400"> operations</span>, creating seamless ML pipelines that 
                        scale from prototype to <span className="text-green-400">production</span>.
                      </p>
                    </div>
                  </div>
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-400/20 to-transparent rounded-bl-full"></div>
                </div>

                {/* Mission Section */}
                <div className="bg-white/5 backdrop-blur-sm border border-gray-600/30 rounded-xl p-6 shadow-xl relative overflow-hidden">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-lg">
                        <Target className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-bold text-orange-400 mb-2">
                        My Mission
                      </h3>
                      <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                        To architect <span className="text-green-400">innovative AI solutions</span> that create 
                        real-world impact, while maintaining <span className="text-blue-400">robust, scalable 
                        infrastructure</span> that developers and businesses can rely on.
                      </p>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-orange-400/20 to-transparent rounded-tr-full"></div>
                </div>
              </div>

              {/* Technical Overview */}
              <div className="bg-white/5 backdrop-blur-sm border border-gray-600/30 rounded-xl p-6 shadow-xl relative">
                <div className="text-gray-400 mb-4">
                  <span className="text-green-400">Technical Overview</span>
                </div>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-300">
                  <span className="text-blue-400">Core Skills:</span> Full-stack development + Operations expertise<br/>
                  <span className="text-purple-400">Specialization:</span> End-to-end ML pipeline automation<br/>
                  <span className="text-green-400">Capabilities:</span> Frontend interfaces → Backend systems → ML deployment<br/>
                  <span className="text-blue-400">Infrastructure:</span> Containerization • Orchestration • Cloud platforms
                </p>
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
              </div>

              {/* Personal Info */}
              <div className="bg-white/5 backdrop-blur-sm border-2 border-green-400/50 rounded-xl p-6 shadow-xl relative overflow-hidden">
                <div className="text-gray-400 mb-4">
                  <span className="text-green-400">Personal Background</span>
                </div>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-300">
                  When not coding, you'll find me exploring the latest 
                  <span className="text-blue-400"> developments</span> in AI and machine learning, 
                  contributing to <span className="text-purple-400">open-source projects</span>, or 
                  experimenting with <span className="text-green-400">emerging technologies</span>. 
                  Continuous learning and staying current with technology trends is my priority.
                </p>
                <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent animate-pulse"></div>
              </div>

              {/* Activity Status */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="w-3 h-3 bg-green-400 rounded-full mx-auto mb-2 animate-pulse"></div>
                  <span className="text-xs text-green-400">LEARNING</span>
                </div>
                <div className="text-center">
                  <div className="w-3 h-3 bg-blue-400 rounded-full mx-auto mb-2 animate-pulse"></div>
                  <span className="text-xs text-blue-400">BUILDING</span>
                </div>
                <div className="text-center">
                  <div className="w-3 h-3 bg-purple-400 rounded-full mx-auto mb-2 animate-pulse"></div>
                  <span className="text-xs text-purple-400">INNOVATING</span>
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