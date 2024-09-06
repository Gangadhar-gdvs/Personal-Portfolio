import React, { useEffect, useState } from 'react';

const ScrollUpButton = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      className={`scroll-up-btn ${showScrollButton ? 'show' : ''}`}
      onClick={scrollToTop}
    >
      <i className="fa fa-arrow-up"></i>
    </button>
  );
};

export default ScrollUpButton;
