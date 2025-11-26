import React from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaChalkboardTeacher, FaHandsHelping } from 'react-icons/fa';

const Leadership = () => {
  return (
    <section id="leadership" className="min-h-screen py-20 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Leadership & <span className="text-accent">Social Impact</span>
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
            <div className="flex items-center mb-6">
              <FaUsers className="text-accent text-4xl mr-4" />
              <div>
                <h3 className="text-2xl font-bold text-accent">Raza Foundation</h3>
                <p className="text-lg text-gray-300">Co-founder | NGO</p>
                <p className="text-gray-400">May 2020 – Present</p>
              </div>
            </div>

            <motion.p
              className="text-lg text-gray-300 mb-6 italic"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              "Free Education for All"
            </motion.p>

            <div className="space-y-6">
              <motion.div
                className="flex items-start"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <FaChalkboardTeacher className="text-accent text-2xl mr-4 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold mb-2">Educational Initiative</h4>
                  <p className="text-gray-300">
                    Initiated Raza Foundation, a non-profit organization committed to delivering free 
                    education and social upliftment, and established a free school that serves over 
                    <span className="text-accent font-bold"> 100 underserved students</span>.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <FaHandsHelping className="text-accent text-2xl mr-4 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold mb-2">Team Leadership</h4>
                  <p className="text-gray-300">
                    Lead a diverse team of <span className="text-accent font-bold">80+ members</span> focused 
                    on developing innovative solutions for educational and social challenges, organizing 
                    <span className="text-accent font-bold"> 10+ seminars</span> on education and 
                    <span className="text-accent font-bold"> 15+ workshops</span> on skill development.
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div
              className="mt-8 grid grid-cols-3 gap-4 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
            >
              <div className="bg-primary p-4 rounded-lg">
                <p className="text-3xl font-bold text-accent">100+</p>
                <p className="text-gray-400">Students Served</p>
              </div>
              <div className="bg-primary p-4 rounded-lg">
                <p className="text-3xl font-bold text-accent">80+</p>
                <p className="text-gray-400">Team Members</p>
              </div>
              <div className="bg-primary p-4 rounded-lg">
                <p className="text-3xl font-bold text-accent">25+</p>
                <p className="text-gray-400">Events Organized</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Leadership;
