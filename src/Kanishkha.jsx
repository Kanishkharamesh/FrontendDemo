/* import './App.css'
function App() {
  return (
    <>
      <h1>Hello world</h1>
    </>
  )
}

export default App
 */
/* import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import AboutUs from './AboutUs';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <ul> 
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs/>} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
 */

/* import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from "./Dashboard";
import Home from "./Home";
import AboutUs from "./AboutUs";
import ContactUs from './Contactus';

function App() {
  return (
    <Router>
      <div>
        <Dashboard />
        <main style={{ padding: "20px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
export default App; */

/* import React from "react";
import DyanmicImage from "./DyanmicImage";

function App() {
  return (
    <div>
      <DyanmicImage />
    </div>
  );
}
export default App; */

/* import React from "react";
import Hen from "./Hen";

const Kanishkha = () => {
  const need = "Water"; // Data to be passed down
  return (
    <div>
      <Hen need={need} />
    </div>
  );
};
export default Kanishkha; */

/*import React, { useState } from "react";
import Hen from "./Hen";

const Kanishkha = () => {
  const [color, setColor] = useState("black");
  const changeColor = () => {
    setColor(color === "black" ? "blue" : "black");
  };

  const need = "Water";

  return (
    <div>
      <button onClick={changeColor}>Change Color</button>
      <Hen need={need} color={color} />
    </div>
  );
};

export default Kanishkha;
 */

import React, { useState } from 'react';
import styles from './Stomach';
function Kanishkha() {
  const [clickCount, setClickCount] = useState(0);
  const handleClick = () => {
    setClickCount((prevCount) => prevCount + 1);
  };
  let textStyle = { ...styles.textBase };
  if (clickCount % 2 === 0) {
    textStyle = { ...textStyle, ...styles.backgroundBlack, ...styles.textWhite };
  } else {
    textStyle = { ...textStyle, ...styles.backgroundWhite, ...styles.textBlack };
  }
  return (
    <div>
      <h1 style={textStyle}>Received : Water</h1>
      <button
        onClick={handleClick}
        style={{
          marginTop: '20px',padding: '10px 20px',cursor: 'pointer',backgroundColor: 'black',
          color: 'white',border: 'none',borderRadius: '5px', marginLeft: '550px',
        }}
      >
        Click Me
      </button>
    </div>
  );
}
export default Kanishkha;