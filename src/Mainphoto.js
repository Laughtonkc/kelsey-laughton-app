import React from "react";
import Heroimage from "./Heroimage.png";
import Profile from "./Profile";
import "./Mainphoto.css"

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
          <p className="card-text">
            I am a UX designer with a master in behaviour psychology. I also
            specialize in UI design and web development
          </p>
          <div className="button-header">
            <a
              href="href=mailto:hellokelseylaughton@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
            <button className="card-button">
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
