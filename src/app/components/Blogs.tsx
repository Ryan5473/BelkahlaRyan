'use client'

import { blogs } from '@/contents/blogs';
import Link from 'next/link';
import { FaCalendarAlt, FaClock } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, cardHoverSmall } from '@/utils/animations';

export default function Blogs() {
  return (
    <div className="container max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <motion.h2 
        className="text-3xl sm:text-4xl font-bold mb-12 text-center text-white drop-shadow-lg"
        {...fadeInUp}
      >
        Latest Blog Posts
      </motion.h2>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {blogs.map((blog) => (
          <motion.article
            key={blog.slug}
            className="bg-white/10 dark:bg-dark/50 backdrop-blur-md rounded-lg shadow-md p-6 border border-white/10"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <Link href={`/blogs/${blog.slug}`}>
              <motion.h3 
                className="text-xl font-semibold mb-2 text-white hover:text-primary transition-colors drop-shadow-md"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {blog.title}
              </motion.h3>
            </Link>
            <motion.p 
              className="text-white/80 mb-4 drop-shadow-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {blog.excerpt}
            </motion.p>
            <motion.div 
              className="flex items-center text-sm text-white/70 space-x-4 drop-shadow"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <motion.span className="flex items-center" whileHover={{ scale: 1.05 }}>
                <FaCalendarAlt className="mr-2" />
                {new Date(blog.date).toLocaleDateString()}
              </motion.span>
              <motion.span className="flex items-center" whileHover={{ scale: 1.05 }}>
                <FaClock className="mr-2" />
                {blog.readTime}
              </motion.span>
            </motion.div>
          </motion.article>
        ))}
      </motion.div>

      <motion.div 
        className="text-center mt-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            href="/blogs"
            className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors drop-shadow-lg"
          >
            View All Posts
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
