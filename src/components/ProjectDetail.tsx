import React, { useState, useEffect } from 'react';
import ScrollReveal from './ScrollReveal';

interface ProjectDetailProps {
  projectId: string;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ projectId }) => {
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
  const projects = {
    'enterprise-support-system': {
      title: 'Enterprise Support System',
      overview: 'Technical support platform for enterprise clients including Meta, Cloudera, and Skechers. Features incident tracking, log analysis, and automated troubleshooting workflows.',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'JIRA', 'TypeScript', 'Docker'],
      features: [
        'Real-time incident tracking and management',
        'Automated log analysis and pattern recognition',
        'Integration with Atlassian tools (JIRA, Confluence)',
        'Multi-tenant architecture for enterprise clients',
        'Advanced reporting and analytics dashboard',
        'Automated escalation workflows'
      ],
      screenshots: [
        'Dashboard view showing incident metrics',
        'Ticket management interface',
        'Analytics and reporting dashboard',
        'Integration configuration panel'
      ],
      liveUrl: 'https://enterprise-support-demo.com',
      repoUrl: 'https://github.com/jjerezv/enterprise-support-system'
    },
    'cloud-architecture-dashboard': {
      title: 'Cloud Architecture Dashboard',
      overview: 'Full-stack cloud monitoring and management system with real-time analytics, automated scaling, and comprehensive reporting for enterprise infrastructure.',
      technologies: ['TypeScript', 'Django', 'MySQL', 'AWS', 'React', 'Python'],
      features: [
        'Real-time cloud resource monitoring',
        'Automated scaling based on demand',
        'Cost optimization recommendations',
        'Multi-cloud support (AWS, Azure, GCP)',
        'Security compliance monitoring',
        'Custom alerting and notifications'
      ],
      screenshots: [
        'Main dashboard with resource overview',
        'Cost analysis and optimization panel',
        'Security compliance dashboard',
        'Automated scaling configuration'
      ],
      liveUrl: 'https://cloud-dashboard-demo.com',
      repoUrl: 'https://github.com/jjerezv/cloud-architecture-dashboard'
    },
    'data-analysis-pipeline': {
      title: 'Data Analysis Pipeline',
      overview: 'Machine learning data processing pipeline using KNIME for automated data cleaning, analysis, and visualization with REST API integration.',
      technologies: ['Python', 'KNIME', 'Postman API', 'SQL', 'Pandas', 'NumPy'],
      features: [
        'Automated data cleaning and preprocessing',
        'Machine learning model integration',
        'Real-time data processing pipeline',
        'Custom visualization dashboards',
        'REST API for data access',
        'Scheduled batch processing'
      ],
      screenshots: [
        'Data pipeline workflow diagram',
        'Analysis results dashboard',
        'API documentation interface',
        'Data quality monitoring panel'
      ],
      liveUrl: 'https://data-pipeline-demo.com',
      repoUrl: 'https://github.com/jjerezv/data-analysis-pipeline'
    }
  };

  const project = projects[projectId as keyof typeof projects];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Project Not Found</h1>
          <a href="/home" className="text-blue-600 hover:text-blue-800">← Back to Home</a>
        </div>
      </div>
    );
  }

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

      {/* Project Content */}
      <main className="container mx-auto max-w-6xl px-6 py-12">
        <ScrollReveal>
          <h1 className="text-5xl font-bold text-gray-800 mb-8">{project.title}</h1>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Overview</h2>
            <p className="text-lg text-gray-700 leading-relaxed">{project.overview}</p>
          </section>
        </ScrollReveal>

        <ScrollReveal delay={400}>
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Technologies Used</h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, index) => (
                <span key={index} className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal delay={600}>
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Key Features</h2>
            <ul className="space-y-3">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </section>
        </ScrollReveal>

        <ScrollReveal delay={800}>
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Screenshots</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {project.screenshots.map((screenshot, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-4">
                  <div className="bg-gray-200 rounded-lg h-48 flex items-center justify-center text-gray-500">
                    <span className="text-center">{screenshot}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal delay={1000}>
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Links</h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-xl text-center"
              >
                View Live Project →
              </a>
              <a 
                href={project.repoUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="border-2 border-gray-800 text-gray-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-xl text-center"
              >
                View Repository →
              </a>
            </div>
          </section>
        </ScrollReveal>
      </main>
    </div>
  );
};

export default ProjectDetail;