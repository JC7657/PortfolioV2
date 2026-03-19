import { useTranslation } from 'react-i18next';
import ScrollReveal from './ScrollReveal';
import ProjectCard from './ProjectCard';
import Header from './Header';

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
}

const ProjectsPage: React.FC = () => {
  const { t } = useTranslation();
  const projects = t('projects.list', { returnObjects: true }) as Project[];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Projects Content */}
      <main className="container mx-auto max-w-6xl px-6 py-12 pt-24">
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