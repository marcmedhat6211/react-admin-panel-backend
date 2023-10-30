import Modal from 'react-bootstrap/Modal';
import React from "react";
import Button from 'react-bootstrap/Button';
import AddUserForm from '../auth/AddUserForm'

function ModalStyle1(props) {


    const handleClose = () => props.setShow(false);

    return (

        <Modal show={props.show} onHide={handleClose} animation={true} centered>
            <Modal.Header closeButton>
                <Modal.Title>AddUserForm</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <AddUserForm addUserHandler={props.addUserHandler} />
            </Modal.Body>
        </Modal>

    )
}
export default ModalStyle1