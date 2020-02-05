import React from "react";
import styles from "./individual.module.scss";

class Individual extends React.Component {
  state = {
    data: null
  };

  render() {
    return (
      <section className={styles.wrapper}>
        <div>
          <h2>Klienci indywidualni</h2>
        </div>
        <div className={styles.container}>
          <div className={styles.filters}>
            <button>Dodaj nowego</button>
            <button>Usuń</button>
            <select>
              <option value="default">Sortowanie domyślne</option>
              <option value="date-">Data wprowadzenia rosnąca</option>
              <option value="date-">Data wprowadzenia malejąca</option>
              <option value="surname-">Nazwisko - rosnąco</option>
              <option value="surname-">Nazwisko - malejąco</option>
              <option value="street-">Ulica - rosnąco</option>
              <option value="street-">Ulica - malejąco</option>
            </select>
            <div>
              <span>Szukaj po:</span>
              <select name="search" id="">
                <option value="name-surname">Imię i nazwisko</option>
                <option value="city">Miasto</option>
                <option value="street">Ulica</option>
              </select>
              <input type="text" placeholder="Szukaj..." />
            </div>
          </div>

          <div className={styles.listTitles}>
            <div>
              <span>Index</span>
            </div>
            <div>
              <span>Imię</span>
            </div>
            <div>
              <span>Nazwisko</span>
            </div>
            <div>
              <span>Miasto</span>
            </div>
            <div>
              <span>Ulica</span>
            </div>
            <div>
              <span>Nr domu</span>
            </div>
            <div>
              <span>Data wprowadzenia</span>
            </div>
          </div>
          <div className={styles.results}>
            <div className={styles.item}>
              <div>
                <span>ic-0001</span>
              </div>
              <div>
                <span>Jan</span>
              </div>
              <div>
                <span>Kowalski</span>
              </div>
              <div>
                <span>Leszno</span>
              </div>
              <div>
                <span>Narutowicza</span>
              </div>
              <div>
                <span>27/2</span>
              </div>
              <div>
                <span>04.02.2020</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Individual;
