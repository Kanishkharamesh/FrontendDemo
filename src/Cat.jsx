import { useState } from "react";

function Cat() {
  const [change, setChange] = useState("Kani"); 
  return (
    <div className="text1">
      <form>
        <label>Default Name:</label>
        <input type="text" value={change}   />
        <label>Change Name:</label>
        <input type="text"  placeholder="Enter new name" onChange={(e) => setChange(e.target.value)}  />  
      </form>
    </div>
  );
}

export default Cat;