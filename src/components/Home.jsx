import React, { useEffect } from 'react';
import Typed from 'typed.js';
import gmail from '../images/gmail.png';
import profile from '../images/profile.png';
import LinkedIn from '../images/LinkedIn.png';
import github from '../images/github.png';
import instagram from '../images/Instagram.png';
import '../styles/style.css';

const Home = () => {

  useEffect(() => {
    const options = {
      strings: ['Full Stack Developer', 'Web Designer', 'Web Developer'],
      typeSpeed: 20,
      backSpeed: 50,
      backDelay: 1500,
      startDelay: 500,
      loop: true,
    };

    // Initialize typed.js instances
    const typed1 = new Typed('.typing', options);

    // Cleanup function to destroy typed.js instances
    return () => {
      typed1.destroy();
    };
  }, []); // Empty dependency array to run only once on mount

  return (
    <section className="home" id="home">
      <div className="max-width">
        <div className="home-content">
          <div className="text-1">Hello, my name is</div>
          <div className="text-2">Gangadhara Gooti</div>
          <div className="text-3">And I'm a <span className="typing"></span></div>
          <a href="#">Hire me</a>
        </div>

        <div className="rounding-sec">
          <div className="big-circle">
            <div className="icon-block">
              <a href="mailto:gangadhargdvs0@gmail.com" target="_blank" rel="noopener noreferrer">
                <img style={{ height: '45px', width: '45px' }} src={gmail} alt="Gmail" />
              </a>
            </div>
            <div className="icon-block">
              <a href="https://www.instagram.com/gdvs_hrx" target="_blank" rel="noopener noreferrer">
                <img style={{ height: '45px', width: '45px' }} src={instagram} alt="Instagram" />
              </a>
            </div>
            <div className="icon-block">
              <a href="https://www.linkedin.com/in/gangadhar-gooti" target="_blank" rel="noopener noreferrer">
                <img style={{ height: '45px', width: '45px' }} src={LinkedIn} alt="LinkedIn" />
              </a>
            </div>
            <div className="icon-block">
              <a href="https://github.com/Gangadhar-gdvs" target="_blank" rel="noopener noreferrer">
                <img style={{ height: '45px', width: '45px' }} src={github} alt="GitHub" />
              </a>
            </div>
          </div>

          <div className="images">
            <img src={profile} alt="Profile" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
