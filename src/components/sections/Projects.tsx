'use client';

import { useState } from 'react';
import Image from 'next/image';
import Container from '../common/Container';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const projects: Project[] = [
    {
      title: 'sokodoko',
      description: 'MERNスタックとOpenAI APIを使用したフロアマップ検索アプリです。シンプルなUIを意識し、レスポンス精度も高いです。',
      imageUrl: '/projects/portfolio-1.png',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      githubUrl: 'https://github.com/taiga-shiokawa/floor-map-app',
      liveUrl: 'https://floor-map-app.onrender.com/'
    },
  ];

  const visibleProjects = showAll ? projects : projects.slice(0, 4);
  const hasMoreProjects = projects.length > 4;

  return (
    <section id="projects" className="py-20">
      <Container>
        <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project, index) => (
            <div
              key={index}
              className="bg-primary/30 rounded-2xl overflow-hidden border border-white/10"
            >
              <div className="relative aspect-video">
                {project.imageUrl ? (
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-white/5">
                    <p className="text-white/50 text-lg">No Image</p>
                  </div>
                )}
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-white/80 text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 bg-white/5 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/80 hover:text-accent transition-colors"
                      aria-label="GitHub"
                    >
                      <FaGithub className="w-5 h-5" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/80 hover:text-accent transition-colors"
                      aria-label="Live Demo"
                    >
                      <FaExternalLinkAlt className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        {hasMoreProjects && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="bg-accent text-white px-8 py-3 rounded-lg font-medium hover:bg-accent/90 transition-colors"
            >
              {showAll ? '折りたたむ' : 'もっと見る'}
            </button>
          </div>
        )}
      </Container>
    </section>
  );
};

export default Projects; 
