import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto rounded-full"></div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white dark:bg-gray-800 p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
        >
          <p>
            Hello! I am Dasari Bhuvana Sri, a passionate Full Stack Developer and AI/ML enthusiast. I have strong skills in building responsive web applications and developing intelligent solutions.
          </p>
          <p className="mt-4">
            My journey in technology is driven by a deep interest in creating modern, user-friendly, and highly scalable applications that solve real-world problems. Whether it's crafting a beautiful front-end experience or building robust back-end APIs, I enjoy every part of the development process.
          </p>
          <p className="mt-4">
            Currently, I am expanding my knowledge in the AI/ML domain, building automation agents and smart assistants to integrate intelligence into everyday tools.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
