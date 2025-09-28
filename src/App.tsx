import React, { useState } from 'react';
import { Mail, MapPin, Phone, Download, ExternalLink, X, Calendar, Award, User, Briefcase, GraduationCap, Linkedin } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  features: string[];
  technologies: string[];
  image: string;
  mediaLink: string;
}

const projects: Project[] = [
  {
    id: 'underwater-rov',
    title: 'Underwater ROV',
    description: 'Advanced underwater remotely operated vehicle designed for deep-sea exploration and research operations.',
    features: [
      '20-part rover assembly design',
      '10% mobility improvement across terrains',
      'Waterproof housing with 200m depth rating',
      'HD camera system with real-time streaming',
      'Precision thruster control system'
    ],
    technologies: ['SolidWorks', 'CAD Design', 'Fluid Dynamics', 'Control Systems'],
    image: 'https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=800',
    mediaLink: 'https://drive.google.com/drive/folders/1hdLJkPbK4tLxrlT7u-jLM_iZvQNaMc72?usp=sharing'
  },
  {
    id: 'water-clock',
    title: 'Water Clock',
    description: 'Innovative timekeeping mechanism using water flow dynamics and precision engineering.',
    features: [
      'Precision water flow control system',
      'Automated time display mechanism',
      'Sustainable and eco-friendly design',
      'Accurate timekeeping within ±2 minutes/day',
      'Modular component architecture'
    ],
    technologies: ['SolidWorks', 'Fluid Mechanics', 'Precision Engineering', 'CAD'],
    image: 'https://images.pexels.com/photos/1191710/pexels-photo-1191710.jpeg?auto=compress&cs=tinysrgb&w=800',
    mediaLink: 'https://drive.google.com/drive/folders/1y7pDYT4HQx1o7W1qrtdCGenU-UqsN5Hw?usp=sharing'
  },
  {
    id: 'defense-rover',
    title: 'Defense Rover',
    description: 'Military-grade autonomous rover designed for reconnaissance and tactical operations.',
    features: [
      'All-terrain mobility system',
      'Advanced sensor integration',
      'Autonomous navigation capabilities',
      'Ruggedized design for harsh environments',
      'Real-time data transmission'
    ],
    technologies: ['SolidWorks', 'Robotics', 'Defense Systems', 'Autonomous Navigation'],
    image: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=800',
    mediaLink: 'https://drive.google.com/drive/folders/1T4qHbNlx3a67biCu74hnBqruFHV2BZa_?usp=sharing'
  },
  {
    id: 'f1-front-wing',
    title: 'F1 Car Front Wing',
    description: 'Aerodynamically optimized Formula 1 front wing design for maximum downforce and efficiency.',
    features: [
      'CFD-optimized aerodynamic profile',
      '15% increase in downforce generation',
      'Lightweight carbon fiber construction',
      'Adjustable angle of attack system',
      'FIA regulation compliant design'
    ],
    technologies: ['SolidWorks', 'CFD Analysis', 'Aerodynamics', 'Carbon Fiber'],
    image: 'https://images.pexels.com/photos/12789/pexels-photo-12789.jpeg?auto=compress&cs=tinysrgb&w=800',
    mediaLink: 'https://drive.google.com/drive/folders/1r9BX0BrHmVfgXq586S4Bu-Zou3IZ5sKM?usp=sharing'
  },
  {
    id: 'composite-bulkhead',
    title: 'Design and Analysis of Composite Fuselage Bulkhead for Unmanned Aerial Vehicles',
    description: 'Developed a UAV model using NACA airfoil coordinates to generate the skin profile with advanced composite analysis.',
    features: [
      'NACA airfoil coordinate integration',
      'Complete surface and part modeling in SolidWorks',
      'HyperMesh integration for mesh extraction',
      'Finite element analysis implementation',
      'Structural validation and optimization'
    ],
    technologies: ['SolidWorks', 'HyperMesh', 'FEA', 'Composite Materials', 'NACA Airfoils'],
    image: 'https://images.pexels.com/photos/912050/pexels-photo-912050.jpeg?auto=compress&cs=tinysrgb&w=800',
    mediaLink: 'https://drive.google.com/drive/folders/1IIvYwZeU4pUtM_8Suw-ojwAx3IN28qN8?usp=sharing'
  },
  {
    id: 'ic-chip-rectification',
    title: 'IC Chip Rectification',
    description: 'Fully autonomous, vision-guided robotic system for precision removal of defective components from IC chips.',
    features: [
      'Multi-arm robotics integration',
      'Dynamic clamping system',
      'Conveyor-based handling mechanism',
      'Raspberry Pi-based control system',
      'Real-time image processing',
      'Desoldering and plucking capabilities',
      'Automated verification system'
    ],
    technologies: ['Robotics', 'Computer Vision', 'Raspberry Pi', 'Image Processing', 'Automation'],
    image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=800',
    mediaLink: 'https://drive.google.com/drive/folders/1Z-9bEVdkxfuZLwldEvU9iDmf7MABqUDI?usp=sharing'
  }
];

