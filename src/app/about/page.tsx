'use client'
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { FaCode, FaLaptopCode, FaGraduationCap } from 'react-icons/fa';
import Image from 'next/image';

export default function About() {
  return (
    <div className="container max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      {/* About Me Title */}
      <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-white">
        About Me
      </h1>
      
      {/* Bio Section */}
      <section className="mb-16 max-w-3xl mx-auto px-4 text-center">
        <p className="text-lg text-white">
          I&#39;m a passionate Full Stack Developer with expertise in building modern web applications.
          With a strong foundation in both frontend and backend technologies, I create seamless
          user experiences and robust server-side solutions.
        </p>
      </section>

      {/* Skills Section */}
      <section className="mb-16 px-4">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-white">
          Skills
        </h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
          <div className="animate-[impact_0.5s_ease-in-out]">
            <FaCode className="h-8 w-8 text-white mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2 text-white">Frontend</h3>
            <ul className="text-white space-y-2 list-none p-0 m-0">
              <li>React / Next.js</li>
              
              <li>TypeScript</li>
              <li>JavaScript</li>
              <li>tailwind</li>
              <li>HTML5 / CSS3</li>
            </ul>
          </div>
          
          <div className="animate-[impact_0.5s_ease-in-out]">
            <FaLaptopCode className="h-8 w-8 text-white mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2 text-white">Backend</h3>
            <ul className="text-white space-y-2 list-none p-0 m-0">
              <li>Node.js/Express</li>
              <li>Spring Boot</li>
              <li>PostgreSQL</li>
              <li>MongoDB</li>
              <li>Java</li>
            </ul>
          </div>
          
          <div className="animate-[impact_0.5s_ease-in-out]">
            <FaGraduationCap className="h-8 w-8 text-white mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2 text-white">Tools & Others</h3>
            <ul className="text-white space-y-2 list-none p-0 m-0">
              <li>Git / GitHub</li>
              <li>Docker</li>
              <li>kubernetes</li>
              <li>AWS fundamentals</li>
              <li>CI/CD</li>
              <li>Figma  </li>
              <li>Jira/Notion.io </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Experience Section */}
<section className="mb-16 px-4 max-w-3xl mx-auto">
  <h1 className="text-3xl sm:text-4xl font-bold mb-10 text-center text-white">
    Experience
  </h1>

  {/* Job Entry 1 */}
  <div className="mb-10 last:mb-0 animate-[impact_0.5s_ease-in-out]">
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-gray-600 pb-4">
      <h3 className="text-xl font-semibold text-white">Software Intern</h3>
      <p className="text-sm sm:text-base text-gray-300 mt-1 sm:mt-0">IT Solution • Feb 2025 – Jul 2025 • Monastir, Tunisia</p>
    </div>
    <ul className="list-disc list-inside text-gray-200 mt-4 space-y-2 max-w-xl mx-auto sm:mx-0">
      <li>Built healthcare system for 1,500+ patient records with Spring Boot microservices.</li>
      <li>Designed secure DB schemas and enforced user roles with Spring Security.</li>
      <li>Used Kafka for service messaging, improving system reliability.</li>
      <li>Dockerized legacy apps, reducing deployment errors by 40%.</li>
      <li>Set up CI/CD pipelines, cutting release time by 30%.</li>
    </ul>
  </div>

  {/* Job Entry 2 */}
  <div className="animate-[impact_0.5s_ease-in-out]">
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-gray-600 pb-4">
      <h3 className="text-xl font-semibold text-white">Software Engineering Intern</h3>
      <p className="text-sm sm:text-base text-gray-300 mt-1 sm:mt-0">Flex • May 2024 – Jul 2024 • Monastir, Tunisia</p>
    </div>
    <ul className="list-disc list-inside text-gray-200 mt-4 space-y-2 max-w-xl mx-auto sm:mx-0">
      <li>Created 15+ reusable React components from Figma designs for consistent UI.</li>
      <li>Wrote 25+ tests, improving stability and reducing bugs by 20%.</li>
      <li>Built REST APIs with Node.js/Express for dynamic frontend features.</li>
      <li>Integrated OAuth 2.0 for secure login.</li>
    </ul>
  </div>
</section>


      {/* Education Section */}
      <section className="mb-16 px-4 max-w-5xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold mb-10 text-center text-white">
          Education
        </h1>

        <div className="flex flex-col sm:flex-row items-center gap-8 animate-[impact_0.5s_ease-in-out]">
          {/* School Image */}
         <Image
  src="/Esprit.jpg"
  alt="École Supérieure Privée d'Ingénierie et de Technologies"
  width={800} // specify actual width in pixels
  height={600} // specify actual height in pixels
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
      </section>
    </div>
  )
}


