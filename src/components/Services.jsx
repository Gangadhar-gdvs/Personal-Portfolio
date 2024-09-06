import React from 'react';

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="max-width">
        <h2 className="title">My Services</h2>
        <div className="serv-content">
          <div className="card">
            <div className="box">
              <i className="fa fa-paint-brush"></i>
              <div className="text">Web Designing</div>
              <p className='p'>The craft of designing the visual and aesthetic aspects of a website, including layout, color schemes, and typography. It focuses on creating a visually appealing and user-friendly interface that represents the brand effectively and ensures a pleasant user experience.</p>
            </div>
          </div>
          <div className="card">
            <div className="box">
              <i className="fa fa-chart-line"></i>
              <div className="text">Responsive Pages</div>
              <p className='p'>An approach that makes websites adapt to different screen sizes and devices, ensuring optimal viewing and interaction. It uses techniques like fluid grids and media queries to adjust the layout and content for various devices, improving usability and accessibility on desktops, tablets, and smartphones.              </p>
            </div>
          </div>
          <div className="card">
            <div className="box">
              <i className="fa fa-code"></i>
              <div className="text">Web Development</div>
              <p className='p'>The process of creating and maintaining websites and web applications, involving both frontend (visual and interactive elements using HTML, CSS, JavaScript) and backend (server-side operations and database management) development. It aims to ensure that web applications are functional, efficient, and user-friendly.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
