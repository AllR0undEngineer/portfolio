import React, { useState } from 'react';
import { Mail, Send, Github, Linkedin, Twitter, MapPin, Phone, CheckCircle } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

interface ContactProps {
  darkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Create mailto link
    const subject = encodeURIComponent(`Portfolio Contact: ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    const mailtoLink = `mailto:priyanshchandwani1st@gmail.com?subject=${subject}&body=${body}`;
    
    window.location.href = mailtoLink;
    
    setSubmitted(true);
    setIsSubmitting(false);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github className="w-6 h-6" />,
      url: 'https://github.com/AllR0undEngineer',
      color: 'hover:text-gray-300',
      neonColor: '#ffffff'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-6 h-6" />,
      url: 'www.linkedin.com/in/priyanshchandwani',
      color: 'hover:text-blue-400',
      neonColor: '#0080ff'
    },
    {
      name: 'Twitter',
      icon: <Twitter className="w-6 h-6" />,
      url: 'https://twitter.com/priyanshchandwani',
      color: 'hover:text-blue-400',
      neonColor: '#00ffff'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-black via-purple-900 to-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 cyber-grid opacity-20"></div>
      <div className="absolute inset-0 circuit-pattern opacity-15"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection direction="up">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 font-mono">
              <span className="neon-text-cyan neon-pulse">> TRANSMISSION.establish()</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mx-auto rounded-full neon-glow-cyan"></div>
            <div className="mt-6 terminal-text">
              <span className="neon-text-green">INITIALIZING:</span> 
              <span className="neon-text-cyan ml-2">COMMUNICATION_PROTOCOL</span>
            </div>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4 mt-4">
              Have a <span className="neon-text-cyan">project in mind</span> or want to discuss 
              <span className="neon-text-pink"> opportunities</span>? I'd love to hear from you!
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Information */}
          <AnimatedSection direction="left" delay={200}>
            <div className="space-y-8">
              <div className="cyber-card p-6 sm:p-8 rounded-2xl neon-border relative overflow-hidden">
                <div className="terminal-text mb-4">
                  <span className="neon-text-green">> connection_info.load()</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 neon-text-cyan font-mono">
                  LET'S_CONNECT
                </h3>
                <p className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 text-gray-300 leading-relaxed">
                  I'm always open to discussing <span className="neon-text-cyan">new opportunities</span>, 
                  collaborating on <span className="neon-text-pink">interesting projects</span>, 
                  or simply having a conversation about <span className="neon-text-green">technology and innovation</span>.
                </p>
                <div className="absolute inset-0 holographic opacity-20"></div>
              </div>

              <div className="space-y-6">
                <div className="cyber-card p-4 sm:p-6 rounded-xl neon-border-animated relative overflow-hidden">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center neon-glow-cyan">
                        <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg font-semibold neon-text-cyan font-mono">
                        EMAIL_ADDRESS
                      </h4>
                      <a 
                        href="mailto:priyanshchandwani1st@gmail.com"
                        className="text-sm sm:text-base md:text-lg text-gray-300 hover:neon-text-cyan transition-colors duration-300 break-all font-mono"
                      >
                        priyanshchandwani1st@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="absolute inset-0 holographic opacity-20"></div>
                </div>

                <div className="cyber-card p-4 sm:p-6 rounded-xl neon-border-animated relative overflow-hidden">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center neon-glow-green">
                        <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg font-semibold neon-text-green font-mono">
                        LOCATION_STATUS
                      </h4>
                      <p className="text-sm sm:text-base md:text-lg text-gray-300 font-mono">
                        Available for remote opportunities
                      </p>
                    </div>
                  </div>
                  <div className="absolute inset-0 holographic opacity-20"></div>
                </div>
              </div>

              {/* Social Links */}
              <div className="cyber-card p-4 sm:p-6 rounded-xl neon-border relative overflow-hidden">
                <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 neon-text-pink font-mono">
                  SOCIAL_NETWORKS.connect()
                </h4>
                <div className="flex space-x-4 sm:space-x-6">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group p-2.5 sm:p-3 rounded-full transition-all duration-300 transform hover:scale-110 cyber-card border-2 relative overflow-hidden"
                      style={{ borderColor: link.neonColor }}
                    >
                      <div 
                        className="w-5 h-5 sm:w-6 sm:h-6 transition-colors duration-300"
                        style={{ color: link.neonColor }}
                      >
                        {React.cloneElement(link.icon as React.ReactElement, { 
                          className: "w-full h-full" 
                        })}
                      </div>
                      <div 
                        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                        style={{ background: link.neonColor }}
                      ></div>
                    </a>
                  ))}
                </div>
                <div className="absolute inset-0 holographic opacity-20"></div>
              </div>
            </div>
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection direction="right" delay={400}>
            <div className="cyber-card p-6 sm:p-8 rounded-2xl neon-border-animated relative overflow-hidden">
              <div className="terminal-text mb-4">
                <span className="neon-text-green">> message_composer.exe</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 neon-text-cyan font-mono">
                SEND_MESSAGE
              </h3>

              {submitted ? (
                <div className="text-center py-6 sm:py-8">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 border-2 border-green-400 neon-glow-green">
                    <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-green-400" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-semibold neon-text-green mb-2 font-mono">MESSAGE_SENT!</h4>
                  <p className="text-sm sm:text-base text-gray-300 font-mono">
                    Thank you for reaching out. I'll get back to you soon!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1.5 sm:mb-2 text-cyan-400 font-mono">
                      USER_NAME
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-lg border-2 border-cyan-400/50 bg-gray-900/50 text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 text-sm sm:text-base font-mono neon-glow-cyan"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1.5 sm:mb-2 text-pink-400 font-mono">
                      EMAIL_ADDRESS
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-lg border-2 border-pink-400/50 bg-gray-900/50 text-white placeholder-gray-400 focus:border-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-400/20 transition-all duration-300 text-sm sm:text-base font-mono neon-glow-pink"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1.5 sm:mb-2 text-green-400 font-mono">
                      MESSAGE_CONTENT
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-lg border-2 border-green-400/50 bg-gray-900/50 text-white placeholder-gray-400 focus:border-green-400 focus:outline-none focus:ring-2 focus:ring-green-400/20 transition-all duration-300 text-sm sm:text-base font-mono resize-none neon-glow-green"
                      placeholder="Tell me about your project or opportunity..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full cyber-button flex items-center justify-center space-x-2 px-4 py-2.5 sm:px-6 sm:py-3 font-mono font-semibold transition-all duration-300 text-sm sm:text-base ${
                      isSubmitting 
                        ? 'opacity-50 cursor-not-allowed' 
                        : 'transform hover:scale-105'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin neon-glow-cyan"></div>
                        <span>TRANSMITTING...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                        <span>SEND_MESSAGE</span>
                      </>
                    )}
                  </button>
                </form>
              )}
              <div className="absolute inset-0 holographic opacity-20"></div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;