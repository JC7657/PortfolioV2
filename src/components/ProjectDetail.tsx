import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ScrollReveal from './ScrollReveal';

interface ProjectDetailProps {
  projectId?: string;
}

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  screenshots: string[];
  liveUrl: string;
  repoUrl: string;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ projectId: propProjectId }) => {
  const params = useParams<{ projectId: string }>();
  const projectId = propProjectId || params.projectId;
  const { t, i18n } = useTranslation();
  const [currentPage, setCurrentPage] = useState('projects');
  const isSpanish = i18n.resolvedLanguage === 'es';

  const projects = t('projects.list', { returnObjects: true }) as Project[];
  const project = projects.find(p => p.id === projectId);

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en');
  };

  useEffect(() => {
    const path = window.location.pathname;
    if (path.startsWith('/projects')) {
      setCurrentPage('projects');
    }
  }, []);

  const getNavLinkClass = (page: string) => {
    const baseClass = "transition-colors duration-200";
    if (currentPage === page) {
      return `${baseClass} text-purple-400 font-semibold`;
    }
    return `${baseClass} hover:text-purple-400`;
  };

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">{t('projectDetail.notFound')}</h1>
          <Link to="/" className="text-purple-600 hover:text-purple-800">{t('projectDetail.backToHome')}</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gray-900 text-white py-4 px-6 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/">
            <img src="/src/assets/logo.png" alt="Logo" className="h-8 w-auto" />
          </Link>
          <nav>
            <ul className="flex space-x-6 items-center">
              <li><Link to="/" className={getNavLinkClass('home')}>{t('nav.home')}</Link></li>
              <li><Link to="/projects" className={getNavLinkClass('projects')}>{t('nav.projects')}</Link></li>
              <li>
                <button
                  onClick={toggleLanguage}
                  className="ml-4 relative inline-flex h-8 w-16 items-center rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 transition-colors hover:from-purple-600 hover:to-indigo-700"
                >
                  <span className={`absolute left-2 text-xs font-thin ${isSpanish ? 'text-white/40' : 'text-white font-bold'}`}>EN</span>
                  <span className={`absolute right-2 text-xs font-thin ${isSpanish ? 'text-white font-bold' : 'text-white/40'}`}>ES</span>
                  <span
                    className={`${
                      isSpanish ? 'translate-x-9' : 'translate-x-1'
                    } inline-flex h-6 w-6 items-center justify-center rounded-full bg-white text-xs font-bold text-gray-900 transition-transform`}
                  >
                    {isSpanish ? 'ES' : 'EN'}
                  </span>
                </button>
              </li>
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
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">{t('projectDetail.overview')}</h2>
            <p className="text-lg text-gray-700 leading-relaxed">{project.description}</p>
          </section>
        </ScrollReveal>

        <ScrollReveal delay={400}>
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">{t('projectDetail.technologies')}</h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, index) => (
                <span key={index} className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal delay={600}>
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">{t('projectDetail.features')}</h2>
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
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">{t('projectDetail.screenshots')}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {project.screenshots.map((screenshot, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-4">
                  <img 
                    src={screenshot} 
                    alt={`Screenshot ${index + 1}`}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              ))}
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal delay={1000}>
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">{t('projectDetail.links')}</h2>
            <div className="flex flex-col sm:flex-row gap-4">
              {project.liveUrl && (
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-all duration-300 text-center"
                >
                  {t('projectDetail.viewLive')}
                </a>
              )}
              {project.repoUrl && (
                <a 
                  href={project.repoUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="border-2 border-gray-800 text-gray-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 hover:text-white transition-all duration-300 text-center"
                >
                  {t('projectDetail.viewRepo')}
                </a>
              )}
            </div>
          </section>
        </ScrollReveal>
      </main>
    </div>
  );
};

export default ProjectDetail;
