import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './animations.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import TechSkills from './components/TechSkills';
import Projects from './components/Projects';
import WorkExperience from './components/WorkExperience';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ProjectsPage from './components/ProjectsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="App">
            <Header />
            <Hero />
            <About />
            <TechSkills />
            <Projects />
            <WorkExperience />
            <CTA />
            <Footer />
          </div>
        } />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
