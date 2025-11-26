import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';
import Tilt from 'react-parallax-tilt';

const experiences = [
  {
    title: 'Software Developer (Assistant Manager)',
    company: 'Rodic Consultants',
    period: 'Jun 2024 – Present',
    technologies: 'ASP.NET Core, MySQL, PgSQL, SSMS, AdminPg, Blazor, MVC',
    achievements: [
      'Designed and developed complex PostgreSQL databases for multiple state-level infrastructure PMS applications (MSIDC, Bihar ADB, GUDC, GHB), each with up to 170 tables, 550 functions, 30 views and handling 400GB+ of data',
      'Led small cross-functional teams through the full development lifecycle from gathering client requirements to deployment',
      'Developed 12+ functional modules using ASP.NET Core with MVC architecture, including Portfolio Dashboards, Document Management, and Progress Monitoring',
      'Collaborated with clients from major infrastructure bodies: MSIDC, Bihar ADB, GUDC, GHB'
    ]
  },
  {
    title: 'LLM Trainer',
    company: 'Outlier.Ai (Freelancing)',
    period: 'Jan 2024 – Present',
    technologies: 'Python, Data Science, Programming, Mathematics, Statistics',
    achievements: [
      'Trained and fine-tuned over 10 LLMs, including Google\'s Gemini, for fields like coding, data science, and mathematics',
      'Conducted structured prompt-response evaluations on LLM outputs using a comprehensive 12-point rubric',
      'Labeled and scored 1,000+ model responses, improving response quality and benchmark accuracy by 20%'
    ]
  },
  {
    title: 'Data Science Intern',
    company: 'Celebal Technology',
    period: 'May 2023 – Aug 2023',
    technologies: 'Python, Pandas, Seaborn, Matplotlib, NLTK, Scikit-learn',
    achievements: [
      'Engineered a Fake News Detection system using Machine Learning, achieving 98% accuracy rate by testing 5 algorithms',
      'Enhanced data integrity through cleaning and refining datasets of 10,000 entries, using data visualization to improve insights'
    ]
  }
];

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="experience" className="min-h-screen py-20 px-6 relative overflow-hidden" ref={ref}>
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Professional <span className="text-accent">Experience</span>
        </motion.h2>

        <div className="relative">
          {/* Scroll-linked Animated Timeline line */}
          <motion.div
            className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-accent origin-top shadow-[0_0_10px_rgba(59,130,246,0.8)]"
            style={{ scaleY, height: '100%' }}
          />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="mb-12 relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="w-full md:w-5/12">
                  <Tilt
                    tiltMaxAngleX={5}
                    tiltMaxAngleY={5}
                    scale={1.02}
                    transitionSpeed={1000}
                    className="h-full"
                  >
                    <motion.div
                      className="glass-dark p-6 rounded-lg shadow-xl border border-white/5 hover:border-accent/40 transition-all h-full relative overflow-hidden group"
                      whileHover={{ y: -5 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      <div className="relative z-10">
                        <div className="flex items-center mb-3">
                          <div className="p-2 bg-accent/20 rounded-lg mr-3 text-accent">
                            <FaBriefcase />
                          </div>
                          <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                        </div>
                        <h4 className="text-lg font-semibold mb-2 text-accent">{exp.company}</h4>
                        <p className="text-gray-400 mb-3 text-sm font-mono">{exp.period}</p>
                        <p className="text-sm text-gray-500 mb-4 italic border-l-2 border-accent/30 pl-3">{exp.technologies}</p>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="text-gray-300 text-sm flex items-start">
                              <span className="text-accent mr-2 mt-1">▸</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  </Tilt>
                </div>

                {/* Timeline dot */}
                <div className="hidden md:flex w-2/12 justify-center relative">
                  <motion.div
                    className="w-6 h-6 bg-gray-900 rounded-full border-4 border-accent z-10 shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.2 + 0.3 }}
                  >
                    <motion.div
                      className="w-full h-full bg-accent rounded-full"
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </motion.div>
                </div>

                <div className="hidden md:block w-5/12" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
