import React from 'react';
import styles from './Modal.module.scss';

const ModalFinalAccept = ({ removeClientFn, closeFinalAcceptModalFn }) => {
  const { wrapperAccept } = styles;
  return (
    <div className={wrapperAccept}>
      <p>Na pewno usunąć pozycje?</p>
      <button onClick={removeClientFn}>Tak</button>
      <button onClick={closeFinalAcceptModalFn}>Nie</button>
    </div>
  );
};

export default ModalFinalAccept;
