import React from 'react';
import { Row, Col } from 'react-bootstrap';




const Projects = ({ projects }) => {
    return (
        <>
            {projects?.map((project, index) => (
                <section key={index}>
                    <Row>
                        {project.subHeading?.map((name, index) => (
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
                                {project.projectDetail}
                            </h6>
                            {project.learnings?.map((skill, index) => (
                                <p id='skills' key={index}>
                                    {skill.learning !== "" ?
                                        skill.learning : <></>
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


export default Projects;