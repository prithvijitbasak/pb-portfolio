import bannerImage from "../../images/Prithvijit Basak.jpg";
import "../assets/styles/Banner.css";
import { ReactTyped } from "react-typed";
import linkedin from "../../images/linkedin-logo.svg";
import github from "../../images/github-logo.svg";
import whatsapp from "../../images/whatsapp-logo.svg";

const Banner = () => {
  return (
    <>
      <section className="pb-portfolio-banner">
        <div className="pb-container">
          <div className="portfolio-banner-contents">
            <div className="img-div">
              <img src={bannerImage} alt="Prithvijit Basak" />
            </div>
            <div className="pb-banner-main-contents">
              <h1>
                I am,{" "}
                <span className="name-text">
                  <ReactTyped
                    strings={[
                      "Prithvijit Basak",
                      "a Software Engineer",
                      "a Web Developer",
                    ]}
                    typeSpeed={40}
                    backSpeed={50}
                    loop
                  />
                </span>
              </h1>
              <div className="socials-div">
                <div className="linkedIn-anchor">
                  <a
                    href="https://www.linkedin.com/in/prithvijitbasak/"
                    target="_blank"
                  >
                    <img src={linkedin} alt="LinkedIn" className="socials-logo"/> - <span>LinkedIn</span>
                  </a>
                </div>
                <div className="github-anchor-div">
                  <a href="https://github.com/prithvijitbasak" target="_blank">
                    <img src={github} alt="GitHub" className="socials-logo"/> - <span>GitHub</span>
                  </a>
                </div>
                <div className="whatsapp-anchor-div">
                  <a
                    href="https://wa.me/917449712127"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={whatsapp} alt="WhatsApp" className="socials-logo"/> - <span>Send a message</span>
                  </a>
                </div>
              </div>
              <div className="contact-me-cta-div">
                <a href="mailto:prithvijitbasak22695@gmail.com">Contact Me</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
