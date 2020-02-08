import React from 'react';
import styles from './App.module.scss';
import Header from './components/Header/Header';
import { BrowserRouter as Router, NavLink, Switch, Route } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faUser,
  faIndustry,
  faBoxOpen,
  faFileAlt,
  faCog,
} from '@fortawesome/free-solid-svg-icons';
import Home from './views/home/Home';
import Individual from './views/individual/Individual';
import Companies from './views/companies/companies';
import Products from './views/products/products';
import Documentation from './views/documentation/documentation';
import Settings from './views/settings/settings';
import Footer from './components/Footer/Footer';

class App extends React.Component {
  state = {};
  render() {
    return (
      <>
        <Header />

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

            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/individual" component={Individual} />
              <Route exact path="/companies" component={Companies} />
              <Route exact path="/products" component={Products} />
              <Route exact path="/documentation" component={Documentation} />
              <Route exact path="/settings" component={Settings} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </>
    );
  }
}

export default App;
