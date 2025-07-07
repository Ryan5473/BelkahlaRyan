'use client'
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

import { FaCode, FaLaptopCode, FaGraduationCap } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { 
  fadeInUp, 
  fadeInDown, 
  fadeIn, 
  staggerContainer, 
  cardHover, 
  cardHoverSmall 
} from '@/utils/animations'

export default function About() {
  return (
    <div className="container max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <motion.h1 
        className="text-3xl sm:text-4xl font-bold mb-8 text-center"
        {...fadeInDown}
      >
        About Me
      </motion.h1>
      
      {/* Bio Section */}
      <motion.section 
        className="mb-16 max-w-3xl mx-auto px-4 text-center"
        {...fadeInUp}
      >
        <p className="text-lg text-secondary">
          I&#39;m a passionate Full Stack Developer with expertise in building modern web applications.
          With a strong foundation in both frontend and backend technologies, I create seamless
          user experiences and robust server-side solutions.
        </p>
      </motion.section>

      {/* Skills Section */}
      <motion.section 
        className="mb-16 px-4"
        {...fadeIn}
        transition={{ delay: 0.2 }}
      >
         <motion.h2
            className="text-3xl sm:text-4xl font-bold mb-6 text-center"
            {...fadeInUp}
            transition={{ delay: 0.3 }} 
          >
            <motion.span 
              className="text-primary"
              {...fadeIn}
              transition={{ delay: 0.8 }}
            >
             Skills
            </motion.span>
          </motion.h2>
        <motion.div 
          className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md flex flex-col items-center text-center"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaCode className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Frontend</h3>
            <ul className="text-secondary space-y-2">
              <li>React / Next.js</li>
              <li>Angular</li>
              <li>TypeScript</li>
              <li>JavaScript</li>
              <li>HTML5 / CSS3</li>
            </ul>
          </motion.div>
          
          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md flex flex-col items-center text-center"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaLaptopCode className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Backend</h3>
            <ul className="text-secondary space-y-2">
              <li>Node.js</li>
              <li>Express</li>
              <li>PostgreSQL</li>
              <li>MongoDB</li>
              <li>Spring Boot</li>
              <li>Symfony</li>
              <li>Java</li>
            </ul>
          </motion.div>
          
          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md flex flex-col items-center text-center"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaGraduationCap className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Tools & Others</h3>
            <ul className="text-secondary space-y-2">
              <li>Git / GitHub</li>
              <li>Docker</li>
              <li>AWS</li>
              <li>CI/CD</li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Experience Section */}
      <motion.section 
        className="mb-16 px-4"
        {...fadeIn}
        transition={{ delay: 0.4 }}
      >
       <motion.h1 
            className="text-3xl sm:text-4xl font-bold mb-6 text-center"
            {...fadeInUp}
            transition={{ delay: 0.3 }} 
          >
            <motion.span 
              className="text-primary"
              {...fadeIn}
              transition={{ delay: 0.8 }}
            >
              Experience
            </motion.span>
          </motion.h1>
        <motion.div 
          className="max-w-3xl mx-auto space-y-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <h3 className="text-xl font-semibold mb-2">Senior Full Stack Developer</h3>
            <p className="text-primary mb-2">  IT solutions• 2022 - Present</p>
            <ul className="text-secondary list-disc list-inside space-y-2">
              <li>Led development of multiple web applications using React and Node.js</li>
              <li>Implemented CI/CD pipelines reducing deployment time by 50%</li>
              <li>Mentored junior developers and conducted code reviews</li>
            </ul>
          </motion.div>
          
          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <h3 className="text-xl font-semibold mb-2">Full Stack Developer</h3>
            <p className="text-primary mb-2">IT solution • 2018 - 2020</p>
            <ul className="text-secondary list-disc list-inside space-y-2">
              <li>Developed and maintained RESTful APIs</li>
              <li>Built responsive user interfaces with modern JavaScript frameworks</li>
              <li>Optimized database queries improving performance by 40%</li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Education Title (like Experience) */}
      <motion.h1
        className="text-3xl sm:text-4xl font-bold mb-6 text-center text-primary"
        {...fadeInUp}
        transition={{ delay: 0.6 }}
      >
        Education
      </motion.h1>

      {/* Education Section with bigger background image */}
      <motion.section
        {...fadeIn}
        transition={{ delay: 0.7 }}
        className="relative rounded-lg shadow-md overflow-hidden mx-4 sm:mx-0"
        style={{ height: '500px' }}  // fixed height to show full image nicely
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/Esprit.jpg)' }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

        {/* Education text box */}
       <div className="relative max-w-5xl mx-auto h-full flex flex-col justify-center px-6 sm:px-10">
 <div className="bg-white/20 backdrop-blur-md p-8 rounded-lg max-w-full shadow-lg border border-white/20 text-center">
  <h3 className="text-xl font-semibold mb-3 text-white drop-shadow-md">
    Engineering Degree in Computer Science
  </h3>
  <p className="mb-4 flex justify-center items-center text-white drop-shadow-md space-x-4 flex-wrap gap-2">
    <span>École Supérieure Privée d&#39;Ingénierie et de Technologies</span>
    <span className="flex items-center space-x-1">
      <FaMapMarkerAlt className="inline-block" />
      <span>Tunisie</span>
    </span>
    <span className="flex items-center space-x-1">
      <FaCalendarAlt className="inline-block" />
      <span>2025</span>
    </span>
  </p>
  <p className="text-white leading-relaxed drop-shadow-sm">
    Graduated with honors. Focused on software engineering and web development.
  </p>
</div>
        </div>
      </motion.section>
    </div>
  )
}
