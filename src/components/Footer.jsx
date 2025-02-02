import { useEffect, useState } from "react";
import "../assets/styles/Footer.css";
import logo from "../../images/logo-2.png";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

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
                <img
                  src={logo}
                  alt="Prithvijit Basak Logo"
                  className="footer-logo-img"
                />
                <p className="address">
                  <a
                    href="https://maps.app.goo.gl/9py4nYJDvvgNeXpW9"
                    target="_blank"
                  >
                    <FaLocationDot /> Birati, West Bengal, India
                  </a>
                </p>
                <p className="email-link">
                  <a href="mailto:prithvijitbasak22695@gmail.com">
                    <MdEmail />
                    prithvijitbasak22695@gmail.com
                  </a>
                </p>
                <p className="phone-link">
                  <a href="tel:7449712127" target="_blank">
                    <FaPhoneSquareAlt />
                    +91-7449712127
                  </a>
                </p>
              </div>
              <div className="links-col">
                <h3 className="links-col-h3">Links</h3>
                <div className="general-div">
                  <p className="link">
                    <a
                      href="https://github.com/prithvijitbasak"
                      target="_blank"
                    >
                      GitHub
                    </a>
                  </p>
                  <p className="link">
                    <a
                      href="https://www.geeksforgeeks.org/user/prithvijitbasak/"
                      target="_blank"
                    >
                      GFG
                    </a>
                  </p>
                  <p className="link">
                    <a
                      href="https://leetcode.com/u/prithvijitbasak/"
                      target="_blank"
                    >
                      LeetCode
                    </a>
                  </p>
                </div>
              </div>
              <div className="socials-div">
                <h3>Connect me on</h3>
                <div className="socials-icons">
                  <a
                    href="https://wa.me/+917449712127"
                    target="_blank"
                    className="footer-whatsapp-link"
                  >
                    <IoLogoWhatsapp />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/prithvijitbasak/"
                    target="_blank"
                    className="footer-linkedin-link"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href="https://www.instagram.com/prithvijitbasak/"
                    target="_blank"
                    className="footer-instagram-link"
                  >
                    <FaInstagramSquare />
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=100022425854941"
                    target="_blank"
                    className="footer-facebook-link"
                  >
                    <FaFacebook />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-div">
          <div className="pb-container">
            <p className="copy-para">
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
      </section>
    </>
  );
};

export default Footer;
