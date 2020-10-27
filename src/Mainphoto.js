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
          <h5 id="my-name" className="card-title">
            Kelsey Laughton
          </h5>
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <button id="contact" className="card-button">
            Lets Chat
          </button>
        </div>
        <Profile />
      </div>
    );
}
