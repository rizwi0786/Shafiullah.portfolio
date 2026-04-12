import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBook } from 'react-icons/fa';

const Education = () => {
  const coursework = [
    'Operating System',
    'Computer Network',
    'Artificial Intelligence',
    'Machine Learning',
    'Object-Oriented Programming',
    'Data Structures And Algorithm',
    'Database Management System',
    'Data Science'
  ];

  return (
    <section id="education" className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-accent">Education</span>
        </motion.h2>

        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="bg-secondary p-8 rounded-lg shadow-xl border border-accent/20"
            whileHover={{ y: -5, borderColor: 'rgba(59, 130, 246, 0.4)' }}
          >
            <div className="flex items-center mb-4">
              <FaGraduationCap className="text-accent text-4xl mr-4" />
              <div>
                <h3 className="text-2xl font-bold text-accent">National Institute Of Technology Durgapur</h3>
                <p className="text-gray-400">Aug. 2020 – May 2024</p>
              </div>
            </div>
            
            <div className="mb-6">
              <p className="text-xl font-semibold mb-2">Bachelor of Technology in Computer Science And Engineering</p>
              <p className="text-lg text-gray-300">CGPA: <span className="text-accent font-bold">8.41</span></p>
              <p className="text-gray-400">Durgapur, West Bengal</p>
            </div>

            <div className="mt-6">
              <div className="flex items-center mb-4">
                <FaBook className="text-accent text-2xl mr-3" />
                <h4 className="text-xl font-semibold">Relevant Coursework</h4>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {coursework.map((course, index) => (
                  <motion.div
                    key={index}
                    className="bg-primary px-4 py-2 rounded-lg text-gray-300 border border-accent/10 text-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ 
                      scale: 1.05, 
                      borderColor: 'rgba(59, 130, 246, 0.5)',
                      backgroundColor: 'rgba(59, 130, 246, 0.1)'
                    }}
                  >
                    {course}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
