import React from "react";
import Aboutimage from "./Aboutimage.png";
import "./Aboutme.css";

import Dots1 from "./Dots1.png";

export default function Aboutme () {
    return (
      <div className="container-fluid">
        <img
          id="about-photo"
          ClassName="mx-auto"
          src={Aboutimage}
          alt="About me"
          className="img-fluid"
         
        />
        <div id="about-me-card" className="content-wrapper">
        <h5 id="header" className="text-wrapper">
            About me
          </h5>
          <p id="about-me-text" className="text-wrapper">
            Who am I, you wonder?
            <br />
            The root of my passion is always human behavior. 
            I love to pair my array of skills with my overall 
            dedication to create products which always have  
            one thing in mind: The user. 
          </p>
          <img
          id="dots1"
          src={Dots1}
          alt="dots"
          />
          <br />
         <a 
            href="https://laughtonkelsey.myportfolio.com"
            target="_blank"
            rel="noopener noreferrer" 
         >
            <button 
            type="button" 
            id="portfolio" 
             >
              Portfolio 
              </button>
          </a>
          
          <a
            href="https://documentcloud.adobe.com/link/track?uri=urn:aaid:scds:US:a1b1052f-d077-4aae-b207-8644b0b2e3bc"
            target="_blank"
            rel="noopener noreferrer">
          <button id="resume">
            Resume
          </button>
          </a>
        </div>
        
      </div>
    );
}