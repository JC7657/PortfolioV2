import React, { useState, useEffect } from 'react';
import ScrollReveal from './ScrollReveal';

const ProjectsPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('projects');

  useEffect(() => {
    const path = window.location.pathname;
    if (path.startsWith('/projects')) {
      setCurrentPage('projects');
    }
  }, []);

  const getNavLinkClass = (page: string) => {
    const baseClass = "transition-colors duration-200";
    if (currentPage === page) {
      return `${baseClass} text-blue-400 font-semibold`;
    }
    return `${baseClass} hover:text-blue-400`;
  };
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
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gray-900 text-white py-4 px-6 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <img src="/src/assets/logo.png" alt="Logo" className="h-8 w-auto" />
          <nav>
            <ul className="flex space-x-6">
              <li><a href="/home" className={getNavLinkClass('home')}>Home</a></li>
              <li><a href="/projects" className={getNavLinkClass('projects')}>Projects</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Projects Content */}
      <main className="container mx-auto max-w-6xl px-6 py-12">
        <ScrollReveal>
          <h1 className="text-5xl font-bold text-center mb-4 text-gray-800">Projects</h1>
          <p className="text-xl text-center mb-12 text-gray-600 max-w-3xl mx-auto">
            A collection of my work showcasing full-stack development, cloud architecture, and enterprise solutions.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ScrollReveal key={index} delay={index * 200}>
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300 hover:scale-105">
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
                  View Project Details →
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ProjectsPage;