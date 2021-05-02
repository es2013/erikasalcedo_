import React from 'react';
import Project from '../components/Project';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './stylesheet.css'


//project images
import happyTailsApp from '../assets/img/happy-tail-img.png';
import faceblogApp from '../assets/img/faceblog-img.png';
import pennysaverApp from '../assets/img/pennysaver-img.png';
import pizzaApp from '../assets/img/pizza-img.png';
import jotitdownApp from '../assets/img/jotitdown-img.png';
import readmeApp from '../assets/img/readme-img.png';
import entertainmentApp from '../assets/img/entertainment-img.png';
import photoportApp from '../assets/img/photoport-img.png';
import runbuddyApp from '../assets/img/runbuddy-img.png';

function Projects() {
    const projects = [
        {
          "title": "Happy Tails",
          "desc": "App designed for shelters and volunteers for tracking which shelter dogs have been taken out or walked and what their demeanor level is",
          "key": "happy-tails",
          "imageSrc":happyTailsApp,
          "repository": "https://github.com/es2013/happy-tails",
          "appURL": "https://happy-happy-tails.herokuapp.com/"
        },
        {
          "title": "Faceblog",
          "desc": "CMS-style blog site where developers can publish their blog posts and comment on other developers’ posts as well.",
          "key": "faceblog",
          "imageSrc": faceblogApp,
          "repository": "https://github.com/es2013/faceblog",
          "appURL": "http://faceblog-2021.herokuapp.com/"
        },
        {
          "title": "Pennysaver",
          "desc": "Budget tracking progressive web application that allows you to track your spending and deposits",
          "key": "pennysaver",
          "imageSrc": pennysaverApp,
          "repository": "https://github.com/es2013/pennysaver",
          "appURL": "https://pennysaver-2021.herokuapp.com/"
        },
        {
          "title": "Pizza Hunt",
          "desc": "App that lets you build your own pizza and save it for future reference. incorporates NoSQL",
          "key": "pizza-hunt",
          "imageSrc": pizzaApp,
          "repository": "https://github.com/es2013/pizza-hunt",
          "appURL": "https://fast-peak-80097.herokuapp.com/"
        },
        {
          "title": "Jot It Down",
          "desc": "Note taking app that lets you save notes and keep track of tasks you might need to work on",
          "key": "jot-it-down",
          "imageSrc": jotitdownApp,
          "repository": "https://github.com/es2013/jot-it-down",
          "appURL": "https://jot-it-down-2021.herokuapp.com/"
        },
        {
          "title": "ReadME Node Generator",
          "desc": "Not a deployed app, but generate high quality readme for your project using node package",
          "key": "readme",
          "imageSrc": readmeApp,
          "repository": "https://github.com/es2013/readme-generator",
          "appURL": "https://github.com/es2013/readme-generator"
        },
        {
          "title": "Entertainment Rouletts",
          "desc": "Entertainment Roulette helps users whittle down the exhausting activity of choosing a movie from endless options. It also chooses a movie that suits you based on the current weather outside.",
          "key": "entertainment",
          "imageSrc": entertainmentApp,
          "repository": "https://github.com/es2013/entertainment-roulette",
          "appURL": "https://es2013.github.io/entertainment-roulette/"
        },
        {
          "title": "Photo Port",
          "desc": "Photo gallery built with react",
          "key": "photoport",
          "imageSrc": photoportApp,
          "repository": "https://github.com/es2013/photo-port",
          "appURL": "https://es2013.github.io/photo-port/"
        },
        {
          "title": "Run Buddy",
          "desc": "Website that offers fitness training services",
          "key": "runbuddy",
          "imageSrc": runbuddyApp,
          "repository": "https://github.com/es2013/02-run-buddy-run",
          "appURL": "https://es2013.github.io/02-run-buddy-run/"
        }

    ]
        return(
          <div>
       <Jumbotron fluid className="shadow p-5 mb-5">
        <Container className="text-center">
          <div className="p-md-5">
            <h1>Projects </h1>
            <h2>Deployed URL and Repositories </h2>
          </div>
        </Container>
      </Jumbotron>
       
      <Container className="p-2 shadow">
        <Row>
                {projects.map((project) => {
            return(
              <Col s={12} lg={6} key={project.key}>
                <Project project={project} />
              </Col>
            )
          })}
        </Row>
        </Container>
          </div>
        )
}
export default Projects;