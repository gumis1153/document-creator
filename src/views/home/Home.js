import React from "react";
import {
  BrowserRouter as Router,
  //   Switch,
  //   Route,
  NavLink
} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faIndustry,
  faBoxOpen,
  faFileAlt,
  faCog
} from "@fortawesome/free-solid-svg-icons";

import styles from "./Home.module.scss";

const Home = () => {
  return (
    <Router>
      <div className={styles.wrapper}>
        <aside>
          <nav>
            <ul>
              <li>
                <NavLink exact to="/" activeClassName={styles.active}>
                  <FontAwesomeIcon className={styles.ico} icon={faHome} />
                </NavLink>
              </li>
              <li>
                <NavLink to="/individual" activeClassName={styles.active}>
                  <FontAwesomeIcon className={styles.ico} icon={faUser} />
                </NavLink>
              </li>
              <li>
                <NavLink to="/companies" activeClassName={styles.active}>
                  <FontAwesomeIcon className={styles.ico} icon={faIndustry} />
                </NavLink>
              </li>
              <li>
                <NavLink to="/products" activeClassName={styles.active}>
                  <FontAwesomeIcon className={styles.ico} icon={faBoxOpen} />
                </NavLink>
              </li>
              <li>
                <NavLink to="/documentation" activeClassName={styles.active}>
                  <FontAwesomeIcon className={styles.ico} icon={faFileAlt} />
                </NavLink>
              </li>
              <li>
                <NavLink to="/settings" activeClassName={styles.active}>
                  <FontAwesomeIcon className={styles.ico} icon={faCog} />
                </NavLink>
              </li>
            </ul>
          </nav>
        </aside>
        <section>
          <h3>Dziś jest piękny dzień.</h3>
        </section>
      </div>
    </Router>
  );
};

export default Home;
