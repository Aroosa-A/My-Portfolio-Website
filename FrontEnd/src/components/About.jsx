import React from 'react';
import { Row, Col } from 'react-bootstrap';
import '../css/About.css';


const About = ({ data }) => {
    return (
        <div className="About">
            {
                data?.map((eachItem, index) => (
                    <section key={index}>
                        <Row >
                            <Col>
                                <h2 id='headings'>
                                    {eachItem.Heading}
                                </h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p id='detail'>
                                    {eachItem.Detail}
                                </p>
                            </Col>
                        </Row>
                    </section>
                ))}
        </div>
    )
};


export default About;