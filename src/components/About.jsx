import "../assets/styles/About.css";

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
