import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import styles from './About.module.css';
import tyller from '../../assets/about/djtyller.png';
// import headphones from '../../assets/about/headphones.jpg';

function About() {
  return (
    <section className={styles.container} id='about'>
        <div className={styles.ItemsContainer}>
            <div className={styles.aboutImage}>
                <img  src={tyller} alt='my-image'/>
            </div>
            <div className={styles.descriptionContainer}>
                <p className={styles.header}> The Man Behind the Beat</p>
                <h2>WITH DJ TYLLER,THE PARTY DOES NOT END</h2>
                <p ><FontAwesomeIcon icon={faArrowRight} />Tailored music playlist</p>
                <p ><FontAwesomeIcon icon={faArrowRight} />Interactive Entertainment</p>
                <p ><FontAwesomeIcon icon={faArrowRight} />Special effects</p>
                <p ><FontAwesomeIcon icon={faArrowRight} />Tailored music playlist</p>
                <p ><FontAwesomeIcon icon={faArrowRight} />High quality sound systems</p>

            </div>
        </div>
    </section>
  )
}

export default About