import React from "react";
import styles from "./header.module.scss";

const Header = () => {
  // const date = new Date();

  // const time = () => {
  //   const hours =
  //     date.getHours() < 10 ? `0${date.getHours()}` : `${date.getHours()}`;

  //   const minutes =
  //     date.getMinutes() < 10 ? `0${date.getMinutes()}` : `${date.getMinutes()}`;

  //   const seconds =
  //     date.getSeconds() < 10 ? `0${date.getSeconds()}` : `${date.getSeconds()}`;

  //   const fullTime = `${hours}:${minutes}:${seconds}`;
  //   console.log(setInterval(fullTime, 1000));

  //   return fullTime;
  // };

  // const day = () => {
  //   const day =
  //     date.getDate() < 10 ? `0${date.getDate()}` : `${date.getDate()}`;
  //   const month =
  //     date.getMonth() + 1 < 10
  //       ? `0${date.getMonth() + 1}`
  //       : `${date.getMonth()}`;
  //   const year = date.getFullYear();
  //   const fullDay = `${day}.${month}.${year}`;
  //   return fullDay;
  // };

  return (
    <header>
      <div className={styles.wrapper}>
        <span>Czas: ogarnij funkcje </span>
        <h2>Kreator dokumentów</h2>
      </div>
    </header>
  );
};

export default Header;
