import { Project } from '@/types';

export const projects: Project[] = [
  {
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce platform built with Next.js, TypeScript, and Tailwind CSS.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe'],
    githubLink: 'https://github.com',
    videoId: 'eo17hz0IVDo',  // YouTube video ID only
    image: '/projects/e-commerce-website.png',
  },
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
