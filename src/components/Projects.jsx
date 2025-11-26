import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaBriefcase, FaUser, FaChevronLeft, FaChevronRight, FaImages } from 'react-icons/fa';
import Tilt from 'react-parallax-tilt';

const projectsData = {
  office: [
    {
      title: 'State Infrastructure PMS - MSIDC',
      description: 'Developed comprehensive project management system with 170+ tables, 550+ functions handling 400GB+ data for Maharashtra State Infrastructure Development Corporation.',
      technologies: ['ASP.NET Core', 'PostgreSQL', 'Blazor', 'MVC'],
      date: 'Jun 2024',
      highlights: [
        'Designed complex database with advanced PostgreSQL features',
        'Implemented 12+ functional modules including dashboards and monitoring'
      ],
      images: [
        { url: '/images/ig1.png', caption: 'Main Dashboard Overview' },
        { url: '/images/ig2.png', caption: 'Real-time Project Monitoring' },
        { url: 'https://via.placeholder.com/800x500/3b82f6/ffffff?text=Document+Management', caption: 'Document Management System' },
        { url: 'https://via.placeholder.com/800x500/3b82f6/ffffff?text=Analytics', caption: 'Advanced Analytics Dashboard' },
        { url: 'https://via.placeholder.com/800x500/3b82f6/ffffff?text=Reports', caption: 'Comprehensive Reports Module' }
      ]
    },
    {
      title: 'Bihar ADB Infrastructure Portal',
      description: 'Built scalable infrastructure management portal for Asian Development Bank projects in Bihar with real-time progress tracking and document management.',
      technologies: ['ASP.NET Core', 'PostgreSQL', 'AdminPg', 'MVC'],
      date: 'Aug 2024',
      highlights: [
        'Automated job scheduling and trigger-based workflows',
        'Integrated multi-tier approval systems with role-based access'
      ],
      images: [
        { url: '/images/ig1.png', caption: 'Bihar ADB Portal Homepage' },
        { url: '/images/ig2.png', caption: 'Project Progress Tracking' },
        { url: 'https://via.placeholder.com/800x500/3b82f6/ffffff?text=Approval+System', caption: 'Multi-tier Approval System' },
        { url: 'https://via.placeholder.com/800x500/3b82f6/ffffff?text=Financial+Module', caption: 'Financial Management Module' }
      ]
    },
    {
      title: 'GUDC Project Management System',
      description: 'Enterprise-level PMS for Gujarat Urban Development Company with advanced reporting, analytics, and portfolio dashboards.',
      technologies: ['ASP.NET Core', 'PostgreSQL', 'Blazor', 'PowerBI'],
      date: 'Sep 2024',
      highlights: [
        'Created 30+ views for complex data aggregation',
        'Built real-time analytics dashboards with PowerBI integration'
      ],
      images: [
        { url: '/images/ig2.png', caption: 'GUDC Main Dashboard' },
        { url: '/images/ig2.png', caption: 'PowerBI Analytics Integration' },
        { url: 'https://via.placeholder.com/800x500/3b82f6/ffffff?text=Portfolio+View', caption: 'Portfolio Management View' },
        { url: 'https://via.placeholder.com/800x500/3b82f6/ffffff?text=Data+Aggregation', caption: 'Complex Data Aggregation' },
        { url: 'https://via.placeholder.com/800x500/3b82f6/ffffff?text=Reports', caption: 'Advanced Reporting System' }
      ]
    },
    {
      title: 'GHB Housing Infrastructure System',
      description: 'Comprehensive housing project management platform for Gujarat Housing Board with financial tracking and contractor management.',
      technologies: ['ASP.NET Core', 'MySQL', 'Blazor', 'SSMS'],
      date: 'Oct 2024',
      highlights: [
        'Implemented financial module with multi-currency support',
        'Designed contractor evaluation and performance tracking system'
      ],
      images: [
        { url: '/images/ig2.png', caption: 'GHB Housing Portal' },
        { url: '/images/ig2.png', caption: 'Financial Tracking Module' },
        { url: 'https://via.placeholder.com/800x500/3b82f6/ffffff?text=Contractor+Management', caption: 'Contractor Management System' },
        { url: 'https://via.placeholder.com/800x500/3b82f6/ffffff?text=Performance', caption: 'Performance Analytics Dashboard' }
      ]
    },
    {
      title: 'Document Management & OCR System',
      description: 'Built intelligent document processing system with OCR integration for automated data extraction and categorization across all PMS applications.',
      technologies: ['ASP.NET Core', 'Azure OCR', 'PostgreSQL', 'React'],
      date: 'Nov 2024',
      highlights: [
        'Integrated Azure OCR for automated document processing',
        'Reduced manual data entry time by 60% through automation'
      ],
      images: [
        { url: '/images/ig2.png', caption: 'OCR Processing Interface' },
        { url: '/images/ig2.png', caption: 'Document Upload Module' },
        { url: 'https://via.placeholder.com/800x500/3b82f6/ffffff?text=Data+Extraction', caption: 'Automated Data Extraction' },
        { url: 'https://via.placeholder.com/800x500/3b82f6/ffffff?text=Categories', caption: 'Document Categorization' },
        { url: 'https://via.placeholder.com/800x500/3b82f6/ffffff?text=Processing', caption: 'Real-time Processing Dashboard' }
      ]
    }
  ],
  personal: [
    {
      title: 'Medical Appointment Booking System',
      description: 'Spearheaded a secure MERN app for Medical Bookings, implementing encryption, JWT authentication, and integrating Stripe for secure transactions across 10 intuitive pages.',
      technologies: ['ReactJs', 'NodeJs', 'MongoDB', 'Express', 'Stripe', 'TailwindCSS'],
      date: 'Nov 2022',
      highlights: [
        'Collaborated with a 5-member team using Git to manage over 200 modifications',
        'Optimized Express/MongoDB API for seamless data management'
      ],
      github: 'https://github.com/msrizwi303',
      demo: '#'
    },
    {
      title: 'SQLGenie - Intelligent SQL Analytics Tool',
      description: 'Built a web application that auto-generates SQL code from custom-designed database schemas using an intuitive drag-and-drop UI built with React and the react-flow library.',
      technologies: ['ReactJS', 'Node.js', 'JavaScript', 'SQL', 'OpenAI'],
      date: 'Jan 2024',
      highlights: [
        'Integrated OpenAI to convert natural language into accurate SQL queries',
        'Enables non-technical users to perform effortless data analysis'
      ],
      github: 'https://github.com/msrizwi303',
      demo: '#'
    },
    {
      title: 'AI-Powered Portfolio Website',
      description: 'Created a modern, animated portfolio website with glassmorphism effects, Three.js 3D animations, and smooth scroll interactions using React and Framer Motion.',
      technologies: ['React', 'Three.js', 'Framer Motion', 'TailwindCSS'],
      date: 'Nov 2024',
      highlights: [
        'Implemented advanced 3D animations and interactive elements',
        'Achieved 95+ Lighthouse performance score'
      ],
      github: 'https://github.com/msrizwi303',
      demo: '#'
    },
    {
      title: 'E-Commerce Platform with Admin Dashboard',
      description: 'Full-stack e-commerce solution with product management, shopping cart, payment integration, and comprehensive admin dashboard for inventory and order management.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Redux', 'Stripe'],
      date: 'Aug 2023',
      highlights: [
        'Built RESTful API with 40+ endpoints for complete CRUD operations',
        'Implemented real-time inventory tracking and automated email notifications'
      ],
      github: 'https://github.com/msrizwi303',
      demo: '#'
    },
    {
      title: 'Real-Time Chat Application',
      description: 'WebSocket-based real-time chat application with private messaging, group chats, file sharing, and emoji support with modern UI/UX design.',
      technologies: ['React', 'Socket.io', 'Node.js', 'MongoDB', 'JWT'],
      date: 'May 2023',
      highlights: [
        'Implemented WebSocket for real-time bidirectional communication',
        'Built notification system with sound alerts and desktop notifications'
      ],
      github: 'https://github.com/msrizwi303',
      demo: '#'
    }
  ]
};

