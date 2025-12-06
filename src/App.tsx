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

function App() {
  return (
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
  );
}

export default App;
