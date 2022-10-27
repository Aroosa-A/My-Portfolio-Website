import React from "react";
import '../css/Footer.css';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaLinkedin } from 'react-icons/fa';


const Footer = () => {

    return (

        <footer>
            <Container className="text-center">
                <Row>
                    <Col id="footerName">
                        Copyright &copy; Aroosa Bano Ahmed
                        <a href="https://github.com/Aroosa-A"><FaGithub /></a>
                        <a href="https://www.linkedin.com/in/aroosa-bano-ahmed-800649224/"><FaLinkedin /></a>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};



export default Footer;