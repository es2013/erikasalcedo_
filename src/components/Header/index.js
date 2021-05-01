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
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
          

        </Container>
    </section>
  );
}

export default Header;