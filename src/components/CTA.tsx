import React from 'react';
import { useTranslation } from 'react-i18next';

const CTA: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl font-bold mb-6">{t('cta.title')}</h2>
        <p className="text-xl mb-8">
          {t('cta.subtitle')}
        </p>
        <div className="space-x-4">
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition text-lg">
            {t('cta.contact')}
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition text-lg">
            {t('cta.resume')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;