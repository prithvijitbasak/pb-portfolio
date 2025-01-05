import "../assets/styles/Projects.css";
import { CgWebsite } from "react-icons/cg";
import { FaLaptopCode } from "react-icons/fa";
import weatherApp from "../../images/weather-app.png";
import reactUserTable from "../../images/react-user-table.png";
import reactCalculator from "../../images/react-calculator.png";
import languageTranslator from "../../images/language-translator.png";
import realTimeClock from "../../images/realtime-clock.png";
import blogsite from "../../images/blogsite.png";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Projects = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <>
      <section className="pb-projects-section-wrapper">
        <div className="pb-container">
          <div className="pb-projects-contents">
            <h2 className="h2-text">Projects</h2>
            <div className="projects-slider-wrapper">
              <Slider {...settings}>
                <div className="projects-slider-cards">
                  <div className="project-img-div">
                    <img src={weatherApp} alt="Weather App" />
                  </div>
                  <h3 className="project-title">React Weather App</h3>
                  <p className="projects-desc">
                    A realtime website to get the weather of any city made with
                    React.js
                  </p>
                  <div className="links-div">
                    <a
                      href="https://pb-react-weather-app.netlify.app/"
                      target="_blank"
                    >
                      <CgWebsite /> Live
                    </a>
                    <a
                      href="https://github.com/prithvijitbasak/react-weather-app"
                      target="_blank"
                    >
                      <FaLaptopCode />
                      Code
                    </a>
                  </div>
                </div>
                <div className="projects-slider-cards">
                  <div className="project-img-div">
                    <img src={reactUserTable} alt="React User Table" />
                  </div>
                  <h3 className="project-title">React User Table</h3>
                  <p className="projects-desc">
                    A dynamic user table to store the name and email in the
                    localstorage made using React.js
                  </p>
                  <div className="links-div">
                    <a href="#" target="_blank">
                      <CgWebsite /> Live
                    </a>
                    <a
                      href="https://github.com/prithvijitbasak/react-user-table"
                      target="_blank"
                    >
                      <FaLaptopCode />
                      Code
                    </a>
                  </div>
                </div>
                <div className="projects-slider-cards">
                  <div className="project-img-div">
                    <img src={reactCalculator} alt="React Calculator" />
                  </div>
                  <h3 className="project-title">React Calculator</h3>
                  <p className="projects-desc">
                    A calculator made using React.js
                  </p>
                  <div className="links-div">
                    <a href="#" target="_blank">
                      <CgWebsite /> Live
                    </a>
                    <a
                      href="https://github.com/prithvijitbasak/react-calculator"
                      target="_blank"
                    >
                      <FaLaptopCode />
                      Code
                    </a>
                  </div>
                </div>
                <div className="projects-slider-cards">
                  <div className="project-img-div">
                    <img src={languageTranslator} alt="Language Translator" />
                  </div>
                  <h3 className="project-title">Language Translator</h3>
                  <p className="projects-desc">
                    A language translator made using HTML, CSS and JS.
                  </p>
                  <div className="links-div">
                    <a href="https://pbtranslator.netlify.app/" target="_blank">
                      <CgWebsite /> Live
                    </a>
                    <a
                      href="https://github.com/prithvijitbasak/language-translator"
                      target="_blank"
                    >
                      <FaLaptopCode />
                      Code
                    </a>
                  </div>
                </div>
                <div className="projects-slider-cards">
                  <div className="project-img-div">
                    <img src={realTimeClock} alt="Real Time Clock" />
                  </div>
                  <h3 className="project-title">Real Time Clock</h3>
                  <p className="projects-desc">
                    A clock made using HTML, CSS and JS.
                  </p>
                  <div className="links-div">
                    <a
                      href="https://real-ti-me-clock.netlify.app/"
                      target="_blank"
                    >
                      <CgWebsite /> Live
                    </a>
                    <a
                      href="https://github.com/prithvijitbasak/real-time-clock"
                      target="_blank"
                    >
                      <FaLaptopCode />
                      Code
                    </a>
                  </div>
                </div>
                <div className="projects-slider-cards">
                  <div className="project-img-div">
                    <img src={blogsite} alt="Blogsite" />
                  </div>
                  <h3 className="project-title">Blogsite</h3>
                  <p className="projects-desc">
                    Blogsite made using HTML and CSS.
                  </p>
                  <div className="links-div">
                    <a href="https://hourblog.netlify.app/" target="_blank">
                      <CgWebsite /> Live
                    </a>
                    <a
                      href="https://github.com/prithvijitbasak/blogsite"
                      target="_blank"
                    >
                      <FaLaptopCode />
                      Code
                    </a>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
