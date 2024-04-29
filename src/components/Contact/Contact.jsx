import React from "react";
import styles from "./Contact.module.css";
import contact from "../../assets/contact/contact.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

function Contact() {

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Contact Us</h2>
      <div className={styles.contact}>
        <div className={styles.iconsContainer}>
          <img src={contact} alt="contact" />
          <div className={styles.icons}>
            <div className={styles.iconsDiv} >
            <FontAwesomeIcon icon={faEnvelope}  className={styles.faEnvelope} />
            <a href="tylersoundsentertainment@gmail.com"> <p>tylersoundsentertainment@gmail.com</p> </a>
            </div>
            <div className={styles.iconsDiv}>
            <FontAwesomeIcon icon={faPhone} className={styles.faPhone} /> <p>+254728012535</p>
            </div>
           
            
          </div>
        </div>

        <div className={styles.contactForm}>
            <h3>Get in touch with us</h3>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <input type="text" placeholder="Subject" required />
          <textarea placeholder="Message" required></textarea>
          <button>Send Message</button>
        </div>

      </div>
    </section>
  );
}

export default Contact;
