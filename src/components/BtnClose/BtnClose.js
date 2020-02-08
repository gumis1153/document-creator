import React from 'react';
import styles from './BtnClose.module.scss';

const BtnClose = ({ closeModalFn }) => {
  return <div className={styles.btnClose} onClick={closeModalFn}></div>;
};

export default BtnClose;
