import React from "react";
import Mycalltoaction from "./Mycalltoaction.png";
import "./Calltoaction.css";
import Linkedin from "./Linkedin.png";
import Gmail from "./Gmail.png";
import Behance from "./Behance.png";
import Dribble from "./Dribble.png";


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
       
          <div className="col-10 content-wrapper">
            <div className="text-wrapper">
            <p id="ending-card-text">
              Have any projects in mind? 
              Then go ahead and press the button to message me! 
            </p>
          </div>
          <div className="col-2">
            <a
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
      <div className="container-fluid">
  <footer className="row">
<ul className="col-2">
<li id="footer-link-1">
  <a 
  id="port-link"
  href="https://laughtonkelsey.myportfolio.com/"
    target="_blank"
    rel="noopener noreferrer"> 
    Portfolio 
    </a>
  </li>
<li id="footer-link-2">
<a
 id="port-link"
href="https://documentcloud.adobe.com/link/track?uri=urn:aaid:scds:US:d5351553-832b-4f05-86fc-6e0f3bf6649a"
target="_blank"
rel="noopener noreferrer">
 Resume
</a>
  </li>
  <li id="footer-link-3">
  <a
  id="port-link"
              href="mailto:hellokelseylaughton@gmail.com?subject=Hello, Kelsey!"
  target="_blank"
  rel="noopener noreferrer">
  Contact
  </a>
  </li>
</ul>
<p className="col-2" id="footer-contact">
  Contact Me:
  <br />
<a
id="footer-email"
href="mailto:hellokelseylaughton@gmail.com?subject=Hello, Kelsey!"
target="_blank"
rel="noopener noreferrer">
hellokelseylaughton@gmail.com
</a>
 </p>

<div className="col-1" id="footer-linkedin">
  <a
  href="https://www.linkedin.com/in/kelsey-laughton/"
  target="_blank"
  rel="noopener noreferrer">
   <img 
   id="social-icon"
   src={Linkedin}
   alt="linkedin"
    />
    </a>
</div>
<div className="col-1" id="footer-gmail">
  <a
  href="mailto:hellokelseylaughton@gmail.com?subject=Hello, Kelsey!"
  target="_blank"
  rel="noopener noreferrer">
  <img
  id="social-icon"
  src={Gmail}
  alt="linkedin"
  />
</a>
</div>
  <div className="col-1" id="footer-behance">
  <a
  href="https://www.behance.net/laughtonkc"
  target="_blank"
  rel="noopener noreferrer">
  <img
  id="social-icon"
  src={Behance}
  alt="linkedin"
  />
  </a>
</div>
<div className="col-1" id="footer-dribble">
<a
  href="https://dribbble.com/kelsey-laughton"
  target="_blank"
  rel="noopener noreferrer">
<img
 id="social-icon"
 src={Dribble}
alt="linkedin"
/>
</a>
</div>
</footer>
      <p id="coder">
        This website is coded by &nbsp;
<a 
id="github"
href="https://github.com/Laughtonkc/kelsey-laughton-app"
target="_blank"
rel="noopener noreferrer">
Me!
</a>
</p> 
</div>
</div>
  );
}