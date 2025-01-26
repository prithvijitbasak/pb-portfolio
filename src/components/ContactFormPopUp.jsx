import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import "../assets/styles/ContactFormPopUp.css";

const ContactFormPopUp = ({ visible }) => {
  const [popupStyle, setPopupStyle] = useState({
    transform: "translate(-50%, -2000px)", // Initially hidden
  });

  useEffect(() => {
    if (visible) {
      // Reset position to "hidden" to ensure animation always starts from the top
      setPopupStyle({
        transform: "translate(-50%, -2000px)", // Start off-screen
      });

      // Use a short timeout to allow reset to take effect before showing the popup
      const resetTimer = setTimeout(() => {
        setPopupStyle({
          transform: "translate(-50%, 125px)", // Move to visible position
        });
      }, 10);

      // Automatically hide it after 3 seconds
      const hideTimer = setTimeout(() => {
        setPopupStyle({
          transform: "translate(-50%, -2000px)", // Move out of view
        });
      }, 3000);

      // Cleanup timers
      return () => {
        clearTimeout(resetTimer);
        clearTimeout(hideTimer);
      };
    }
  }, [visible]);

  return (
    <div
      className="contact-form-popup-box"
      style={{
        ...popupStyle,
        transition: "all 0.3s ease-in-out", // Smooth animation
      }}
    >
      <p>Thank you for contacting me <br /> I will get in touch soon !!</p>
    </div>
  );
};

ContactFormPopUp.propTypes = {
  visible: PropTypes.bool.isRequired,
};

export default ContactFormPopUp;
