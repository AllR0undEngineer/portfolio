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
              <span className="text-blue-500">Get In Touch</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 mx-auto rounded-full"></div>
            <div className="mt-6 text-gray-400">
              <span className="text-green-500">Let's</span> 
              <span className="text-blue-500 ml-2">start a conversation</span>
            </div>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4 mt-4">
              Have a <span className="text-blue-400">project in mind</span> or want to discuss 
              <span className="text-purple-400"> opportunities</span>? I'd love to hear from you!
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Information */}
          <AnimatedSection direction="left" delay={200}>
            <div className="space-y-8">
              <div className="bg-white/5 backdrop-blur-sm border border-gray-600/30 rounded-2xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
                <div className="text-gray-400 mb-4">
                  <span className="text-green-400">Contact Information</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-blue-400">
                  Let's Connect
                </h3>
                <p className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 text-gray-300 leading-relaxed">
                  I'm always open to discussing <span className="text-blue-400">new opportunities</span>, 
                  collaborating on <span className="text-purple-400">interesting projects</span>, 
                  or simply having a conversation about <span className="text-green-400">technology and innovation</span>.
                </p>
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
              </div>

              <div className="space-y-6">
                <div className="bg-white/5 backdrop-blur-sm border border-gray-600/30 rounded-xl p-4 sm:p-6 shadow-xl relative overflow-hidden">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                        <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-blue-400">
                        Email Address
                      </h4>
                      <a 
                        href="mailto:priyanshchandwani1st@gmail.com"
                        className="text-sm sm:text-base md:text-lg text-gray-300 hover:text-blue-400 transition-colors duration-300 break-all"
                      >
                        priyanshchandwani1st@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-gray-600/30 rounded-xl p-4 sm:p-6 shadow-xl relative overflow-hidden">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center shadow-lg">
                        <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-green-400">
                        Location
                      </h4>
                      <p className="text-sm sm:text-base md:text-lg text-gray-300">
                        Available for remote opportunities
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-white/5 backdrop-blur-sm border border-gray-600/30 rounded-xl p-4 sm:p-6 shadow-xl relative overflow-hidden">
                <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-purple-400">
                  Connect on Social Media
                </h4>
                <div className="flex space-x-4 sm:space-x-6">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group p-2.5 sm:p-3 rounded-full transition-all duration-300 transform hover:scale-110 bg-white/10 backdrop-blur-sm border-2 relative overflow-hidden shadow-lg"
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
              </div>
            </div>
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection direction="right" delay={400}>
            <div className="bg-white/5 backdrop-blur-sm border border-gray-600/30 rounded-2xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
              <div className="text-gray-400 mb-4">
                <span className="text-green-400">Send Message</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-blue-400">
                Send Me a Message
              </h3>

              {submitted ? (
                <div className="text-center py-6 sm:py-8">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 border-2 border-green-400 shadow-lg">
                    <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-green-400" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-semibold text-green-400 mb-2">Message Sent!</h4>
                  <p className="text-sm sm:text-base text-gray-300">
                    Thank you for reaching out. I'll get back to you soon!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1.5 sm:mb-2 text-blue-400">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-lg border-2 border-blue-400/50 bg-gray-900/50 text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 text-sm sm:text-base"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1.5 sm:mb-2 text-purple-400">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-lg border-2 border-purple-400/50 bg-gray-900/50 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 text-sm sm:text-base"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1.5 sm:mb-2 text-green-400">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-lg border-2 border-green-400/50 bg-gray-900/50 text-white placeholder-gray-400 focus:border-green-400 focus:outline-none focus:ring-2 focus:ring-green-400/20 transition-all duration-300 text-sm sm:text-base resize-none"
                      placeholder="Tell me about your project or opportunity..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center space-x-2 px-4 py-2.5 sm:px-6 sm:py-3 font-semibold transition-all duration-300 text-sm sm:text-base rounded-lg ${
                      isSubmitting 
                        ? 'opacity-50 cursor-not-allowed' 
                        : 'transform hover:scale-105'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;