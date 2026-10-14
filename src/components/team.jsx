import React from "react";
import Wanie from "../assets/team/wanie.webp";
import AinNabihah from "../assets/team/ain-nabihah-dc.webp";
import DangSuraya from "../assets/team/dang-suria-jr-dc.webp";
import IsmaIszre from "../assets/team/isma-iszre-dc.webp";
import KennySaw from "../assets/team/kenny-saw-jr-dc.webp";
import NorAlia from "../assets/team/nor-alia-dc.webp";
import NurHayani from "../assets/team/nur-hayani-dc.webp";
import NurZafirah from "../assets/team/nur-zafirah-dc.webp";
import NurHayatee from "../assets/team/nurhayatee-dc.webp";
import Rabiatut from "../assets/team/rabiatut-dc.webp";
import SitiHawa from "../assets/team/siti-hawa-dc-manager.webp";
import TengkuNur from "../assets/team/tengku-nur-dc.webp";
import NorAliya from "../assets/team/nor-aliya-dc.webp";
import NoorAffendy from "../assets/team/noor-affendy-sdc.webp";
import NurIzzahAtirah from "../assets/team/nur-izzah-atirah-dc.webp";

export const Team = (props) => {
  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-12 section-title">
          <h2>Meet the Team</h2>
        </div>

        <div className="row" style={{ marginBottom: "40px" }}>
          <div className="director-title">
            <h1>Founder</h1>
          </div>
          <div className="team-founder-container">
            <img src={Wanie} className="team-founder-img" alt="team member " />
            <div className="team-founder-content">
              <h2 className="team-founder-name">Zawani Binti Ag Hashim</h2>
              <h3 className="team-founder-job">Founder / Director</h3>
              <p className="team-founder-summary">
                Specialist in architecting, implementing, and auditing
                Electronic Document Management Systems (EDMS) and project
                quality frameworks, enabling efficient information flow,
                compliance, and operational excellence across complex,
                multi-stakeholder environments. Experienced in delivering
                ISO-aligned documentation systems for high-profile projects,
                including TRX Mall and mission-critical Data Centres.
              </p>
            </div>
          </div>
        </div>

        {/* <div className="row">
        <div className="col-md-12 document-controller-title">
          <h1>Document Controller Department</h1>
        </div>
        </div> */}

        <div className="row">
          <div className="col-md-12 section-title">
            <h2>Manager Document Controller</h2>
          </div>
        </div>

        <div className="row team-row">
          <div className="col-md-3 col-sm-3">
            <img
              src={SitiHawa}
              className="team-member-img"
              alt="team member "
            />
            <h3 className="team-member-name">Siti Hawa Binti Adnan</h3>
            <p className="team-member-job">Document Controller Manager</p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 section-title">
            <h2>Senior Document Controller</h2>
          </div>
        </div>

        <div className="row team-row">
          <div className="col-md-3 col-sm-3">
            <img
              src={NoorAffendy}
              className="team-member-img"
              alt="team member "
            />
            <h3 className="team-member-name">Noor Affendy Bin Abd Hamid</h3>
            <p className="team-member-job">Senior Document Controller</p>
          </div>
          <div className="col-md-3 col-sm-3">
            <img
              src={Rabiatut}
              className="team-member-img"
              alt="team member "
            />
            <h3 className="team-member-name">
              Rabi’atul Adawiyah Binti Seh Nilamuddin
            </h3>
            <p className="team-member-job">Senior Document Controller</p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 section-title">
            <h2>Junior Document Controller</h2>
          </div>
        </div>

        <div className="row team-row">
          <div className="col-md-3 col-sm-3">
            <img src={NorAlia} className="team-member-img" alt="team member " />
            <h3 className="team-member-name">Nor Alia Binti Abu Talib</h3>
            <p className="team-member-job">Junior Document Controller</p>
          </div>
          <div className="col-md-3 col-sm-3">
            <img
              src={TengkuNur}
              className="team-member-img"
              alt="team member "
            />
            <h3 className="team-member-name">
              Tengku Nur Syafiyah Anis Binti Tengku Shah Isrul
            </h3>
            <p className="team-member-job">Junior Document Controller</p>
          </div>
          <div className="col-md-3 col-sm-3">
            <img
              src={DangSuraya}
              className="team-member-img"
              alt="team member "
            />
            <h3 className="team-member-name">Dang Suria Binti Lizam</h3>
            <p className="team-member-job">Junior Document Controller</p>
          </div>
          <div className="col-md-3 col-sm-3">
            <img
              src={KennySaw}
              className="team-member-img"
              alt="team member "
            />
            <h3 className="team-member-name">Kenny Saw Wei Wen</h3>
            <p className="team-member-job">Junior Document Controller</p>
          </div>
        </div>

        <div className="row team-row">
          <div className="col-md-3 col-sm-3">
            <img
              src={NorAliya}
              className="team-member-img"
              alt="team member "
            />
            <h3 className="team-member-name">Nor Aliya Binti Halim</h3>
            <p className="team-member-job">Junior Document Controller</p>
          </div>
          <div className="col-md-3 col-sm-3">
            <img
              src={NurIzzahAtirah}
              className="team-member-img"
              alt="team member "
            />
            <h3 className="team-member-name">
              Nur Izzah Atirah Binti Mohd Ariffin
            </h3>
            <p className="team-member-job">Junior Document Controller</p>
          </div>
          <div className="col-md-3 col-sm-3">
            <img
              src={AinNabihah}
              className="team-member-img"
              alt="team member "
            />
            <h3 className="team-member-name">Ain Nabihah Binti Zulkefleyn</h3>
            <p className="team-member-job">Junior Document Controller</p>
          </div>
          <div className="col-md-3 col-sm-3">
            <img
              src={IsmaIszre}
              className="team-member-img"
              alt="team member "
            />
            <h3 className="team-member-name">Isma Iszre Izec Bin Ismail</h3>
            <p className="team-member-job">Junior Document Controller</p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 section-title">
            <h2>Document Controller</h2>
          </div>
        </div>

        <div className="row team-row">
          <div className="col-md-3 col-sm-3">
            <img
              src={NurHayani}
              className="team-member-img"
              alt="team member "
            />
            <h3 className="team-member-name">Nur Hayani Binti Mohd Shukri</h3>
            <p className="team-member-job">Document Controller</p>
          </div>
          <div className="col-md-3 col-sm-3">
            <img
              src={NurZafirah}
              className="team-member-img"
              alt="team member "
            />
            <h3 className="team-member-name">Nur Zafirah Binti Baharum</h3>
            <p className="team-member-job">Document Controller</p>
          </div>
          <div className="col-md-3 col-sm-3">
            <img
              src={NurHayatee}
              className="team-member-img"
              alt="team member "
            />
            <h3 className="team-member-name">Nurhayatee Yusoh</h3>
            <p className="team-member-job">Document Controller</p>
          </div>
        </div>
      </div>
    </div>
  );
};
