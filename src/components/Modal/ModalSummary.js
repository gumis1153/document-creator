import React from 'react';
import BtnClose from '../BtnClose/BtnClose';
import ModalFinalAccept from './ModalFinalAccept';
import styles from './Modal.module.scss';

const ModalSummary = ({
  closeModalFn,
  newClient,
  addNewClientFn,
  modalClientInfoOpen,
  removeClient,
  modalFinalAcceptOpen,
  openFinalAcceptModalFn,
  closeFinalAcceptModalFn,
}) => {
  const {
    wrapper,
    summary,
    newClientData,
    newClientDataInfo,
    indexNames,
    small,
    summaryOptions,
    summaryBtn,
  } = styles;
  const {
    id,
    addData,
    firstName,
    lastName,
    phone,
    email,
    city,
    postcode,
    street,
    homeNumber,
  } = newClient;

  const handleGenerateDocs = () => {
    console.log('generowanie dokumentów');
    window.open('/personal-data-docs');
  };

  return (
    <div className={wrapper}>
      {modalFinalAcceptOpen ? (
        <ModalFinalAccept
          closeFinalAcceptModalFn={closeFinalAcceptModalFn}
          removeClientFn={removeClient}
        />
      ) : null}
      <h2>Klienci indywidualni</h2>
      <h4>Dodawanie nowego - podsumowanie</h4>
      {modalClientInfoOpen ? <BtnClose closeModalFn={closeModalFn} /> : null}
      <div className={summary}>
        <div className={newClientData}>
          <div className={indexNames}>
            <span className={small}>Id:</span>
            <span className={small}>Data dodania:</span> <span className={small}>Imię:</span>
            <span className={small}>Nazwisko:</span>
            <span className={small}>Nr telefonu:</span>
            <span className={small}>Email:</span>
            <span className={small}>Miasto:</span>
            <span className={small}>Kod pocztowy:</span>
            <span className={small}>Ulica:</span>
            <span className={small}>Nr domu:</span>
          </div>
          <div className={newClientDataInfo}>
            <span>{id}</span>
            <span>{addData}</span>
            <span>{firstName}</span>
            <span>{lastName}</span>
            <span>{phone}</span>
            <span>{email}</span>
            <span>{city}</span>
            <span>{postcode}</span>
            <span>{street}</span>
            <span>{homeNumber}</span>
          </div>
        </div>

        <div className={summaryOptions}>
          {' '}
          {!modalClientInfoOpen ? (
            <button className={summaryBtn} onClick={closeModalFn}>
              Anuluj
            </button>
          ) : null}
          <button className={summaryBtn} onClick={handleGenerateDocs}>
            Generuj dokumenty
          </button>
          {!modalClientInfoOpen ? (
            <button className={summaryBtn} onClick={addNewClientFn}>
              Dodaj i zakończ
            </button>
          ) : null}
          {modalClientInfoOpen ? (
            <button className={summaryBtn} onClick={openFinalAcceptModalFn}>
              Usuń użytkownika
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ModalSummary;
