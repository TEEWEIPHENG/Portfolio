import React from 'react'
import {projects} from '../Data/data';
import {Card, Container, Image, Row, Col, Button} from 'react-bootstrap';
import './style.css';
import { FaYoutube , FaGithub} from "react-icons/fa";

function Projects() {
  console.log(projects)
  return (
    <Container className='project-container'>
      <h2>Projects</h2>
      <Row>
        {projects.map(project=>{
          return (
            <Col xs={12} md={6}>
            <Card className='text-center' style={{ padding: '10px', margin: '10px'}}>
              <Card.Img variant='top' src={project.carousel} className='carousel-image'/>
              
              <Card.Body  className="d-flex flex-column">
                <Card.Title className="mb-4" style={{paddingTop: '10px'}}>{project.title}</Card.Title>
                <Card.Text className="mt-auto">
                  {project.describe}
                </Card.Text>
                  {
                    project.youtube
                    ? <Card.Link href={project.youtube} target='_blank' className='ref-icon'>
                        <FaYoutube color='#FF0000'/>
                      </Card.Link>
                    : false 
                  }
                  {
                    project.github
                    ? <Card.Link href={project.github} target='_blank' className='ref-icon'>
                        <FaGithub color='#000'/>
                      </Card.Link>
                    : false
                  }

              </Card.Body>
            </Card>
          </Col>
          )
        })}
      </Row>
    </Container>
  )
}

export default Projects
