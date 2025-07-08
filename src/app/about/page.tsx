'use client'
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { FaCode, FaLaptopCode, FaGraduationCap } from 'react-icons/fa';

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
          <span className="text-white">Skills</span>
        </h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
          <div>
            <FaCode className="h-8 w-8 text-white mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2 text-white">Frontend</h3>
            <ul className="text-white space-y-2 list-none p-0 m-0">
              <li>React / Next.js</li>
              <li>Angular</li>
              <li>TypeScript</li>
              <li>JavaScript</li>
              <li>HTML5 / CSS3</li>
            </ul>
          </div>
          
          <div>
            <FaLaptopCode className="h-8 w-8 text-white mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2 text-white">Backend</h3>
            <ul className="text-white space-y-2 list-none p-0 m-0">
              <li>Node.js</li>
              <li>Express</li>
              <li>PostgreSQL</li>
              <li>MongoDB</li>
              <li>Spring Boot</li>
              <li>Symfony</li>
              <li>Java</li>
            </ul>
          </div>
          
          <div>
            <FaGraduationCap className="h-8 w-8 text-white mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2 text-white">Tools & Others</h3>
            <ul className="text-white space-y-2 list-none p-0 m-0">
              <li>Git / GitHub</li>
              <li>Docker</li>
              <li>AWS</li>
              <li>CI/CD</li>
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
  <div className="mb-10 last:mb-0">
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-gray-600 pb-4">
      <h3 className="text-xl font-semibold text-white">Senior Full Stack Developer</h3>
      <p className="text-sm sm:text-base text-gray-300 mt-1 sm:mt-0">IT solutions • 2022 - Present</p>
    </div>
    <ul className="list-disc list-inside text-gray-200 mt-4 space-y-2 max-w-xl mx-auto sm:mx-0">
      <li>Led development of multiple web applications using React and Node.js</li>
      <li>Implemented CI/CD pipelines reducing deployment time by 50%</li>
      <li>Mentored junior developers and conducted code reviews</li>
    </ul>
  </div>

  {/* Job Entry 2 */}
  <div>
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-gray-600 pb-4">
      <h3 className="text-xl font-semibold text-white">Full Stack Developer</h3>
      <p className="text-sm sm:text-base text-gray-300 mt-1 sm:mt-0">IT solution • 2018 - 2020</p>
    </div>
    <ul className="list-disc list-inside text-gray-200 mt-4 space-y-2 max-w-xl mx-auto sm:mx-0">
      <li>Developed and maintained RESTful APIs</li>
      <li>Built responsive user interfaces with modern JavaScript frameworks</li>
      <li>Optimized database queries improving performance by 40%</li>
    </ul>
  </div>
</section>

      {/* Education Title (like Experience) */}
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-primary">
        Education
      </h1>

      {/* Education Section with bigger background image (untouched) */}
      <section
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
              <FaMapMarkerAlt className="inline-block text-white" />
              <span>Tunisie</span>
            </span>
            <span className="flex items-center space-x-1">
              <FaCalendarAlt className="inline-block text-white" />
              <span>2025</span>
            </span>
          </p>
          <p className="text-white leading-relaxed drop-shadow-sm">
            Graduated with honors. Focused on software engineering and web development.
          </p>
        </div>
       </div>
      </section>
    </div>
  )
}
