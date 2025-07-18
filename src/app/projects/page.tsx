'use client'

import { projects } from '@/contents/projects'
import Image from 'next/image'
import { FaGithub, FaExternalLinkAlt, FaLock } from 'react-icons/fa'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { fadeInUp, staggerContainer, cardHoverSmall } from '@/utils/animations'

export default function Projects() {
  const linksLocked = true; // 👉 flip this to false to unlock

  return (
    <div className="container max-w-7xl mx-auto py-12">
      <motion.h1 
        className="text-4xl font-bold mb-4 text-center text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Projects
      </motion.h1>

      <motion.p 
        className="text-lg mb-24 text-center text-white/90"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Here are some of my recent projects. Click on the links to view the code or live demo.
      </motion.p>
      
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white/10 dark:bg-dark/50 rounded-lg shadow-md overflow-hidden"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <motion.div 
              className="aspect-video bg-gray-200 dark:bg-gray-800"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-full"
                width={500}
                height={500}
              />
            </motion.div>
            
            <div className="p-6">
              <motion.h3 
                className="text-xl font-semibold mb-2 text-white"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {project.title}
              </motion.h3>

              <motion.p 
                className="mb-4 text-white/80"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {project.description}
              </motion.p>
              
              <motion.div 
                className="flex flex-wrap gap-2 mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {project.technologies.map((tech, techIndex) => (
                  <motion.span
                    key={techIndex}
                    className="px-3 py-1 bg-white/10 text-white rounded-full text-sm"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
              
              <motion.div 
                className="flex gap-4 items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {linksLocked ? (
                  <div className="flex items-center gap-2 text-white/50 cursor-not-allowed">
                    <FaGithub className="h-5 w-5" />
                    <span>Code</span>
                    <FaLock className="h-4 w-4" />
                  </div>
                ) : (
                  <motion.a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white hover:text-primary transition-colors"
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub className="h-5 w-5" />
                    <span>Code</span>
                  </motion.a>
                )}

                {linksLocked ? (
                  <div className="flex items-center gap-2 text-white/50 cursor-not-allowed">
                    <FaExternalLinkAlt className="h-5 w-5" />
                    <span>Live Demo</span>
                    <FaLock className="h-4 w-4" />
                  </div>
                ) : (
                  <Link
                    href={`/video?title=${encodeURIComponent(project.title)}`}
                    className="flex items-center gap-2 text-white hover:text-primary transition-colors"
                  >
                    <FaExternalLinkAlt className="h-5 w-5" />
                    <span>Live Demo</span>
                  </Link>
                )}
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
