import React from "react";
import Vision from "../assets/mission-vission/vision.svg";
import Mission from "../assets/mission-vission/mission.svg";

export const MissionVision = (props) => {
  return (
    <div id="mission-vision" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Our Mission & Vision</h2>
        </div>
        <div className="row">
          <div className="col-xs-12 col-md-6 element">
            {" "}
            <img src={Mission} className="mission-icon" />
            <h2 className="mission-title">Mission</h2>
            <p className="mission-text">
              To empower continuous improvement by guiding organizations in
              adopting effective digital solutions and best practices. We
              support our clients in enhancing operational efficiency, ensuring
              compliance with international standards, and building resilient
              systems that enable sustainable long-term success.
            </p>
          </div>
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src={Vision} className="vision-icon" />
            <h2 className="vision-title">Vision</h2>
            <p className="vision-text">
              To be a leading global consultancy that transforms organizational
              performance through innovative, standards-aligned solutions in
              document control, project governance, and quality management.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
