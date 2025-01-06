/* import React from "react";
import Egg from "./Egg";

function Hen({ need }){
  return (
    <div>
      <h2>Hen</h2>
      <Egg need={need} />
    </div>
  );
};

export default Hen; */

import React from "react";
import Stomach from "./Stomach";

const Hen = ({ need, color }) => {
  return (
    <div>
      <h2>Hen Component</h2>
      <Stomach need={need} color={color} />
    </div>
  );
};

export default Hen;
