import React from 'react';
import ScrollReveal from './ScrollReveal';
import { useTranslation } from 'react-i18next';
import {
  FaReact, FaJs, FaNodeJs, FaGitAlt, FaPython,
  FaLinux, FaJava, FaDocker, FaAws
} from 'react-icons/fa';
import { SiMongodb, SiMysql, SiDjango, SiDotnet, SiSharp, SiTypescript } from 'react-icons/si';

const TechSkills: React.FC = () => {
  const { t } = useTranslation();
  const technologies = [
    { name: 'React', icon: FaReact, color: '#61DAFB' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
    { name: 'JavaScript', icon: FaJs, color: '#F7DF1E' },
    { name: 'AWS', icon: FaAws, color: '#FF9900' },
    { name: 'Docker', icon: FaDocker, color: '#2496ED' },
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
    { name: 'Python', icon: FaPython, color: '#3776AB' },
    { name: 'Django', icon: SiDjango, color: '#092E20' },
    { name: '.NET', icon: SiDotnet, color: '#512BD4' },
    { name: 'Java', icon: FaJava, color: '#ED8B00' },
    { name: 'C#', icon: SiSharp, color: '#239120' },
    { name: 'Git', icon: FaGitAlt, color: '#F05032' },
    { name: 'Linux', icon: FaLinux, color: '#FCC624' },
  ];

  return (
    <section id="tech" className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <ScrollReveal>
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">{t('skills.title')}</h2>
        </ScrollReveal>
        
        <ScrollReveal delay={200}>
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-gray-700">{t('skills.technologies')}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="group flex flex-col items-center justify-center p-4 bg-gray-50 rounded-xl border-2 border-transparent hover:border-purple-400 hover:bg-purple-50 hover:-translate-y-1 active:border-purple-600 active:bg-purple-100 active:translate-y-1 transition-all duration-300 cursor-default"
                >
                  <tech.icon 
                    className="w-10 h-10 mb-2 transition-colors duration-300" 
                    style={{ color: tech.color }}
                  />
                  <span className="text-sm font-medium text-gray-700 group-hover:text-purple-700 group-active:text-purple-800 transition-colors duration-300">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default TechSkills;
