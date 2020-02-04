import React from "react";
import styles from "./header.module.scss";

class Header extends React.Component {
  state = {
    time: "",
    date: ""
  };

  componentDidMount() {
    const time = () => {
      const date = new Date();
      const hours =
        date.getHours() < 10 ? `0${date.getHours()}` : `${date.getHours()}`;
      const minutes =
        date.getMinutes() < 10
          ? `0${date.getMinutes()}`
          : `${date.getMinutes()}`;
      const seconds =
        date.getSeconds() < 10
          ? `0${date.getSeconds()}`
          : `${date.getSeconds()}`;
      const fullTime = `${hours}:${minutes}:${seconds}`;
      this.setState({
        time: fullTime
      });
    };

    const day = () => {
      const date = new Date();
      const day =
        date.getDate() < 10 ? `0${date.getDate()}` : `${date.getDate()}`;
      const month =
        date.getMonth() + 1 < 10
          ? `0${date.getMonth() + 1}`
          : `${date.getMonth()}`;
      const year = date.getFullYear();
      const fullDay = `${day}.${month}.${year}`;
      this.setState({
        date: fullDay
      });
    };

    setInterval(() => {
      time();
      day();
    }, 1000);
  }

  render() {
    return (
      <header>
        <div className={styles.wrapper}>
          <div className={styles.timer}>
            <span className={styles.time}>{this.state.time}</span>
            <span className={styles.date}>{this.state.date}</span>
          </div>

          <h2>Kreator dokumentów</h2>
        </div>
      </header>
    );
  }
}

export default Header;
