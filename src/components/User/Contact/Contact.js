import React from 'react';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import './Contact.css';

class Contact extends React.Component {
    constructor() {
        super()
        this.state = {
            contactName: '',
            contactAddress: '',
            contactMessage: ''
        }
    }

    onNameChange = (event) => {
        this.setState({
            contactName: event.target.value
        })
    }
    
    onAddressChange = (event) => {
        this.setState({
            contactAddress: event.target.value
        })
    }
    
    onMessageChange = (event) => {
        this.setState({
            contactMessage: event.target.value
        })
    }

    onSubmit = () => {
        fetch('https://app-d077afa0-d0a4-4d67-8720-1d7a756510d8.cleverapps.io/send-email', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: this.state.contactName,
                address: this.state.contactAddress,
                message: this.state.contactMessage
            })
        })
    }

    render() {
        return(
            <Container className="contact-section">
                <h2>Contact me</h2>
                <Form>
                    <Form.Row className="toprow-contact">
                        <Col>
                            <Form.Control id="contactName" placeholder="Name" onChange={this.onNameChange} />
                        </Col>
                        <Col>
                            <Form.Control id="contactAddress" type="email" placeholder="Email address" onChange={this.onAddressChange} />
                        </Col>
                    </Form.Row>
                    <Form.Group controlId="contactForm.contactMessage" id="contactMessage">
                        <Form.Control as="textarea" rows="5" placeholder="Your message" onChange={this.onMessageChange} />
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={this.onSubmit}>
                        Send email
                    </Button>
                </Form>
            </Container>
        )
    }
}

export default Contact;

