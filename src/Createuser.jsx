/* import React from 'react';

export const CreateUser = () => {
  return (
    <div>
      <h2>Create User Page</h2>
    </div>
  );
};

export default CreateUser;
 */

/* import React from "react";

const createUser = () => {
    return <div>
        <h1>Create user</h1>
        <form>
            <label>Enter your name:</label>
            <input type="text" placeholder="Enter your name" />
            <label>Enter your emaail:</label>
            <input type="text" placeholder="Enter your email" />
            <label>Enter your address:</label>
            <input type="text" placeholder="Enter your address" />
            <button>Submit</button>
        </form>
    </div>;
};

export default createUser; */

/* import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Createuser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    axios
      .post("https://backenddemo-sa11.onrender.com/api/user/create", { name, email, address })
      .then((result) => {
        console.log(result.data);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>Create user</h1>
      <form onSubmit={submit}>
        <label>Enter your name:</label>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Enter your email:</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Enter your address:</label>
        <input
          type="text"
          placeholder="Enter your address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Createuser; */

/* import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './Createuser.css';


const Createuser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    axios
      .post("https://backenddemo-sa11.onrender.com/api/user/create", { name, email, address })
      .then((result) => {
        console.log(result.data);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="create-user-container">
      <h1 className="create-user-title">Create User</h1>
      <form className="create-user-form" onSubmit={submit}>
        <div className="create-user-field">
          <label className="create-user-label">Enter your name:</label>
          <input
            className="create-user-input"
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="create-user-field">
          <label className="create-user-label">Enter your email:</label>
          <input
            className="create-user-input"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="create-user-field">
          <label className="create-user-label">Enter your address:</label>
          <input
            className="create-user-input"
            type="text"
            placeholder="Enter your address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <button className="create-user-submit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Createuser;
 */

/* import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './Createuser.css';

const Createuser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const validateForm = () => {
    if (!name || !email || !address) {
      setError("All fields are required!");
      return false;
    }
    setError("");
    return true;
  };

  const submit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setLoading(true);
    axios
      .post("https://backenddemo-sa11.onrender.com/api/user/create", { name, email, address })
      .then((result) => {
        setLoading(false);
        setSuccess(true);
        setTimeout(() => navigate("/"), 2000);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  const clearForm = () => {
    setName("");
    setEmail("");
    setAddress("");
  };

  const resetForm = () => {
    if (window.confirm("Are you sure you want to reset the form?")) {
      clearForm();
    }
  };

  return (
    <div className="create-user-container">
      <h1 className="create-user-title">Create User</h1>
      
      {error && <p className="error-message">{error}</p>}
      {success && <p className="success-message">User created successfully!</p>}

      <form className="create-user-form" onSubmit={submit}>
        <div className="create-user-field">
          <label className="create-user-label">Enter your name:</label>
          <input
            className="create-user-input"
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="create-user-field">
          <label className="create-user-label">Enter your email:</label>
          <input
            className="create-user-input"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="create-user-field">
          <label className="create-user-label">Enter your address:</label>
          <input
            className="create-user-input"
            type="text"
            placeholder="Enter your address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        <div className="create-user-buttons">
          <button className="create-user-submit" type="submit" disabled={loading}>
            Submit
          </button>
          <button type="button" className="clear-button" onClick={clearForm}>
            Clear
          </button>
          <button type="button" className="reset-button" onClick={resetForm}>
            Reset
          </button>
        </div>
      </form>

      {loading && <div className="loading-spinner"></div>}
    </div>
  );
};

export default Createuser; */



import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './Createuser.css';

const Createuser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const validateForm = () => {
    if (!name || !email || !address) {
      setError("All fields are required!");
      return false;
    }
    setError("");
    return true;
  };

  const submit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setLoading(true);
    axios
      .post("https://backenddemo-sa11.onrender.com/api/user/create", { name, email, address })
      .then((result) => {
        setLoading(false);
        setSuccess(true);
        setTimeout(() => navigate("/"), 2000);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setAddress("");
  };

  return (
    <div className="create-user-container">
      <h1 className="create-user-title">Create User</h1>
      
      {error && <p className="error-message">{error}</p>}
      {success && <p className="success-message">User created successfully!</p>}

      <form className="create-user-form" onSubmit={submit}>
        <div className="create-user-field">
          <label className="create-user-label">Enter your name:</label>
          <input
            className="create-user-input"
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="create-user-field">
          <label className="create-user-label">Enter your email:</label>
          <input
            className="create-user-input"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="create-user-field">
          <label className="create-user-label">Enter your address:</label>
          <input
            className="create-user-input"
            type="text"
            placeholder="Enter your address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        {/* Only Reset Button */}
        <div className="create-user-buttons">
          <button className="create-user-submit" type="submit" disabled={loading}>
            Submit
          </button>
          <button type="button" className="reset-button" onClick={resetForm}>
            Reset
          </button>
        </div>
      </form>

      {loading && <div className="loading-spinner"></div>}
    </div>
  );
};

export default Createuser;
