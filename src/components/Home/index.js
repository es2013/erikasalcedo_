import React from 'react';
import coverImage from "../../assets/img/es2020-2.jpg";

//import react
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import ReactRoundedImage from "react-rounded-image";
import Jumbotron from 'react-bootstrap/Jumbotron';


function About() {
  return (
    <section className="my-5">
    <Jumbotron fluid className="mb-0">

      <Container>
          <Row>
            <Col sm={12} md={6}lg={4} className="justify-content-center">
              <ReactRoundedImage
                image={coverImage}
                roundedColor="#b40086"
                imageWidth="370"
                imageHeight="310"/>
            </Col>
            <Col className="pl-md-5">
                <h1 className="display-4 text-center text-lg-left text-light p-0-lg pt-4">
                console.log('Hello World');</h1>
                <p className="text-light text-center text-md-left h3">
                  la dee da la dee da
                </p>
            </Col>
          </Row>
        </Container>
        </Jumbotron>
    </section>
  );
}

export default About;