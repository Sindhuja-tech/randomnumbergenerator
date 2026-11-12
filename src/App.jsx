import { useState } from 'react';
import './App.css';

function App() {
  const [randomNumber, setRandomNumber] = useState(null);

  const generateNumber = () => {
    // Generates a random number between 1 and 100
    const newNum = Math.floor(Math.random() * 100) + 1;
    setRandomNumber(newNum);
  };

  return (
    <div className="generator-container">
      <div className="generator-card">
        <h1>Random Number Generator</h1>
        
        <div className="number-display">
          {/* Conditional rendering for before and after clicking */}
          {randomNumber === null ? (
            <p className="placeholder-text">“No number generated yet”</p>
          ) : (
            <span className="number-value">{randomNumber}</span>
          )}
        </div>

        <button onClick={generateNumber} className="btn-generate">
          Generate Random Number
        </button>
      </div>
    </div>
  );
}

export default App;