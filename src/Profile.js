import React from "react";
import Iconone from "./Iconone.png";
import Icontwo from "./Icontwo.png";
import Iconthree from "./Iconthree.png";
import Iconfour from "./Iconfour.png";
import "./Profile.css";



export default function Profile() {
    return (
      <div>
        <h1 id="profile-heading">What I Do</h1>
        <div className="container">
          <div className="row row-experience">
            <div className="col-3">
              <div id="ux-design">
                <ul>
                  <li>
                    <img
                      src={Iconone}
                      id="icon-one"
                      className="img-fluid"
                      width="90"
                      height="90"
                      alt="ux design"
                      align="center"
                    />
                    <h4> UX Design </h4>
                    <p>
                      The quick brown fox went To the market so he could Fill
                      out this text box. The quick brown fox went To
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-3">
              <div id="ux-design">
                <ul>
                  <li>
                    <img
                      src={Icontwo}
                      id="icon-two"
                      className="img-fluid"
                      width="90"
                      height="90"
                      alt="ui design"
                    />
                    <h4> UI Design </h4>
                    <p>
                      The quick brown fox went To the market so he could Fill
                      out this text box. The quick brown fox went To
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-3">
              <div id="ux-design">
                <ul>
                  <li>
                    <img
                      src={Iconthree}
                      id="icon-three"
                      className="img-fluid"
                      width="90"
                      height="90"
                      alt="react developer"
                    />
                    <h4> React Developer </h4>
                    <p>
                      The quick brown fox went To the market so he could Fill
                      out this text box. The quick brown fox went To
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-3">
              <div id="ux-design">
                <ul>
                  <li>
                    <img
                      src={Iconfour}
                      id="icon-four"
                      className="img-fluid"
                      width="90"
                      height="90"
                      alt="ux research"
                    />
                    <h4> UX Research </h4>
                    <p>
                      The quick brown fox went To the market so he could Fill
                      out this text box. The quick brown fox went To
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}