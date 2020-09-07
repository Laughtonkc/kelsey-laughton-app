import React from 'react';
import './App.css';
import Image from "./Under-Constructions.png";

function App() {
  return (
    <div className="App">
      <header className="Kelsey Laughton">
        <p className="coming">
        Coming soon...
        </p>
        <img src={Image} alt="Construction" className="image"/>

      </header>
    </div>
  );
}

export default App;
