import lovenheal from "../../images/lovenheal-logo.png";
import synergic from "../../images/synergic.png";
import ibarts from "../../images/ibarts-logo-og.png";
import "../assets/styles/Experience.css";
import { GrLocation } from "react-icons/gr";
import { RiRemoteControlFill } from "react-icons/ri";

const Experience = () => {
  return (
    <>
      <section className="pb-experience-section-wrapper">
        <div className="pb-container">
          <div className="pb-experience-section-contents">
            <h2 className="h2-text">Experience</h2>
            <div className="experience-containers">
              <div className="company-div">
                <div className="company-logo-div">
                  <img src={ibarts} alt="ibarts logo" />
                </div>
                <div className="company-job-details">
                  <div className="title-location-div">
                    <h3 className="company-title">iB Arts Pvt. Ltd.</h3>
                    <p className="location"><GrLocation /> Kolkata, India</p>
                  </div>
                  <h4 className="designation-div">Web Developer</h4>
                  <div className="timeline-div">
                    <p>January, 2024 - Present</p>
                  </div>
                  <hr className="black-line" />
                  <div className="job-details">
                    <ul>
                      <li>
                        Developed and maintained dynamic, responsive websites
                        using <strong>React.js</strong>, <strong>HTML5</strong>,{" "}
                        <strong>CSS3</strong>, and <strong>JavaScript</strong>.
                      </li>
                      <li>
                        Customized <strong>Shopify themes</strong> and{" "}
                        <strong>WordPress plugins</strong> to meet
                        client-specific requirements, ensuring seamless
                        integration and optimized performance.
                      </li>
                      <li>
                        Built reusable components and implemented state
                        management using <strong>React</strong> for scalable
                        front-end development.
                      </li>
                      <li>
                        Implemented modern, clean user interfaces with a focus
                        on
                        <strong>cross-browser compatibility</strong> and{" "}
                        <strong>mobile responsiveness</strong>.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="company-div">
                <div className="company-logo-div">
                  <img src={synergic} alt="synergic logo" />
                </div>
                <div className="company-job-details">
                  <div className="title-location-div">
                    <h3 className="company-title">
                      Synergic Softek Solutions Pvt. Ltd.
                    </h3>
                    <p className="location"><GrLocation /> Kolkata, India</p>
                  </div>
                  <h4 className="designation-div">Software Engineer</h4>
                  <div className="timeline-div">
                    <p>June, 2023 - January, 2024</p>
                  </div>
                  <hr className="black-line" />
                  <div className="job-details">
                    <ul>
                      <li>
                        Designed various UI layouts of the organisation’s
                        product using <strong>React.js</strong> and{" "}
                        <strong>Tailwind</strong>.
                      </li>
                      <li>
                        Implemented the database with validating the accuracy of
                        data to maintain the data integrity using{" "}
                        <strong>Oracle SQL</strong> and
                        <strong>PL/SQL</strong>.
                      </li>
                      <li>
                        Maintained the entire software by fixing various bugs.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="company-div">
                <div className="company-logo-div">
                  <img src={lovenheal} alt="lovenheal logo" />
                </div>
                <div className="company-job-details">
                  <div className="title-location-div">
                    <h3 className="company-title">LovenHeal</h3>
                    <p className="location"><RiRemoteControlFill /> Remote</p>
                  </div>
                  <h4 className="designation-div">Frontend Developer Intern</h4>
                  <div className="timeline-div">
                    <p>February, 2022 - April, 2022</p>
                  </div>
                  <hr className="black-line" />
                  <div className="job-details">
                    <ul>
                      <li>
                        Designed a custom <strong>login/logout</strong> page
                        using <strong>React.js</strong> and{" "}
                        <strong>custom CSS</strong>.
                      </li>
                      <li>
                        Styled various components of the ${`organisation's`}{" "}
                        home page using <strong>React.js</strong>.
                      </li>
                      <li>
                        Fixed various bugs on the overall web application.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
