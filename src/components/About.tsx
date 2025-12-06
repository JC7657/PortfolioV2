import React from 'react';
import ScrollReveal from './ScrollReveal';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-6 bg-gray-50">
      <div className="container mx-auto max-w-4xl">
        <ScrollReveal>
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">About Me</h2>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <div className="text-lg text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
            <p className="mb-6">
              Computer Engineering student with experience in software development and enterprise technical support. 
              I've supported international companies like Meta, Cloudera, Lionpoint, and Skechers, 
              developing strong skills in troubleshooting and professional communication.
            </p>
            <p className="mb-6">
              My technical stack includes JavaScript, TypeScript, React, Node.js, MongoDB, MySQL, Django, 
              and .NET, with experience in Git, Linux environments, and modern development workflows.
            </p>
            <p>
              I'm driven by code quality, scalability, and continuous improvement, always looking to deliver 
              reliable and efficient solutions that generate real impact.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default About;