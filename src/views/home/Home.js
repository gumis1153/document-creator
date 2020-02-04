import React from "react";

import styles from "./Home.module.scss";

const Home = () => {
  return (
    <section className={styles.wrapper}>
      <div>
        <h2>Dziś jest piękny dzień</h2>
        <h4>Uśmiechnij się :)</h4>
      </div>
      <div className={styles.container}>
        <article>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum,
            repudiandae fugit quam quod quo optio dolor in consequuntur eveniet
            ullam hic impedit delectus sequi, sunt amet facere, obcaecati
            possimus. Et!
          </p>
        </article>
      </div>
    </section>
  );
};

export default Home;
