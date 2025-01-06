import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <h1 className="hero-title">Welcome to ABC – Your Partner in Success</h1>
        <img
          src="https://data.si/en/wp-content/uploads/2018/05/business-address-slovenia-europe-800x445.jpg"
          alt="Hero Visual"
          className="hero-image"
        />
      </section>

      {/* About Section */}
      <section className="about">
        <h2>About Us</h2>
        <p>
          ABC is dedicated to providing exceptional services and solutions to our
          clients. With over 10+ years of experience and 500+ satisfied clients,
          we are committed to excellence.
        </p>
      </section>

      {/* Features or Services Section */}
      <section className="features">
        <h2>Our Services</h2>
        <div className="feature-list">
          <div className="feature-item">
            <i className="feature-icon">🌟</i>
            <h3>Web Development</h3>
            <p>We build modern, responsive, and user-friendly websites tailored to your needs.</p>
          </div>
          <div className="feature-item">
            <i className="feature-icon">🚀</i>
            <h3>Digital Marketing</h3>
            <p>Boost your business visibility with SEO, social media, and content strategies.</p>
          </div>
          <div className="feature-item">
            <i className="feature-icon">💼</i>
            <h3>IT Consulting</h3>
            <p>Expert advice to optimize your IT infrastructure and achieve your business goals.</p>
          </div>
        </div>
      </section>


      {/* Call to Action Section */}
      <section className="cta">
        <button className="cta-button">Learn More</button>
        <button className="cta-button">Contact Us</button>
        <button className="cta-button">Get Started</button>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What Our Clients Say</h2>
        <blockquote>
          "ABC has been an incredible partner in our success. Highly recommend
          their services!"
        </blockquote>
        <cite>- Satisfied Client</cite>
      </section>

      {/* Footer Section */}
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

export default Home;