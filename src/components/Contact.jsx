import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
// import 'react-owl-carousel2/lib/styles.css';
import { useState } from 'react';
const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, subject, message } = formData;
        const mailtoLink = `mailto:gangadhargdvs0@gmail.com?subject=${encodeURIComponent(subject)}&body=Name: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}%0AMessage: ${encodeURIComponent(message)}`;
        window.location.href = mailtoLink;
      };
    
  return (
    <section className="contact" id="contact">
      <div className="max-width">
        <h2 className="title">Contact me</h2>
        <div className="contact-content">
          <div className="column left">
            <div className="text">Get in Touch</div>
            <p>Feel free to reach out to me through the contact form below. Whether you have a question, project idea, or just want to connect, I’m here to help. I look forward to hearing from you!</p>
            <div className="icons">
              <div className="row">
                <i className="fa fa-user"></i>
                <div className="info">
                  <div className="head">Name</div>
                  <div className="sub-title">Gangadhara Gooti</div>
                </div>
              </div>
              <div className="row">
                <i className="fa fa-map-marker-alt"></i>
                <div className="info">
                  <div className="head">Address</div>
                  <div className="sub-title">India</div>
                </div>
              </div>
              <div className="row">
                <i className="fa fa-envelope"></i>
                <div className="info">
                  <div className="head">Email</div>
                  <div className="sub-title">gangadhargdvs0@gmail.com</div>
                </div>
              </div>
            </div>
          </div>
          <div className="column right">
            <div className="text">Message me</div>
            <form onSubmit={handleSubmit}>
      <div className="fields">
        <div className="field name">
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="field email">
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="field">
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          required
          value={formData.subject}
          onChange={handleChange}
        />
      </div>
      <div className="field textarea">
        <textarea
          name="message"
          cols="30"
          rows="10"
          placeholder="Message.."
          required
          value={formData.message}
          onChange={handleChange}
        ></textarea>
      </div>
      <div className="button-area">
        <button type="submit">Send message</button>
      </div>
    </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
