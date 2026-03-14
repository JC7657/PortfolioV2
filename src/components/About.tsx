import React from 'react';
import ScrollReveal from './ScrollReveal';
import { useTranslation } from 'react-i18next';

const About: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section id="about" className="py-20 px-6 bg-gray-50">
      <div className="container mx-auto max-w-4xl">
        <ScrollReveal>
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">{t('about.title')}</h2>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <div className="text-lg text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
            <p className="mb-6">
              {t('about.p1')}
            </p>
            <p className="mb-6">
              {t('about.p2')}
            </p>
            <p>
              {t('about.p3')}
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default About;