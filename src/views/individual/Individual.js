import React from 'react';
import styles from './individual.module.scss';
import Modal from '../../components/Modal/Modal';
import ModalSummary from '../../components/Modal/ModalSummary';

class Individual extends React.Component {
  state = {
    newClient: {},
    modalAddNewClientOpen: false,
    modalSummaryClientOpen: false,
  };

  dataFromFormThroughModal = newClient => {
    const addDate = new Date();
    const day = addDate.getDate() < 10 ? `0${addDate.getDate()}` : `${addDate.getDate()}`;
    const month =
      addDate.getMonth() + 1 < 10 ? `0${addDate.getMonth() + 1}` : `${addDate.getMonth()}`;
    const year = addDate.getFullYear();

    //pozostałe dane potrzebne do bazy
    const addData = `${day}.${month}.${year}`;
    const id = `ic${this.props.individualClientDB.length + 1}`;
    const type = 'individual';

    //dodanie do istniejącej bazy
    newClient = { id, type, ...newClient, addData };
    this.setState({
      newClient,
      modalAddNewClientOpen: false,
      modalSummaryClientOpen: true,
    });
  };

  handleAddNewClient = () => {
    //dodanie nowego klienta do 'bazy danych'
    const individualDB = this.props.individualClientDB;
    individualDB.push(this.state.newClient);
    this.handleCloseModalAddClient();
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
    const { modalAddNewClientOpen, modalSummaryClientOpen, newClient } = this.state;
    const {
      handleCloseModalAddClient,
      dataFromFormThroughModal,
      handleAddNewClient,
      handleOpenModalAddClient,
    } = this;
    const { wrapper, container, filters, listTitles, results } = styles;
    return (
      <section className={wrapper}>
        {modalAddNewClientOpen && (
          <Modal
            closeModalFn={handleCloseModalAddClient}
            dataFromFormThroughModal={dataFromFormThroughModal}
          />
        )}
        {modalSummaryClientOpen && (
          <ModalSummary
            closeModalFn={handleCloseModalAddClient}
            newClient={newClient}
            addNewClientFn={handleAddNewClient}
          />
        )}
        <div>
          <h2>Klienci indywidualni</h2>
        </div>
        <div className={container}>
          <div className={filters}>
            <button onClick={handleOpenModalAddClient}>Dodaj nowego</button>
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

          <div className={listTitles}>
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
          <div className={results}>
            {this.props.individualClientDB.map(item => (
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
