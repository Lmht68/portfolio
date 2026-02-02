import { useEffect, useState } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Intro from './components/Intro';
import Portfolio from './components/Portfolio';
import Timeline from './components/Timeline';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  const [theme, toggleTheme] = useTheme();
  const [width, height] = useWindowSize();
  const config = getResponsiveConfig(width, height);

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
      stroke="white"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
      />
    </svg>
  );

  return (
    <>
      <button
        type="button"
        onClick={toggleTheme}
        className="fixed p-2 z-10 right-4 md:right-20 top-4 bg-violet-300 dark:bg-orange-300 text-lg rounded-md"
      >
        {theme === 'dark' ? sunIcon : moonIcon}
      </button>

      <Parallax key={config.key} pages={config.totalPages}>
        <ParallaxLayer
          offset={0}
          speed={-0.2}
          factor={config.totalPages}
          className="bg-img"
          style={{ backgroundSize: 'cover' }}
        />

        <ParallaxLayer
          offset={config.intro}
          speed={0.05}
        >
          <Intro />
        </ParallaxLayer>

        <ParallaxLayer
          offset={config.portfolio}
          speed={0.05}
        >
          <Portfolio />
        </ParallaxLayer>

        <ParallaxLayer
          offset={config.timeline}
          speed={0.05}
        >
          <Timeline />
        </ParallaxLayer>

        <ParallaxLayer
          offset={config.skills}
          speed={0.05}
        >
          <Skills />
        </ParallaxLayer>

        <ParallaxLayer
          offset={config.totalPages - 0.1}
          speed={0.05}
        >
          <Footer />
        </ParallaxLayer>
      </Parallax>
    </>
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

function useWindowSize() {
  const [size, setSize] = useState([window.innerWidth, window.innerHeight]);
  useEffect(() => {
    const handleResize = () => {
      setSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener('resize', handleResize);
    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return size;
};

function getResponsiveConfig(width, height) {
  if (width < 640) { // Mobile
    return { key: "mobile", intro: 0.17, portfolio: 1.0, timeline: 3.4, skills: 5.64, totalPages: 7 };
  }

  if (width >= 640 && width <= 1024) { // Tablet
    return { key: "tablet", intro: 0.1, portfolio: 0.6, timeline: 1.3, skills: 2.53, totalPages: 5 };
  }

  if (height > width) { // Portrait
    return { key: "portrait", intro: 0.085, portfolio: 0.5, timeline: 1.065, skills: 2.01, totalPages: 5 };
  }

  // Landscape
  return { key: "landscape", intro: 0.17, portfolio: 1.0, timeline: 2.23, skills: 3.63, totalPages: 5 };
}