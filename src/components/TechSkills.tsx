import React from 'react';
import ScrollReveal from './ScrollReveal';



const TechSkills: React.FC = () => {
  const technologies = [
    { name: 'React.js', icon: '⚛️' },
    { name: 'TypeScript', icon: '📘' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'JavaScript', icon: '🟨' },
    { name: 'HTML', icon: '🌐' },
    { name: 'CSS', icon: '🎨' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'MySQL', icon: '🐬' },
    { name: 'Django', icon: '🐍' },
    { name: '.NET', icon: '🔷' },
    { name: 'Java', icon: '☕' },
    { name: 'C#', icon: '🔷' },
    { name: 'VBA', icon: '📊' },
    { name: 'Git', icon: '📦' },
    { name: 'JSON', icon: '📄' },
    { name: 'Postman API', icon: '🚀' },
    { name: 'SQL', icon: '🗃️' },
    { name: 'KNIME', icon: '📈' },
    { name: 'Linux', icon: '🐧' }
  ];

  const skills = [
    { name: 'Full-Stack Development', icon: '🔧' },
    { name: 'Web Application Development', icon: '🌐' },
    { name: 'Cloud Architecture', icon: '☁️' },
    { name: 'Technical Support', icon: '🛠️' },
    { name: 'Enterprise Client Support', icon: '🏢' },
    { name: 'Process Automation', icon: '⚡' },
    { name: 'Incident Resolution', icon: '🔥' },
    { name: 'Project Evaluation', icon: '📋' },
    { name: 'Agile Methodologies', icon: '🏃' },
    { name: 'Version Control', icon: '🔄' },
    { name: 'Data Analysis', icon: '📊' },
    { name: 'Machine Learning Foundations', icon: '🤖' },
    { name: 'Log Analysis', icon: '📝' },
    { name: 'Professional Communication', icon: '💬' },
    { name: 'Code Quality', icon: '✨' },
    { name: 'Scalability', icon: '📈' }
  ];

  return (
    <section id="tech" className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <ScrollReveal>
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Technologies & Skills</h2>
        </ScrollReveal>
        
        <ScrollReveal delay={200}>
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-gray-700">Technologies</h3>
<div className="flex flex-wrap gap-3">
            {technologies.map((tech, index) => (
              <span key={index} className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                <span>{tech.icon}</span>
                {tech.name}
              </span>
            ))}
          </div>
          </div>
        </ScrollReveal>
        
        <ScrollReveal delay={400}>
          <div>
          <h3 className="text-2xl font-semibold mb-6 text-gray-700">Professional Skills</h3>
<div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <span key={index} className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                <span>{skill.icon}</span>
                {skill.name}
              </span>
            ))}
          </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default TechSkills;