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
              <div className="text">Web Medical Management System</div>
              <p className='p'> I developed a Web Medical Management System with Doctor, Patient, and Admin modules to streamline medical data management and enhance healthcare operations.
              </p>
              {/* <a href="#">Live Demo</a> */}
            </div>
          </div>
          <div className="card">
            <div className="box">
              <i className="fa fa-chart-line"></i>
              <div className="text">G-Mart Website</div>
              <p className='p'>Developed a G-Mart Shopping website with real-time payment processing and delivery tracking to enhance the user shopping experience.
Implemented an Admin panel for efficient management of orders, payments, product listings, and delivery updates.
</p>
              {/* <a href="#">Live Demo</a> */}
            </div>
          </div>
          <div className="card">
            <div className="box">
              <i className="fa fa-code"></i>
              <div className="text">Network Traffic Analyser</div>
              <p className='p'>Network Traffic Analyzer processes PCAP files to display detailed network data in both text and graphical formats. It features filters for IP addresses, packet lengths, and protocol numbers. Users can also save the analysis results in PDF format for convenient reporting and documentation.</p>
              <a href="https://network-traffic-analysis-client.onrender.com/" className="demo_link">Live Demo</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
