import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';


function SocialIcons() {
    const social = [
        {
        "name":"LinkedIn",
        "url":"https://www.linkedin.com/in/erikasalcedo/",
        "class": "fa-linkedin"
    },
    {
        "name":"Github",
        "url":"https://github.com/es2013",
        "class":"fa-github",
    },
    {
        "name":"Email",
        "url":"mailto:erikasalcedo013@gmail.com",
        "class":"fa-email"
    }
    ]
    return (
      <div>
          <Col>
              <Container>
              <span><a href="https://github.com/es2013"><i className="fab fa-github pr-4"></i></a></span>
              <span><a href="mailto:erikasalcedo013@gmail.com"><i className="far fa-envelope pr-4"></i></a></span> 
                <span><a href="https://www.linkedin.com/in/erikasalcedo/"><i className="fab fa-linkedin pr-4"></i></a></span> 
              </Container>
            </Col>
          </div>

    )
}
export default SocialIcons