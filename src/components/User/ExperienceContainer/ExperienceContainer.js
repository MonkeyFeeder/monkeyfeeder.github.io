import React from 'react';
import Experience from '../Experience/Experience';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';

import './ExperienceContainer.css';

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
        fetch('http://localhost:3001/get-experiences')
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

        fetch('http://localhost:3001/new-experience', {
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

    componentDidUpdate() {
    }

    render() {
        return(
            <Container fluid={true} className="experience">
                <Container id="experienceScroll">
                    <div className="experience-section">
                        <h2 className="text-center">My experiences</h2>
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
                </Container>
            </Container>
        )
    }
}

export default ExperienceContainer;