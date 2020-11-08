import React from 'react';
import './App.css';
import Mainphoto from "./Mainphoto";
import Aboutme from "./Aboutme";
import Carousel from "./Carousel";
import Calltoaction from "./Calltoaction";

function App() {
  return (
    <div className="App">
      <div classname="container-fluid">
        <header className="Kelsey Laughton">
          <div>
            <nav
              className="navbar border-bottom fixed-top expand-lg responsive-nav"
              id="header-bar"
            >
              <a className="navbar-brand" id="logo" href="/">
                Kelsey Laughton
              </a>

              <ul className="nav justify-content-end">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    id="nav-bar-links-one"
                    href="https://laughtonkelsey.myportfolio.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Portfolio
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" id="nav-bar-links-two" 
                  href="https://documentcloud.adobe.com/link/track?uri=urn:aaid:scds:US:d5351553-832b-4f05-86fc-6e0f3bf6649a"
                  target="_blank"
                  rel="noopener noreferrer">
                    Resume
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="nav-bar-links-three"
                    href="mailto:hellokelseylaughton@gmail.com?subject=Hello, Kelsey!"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <Mainphoto />
          <Aboutme />
          <Carousel />
          <Calltoaction />
        </header>
      </div>
    </div>
  );
}

export default App;
