import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaDownload } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import Hero3D from './Hero3D';

const About = () => {
  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
      <Hero3D />
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-4"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Hi, I'm <span className="text-accent">Md Shafiullah Quraishi</span>
          </motion.h1>

          <motion.div
            className="text-2xl md:text-3xl text-gray-400 mb-6 h-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <TypeAnimation
              sequence={[
                'Software Engineer',
                2000,
                'Full-Stack Developer',
                2000,
                'Database Expert',
                2000,
                'LLM Trainer',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              cursor={true}
              style={{ display: 'inline-block' }}
            />
          </motion.div>

          <motion.p
            className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            Passionate software developer specializing in ASP.NET Core, ReactJS, and PostgreSQL.
            With experience in building complex database systems and training LLMs, I create
            innovative solutions that drive real-world impact.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            <div className="flex items-center space-x-2 bg-secondary px-4 py-2 rounded-lg">
              <FaEnvelope className="text-accent" />
              <span>msrizwi303@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2 bg-secondary px-4 py-2 rounded-lg">
              <FaPhone className="text-accent" />
              <span>+91 9334317071</span>
            </div>
            <a
              href="/Md_Shafiullah_Quraishi.pdf"
              download
              className="flex items-center space-x-2 bg-secondary px-4 py-2 rounded-lg hover:bg-accent hover:text-white transition-colors font-semibold"
            >
              <FaDownload className="text-accent" />
              <span>Download Resume</span>
            </a>
          </motion.div>

          <motion.a
            href="#contact"
            className="inline-block bg-accent hover:bg-accentHover text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
