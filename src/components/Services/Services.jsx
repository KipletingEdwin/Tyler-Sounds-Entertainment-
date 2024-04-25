import React from 'react';
import styles from './Services.module.css';

function Services() {
  return (
    <section className={styles.container}>
       <h2 className={styles.title} > Services</h2>
       <div className={styles.services}>

        <div>
        <h6> Wedding DJ Services </h6>
        <p> Create unforgettable wedding memories with our personalized DJ services, tailored to your unique love story and celebration. </p>
        </div>

        <div>
        <h6> Corporate Events </h6>
        <p> Set the perfect ambiance for your corporate event with our professional DJ services, delivering dynamic music and entertainment to elevate your brand presence. </p>
        </div>


       </div>
    </section>
  )
}

export default Services