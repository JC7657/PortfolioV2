import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-gray-900 text-white py-8 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="mb-4 md:mb-0">&copy; 2025 {t('footer.copyright')}</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-blue-400">{t('footer.linkedin')}</a>
            <a href="#" className="hover:text-blue-400">{t('footer.github')}</a>
            <a href="#" className="hover:text-blue-400">{t('footer.email')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;