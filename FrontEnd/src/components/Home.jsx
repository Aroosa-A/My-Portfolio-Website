import React from "react";
import '../css/Home.css';
import { Container, Row, Col } from 'react-bootstrap';
import About from '../components/About';

const Home = ({ img, data }) => {
    return (
        <div className="Home" >
            <Container>
                <Container fluid>
                    <Row>
                        <Col >
                            <img data-testid="mainHomeImage" id="MainImg" src={img} alt="Card image cap"></img>
                        </Col>
                        <Col className="display-5" id="IntroName">
                            Hello, I'm
                            <h1 id="name">Aroosa Bano Ahmed</h1>
                            <p id="headline">A passionate Software Engineer </p>
                        </Col>
                    </Row>
                    <About data={data} />
                </Container>
            </Container>
        </div>
    )
}


export default Home;