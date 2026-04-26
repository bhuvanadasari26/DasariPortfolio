import React from 'react';
import { motion } from 'framer-motion';
import { FiAward } from 'react-icons/fi';

const Certifications = () => {
  const certifications = [
    "Certified System Administrator(ServiceNow)",
    "Certified Application Developer(ServiceNow)",
    "Python Essentials 1&2 (Cisco Networking Academy)",
    "HTML, CSS, PYTHON , SQL(NxtWave)",
    "JavaScript Essentials(Nxtwave)"
  ];

  return (
    <section id="certifications" className="py-20 px-4 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Certifications</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow group"
            >
              <div className="p-3 bg-purple-50 dark:bg-gray-900 rounded-full mr-4 text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform">
                <FiAward size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{cert}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
