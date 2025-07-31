'use client'

import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { FaCode, FaLaptopCode, FaGraduationCap } from 'react-icons/fa';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

function TypingText({ text }: { text: string }) {
  const [displayedText, setDisplayedText] = useState('');
  
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text[index]);
      index++;
      if (index === text.length) clearInterval(interval);
    }, 30); // typing speed ms

    return () => {
      clearInterval(interval);
      setDisplayedText('');
    };
  }, [text]);

  return <p className="text-gray-200 max-w-xl mx-auto sm:mx-0">{displayedText}</p>;
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
};

export default function About() {
  return (
    <div className="container max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      {/* About Me Title */}
      <motion.h1
        className="text-3xl sm:text-4xl font-bold mb-8 text-center text-white"
        variants={fadeInUp}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h1>
      
      {/* Bio Section */}
      <motion.section
        className="mb-16 max-w-3xl mx-auto px-4 text-center"
        variants={scaleIn}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <p className="text-lg text-white">
          I&apos;m a passionate Full Stack Developer with expertise in building modern web applications.
          With a strong foundation in both frontend and backend technologies, I create seamless
          user experiences and robust server-side solutions.
        </p>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        className="mb-16 px-4"
        variants={fadeInUp}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-white">
          Skills
        </h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
          {[
            {
              icon: <FaCode className="h-8 w-8 text-white mb-4 mx-auto" />,
              title: 'Frontend',
              items: ['React / Next.js', 'TypeScript', 'JavaScript', 'Tailwind', 'HTML5 / CSS3'],
            },
            {
              icon: <FaLaptopCode className="h-8 w-8 text-white mb-4 mx-auto" />,
              title: 'Backend',
              items: ['Node.js/Express', 'Spring Boot', 'PostgreSQL', 'MongoDB', 'Java'],
            },
            {
              icon: <FaGraduationCap className="h-8 w-8 text-white mb-4 mx-auto" />,
              title: 'Tools & Others',
              items: ['Git / GitHub', 'Docker', 'Kubernetes', 'AWS fundamentals', 'CI/CD', 'Figma', 'Jira/Notion.io'],
            },
          ].map(({ icon, title, items }, i) => (
            <motion.div
              key={title}
              className="rounded-md"
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.5, delay: 0.5 + i * 0.15 }}
            >
              {icon}
              <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
              <ul className="text-white space-y-2 list-none p-0 m-0">
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section
        className="mb-16 px-4 max-w-3xl mx-auto"
        initial="initial"
        animate="animate"
      >
        <motion.h1
          className="text-3xl sm:text-4xl font-bold mb-10 text-center text-white"
          variants={fadeInUp}
          transition={{ duration: 0.7 }}
        >
          Experience
        </motion.h1>

        {/* Job Entry 1 */}
        <motion.div
          className="mb-10 last:mb-0"
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-gray-600 pb-4">
            <motion.h3
              className="text-xl font-semibold text-white"
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
            >
              Software Intern
            </motion.h3>
            <motion.p
              className="text-sm sm:text-base text-gray-300 mt-1 sm:mt-0"
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
            >
              IT Solution • Feb 2025 – Jul 2025 • Monastir, Tunisia
            </motion.p>
          </div>
          <TypingText
            text={
              'Built healthcare system for 1,500+ patient records with Spring Boot microservices.\n' +
              'Designed secure DB schemas and enforced user roles with Spring Security.\n' +
              'Used Kafka for service messaging, improving system reliability.\n' +
              'Dockerized legacy apps, reducing deployment errors by 40%.\n' +
              'Set up CI/CD pipelines, cutting release time by 30%.'
            }
          />
        </motion.div>

        {/* Job Entry 2 */}
        <motion.div
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-gray-600 pb-4">
            <motion.h3
              className="text-xl font-semibold text-white"
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
            >
              Software Engineering Intern
            </motion.h3>
            <motion.p
              className="text-sm sm:text-base text-gray-300 mt-1 sm:mt-0"
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
            >
              Flex • May 2024 – Jul 2024 • Monastir, Tunisia
            </motion.p>
          </div>
          <TypingText
            text={
              'Created 15+ reusable React components from Figma designs for consistent UI.\n' +
              'Wrote 25+ tests, improving stability and reducing bugs by 20%.\n' +
              'Built REST APIs with Node.js/Express for dynamic frontend features.\n' +
              'Integrated OAuth 2.0 for secure login.'
            }
          />
        </motion.div>
      </motion.section>

      {/* Education Section */}
      <motion.section
        className="mb-16 px-4 max-w-5xl mx-auto"
        variants={fadeInUp}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <h1 className="text-3xl sm:text-4xl font-bold mb-10 text-center text-white">
          Education
        </h1>

        <div className="flex flex-col sm:flex-row items-center gap-8">
          {/* School Image */}
          <Image
            src="/Esprit.jpg"
            alt="École Supérieure Privée d'Ingénierie et de Technologies"
            width={800}
            height={600}
            className="w-full sm:w-1/2 rounded-lg shadow-lg object-cover"
          />

          {/* Degree Info */}
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-white mb-3">
              Engineering Degree in Computer Science
            </h3>
            <p className="text-sm sm:text-base text-gray-300 mb-2 flex items-center gap-2">
              <FaMapMarkerAlt className="inline-block" /> Tunisie
              <FaCalendarAlt className="inline-block ml-4" /> 2025
            </p>
            <p className="text-gray-200">
              Graduated with honors. Focused on software engineering and web development.
            </p>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
