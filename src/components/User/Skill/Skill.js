import React from 'react';
import Col from 'react-bootstrap/Col';

import './Skill.css';

const Skill = (props) => {
    return(
        <Col xs={6} md={3} className="single-skill">
            <div className="inner-skill">
                <div className="skill-img-wrap bg-light">
                    <img src={props.imgUrl} alt={props.name} />
                    <h2>{props.name}</h2>
                </div>
            </div>  
        </Col>
    )
}

export default Skill;