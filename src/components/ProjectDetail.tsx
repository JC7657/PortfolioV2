import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ScrollReveal from './ScrollReveal';
import Header from './Header';

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
  const { t } = useTranslation();
  const [selectedMedia, setSelectedMedia] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedMedia) {
        setSelectedMedia(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedMedia]);

  const isVideo = (src: string) => src.endsWith('.webm') || src.endsWith('.mp4') || src.endsWith('.mov');

  const projects = t('projects.list', { returnObjects: true }) as Project[];
  const project = projects.find(p => p.id === projectId);

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
      <Header />

      {/* Project Content */}
      <main className="container mx-auto max-w-6xl px-6 py-12 pt-24">
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

        {(project.liveUrl || project.repoUrl) && (
        <ScrollReveal delay={600}>
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
        )}

        <ScrollReveal delay={800}>
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">{t('projectDetail.screenshots')}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {project.screenshots.map((screenshot, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer" onClick={() => setSelectedMedia(screenshot)}>
                  {isVideo(screenshot) ? (
                    <video 
                      src={screenshot}
                      className="w-full h-64 object-cover hover:opacity-90 transition-opacity"
                      muted
                      onClick={(e) => e.preventDefault()}
                    />
                  ) : (
                    <img 
                      src={screenshot} 
                      alt={`Screenshot ${index + 1}`}
                      className="w-full h-64 object-cover hover:opacity-90 transition-opacity"
                    />
                  )}
                </div>
              ))}
            </div>
          </section>
        </ScrollReveal>
      </main>

      {selectedMedia && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedMedia(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white text-4xl font-bold hover:text-gray-300 transition-colors"
            onClick={() => setSelectedMedia(null)}
          >
            &times;
          </button>
          {isVideo(selectedMedia) ? (
            <video 
              src={selectedMedia}
              controls
              autoPlay
              className="max-w-full max-h-[90vh] rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          ) : (
            <img 
              src={selectedMedia} 
              alt="Full size screenshot" 
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;
