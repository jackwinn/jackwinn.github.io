import React from "react";
import Document from "../assets/services/document.svg";
import Support from "../assets/services/support.svg";
import Subscription from "../assets/services/subscription.svg";
import Strategy from "../assets/services/strategy.svg";
import System from "../assets/services/system.svg";
import Training from "../assets/services/training.svg";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
        </div>
        <div className="row">
          <div className="col-md-4">
            {" "}
            <div className="service-card">
              <img src={System} className="service-icon"></img>
              <div className="service-desc">
                <h3>System Design & Implementation</h3>
                <p>
                  Configure document management platforms, set up access
                  controls, versioning, and automation workflows
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            {" "}
            <div className="service-card">
              <img src={Document} className="service-icon"></img>
              <div className="service-desc">
                <h3>Document Audit & Assessment</h3>
                <p>
                  Review existing systems/workflows, identify inefficiencies and
                  compliance risks
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            {" "}
            <div className="service-card">
              <img src={Strategy} className="service-icon"></img>
              <div className="service-desc">
                <h3>Strategy & Framework Development</h3>
                <p>
                  Design custom document management strategies taxonomy,
                  metadata standards, and retention policies
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            {" "}
            <div className="service-card">
              <img src={Training} className="service-icon"></img>
              <div className="service-desc">
                <h3>Training & Change Management</h3>
                <p>
                  Conduct staff training sessions, provide user manuals and
                  onboarding support
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            {" "}
            <div className="service-card">
              <img src={Support} className="service-icon"></img>
              <div className="service-desc">
                <h3>Ongoing Support & Optimization</h3>
                <p>
                  Monthly audits/performance reviews, and continuous improvement
                  recommendations
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            {" "}
            <div className="service-card">
              <img src={Subscription} className="service-icon"></img>
              <div className="service-desc">
                <h3>Subscription & Retainer Options</h3>
                <p>
                  Flexible monthly plans and tiered packages for ongoing
                  consultancy and support
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
