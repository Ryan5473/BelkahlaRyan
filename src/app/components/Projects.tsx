'use client';

import { projects } from '@/contents/projects';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { fadeInUp, staggerContainer, cardHoverSmall } from '@/utils/animations';

export default function Projects() {
  return (
    <section className="py-20">
      <div className="container max-w-7xl mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold mb-12 text-center text-white drop-shadow-lg" 
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
              className="bg-white/90 dark:bg-dark/70 rounded-lg shadow-md p-6"
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
                className="text-xl font-semibold mb-2 text-gray-900 dark:text-white drop-shadow-md"
                whileHover={{ x: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {project.title}
              </motion.h3>

              <motion.p className="text-gray-700 dark:text-gray-300 mb-4 drop-shadow-sm">
                {project.description}
              </motion.p>

              <motion.div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <motion.span
                    key={tech}
                    className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm drop-shadow"
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>

              <motion.div className="flex gap-4">
                <motion.a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary transition-colors drop-shadow-md"
                >
                  <FaGithub className="h-5 w-5" />
                  <span>Code</span>
                </motion.a>

                <Link
                  href={`/video?title=${encodeURIComponent(project.title)}`}
                  className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary transition-colors drop-shadow-md"
                >
                  <FaExternalLinkAlt className="h-5 w-5" />
                  <span>Live Demo</span>
                </Link>
              </motion.div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
