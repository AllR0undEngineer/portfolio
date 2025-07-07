import React from 'react';
import { Github, Linkedin, Twitter, Heart } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github className="w-5 h-5" />,
      url: 'https://github.com/AllR0undEngineer',
      color: 'hover:text-gray-300'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-5 h-5" />,
      url: 'www.linkedin.com/in/priyanshchandwani',
      color: 'hover:text-blue-400'
    },
    {
      name: 'Twitter',
      icon: <Twitter className="w-5 h-5" />,
      url: 'https://twitter.com/priyanshchandwani',
      color: 'hover:text-blue-400'
    }
  ];

  return (
    <footer className={`py-12 ${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-gray-900 border-gray-800'} border-t`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-6">
          {/* Logo/Name */}
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-2">
              <img 
                src="/src/assets/priyansh-high-resolution-logo-removebg-preview.png" 
                alt="Priyansh Chandwani Logo" 
                className="w-8 h-8 object-contain filter brightness-0 invert"
              />
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Priyansh Chandwani
              </h3>
            </div>
            <p className="text-gray-400 mt-2">MLOps Engineer • Full Stack Developer • DevOps Specialist</p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-400 transition-all duration-300 transform hover:scale-110 ${link.color}`}
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>

          {/* Copyright */}
          <div className="text-center space-y-2">
            <p className="text-gray-400 text-sm">
              © {currentYear} Priyansh Chandwani. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs flex items-center justify-center space-x-1">
              <span>Made with</span>
              <Heart className="w-3 h-3 text-red-500 fill-current" />
              <span>and lots of coffee</span>
            </p>
          </div>

          {/* Tech Stack Credit */}
          <div className="text-center">
            <p className="text-gray-500 text-xs">
              Built with React, TypeScript, and Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;