import React from "react";
import Wanie from "../assets/team/wanie.png";
import Wilma from "../assets/team/wilma.webp";
import Nurul from "../assets/team/nurul.webp";
import Afiqah from "../assets/team/afiqah.webp";

export const Team = (props) => {
  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Meet the Team</h2>
        </div>

        <div className="row" style={{ marginBottom: "40px" }}>
          <div className="col-md-6 col-sm-6">
            <img src={Wanie} className="team-founder-img" />
          </div>
          <div className="col-md-6 col-sm-6 team-founder-content">
            <h2 className="team-founder-name">Zawani Binti Ag Hashim</h2>
            <h3 className="team-founder-job">Founder / Director</h3>
            <p className="team-founder-summary">
              Specialist in architecting, implementing, and auditing Electronic
              Document Management Systems (EDMS) and project quality frameworks,
              enabling efficient information flow, compliance, and operational
              excellence across complex, multi-stakeholder environments.
              Experienced in delivering ISO-aligned documentation systems for
              high-profile projects, including TRX Mall and mission-critical
              Data Centres.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4 col-sm-4">
            <img src={Wilma} className="team-member-img" />
            <h3 className="team-member-name">Wilma Binti James</h3>
            <p className="team-member-job">Document Controller</p>
          </div>
          <div className="col-md-4 col-sm-4">
            <img src={Nurul} className="team-member-img" />
            <h3 className="team-member-name">Wilma Binti James</h3>
            <p className="team-member-job">Document Controller</p>
          </div>
          <div className="col-md-4 col-sm-4">
            <img src={Afiqah} className="team-member-img" />
            <h3 className="team-member-name">Wilma Binti James</h3>
            <p className="team-member-job">Document Controller</p>
          </div>
        </div>
      </div>
    </div>
  );
};
