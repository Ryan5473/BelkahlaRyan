'use client'

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

const Stars = ({ rating }: { rating: number }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
  return (
    <span className="text-yellow-400">
      {'★'.repeat(fullStars)}
      {halfStar && '⯨'}
      {'☆'.repeat(emptyStars)}
    </span>
  );
};

export default function About() {
  return (
    <div className="container max-w-7xl mx-auto py-12">
      <motion.h1 
        className="text-4xl font-bold mb-8 text-center"
        {...fadeInDown}
      >
        About Me
      </motion.h1>

      {/* Bio Section */}
      <motion.section className="mb-16" {...fadeInUp}>
        <p className="text-lg text-secondary max-w-3xl mx-auto text-center">
          I'm a Software Engineer with 3+ years of experience building full-stack web applications and IT solutions.
          My expertise spans frontend frameworks like React.js and backend technologies like Node.js and Spring Boot.
          I specialize in delivering clean, scalable code and user-centered digital experiences.
        </p>
      </motion.section>

      {/* Skills Section */}
      <motion.section className="mb-16" {...fadeIn} transition={{ delay: 0.2 }}>
        <motion.h2 className="section-title" {...fadeInUp}>
          Skills
        </motion.h2>
        <motion.div 
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {/* Frontend */}
          <motion.div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md" variants={fadeInUp} {...cardHover}>
            <FaCode className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Frontend</h3>
            <ul className="text-secondary space-y-2">
              <li>React / Next.js <Stars rating={4.5} /></li>
              <li>TypeScript <Stars rating={4} /></li>
              <li>JavaScript (ES6+) <Stars rating={4.5} /></li>
              <li>HTML5 / CSS3 / Tailwind <Stars rating={4.5} /></li>
              <li>Angular <Stars rating={3} /></li>
            </ul>
          </motion.div>

          {/* Backend */}
          <motion.div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md" variants={fadeInUp} {...cardHover}>
            <FaLaptopCode className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Backend</h3>
            <ul className="text-secondary space-y-2">
              <li>Node.js / Express <Stars rating={4.5} /></li>
              <li>MongoDB / Mongoose <Stars rating={4} /></li>
              <li>PostgreSQL <Stars rating={3.5} /></li>
              <li>Spring Boot <Stars rating={3.5} /></li>
              <li>REST & GraphQL APIs <Stars rating={4} /></li>
            </ul>
          </motion.div>

          {/* Tools */}
          <motion.div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md" variants={fadeInUp} {...cardHover}>
            <FaGraduationCap className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Tools & Platforms</h3>
            <ul className="text-secondary space-y-2">
              <li>Git / GitHub / GitLab</li>
              <li>Docker & Docker Compose</li>
              <li>CI/CD (GitHub Actions, GitLab CI)</li>
              <li>Vercel / Netlify / AWS</li>
              <li>Agile & Scrum Methodologies</li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Experience Section */}
      <motion.section className="mb-16" {...fadeIn} transition={{ delay: 0.4 }}>
        <motion.h2 className="section-title" {...fadeInUp}>
          Experience
        </motion.h2>
        <motion.div 
          className="max-w-3xl mx-auto space-y-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md" variants={fadeInUp} {...cardHoverSmall}>
            <h3 className="text-xl font-semibold mb-2">Software Engineer – Full Stack</h3>
            <p className="text-primary mb-2">IT Solutions Co • 2022 – Present</p>
            <ul className="text-secondary list-disc list-inside space-y-2">
              <li>Built and maintained client-facing applications with React and Next.js</li>
              <li>Developed scalable RESTful APIs using Node.js and MongoDB</li>
              <li>Integrated third-party APIs for payment, maps, and authentication systems</li>
              <li>Led a team of 3 developers and handled end-to-end delivery of web solutions</li>
            </ul>
          </motion.div>

          <motion.div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md" variants={fadeInUp} {...cardHoverSmall}>
            <h3 className="text-xl font-semibold mb-2">Web Developer</h3>
            <p className="text-primary mb-2">Freelance / Contract • 2020 – 2022</p>
            <ul className="text-secondary list-disc list-inside space-y-2">
              <li>Delivered custom websites and admin dashboards for SMEs using MERN stack</li>
              <li>Created responsive designs using Tailwind CSS and Material UI</li>
              <li>Deployed applications to Vercel, Netlify, and DigitalOcean</li>
              <li>Worked closely with clients to gather requirements and iterate features</li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Education Section */}
      <motion.section {...fadeIn} transition={{ delay: 0.6 }}>
        <motion.h2 className="section-title" {...fadeInUp}>
          Education
        </motion.h2>
        <motion.div className="max-w-3xl mx-auto" variants={staggerContainer} initial="initial" animate="animate">
          <motion.div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md" variants={fadeInUp} {...cardHoverSmall}>
            <h3 className="text-xl font-semibold mb-2">Bachelor’s in Computer Science</h3>
            <p className="text-primary mb-2">University of [Your Country] • 2016 – 2020</p>
            <p className="text-secondary">
              Graduated with a strong focus on software engineering, data structures, and full-stack development projects.
            </p>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  )
}
