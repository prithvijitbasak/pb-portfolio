import { useEffect, useState } from "react";
import "../assets/styles/UpArrow.css";
const UpArrow = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  const handleScroll = () => {
    if (window.scrollY > 220) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <div className="uparrow-div" onClick={() => scrollToTop()}>
          <svg
            fill="#ffffff"
            width="50px"
            height="50px"
            viewBox="0 0 512 512"
            data-name="Layer 1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M256,34,432,210l-21.2,21.21L271,91.4V478H241V91.4L101.16,231.25,80,210Z" />
          </svg>
        </div>
      )}
    </>
  );
};

export default UpArrow;
