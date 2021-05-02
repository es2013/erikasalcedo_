import React from 'react';
import coverImage from "../../assets/img/es2020-2.jpg";
import ReactRoundedImage from "react-rounded-image";


//import bootstrap for react
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';


function Header() {
  return (
    <section className="my-5">
    <Jumbotron fluid className="mb-0">

      <Container>
          <Row>
            <Col sm={12} md={6}lg={4} className="justify-content-center">
              <ReactRoundedImage
                image={coverImage}
                roundedColor="#b40086"
                imageWidth="400"
                imageHeight="310"/>
            </Col>
            <Col className="pl-md-5">
                <h1 className="display-4 text-center text-lg-left text-light p-0-lg pt-4">
                console.log('Hello World');</h1>
                <p className="text-light text-center text-md-left h3">
                  I'm Erika Salcedo
                </p>
            </Col>
          </Row>
        </Container>
        </Jumbotron>
        <Container class="shadow mb-5 bg-light">
          <h2>A little bit about me</h2>
          <p>If you were to ask me which animal/insect best represents me, I would say a spider because I am a web developer that enjoys catching bugs. 
            (Okay maybe not when there is a time sensitive project because bugs can drive me crazy) but I do enjoy troubleshooting. 
            I earned a full stack development certificate from the University of California, Los Angeles Coding Bootcamp in 2021. Most of the projects I have worked with technologies ranging from JavaScript, HTML, CSS, to Express.js, React, MongoDB, and MySQL. I have past experience in marketing automation and data analysis. When I am not behind a computer screen, you can find be at the park with my little 7-year old chi-poodle-terrier named Penny. </p>
        </Container>
    </section>
  );
}

export default Header;