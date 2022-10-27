import React from 'react';
import { Row, Col } from 'react-bootstrap';
import '../css/Resume.css';
import Projects from './Projects';
import Experience from './Experience';
import Education from './Education';





const Resume = ({ projects, experience, education }) => {
    return (

        <div className="Resume">
            <Row >
                <Col>
                    <h2 id='eachHeading'>
                        Projects
                    </h2>
                </Col>
            </Row>
            <Projects projects={projects} />
            <Row>
                <Col>
                    <h2 id='eachHeading'>
                        Experience
                    </h2>
                </Col>
            </Row>
            <Experience experience={experience} />
            <Row>
                <Col>
                    <h2 id='eachHeading'>
                        Education
                    </h2>
                </Col>
            </Row>
            <Education education={education} />
        </div >
    );
};


export default Resume;