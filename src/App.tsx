import React, { useState, useEffect } from 'react';
import { Moon, Sun, Download, Menu, X, ChevronUp } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    // Apply theme to document
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }

      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <div className={`min-h-screen relative overflow-hidden transition-all duration-300 ${
      darkMode 
        ? 'bg-gradient-to-br from-slate-800 via-slate-900 to-emerald-900 text-white' 
        : 'bg-gradient-to-br from-slate-100 via-white to-emerald-100 text-slate-800'
    }`}>
      {/* Unified Background with Cyber Grid */}
      <div className="fixed inset-0 cyber-grid opacity-30 pointer-events-none z-0"></div>
      
      {/* Quantum Particles Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="quantum-particle absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
              background: i % 4 === 0 ? '#84a98c' : i % 4 === 1 ? '#a8c09a' : i % 4 === 2 ? '#cad2c5' : '#52796f'
            }}
          />
        ))}
      </div>
      
      {/* Scanning Lines */}
      <div className="scan-lines fixed inset-0 pointer-events-none z-20"></div>
      
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md border-b cyber-card relative ${
        darkMode 
          ? 'bg-slate-900/90 border-emerald-400/30' 
          : 'bg-white/90 border-emerald-600/30'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex items-center space-x-3">
                <div className="w-24 h-16 sm:w-28 sm:h-18 md:w-32 md:h-20 lg:w-36 lg:h-22 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center text-white font-bold text-xl transition-all duration-300 shadow-lg">
                  PC
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-2 py-2 xl:px-3 text-sm font-medium font-mono transition-colors duration-300 uppercase tracking-wider ${
                    activeSection === item.id
                      ? (darkMode ? 'text-emerald-400' : 'text-emerald-600')
                      : (darkMode ? 'text-gray-300 hover:text-emerald-400' : 'text-gray-600 hover:text-emerald-600')
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-600 rounded-full"></div>
                  )}
                </button>
              ))}
              <button
                onClick={() => window.open('#', '_blank')}
                className="bg-emerald-600 hover:bg-emerald-700 text-white flex items-center space-x-2 px-3 py-2 xl:px-4 text-sm rounded-lg font-semibold transition-all duration-300"
              >
                <Download className="w-3 h-3 xl:w-4 xl:h-4" />
                <span>Resume</span>
              </button>
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-lg transition-colors duration-300 ${
                  darkMode 
                    ? 'bg-gray-800/50 text-yellow-400 hover:text-yellow-300' 
                    : 'bg-gray-200/50 text-orange-500 hover:text-orange-600'
                }`}
              >
                {darkMode ? <Sun className="w-4 h-4 xl:w-5 xl:h-5" /> : <Moon className="w-4 h-4 xl:w-5 xl:h-5" />}
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center space-x-3 sm:space-x-4">
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-lg transition-colors duration-300 ${
                  darkMode 
                    ? 'bg-gray-800/50 text-yellow-400 hover:text-yellow-300' 
                    : 'bg-gray-200/50 text-orange-500 hover:text-orange-600'
                }`}
              >
                {darkMode ? <Sun className="w-4 h-4 sm:w-5 sm:h-5" /> : <Moon className="w-4 h-4 sm:w-5 sm:h-5" />}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2 rounded-lg ${
                  darkMode 
                    ? 'bg-gray-800/50 text-emerald-400' 
                    : 'bg-gray-200/50 text-emerald-600'
                }`}
              >
                {isMenuOpen ? <X className="w-4 h-4 sm:w-5 sm:h-5" /> : <Menu className="w-4 h-4 sm:w-5 sm:h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={`lg:hidden border-t backdrop-blur-sm ${
            darkMode 
              ? 'bg-slate-900/95 border-emerald-400/30 bg-white/5' 
              : 'bg-white/95 border-emerald-600/30 bg-slate-900/5'
          }`}>
            <div className="px-3 pt-3 pb-4 space-y-2 sm:px-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-3 py-2.5 text-base font-medium font-mono rounded-md transition-colors duration-300 uppercase tracking-wider ${
                    activeSection === item.id
                      ? (darkMode ? 'text-emerald-400 bg-emerald-900/20' : 'text-emerald-600 bg-emerald-100/20')
                      : (darkMode ? 'text-gray-300 hover:text-emerald-400' : 'text-gray-600 hover:text-emerald-600')
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => window.open('/src/assets/resumemain(1).pdf', '_blank')}
                className="bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center space-x-2 w-full px-3 py-2.5 rounded-md transition-all duration-300 mt-3 font-semibold"
              >
                <Download className="w-4 h-4" />
                <span>Resume</span>
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        <Hero darkMode={darkMode} />
        <About darkMode={darkMode} />
        <Skills darkMode={darkMode} />
        <Projects darkMode={darkMode} />
        <Experience darkMode={darkMode} />
        <Achievements darkMode={darkMode} />
        <Contact darkMode={darkMode} />
      </main>

      <Footer darkMode={darkMode} />

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 z-50 p-2.5 sm:p-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-full shadow-lg hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-110"
        >
          <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      )}
    </div>
  );
}

export default App;