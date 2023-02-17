import React from 'react'
import {projects} from './data';
import {Card, ListGroup, Container, Row, Col} from 'react-bootstrap';
import Iframe from 'react-iframe';
import {BiTime} from 'react-icons/bi'
import {TiTick} from 'react-icons/ti'

function statusLogo(status){
  if(!status.localeCompare("In Progress")){
    return <BiTime/>
  }
  else{
    return <TiTick/>
  }
}
function insertCol(project){
  var count = 4;

  return(
    <Col >
      <Card className="bg-dark text-white">
        <Card.Header>
          <Card.Title>{project.title}</Card.Title>
        </Card.Header>
        <Card.Body>
        <Iframe url={project.refLink}
              width='100%'
              height='400rem'
              display="block"
              position="relative"/>
          <Card.Text style={{textAlign:'left', minHeight:'10rem', marginTop:'10px'}}>
            {project.describe}
          </Card.Text>
          <Container style={{minHeight:'10rem'}}>
            <Row xs={1} md={4} className="g-1">
              {project.techs.map(tech=>{
                return <Col className='bg-secondary' style={{borderRadius:'50px',padding:'10px',}}>{tech}</Col>
              })}
            </Row>
          </Container>
        </Card.Body>
        <Card.Footer>
          <small className='text-muted'><i>{project.duration}</i></small> {statusLogo(project.duration)} 
        </Card.Footer>
      </Card>
    </Col>
  )
}
function Projects() {
  var count = 0;
  return (
    <div className='projects'>
      <Container>
        <Row xs={1} md={2} className="g-4">
          {projects.map(project=>{
            return insertCol(project);
          })}
        </Row>
      </Container>
      
    </div>
  )
}

export default Projects
