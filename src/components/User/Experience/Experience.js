import React from 'react';
import Card from 'react-bootstrap/Card';

import './Experience.css';

const Experience = (props) => {
    return(
        <Card className="card-experience">
            <a href={props.experienceData.experienceurl} target="_blank" >
                <Card.Img variant="top" src={props.experienceData.experiencefileurl} alt={props.experienceData.experiencename} />
                <Card.Body>
                    <Card.Title>{props.experienceData.experiencename}</Card.Title>
                    <Card.Text>
                        {props.experienceData.experiencedescription}
                    </Card.Text>
                </Card.Body>
            </a>
        </Card>
    )
}

export default Experience;