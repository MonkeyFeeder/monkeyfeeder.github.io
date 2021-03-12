import React, {useState} from 'react';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

import CustomButton from '../CustomButton/CustomButton';

import './Contact.css';

const Contact = () => {
    // Before, using Class Component
//class Contact extends Component {
    // constructor() {
    //     super()
    //     this.state = {
    //         contactName: '',
    //         contactAddress: '',
    //         contactMessage: ''
    //     }
    // }

    const [contactName, changeName] = useState('');
    const [contactAddress, changeAddress] = useState('');
    const [contactMessage, changeMessage] = useState('');

    const onNameChange = (event) => {
        changeName(event.target.value);
    }
    
    const onAddressChange = (event) => {
        changeAddress(event.target.value);
    }
    
    const onMessageChange = (event) => {
        changeMessage(event.target.value);
    }

    const onSubmit = async (event) => {
        event.preventDefault();

        const templateId = 'template_c2dM1esL';

        sendFeedback(templateId, {message_html: contactMessage, from_name: contactName, reply_to: contactAddress});

        

        // fetch('https://app-d077afa0-d0a4-4d67-8720-1d7a756510d8.cleverapps.io/send-email', {
        //     method: 'POST',
        //     headers: {'Content-Type': 'application/json'},
        //     body: JSON.stringify({
        //         name: contactName,
        //         address: contactAddress,
        //         message: contactMessage
        //     })
        // })
        // .then(resp => {
        //     if(resp.status === 400) {
        //         document.getElementById('contactTrue').classList.remove('contact-displayed');
        //         document.getElementById('contactFalse').classList.add('contact-displayed');
        //     } else if(resp.status === 200) {
        //         document.getElementById('contactFalse').classList.remove('contact-displayed');
        //         document.getElementById('contactTrue').classList.add('contact-displayed');
        //     }
        // })
    }

    const sendFeedback = (templateId, variables) => {
        window.emailjs.send(
          'gmail', templateId,
          variables
          ).then(res => {
            document.getElementById('contactFalse').classList.remove('contact-displayed');
            document.getElementById('contactTrue').classList.add('contact-displayed');
            document.querySelector('.contact-form').reset();
            console.log('test');
          })
          .catch(err => {
            document.getElementById('contactTrue').classList.remove('contact-displayed');
            document.getElementById('contactFalse').classList.add('contact-displayed');
            console.log('fail');
          })
    }

    return(
        <Container className="contact-section" id="contactScroll">
            <h2>Contact me</h2>
            <Form className="contact-form">
                <Form.Row className="toprow-contact">
                    <Col>
                        <Form.Control id="contactName" placeholder="Name" onChange={onNameChange} />
                    </Col>
                    <Col>
                        <Form.Control id="contactAddress" type="email" placeholder="Email address" onChange={onAddressChange} />
                    </Col>
                </Form.Row>
                <Form.Group controlId="contactForm.contactMessage" id="contactMessage">
                    <Form.Control as="textarea" rows="5" placeholder="Your message" onChange={onMessageChange} />
                </Form.Group>
                <CustomButton type="button" onSubmit={onSubmit}>
                    Send
                </CustomButton>
                <div className="error-contact" id="contactFalse">Error sending email, please try again :(</div>
                <div className="success-contact" id="contactTrue">Email sent successfully, thanks :)</div>
            </Form>
        </Container>
    )
}

export default Contact;

