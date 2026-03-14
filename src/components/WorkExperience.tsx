import React from 'react';
import { useTranslation } from 'react-i18next';

const WorkExperience: React.FC = () => {
  const { t } = useTranslation();
  const experiences = t('experience.jobs', { returnObjects: true }) as Array<{
    position: string;
    company: string;
    period: string;
    description: string;
  }>;

  return (
    <section id="experience" className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">{t('experience.title')}</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-800">{exp.position}</h3>
              <p className="text-blue-600 font-medium mb-2">{exp.company} • {exp.period}</p>
              <p className="text-gray-600">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;