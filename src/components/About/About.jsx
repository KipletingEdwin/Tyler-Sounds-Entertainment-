import React from 'react'
import styles from './About.module.css';
import tyller from '../../assets/about/djtyller.png';
import headphones from '../../assets/about/headphones.jpg';

function About() {
  return (
    <section className={styles.container} id='about'>
      <h2 className={styles.title}>About Us</h2>
        <div className={styles.ItemsContainer}>
            <div className={styles.aboutImage}>
            <p className={styles.header}> The Man Behind the Beat</p>
                <img  src={tyller} alt='my-image'/>
            </div>
            <div className={styles.descriptionContainer}>

                <p>Welcome to Tyller Sounds Entertainment, where the beats meet the vibe and the party never stops! Led by the visionary DJ Tyller, our company 
                  is at the forefront of delivering unforgettable experiences through the power of music.
                  <br/>    <br/>
                  Tyller Sounds Entertainment specializes in curating electrifying DJ sets and immersive soundscapes tailored to elevate any occasion. Whether it's
                   a pulsating nightclub, a chic corporate event, or a lively private party, our dynamic team ensures that every beat resonates with passion and precision.
                   <br/>    <br/>
                  With a commitment to excellence and an unrivaled passion for music, Tyller Sounds Entertainment transforms ordinary gatherings into extraordinary
                   experiences. Get ready to groove, because with us, the rhythm never fades. </p>
                <img  src={headphones} alt='headphones'/>

            </div>
        </div>
    </section>
  )
}

export default About