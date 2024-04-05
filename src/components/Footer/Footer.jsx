import React from 'react';
import styles from './Footer.module.css';
import logo from '../../assets/nav/logo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';


function Footer() {
  return (
    <section className={styles.container}>
        <div className={styles.socials}>
            <img src={logo}  alt='logo'/>
            <ul>
                <li><a href='/about'>About</a> </li>
                <li><a href='/events'>Events</a> </li>
                <li><a href='/booking'>Booking</a> </li>
                <li><a href='/contact'>Contact</a> </li>
            </ul>
        </div>

        <div className={styles.contacts}>
            <div className={styles.phone}>
                 <h4>  <FontAwesomeIcon icon={faPhone} className={styles.icons} />PHONE</h4>
                <p> +254728012535</p>
            </div>

            <div className={styles.email}>
                 <h4>  <FontAwesomeIcon icon={faEnvelope} className={styles.icons} /> EMAIL</h4>
                <p> tyllersoundsentertainment@gmail.com</p>
            </div>

            <div className={styles.location}>
                 <h4>  <FontAwesomeIcon icon={faLocationDot} className={styles.icons} /> LOCATION</h4>
               <p>  Eldoret, Kenya</p>
            </div>
        </div>

        <div className={styles.terms}>
            <p>Privacy Policy</p>
            <div className={styles.verticalLine}></div>
            <p>Terms of Service</p>
        </div>

        <div className={styles.rights}>
            <p> &copy; 2023 DJ Tyller. All rights reserved </p>
        </div>
        
    </section>
  )
}

export default Footer