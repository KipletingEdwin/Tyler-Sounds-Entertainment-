import React, { useState } from 'react';
import styles from './Navbar.module.css';
import logo from '../../assets/nav/logo.jpg';
import closeIcon from '../../assets/nav/closeIcon.png';
import closeButton from '../../assets/nav/menuIcon.png';



function Navbar() {
    const[menuOpen, setMenuOpen] = useState(false);



  return (
    <div className={styles.navbar}>
        <img className={styles.logo} src={logo} alt='logo'/>
        {/* <h3 className={styles.title}> TYLER SOUNDS ENTERTAINMENT</h3> */}
        <div className={styles.menu}>
            <img src={menuOpen ? closeIcon : closeButton} alt='menu' onClick={()=> setMenuOpen(!menuOpen)}  />
            <ul className={`${styles.menuList} ${menuOpen && styles.menuOpen}`}  onClick={() => setMenuOpen(false)}   >
                <li><a href='/'>Home</a></li>
                <li><a href='/about'>About</a></li>
                <li><a href='/events'>Events</a></li>
                <li><a href='/events'>Booking</a></li>
                <li><a href='/audioMixes'>Audio Mixes</a></li>
                <li><a href='/videoMixes'>Video Mixes</a></li>
                <li><a href='/contact'>Contact</a></li>
            </ul>
        </div>
    </div>
  )
}


export default Navbar