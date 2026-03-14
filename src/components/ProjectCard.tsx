import React from 'react';
import { useTranslation } from 'react-i18next';

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ id, title, description, technologies, image }) => {
  const { t } = useTranslation();
  const MAX_DESCRIPTION_LENGTH = 150;

  const truncatedDescription = description.length > MAX_DESCRIPTION_LENGTH
    ? `${description.substring(0, MAX_DESCRIPTION_LENGTH)}...`
    : description;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
      {image && (
        <div className="w-full h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-4">{truncatedDescription}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, techIndex) => (
            <span key={techIndex} className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-sm">
              {tech}
            </span>
          ))}
        </div>
        <a href={`/projects/${id}`} className="text-purple-600 hover:text-purple-800 font-medium">
          {t('projects.viewDetails')}
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
