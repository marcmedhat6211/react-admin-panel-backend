import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
function AddUserForm(props) {
    const [enteredName, setEnteredName] = useState('')
    const [enteredAge, setEnteredAge] = useState('')
    const [enteredEmail, setEnteredEmail] = useState('')

    const enteredNameHandler = (e) => {
        setEnteredName(e.target.value)
    }
    const enteredAgeHandler = (e) => {
        setEnteredAge(e.target.value)
    }
    const enteredEmailHandler = (e) => {
        setEnteredEmail(e.target.value)
    }

    return (
        // hena bandah 3ala elfunction eli nafeztaha henak fel users table ezay? callback function w bab3atlaha
        // eltalata parameters eli heya me7atagahom w ana esta3meltohom henak
        <Form onSubmit={(e) => {
            e.preventDefault()
            props.addUserHandler(enteredName, enteredAge, enteredEmail)
        }}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control onChange={enteredEmailHandler} type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Name</Form.Label>
                <Form.Control onChange={enteredNameHandler} type="text" placeholder="Enter your name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Age</Form.Label>
                <Form.Control onChange={enteredAgeHandler} type="number" placeholder="Enter your age" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}
export default AddUserForm