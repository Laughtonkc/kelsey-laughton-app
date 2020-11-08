import React from "react";
import Aboutimage from "./Aboutimage.png";
import "./Aboutme.css";
import Portfolio from "./Portfolio";

export default function Aboutme () {
    return (
      <div>
        <img
          id="about-photo"
          ClassName="card-img"
          src={Aboutimage}
          alt="About me"
          className="img-fluid"
          width="1440"
          height="680"
        />
        <div className="card-img-overlay" id="about-me-card">
          <h5 id="header" className="card-title">
            About me
          </h5>
          <p className="card-text" id="about-me-text">
            Who am I, you wonder?
            <br />
            The root of my passion is always human behaviour. 
            I love to pair my array of skills with my overall 
            dedication to create products which always have  
            one thing in mind: The user. 
          </p>

          <a
            href="https://laughtonkelsey.myportfolio.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button id="portfolio" className="card-button">
              Portfolio </button>
            </a>
          
          <a
            href="https://documentcloud.adobe.com/link/track?uri=urn:aaid:scds:US:d5351553-832b-4f05-86fc-6e0f3bf6649a"
            target="_blank"
            rel="noopener noreferrer">
          <button id="resume" className="card-button">
            Resume
          </button>
          </a>
        </div>
        <Portfolio />
      </div>
    );
}