import { useEffect, useState } from "react";
import "../assets/styles/Footer.css";
import logo from "../../images/logo.png";
import whatsapp from "../../images/whatsapp-logo.svg";
import linkedin from "../../images/linkedin-logo.svg";

const Footer = () => {
  const [year, setYear] = useState(null);

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    setYear(currentYear);
  }, []);

  return (
    <>
      <section className="pb-footer-wrapper">
        <div className="pb-container">
          <div className="pb-footer-contents">
            <div className="footer-cols">
              <div className="footer-logo-div">
                <img src={logo} alt="Prithvijit Basak Logo" />
              </div>
              <div className="socials-and-links">
                <div className="links-div"></div>
                <div className="socials-div">
                  <h3>Connect me on</h3>
                  <div className="socials-icons">
                    <img src={linkedin} alt="LinkedIn" />
                    <img src={whatsapp} alt="WhatsApp" />

                  </div>
                </div>
              </div>
            </div>
            <div className="copyright-div">
              <p>
                &#169; {year} | Developed by{" "}
                <a
                  href="https://www.linkedin.com/in/prithvijitbasak/"
                  target="_blank"
                >
                  Prithvijit Basak
                </a>{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
