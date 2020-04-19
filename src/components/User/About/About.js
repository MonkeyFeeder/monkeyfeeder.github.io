import React from 'react';
import Container from 'react-bootstrap/Container';

import picMyself from './photo-myself.JPG';

import './About.css';

const About = () => {
    return(
        <Container>
            <div className="about-section" id="aboutScroll">
                <h2>About me</h2>
                <div className="picAndText">
                    <img src={picMyself} alt="it's-a me a-Mael" />
                    <p>I'm a freelance web developer. I dropped out of college without a degree because I was bored of school. I started web development with the basics of HTML and CSS, and learnt on the job.</p>
                </div>
                <h2>My skills and experiences</h2>
                <p>I've been working with WordPress for more than 2 years ( with minimal plugins, only CF7, ACF ), learnt JavaScript for animation purposes during these 2 years. I also started learning React and Node.JS in November 2019.</p>
                <p>I made this website using React and Node as a training project, and I've got a few projects in mind that I'll add to my own website. So stay tuned :)</p>
            </div>
        </Container>
    )
}

export default About;

