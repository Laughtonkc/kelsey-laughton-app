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
            The quick brown fox went To the market so he could Fill out this
            text box and This one needs it even more so here were are The quick
            brown fox went To the market so he could Fill out this text box and
            This one needs it even.
          </p>
          <button id="portfolio" className="card-button">
            Portfolio
          </button>
          <button id="resume" className="card-button">
            Resume
          </button>
        </div>
        <Portfolio />
      </div>
    );
}