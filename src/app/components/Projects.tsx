'use client';

import { projects } from '@/contents/projects';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  fadeInUp,
  staggerContainer,
  cardHoverSmall,
} from '@/utils/animations';

export default function Projects() {
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
        {projects.map((project) => {
          const shouldLinkToLive =
            project.title.toLowerCase().includes('task') ||
            project.title.toLowerCase().includes('focus');

          const cardHref =
            shouldLinkToLive && project.liveDemo
              ? project.liveDemo
              : `/video/${project.slug}`;

          const isExternal = shouldLinkToLive && project.liveDemo;

          const CardWrapper = isExternal ? 'a' : Link;

          return (
            <motion.article
              key={project.title}
              className="bg-white/10 dark:bg-dark/50 backdrop-blur-md border border-white/10 rounded-lg shadow-md cursor-pointer"
              variants={fadeInUp}
              {...cardHoverSmall}
            >
              <CardWrapper
                href={cardHref}
                {...(isExternal
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
                className="block hover:no-underline"
              >
                <motion.div
                  className="relative aspect-video mb-4 rounded-lg overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </motion.div>

                <div className="p-6">
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
                </div>
              </CardWrapper>

              {/* Links: GitHub + Live Demo */}
              <div
                className="flex gap-4 items-center p-6 pt-0"
                onClick={(e) => e.stopPropagation()}
              >
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white hover:text-primary transition-colors drop-shadow-md"
                >
                  <FaGithub className="h-5 w-5" />
                  <span>Code</span>
                </a>

                {project.liveDemo ? (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white hover:text-primary transition-colors drop-shadow-md"
                  >
                    <FaExternalLinkAlt className="h-5 w-5" />
                    <span>Live Demo</span>
                  </a>
                ) : (
                  <span className="flex items-center gap-2 text-white cursor-not-allowed opacity-50">
                    <FaExternalLinkAlt className="h-5 w-5" />
                    <span>Live Demo</span>
                  </span>
                )}
              </div>
            </motion.article>
          );
        })}
      </motion.div>
    </div>
  );
}
