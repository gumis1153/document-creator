import React from 'react';
import styles from './Modal.module.scss';
import AppDocs from '../../docs/Docs';

const ModalGeneratedDocs = ({ closeGeneratedDocsModalFn, client }) => {
  const { wrapperGeneratedDocs, header, generatedDocsContent } = styles;
  const fn = () => {
    console.log('kliknięte');
  };
  console.log(client);
  return (
    <div className={wrapperGeneratedDocs}>
      <div className={header}>
        <div className={styles.btnClose} onClick={closeGeneratedDocsModalFn}></div>
      </div>
      <div className={generatedDocsContent}>
        <AppDocs client={client} />
      </div>
    </div>
  );
};

export default ModalGeneratedDocs;
