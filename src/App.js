import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Services from './components/Services';
import Skills from './components/Skills';
import Contact from './components/Contact';
import ScrollUpButton from './components/ScrollUpButton';
import './styles/style.css';
import './styles/big-circle.css';
import Internships from './components/internships';
// import Testimonials from './components/testimonials';
import LatestWorks from './components/works';

const App = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuActive, setIsMenuActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  const handleMenuItemClick = () => {
    setIsMenuActive(false);
  };

  return (
    <div>
      <Navbar
        isSticky={isSticky}
        isMenuActive={isMenuActive}
        toggleMenu={toggleMenu}
        handleMenuItemClick={handleMenuItemClick}
      />
      <Home />
      <About />
      <LatestWorks/>
      <Projects />
      <Internships/>
      <Services />
      {/* <Testimonials/> */}
      <Skills />
      <Contact />
     
      <ScrollUpButton />
    </div>
  );
};

export default App;
