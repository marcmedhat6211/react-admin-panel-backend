import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Posts(props) {
    let mappedPosts = props.posts.map((post) => {
        return (<Card style={{ width: '18rem' }} key={post.id}>
            <Card.Title>{post.title}</Card.Title>
            <Card.Text> {post.description}</Card.Text>
            <Card.Text> {post.price}</Card.Text>
            <Button variant="primary">Delete</Button>


        </Card>
        )
    })
    return (
        <Card>{mappedPosts}</Card>
    )
}
export default Posts