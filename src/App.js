import React from 'react';
import './App.css';
import Mainphoto from "./Mainphoto";
import Profile from "./Profile";
import Aboutme from "./Aboutme";
import Portfolio from "./Portfolio";
import Carousel from "./Carousel";
import Calltoaction from "./Calltoaction";

function App() {
  return (
    <div className="App">
      <div>
        <header className="Kelsey Laughton">
        <div classname="container-fluid">
            <nav
              className="navbar navbar-expand-lg border-bottom fixed-top navbar-light"
              id="header-bar"
            >
              <a className="navbar-brand" id="logo" href="/">
                Kelsey Laughton
              </a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
              <div class="justify-content-end collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                  <a
                    className="nav-link"
                    id="nav-bar-links-one"
                    href="https://laughtonkelsey.myportfolio.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                  <span class="sr-only">(current)</span>
                    Portfolio
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" id="nav-bar-links-two" 
                      href="https://documentcloud.adobe.com/link/track?uri=urn:aaid:scds:US:a1b1052f-d077-4aae-b207-8644b0b2e3bc"
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
                </div>
            </nav>
          </div>
          <Mainphoto />
          <Profile />
          <Aboutme />
          <Portfolio />
          <Carousel />
          <Calltoaction />
        </header>
      </div>
    </div>
  );
}

export default App;
