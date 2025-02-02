import "../assets/styles/Education.css";

const Education = () => {
  return (
    <>
      <section className="pb-education-wrapper">
        <div className="pb-container">
          <div className="pb-education-contents">
            <h2 className="h2-text">Education</h2>
            <div className="degree-contents">
              <h3 className="degree-name">Bachelor of Technology</h3>
              <div className="institute-location">
                <h4 className="institute">Camellia Institute of Technology</h4>
                <p className="location">- Madhyamgram, West Bengal, India</p>
              </div>
              <p className="timeline">2019 to 2023</p>
              <p className="department">
                Department - Computer Science and Engineering
              </p>
              <p className="grade">CGPA - 9.14</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Education;
