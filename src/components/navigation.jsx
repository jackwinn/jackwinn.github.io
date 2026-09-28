import { Link, useLocation } from "react-router-dom";
import VersaTechLogo from "../assets/logo/logo-with-white-text.svg";
import VersaTechLogoFallback from "../assets/logo/logo.png";

export const Navigation = (props) => {
  const { pathname } = useLocation();
  const sectionHref = (hash) => (pathname === "/" ? hash : `/${hash}`);
  const isTeamPage = pathname.startsWith("/meet-the-team");

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <Link className="navbar-brand page-scroll" to="/">
            <img
              src={VersaTechLogo}
              alt="VersatechMS Logo"
              className="navbar-logo"
              onError={(e) => {
                e.currentTarget.src = VersaTechLogoFallback;
              }}
            />
          </Link>
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href={sectionHref("#about")} className="page-scroll">
                About
              </a>
            </li>
            <li>
              <a href={sectionHref("#mission-vision")} className="page-scroll">
                Mission & Vision
              </a>
            </li>
            <li>
              <a href={sectionHref("#services")} className="page-scroll">
                Services
              </a>
            </li>
            <li className={isTeamPage ? "route-active" : undefined}>
              <Link to="/meet-the-team">Meet The Team</Link>
            </li>
            <li>
              <a href={sectionHref("#contact")} className="page-scroll">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
