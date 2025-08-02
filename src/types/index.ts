export interface Project {
  title: string;
  slug: string;          // used for dynamic routing
  description: string;
  technologies: string[];
  githubLink: string;
  image: string;
  videoId: string;       // optional if you like, but required here
  liveDemo?: string;     // ✅ optional live demo link
}


export interface Blog {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  slug: string;
}
