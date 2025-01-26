import { useState } from "react";
import "../assets/styles/Contact.css";
import emailjs from "@emailjs/browser";
import ContactFormPopUp from "./ContactFormPopUp";

const Contact = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const SERVICE_ID = import.meta.env.VITE_REACT_APP_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_REACT_APP_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_REACT_APP_PUBLIC_KEY;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY).then(
      (result) => {
        console.log("Email successfully sent!", result.text);
        e.target.reset();
        // Trigger popup on successful email send
        setIsPopupVisible(false); // Reset state to trigger re-render
        setTimeout(() => setIsPopupVisible(true), 10);
      },
      (error) => {
        console.error("Email sending failed:", error.text);
      }
    );
  };

  return (
    <>
      <section className="pb-contact-wrapper">
        <div className="pb-container">
          <div className="pb-contact-contents">
            <h2 className="h2-text">Contact Me</h2>
            <div className="contact-me-form">
              <form onSubmit={handleSubmit}>
                <div className="name-div">
                  <input
                    type="text"
                    placeholder="First name"
                    name="firstName"
                  />
                  <input type="text" placeholder="Last name" name="lastName" />
                </div>
                <input
                  type="email"
                  name="email_from"
                  id=""
                  placeholder="Email ID"
                  className="email-field"
                />
                <textarea
                  name="message"
                  id=""
                  placeholder="Enter your message"
                  className="message-field"
                  required
                ></textarea>
                <button type="submit" className="submit-btn">
                  Send
                </button>
              </form>
            </div>
          </div>
          {isPopupVisible && <ContactFormPopUp visible={setIsPopupVisible} />}
        </div>
      </section>
    </>
  );
};

export default Contact;
