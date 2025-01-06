import React from "react";

const Dashboard = () => {
  return (
    <header style={styles.header}>
      <div style={styles.logoContainer}>
        <img
          src="https://1000logos.net/wp-content/uploads/2021/10/ABC-Logo-1988.png"
          alt="ABC Logo"
          style={styles.logo}
        />
        <a href="/" style={styles.titleLink}>
          <h1 style={styles.title}>ABC</h1>
        </a>
      </div>
      <nav style={styles.nav}>
        <ul style={styles.navList}>
          <li style={styles.navItem}>
            <a href="/" style={styles.navLink}>
              Home
            </a>
          </li>
          <li style={styles.navItem}>
            <a href="/about" style={styles.navLink}>
              About Us
            </a>
          </li>
          <li style={styles.navItem}>
            <a href="/contact" style={styles.navLink}>
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    background: "black",
    padding: "15px 30px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: "12px",
    boxShadow: "0 8px 15px rgba(0, 0, 0, 0.2)",
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
  },
  logo: {
    width: "110px",
    height: "60px",
    marginRight: "15px",
  },
  title: {
    color: "#fff",
    fontSize: "28px",
    fontWeight: "bold",
    textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
    margin: 0, // Added to remove default h1 margin
  },
  titleLink: {
    textDecoration: "none", // Removes underline from the link
  },
  nav: {
    display: "flex",
  },
  navList: {
    display: "flex",
    listStyle: "none",
    gap: "30px",
    padding: 0,
    margin: 0,
  },
  navItem: {
    position: "relative",
  },
  navLink: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "18px",
    fontWeight: "500",
    transition: "color 0.3s ease, transform 0.3s ease",
  },
  navLinkHover: {
    textDecoration: "underline",
  },
  navLinkHoverEffect: {
    position: "absolute",
    bottom: "-5px",
    left: 0,
    width: "100%",
    height: "3px",
    background: "#fff",
    transform: "scaleX(0)",
    transformOrigin: "right",
    transition: "transform 0.3s ease",
  },
  navItemHover: {
    transform: "scale(1.1)",
  },
  navLinkHover: {
    transform: "scale(1.05)",
    color: "#ffeb3b",
  },
};

export default Dashboard;