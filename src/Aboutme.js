import React from "react";
import "./Aboutme.css";
import Dots1 from "./Dots1.png";

export default function Aboutme () {
    return (
      <div className="container-fluid">
        <h5 id="header" >
            About me
          </h5>
          <p id="about-text">
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
            id="portfolio-bnt" 
             >
              Portfolio 
              </button>
          </a>
          
          <a
            href="https://documentcloud.adobe.com/link/track?uri=urn:aaid:scds:US:a1b1052f-d077-4aae-b207-8644b0b2e3bc"
            target="_blank"
            rel="noopener noreferrer">
          <button id="resume-bnt">
            Resume
          </button>
          </a>
      </div>
    );
}