import React from 'react';
import BtnClose from '../BtnClose/BtnClose';
import styles from './Modal.module.scss';

const ModalSummary = ({ closeModalFn, newClient }) => {
  return (
    <div className={styles.wrapper}>
      <h2>Klienci indywidualni</h2>
      <h4>Dodawanie nowego - podsumowanie</h4>
      <BtnClose closeModalFn={closeModalFn} />
      <div className={styles.summary}>
        <div className={styles.newClientData}>
          <div className={styles.indexNames}>
            <span className={styles.small}>Id:</span>
            <snap className={styles.small}>Data dodania:</snap>{' '}
            <span className={styles.small}>Imię:</span>
            <span className={styles.small}>Nazwisko:</span>
            <span className={styles.small}>Nr telefonu:</span>
            <span className={styles.small}>Email:</span>
            <span className={styles.small}>Miasto:</span>
            <span className={styles.small}>Kod pocztowy:</span>
            <span className={styles.small}>Ulica:</span>
            <span className={styles.small}>Nr domu:</span>
          </div>
          <div className={styles.newClientDataInfo}>
            <span>{newClient.id}</span>
            <span>{newClient.addData}</span>
            <span>{newClient.firstName}</span>
            <span>{newClient.lastName}</span>
            <span>{newClient.phone}</span>
            <span>{newClient.email}</span>
            <span>{newClient.city}</span>
            <span>{newClient.postcode}</span>
            <span>{newClient.street}</span>
            <span>{newClient.homeNumber}</span>
          </div>
        </div>

        <div className={styles.summaryOptions}>
          <button className={styles.summaryBtn}>Generuj dokumenty</button>
          <button className={styles.summaryBtn}>Dodaj i zakończ</button>
        </div>
      </div>
    </div>
  );
};

export default ModalSummary;
