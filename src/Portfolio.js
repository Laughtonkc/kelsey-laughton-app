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
          <div className="row row-cols-2 row-cols-md-2">
            <div className="col mb-4">
              <a
                href="https://laughtonkelsey.myportfolio.com/vida-care-uk"
                target="_blank"
                rel="noopener noreferrer"
              >
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
            <div className="col mb-4">
              <a
                href="https://laughtonkelsey.myportfolio.com/cityfalcon-1"
                target="_blank"
                rel="noopener noreferrer"
              >
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
            
            <div className="w-100">
            <div className="col mb-4">
              <a
                href="https://laughtonkelsey.myportfolio.com/perfect-properties-1"
                target="_blank"
                rel="noopener noreferrer"
              >
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
            </div>
            <div className="col mb-4">
              <a
                href="https://laughtonkelsey.myportfolio.com/adulting-101"
                target="_blank"
                rel="noopener noreferrer"
              >
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
