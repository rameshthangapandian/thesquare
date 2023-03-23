import React, { useState } from 'react';
import './App.css';

function App() {

  const [userinput, setUserInput] = useState("");
  const [boxes, setBoxes] = useState([]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setUserInput(value);
    const numBoxes = value ** 2;
    const newBoxes = Array.from({ length: numBoxes }, (_, i) => i + 1);
    setBoxes(newBoxes);
  };

  const containerStyle = {
    display: "grid",
    gridTemplateColumns: `repeat(${userinput}, 1fr)`,
    gridTemplateRows: `repeat(${userinput}, 1fr)`,
    gridGap: "5px",
    marginTop: "10px",
  };

  const boxStyle = {
    width: "50px",
    height: "50px",
    border: "1px solid black",
    margin: "5px",
    boxSizing: "border-box",
    background: "burlywood"
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>The Square Box</h2>
        <p>
          Enter the number in the text box
        </p>
        <input type="number" className="e-input" value={userinput} onChange={handleInputChange} />
        <div style={containerStyle}>
        {boxes.map((box) => 
          <div key={box} style={boxStyle} />
        )}
        </div>
          </header>
    </div>
  );
}

export default App;
