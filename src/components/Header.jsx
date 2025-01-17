import PropTypes from "prop-types";
import "../assets/styles/Header.css";
import logo from "../../images/logo.png";
import hamburger from "../../images/header-menu-hamburger-icon.svg";
import navbarCross from "../../images/mob-tab-navbar-cross.svg";
import { useState, useEffect, useRef } from "react";

const Header = ({ scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);

  const handleHamburger = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleNavlinks = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleOutSideClick = (event) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutSideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutSideClick);
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="pb-portfolio-header">
        <div className="pb-container">
          <div className="pb-header-contents" id="desktop-header">
            <a href="/" className="logo-div">
              <img src={logo} alt="logo" loading="lazy" />
            </a>
            <div className="header-navbar-div">
              <div className="navbar-menu">
                <p onClick={() => scrollToSection("about")}>About</p>
                <p onClick={() => scrollToSection("experience")}>Experience</p>
                <p onClick={() => scrollToSection("projects")}>Projects</p>
                <p onClick={() => scrollToSection("contributions")}>
                  Contributions
                </p>
                <p onClick={() => scrollToSection("education")}>Education</p>
                <p>Contact Me</p>
              </div>
              <a
                className="cta-div"
                href="https://drive.google.com/file/d/1beOQG39cbhtnDYhvUscMBNnNVPPQazxk/view?usp=sharing"
                target="_blank"
              >
                Resume
              </a>
            </div>
          </div>
          <div className="pb-mob-tab-header-contents" id="mob-tab-header">
            <div
              className="hamburger-icon-div"
              onClick={() => handleHamburger()}
              ref={hamburgerRef}
            >
              {!isMenuOpen && (
                <img
                  src={hamburger}
                  alt="hamburger icon"
                  className="navbar-hamburger"
                />
              )}
              {isMenuOpen && (
                <img
                  src={navbarCross}
                  alt="Navbar Cross"
                  className="navbar-cross"
                />
              )}
            </div>
            <div className="logo-icon-div">
              <a href="/">
                <img src={logo} alt="Prithvijit Basak" />
              </a>
            </div>
            <div className="resume-cta-div">
              <a
                href="https://drive.google.com/file/d/1beOQG39cbhtnDYhvUscMBNnNVPPQazxk/view?usp=sharing"
                target="_blank"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </header>
      <div
        className={`pb-mob-tab-navbar-menu ${isMenuOpen ? "open" : ""}`}
        ref={menuRef}
      >
        <p
          onClick={() => {
            scrollToSection("about");
            handleNavlinks();
          }}
        >
          About
        </p>
        <p
          onClick={() => {
            scrollToSection("experience");
            handleNavlinks();
          }}
        >
          Experience
        </p>
        <p
          onClick={() => {
            scrollToSection("projects");
            handleNavlinks();
          }}
        >
          Projects
        </p>
        <p
          onClick={() => {
            scrollToSection("contributions");
            handleNavlinks();
          }}
        >
          Contributions
        </p>
        <p
          onClick={() => {
            scrollToSection("education");
            handleNavlinks();
          }}
        >
          Education
        </p>
        <p>Contact Me</p>
      </div>
    </>
  );
};

Header.propTypes = {
  scrollToSection: PropTypes.func.isRequired,
};

export default Header;
