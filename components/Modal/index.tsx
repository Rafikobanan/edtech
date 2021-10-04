import React from 'react';
import CrossSvg from 'assets/cross.svg';
import { useSelector } from 'react-redux';
import { getGlobalActiveModal } from 'redux/slices/global';
import { useActions } from 'hooks/useActions';
import styles from './styles.module.scss';
import Register from './Register';
import Construct from './Construct';

const Modal = () => {
  const { setActiveModal } = useActions();
  const activeModal = useSelector(getGlobalActiveModal);

  const handleCloseClick = () => setActiveModal(null);
  const stopPropagation = (e: React.MouseEvent) => e.stopPropagation();

  const renderContent = () => {
    switch (activeModal) {
      case 'register':
        return <Register />;
      case 'construct':
        return <Construct />;
    }
  };

  if (activeModal === null) return null;

  return (
    <div className={styles.overlay} onClick={handleCloseClick}>
      <div className={styles.wrapper}>
        <div onClick={stopPropagation} className={styles.modal}>
          <button onClick={handleCloseClick} type="button" className={styles.button}>
            <CrossSvg />
          </button>
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Modal;
