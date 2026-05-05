import React from "react";
import IntroBgHalf from "../assets/header/intro-bg-half.png";   

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-12 intro-text">
                {/* col-md-offset-2 */}
                <h1>
                  <span>Transforming Document Control</span>
                </h1>
                <h1>Into Project Confidence</h1>
                <div className="intro-text-content">
                  <p>
                    We help project teams implement efficient document systems,
                  </p>
                  <p>improve colloration, and ensure audit-ready compliance.</p>
                </div>
                <a
                  href="#services"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Our Services
                </a>
                {/* <a
                  href="#features"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Learn More
                </a>{" "} */}
              </div>
            </div>
          </div>
        </div>
        <img src={IntroBgHalf} alt="Intro Background" className="intro-bg-half" />
      </div>
    </header>
  );
};
