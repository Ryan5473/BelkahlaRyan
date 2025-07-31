export interface Project {
  title: string;
  slug: string;          // ✅ Ajouté : correspond au champ `slug` utilisé pour le routing dynamique
  description: string;
  technologies: string[];
  githubLink: string;
  image: string;
  videoId: string;
}


export interface Blog {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  slug: string;
}
