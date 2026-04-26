import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiArrowRight } from 'react-icons/fi';

const Hero = () => {
  const roles = ["Full Stack Developer", "AI/ML Engineer"];
  const [currentRole, setCurrentRole] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, typingSpeed);

    return () => { clearInterval(ticker) };
  }, [currentRole, isDeleting]);

  const tick = () => {
    let i = loopNum % roles.length;
    let fullText = roles[i];
    let updatedText = isDeleting ? fullText.substring(0, currentRole.length - 1) : fullText.substring(0, currentRole.length + 1);

    setCurrentRole(updatedText);

    if (isDeleting) {
      setTypingSpeed(prevSpeed => prevSpeed / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setTypingSpeed(2000);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setTypingSpeed(150);
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-lg md:text-xl text-purple-600 dark:text-purple-400 font-medium mb-4"
        >
          Hi, I am
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight"
        >
          Dasari Bhuvana Sri
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl md:text-4xl font-bold text-gray-700 dark:text-gray-300 mb-8 h-12"
        >
          <span className="mr-2">I am a</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">
            {currentRole}
          </span>
          <span className="animate-pulse font-light text-gray-400">|</span>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Passionate about building responsive web applications and intelligent solutions. Interested in creating modern, user-friendly, and scalable applications.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="w-full sm:w-auto px-8 py-3 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold flex items-center justify-center hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
          >
            View Projects <FiArrowRight className="ml-2" />
          </a>
          <a
            href="/Bhuvana Sri Dasari Resume.pdf"
            download
            className="w-full sm:w-auto px-8 py-3 rounded-full border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white font-semibold flex items-center justify-center hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-all"
          >
            <FiDownload className="mr-2" /> Download Resume
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold flex items-center justify-center hover:from-purple-700 hover:to-blue-600 transition-colors shadow-lg hover:shadow-xl"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
