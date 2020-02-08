import React from 'react';
import styles from './individual.module.scss';
import Modal from '../../components/Modal/Modal';
import ModalSummary from '../../components/Modal/ModalSummary';

class Individual extends React.Component {
  state = {
    // symulacja api w state
    data: [
      {
        id: 'ic1',
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
        id: 'ic2',
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
        id: 'ic3',
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
        id: 'ic4',
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
        id: 'ic5',
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
        id: 'ic6',
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
    newClient: {},
    modalAddNewClientOpen: false,
    modalSummaryClientOpen: false,
  };

  componentDidMount() {
    console.log('działa');
  }

  dataFromFormThroughModal = newClient => {
    const addDate = new Date();
    const day = addDate.getDate() < 10 ? `0${addDate.getDate()}` : `${addDate.getDate()}`;
    const month =
      addDate.getMonth() + 1 < 10 ? `0${addDate.getMonth() + 1}` : `${addDate.getMonth()}`;
    const year = addDate.getFullYear();

    //pozostałe dane potrzebne do bazy
    const addData = `${day}.${month}.${year}`;
    const id = `ic${this.state.data.length + 1}`;
    const type = 'individual';

    //dodanie do istniejącej bazy
    newClient = { id, type, ...newClient, addData };
    // console.log(newClient);
    // const updatedData = this.state.data;
    // updatedData.push(newClient);
    this.setState({
      newClient,
      modalAddNewClientOpen: false,
      modalSummaryClientOpen: true,
    });
    console.log(this.state.newClient);
  };

  handleOpenModalAddClient = () => {
    this.setState({
      modalAddNewClientOpen: true,
    });
  };

  handleCloseModalAddClient = () => {
    this.setState({
      modalAddNewClientOpen: false,
      modalSummaryClientOpen: false,
    });
  };

  render() {
    return (
      <section className={styles.wrapper}>
        {this.state.modalAddNewClientOpen && (
          <Modal
            closeModalFn={this.handleCloseModalAddClient}
            individualClients={this.state.data}
            dataFromFormThroughModal={this.dataFromFormThroughModal}
          />
        )}
        {this.state.modalSummaryClientOpen && (
          <ModalSummary
            closeModalFn={this.handleCloseModalAddClient}
            newClient={this.state.newClient}
          />
        )}
        <div>
          <h2>Klienci indywidualni</h2>
        </div>
        <div className={styles.container}>
          <div className={styles.filters}>
            <button onClick={this.handleOpenModalAddClient}>Dodaj nowego</button>
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
            {this.state.data.map(item => (
              <div key={item.id} className={styles.item} data-id={item.id}>
                <div>
                  <span>{item.id}</span>
                </div>
                <div>
                  <span>{item.firstName}</span>
                </div>
                <div>
                  <span>{item.lastName}</span>
                </div>
                <div>
                  <span>{item.city}</span>
                </div>
                <div>
                  <span>{item.street}</span>
                </div>
                <div>
                  <span>{item.homeNumber}</span>
                </div>
                <div>
                  <span>{item.addData}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default Individual;
