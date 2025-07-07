import React from 'react';
import { User, Heart, Target } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

interface AboutProps {
  darkMode: boolean;
}

const About: React.FC<AboutProps> = ({ darkMode }) => {
  return (
    <section id="about" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection direction="up">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <AnimatedSection direction="left" delay={200}>
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <div className="w-80 h-80 rounded-2xl overflow-hidden relative">
                  {/* Placeholder for photo - replace with actual image */}
                  <div className={`w-full h-full ${
                    darkMode ? 'bg-gradient-to-br from-gray-700 to-gray-800' : 'bg-gradient-to-br from-gray-200 to-gray-300'
                  } flex items-center justify-center`}>
                    <User className={`w-32 h-32 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`} />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className={`text-lg font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                       <img 
                  src="/src/assets/WhatsApp Image 2025-07-07 at 17.51.08_8cd13dd1.jpg"/>
                      </span>
                    </div>
                  </div>
                </div>
                {/* Animated Border */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl blur opacity-75 animate-pulse"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl opacity-75 animate-spin-slow"></div>
              </div>
            </div>
          </AnimatedSection>

          {/* Content */}
          <AnimatedSection direction="right" delay={400}>
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      My Passion
                    </h3>
                    <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      I'm passionate about bridging the gap between development and operations, 
                      creating seamless ML pipelines that scale from prototype to production.
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      My Vision
                    </h3>
                    <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      To build innovative AI solutions that make a real impact, while maintaining 
                      robust, scalable infrastructure that developers and businesses can rely on.
                    </p>
                  </div>
                </div>
              </div>

              <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
                <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>
                  With a strong foundation in both software development and operations, I specialize in 
                  creating end-to-end solutions that span from intuitive frontend interfaces to robust 
                  backend systems and automated ML pipelines. My experience with containerization, 
                  orchestration, and cloud platforms allows me to build systems that are not just 
                  functional, but truly scalable and maintainable.
                </p>
              </div>

              <div className={`p-6 rounded-xl border-2 ${
                darkMode 
                  ? 'border-gray-700 bg-gray-800/50' 
                  : 'border-gray-200 bg-white'
              }`}>
                <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>
                  When I'm not coding, you'll find me exploring the latest developments in AI and machine learning, 
                  contributing to open-source projects, or experimenting with new technologies. I believe in 
                  continuous learning and staying at the forefront of technological innovation.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default About;