function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const handleViewMedia = (mediaLink: string) => {
    window.open(mediaLink, '_blank');
  };

  const handleOpenResume = () => {
    window.open('https://drive.google.com/file/d/1UateU0BaL_3roNMHyhfTprurLD8a4-vR/view?usp=sharing', '_blank');
  };

  const handleEmail = () => {
    window.location.href = 'mailto:aditya.thakur2023@vitstudent.ac.in';
  };

  const handleLinkedIn = () => {
    window.open('https://www.linkedin.com/in/aditya-thakur-007627249/', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Aditya Thakur</h1>
                <p className="text-gray-600">Mechanical Engineer & CAD Specialist</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">About</a>
              <a href="#projects" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Projects</a>
              <a href="#experience" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Experience</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-32 h-32 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center shadow-2xl">
              <User className="w-16 h-16 text-white" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Aditya Thakur</h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Passionate Mechanical Engineer specializing in SolidWorks CAD design, robotics, and innovative engineering solutions. 
              Experienced in creating complex mechanical systems and bringing ideas to life through precision engineering.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={handleOpenResume}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <ExternalLink className="w-5 h-5" />
                <span>Open Resume</span>
              </button>
              <button 
                onClick={handleEmail}
                className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Mail className="w-5 h-5" />
                <span>Email Me</span>
              </button>
              <button 
                onClick={handleLinkedIn}
                className="bg-blue-700 text-white px-8 py-3 rounded-lg hover:bg-blue-800 transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Engineering Excellence</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                As a dedicated Mechanical Engineer, I specialize in transforming innovative concepts into tangible engineering solutions. 
                My expertise spans across SolidWorks CAD design, robotics, and advanced manufacturing processes.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                With a strong foundation in mechanical design principles and hands-on experience in various engineering projects, 
                I bring creativity and technical precision to every challenge I undertake.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <Award className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-900">CAD Expert</h4>
                  <p className="text-sm text-gray-600">SolidWorks Certified</p>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <Briefcase className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-900">Project Leader</h4>
                  <p className="text-sm text-gray-600">6+ Major Projects</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Technical Skills</h3>
              <div className="space-y-4">
                {[
                  { skill: 'SolidWorks CAD', level: 95 },
                  { skill: 'Mechanical Design', level: 90 },
                  { skill: 'Robotics & Automation', level: 85 },
                  { skill: 'FEA Analysis', level: 80 },
                  { skill: 'Project Management', level: 88 }
                ].map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-gray-700">{item.skill}</span>
                      <span className="text-gray-600">{item.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${item.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore my portfolio of innovative engineering projects, showcasing expertise in mechanical design, 
              robotics, and advanced manufacturing solutions.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div 
                key={project.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer transform hover:-translate-y-2"
                onClick={() => handleProjectClick(project)}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-medium">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Education & Experience</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                <GraduationCap className="w-6 h-6 mr-3 text-blue-600" />
                Education
              </h3>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-600 pl-6 pb-6">
                  <div className="flex items-center mb-2">
                    <Calendar className="w-4 h-4 text-gray-500 mr-2" />
                    <span className="text-gray-500 text-sm">2021 - 2025</span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">Bachelor of Technology</h4>
                  <p className="text-gray-600">Mechanical Engineering</p>
                  <p className="text-gray-500">VIT University, Vellore</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                <Briefcase className="w-6 h-6 mr-3 text-purple-600" />
                Key Achievements
              </h3>
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">SolidWorks Expertise</h4>
                  <p className="text-gray-600">Advanced proficiency in 3D modeling, assembly design, and simulation</p>
                </div>
                <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Project Leadership</h4>
                  <p className="text-gray-600">Led multiple engineering projects from concept to completion</p>
                </div>
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Innovation Focus</h4>
                  <p className="text-gray-600">Specialized in robotics, automation, and advanced manufacturing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Ready to collaborate on your next engineering project? Let's discuss how we can bring your ideas to life.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/20 transition-all duration-300">
              <Mail className="w-12 h-12 mx-auto mb-4 text-blue-200" />
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-blue-100 mb-4">aditya.thakur2023@vitstudent.ac.in</p>
              <button 
                onClick={handleEmail}
                className="bg-white text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50 transition-colors font-medium"
              >
                Send Email
              </button>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/20 transition-all duration-300">
              <Linkedin className="w-12 h-12 mx-auto mb-4 text-blue-200" />
              <h3 className="text-xl font-bold mb-2">LinkedIn</h3>
              <p className="text-blue-100 mb-4">Connect professionally</p>
              <button 
                onClick={handleLinkedIn}
                className="bg-white text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50 transition-colors font-medium"
              >
                Connect
              </button>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/20 transition-all duration-300">
              <ExternalLink className="w-12 h-12 mx-auto mb-4 text-blue-200" />
              <h3 className="text-xl font-bold mb-2">Resume</h3>
              <p className="text-blue-100 mb-4">View my complete profile</p>
              <button 
                onClick={handleOpenResume}
                className="bg-white text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50 transition-colors font-medium"
              >
                Open Resume
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
              <User className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Aditya Thakur</h3>
            <p className="text-gray-400 mb-6">Mechanical Engineer & CAD Specialist</p>
            <div className="flex justify-center space-x-6 mb-8">
              <button 
                onClick={handleEmail}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="w-6 h-6" />
              </button>
              <button 
                onClick={handleLinkedIn}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </button>
              <button 
                onClick={handleOpenResume}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <ExternalLink className="w-6 h-6" />
              </button>
            </div>
            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-400">
                © 2024 Aditya Thakur. All rights reserved. | Designed with passion for engineering excellence.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-t-2xl"
              />
              <button 
                onClick={closeModal}
                className="absolute top-4 right-4 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-2 transition-all duration-200"
              >
                <X className="w-6 h-6 text-gray-700" />
              </button>
              <div className="absolute bottom-4 left-4 right-4">
                <h2 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h2>
              </div>
            </div>
            <div className="p-8">
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">{selectedProject.description}</p>
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Key Features</h3>
                <ul className="grid md:grid-cols-2 gap-3">
                  {selectedProject.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-3">
                  {selectedProject.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-gray-800 rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex justify-center">
                <button 
                  onClick={() => handleViewMedia(selectedProject.mediaLink)}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <ExternalLink className="w-5 h-5" />
                  <span>View Media</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;