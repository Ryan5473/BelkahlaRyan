'use client';

import { useSearchParams } from 'next/navigation';
import { projects } from '@/contents/projects';

export default function VideoPage() {
  const searchParams = useSearchParams();
  const title = searchParams.get('title');
  const project = projects.find((p) => p.title === title);

  if (!project) {
    return <p className="text-red-500 text-center mt-10">Project not found</p>;
  }

  const videoId = project.videoId;

  return (
    <main className="py-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8">
        {project.title}
      </h1>
      
      <div className="flex justify-center">
        <div className="w-full max-w-5xl aspect-video rounded-xl overflow-hidden shadow-2xl">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            title={project.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      </div>
    </main>
  );
}
