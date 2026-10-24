import Document from "../assets/services/document.svg";
import Support from "../assets/services/support.svg";
import Subscription from "../assets/services/subscription.svg";
import Strategy from "../assets/services/strategy.svg";
import System from "../assets/services/system.svg";
import Training from "../assets/services/training.svg";

const ServicePage = () => {
  return (
    <>
      <header id="services-header">
        <div className="intro">
          <div className="overlay">
            <div className="container">
              <div className="row">
                <div className="col-md-10 about-us-text-container">
                  <h1>
                    <span>Our Services</span>
                  </h1>
                  <div className="intro-text-content">
                    <p>
                      Tailor document control and project management solutions
                      to support your project from start to finish.
                    </p>
                  </div>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div id="services" className="services-page">
        <div className="container">
          {/* <div className="section-title">
            <h2>Our Services</h2>
          </div> */}
          <div className="row">
            <div className="col-md-12">
              <div className="service-card">
                <img
                  src={System}
                  className="service-icon"
                  alt=""
                  aria-hidden="true"
                />
                <div className="service-desc">
                  <h2>System Design & Implementation</h2>
                  <p>
                    Configure document management platforms, set up access
                    controls, versioning, and automation workflows.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="service-card">
                <img
                  src={Document}
                  className="service-icon"
                  alt=""
                  aria-hidden="true"
                />
                <div className="service-desc">
                  <h2>Document Audit & Assessment</h2>
                  <p>
                    Review existing systems/workflows, identify inefficiencies
                    and compliance risks.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="service-card">
                <img
                  src={Strategy}
                  className="service-icon"
                  alt=""
                  aria-hidden="true"
                />
                <div className="service-desc">
                  <h2>Strategy & Framework Development</h2>
                  <p>
                    Design custom document management strategies, taxonomy,
                    metadata standards, and retention policies.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="service-card">
                <img
                  src={Training}
                  className="service-icon"
                  alt=""
                  aria-hidden="true"
                />
                <div className="service-desc">
                  <h2>Training & Change Management</h2>
                  <p>
                    Conduct staff training sessions, provide user manuals and
                    onboarding support.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="service-card">
                <img
                  src={Support}
                  className="service-icon"
                  alt=""
                  aria-hidden="true"
                />
                <div className="service-desc">
                  <h2>Ongoing Support & Optimization</h2>
                  <p>
                    Monthly audits/performance reviews, and continuous
                    improvement recommendations.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="service-card">
                <img
                  src={Subscription}
                  className="service-icon"
                  alt=""
                  aria-hidden="true"
                />
                <div className="service-desc">
                  <h2>Subscription & Retainer Options</h2>
                  <p>
                    Flexible monthly plans and tiered packages for ongoing
                    consultancy and support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicePage;
