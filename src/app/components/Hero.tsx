'use client'

import Link from 'next/link';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaTwitter, FaLaptopCode } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { fadeInUp, scaleIn } from '@/utils/animations';

export default function Hero() {
  return (
    <section className="py-28">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div 
            className='flex justify-center items-center mb-4'
            {...scaleIn}
            transition={{ delay: 0.2 }}
          >
            <Image 
              src="/profile1.jpeg" 
              alt="Profile" 
              width={100} 
              height={100} 
              className="rounded-full mb-4 w-32 h-32 object-cover ring-2 ring-primary" 
            />
          </motion.div>
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg"
            {...fadeInUp}
            transition={{ delay: 0.3 }} 
          >
            Hi, I&apos;m Ryan.B
          </motion.h1>
   <motion.p 
  className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 drop-shadow-md mb-8 flex flex-wrap justify-center items-center gap-x-2 text-center text-pretty"
  {...fadeInUp}
  transition={{ delay: 0.4 }}
>
  Software Engineer
  <FaLaptopCode className="inline-block text-white drop-shadow-md" />
  | full Stack Developer
</motion.p>

          <motion.div 
            className="flex justify-center space-x-4 mb-8"
            {...fadeInUp}
            transition={{ delay: 0.5 }}
          >
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-300 hover:text-primary transition-colors drop-shadow-md"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-300 hover:text-primary transition-colors drop-shadow-md"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-300 hover:text-primary transition-colors drop-shadow-md"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaTwitter />
            </motion.a>
          </motion.div>
          <motion.div 
            className="flex flex-col md:flex-row justify-center gap-4"
            {...fadeInUp}
            transition={{ delay: 0.6 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/projects"
                className="bg-primary inline-block w-full md:w-auto text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors drop-shadow-md"
              >
                View Projects
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/contact"
                className="inline-block w-full bg-gray-700 md:w-auto text-white px-8 py-3 rounded-lg hover:bg-gray-600 transition-colors drop-shadow-md"
              >
                Contact Me
              </Link>




            </motion.div>

<motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
                      <Link
  href="/resume.pdf"
  className="inline-block w-full bg-gray-700 md:w-auto text-white px-8 py-3 rounded-lg hover:bg-gray-600 transition-colors drop-shadow-md text-center"
>
  View My Resume (PDF)
</Link>




            </motion.div>



  

          </motion.div>
        </div>
      </div>
    </section>
  );
}
