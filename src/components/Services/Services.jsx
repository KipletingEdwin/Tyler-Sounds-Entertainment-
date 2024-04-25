import React from 'react';
import styles from './Services.module.css';
import services from '../../Data/services.json';

function Services() {
  return (
    <section className={styles.container}>
       <h2 className={styles.title} > Services</h2>
       <h4>Some of the services we offer include but not limited to:</h4>
       <div className={styles.services}>
        {
          services.map((serv, id)=>(
            <div key={id} className={styles.service}>
              <h5>{serv.service}</h5>
              <p>{serv.description}</p>
            </div>
          ))
        }
       </div>
    </section>
  )
}

export default Services