import React from "react";
import Heroimage from "./Heroimage.png";
import Profile from "./Profile";
import "./Mainphoto.css"
import Typewriter from "react-simple-typewriter";

export default function Mainphoto() {
    return (
      <div>
        <img
          id="hero-photo"
          ClassName="card-img"
          src={Heroimage}
          alt="Hero"
          className="img-fluid"
          width="1440"
          height="680"
        />
        <div className="card-img-overlay" id="intro">
          <p className="card-text">Hi, i am </p>
          <h5 className="card-title" id="my-name">
            Kelsey Laughton
          </h5>
          <div className="App">
      <h1
        style={{ paddingTop: "0rem", margin: "auto 0", fontWeight: "normal" }}
      >
      </h1>
          <p className="card-text">
            I am a {" "} 
              <span id="typewriter" style={{ color: "#011638", fontWeight: "bold" }}>
          <Typewriter
            loop
            cursor
            cursorStyle='|'
            typeSpeed={90}
            deleteSpeed={50}
            delaySpeed={2000}
            words={["UX Designer", "UI Designer", "React Developer", "UX Researcher"]}
          />
        </span>
              <br /> 
        with a master in behavioral psychology and a passion
        for making digital products which are rooted in user-centric experience and informed by user research.
        </p>
    </div>
          <div>
            <a
              href="https://laughtonkelsey.myportfolio.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button id="lets-chat-one" className="card-button">
                Let's Chat
              </button>
            </a>
          </div>
        </div>
        <div>
          <Profile />
        </div>
        </div>
    );
}
