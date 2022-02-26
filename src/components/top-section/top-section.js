import React from "react";
import Lottie from "react-lottie";
import * as animationData from "../../components/lotties/top-section-1.json";

const Top_Section = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <React.Fragment>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light bg-transparent"
        id="gtco-main-nav"
      >
        <div className="container">
          <a className="navbar-brand">Alecta SoftTech</a>
          <button className="navbar-toggler">
            <span className="bar1"></span> <span className="bar2"></span>
            <span className="bar3"></span>
          </button>
          <div id="my-nav" className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
             {/*  <li className="nav-item">
                <a className="nav-link" href="#news">
                  News
                </a>
              </li> */}
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
            {/*  <form className="form-inline my-2 my-lg-0">
              <a
                href="#"
                className="btn btn-outline-dark my-2 my-sm-0 mr-3 text-uppercase"
              >
                login
              </a>
              <a href="#" className="btn btn-info my-2 my-sm-0 text-uppercase">
                sign up
              </a>
            </form> */}
          </div>
        </div>
      </nav>
      <div className="container-fluid gtco-banner-area">
        <div className="container">
          <div className="row">
            <div className="col-md-5 text-bottom">
              <h1>
                We promise to bring the best <span>solution</span> for your
                business.
              </h1>
              <p>
                We are committed to Deliver the best Quality IT Products with
                Passion.
              </p>
              <a href="#">
                Contact Us{" "}
                <i className="fa fa-angle-right" aria-hidden="true"></i>
              </a>
            </div>
            <div className="col-md-7">
              <div className="card">
                {/*     <img
                  className="card-img-top img-fluid"
                  src="/images/banner-img.png"
                  alt=""
                /> */}
                <Lottie options={defaultOptions} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Top_Section;
