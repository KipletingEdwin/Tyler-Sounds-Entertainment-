import React from "react";
import styles from "./Services.module.css";
import services from "../../Data/services.json";


function Services() {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}> Services</h2>
      <h4>Some of the services we offer include but not limited to:</h4>

      <div className={styles.services}>
        {services.map((serv, id) => (
          <div key={id} className={styles.service}>
            <h5 className={styles.subtitle} >{serv.service}</h5>
            <p className={styles.description}>{serv.description}</p>
            <div className={styles.imageContainer}>
              {serv.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Image ${index + 1}`}
                  className={styles.myImage}
                />
              ))}
            </div>
          </div>
        ))}
      </div>


    </section>
  );
}

export default Services;
