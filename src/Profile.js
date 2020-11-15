import React from "react";
import Iconone from "./Iconone.png";
import Icontwo from "./Icontwo.png";
import Iconthree from "./Iconthree.png";
import Iconfour from "./Iconfour.png";
import "./Profile.css";




export default function Profile() {
    return (
      <div className="container">
        <h1 id="profile-heading">What I Do</h1>
          <div className="row row-experience">
            <div className="col-sm-3">
              <div id="ux-design">
                <ul id="list-for-profile">
                  <li>
                    <img
                      src={Iconone}
                      id="icon"
                      className="img-fluid"
                      width="90"
                      height="90"
                      alt="ux design"
                      align="center"
                    />
                  <h4 id="header-list"> UX Design </h4>
                    <p id="body-info">
                      My first love and introduction to technology, I use my background in behavioural psychology to connect with all my designs.  
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-sm-3">
              <div id="ux-design">
              <ul id="list-for-profile">
                  <li>
                    <img
                      src={Icontwo}
                      id="icon"
                      className="img-fluid"
                      width="90"
                      height="90"
                      alt="ui design"
                    />
                  <h4 id="header-list"> UI Design </h4>
                  <p id="body-info">
                      Creating user-friendly wireframes isn’t complete with an overlay of beautiful, thoughtful design that will draw the eye of any user. 
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-sm-3">
              <div id="ux-design">
              <ul id="list-for-profile">
                  <li>
                    <img
                      src={Iconthree}
                      id="icon"
                      className="img-fluid"
                      width="90"
                      height="90"
                      alt="react developer"
                    />
                    <h4 id="header-list"> React Developer </h4>
                  <p id="body-info">
                      Implementing my impactful designs using a variety of web-development languages, such as HTML, CSS, JavaScript & React.js.
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-sm-3">
              <div id="ux-design">
              <ul id="list-for-profile">
                  <li>
                    <img
                      src={Iconfour}
                      id="icon"
                      className="img-fluid"
                      width="90"
                      height="90"
                      alt="ux research"
                    />
                  <h4 id="header-list"> UX Research </h4>
                  <p id="body-info">
                      User research is at the heart of my designs. Using psychology research methods, with statistics and user-data for all projects.  
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
    );
}