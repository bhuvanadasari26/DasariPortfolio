import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const Projects = () => {
  const projects = [
    {
      title: "AI Study Planner",
      description: "An intelligent study planner that helps users organize their learning schedules and track progress efficiently.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/bhuvanadasari26/AI-Study-Planner",
      live: "https://bhuvanadasari26.github.io/AI-Study-Planner/",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800&h=500"
    },
    {
      title: "Company Website",
      description: "A professional and responsive corporate website showcasing services, team members, and company information.",
      tech: ["HTML", "CSS", "Bootstrap"],
      github: "https://github.com/bhuvanadasari26/company-website",
      live: "https://bhuvanadasari26.github.io/company-website/",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800&h=500"
    },
   
    {
      title: "Portfolio Website",
      description: "A modern, responsive personal portfolio showcasing skills, projects, and experience with a dark mode toggle.",
      tech: ["React", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/bhuvanadasari26",
      live: "#",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=500"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all group flex flex-col"
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a href={project.github} className="p-3 bg-white text-gray-900 rounded-full hover:bg-gray-200 transition-colors" aria-label="GitHub Repository">
                    <FiGithub size={24} />
                  </a>
                  <a href={project.live} className="p-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors" aria-label="Live Demo">
                    <FiExternalLink size={24} />
                  </a>
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
