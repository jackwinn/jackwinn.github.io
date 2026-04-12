import React from "react";
import wanie from "../assets/team/Wanie.png";
import nuraini from "../assets/team/Nur Aini.jpg";
import wilma from "../assets/team/Wilma Binti James.jpeg";

/** Keys must match `img` in data.json; files live under src/assets/team (webpack bundles them). */
const TEAM_IMAGES = {
  wanie,
  nuraini,
  wilma,
};

export const Team = (props) => {
  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Meet the Team</h2>
          {/* <p></p> */}
        </div>

        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div
                  className="row"
                  key={`${d.name}-${i}`}
                  style={{ marginBottom: "20px" }}
                >
                  {/* Left column: Image + name + job */}
                  <div className="col-md-6 col-sm-6 team">
                    <div className="thumbnail">
                      <img
                        src={d.img ? TEAM_IMAGES[d.img] || d.img : ""}
                        alt={d.name}
                        className="team-img"
                      />
                      <p>{d.name}</p>
                      <p>{d.job}</p>
                    </div>
                  </div>

                  {/* Right column: Summary */}
                  <div className="col-md-6 col-sm-6 team">
                    <p>{d.summary}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
