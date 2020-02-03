import React from "react";
import styles from "./App.module.scss";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Home from "./views/home/Home";
import Footer from "./components/Footer/Footer";

class App extends React.Component {
  state = {
    login: "admin",
    password: "admin"
  };
  render() {
    return (
      <>
        <Header />
        <div className={styles.wrapper}>
          <Home />
        </div>
        <Footer />
      </>
    );
  }
}

export default App;
