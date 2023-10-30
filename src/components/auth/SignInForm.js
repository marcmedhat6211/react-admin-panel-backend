import Form from 'react-bootstrap/Form';
import React from "react";
import './SignInForm.css'
import Button from 'react-bootstrap/Button';
function SignInForm(props) {

    return (

        <Form onSubmit={props.onSubmit} className='sign-in-form'>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                    Password
                </Form.Label>

                <Form.Control type="password" placeholder="Password" />

            </Form.Group>
            <Button type="submit">Sign In</Button>
        </Form >
    )
}


export default SignInForm