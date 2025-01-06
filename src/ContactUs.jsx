// ContactUs.js
import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contactus-container">
      {/* Contact Form Section */}
      <section className="contact-form">
        <h1>Contact Us</h1>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" placeholder="Your Name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Your Email" />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject:</label>
            <input type="text" id="subject" name="subject" placeholder="Subject" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" placeholder="Your Message"></textarea>
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </section>

      {/* Contact Information Section */}
      <section className="contact-info">
        <h2>Contact Information</h2>
        <p>Email: contact@abc.com</p>
        <p>Phone: +1 (555) 123-4567</p>
        <p>Address: 123 Main Street, City, Country</p>
        <p>Office Hours: Mon-Fri, 9:00 AM - 5:00 PM</p>
      </section>

      {/* Map Section */}
      <section className="map">
        <h2>Find Us Here</h2>
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093745!2d144.95373531531592!3d-37.81627977975159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577fed999f45f18!2s123+Main+Street%2C+City%2C+Country!5e0!3m2!1sen!2sus!4v1610000000000!5m2!1sen!2sus"
          width="100%"
          height="300"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>

      <footer className="footer">
        <p>Quick Links</p>
        <ul>
          <li>
            <a href="https://facebook.com">Facebook</a> |
            <a href="https://twitter.com"> Twitter</a>
          </li>
        </ul>
        <p>&copy; 2024 ABC Company. All rights reserved.</p>
      </footer>

    </div>
  );
};

export default ContactUs;
