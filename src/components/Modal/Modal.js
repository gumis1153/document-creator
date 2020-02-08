import React from 'react';
import Form from '../Form/Form';
import BtnClose from '../BtnClose/BtnClose';
import styles from './Modal.module.scss';
import { CLIENT_RENEG_LIMIT } from 'tls';

const Modal = ({ closeModalFn, individualClients, dataFromFormThroughModal }) => {
  const handleSummary = () => {
    console.log('Podsumowanie');
  };

  //przekazanie danych nowego klienta do individual
  const formCallBack = dataFromForm => {
    dataFromFormThroughModal(dataFromForm);
  };
  return (
    <div className={styles.wrapper}>
      <h2>Klienci indywidualni</h2>
      <h4>Dodawanie nowego</h4>
      <BtnClose closeModalFn={closeModalFn} />
      <Form individualClients={individualClients} callBackFromForm={formCallBack} />
    </div>
  );
};

export default Modal;
