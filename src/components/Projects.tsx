import React from 'react';
import { useTranslation } from 'react-i18next';
import ProjectCard from './ProjectCard';

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
}

const Projects: React.FC = () => {
  const { t } = useTranslation();
  const projects = t('projects.list', { returnObjects: true }) as Project[];

  return (
    <section id="projects" className="py-20 px-6 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">{t('projects.title')}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
