import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';
import { certificates } from '../Data/data';
import './style.css';
function Certificates() {
  return (
      <Container>
        <h2>Certifications</h2>
        <Row xs={1} md={2} className="g-4">
          {certificates.map(cert=>{
            return(
              <Col>
                <Card className='bg-dark text-white h-100 text-center' style={{ padding: '10px'}}>
                  <Card.Img variant='top' src={cert.img} className='certImg'/>
                  
                  <Card.Body  className="d-flex flex-column">
                    <Card.Title className="mb-4" style={{paddingTop: '10px'}}>{cert.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted" style={{}}>{cert.provider}</Card.Subtitle>
                    <Card.Text className="mt-auto">
                      Archive at {cert.achieveDate}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            )
          })}
        </Row>
      </Container>
  )
}

export default Certificates
