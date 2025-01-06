import React from "react";
import Stomach from "./Stomach";

function HalfBoil ({ need }){
  return (
    <div>
      <h4>HalfBoil</h4>
      <Stomach need={need} />
    </div>
  );
};

export default HalfBoil;