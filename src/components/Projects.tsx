import React, { useState } from 'react';
import { ExternalLink, Github, Play, Server, BarChart3, Scale, Zap, Code, Brain, Terminal, Image, Mail, Phone, MessageSquare, Monitor, Cpu, Database, Cloud, Camera, Instagram, FileText, Activity, Hand, Container } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

interface ProjectsProps {
  darkMode: boolean;
}

interface Project {
  title: string;
  objective: string;
  keyTools: string[];
  codeFlow: string[];
  icon: React.ReactNode;
  neonColor: string;
}

interface ProjectTab {
  id: string;
  label: string;
  projects: Project[];
  color: string;
}

const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const [activeTab, setActiveTab] = useState('python');

  const projectTabs: ProjectTab[] = [
    {
      id: 'python',
      label: 'Python Automation Projects',
      color: '#3b82f6',
      projects: [
        {
          title: 'SMS Sender',
          objective: 'Automated SMS messaging system for bulk communication and notifications',
          keyTools: ['Python', 'Twilio API', 'Pandas', 'CSV Processing'],
          codeFlow: [
            'Load contact data from CSV/Excel files',
            'Configure Twilio API credentials',
            'Process message templates with personalization',
            'Send bulk SMS with delivery tracking',
            'Generate delivery reports and logs'
          ],
          icon: <MessageSquare className="w-8 h-8" />,
          neonColor: '#00ff80'
        },
        {
          title: 'Email Sender',
          objective: 'Professional email automation tool with HTML templates and attachment support',
          keyTools: ['Python', 'SMTP', 'Email Templates', 'HTML/CSS'],
          codeFlow: [
            'Setup SMTP server configuration',
            'Load recipient lists and templates',
            'Process HTML email templates',
            'Handle file attachments securely',
            'Track email delivery status'
          ],
          icon: <Mail className="w-8 h-8" />,
          neonColor: '#ff8000'
        },
        {
          title: 'Voice Call',
          objective: 'Automated voice calling system with text-to-speech capabilities',
          keyTools: ['Python', 'Twilio Voice API', 'Text-to-Speech', 'Audio Processing'],
          codeFlow: [
            'Initialize Twilio Voice API client',
            'Convert text messages to speech',
            'Configure call routing and timing',
            'Execute automated voice calls',
            'Log call status and responses'
          ],
          icon: <Phone className="w-8 h-8" />,
          neonColor: '#8000ff'
        },
        {
          title: 'WhatsApp Sender',
          objective: 'WhatsApp Business API integration for automated messaging',
          keyTools: ['Python', 'WhatsApp Business API', 'Selenium', 'Web Automation'],
          codeFlow: [
            'Setup WhatsApp Business API connection',
            'Load contact lists and message templates',
            'Implement message scheduling system',
            'Handle media attachments and formatting',
            'Monitor message delivery status'
          ],
          icon: <MessageSquare className="w-8 h-8" />,
          neonColor: '#00ffff'
        },
        {
          title: 'Draw Scenery',
          objective: 'Automated landscape and scenery generation using Python graphics libraries',
          keyTools: ['Python', 'Turtle Graphics', 'PIL', 'Matplotlib', 'NumPy'],
          codeFlow: [
            'Initialize graphics canvas and settings',
            'Generate random landscape parameters',
            'Draw terrain, trees, and sky elements',
            'Apply color gradients and effects',
            'Export final artwork as image files'
          ],
          icon: <Image className="w-8 h-8" />,
          neonColor: '#ff00ff'
        },
        {
          title: 'Web Text Scraper',
          objective: 'Intelligent web scraping tool for extracting and processing text content',
          keyTools: ['Python', 'BeautifulSoup', 'Requests', 'Selenium', 'Pandas'],
          codeFlow: [
            'Configure web scraping targets and rules',
            'Handle dynamic content with Selenium',
            'Extract and clean text data',
            'Process and structure scraped content',
            'Export data to CSV/JSON formats'
          ],
          icon: <FileText className="w-8 h-8" />,
          neonColor: '#ffff00'
        },
        {
          title: 'RAM Info',
          objective: 'System memory monitoring and analysis tool with real-time tracking',
          keyTools: ['Python', 'psutil', 'Matplotlib', 'Tkinter', 'System APIs'],
          codeFlow: [
            'Initialize system memory monitoring',
            'Collect RAM usage statistics',
            'Generate real-time usage graphs',
            'Identify memory-intensive processes',
            'Create detailed system reports'
          ],
          icon: <Activity className="w-8 h-8" />,
          neonColor: '#00ff40'
        },
        {
          title: 'Face Swap',
          objective: 'AI-powered face swapping application using computer vision techniques',
          keyTools: ['Python', 'OpenCV', 'dlib', 'Face Recognition', 'NumPy'],
          codeFlow: [
            'Load and preprocess input images',
            'Detect facial landmarks and features',
            'Align faces for optimal swapping',
            'Perform face replacement algorithm',
            'Post-process and save final result'
          ],
          icon: <Camera className="w-8 h-8" />,
          neonColor: '#ff4080'
        },
        {
          title: 'Instagram Post Uploader',
          objective: 'Automated Instagram content posting with scheduling and hashtag optimization',
          keyTools: ['Python', 'Instagram API', 'Pillow', 'Selenium', 'Scheduling'],
          codeFlow: [
            'Setup Instagram API authentication',
            'Process and optimize images for posting',
            'Generate relevant hashtags automatically',
            'Schedule posts for optimal engagement',
            'Track post performance metrics'
          ],
          icon: <Instagram className="w-8 h-8" />,
          neonColor: '#e1306c'
        }
      ]
    },
    {
      id: 'ai-ml',
      label: 'Generative AI & Machine Learning Projects',
      color: '#8b5cf6',
      projects: [
        {
          title: 'Salary Prediction',
          objective: 'ML model to predict salary ranges based on job roles, experience, and location',
          keyTools: ['Python', 'Scikit-learn', 'Pandas', 'Streamlit', 'Feature Engineering'],
          codeFlow: [
            'Collect and preprocess salary datasets',
            'Perform exploratory data analysis',
            'Engineer features from job descriptions',
            'Train regression models and tune hyperparameters',
            'Deploy interactive prediction interface'
          ],
          icon: <BarChart3 className="w-8 h-8" />,
          neonColor: '#00ff80'
        },
        {
          title: 'Views Prediction',
          objective: 'YouTube video performance predictor using metadata and engagement patterns',
          keyTools: ['Python', 'TensorFlow', 'YouTube API', 'NLP', 'Time Series Analysis'],
          codeFlow: [
            'Extract video metadata via YouTube API',
            'Analyze title, description, and thumbnail features',
            'Process temporal engagement patterns',
            'Train deep learning prediction models',
            'Create real-time prediction dashboard'
          ],
          icon: <Monitor className="w-8 h-8" />,
          neonColor: '#ff0080'
        },
        {
          title: 'Sentiment Analyzer',
          objective: 'Advanced sentiment analysis tool for social media and review data',
          keyTools: ['Python', 'NLTK', 'Transformers', 'BERT', 'Streamlit'],
          codeFlow: [
            'Preprocess text data and handle noise',
            'Implement multiple sentiment analysis approaches',
            'Fine-tune BERT model for domain-specific data',
            'Create ensemble model for improved accuracy',
            'Build interactive sentiment analysis interface'
          ],
          icon: <Brain className="w-8 h-8" />,
          neonColor: '#8000ff'
        },
        {
          title: 'Legal Advisor (Gemini)',
          objective: 'AI-powered legal consultation system using Google Gemini for document analysis',
          keyTools: ['Python', 'Google Gemini API', 'LangChain', 'Streamlit', 'PDF Processing'],
          codeFlow: [
            'Setup Gemini API for legal document processing',
            'Implement document parsing and chunking',
            'Create legal knowledge base integration',
            'Build conversational AI interface',
            'Add citation and reference tracking'
          ],
          icon: <Scale className="w-8 h-8" />,
          neonColor: '#00ffff'
        },
        {
          title: 'Meme Generator',
          objective: 'AI-driven meme creation tool with template matching and text generation',
          keyTools: ['Python', 'OpenAI API', 'PIL', 'Computer Vision', 'Web Scraping'],
          codeFlow: [
            'Scrape and categorize meme templates',
            'Implement image text detection and placement',
            'Generate contextual meme text using AI',
            'Apply text styling and formatting',
            'Create shareable meme output formats'
          ],
          icon: <Image className="w-8 h-8" />,
          neonColor: '#ffff00'
        },
        {
          title: 'Titanic Survival Prediction (DL)',
          objective: 'Deep learning model to predict passenger survival on the Titanic',
          keyTools: ['Python', 'TensorFlow', 'Keras', 'Pandas', 'Data Visualization'],
          codeFlow: [
            'Load and explore Titanic passenger dataset',
            'Handle missing data and feature engineering',
            'Design neural network architecture',
            'Train deep learning model with validation',
            'Evaluate model performance and create visualizations'
          ],
          icon: <Cpu className="w-8 h-8" />,
          neonColor: '#ff8000'
        },
        {
          title: 'Wikipedia Q&A Chatbot',
          objective: 'Intelligent chatbot that answers questions using Wikipedia knowledge base',
          keyTools: ['Python', 'Wikipedia API', 'NLP', 'Sentence Transformers', 'Streamlit'],
          codeFlow: [
            'Setup Wikipedia API for content retrieval',
            'Implement semantic search using embeddings',
            'Process and rank relevant Wikipedia articles',
            'Generate contextual answers from content',
            'Build conversational chatbot interface'
          ],
          icon: <MessageSquare className="w-8 h-8" />,
          neonColor: '#00ff40'
        }
      ]
    },
    {
      id: 'devops',
      label: 'Remote System Management & Containerization',
      color: '#10b981',
      projects: [
        {
          title: 'Remote Linux Control Panel',
          objective: 'Web-based dashboard for remote Linux server management and monitoring',
          keyTools: ['Python', 'Flask', 'SSH', 'Linux Commands', 'WebSocket'],
          codeFlow: [
            'Setup secure SSH connection management',
            'Create web-based terminal interface',
            'Implement system monitoring dashboards',
            'Add file management and transfer capabilities',
            'Build real-time system alerts and notifications'
          ],
          icon: <Terminal className="w-8 h-8" />,
          neonColor: '#00ff80'
        },
        {
          title: 'Linear Regression in Docker',
          objective: 'Containerized machine learning pipeline for linear regression analysis',
          keyTools: ['Docker', 'Python', 'Scikit-learn', 'Flask API', 'Docker Compose'],
          codeFlow: [
            'Create Dockerfile for ML environment',
            'Containerize data preprocessing pipeline',
            'Build linear regression model container',
            'Setup API endpoints for model serving',
            'Deploy using Docker Compose orchestration'
          ],
          icon: <Container className="w-8 h-8" />,
          neonColor: '#0080ff'
        },
        {
          title: 'Docker Management Interface',
          objective: 'Comprehensive web interface for Docker container and image management',
          keyTools: ['Python', 'Docker API', 'Flask', 'JavaScript', 'Bootstrap'],
          codeFlow: [
            'Connect to Docker daemon via API',
            'Build container lifecycle management UI',
            'Implement image repository browser',
            'Add container logs and monitoring',
            'Create deployment and scaling controls'
          ],
          icon: <Server className="w-8 h-8" />,
          neonColor: '#00ffff'
        },
        {
          title: 'Hand Gesture EC2 Controller',
          objective: 'Control AWS EC2 instances using hand gesture recognition technology',
          keyTools: ['Python', 'OpenCV', 'MediaPipe', 'AWS SDK', 'Computer Vision'],
          codeFlow: [
            'Setup hand gesture recognition system',
            'Map gestures to EC2 control commands',
            'Integrate AWS SDK for instance management',
            'Implement real-time gesture processing',
            'Add visual feedback and command confirmation'
          ],
          icon: <Hand className="w-8 h-8" />,
          neonColor: '#ff00ff'
        }
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 cyber-grid opacity-20"></div>
      <div className="absolute inset-0 circuit-pattern opacity-15"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection direction="up">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 font-mono">
              <span className="text-blue-500">Featured Projects</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 mx-auto rounded-full"></div>
            <div className="mt-6 text-gray-400">
              <span className="text-green-500">Showcasing</span> 
              <span className="text-blue-500 ml-2">my latest work</span>
            </div>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4 mt-4">
              Showcasing <span className="text-blue-400">innovative solutions</span> across 
              <span className="text-purple-400"> automation</span>, <span className="text-green-400">AI/ML</span>, and 
              <span className="text-blue-400">system management</span>
            </p>
          </div>
        </AnimatedSection>

        {/* Tab Navigation */}
        <AnimatedSection direction="up" delay={200}>
          <div className="mb-12">
            <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-2 bg-white/5 backdrop-blur-sm border border-gray-600/30 rounded-xl p-2 shadow-xl">
              {projectTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-3 sm:px-6 sm:py-4 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base relative overflow-hidden ${
                    activeTab === tab.id
                      ? 'text-white shadow-lg transform scale-105'
                      : 'text-gray-400 hover:text-gray-200'
                  }`}
                  style={{
                    background: activeTab === tab.id 
                      ? `linear-gradient(45deg, ${tab.color}60, ${tab.color}80)`
                      : 'transparent',
                    border: activeTab === tab.id 
                      ? `2px solid ${tab.color}`
                      : '2px solid transparent'
                  }}
                >
                  <span className="relative z-10">{tab.label}</span>
                  {activeTab === tab.id && (
                    <div 
                      className="absolute inset-0 opacity-20"
                      style={{ background: tab.color }}
                    ></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Projects Grid */}
        <div className="min-h-[600px]">
          {projectTabs.map((tab) => (
            <div
              key={tab.id}
              className={`transition-all duration-500 ${
                activeTab === tab.id 
                  ? 'opacity-100 transform translate-y-0' 
                  : 'opacity-0 transform translate-y-8 pointer-events-none absolute'
              }`}
            >
              {activeTab === tab.id && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                  {tab.projects.map((project, index) => (
                    <AnimatedSection 
                      key={project.title}
                      direction={index % 2 === 0 ? 'left' : 'right'}
                      delay={index * 100}
                    >
                      <div className="group relative overflow-hidden rounded-2xl transition-all duration-300 transform hover:scale-105 bg-white/5 backdrop-blur-sm border border-gray-600/30 shadow-xl">
                        {/* Glowing Border Effect */}
                        <div 
                          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-sm"
                          style={{ background: `linear-gradient(45deg, ${project.neonColor}, transparent)` }}
                        ></div>
                        
                        <div className="relative p-6 sm:p-8">
                          {/* Project Icon */}
                          <div 
                            className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 relative overflow-hidden"
                            style={{
                              background: `linear-gradient(45deg, ${project.neonColor}30, ${project.neonColor}60)`,
                              border: `2px solid ${project.neonColor}`,
                              boxShadow: `0 4px 15px ${project.neonColor}40`
                            }}
                          >
                            <div className="w-7 h-7 sm:w-8 sm:h-8 relative z-10">
                              {React.cloneElement(project.icon as React.ReactElement, { 
                                className: "w-full h-full",
                                style: { color: project.neonColor }
                              })}
                            </div>
                          </div>

                          {/* Project Title */}
                          <h3 
                            className="text-xl sm:text-2xl font-bold mb-4"
                            style={{ color: project.neonColor }}
                          >
                            {project.title}
                          </h3>

                          {/* Objective */}
                          <div className="mb-6">
                            <h4 className="text-sm font-semibold text-blue-400 mb-2">Objective</h4>
                            <p className="text-sm sm:text-base leading-relaxed text-gray-300">
                              {project.objective}
                            </p>
                          </div>

                          {/* Key Tools */}
                          <div className="mb-6">
                            <h4 className="text-sm font-semibold text-purple-400 mb-3">Key Tools</h4>
                            <div className="flex flex-wrap gap-2">
                              {project.keyTools.map((tool) => (
                                <span
                                  key={tool}
                                  className="px-2 py-1 rounded-full text-xs font-medium border"
                                  style={{
                                    color: project.neonColor,
                                    borderColor: `${project.neonColor}60`,
                                    background: `${project.neonColor}10`
                                  }}
                                >
                                  {tool}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Code Flow */}
                          <div className="mb-6">
                            <h4 className="text-sm font-semibold text-green-400 mb-3">Code Flow</h4>
                            <ul className="space-y-2">
                              {project.codeFlow.map((step, stepIndex) => (
                                <li key={stepIndex} className="flex items-start space-x-2 text-sm text-gray-300">
                                  <div 
                                    className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                                    style={{ background: project.neonColor }}
                                  ></div>
                                  <span>{step}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Screenshots Placeholder */}
                          <div className="pt-4 border-t border-gray-600/30">
                            <div 
                              className="flex items-center justify-center space-x-2 px-4 py-3 rounded-lg font-medium transition-all duration-300 text-sm border"
                              style={{
                                borderColor: `${project.neonColor}60`,
                                color: project.neonColor,
                                background: `${project.neonColor}10`
                              }}
                            >
                              <Image className="w-4 h-4" />
                              <span>Screenshots</span>
                            </div>
                          </div>
                        </div>

                        {/* Scan Line Effect */}
                        <div 
                          className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          style={{ background: project.neonColor }}
                        ></div>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <AnimatedSection direction="up" delay={600}>
          <div className="text-center mt-16">
            <div className="text-gray-400 mb-6">
              <span className="text-green-400">Want to see more?</span>
              <span className="text-blue-400 ml-2">Check out my GitHub</span>
            </div>
            <a
              href="https://github.com/AllR0undEngineer"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3 sm:px-8 font-semibold transition-all duration-300 transform hover:scale-105 text-sm sm:text-base border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white rounded-lg group"
            >
              <Github className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>View All Projects</span>
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 group-hover:animate-pulse" />
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Projects;