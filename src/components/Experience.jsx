import lovenheal from "../../images/lovenheal-logo.webp";
import synergic from "../../images/synergic.jpeg";
import "../assets/styles/Experience.css";

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
                  <img src={lovenheal} alt="lovenheal logo" />
                </div>
                <div className="company-job-details">
                  <div className="title-location-div">
                    <h3 className="company-title">LovenHeal</h3>
                    <p className="location">Remote</p>
                  </div>
                  <h4 className="designation-div">Frontend Developer Intern</h4>
                  <div className="timeline-div">
                    <p>February, 2022 - April, 2022</p>
                  </div>
                  <hr className="black-line" />
                  <div className="job-details">
                    <ul>
                      <li>
                        Designed various UI layouts of the organisation’s
                        product using React.js and Tailwind
                      </li>
                      <li>
                        Implemented the database with validating the accuracy of
                        data to maintain the data integrity using Oracle SQL and
                        PL/SQL
                      </li>
                      <li>
                        Maintained the entire software by fixing various bugs
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
                    <p className="location">Kolkata, India</p>
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
                        product using React.js and Tailwind
                      </li>
                      <li>
                        Implemented the database with validating the accuracy of
                        data to maintain the data integrity using Oracle SQL and
                        PL/SQL
                      </li>
                      <li>
                        Maintained the entire software by fixing various bugs
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
                    <p className="location">Remote</p>
                  </div>
                  <h4 className="designation-div">Frontend Developer Intern</h4>
                  <div className="timeline-div">
                    <p>February, 2022 - April, 2022</p>
                  </div>
                  <hr className="black-line" />
                  <div className="job-details">
                    <ul>
                      <li>
                        Designed various UI layouts of the organisation’s
                        product using React.js and Tailwind
                      </li>
                      <li>
                        Implemented the database with validating the accuracy of
                        data to maintain the data integrity using Oracle SQL and
                        PL/SQL
                      </li>
                      <li>
                        Maintained the entire software by fixing various bugs
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
