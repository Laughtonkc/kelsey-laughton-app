import React from "react";
import "./Carousel.css";
import Alpatestimony from "./Alpatestimony.png";
import Camtestimony from "./Camtestimony.png";
import Melissatestimony from "./Melissatestimony.png";
import Maxtestimony from "./Maxtestimony.png";

export default function Carousel() {
  return (
    <div className="container-fluid">
      <h1 id="heading">What My Colleagues & Clients Say</h1>
      <div
        id="carouselExampleControls"
        className="carousel slide mb-5"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              id="carousel"
              className="d-block w-100"
              src={Alpatestimony}
              alt="First slide"
            />
          </div>
          <div className="carousel-item">
            <img
              id="carousel"
              className="d-block w-100"
              src={Camtestimony}
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              id="carousel"
              className="d-block w-100"
              src={Melissatestimony}
              alt="Third slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src={Maxtestimony}
              alt="Third slide"
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon bg-dark"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon bg-dark"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}
