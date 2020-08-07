import React, { useState, useEffect } from 'react';
import Experience from '../experience/experience.component';
import Loader from 'react-loader-spinner';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ExperienceForm from '../experience-form/experience-form.component';

import './ExperienceContainer.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import { addExperience, getExperiences } from '../../../firebase/firebase.utils';

const ExperienceContainer = () => {
    const [experienceData, setExperienceData] = useState([]);
    
    const [newExperienceData, setNewExperienceData] = useState({
        name: '',
        description: '',
        url: '',
        fileExperience: ''
    });

    useEffect(() => {
        const fetchAndSetExperiences = async () => {
            const experiences = await getExperiences();
    
            setExperienceData(experiences);
        }
        fetchAndSetExperiences();
    }, newExperienceData);

    const handleChange = event => {
        const { name, value } = event.target;
        setNewExperienceData({...newExperienceData, [name]: value });
    }

    const handleFileChange = event => {
        const file = event.target.files[0];
        setNewExperienceData({...newExperienceData, fileExperience: file});
        console.log(file);
        console.log(file.name);
    }

    const onSubmitChange = async (event) => {
        event.preventDefault();

        const { name, description, url, fileExperience } = newExperienceData;

        const resultExperience = await addExperience(name, description, url, fileExperience);

        setNewExperienceData({
            name: '',
            description: '',
            url: '',
            fileExperience: ''
        })

        document.getElementById('formExperience').reset();
    }

    return(
        <Container fluid={true} className="experience">
            <Container id="experienceScroll">
                <div className="experience-section">
                    <h2 className="text-center">My experiences</h2>
                    {
                        !experienceData ? 
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
                                    experienceData.map(experience => {
                                        return(
                                            <Col xs={12} lg={4}>
                                                <Experience experienceData={experience} />
                                            </Col>
                                        )
                                    })
                                }                            
                            </Row>
                        </div>
                    }
                </div>
            </Container>
            <ExperienceForm handleChange={handleChange} handleFileChange={handleFileChange} onSubmitChange={onSubmitChange} />
        </Container>
    )
}

export default ExperienceContainer;