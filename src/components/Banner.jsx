import bannerImage from "../../images/Prithvijit Basak.jpg";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import "../assets/styles/Banner.css";
import { ReactTyped } from "react-typed";

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
                    <FaLinkedin /> - <span>LinkedIn</span>
                  </a>
                </div>
                <div className="github-anchor-div">
                  <a href="https://github.com/prithvijitbasak" target="_blank">
                    <FaGithub /> - <span>GitHub</span>
                  </a>
                </div>
                <div className="whatsapp-anchor-div">
                  <a
                    href="https://wa.me/917449712127"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IoLogoWhatsapp /> - <span>Send a message</span>
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
