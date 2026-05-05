// import React from "react";

export const About = (props) => {
  console.log(props);
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          {/* <div className="col-xs-12 col-md-12">
            {" "}
            <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
          </div> */}
          <div className="col-xs-12 col-md-12">
            <div className="about-text">
              <h2>About Us</h2>
              <p>
                <span className="company-name-in-paragraph">
                  Versatech Management Solution{" "}
                </span>
                is a specialized consultancy providing professional services in
                document control systems, construction digital platforms, and
                compliance readiness for construction and infrastructure
                projects. We help organizations strengthen document governance
                frameworks, implement effective digital collaboration
                environments, and align project processes with recognized
                industry standards.
              </p>
              <p>
                Through structured methodologies and practical implementation
                strategies, Versatech enables project teams to improve
                transparency, sistency, and control over project information.
                Our solutions enhance document accuracy, support stakeholder
                coordination, and help maintain audit-ready project
                environments, allowing organizations to manage project
                information with confidence and efficiency.
              </p>
              <h2>Our Philosophy</h2>
              <p>
                At{" "}
                <span className="company-name-in-paragraph">
                  Versatech Management Consultancy
                </span>
                , we believe strong performance comes from accuracy, integrity, and innovation, supported by effective document control, quality management, and digital transformation. We focus on continuous improvement and tailored solutions aligned with international
                standards to deliver clear processes, measurable results, and lasting value.
              </p>
              {/* <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}> {d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
