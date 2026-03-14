import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Header: React.FC = () => {
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const currentPage = location.pathname === '/' ? 'home' : location.pathname.replace('/', '');

  const getNavLinkClass = (page: string) => {
    const baseClass = "transition-colors duration-200";
    if (currentPage === page) {
      return `${baseClass} text-purple-400 font-semibold`;
    }
    return `${baseClass} hover:text-purple-400`;
  };

  const isSpanish = i18n.resolvedLanguage === 'es';

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en');
  };

  return (
    <header className="bg-gray-900 text-white py-4 px-6 fixed top-0 w-full z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
        </Link>
        <nav>
          <ul className="flex space-x-6 items-center">
            <li><Link to="/" className={getNavLinkClass('home')}>{t('nav.home')}</Link></li>
            <li><Link to="/projects" className={getNavLinkClass('projects')}>{t('nav.projects')}</Link></li>
            <li>
              <button
                onClick={toggleLanguage}
                className="ml-4 relative inline-flex h-8 w-16 items-center rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 transition-colors hover:from-purple-600 hover:to-indigo-700"
              >
                <span className={`absolute left-2 text-xs font-thin ${isSpanish ? 'text-white/40' : 'text-white font-bold'}`}>EN</span>
                <span className={`absolute right-2 text-xs font-thin ${isSpanish ? 'text-white font-bold' : 'text-white/40'}`}>ES</span>
                <span
                  className={`${
                    isSpanish ? 'translate-x-9' : 'translate-x-1'
                  } inline-flex h-6 w-6 items-center justify-center rounded-full bg-white text-xs font-bold text-gray-900 transition-transform`}
                >
                  {isSpanish ? 'ES' : 'EN'}
                </span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;