import React, { useState } from "react";
import styles from "./Navbar.module.css";
import logo from "../../assets/nav/logo.jpg";
import closeIcon from "../../assets/nav/closeIcon.png";
import closeButton from "../../assets/nav/menuIcon.png";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const[hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (item) => {
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <div className={styles.navbar}>
      <img className={styles.logo} src={logo} alt="logo" />
      <div className={styles.menu}>
        <img
          src={menuOpen ? closeIcon : closeButton}
          alt="menu"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuList} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/events">Events</Link>
          </li>
          <li>
            <Link to="/events">Booking</Link>
          </li>
          <li onMouseEnter={()=>handleMouseEnter('audioMixes')} onMouseLeave={handleMouseLeave} >
            <Link to="/audioMixes">Audio Mixes</Link>
            {
              hoveredItem === 'audioMixes' && (
                <div className={styles.children}>
                <ul>
                  <li>2024 Mixes</li>
                  <li>2023 Mixes</li>
                  <li>2022 Mixes</li>
                  <li>2021 Mixes</li>
                  <li>2020 Mixes</li>
                  <li>2019 Mixes</li>
                  <li>2018 Mixes</li>
                  <li>2017 Mixes</li>
                </ul>
              </div>
              )
            }
          </li>

          <li onMouseEnter={()=>handleMouseEnter('videoMixes')} onMouseLeave={handleMouseLeave} >
            <Link to="/videoMixes">Video Mixes</Link>
            {
              hoveredItem === 'videoMixes' && (

                <div className={styles.withChildren}>
                <ul>
                  <li>2024 Mixes</li>
                  <li>2023 Video Mixes</li>
                  <li>2022 Video Mixes</li>
                  <li>2021 Video Mixes</li>
                  <li>2020 Video Mixes</li>
                  <li>2019 Video Mixes</li>
                  <li>2018 Video Mixes</li>
                  <li>2017 Video Mixes</li>
                </ul>
              </div>
              )
            }
          </li>

     
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
