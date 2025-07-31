import { projects } from '@/contents/projects';
import { notFound } from 'next/navigation';

type Params = {
  slug: string;
};

type Props = {
  params: Promise<Params>; // <-- This is the fix: params is a Promise
};

export default async function VideoPage({ params }: Props) {
  const { slug } = await params;  // await the params Promise

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-black">
      <h1 className="text-3xl font-bold mb-4 text-white">
        {project.title} — Demo Video
      </h1>
      <p className="mb-6 text-white/80 max-w-xl text-center">{project.description}</p>
      <div className="w-full max-w-4xl aspect-video">
        <iframe
          className="w-full h-full rounded-lg"
          src={`https://www.youtube.com/embed/${project.videoId}`}
          title={project.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}
