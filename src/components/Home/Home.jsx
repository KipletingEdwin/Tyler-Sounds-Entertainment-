import React from 'react';
import styles from './Home.module.css';

function Home() {
  return (
    <section className={styles.container}>
        <p>Home of massive entertainment</p>
        <h1 className={styles.title}>TYLLER SOUNDS ENTERTAINMENT</h1>
        <button>Contact Us</button>
    </section>
  )
}

export default Home