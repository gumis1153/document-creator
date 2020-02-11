import React from 'react';
import loadingIcon from '../../assets/images/loading.gif';

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
        <article>
          {/* <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            dolorem id nesciunt earum itaque neque ipsum, sequi dolores unde
            odit expedita quis vel ab, magnam illo exercitationem quia aperiam?
            Impedit?
          </p> */}
        </article>
      </div>
    </section>
  );
};

export default Home;
