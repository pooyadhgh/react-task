import react from 'react';
import styles from '../Modal/Modal.module.css';
import AddNewProduct from '../AddNewProduct/AddNewProduct';
const Modal = props => {
  return (
    <div>
      {props.isShowModal && (
        <div className={styles.backdrop} onClick={props.cancelHandler}></div>
      )}
      <div
        className={styles.modal}
        style={{ display: props.isShowModal ? 'unset' : 'none' }}
      >
        <h2>Enter Product Detail</h2>
        <AddNewProduct
          formHandler={props.formHandler}
          cancelHandler={props.cancelHandler}
        />
      </div>
    </div>
  );
};

export default Modal;
