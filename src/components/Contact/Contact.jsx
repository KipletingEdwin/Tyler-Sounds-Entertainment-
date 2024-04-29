import React, { useState } from "react";
import styles from "./Contact.module.css";
import contact from "../../assets/contact/contact.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.name === "" ||
      formData.email === "" ||
      formData.subject === "" ||
      formData.message === "" 
    ){
      alert("Please fill in all fields")
    } else{
      fetch(" ",{
        method: "POST",
        headers:{
          "Content-Type": "appllication/json"
        },
        body: JSON.stringify(formData),
      })
      .then((response)=>response.json())
      .then((data)=>console.log(data));
    }

  }

  return (
    <section className={styles.container} id="contact">
      <h2 className={styles.title}>Contact Us</h2>
      <div className={styles.contact}>
        <div className={styles.iconsContainer}>
          <img src={contact} alt="contact" />
          <div className={styles.icons}>
            <div className={styles.iconsDiv}>
              <FontAwesomeIcon
                icon={faEnvelope}
                className={styles.faEnvelope}
              />
              <a href="tylersoundsentertainment@gmail.com">
                <p>tylersoundsentertainment@gmail.com</p>{" "}
              </a>
            </div>
            <div className={styles.iconsDiv}>
              <FontAwesomeIcon icon={faPhone} className={styles.faPhone} />{" "}
              <p>+254728012535</p>
            </div>
          </div>
        </div>

        <div className={styles.contactForm}>
          <h3>Get in touch with us</h3>
          <form  className={styles.form} onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="name" required onChange={handleChange} />
            <input type="email" placeholder="Email" name="email" onChange={handleChange} required />
            <input type="text" placeholder="Subject" name="subject" onChange={handleChange} required />
            <textarea placeholder="Message" name="message" required onChange={handleChange}></textarea>
            <button>Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
