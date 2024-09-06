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
            <p>I have a strong background in JavaScript and the MERN stack, with over six months of hands-on experience. I've developed a passion for creating innovative web solutions. My journey includes internships at LearnSmaser Edutech Company, where I led workshops and honed my skills. I'm always eager to learn new things and take on challenging projects that push the boundaries of what's possible on the web.</p>
            <a href="https://drive.google.com/file/d/1aAw8ULplaQQXirsqH-wY18z2m2bpqffo/view?usp=sharing">Download CV</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
