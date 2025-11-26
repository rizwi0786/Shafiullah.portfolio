import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaReact, FaDatabase, FaTools } from 'react-icons/fa';
import Tilt from 'react-parallax-tilt';
import FloatingShape from './FloatingShape';

const skillsData = [
  {
    category: 'Languages',
    icon: <FaCode />,
    skills: ['C', 'C++', 'C#', 'Python', 'JavaScript', 'HTML/CSS', 'SQL']
  },
  {
    category: 'Frameworks',
    icon: <FaReact />,
    skills: ['ASP.NET Core', 'Blazor', 'ReactJs', 'ExpressJs', 'NodeJs', 'Bootstrap', 'TailwindCSS']
  },
  {
    category: 'Databases',
    icon: <FaDatabase />,
    skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Data Science']
  },
  {
    category: 'Developer Tools',
    icon: <FaTools />,
    skills: ['Visual Studio', 'Postman', 'SSMS', 'PgAdmin']
  }
];

const softSkills = ['Team player', 'Problem solving', 'Communication', 'Self-learner', 'Adaptability', 'Prompt Engineering'];

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen py-20 px-6 bg-secondary/30 relative overflow-hidden">
      <FloatingShape className="top-20 left-[-100px] w-[300px] h-[300px] opacity-30" color="#3b82f6" size={1.5} />
      <FloatingShape className="bottom-20 right-[-100px] w-[400px] h-[400px] opacity-30" color="#ec4899" size={2} />

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Technical <span className="text-accent">Skills</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {skillsData.map((category, index) => (
            <Tilt key={index} tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} transitionSpeed={1000}>
              <motion.div
                className="bg-secondary p-6 rounded-lg shadow-xl border border-accent/20 h-full"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <span className="text-accent text-3xl mr-3">{category.icon}</span>
                  <h3 className="text-2xl font-bold">{category.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <motion.span
                      key={i}
                      className="bg-primary px-4 py-2 rounded-lg text-gray-300 border border-accent/10"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 + i * 0.05 }}
                      whileHover={{ scale: 1.1, borderColor: 'rgba(59, 130, 246, 0.5)', backgroundColor: 'rgba(59, 130, 246, 0.1)' }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </Tilt>
          ))}
        </div>

        <motion.div
          className="bg-secondary p-6 rounded-lg shadow-xl border border-accent/20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-4 text-center">Soft Skills</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {softSkills.map((skill, index) => (
              <motion.div
                key={index}
                className="bg-accent/20 text-accent px-6 py-3 rounded-full font-semibold"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.15, backgroundColor: 'rgba(59, 130, 246, 0.3)' }}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
