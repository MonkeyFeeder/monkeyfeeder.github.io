import React from 'react';

import './Skill.css';

const Skill = (props) => {
    return(
        <div className="single-skill">
            <div className="inner-skill">
                <div className="skill-img-wrap bg-light">
                    <img src={props.imgUrl} alt={props.name} />
                    <h2>{props.name}</h2>
                </div>
            </div>  
        </div>
    )
}

export default Skill;