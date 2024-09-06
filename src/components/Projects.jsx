import React from 'react';

const Projects = () => {
  return (
    <section className="services projects" id="projects">
      <div className="max-width">
        <h2 className="title">My Projects</h2>
        <div className="serv-content">
          <div className="card">
            <div className="box">
              <i className="fa fa-paint-brush"></i>
              <div className="text">Hand In Hand</div>
              <p className='p'>Hand in Hand connects users with donation opportunities, specialized organizations, and top hospitals for treating rare diseases. It offers a comprehensive resource for support and medical care for rare conditions.</p>
              <a href="#">Live Demo</a>
            </div>
          </div>
          <div className="card">
            <div className="box">
              <i className="fa fa-chart-line"></i>
              <div className="text">Online-Portfolio</div>
              <p className='p'>Online Portfolio enables users to sign up or log in to create a customized, modern portfolio by entering their details. Once created, users can easily edit or delete their portfolio as needed, ensuring it reflects their latest achievements and preferences. This platform offers a dynamic and flexible portfolio management experience.</p>
              <a href="#">Live Demo</a>
            </div>
          </div>
          <div className="card">
            <div className="box">
              <i className="fa fa-code"></i>
              <div className="text">Network Traffic Analyser</div>
              <p className='p'>Network Traffic Analyzer processes PCAP files to display detailed network data in both text and graphical formats. It features filters for IP addresses, packet lengths, and protocol numbers. Users can also save the analysis results in PDF format for convenient reporting and documentation.</p>
              <a href="#">Live Demo</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
