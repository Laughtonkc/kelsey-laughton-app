import React from "react";
import Vidacover from "./Vidacover.png";
import Cityfalcon from "./Cityfalcon.png";
import Perfectproperties from "./Perfectproperties.png";
import Adulting101 from "./Adulting101.png";
import "./Portfolio.css";


export default function Portfolio() {
  return (
    <div>
      <div className="title">
        <h1 id="title">My Latest Work</h1>

        <div className="container">
          <div className="row">
            <div className="col">
              <a href="/">
                <img
                  id="Vida-cover"
                  ClassName="card-img"
                  src={Vidacover}
                  alt="Vida Cover"
                  className="img-fluid"
                  width="370"
                  height="370"
                />
              </a>
            </div>
            <div className="col">
              <a href="/">
                <img
                  id="Cityfalcon-cover"
                  ClassName="card-img"
                  src={Cityfalcon}
                  alt="City Falcon"
                  className="img-fluid"
                  width="370"
                  height="370"
                />
              </a>
            </div>
            <div className="w-100"></div>
            <div className="col">
              <a href="/">
                <img
                  id="Perfect-properties-cover"
                  ClassName="card-img"
                  src={Perfectproperties}
                  alt="Perfect properties"
                  className="img-fluid"
                  width="370"
                  height="370"
                />
              </a>
            </div>
            <div className="col">
              <a href="/">
                <img
                  id="Adulting-101-cover"
                  ClassName="card-img"
                  src={Adulting101}
                  alt="Adulting 101"
                  className="img-fluid"
                  width="370"
                  height="370"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
