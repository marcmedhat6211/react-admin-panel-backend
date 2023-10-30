import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function PostsForm(props) {
    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredDesc, setEnteredDesc] = useState('')
    const [enteredPrice, setEnteredPrice] = useState(0)
    const titleChangeHandler = (e) => {
        setEnteredTitle(e.target.value)
    }
    const descChangeHandler = (e) => {
        setEnteredDesc(e.target.value)
    }
    const priceChangeHandler = (e) => {
        setEnteredPrice(e.target.value)
    }

    // function addTwoNums (num1,num2) {
    //     return(
    //         num1+num2
    //     )
    // }
    // const result= addTwoNums(1,3)
    return (
        <Container>
            {/* le kol event lazem yekon fih callback function */}
            <Form onSubmit={(e) => {
                props.postSubmitHandler(enteredTitle, enteredDesc, enteredPrice)
                e.preventDefault()
            }}>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="title">Title</Form.Label>
                    <Form.Control id="title" type='text' placeholder="Title" onChange={titleChangeHandler} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="description">Description</Form.Label>
                    <Form.Control id="description" type='text' placeholder="Description" onChange={descChangeHandler} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="price">Price</Form.Label>
                    <Form.Control id="price" type='number' placeholder="Price" onChange={priceChangeHandler} />
                </Form.Group>
                <Button type="submit">Submit</Button>
            </Form>
        </Container>
    )
}
export default PostsForm