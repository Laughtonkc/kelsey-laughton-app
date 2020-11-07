import React from "react";
import Mycalltoaction from "./Mycalltoaction.png";
import "./Calltoaction.css";

export default function Calltoaction() {
  return (
    <div>
      <div className="row">
        <img
          id="My-call-to-action"
          ClassName="card-img"
          src={Mycalltoaction}
          alt="call to action"
          className="img-fluid"
          width="900"
          height="700"
        />
        <div className="card-img-overlay">
          <div className="col-10">
            <p className="card-text" id="ending-card-text">
              The quick, brown fox jumps over a lazy dog. DJs flock by when MTV
              ax quiz prog.
            </p>
          </div>
          <div className="col-2">
            <a
              className="nav-link"
              id="nav-bar-links-three"
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
  );
}