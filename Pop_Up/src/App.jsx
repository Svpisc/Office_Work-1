import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputText, setInputText] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleButtonClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="App">
      <div className="input-container">
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          placeholder="Enter your text"
        />
        <button onClick={handleButtonClick}>Show Popup</button>
      </div>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={handleClosePopup}>
              &times;
            </span>
            <p>{inputText}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
