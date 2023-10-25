"use client";
import React from "react";
import style from "./Contact.module.scss";
import { useForm } from "react-hook-form";
import { Container, Row, Col, FormGroup, FormText } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; //Installer bootstrap for at denne virker
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup"; //Valider data via skema

//React compontents:
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";

export default function ContactForm() {
  const [modalOpen, setModalOpen] = React.useState(false);

  const schema = yup.object().shape({
    firstName: yup.string().required("Your name is required"),

    email: yup
      .string()
      .email("Invalid email format")
      .required("Your email is required"),

    terms: yup.bool().oneOf([true], "Agree on terms and conditions"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  
  return (
    <>
      <Button
        className={style.modalBtn}
        onClick={() => setModalOpen(!modalOpen)}
      >
        Book a time
      </Button>
      <Modal toggle={() => setModalOpen(!modalOpen)} isOpen={modalOpen}>
        <div className=" modal-header">
          <h5 className=" modal-title" id="exampleModalLabel">
            fill in and submit the form and we will contact you.
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
        <ModalBody>
                {/* ---- FIRST NAME ---- */}
        <Row className="mb-3">
          <FormGroup>
            <Col>
              <label>navn</label>
            </Col>
            <Col>
              <input
                id="firstName"
                type="text"
                className="form-control"
                {...register("firstName", { required: true, maxLength: 10 })}
              />
              <FormText color="muted">
                {errors.firstName?.message}
              </FormText>
            </Col>
          </FormGroup>
        </Row>

          {/*---- EMAIL ----*/}
          <Row className="mb-3">
            <FormGroup>
              <Col>
                <label>email</label>
              </Col>
              <Col>
                <input
                  id="email"
                  type="email"
                  className="form-control"
                  {...register("email", { required: true })}
                />
                <FormText>{errors.email?.message}</FormText>
              </Col>
            </FormGroup>
          </Row>


          {/*---- BESKED ----*/}
          <Row className="mb-3">
            <FormGroup>
              <Col>
                <label>besked</label>
              </Col>
              <Col>
                <textarea
                  id="message"
                  type="textarea"
                  className="form-control"
                  {...register("email", { required: true })}
                />
                <FormText>{errors.email?.message}</FormText>
              </Col>
            </FormGroup>
          </Row>



        </ModalBody>
        <ModalFooter>
          <Button type="button" onClick={() => setModalOpen(!modalOpen)}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}
