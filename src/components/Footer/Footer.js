import React from "react";
import styles from "./footer.module.scss";

const year = () => {
  const date = new Date();
  const year = date.getFullYear();
  return year;
};

const Footer = () => {
  return (
    <footer>
      <span className={styles.footer}>
        {year()} | Designed and developed by: piotrjakubowski.pl
      </span>
    </footer>
  );
};

export default Footer;
