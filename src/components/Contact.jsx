import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa';
import FloatingShape from './FloatingShape';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log('Form submitted:', formData);
    alert('Message sent! (This is a demo)');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="min-h-screen py-20 px-6 relative overflow-hidden">
      <FloatingShape className="top-20 right-[-50px] w-[300px] h-[300px] opacity-20" color="#3b82f6" size={1.5} />
      <FloatingShape className="bottom-20 left-[-50px] w-[400px] h-[400px] opacity-20" color="#ec4899" size={2} />

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Get In <span className="text-accent">Touch</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
            <p className="text-gray-300 mb-8">
              I'm always open to discussing new projects, creative ideas, or opportunities
              to be part of your visions. Feel free to reach out!
            </p>

            <div className="space-y-4">
              <motion.div
                className="flex items-center space-x-4 bg-secondary p-4 rounded-lg border border-accent/10"
                whileHover={{ x: 5, borderColor: 'rgba(59, 130, 246, 0.4)' }}
              >
                <FaEnvelope className="text-accent text-2xl" />
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="font-semibold">msrizwi303@gmail.com</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center space-x-4 bg-secondary p-4 rounded-lg border border-accent/10"
                whileHover={{ x: 5, borderColor: 'rgba(59, 130, 246, 0.4)' }}
              >
                <FaPhone className="text-accent text-2xl" />
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <p className="font-semibold">+91 9334317071</p>
                </div>
              </motion.div>

              <motion.a
                href="https://linkedin.com/in/md-shafiullah-quraishi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 bg-secondary p-4 rounded-lg border border-accent/10"
                whileHover={{ x: 5, borderColor: 'rgba(59, 130, 246, 0.4)' }}
              >
                <FaLinkedin className="text-accent text-2xl" />
                <div>
                  <p className="text-sm text-gray-400">LinkedIn</p>
                  <p className="font-semibold">md-shafiullah-quraishi</p>
                </div>
              </motion.a>

              <motion.a
                href="https://github.com/rizwi0786"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 bg-secondary p-4 rounded-lg border border-accent/10"
                whileHover={{ x: 5, borderColor: 'rgba(59, 130, 246, 0.4)' }}
              >
                <FaGithub className="text-accent text-2xl" />
                <div>
                  <p className="text-sm text-gray-400">GitHub</p>
                  <p className="font-semibold">rizwi0786</p>
                </div>
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Name</label>
                <motion.input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-secondary border border-accent/20 rounded-lg px-4 py-3 focus:outline-none focus:border-accent transition-colors"
                  whileFocus={{ scale: 1.02 }}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Email</label>
                <motion.input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-secondary border border-accent/20 rounded-lg px-4 py-3 focus:outline-none focus:border-accent transition-colors"
                  whileFocus={{ scale: 1.02 }}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Message</label>
                <motion.textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full bg-secondary border border-accent/20 rounded-lg px-4 py-3 focus:outline-none focus:border-accent transition-colors resize-none"
                  whileFocus={{ scale: 1.02 }}
                />
              </div>

              <motion.button
                type="submit"
                className="w-full bg-accent hover:bg-accentHover text-white font-semibold py-3 rounded-lg flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Send Message</span>
                <FaPaperPlane />
              </motion.button>
            </form>
          </motion.div>
        </div>

        <motion.footer
          className="mt-16 text-center text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p>© 2025 Md Shafiullah Quraishi. All rights reserved.</p>
        </motion.footer>
      </div>
    </section>
  );
};

export default Contact;
