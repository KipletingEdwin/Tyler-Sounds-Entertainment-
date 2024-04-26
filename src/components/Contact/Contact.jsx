import React from 'react';
import styles from './Contact.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';



function Contact() {
  return (
    <section className={styles.container}>
        <div className={styles.contact}>
            <h3> Talk to us </h3>
            <div className={styles.icons}>
            <FontAwesomeIcon icon={faEnvelope} />
            <FontAwesomeIcon icon={faPhone} />
            <FontAwesomeIcon icon={faLocationDot} />
            </div>
            <div className={styles.contactForm}>
                <input type='text' placeholder='Name' required />
                <input type='email' placeholder='Email' required />
                <input type='text' placeholder='Subject' required />
                <textarea placeholder='Message' required></textarea>
                <button>Send Message</button>

            </div>
        
        </div>
        
    </section>
  )
}

export default Contact