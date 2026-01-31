import { useEffect, useState } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Intro from './components/Intro';
import Portfolio from './components/Portfolio';
import Timeline from './components/Timeline';
import Skills from './components/Skills';

function App() {
  const handleThemeSwitch = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const getResponsiveConfig = (width) => {
    if (width < 640) { // Mobile
      return { intro: 0.17, portfolio: 1.0, timeline: 3.4, skills: 5.65, totalPages: 7 };
    } else if (width < 1024) { // Tablet
      return { intro: 0.17, portfolio: 1.0, timeline: 2.2, skills: 3.57, totalPages: 5 };
    } else { // Desktop
      return { intro: 0.17, portfolio: 1.0, timeline: 2.2, skills: 3.57, totalPages: 5 };
    }
  };

  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  });

  const [config, setConfig] = useState(() => getResponsiveConfig(window.innerWidth));

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  useEffect(() => {
    const handleResize = () => {
      const newConfig = getResponsiveConfig(window.innerWidth);
      // Only update state if the config actually changes (performance boost)
      setConfig(prev => (prev.totalPages !== newConfig.totalPages ? newConfig : prev));
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
        onClick={handleThemeSwitch}
        className="fixed p-2 z-10 right-4 md:right-20 top-4 bg-violet-300 dark:bg-orange-300 text-lg rounded-md"
      >
        {theme === 'dark' ? sunIcon : moonIcon}
      </button>

      <Parallax pages={config.totalPages}>
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
      </Parallax>
    </>
  )
}

export default App