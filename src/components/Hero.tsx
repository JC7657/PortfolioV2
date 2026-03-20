import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const CV_URLS = {
  en: 'https://docs.google.com/document/d/1vTrm23iDnV9MJU-W_unKA7SwPrSy7ADdzx6ylicITJE/edit?tab=t.0#heading=h.upetirzakp20',
  es: 'https://docs.google.com/document/d/1GKhgva-rrV38QVZ1ife278JgRtmlngYSxlfpWH3TZVU/edit?tab=t.0#heading=h.upetirzakp20'
};

const Hero: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setTextVisible(true), 100);
    setTimeout(() => setIsVisible(true), 300);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-indigo-600 text-white overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-500 animate-pulse opacity-50"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: `${Math.random() * 6 + 3}px`,
              height: `${Math.random() * 6 + 3}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.6 + 0.4,
              animation: `float ${Math.random() * 10 + 10}s linear infinite`,
              animationDelay: `${Math.random() * 10}s`
            }}
          />
        ))}
      </div>
      
      

      <div className="relative z-10 text-left max-w-4xl px-4 pt-20 ml-8">
        <h1 
          className={`text-5xl md:text-6xl font-bold mb-4 transition-all duration-1000 transform ${
            textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}
        >
          Juan Jerez V.
        </h1>
        
        <p 
          className={`text-xl md:text-2xl mb-6 transition-all duration-1000 delay-300 transform ${
            textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}
        >
          {t('hero.title')}
        </p>
        
        <p 
          className={`text-lg md:text-xl mb-8 max-w-3xl transition-all duration-1000 delay-500 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}
        >
          {t('hero.subtitle')}
        </p>
        
        <div 
          className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-700 transform text-left ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}
        >
          <Link to="/projects" className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-xl text-center">
            {t('hero.viewWork')}
          </Link>
          <a 
            href={i18n.language === 'es' ? CV_URLS.es : CV_URLS.en} 
            target="_blank" 
            rel="noopener noreferrer"
            className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 hover:scale-105 hover:shadow-xl text-center"
          >
            {t('hero.downloadCV')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;