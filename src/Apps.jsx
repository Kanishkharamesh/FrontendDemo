/* import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import User from './User';
import CreateUser from './createUser';
import UpdateUser from './updateUser';

export const Apps = () => {
  return (
    <Router>
      <div>
        <h1>Welcome to the App</h1>
        <Routes>
          <Route path="/" element={<User />} />
          <Route path="/create-user" element={<CreateUser />} />
          <Route path="/update-user" element={<UpdateUser />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Apps;
 */

/* import React from "react";

import { BrowserRouter as Router , Routes , Route } from "react-router-dom";

import Updateuser from "./UpdateUser";
import User from "./User";
import Createuser from "./Createuser";


const Apps = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<User/>} />
                    <Route path="/create" element={<Createuser/>} />  
                    <Route path="/update" element={<Updateuser/>} />
                </Routes>
            </Router>    
        </div>
    );
};

export default Apps; */

import React from "react";
import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import User from "./User";
import Createuser from "./Createuser";
import UpdateUser from "./UpdateUser";
const Apps = () => {
    return (
        <div>
            {/* <h1>hello apps</h1> */}
            <Router>
                <Routes>
                    <Route path="/" element={<User/>} />
                    <Route path="/create" element={<Createuser/>} />  
                    <Route path="/update/:id" element={<UpdateUser/>} />
                
                </Routes>
            </Router>    
        </div>
    );
};

export default Apps;
