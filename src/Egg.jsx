import React from "react";
import HalfBoil from "./HalfBoil";

function Egg ({ need }) {
  return (
    <div>
      <h3>Egg</h3>
      <HalfBoil need={need} />
    </div>
  );
};

export default Egg;