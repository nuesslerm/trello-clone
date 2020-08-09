import React, { useState, useEffect } from 'react';

import './alert.styles.scss';

const AlertModal = (props) => {
  const [modalDisplay, setModalDisplay] = useState('none');

  const openModal = () => {
    setDisplay('block');
  };
  const closeModal = () => {
    toggleDisplay('none');
    props.hideError(null);
  };

  useEffect(() => {
    if (props.errorMessage !== null) {
      openModal();
    } else {
      closeModal();
    }
  });

  return (
    <div className="alert-modal">
      <div className="alert-message">
        <span>{props.errorMessage}</span>
        <button type="button" className="close" onClick={() => closeModal()}>
          CLOSE
        </button>
      </div>
    </div>
  );
};

export default AlertModal;
