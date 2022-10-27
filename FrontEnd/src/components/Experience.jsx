import React from 'react';
import { Row, Col } from 'react-bootstrap';




const Experience = ({ experience }) => {
    return (
        <>
            {experience?.map((eachExperience, index) => (
                <section key={index}>
                    <Row>
                        {eachExperience.headings?.map((name, index) => (
                            <Col key={index}>

                                <h6 id='subHeading' >
                                    {name.name}
                                </h6>

                            </Col>
                        ))}
                    </Row>
                    <Row>
                        <Col id='projectDetail'>
                            <h6>
                                {eachExperience.Detail}
                            </h6>
                            {eachExperience.learnings?.map((learning, index) => (
                                <p id='skills' key={index}>
                                    {learning.learning !== "" ?
                                        learning.learning : <></>
                                    }
                                </p>
                            ))}
                        </Col>
                    </Row>
                </section >
            ))}
        </>
    )
}




export default Experience;