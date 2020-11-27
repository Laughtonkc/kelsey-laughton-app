import React from "react";
import Mycalltoaction from "./Mycalltoaction.png";
import "./Calltoaction.css";



export default function Calltoaction() {
  return (
    <div>
    <div className="container">
      <div className="row">
        <img
          id="My-call-to-action"
          ClassName="card-img"
          src={Mycalltoaction}
          alt="call to action"
          className="img-fluid"
          
        />
       
          <div className="col-12 content-wrapper">
            <div className="text-wrapper">
            <p id="ending-card-text">
              Have any projects in mind? 
              Then go ahead and press the button to message me! 
            </p>
          </div>
          <div className="col-2">
            <a
            id="contact-me-button"
              href="mailto:hellokelseylaughton@gmail.com?subject=Hello, Kelsey!"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button id="lets-chat-two" classname="card-button">
                Contact Me
              </button>
            </a>
          </div>
          </div>
          </div>
          </div>
          </div>
      );
      }
  