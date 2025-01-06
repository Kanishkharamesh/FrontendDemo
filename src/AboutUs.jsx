// AboutUs.js
import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="aboutus-container">
      {/* Mission and Vision Section */}
      <section className="mission-vision">
        <h1>Our Mission and Vision</h1>
        <p>
          Our mission is to revolutionize X through Y, creating a better future
          for our clients and communities.
        </p>
      </section>

      {/* Company History Section */}
      <section className="history">
        <h2>Our History</h2>
        <ul className="timeline">
          <li>2000: ABC was founded with a vision to innovate.</li>
          <li>2010: Reached 100+ satisfied clients.</li>
          <li>2020: Recognized as a leader in the industry.</li>
        </ul>
      </section>

      {/* Team Introduction Section */}
      <section className="team">
        <h2>Meet Our Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src="https://img.freepik.com/premium-photo/portrait-employee-mature-man-boardroom-smile-ceo-corporate-auditor-office-bookkeeper-person-table-business-meeting-collaboration-with-planning-project-growth_590464-354399.jpg?semt=ais_hybrid" alt="Team Member" />
            <h3>Jane Doe</h3>
            <p>CEO</p>
          </div>
          <div className="team-member">
            <img src="https://media.istockphoto.com/id/1371934584/photo/portrait-of-a-confident-mature-businesswoman-working-in-a-modern-office.jpg?s=612x612&w=0&k=20&c=NF_IO6IEXY3HifRIhRqP0KDFJFdlFwaMwo3zfOOvKnQ=" alt="Team Member" />
            <h3>Andrea Smith</h3>
            <p>CTO</p>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="values">
        <h2>Our Core Values</h2>
        <ul>
          <li>Integrity</li>
          <li>Innovation</li>
          <li>Customer Focus</li>
        </ul>
      </section>

      {/* Awards and Recognition Section */}
      <section className="awards">
        <h2>Awards and Recognition</h2>
        <p>We are proud to be the recipient of multiple industry awards and certifications.</p>
      </section>

      {/* Company Culture Section */}
      <section className="culture">
        <h2>Our Culture</h2>
        <p>
          At ABC, we foster a collaborative and innovative environment where
          everyone thrives. Join us for a day in the life at ABC.
        </p>
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

export default AboutUs;
