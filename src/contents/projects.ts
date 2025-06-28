import { Project } from '@/types';

export const projects: Project[] = [
 {
  title: 'ReactNativeDoctorApp',
  description: 'A complete doctor appointment mobile app built with React Native, featuring booking, notifications, and calendar integration.',
  technologies: ['React Native', 'Expo', 'Firebase', 'Push Notifications'],
  githubLink: 'https://github.com', // Remplacez par le vrai lien GitHub si disponible
  videoId: 'LJiS1_e2nZ4',  // YouTube video ID only
  image: '/projects/doctor-app.png', // Facultatif : renommez l'image si elle correspond au projet
}
,
  {
    title: 'Team Management',
    description: 'A collaborative task management application with real-time updates.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    githubLink: 'https://github.com',
    videoId: 'eo17hz0IVDo',
    image: '/projects/task-manager.webp',
  },
  {
    title: 'Library Management',
    description: 'My personal portfolio website showcasing my projects and skills.',
    technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    githubLink: 'https://github.com',
    videoId: 'eo17hz0IVDo',
    image: '/projects/portfolio-website.jpg',
  },
  {
    title: 'School Management',
    description: 'A blogging platform with user authentication and markdown support.',
    technologies: ['Gatsby', 'GraphQL', 'Contentful'],
    githubLink: 'https://github.com',
    videoId: 'eo17hz0IVDo',
    image: '/projects/blog-website.jpeg',
  },
  {
    title: 'Doctor Appointment',
    description: 'A weather application that provides real-time weather updates.',
    technologies: ['React', 'OpenWeatherMap API'],
    githubLink: 'https://github.com',
    videoId: 'eo17hz0IVDo',
    image: '/projects/weather-app.png',
  },
];
