import React from "react";
import Heroimage from "./Heroimage.png";
import "./Mainphoto.css";
import Dots from "./Dots.png";
import Typewriter from "react-simple-typewriter";

export default function Mainphoto() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-sm-6" id="intro">
            <div className="content-wrapper">
              <div className="text-wrapper">
                <p>Hi, I am </p>
                <h5 id="my-name">Kelsey Laughton</h5>
                <div className="App">
                  <h1
                    style={{
                      paddingTop: "0rem",
                      margin: "auto 0",
                      fontWeight: "normal",
                    }}
                  >
                  </h1>
                  <p>
                    I am a{" "}
                    <span
                      id="typewriter"
                      style={{ color: "#011638", fontWeight: "bold" }}
                    >
                      <Typewriter
                        loop
                        cursor
                        cursorStyle="|"
                        typeSpeed={90}
                        deleteSpeed={50}
                        delaySpeed={2000}
                        words={[
                          "UX Designer",
                          "UI Designer",
                          "React Developer",
                          "UX Researcher",
                        ]}
                      />
                    </span>
                    <br />
                    with a masters degree in behavioral psychology and a passion
                    for making digital products which are rooted in user-centric
                    experience and informed by user research.
                  </p>
                  <img className="pl-3" src={Dots} id="dots" alt="dots" />
                  <br />
                  <a
                    href="mailto:hellokelseylaughton@gmail.com?subject=Hello, Kelsey!"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button
                      type="button"
                      className="btn-primary btn-lg"
                      id="lets-chat"
                    >
                      Let's Chat
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mx-auto">
            <img
              id="hero-photo"
              className="img-responsive d-none d-lg-block"
              src={Heroimage}
              alt="Hero"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
