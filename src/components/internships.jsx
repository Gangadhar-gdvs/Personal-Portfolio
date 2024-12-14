import React from "react";
function Internships() {
    return(
      <section className="services projects" id="works">
      <div className="max-width">
        <h2 className="title">Latest Works</h2>
        <div className="serv-content">
          <div className="card">
            <div className="box">
              <i className="fa fa-paint-brush"></i>
              <div className="text"> Website Monitoring and Updating</div>
              <p className='p'>Monitored and maintained the college website, ensuring regular updates, smooth functionality, and user-friendly navigation. Actively addressed technical issues, updated content, and optimized performance to enhance the overall user experience.
</p>
              <a href="https://jntuacep.ac.in/" className="demo_link">Live Demo</a>
            </div>
          </div>
          <div className="card">
            <div className="box">
              <i className="fa fa-chart-line"></i>
              <div className="text">Web Application Develoment</div>
              <p className='p'>Developed a custom web application for Comfort Floors and Bathrooms Limited to streamline their operations.
            Tailored the application to meet the company’s specific business requirements, improving overall efficiency.</p>
              <a href="https://comfortfloors.ie/" className="demo_link">Live Demo</a>
            </div>
          </div>
          {/* <div className="card">
            <div className="box">
              <i className="fa fa-code"></i>
              <div className="text">Network Traffic Analyser</div>
              <p className='p'>Network Traffic Analyzer processes PCAP files to display detailed network data in both text and graphical formats. It features filters for IP addresses, packet lengths, and protocol numbers. Users can also save the analysis results in PDF format for convenient reporting and documentation.</p>
              <a href="#">Live Demo</a>
            </div>
          </div> */}
        </div>
      </div>
    </section>
    )
    
}
export default Internships;