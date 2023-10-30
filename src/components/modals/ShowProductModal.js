import React from "react";
import Modal from "react-bootstrap/Modal";

/**
 * props:
 * 	show
 * 	handleClose
 *  product
 */
const ShowProductModal = (props) => {
  return (
    <Modal
      show={props.show}
      onHide={props.handleClose}
      animation={true}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>{props.product?.name?.toUpperCase()}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex justify-content-between align-items-center mb-5">
          <strong>Name:</strong>
          <p className="m-0">{props.product?.name}</p>
        </div>
        <div className="d-flex justify-content-between align-items-center mb-5">
          <strong>Description:</strong>
          <p className="m-0">{props.product?.description}</p>
        </div>
        <div className="d-flex justify-content-between align-items-center mb-5">
          <strong>Price:</strong>
          <p className="m-0">{props.product?.price}</p>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ShowProductModal;
