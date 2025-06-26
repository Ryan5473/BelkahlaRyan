export interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
  image: string;
  videoId: string;  // keep only videoId, no demoLink
}


export interface Blog {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  slug: string;
}
