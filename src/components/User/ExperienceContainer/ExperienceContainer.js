import React from 'react';
import Experience from '../Experience/Experience';
import Loader from 'react-loader-spinner'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';

import './ExperienceContainer.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

class ExperienceContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            experiences: [],
            name: '',
            description: '',
            url: '',
            fileExperience: ''
        }
    }

    componentDidMount() {
        fetch('https://app-d077afa0-d0a4-4d67-8720-1d7a756510d8.cleverapps.io/get-experiences')
        .then(resp => resp.json())
        .then(experiences => {
            this.setState({experiences})
        })
    }

    onNameChange = (event) => {
        this.setState({name: event.target.value});
    }

    onDescriptionChange = (event) => {
        this.setState({description: event.target.value});
    }

    onUrlChange = (event) => {
        this.setState({url: event.target.value});
    }
    
    onFileChange = (event) => {
        this.setState({fileExperience: event.target.files[0]});
    }

    onSubmitChange = () => {
        const data = new FormData()
        data.append('url', this.state.url);
        data.append('name', this.state.name);
        data.append('description', this.state.description);
        data.append('fileExperience', this.state.fileExperience);
        data.append('fileName', this.state.fileExperience.name);

        fetch('https://app-d077afa0-d0a4-4d67-8720-1d7a756510d8.cleverapps.io/new-experience', {
            method: 'post',
            body: data
        })

        this.setState({
            name: '',
            description: '',
            url: '',
            fileExperience: ''
        })

        document.getElementById('formExperience').reset();
        
    }

    render() {
        return(
            <Container fluid={true} className="experience">
                <Container id="experienceScroll">
                    <div className="experience-section">
                        <h2 className="text-center">My experiences</h2>
                        {
                            this.state.experiences.length === 0 ? 
                            <div className="loader">
                                <Loader 
                                type="Plane"
                                color="#00BFFF"
                                height={300}
                                width={300}
                                /> 
                            </div> :
                            <div>
                                <p className="text-center">Here are most of the websites I fully/partly did</p>
                                <Row>
                                    {
                                        this.state.experiences.map(experience => {
                                            return(
                                                <Col xs={12} lg={4}>
                                                    <Experience experienceData = {experience} />
                                                </Col>
                                            )
                                        })
                                    }                            
                                </Row>
                            </div>
                        }
                        {/* <p className="text-center">Add an experience</p>
                        <Row>
                            <Form id="formExperience">
                                <Form.Group controlId="exampleForm.ControlInput1" onChange={this.onNameChange}>
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" placeholder="Experience name" />
                                </Form.Group> 
                                <Form.Group controlId="exampleForm.ControlInput1" onChange={this.onDescriptionChange}>
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control type="text" placeholder="Experience description" />
                                </Form.Group> 
                                <Form.Group controlId="exampleForm.ControlInput1" onChange={this.onUrlChange}>
                                    <Form.Label>URL</Form.Label>
                                    <Form.Control type="text" placeholder="Experience URL" />
                                </Form.Group>  
                                <Form.Group controlId="exampleForm.ControlInput1" onChange={this.onFileChange}>
                                    <Form.Label>File</Form.Label>
                                    <Form.Control type="file" placeholder="Experience file" />
                                </Form.Group> 
                                <button onClick={this.onSubmitChange}>Submit experience</button>
                            </Form>                           
                        </Row> */}
                    </div>
                </Container>
            </Container>
        )
    }
}

export default ExperienceContainer;