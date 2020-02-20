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
          Jeśli nie działa https://github.com/sass/node-sass/issues/1579#issuecomment-227661284
        </div>
      </div>
    </section>
  );
};

export default Home;
