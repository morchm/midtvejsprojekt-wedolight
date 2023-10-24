"use client";
import React from "react";
import style from "./Contact.module.scss";

//React compontents:
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";

export default function ContactForm() {
  const [modalOpen, setModalOpen] = React.useState(false);
  return (
    <>
     <Button className={style.modalBtn} onClick={() => setModalOpen(!modalOpen)}>
        Book a time
      </Button>
      <Modal toggle={() => setModalOpen(!modalOpen)} isOpen={modalOpen}>
        <div className=" modal-header">
          <h5 className=" modal-title" id="exampleModalLabel">
            Modal title
          </h5>
          <button
            aria-label="Close"
            className=" close"
            type="button"
            onClick={() => setModalOpen(!modalOpen)}
          >
            <span aria-hidden={true}>×</span>
          </button>
        </div>
        <ModalBody>...</ModalBody>
        <ModalFooter>
          <Button
            type="button"
            onClick={() => setModalOpen(!modalOpen)}
          >
            Close
          </Button>
  
        </ModalFooter>
      </Modal>
    </>
  );
}
