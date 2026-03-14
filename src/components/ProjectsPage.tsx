import { Link, useLocation } from 'react-router-dom';
import ScrollReveal from './ScrollReveal';
import { useTranslation } from 'react-i18next';
import ProjectCard from './ProjectCard';

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
}

const ProjectsPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const currentPage = location.pathname.replace('/', '') || 'projects';
  const projects = t('projects.list', { returnObjects: true }) as Project[];

  const getNavLinkClass = (page: string) => {
    const baseClass = "transition-colors duration-200";
    if (currentPage === page) {
      return `${baseClass} text-purple-400 font-semibold`;
    }
    return `${baseClass} hover:text-purple-400`;
  };

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en');
  };
  const isSpanish = i18n.resolvedLanguage === 'es';

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gray-900 text-white py-4 px-6 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <img src="/src/assets/logo.png" alt="Logo" className="h-8 w-auto" />
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

      {/* Projects Content */}
      <main className="container mx-auto max-w-6xl px-6 py-12">
        <ScrollReveal>
          <h1 className="text-5xl font-bold text-center mb-4 text-gray-800">{t('projectsPage.title')}</h1>
          <p className="text-xl text-center mb-12 text-gray-600 max-w-3xl mx-auto">
            {t('projectsPage.subtitle')}
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ScrollReveal key={index} delay={index * 200}>
              <ProjectCard {...project} />
            </ScrollReveal>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ProjectsPage;