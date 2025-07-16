import React from 'react';

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="max-width">
        <h2 className="title">My Services</h2>
        <div className="serv-content">
          <div className="card">
            <div className="box">
              <i className="fa fa-code"></i>
              <div className="text">Web Development</div>
              <p className="p">
                Building modern, dynamic, and high-performance websites using the latest technologies. 
                I specialize in both frontend and backend development to deliver robust, scalable, and SEO-friendly web solutions tailored to client needs.
              </p>
            </div>
          </div>

          <div className="card">
            <div className="box">
              <i className="fa fa-mobile-alt"></i>
              <div className="text">Mobile Application Development</div>
              <p className="p">
                Designing and developing cross-platform mobile applications for Android and iOS using modern frameworks. 
                My apps are optimized for performance, user experience, and responsiveness to meet the demands of today’s mobile users.
              </p>
            </div>
          </div>

          <div className="card">
            <div className="box">
              <i className="fa fa-laptop"></i>
              <div className="text">Responsive Website Design</div>
              <p className="p">
                Crafting responsive and mobile-friendly websites that adapt seamlessly to all screen sizes and devices. 
                Using flexible grids, media queries, and user-centric design principles to ensure the best user experience across platforms.
              </p>
            </div>
          </div>

          <div className="card">
            <div className="box">
              <i className="fa fa-plug"></i>
              <div className="text">API Integration & Backend Services</div>
              <p className="p">
                Implementing secure APIs and backend systems to enable seamless data exchange and third-party service integration. 
                I provide solutions that connect frontend interfaces with robust backend logic and cloud-based services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
