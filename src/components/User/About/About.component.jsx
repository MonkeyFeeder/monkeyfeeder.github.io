import React from 'react';
import Container from 'react-bootstrap/Container';

import picMyself from './photo-myself.JPG';
import Github from './github.png';

import './About.css';

const About = () => {
    return(
        <Container>
            <div className="about-section" id="aboutScroll">
                <h2>About me</h2>
                <div className="picAndText">
                    <div className="img-box">
                        <img src={picMyself} alt="it's-a me a-Mael" />
                    </div>
                    <div class="intro-txt">
                        <p>I'm a Software Engineer. I studied for 3 years in college ( first 2 years studying Business and Languages, third year studying Web Marketing, Design and Development ). I started learning WordPress in 2017, and taught myself React on my free time, starting in 2019.</p>
                        <a href="https://github.com/MonkeyFeeder" target="_blank" rel="noopener noreferrer" className="img-github"><img src={Github} alt="My Github Page" /></a>
                    </div>
                </div>

                <h2>My skills and experiences</h2>
                <div class="chunk-of-text">
                    <p>I've been a developer for almost 4 years, and I've helped many brands improve their online presence and create their website.</p>
                    <p>I started as a WordPress Developer, and got my first contract with Lactalis, creating the websites of many well-known brands ( Siggis, President, Galbani.. ).</p>
                    <p>During my time at Lactalis, I started learning and working with React. It's been about 2 years now.</p>
                </div>
            </div>
        </Container>
    )
}

export default About;

