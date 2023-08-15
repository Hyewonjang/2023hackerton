import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styles from '../../assets/css/AskModal.module.css';

/* 텍스트 아이콘 사용 */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

function AskModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className={styles.btn}>
        전화번호 확인하기 {" "}
        <FontAwesomeIcon icon={faPhone} />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className={styles.modal_title}>주문/교환/환불 문의</Modal.Title>
        </Modal.Header>
        <Modal.Body className={styles.modal_body}><strong>010-0000-0000</strong> 으로 전화해서<br /> 문의내용을 말씀해주세요!</Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={handleClose}>
            닫기
          </Button> */}
          <Button variant="primary" onClick={handleClose} className={styles.okaybtn}>
            확인
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AskModal;