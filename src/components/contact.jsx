import { useState } from "react";
import Email from "../assets/contact/email.svg";
import Phone from "../assets/contact/phone.svg";
import Location from "../assets/contact/location.svg";
import IconLogo from "../assets/logo/icon-logo.png";

const initialState = {
  name: "",
  email: "",
  message: "",
};
export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setState((prevState) => ({ ...prevState, [name]: value }));
  // };
  // const clearState = () => setState({ ...initialState });

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(name, email, message);
  //   emailjs
  //     .sendForm(
  //       "YOUR_SERVICE_ID",
  //       "YOUR_TEMPLATE_ID",
  //       e.target,
  //       "YOUR_PUBLIC_KEY"
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //         clearState();
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  // };
  return (
    <div>
      <div id="contact">
        <div className="">
          <div className="contact-card">
            <img src={IconLogo} alt="VersatechMS logo" className="contact-brand-icon" />
            <div className="contact-info">
              <div className="section-title">
                <h2>Connect With Us</h2>
              </div>
              <div className="contact-item">
                <img src={Location} alt="Location" className="contact-icon" />
                <p>
                  SA-M4-07, Block M, Anjung B, Jalan KP1/6, <br />
                  43300 Seri Kembangan, Selangor
                </p>
              </div>
              <div className="contact-item">
                <img src={Phone} alt="Phone" className="contact-icon" />
                <p>+6017 551 7371</p>
              </div>
              <div className="contact-item">
                <img src={Email} alt="Email" className="contact-icon" />
                <p>admin.info@versatechms.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>
            {" "}
            © Copyright 2025-{new Date().getFullYear()}. Versatech Management Solution Consultancy. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};
