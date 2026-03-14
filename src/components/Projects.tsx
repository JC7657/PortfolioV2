import React from 'react';
import { useTranslation } from 'react-i18next';

const Projects: React.FC = () => {
  const { t } = useTranslation();
  const projects = [
    {
      id: 'enterprise-support-system',
      title: 'Enterprise Support System',
      description: 'Technical support platform for enterprise clients including Meta, Cloudera, and Skechers.',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'JIRA'],
      link: '/projects/enterprise-support-system'
    },
    {
      id: 'cloud-architecture-dashboard',
      title: 'Cloud Architecture Dashboard',
      description: 'Full-stack cloud monitoring and management system with real-time analytics and automated scaling.',
      technologies: ['TypeScript', 'Django', 'MySQL', 'AWS'],
      link: '/projects/cloud-architecture-dashboard'
    },
    {
      title: 'Data Analysis Pipeline',
      description: 'Machine learning data processing pipeline using KNIME for automated data cleaning and analysis.',
      technologies: ['Python', 'KNIME', 'Postman API', 'SQL'],
      link: '/projects/data-analysis-pipeline'
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">{t('projects.title')}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-sm">
                    {tech}
                  </span>
                ))}
              </div>
<a href={project.link} className="text-blue-600 hover:text-blue-800 font-medium">
            {t('projects.viewDetails')}
          </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;