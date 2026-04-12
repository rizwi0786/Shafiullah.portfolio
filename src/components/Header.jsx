import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaCode } from 'react-icons/fa';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass-dark shadow-lg' : 'bg-transparent'
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.div
            className="text-2xl font-bold text-accent"
            whileHover={{ scale: 1.05 }}
          >
            MSQ
          </motion.div>

          <div className="hidden md:flex space-x-8">
            {['About', 'Experience', 'Projects', 'Skills', 'Education', 'Contact'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-accent transition-colors"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.a>
            ))}
            <motion.a
              href={`${process.env.PUBLIC_URL}/Md_Shafiullah_Quraishi.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-accent transition-colors font-semibold"
              whileHover={{ y: -2, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Resume
            </motion.a>
          </div>

          <div className="flex space-x-4">
            <motion.a
              href="https://github.com/rizwi0786"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="text-gray-300 hover:text-accent"
            >
              <FaGithub size={24} />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/md-shafiullah-quraishi"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: -5 }}
              className="text-gray-300 hover:text-accent"
            >
              <FaLinkedin size={24} />
            </motion.a>
            <motion.a
              href="https://leetcode.com/msrizwi303"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="text-gray-300 hover:text-accent"
            >
              <FaCode size={24} />
            </motion.a>
          </div>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;
