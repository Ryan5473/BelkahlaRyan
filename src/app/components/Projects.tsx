'use client'

import { projects } from '@/contents/projects';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt, FaLock } from 'react-icons/fa'; // ✅ added FaLock
import { motion } from 'framer-motion';
import Link from 'next/link';
import { fadeInUp, staggerContainer, cardHoverSmall } from '@/utils/animations';

export default function Projects() {
  const linksLocked = true; // 👉 toggle true/false

  return (
    <div className="container max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <motion.h2 
        className="text-3xl sm:text-4xl font-bold mb-12 text-center text-white drop-shadow-lg" 
        {...fadeInUp}
      >
        Featured Projects
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {projects.map((project) => (
          <motion.article
            key={project.title}
            className="bg-white/10 dark:bg-dark/50 backdrop-blur-md border border-white/10 rounded-lg shadow-md p-6"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <div className="relative aspect-video mb-4 rounded-lg overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            <motion.h3
              className="text-xl font-semibold mb-2 text-white drop-shadow-md"
              whileHover={{ x: 5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {project.title}
            </motion.h3>

            <motion.p className="text-white/80 mb-4 drop-shadow-sm">
              {project.description}
            </motion.p>

            <motion.div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech) => (
                <motion.span
                  key={tech}
                  className="px-3 py-1 bg-white/10 text-white rounded-full text-sm drop-shadow"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>

            <motion.div className="flex gap-4">
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
                  className="flex items-center gap-2 text-white hover:text-primary transition-colors drop-shadow-md"
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
                  className="flex items-center gap-2 text-white hover:text-primary transition-colors drop-shadow-md"
                >
                  <FaExternalLinkAlt className="h-5 w-5" />
                  <span>Live Demo</span>
                </Link>
              )}
            </motion.div>
          </motion.article>
        ))}
      </motion.div>
    </div>
  );
}