// Flip Card Component for Office Projects
const FlipCard = ({ project, index }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      style={{ perspective: '1500px' }}
      className="min-h-[390px] h-auto h-full"
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 120, damping: 20 }}
        style={{
          transformStyle: 'preserve-3d',
          position: 'relative',
          width: '100%',
          minHeight: '390px',
          height: '100%',
        }}
      >
        {/* Front Side - Project Details */}
        <div
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
          }}
          className="glass-dark rounded-lg overflow-hidden shadow-xl"
        >
          <div className="p-6 h-full flex flex-col">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-accent pr-4">{project.title}</h3>
              <span className="text-sm text-gray-400 whitespace-nowrap">{project.date}</span>
            </div>

            <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>

            <div className="mb-4">
              <h4 className="text-xs font-semibold text-gray-400 mb-2">Technologies:</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <motion.span
                    key={i}
                    className="bg-accent/20 text-accent px-3 py-1 rounded-full text-xs border border-accent/30"
                    whileHover={{ scale: 1.1, backgroundColor: 'rgba(59, 130, 246, 0.3)' }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>

            <div className="mb-4 flex-grow">
              <h4 className="text-xs font-semibold text-gray-400 mb-2">Key Highlights:</h4>
              <ul className="space-y-2">
                {project.highlights.map((highlight, i) => (
                  <li key={i} className="text-gray-300 text-sm flex items-start">
                    <span className="text-accent mr-2 mt-1">▸</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            <motion.button
              onClick={handleFlip}
              className="mt-auto flex items-center justify-center gap-2 bg-accent hover:bg-accentHover text-white px-4 py-3 rounded-lg transition-colors text-sm font-semibold w-full"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaImages /> View Screenshots
            </motion.button>
          </div>
        </div>

        {/* Back Side - Image Carousel */}
        <div
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
            transform: 'rotateY(180deg)',
          }}
          className="glass-dark rounded-lg overflow-hidden shadow-xl"
        >
          <div className="relative w-full h-full flex flex-col">
            {/* Image Display */}
            <div className="relative flex-1 bg-gray-900/50 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImageIndex}
                  src={project.images[currentImageIndex].url}
                  alt={project.images[currentImageIndex].caption}
                  className="w-full h-full object-contain"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.3 }}
                />
              </AnimatePresence>

              {/* Image Caption */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-3">
                <p className="text-white text-base font-semibold text-center">
                  {project.images[currentImageIndex].caption}
                </p>
                <p className="text-gray-300 text-xs text-center mt-1">
                  {currentImageIndex + 1} / {project.images.length}
                </p>
              </div>

              {/* Navigation Arrows */}
              {project.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full transition-all z-10 backdrop-blur-sm"
                  >
                    <FaChevronLeft size={20} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full transition-all z-10 backdrop-blur-sm"
                  >
                    <FaChevronRight size={20} />
                  </button>
                </>
              )}
            </div>

            {/* Bottom Controls */}
            <div className="p-4 bg-gray-900/80 backdrop-blur-sm">
              {/* Dot Indicators */}
              <div className="flex justify-center gap-2 mb-3">
                {project.images.map((_, imgIndex) => (
                  <button
                    key={imgIndex}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex(imgIndex);
                    }}
                    className={`h-2 rounded-full transition-all ${imgIndex === currentImageIndex
                        ? 'bg-accent w-8'
                        : 'bg-white/50 hover:bg-white/80 w-2'
                      }`}
                  />
                ))}
              </div>

              {/* Back Button */}
              <motion.button
                onClick={handleFlip}
                className="w-full bg-accent hover:bg-accentHover text-white px-4 py-2 rounded-lg transition-colors text-sm font-semibold"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Back to Details
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Regular Card for Personal Projects
const RegularCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="glass-dark rounded-lg overflow-hidden shadow-xl hover:border-accent/30 transition-all h-full"
      whileHover={{ y: -10, scale: 1.02 }}
    >
      <div className="p-6 h-full flex flex-col">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-accent pr-4">{project.title}</h3>
          <span className="text-sm text-gray-400 whitespace-nowrap">{project.date}</span>
        </div>

        <p className="text-gray-300 mb-4 text-sm flex-grow">{project.description}</p>

        <div className="mb-4">
          <h4 className="text-xs font-semibold text-gray-400 mb-2">Technologies:</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, i) => (
              <motion.span
                key={i}
                className="bg-accent/20 text-accent px-3 py-1 rounded-full text-xs border border-accent/30"
                whileHover={{ scale: 1.1, backgroundColor: 'rgba(59, 130, 246, 0.3)' }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <h4 className="text-xs font-semibold text-gray-400 mb-2">Key Highlights:</h4>
          <ul className="space-y-1">
            {project.highlights.map((highlight, i) => (
              <li key={i} className="text-gray-300 text-xs flex items-start">
                <span className="text-accent mr-2 mt-1">▸</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex gap-4 mt-6">
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-accent hover:bg-accentHover px-4 py-2 rounded-lg transition-colors text-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub /> View Code
          </motion.a>
          <motion.a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-accent text-accent hover:bg-accent hover:text-white px-4 py-2 rounded-lg transition-colors text-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaExternalLinkAlt /> Live Demo
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [activeTab, setActiveTab] = useState('office');

  const tabs = [
    { id: 'office', label: 'Office Projects', icon: <FaBriefcase /> },
    { id: 'personal', label: 'Personal Projects', icon: <FaUser /> }
  ];

  return (
    <section id="projects" className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          Featured <span className="text-accent">Projects</span>
        </motion.h2>

        {/* Tab Buttons */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <div className="glass-dark rounded-full p-2 flex gap-2">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all relative ${activeTab === tab.id
                    ? 'text-white'
                    : 'text-gray-400 hover:text-gray-200'
                  }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {activeTab === tab.id && (
                  <motion.div
                    className="absolute inset-0 bg-accent rounded-full"
                    layoutId="activeTab"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  {tab.icon}
                  {tab.label}
                </span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 gap-8"
          >
            {projectsData[activeTab].map((project, index) => (
              <Tilt
                key={`${activeTab}-${index}`}
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                scale={1.02}
                transitionSpeed={1000}
                className="h-full"
              >
                <div className="h-full">
                  {activeTab === 'office' ? (
                    <FlipCard project={project} index={index} />
                  ) : (
                    <RegularCard project={project} index={index} />
                  )}
                </div>
              </Tilt>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
