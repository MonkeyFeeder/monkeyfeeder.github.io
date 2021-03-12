import React from 'react';
import Card from 'react-bootstrap/Card';

import './Experience.css';

const Experience = (props) => {
    const {name, url, description, fileUrl} = props.experienceData;
    return(
        <Card className="card-experience">
            
            <a href={url} target="_blank" rel="noopener noreferrer">
                <Card.Img variant="top" src={fileUrl} alt={name} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>
            </a>
        </Card>
    )
}

export default Experience;