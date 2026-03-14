import React from 'react';
import { useTranslation } from 'react-i18next';

const WorkExperience: React.FC = () => {
  const { t } = useTranslation();
  const experiences = [
    {
      position: 'Customer Support Engineer (Intern)',
      company: 'ServiceRocket',
      period: 'Previous',
      description: 'Technical support for enterprise clients using Atlassian tools (JIRA, Jira Service Desk, Confluence). Specialized in incident resolution, process automation, and professional client communication.'
    },
    {
      position: 'Developer (Applications Division)',
      company: 'SONDA',
      period: 'Previous',
      description: 'Full-stack development using .NET Framework, Java, C#, and SQL. Built enterprise applications with VBA integration and version control using Git.'
    },
    {
      position: 'Computer Engineering Student',
      company: 'INACAP & 4Geeks Academy Chile',
      period: 'Academic Training',
      description: 'Comprehensive training in web development (HTML, CSS, JavaScript, React.js, Node.js), cloud technologies (AWS), data analysis, and agile methodologies.'
    }
  ];

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