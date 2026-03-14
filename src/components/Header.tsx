import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const location = useLocation();
  const currentPage = location.pathname === '/' ? 'home' : location.pathname.replace('/', '');

  const getNavLinkClass = (page: string) => {
    const baseClass = "transition-colors duration-200";
    if (currentPage === page) {
      return `${baseClass} text-blue-400 font-semibold`;
    }
    return `${baseClass} hover:text-blue-400`;
  };

  return (
    <header className="bg-gray-900 text-white py-4 px-6 fixed top-0 w-full z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <img src="/src/assets/logo.png" alt="Logo" className="h-8 w-auto" />
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link to="/" className={getNavLinkClass('home')}>Home</Link></li>
            <li><Link to="/projects" className={getNavLinkClass('projects')}>Projects</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;