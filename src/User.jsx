/* import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const buttonStyle = {
  margin: "5px",
  padding: "10px 15px",
  cursor: "pointer",
  backgroundColor: "black",
  color: "white",
  border: "none",
  borderRadius: "5px",
  fontSize: "14px",
};
const User = () => {
  const [user] = useState({
    name: "Kanishkha",
    email: "kanishkharamesh@gmail.com",
    address: "Salem"
  });
  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <h2>User Page</h2>
      <Link to="/create-user">
        <button style={buttonStyle}>
          Create User
        </button>
      </Link>
      <table
        border="1"
        style={{
          borderCollapse: "collapse",
          width: "70%",
          margin: "20px auto",
          textAlign: "center",
        }}
      >
        <thead>
          <tr>
            <th style={{ padding: "10px" }}>Name</th>
            <th style={{ padding: "10px" }}>Email</th>
            <th style={{ padding: "10px" }}>Address</th>
            <th style={{ padding: "10px" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: "10px" }}>{user.name}</td>
            <td style={{ padding: "10px" }}>{user.email}</td>
            <td style={{ padding: "10px" }}>{user.address}</td>
            <td style={{ padding: "10px" }}>
              <Link to="/delete-user">
                <button style={buttonStyle}>
                  Delete User
                </button>
              </Link>
              <Link to="/update-user">
                <button style={buttonStyle}>
                  Update User
                </button>
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default User; */

/* import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const User = () => {
    const [user, setUser] = useState([]);

    useEffect(() => {
        axios
            .get('https://backenddemo-sa11.onrender.com/api/user/fetch')
            .then((res) => {
                console.log(res.data);
                setUser(res.data.data); // Use res.data.data based on the response structure
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div>
            <Link to="/create">Createuser</Link>
            <table border={1} style={{ width: "100%" }}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user.map((users) => (
                            <tr key={users.id}>
                                <td>{users.name}</td>
                                <td>{users.email}</td>
                                <td>{users.address}</td>
                                <td>
                                    <Link to={`/update/${users.id}`}>update</Link>
                                </td>
                            </tr>
                        ))
                    }

                </tbody>

            </table>
        </div>
    );
};
export default User; */
// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import UpdateUser from "./Updateuser";
// const User = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:3000/api/user/fetch")
//       .then((res) => {
//         console.log(res.data);
//         setUsers(res.data.data); // Assuming the API returns data in res.data.data
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);

//   const deleteUser = (id) => {
//     if (window.confirm("Are you sure you want to delete this user?")) {
//       axios
//         .delete(`http://localhost:3000/api/user/delete/${id}`)
//         .then(() => {
//           alert("User deleted successfully");
//           setUsers(users.filter((user) => user._id !== id)); // Update the UI after deletion
//         })
//         .catch((error) => {
//           console.log(error);
//           alert("Failed to delete user");
//         });
//     }
//   };
  

//   return (
//     <div>
//       <Link to="/create">Create User</Link>
//       <table border={1} style={{ width: "100%" }}>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Address</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map((user) => (
//             <tr key={user._id}>
//               <td>{user.name}</td>
//               <td>{user.email}</td>
//               <td>{user.address}</td>
//               <td>
//             <Link to={`/update/${user._id}`}>Update</Link>
//               </td>
//               <td>
//                 <button onClick={() => deleteUser(user._id)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default User;


import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const User = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://backenddemo-sa11.onrender.com/api/user/fetch")
      .then((res) => {
        console.log(res.data);
        setUsers(res.data.data); // Assuming the API returns data in res.data.data
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const deleteUser = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      axios
        .delete(`https://backenddemo-sa11.onrender.com/api/user/delete/${id}`)
        .then(() => {
          alert("User deleted successfully");
          setUsers(users.filter((user) => user._id !== id)); // Update the UI after deletion
        })
        .catch((error) => {
          console.log(error);
          alert("Failed to delete user");
        });
    }
  };

  return (
    <div>
      <Link to="/create">Create User</Link>
      <table border={1} style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.address}</td>
              <td>
                <Link to={`/update/${user._id}`} style={{ marginRight: "10px" }}>
                  Update
                </Link>
                <button onClick={() => deleteUser(user._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default User;