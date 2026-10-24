import Mission from "../assets/about/mission.svg";
import Vision from "../assets/about/vision.svg";
import Accuracy from "../assets/about/accuracy.svg";
import Integrity from "../assets/about/integrity.svg";
import Innovation from "../assets/about/innovation.svg";
import Continuous from "../assets/about/continuous.svg";

const AboutPage = () => {
  return (
    <>
      <header id="about-us-header">
        <div className="intro">
          <div className="overlay">
            <div className="container">
              <div className="row">
                <div className="col-md-10 about-us-text-container">
                  <h1>
                    <span>About Versatech</span>
                  </h1>
                  <div className="intro-text-content">
                    <p>
                      Versatech Management Solution is a specialized consultancy
                      providing professional services in document control
                      systems, construction digital platforms, and compliance
                      readiness for construction and infrastructure projects. We
                      help organizations strengthen document governance
                      frameworks, implement effective digital collaboration
                      environments, and align project processes with recognized
                      industry standards.
                    </p>
                  </div>
                  <br />
                  <div className="intro-text-content">
                    <p>
                      Through structured methodologies and practical
                      implementation strategies, Versatech enables project teams
                      to improve transparency, sistency, and control over
                      project information. Our solutions enhance document
                      accuracy, support stakeholder coordination, and help
                      maintain audit-ready project environments, allowing
                      organizations to manage project information with
                      confidence and efficiency.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main id="mission-vision">
        <div className="about-page-content">
          <section className="mission-vision-section">
            <h2>Our Mission &amp; Vision</h2>

            <div className="mission-vision-grid">
              <article className="mission-vision-card">
                <img src={Mission} alt="" className="mission-vision-icon" />
                <div>
                  <h3>Mission</h3>
                  <p>
                    To empower continuous improvement by guiding organizations
                    in adopting effective digital solutions and best practices.
                    We support our clients in enhancing operational efficiency,
                    ensuring compliance with international standards, and
                    building resilient systems that enable sustainable
                    long-term success.
                  </p>
                </div>
              </article>

              <article className="mission-vision-card">
                <img src={Vision} alt="" className="mission-vision-icon" />
                <div>
                  <h3>Vision</h3>
                  <p>
                    To be a leading global consultancy that transforms
                    organizational performance through innovative,
                    standards-aligned solutions in document control, project
                    governance, and quality management.
                  </p>
                </div>
              </article>
            </div>
          </section>

          <section className="philosophy-section">
            <h2>Our Philosophy</h2>

            <div className="philosophy-grid">
              <div className="philosophy-item">
                <img src={Accuracy} alt="" />
                <h3>Accuracy</h3>
              </div>
              <div className="philosophy-item">
                <img src={Integrity} alt="" />
                <h3>Integrity</h3>
              </div>
              <div className="philosophy-item">
                <img src={Innovation} alt="" />
                <h3>Innovation</h3>
              </div>
              <div className="philosophy-item">
                <img src={Continuous} alt="" />
                <h3>Continuous Improvement</h3>
              </div>
            </div>

            <p className="philosophy-description">
              At Versatech Management Consultancy, we believe strong performance
              comes from accuracy, integrity, and innovation, supported by
              effective document control, quality management, and digital
              transformation. We focus on continuous improvement and tailored
              solutions aligned with international standards to deliver clear
              processes, measurable results, and lasting value.
            </p>
          </section>
        </div>
      </main>
    </>
  );
};

export default AboutPage;
