import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Toolkit from './components/Toolkit.jsx';
import Work from './components/Work.jsx';
import { useReveal } from './hooks.js';

export default function App() {
  useReveal();

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main" tabIndex={-1}>
        <Hero />
        <Work />
        <Toolkit />
        <About />
        <Contact />
      </main>
    </>
  );
}
