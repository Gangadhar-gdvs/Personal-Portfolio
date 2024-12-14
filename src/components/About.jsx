import React, {useEffect} from 'react';
import Typed from 'typed.js';
import profile from '../images/profile.png'
const About = () => {

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
    const typed2 = new Typed('.typing-2', options);

    // Cleanup function to destroy typed.js instances
    return () => {
      typed2.destroy();
    };
  }, []);

  return (
    <section className="about" id="about">
      <div className="max-width">
        <h2 className="title">About me</h2>
        <div className="about-content">
          <div className="column left">
            <img src={profile} alt="Profile" />
          </div>
          <div className="column right">
            <div className="text">I'm Gangadhar and I'm a <span className="typing-2"></span></div>
            <p>I am a dedicated web developer with experience in real-time web application development. I have completed an internship at LearnSmaser Edutech, managed and maintained my college website, and developed a custom web application for Comfort Floors and Bathrooms Limited, Ireland, to meet their specific business needs. I aim to build impactful, user-friendly, and scalable solutions.</p>
            <a href="https://drive.google.com/file/d/1n-zFxCUknTSqn5OqYg5dDeCdbbYGcJPa/view?usp=drive_link">Download CV</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
