import { useRef } from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import About from "./components/About";
import Experience from "./components/Experience";
import UpArrow from "./components/UpArrow";

const App = () => {
  const bannerRef = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);

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
  };

  return (
    <>
      <Header scrollToSection={scrollToSection} />
      <div ref={bannerRef}>
        <Banner />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={experienceRef}>
        <Experience />
      </div>
      <UpArrow />
    </>
  );
};

export default App;
