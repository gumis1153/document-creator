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
import AppDocs from './docs/Docs';
import Footer from './components/Footer/Footer';

class App extends React.Component {
  // symulacja api w state
  state = {
    individualClientsDB: [
      {
        id: '1',
        type: 'individual',
        firstName: 'Maciej',
        lastName: 'Nowak',
        street: 'Dąbrowskiego',
        homeNumber: '72',
        city: 'Warszawa',
        postcode: '00-001',
        email: 'm.dabrowski@poczta.org',
        phone: '555-555-555',
        addData: '04.02.2020',
      },
      {
        id: '2',
        type: 'individual',
        firstName: 'Adam',
        lastName: 'Kowalski',
        street: 'Grunwaldzka',
        homeNumber: '3',
        city: 'Poznań',
        postcode: '87-273',
        email: 'a.kowalski@poczta.org',
        phone: '585-555-888',
        addData: '04.02.2020',
      },
      {
        id: '3',
        type: 'individual',
        firstName: 'Oliwia',
        lastName: 'Kaczmarek',
        street: 'Rynek',
        homeNumber: '64',
        city: 'Poznań',
        postcode: '23-401',
        email: 'o.kaczmarek@poczta.org',
        phone: '525-525-555',
        addData: '04.02.2020',
      },
      {
        id: '4',
        type: 'individual',
        firstName: 'Piotr',
        lastName: 'Tomowiak',
        street: 'Lotnicza',
        homeNumber: '42/2',
        city: 'Leszno',
        postcode: '64-100',
        email: 'p.tomowiak@poczta.org',
        phone: '123-456-789',
        addData: '04.02.2020',
      },
      {
        id: '5',
        type: 'individual',
        firstName: 'Adam',
        lastName: 'Kowalski',
        street: 'Grunwaldzka',
        homeNumber: '3',
        city: 'Poznań',
        postcode: '87-273',
        email: 'a.kowalski@poczta.org',
        phone: '585-555-888',
        addData: '04.02.2020',
      },
      {
        id: '6',
        type: 'individual',
        firstName: 'Oliwia',
        lastName: 'Kaczmarek',
        street: 'Rynek',
        homeNumber: '64',
        city: 'Poznań',
        postcode: '23-401',
        email: 'o.kaczmarek@poczta.org',
        phone: '525-525-555',
        addData: '04.02.2020',
      },
      {
        id: '7',
        type: 'individual',
        firstName: 'Maciej',
        lastName: 'Nowak',
        street: 'Dąbrowskiego',
        homeNumber: '72',
        city: 'Warszawa',
        postcode: '00-001',
        email: 'm.dabrowski@poczta.org',
        phone: '555-555-555',
        addData: '04.02.2020',
      },
      {
        id: '8',
        type: 'individual',
        firstName: 'Adam',
        lastName: 'Kowalski',
        street: 'Grunwaldzka',
        homeNumber: '3',
        city: 'Poznań',
        postcode: '87-273',
        email: 'a.kowalski@poczta.org',
        phone: '585-555-888',
        addData: '04.02.2020',
      },
      {
        id: '9',
        type: 'individual',
        firstName: 'Oliwia',
        lastName: 'Kaczmarek',
        street: 'Rynek',
        homeNumber: '64',
        city: 'Poznań',
        postcode: '23-401',
        email: 'o.kaczmarek@poczta.org',
        phone: '525-525-555',
        addData: '04.02.2020',
      },
      {
        id: '10',
        type: 'individual',
        firstName: 'Piotr',
        lastName: 'Tomowiak',
        street: 'Lotnicza',
        homeNumber: '42/2',
        city: 'Leszno',
        postcode: '64-100',
        email: 'p.tomowiak@poczta.org',
        phone: '123-456-789',
        addData: '04.02.2020',
      },
      {
        id: '11',
        type: 'individual',
        firstName: 'Adam',
        lastName: 'Kowalski',
        street: 'Grunwaldzka',
        homeNumber: '3',
        city: 'Poznań',
        postcode: '87-273',
        email: 'a.kowalski@poczta.org',
        phone: '585-555-888',
        addData: '04.02.2020',
      },
      {
        id: '12',
        type: 'individual',
        firstName: 'Oliwia',
        lastName: 'Kaczmarek',
        street: 'Rynek',
        homeNumber: '64',
        city: 'Poznań',
        postcode: '23-401',
        email: 'o.kaczmarek@poczta.org',
        phone: '525-525-555',
        addData: '04.02.2020',
      },
      {
        id: '13',
        type: 'individual',
        firstName: 'Maciej',
        lastName: 'Nowak',
        street: 'Dąbrowskiego',
        homeNumber: '72',
        city: 'Warszawa',
        postcode: '00-001',
        email: 'm.dabrowski@poczta.org',
        phone: '555-555-555',
        addData: '04.02.2020',
      },
      {
        id: '14',
        type: 'individual',
        firstName: 'Adam',
        lastName: 'Kowalski',
        street: 'Grunwaldzka',
        homeNumber: '3',
        city: 'Poznań',
        postcode: '87-273',
        email: 'a.kowalski@poczta.org',
        phone: '585-555-888',
        addData: '04.02.2020',
      },
      {
        id: '15',
        type: 'individual',
        firstName: 'Oliwia',
        lastName: 'Kaczmarek',
        street: 'Rynek',
        homeNumber: '64',
        city: 'Poznań',
        postcode: '23-401',
        email: 'o.kaczmarek@poczta.org',
        phone: '525-525-555',
        addData: '04.02.2020',
      },
      {
        id: '16',
        type: 'individual',
        firstName: 'Piotr',
        lastName: 'Tomowiak',
        street: 'Lotnicza',
        homeNumber: '42/2',
        city: 'Leszno',
        postcode: '64-100',
        email: 'p.tomowiak@poczta.org',
        phone: '123-456-789',
        addData: '04.02.2010',
      },
      {
        id: '17',
        type: 'individual',
        firstName: 'Adam',
        lastName: 'Kowalski',
        street: 'Grunwaldzka',
        homeNumber: '3',
        city: 'Poznań',
        postcode: '87-273',
        email: 'a.kowalski@poczta.org',
        phone: '585-555-888',
        addData: '04.02.2020',
      },
      {
        id: '18',
        type: 'individual',
        firstName: 'Oliwia',
        lastName: 'Kaczmarek',
        street: 'Rynek',
        homeNumber: '64',
        city: 'Poznań',
        postcode: '23-401',
        email: 'o.kaczmarek@poczta.org',
        phone: '525-525-555',
        addData: '04.02.2020',
      },
      {
        id: '19',
        type: 'individual',
        firstName: 'Maciej',
        lastName: 'Nowak',
        street: 'Dąbrowskiego',
        homeNumber: '72',
        city: 'Warszawa',
        postcode: '00-001',
        email: 'm.dabrowski@poczta.org',
        phone: '555-555-555',
        addData: '04.02.2020',
      },
      {
        id: '20',
        type: 'individual',
        firstName: 'Adam',
        lastName: 'Kowalski',
        street: 'Grunwaldzka',
        homeNumber: '3',
        city: 'Poznań',
        postcode: '87-273',
        email: 'a.kowalski@poczta.org',
        phone: '585-555-888',
        addData: '04.02.2008',
      },
      {
        id: '21',
        type: 'individual',
        firstName: 'Oliwia',
        lastName: 'Kaczmarek',
        street: 'Rynek',
        homeNumber: '64',
        city: 'Poznań',
        postcode: '23-401',
        email: 'o.kaczmarek@poczta.org',
        phone: '525-525-555',
        addData: '04.02.2020',
      },
      {
        id: '22',
        type: 'individual',
        firstName: 'Piotr',
        lastName: 'Tomowiak',
        street: 'Lotnicza',
        homeNumber: '42/2',
        city: 'Leszno',
        postcode: '64-100',
        email: 'p.tomowiak@poczta.org',
        phone: '123-456-789',
        addData: '04.02.2020',
      },
      {
        id: '23',
        type: 'individual',
        firstName: 'Adam',
        lastName: 'Kowalski',
        street: 'Grunwaldzka',
        homeNumber: '3',
        city: 'Poznań',
        postcode: '87-273',
        email: 'a.kowalski@poczta.org',
        phone: '585-555-888',
        addData: '04.02.2020',
      },
      {
        id: '24',
        type: 'individual',
        firstName: 'Oliwia',
        lastName: 'Kaczmarek',
        street: 'Rynek',
        homeNumber: '64',
        city: 'Poznań',
        postcode: '23-401',
        email: 'o.kaczmarek@poczta.org',
        phone: '525-525-555',
        addData: '04.02.2020',
      },
    ],
  };

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
              <Route
                exact
                path="/individual"
                render={props => (
                  <Individual {...props} individualClientDB={this.state.individualClientsDB} />
                )}
              />
              <Route exact path="/companies" component={Companies} />
              <Route exact path="/products" component={Products} />
              <Route exact path="/documentation" component={Documentation} />
              <Route exact path="/settings" component={Settings} />
              <Route exact path="/personal-data-docs" component={AppDocs} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </>
    );
  }
}

export default App;
