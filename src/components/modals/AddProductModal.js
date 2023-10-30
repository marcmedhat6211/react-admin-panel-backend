import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Spinner } from "react-bootstrap";

/**
 * props:
 * 	show
 * 	handleClose
 * 	addProductHandler
 * 	loading
 */
const AddProductModal = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredDescription, setEnteredDescription] = useState("");
  const [enteredPrice, setEnteredPrice] = useState(0);

  const nameChangeHandler = (e) => setEnteredName(e.target.value);
  const descriptionChangeHandler = (e) => setEnteredDescription(e.target.value);
  const priceChangeHandler = (e) => setEnteredPrice(+e.target.value); // the plus sign is to make sure that the data type is always a number

  const formHandler = (e) => {
    e.preventDefault();
    const data = {
      name: enteredName,
      description: enteredDescription,
      price: enteredPrice,
    };

    props.addProductHandler(data);
  };

  return (
    <Modal
      show={props.show}
      onHide={props.handleClose}
      animation={true}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Product Form</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={formHandler}>
          <Form.Group className="mb-3" onChange={nameChangeHandler}>
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter product name..." />
          </Form.Group>

          <Form.Group className="mb-3" onChange={descriptionChangeHandler}>
            <Form.Label>Description</Form.Label>
            <Form.Control
              as={"textarea"}
              rows={3}
              placeholder="Enter product description..."
            />
          </Form.Group>

          <Form.Group className="mb-3" onChange={priceChangeHandler}>
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter product price..."
              min={0}
            />
          </Form.Group>
          <Button variant="primary" type="submit" disabled={props.loading}>
            {props.loading ? (
              <Spinner animation="border" variant="light" size="sm" />
            ) : (
              "Submit"
            )}
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AddProductModal;
