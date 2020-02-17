import React from 'react';
import styles from './individual.module.scss';
import Modal from '../../components/Modal/Modal';
import ModalSummary from '../../components/Modal/ModalSummary';

class Individual extends React.Component {
  state = {
    clientDB: [],
    newClient: {},
    modalAddNewClientOpen: false,
    modalSummaryClientOpen: false,
    modalClientInfoOpen: false,
    modalFinalAcceptOpen: false,
    searchElement: 'firstName',
  };

  componentDidMount() {
    this.setState({
      clientDB: this.props.individualClientDB,
    });
  }

  dataFromFormThroughModal = newClient => {
    const addDate = new Date();
    const day = addDate.getDate() < 10 ? `0${addDate.getDate()}` : `${addDate.getDate()}`;
    const month =
      addDate.getMonth() + 1 < 10 ? `0${addDate.getMonth() + 1}` : `${addDate.getMonth()}`;
    const year = addDate.getFullYear();

    //pozostałe dane potrzebne do bazy
    const addData = `${day}.${month}.${year}`;
    const id = `ic${this.state.clientDB.length + 1}`;
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
    const individualDB = this.state.clientDB;
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
      newClient: {},
      modalAddNewClientOpen: false,
      modalSummaryClientOpen: false,
      modalClientInfoOpen: false,
      modalFinalAcceptOpen: false,
    });
  };

  //otwieranie info o kliencie
  handleShowClientInfo = e => {
    let index = e.target.getAttribute('data-id');
    const newClient = this.state.clientDB.find(obj => obj.id === index);
    this.setState({
      newClient,
      modalSummaryClientOpen: true,
      modalClientInfoOpen: true,
    });
  };

  closeFinalAcceptModal = () => {
    this.setState({
      modalFinalAcceptOpen: false,
    });
  };

  openFinalAcceptModal = () => {
    this.setState({
      modalFinalAcceptOpen: true,
    });
  };

  removeClient = () => {
    const idOfRemovedElement = this.state.newClient.id.slice(2) - 1;
    this.state.clientDB.splice(idOfRemovedElement, 1);
    //nadaje nowe id klientom w bazie
    let newId = 1;
    this.state.clientDB.forEach(item => {
      item.id = `ic${newId++}`;
    });
    this.handleCloseModalAddClient();
  };

  //sortowanie;
  handleSort = e => {
    const { clientDB } = this.state;
    const { value } = e.target;

    switch (value) {
      case 'default':
        this.setState({
          clientDB: clientDB.sort((a, b) => {
            return a.id - b.id;
          }),
        });
        break;
      case 'dateAscending':
        this.setState({
          clientDB: clientDB.sort((a, b) => {
            return a.addData > b.addData ? 1 : -1;
          }),
        });
        break;
      case 'dateDescending':
        this.setState({
          clientDB: clientDB.sort((a, b) => {
            return a.addData < b.addData ? 1 : -1;
          }),
        });
        break;
      case 'surnameAscending':
        this.setState({
          clientDB: clientDB.sort((a, b) => {
            return a.lastName > b.lastName ? 1 : -1;
          }),
        });
        break;
      case 'surnameDescending':
        this.setState({
          clientDB: clientDB.sort((a, b) => {
            return a.lastName < b.lastName ? 1 : -1;
          }),
        });
        break;
    }
  };

  handleChangeSearchElement = e => {
    this.setState({
      searchElement: e.target.value,
    });
  };

  // handleSearch = e => {
  // let searchElement = this.state.searchElement;
  // const getClient = this.state.clientDB.findIndex(
  // client => client.searchElement === `${e.target.value}`,
  // );
  // this.state.clientDB.find();
  // console.log(getClient);
  // };
  render() {
    const { modalAddNewClientOpen, modalSummaryClientOpen, newClient } = this.state;
    const {
      handleCloseModalAddClient,
      dataFromFormThroughModal,
      handleAddNewClient,
      handleOpenModalAddClient,
      openFinalAcceptModal,
      closeFinalAcceptModal,
      handleCloseFinalAccept,
      removeClient,
      handleSort,
      handleChangeSearchElement,
      handleSearch,
    } = this;
    const { wrapper, container, filters, listTitles, results, item } = styles;
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
            modalClientInfoOpen={this.state.modalClientInfoOpen}
            openFinalAcceptModalFn={openFinalAcceptModal}
            closeFinalAcceptModalFn={closeFinalAcceptModal}
            modalFinalAcceptOpen={this.state.modalFinalAcceptOpen}
            modalFinalAcceptClose={handleCloseFinalAccept}
            removeClient={removeClient}
          />
        )}
        <div>
          <h2>Klienci indywidualni</h2>
        </div>
        <div className={container}>
          <div className={filters}>
            <button onClick={handleOpenModalAddClient}>Dodaj nowego</button>
            <select onChange={handleSort}>
              <option value="default">Sortowanie domyślne</option>
              <option value="dateAscending">Data wprowadzenia - rosnąca</option>
              <option value="dateDescending">Data wprowadzenia - malejąca</option>
              <option value="surnameAscending">Nazwisko - rosnąco</option>
              <option value="surnameDescending">Nazwisko - malejąco</option>
            </select>
            <div>
              <span>Szukaj po:</span>
              <select onChange={handleChangeSearchElement}>
                <option value="firstName">Imię</option>
                <option value="lastName">Nazwisko</option>
                <option value="city">Miasto</option>
                <option value="street">Ulica</option>
              </select>
              <input type="text" placeholder="Szukaj..." onChange={handleSearch} />
            </div>
          </div>

          <div className={listTitles}>
            <div>
              <span>Id</span>
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
            {this.state.clientDB.map((element, index) => (
              <div
                key={index}
                className={item}
                key={index}
                onClick={this.handleShowClientInfo}
                data-id={element.id}
              >
                <div>
                  <span>{element.id}</span>
                </div>
                <div>
                  <span>{element.firstName}</span>
                </div>
                <div>
                  <span>{element.lastName}</span>
                </div>
                <div>
                  <span>{element.city}</span>
                </div>
                <div>
                  <span>{element.street}</span>
                </div>
                <div>
                  <span>{element.homeNumber}</span>
                </div>
                <div>
                  <span>{element.addData}</span>
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
