import React, { useState } from 'react';

function AddNumbers() {
  // State to store the values of the two numbers
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');

  // Calculate the sum when both numbers are provided
  const sum = Number(num1) + Number(num2);

  return (
    <div>
      <label>
        Enter Number 1:
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}  // Update num1 on change
        />
      </label>
      <br />
      <label>
        Enter Number 2:
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}  // Update num2 on change
        />
      </label>
      <br />
      {/* Display the sum if both numbers are entered */}
      {num1 && num2 && (
        <h2>Sum of {num1} and {num2} is: {sum}</h2>
      )}
    </div>
  );
}

export default AddNumbers;