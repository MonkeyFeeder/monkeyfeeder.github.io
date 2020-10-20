import React from 'react';
import Container from 'react-bootstrap/Container';

import picMyself from './photo-myself.JPG';

import './about.css';

const About = () => {
    return(
        <Container>
            <div className="about-section" id="aboutScroll">
                <h2>About me</h2>
                <div className="picAndText">
                    <div className="img-box">
                        <img src={picMyself} alt="it's-a me a-Mael" />
                    </div>
                    <p>I'm a freelance web developer. I studied for 3 years in college ( first 2 years studying Business and Languages, third year studying Web Marketing, Design and Development ). I learnt WordPress during my first contract, and taught myself React on my free time.</p>
                </div>
                <h2>My skills and experiences</h2>
                <p>I've been working with WordPress for more than 2 years ( with minimal plugins, only CF7, ACF ), learnt JavaScript for animation purposes during these 2 years. I also started learning React and Node.JS in August 2019.</p>
                <p>I made this website using React and Node as a training project, and I've got a few projects in mind that I'll add to my own website. So stay tuned :)</p>
            </div>
        </Container>
    )
}

export default About;

