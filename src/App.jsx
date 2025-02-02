import { useRef } from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contributions from "./components/Contributions";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import UpArrow from "./components/UpArrow";
// import ContactFormPopUp from "./components/ContactFormPopUp";

const App = () => {
  const bannerRef = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const contributionsRef = useRef(null);
  const educationRef = useRef(null);
  const contactRef = useRef(null);
  const footerRef = useRef(null);

  const scrollToSection = (section) => {
    if (section === "about" && aboutRef.current) {
      aboutRef.current.scrollIntoView();
    }

    if (section === "experience" && experienceRef.current) {
      experienceRef.current.scrollIntoView();
    }

    if (section === "banner" && bannerRef.current) {
      bannerRef.current.scrollIntoView();
    }

    if (section === "projects" && projectsRef.current) {
      projectsRef.current.scrollIntoView();
    }

    if (section === "contributions" && contributionsRef.current) {
      contributionsRef.current.scrollIntoView();
    }

    if (section === "education" && educationRef.current) {
      educationRef.current.scrollIntoView();
    }

    if (section === "contact" && contactRef.current) {
      contactRef.current.scrollIntoView();
    }

    if (section === "footer" && footerRef.current) {
      footerRef.current.scrollIntoView();
    }
  };

  return (
    <>
      <Header scrollToSection={scrollToSection} />

      <div ref={bannerRef}>
        <Banner scrollToSection={scrollToSection} />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={experienceRef}>
        <Experience />
      </div>
      <div ref={projectsRef}>
        <Projects />
      </div>
      <div ref={contributionsRef}>
        <Contributions />
      </div>
      <div ref={educationRef}>
        <Education />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
      <div ref={footerRef}>
        <Footer />
      </div>
      <UpArrow />
    </>
  );
};

export default App;
