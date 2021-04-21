
import {Form, Container} from "react-bootstrap"
import React from 'react'

 const AddFood = () => {
    return (
        <Container>
            <Form>
                <Form.Control placeholder = "enter your day"></Form.Control>
                <Form.Control placeholder = "enter your type"></Form.Control>
                <Form.Control placeholder = "enter your name"></Form.Control>
                <Form.Control placeholder = "enter your quantity"></Form.Control>
                <button>ADD</button>
            </Form>
        </Container>

    )
}
export default AddFood;