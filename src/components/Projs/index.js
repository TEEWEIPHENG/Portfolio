import React from 'react'
import {projects} from '../Data/data';
import {Carousel, Container, Image, Row, Col, Button} from 'react-bootstrap';
import './style.css';
import { FaYoutube , FaGithub} from "react-icons/fa";

function Projects() {
  console.log(projects)
  return (
    <Container className='project-container'>
      <Carousel>
        {projects.map(project=>{
          return (
            <Carousel.Item>
              <Image src={project.carousel} rounded className='carousel-image'/>
              <Carousel.Caption className="carousel-caption">
                <h2>{project.title}</h2>
                <p style={{textAlign:"justify"}}>{project.describe}</p>
                <Row>
                  {project.techs.map((tech)=> <Col xs={6} md={4} xl={3} style={{margin: '10px 0'}}><Button variant="primary">{tech}</Button></Col>)}
                </Row>
                <Row>
                  <Col>
                    <a href={project.youtube} target='_blank' className='ref-icon'><FaYoutube color='#FF0000' /></a>
                    <a href={project.github} target='_blank' className='ref-icon'><FaGithub color='#fff' /></a>
                  </Col>
                </Row>
                
              </Carousel.Caption>
            </Carousel.Item>
          )
        })}
      </Carousel>
    </Container>
  )
}

export default Projects
