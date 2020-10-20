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
    const [filteredExperiences, setFilteredExperiences] = useState([]);
    const [filter, setFilter] = useState('');
    
    const [newExperienceData, setNewExperienceData] = useState({
        name: '',
        description: '',
        url: '',
        fileExperience: '',
        skills: ''
    });

    useEffect(() => {
        const fetchAndSetExperiences = async () => {
            const experiences = await getExperiences();
    
            setExperienceData(experiences);
        }
        fetchAndSetExperiences();
    }, [newExperienceData]);

    const handleChange = event => {
        let { name, value } = event.target;
        if(name === 'skills') {
            value = value.split(',');
        }
        setNewExperienceData({...newExperienceData, [name]: value });
    }

    const handleFileChange = event => {
        const file = event.target.files[0];
        setNewExperienceData({...newExperienceData, fileExperience: file});
    }

    const onSubmitChange = async (event) => {
        event.preventDefault();

        const { name, description, url, fileExperience, skills } = newExperienceData;

        await addExperience(name, description, url, fileExperience, skills);

        setNewExperienceData({
            name: '',
            description: '',
            url: '',
            fileExperience: '',
            skill: ''
        })

        document.getElementById('formExperience').reset();
    }

    const handleFilter = (e) => {
        console.log(e.target);
        const newFilter = e.target.dataset.name;

        if(document.querySelectorAll('.experience-section .filters .item-filter.active').length !== 0) {
            document.querySelectorAll('.experience-section .filters .item-filter.active')[0].classList.remove('active');
        // } else if (document.querySelectorAll('.experience-section .filters .item-filter.active').length !== 0 && e.target.classList.contains('active')) {
            // document.querySelectorAll('.experience-section .filters .item-filter.active')[0].classList.remove('active');
        }

        // if(!e.target.classList.contains('active')) {
        //     e.target.classList.add('active');
        // } else {
        //     e.target.classList.remove('active');
        // }
        
        
        if(filter === newFilter) {
            setFilter('');
            setFilteredExperiences([]);
            e.target.classList.remove('active');
        } else {
            setFilter(newFilter);
            e.target.classList.add('active');

            const newExperiences = experienceData.filter(experience => {
                return experience.skills.includes(newFilter);
            })
            setFilteredExperiences(newExperiences);
        }
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
                            <div className="filters">
                                <span className="item-filter" data-name="React" onClick={(e) => handleFilter(e)}>React</span>
                                <span className="item-filter" data-name="WordPress" onClick={(e) => handleFilter(e)}>Wordpress</span>
                            </div>
                            <Row>
                                {
                                    filteredExperiences.length === 0 ?
                                    experienceData.map(experience => {
                                        return(
                                            <Col xs={12} lg={4} key={experience.id}>
                                                <Experience experienceData={experience} />
                                            </Col>
                                        )
                                    })
                                    :
                                    filteredExperiences.map(experience => {
                                        return(
                                            <Col xs={12} lg={4} key={experience.id}>
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