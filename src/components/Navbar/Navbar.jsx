import React, { useState } from "react";
import styles from "./Navbar.module.css";
import logo from "../../assets/nav/logo.jpg";
import closeIcon from "../../assets/nav/closeIcon.png";
import closeButton from "../../assets/nav/menuIcon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan,faChevronDown } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

function Navbar() {
  
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

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
          <li
            onMouseEnter={() => handleMouseEnter("audioMixes")}
            onMouseLeave={handleMouseLeave}
          >
            <div className={styles.subDiv}>
              <Link to="/audioMixes" className={styles.link}>
                Audio Mixes
                <FontAwesomeIcon
                  icon={ hoveredItem === "audioMixes" ? faChevronDown : faGreaterThan}
                  className={styles.faGreaterThan}
                />
              </Link>
            </div>

            {hoveredItem === "audioMixes" && (
              <div className={styles.children}>
                <ul>
                  <li>
                    <Link to="/2024Mixes"> 2024 Mixes</Link>
                  </li>
                  <li>
                    <Link to="/2023Mixes"> 2023 Mixes</Link>
                  </li>
                  <li>
                    <Link to="/2022Mixes"> 2022 Mixes</Link>
                  </li>
                  <li>
                    <Link to="/2021Mixes"> 2021 Mixes</Link>
                  </li>
                  <li>
                    <Link to="/2020Mixes"> 2020 Mixes</Link>
                  </li>
                  <li>
                    <Link to="/2019Mixes"> 2019 Mixes</Link>
                  </li>
                  <li>
                    <Link to="/2018Mixes"> 2018 Mixes</Link>
                  </li>
                  <li>
                    <Link to="/2017Mixes"> 2017 Mixes</Link>
                  </li>
                </ul>
              </div>
            )}
          </li>

          <li
            onMouseEnter={() => handleMouseEnter("videoMixes")}
            onMouseLeave={handleMouseLeave}
          >
            <div className={styles.subDiv}>
              <Link to="/videoMixes" className={styles.link}>
                Video Mixes
                <FontAwesomeIcon
                  icon={ hoveredItem === "videoMixes" ? faChevronDown : faGreaterThan}
                  className={styles.faGreaterThan}
                />
              </Link>
            </div>
            {hoveredItem === "videoMixes" && (
              <div className={styles.withChildren}>
                <ul>
                  <li>
                    <Link to="/2024VideoMixes">2024 Mixes</Link>
                  </li>
                  <li>
                    <Link to="/2023VideoMixes">2023 Video Mixes</Link>
                  </li>
                  <li>
                    <Link to="/2022VideoMixes">2022 Video Mixes </Link>
                  </li>
                  <li>
                    <Link to="/2021VideoMixes">2021 Video Mixes</Link>
                  </li>
                  <li>
                    <Link to="2020VideoMixes">2020 Video Mixes</Link>
                  </li>
                  <li>
                    <Link to="/2019VideoMixes">2019 Video Mixes</Link>
                  </li>
                  <li>
                    <Link to="201VideoMixes">2018 Video Mixes</Link>
                  </li>
                  <li>
                    <Link to="2017VideoMixes">2017 Video Mixes</Link>
                  </li>
                </ul>
              </div>
            )}
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
