import React from "react";
import { Toast, ToastContainer } from "react-bootstrap";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import styles from './Message.module.scss'
const Message = (props) => {
  return (
    <ToastContainer position="top-center">
      <Toast onClose={() => props.setShowToast(false)} show={props.showToast} delay={3000} autohide>
        <Toast.Header>
        </Toast.Header>
        <Toast.Body className={styles.toast}>عملیات با موفقیت انجام شد.</Toast.Body>
      </Toast>
    </ToastContainer>
  );
};

export default Message;
