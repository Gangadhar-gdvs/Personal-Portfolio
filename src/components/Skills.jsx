import React from 'react';

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="max-width">
        <h2 className="title">My skills</h2>
        <div className="skills-content">
          <div className="column left">
            <div className="text">My creative skills & experiences.</div>
            <p>I possess a robust foundation in web development, particularly in HTML,CSS,JavaScript and the MERN stack. Over six months of hands-on experience have enabled you to build dynamic, responsive, and scalable web applications. Your expertise extends to both front-end and back-end development, allowing you to craft seamless user experiences while managing complex server-side logic.</p>
            <a href="#">Read more</a>
          </div>
          <div className="column right">
            <div className="bars">
              <div className="info">
                <span>HTML</span>
                <span>90%</span>
              </div>
              <div className="line html"></div>
            </div>
            <div className="bars">
              <div className="info">
                <span>CSS</span>
                <span>80%</span>
              </div>
              <div className="line css"></div>
            </div>
            <div className="bars">
              <div className="info">
                <span>JavaScript</span>
                <span>80%</span>
              </div>
              <div className="line js"></div>
            </div>
            <div className="bars">
              <div className="info">
                <span>MERN</span>
                <span>60%</span>
              </div>
              <div className="line php"></div>
            </div>
            <div className="bars">
              <div className="info">
                <span>MySQL</span>
                <span>70%</span>
              </div>
              <div className="line mysql"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
