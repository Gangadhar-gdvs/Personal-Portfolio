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
              <div className="text">Website Maintenance & Content Management</div>
              <p className="p">
                Successfully managed and maintained the official website of JNTUACEP, ensuring seamless performance, timely content updates, 
                and an intuitive user interface. Actively resolved technical issues, enhanced navigation structure, and implemented optimization 
                strategies to ensure a reliable and engaging user experience for students, staff, and visitors.
              </p>
              <a href="https://jntuacep.ac.in/" className="demo_link" target="_blank" rel="noopener noreferrer">
                Visit Website
              </a>
            </div>
          </div>

         <div className="card">
            <div className="box">
              <i className="fa fa-chart-line"></i>
              <div className="text">Custom Web Application Development</div>
              <p className="p">
                Designed and developed a bespoke web application for <strong>Comfort Floors and Bathrooms Ltd.</strong> to automate core 
                business operations. The solution was engineered to meet their specific workflow requirements, improving operational efficiency, 
                streamlining customer interactions, and enhancing overall business agility.
              </p>
              <a href="https://comfortfloors.ie/" className="demo_link" target="_blank" rel="noopener noreferrer">
                Visit Website
              </a>
            </div>
          </div>

          <div className="card">
            <div className="box">
              <i className="fa fa-code"></i>
              <div className="text">Web Application for TechKshatriyas</div>
              <p className="p">
                A modern web application developed for the software startup company <strong>TechKshatriyas</strong>. 
                This solution was tailored to streamline operations, enhance client interaction, and reflect the company's tech vision. 
                Visit the official site to explore more about the application and its offerings.
              </p>
              <a href="https://agnikulakshatriyasitsolutions.com/" className="demo_link" target="_blank" rel="noopener noreferrer">
                Visit Website
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
    )
    
}
export default Internships;