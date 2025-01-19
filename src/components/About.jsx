import "../assets/styles/About.css";
import htmlLogo from "../../images/html-logo.svg";
import cssLogo from "../../images/css-logo.svg";
import jsLogo from "../../images/js-logo.svg";
import reactLogo from "../../images/react-logo.svg";
import wordpressLogo from "../../images/wordpress-logo.svg";
import shopifyLogo from "../../images/shopify-logo.svg";
import cLogo from "../../images/c-logo.svg";
import cppLogo from "../../images/C++-logo.svg";
import squarespaceLogo from "../../images/squarespace-logo.svg";

const About = () => {
  return (
    <>
      <section className="pb-portfolio-about-section">
        <div className="pb-container">
          <div className="pb-about-section-contents">
            <h2 className="h2-text">About</h2>
            <div className="about-para">
              <p>
                My name is Prithvijit Basak. I completed a Bachelor of
                Technology in Computer Science and Engineering from Camellia
                Institute of Technology and am currently working as a full-time
                Software Engineer.
              </p>
            </div>
            <div className="skills-contents">
              <h3 className="skills-h3">What Can I Do</h3>
              <div className="skills-grid-container">
                <div className="skill-box">
                  <div className="logo-title">
                    <img src={htmlLogo} alt="HTML Logo" />
                    <h4>HTML</h4>
                  </div>
                  <div className="progress-bar html"></div>
                </div>
                <div className="skill-box">
                  <div className="logo-title">
                    <img src={cssLogo} alt="CSS Logo" />
                    <h4>CSS</h4>
                  </div>
                  <div className="progress-bar css"></div>
                </div>
                <div className="skill-box">
                  <div className="logo-title">
                    <img src={jsLogo} alt="JS Logo" />
                    <h4>JavaScript</h4>
                  </div>
                  <div className="progress-bar js"></div>
                </div>
                <div className="skill-box">
                  <div className="logo-title">
                    <img src={reactLogo} alt="ReactJS Logo" />
                    <h4>React.js</h4>
                  </div>
                  <div className="progress-bar reactjs"></div>
                </div>
                <div className="skill-box">
                  <div className="logo-title">
                    <img src={wordpressLogo} alt="Wordpress Logo" />
                    <h4>Wordpress</h4>
                  </div>
                  <div className="progress-bar wordpress"></div>
                </div>
                <div className="skill-box">
                  <div className="logo-title">
                    <img src={shopifyLogo} alt="Shopify Logo" />
                    <h4>Shopify</h4>
                  </div>
                  <div className="progress-bar shopify"></div>
                </div>
                <div className="skill-box">
                  <div className="logo-title">
                    <img src={squarespaceLogo} alt="Squarespace Logo" />
                    <h4>Squarespace</h4>
                  </div>
                  <div className="progress-bar squarespace"></div>
                </div>
                <div className="skill-box">
                  <div className="logo-title">
                    <img src={cLogo} alt="C Logo" />
                    <h4>C</h4>
                  </div>
                  <div className="progress-bar c"></div>
                </div>
                <div className="skill-box">
                  <div className="logo-title">
                    <img src={cppLogo} alt="C++ Logo" />
                    <h4>C++</h4>
                  </div>
                  <div className="progress-bar cpp"></div>
                </div>
              </div>
            </div>
            <div className="call-hire-me-div">
              <div className="call-me-cta">
                <a href="tel:7449712127">Call Me</a>
              </div>
              <div className="hire-me-cta">
                <a href="/">Hire Me</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
