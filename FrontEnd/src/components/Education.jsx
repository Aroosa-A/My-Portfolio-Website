import React from 'react';
import { Row, Col } from 'react-bootstrap';




const Education = ({ education }) => {
    return (
        <>
            {education?.map((eachEducation, index) => (
                <section key={index}>
                    <Row>
                        {eachEducation.headings?.map((name, index) => (
                            <Col key={index}>

                                <h6 id='subHeading' >
                                    {name.name}
                                </h6>

                            </Col>
                        ))}
                    </Row>
                    <Row>
                        <Col id='projectDetail'>
                            {eachEducation.Details?.map((learning, index) => (
                                <p id='skills' key={index}>
                                    {learning.Detail !== "" ?
                                        learning.Detail : <></>
                                    }
                                </p>
                            ))}
                        </Col>
                    </Row>
                </section >
            ))}
        </>
    );
};





export default Education;