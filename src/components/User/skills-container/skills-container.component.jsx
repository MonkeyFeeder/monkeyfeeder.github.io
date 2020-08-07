import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Skill from '../skill/skill.component';
import Container from 'react-bootstrap/Container';

import './SkillsContainer.css';



const SkillsContainer = (props) => {
    const listOfSkills = [
        {
            name: 'PHP',
            img: props.urlWebsite+'/img/php.png'
        },
        {
            name: 'JavaScript',
            img: props.urlWebsite+'/img/javascript.png' 
        },
        {
            name: 'Node.js',
            img: props.urlWebsite+'/img/nodejs.png'
        },
        {
            name: 'React',
            img: props.urlWebsite+'/img/react.png'
        },
        {
            name: 'CSS',
            img: props.urlWebsite+'/img/css.png'
        },
        {
            name: 'HTML',
            img: props.urlWebsite+'/img/html.png'
        },
        {
            name: 'Git',
            img: props.urlWebsite+'/img/git.png'
        },
        {
            name: 'WordPress',
            img: props.urlWebsite+'/img/wordpress.png'
        }
    ]

    return(
        <Container fluid={true} className="container-fluid skills">
            <Container id="skillScroll">
                <h2 className="text-center">Skills</h2>
                <div className="skillscontainer">
                    <Row>
                        {
                            listOfSkills.map(skill => {
                                return (
                                    <Col xs={12} md={3}>
                                        <Skill name={skill.name} imgUrl={skill.img} />
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

export default SkillsContainer;