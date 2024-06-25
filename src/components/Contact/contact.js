import React, { useRef } from "react";
import "./contact.css";
import Bootstrap from "../../assets/bootstrap.png";
import C from "../../assets/c-sharp.png";
import c from "../../assets/c+.png";
import css from "../../assets/css.png";
import html from "../../assets/html.png";
import java from "../../assets/java.png";
import js from "../../assets/js.png";
import php from "../../assets/php.png";
import sql from "../../assets/sql.png";
import GithubIcon from "../../assets/social1.png";
import InstagramIcon from "../../assets/social2.png";
import LinkedinIcon from "../../assets/social3.png";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const publicKey = "l8Sx6ycOfZr0fsyy_"; // Replace with your actual key

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_9ke1g3r", "template_x6w91f8", form.current, {
        publicKey,
      })
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
        },
        (error) => {
          console.error("FAILED...", error.text);
        }
      );
  };

  return (
    <div>
      <section id="contactPage">
        <div id="skills2">
          <h1 className="contactPageTitle">Skills</h1>
          <p className="skillDesc">
            Sono descritte le mie competenze tuttora acquisite.
          </p>
          <div className="skillImgs">
            <img src={Bootstrap} alt="Skill" className="skillImg" />
            <img src={C} alt="Skill" className="skillImg" />
            <img src={c} alt="Skill" className="skillImg" />
            <img src={css} alt="Skill" className="skillImg" />
            <img src={html} alt="Skill" className="skillImg" />
            <img src={java} alt="Skill" className="skillImg" />
            <img src={js} alt="Skill" className="skillImg" />
            <img src={php} alt="Skill" className="skillImg" />
            <img src={sql} alt="Skill" className="skillImg" />
          </div>
        </div>
        <div id="contact">
          <h1 className="contactPageTitle">Contact Me</h1>
          <span className="contactDesc">
            Sono sempre alla ricerca di nuove sfide e opportunità per mettere a
            frutto le mie capacità.
          </span>
          <form className="contactForm" ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              className="name"
              placeholder="Your Name"
              name="your_name"
            />
            <input
              type="email"
              className="email"
              placeholder="Your Email"
              name="your_email"
            />
            <textarea
              className="msg"
              name="message"
              rows="5"
              placeholder="Your Message"
            ></textarea>
            <button type="submit" value="Send" className="submitBtn">
              Submit
            </button>
            <div className="links">
              <a
                href="https://github.com/FDMDeveloper"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={GithubIcon} alt="Github" className="link" />
              </a>
              <a
                href="https://www.instagram.com/developerfdp98/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={InstagramIcon} alt="Instagram" className="link" />
              </a>
              <a
                href="https://www.linkedin.com/in/francesco-matteo-depalma/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={LinkedinIcon} alt="Linkedin" className="link" />
              </a>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
