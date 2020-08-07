import React from 'react';

import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';

import CustomButton from '../custom-button/custom-button.component';

import './experience-form.styles.scss';

const ExperienceForm = ({ handleChange, handleFileChange, onSubmitChange }) => {
    return(
        <div className="experience-form">
            <p className="text-center">Add an experience</p>
            <Row>
                <Form id="formExperience">
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name="name" placeholder="Experience name" onChange={(event) => handleChange(event)} />
                    </Form.Group> 
                    <Form.Group controlId="exampleForm.ControlInput1" >
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" name="description" placeholder="Experience description" onChange={(event) => handleChange(event)} />
                    </Form.Group> 
                    <Form.Group controlId="exampleForm.ControlInput1" >
                        <Form.Label>URL</Form.Label>
                        <Form.Control type="text" name="url" placeholder="Experience URL" onChange={(event) => handleChange(event)} />
                    </Form.Group>  
                    <Form.Group controlId="exampleForm.ControlInput1" >
                        <Form.Label>File</Form.Label>
                        <Form.Control type="file" name="fileExperience" placeholder="Experience file" onChange={(event) => handleFileChange(event)} />
                    </Form.Group> 
                    <CustomButton type="button" onClick={onSubmitChange}>Submit Experience</CustomButton>
                </Form>                           
            </Row>
        </div>
    );
}

export default ExperienceForm;