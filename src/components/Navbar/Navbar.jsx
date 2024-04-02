import React from 'react';
import styles from './Navbar.module.css';
import logo from '../../assets/nav/logo.jpg';

function Navbar() {
  return (
    <div className={styles.navbar}>
        <img className={styles.logo} src={logo} alt='logo'/>
        <div className={styles.menu}>
            <ul className={styles.menuList}>
                <li><a href='/'>Home</a></li>
                <li><a href='/events'>Events</a></li>
                <li><a href='/about'>About</a></li>
                <li><a href='/audioMixes'>Audio Mixes</a></li>
                <li><a href='/videoMixes'>Video Mixes</a></li>
                <li><a href='/contact'>Contact</a></li>
            </ul>

        </div>

    </div>
  )
}

export default Navbar