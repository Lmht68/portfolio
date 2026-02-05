import { useEffect, useState } from 'react';
import Intro from './components/Intro';
import Portfolio from './components/Portfolio';
import Timeline from './components/Timeline';
import Testimonials from './components/Testimonials';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

const sunIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
    />
  </svg>
);

const moonIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
    />
  </svg>
);

function App() {
  const [theme, toggleTheme] = useTheme();

  return (
    <div className="antialiased transition-colors duration-300">
      <button
        type="button"
        onClick={toggleTheme}
        className="fixed z-10 left-4 md:left-12 top-4 icon-btn"
      >
        <span className="sr-only">Toggle dark mode</span>
        {theme === 'dark' ? sunIcon : moonIcon}
      </button>

      <Navbar />

      <div className="fixed inset-0 -z-10 bg-img bg-cover bg-center" />

      <main className="flex flex-col items-center">
        <section id="intro" className="py-36 w-full">
          <Intro />
        </section>
        <section id="portfolio" className="py-5 w-full">
          <Portfolio />
        </section>
        <section id="timeline" className="py-5 w-full">
          <Timeline />
        </section>
        <section id="testimonials" className="pb-5 w-full">
          <Testimonials />
        </section>
        <section id="skills" className="py-5 w-full">
          <Skills />
        </section>
        <section id="contact" className="py-5 w-full">
          <Contact />
        </section>
      </main>

      <Footer />
    </div >
  )
}

export default App

function useTheme() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    // Function to sync both state and the DOM class
    const handleChange = () => {
      const isDark = mediaQuery.matches;
      setTheme(isDark ? 'dark' : 'light');
      document.documentElement.classList.toggle('dark', isDark);
    };

    // Initial sync
    handleChange();

    // Listen for system changes
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark';
      document.documentElement.classList.toggle('dark', next === 'dark');
      return next;
    });
  };

  return [theme, toggleTheme];
}