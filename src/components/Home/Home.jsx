import React, { useEffect, useState } from 'react';
import styles from './Home.module.css';

function Home() {

  const[currentIndex, setCurrentIndex] = useState(0);
  const images = [
    '../../../src/assets/home/dj1.png',
    '../../../src/assets/home/dj2.jpg',
    '../../../src/assets/home/dj3.jpg',
    '../../../src/assets/home/dj4.jpg',
    '../../../src/assets/home/dj5.jpg',
  ];

  useEffect(()=>{
    const interval = setInterval(()=> {
      setCurrentIndex((prevIndex)=>(prevIndex + 1)% images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);



  return (
    <section className={styles.container} style={{ backgroundImage: `url(${images[currentIndex]})` }}>
        <p>Home of massive entertainment</p>
        <h1 className={styles.title}>TYLLER SOUNDS ENTERTAINMENT</h1>
        <button>Contact Us</button>
    </section>
  )
}

export default Home