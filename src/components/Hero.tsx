import React from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Hello, I'm{' '}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Your Name
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Full Stack Developer passionate about creating beautiful, functional web experiences
          </p>
        </div>
        
        <div className="flex justify-center space-x-6 mb-12">
          <a
            href="#"
            className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 hover:scale-110 transform"
          >
            <Github className="w-6 h-6 text-gray-700" />
          </a>
          <a
            href="#"
            className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 hover:scale-110 transform"
          >
            <Linkedin className="w-6 h-6 text-blue-600" />
          </a>
          <a
            href="#"
            className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 hover:scale-110 transform"
          >
            <Mail className="w-6 h-6 text-green-600" />
          </a>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 font-semibold">
            View My Work
          </button>
          <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-colors duration-300 font-semibold">
            Get In Touch
          </button>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-gray-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;