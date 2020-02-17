import React from 'react';

import styles from './Home.module.scss';

const Home = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div>
          <h2>Dziś jest piękny dzień</h2>
          <h4>Uśmiechnij się :)</h4>
        </div>
        <div className={styles.photoContainer}>
          <img src="https://source.unsplash.com/1000x509/?landscapes" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Home;
