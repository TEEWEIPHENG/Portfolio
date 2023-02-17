import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';
import { certificates } from './data';
import '../styles/Certificates.css';
function Certificates() {
  return (
    <div className='certificates'>
      <Container>
        <Row xs={1} md={3} className="g-4">
          {certificates.map(cert=>{
            return(
              <Col>
                <Card className='bg-dark text-white'>
                  <Card.Header style={{minHeight:'5rem'}}>
                    <Card.Title>
                      {cert.title}
                    </Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <Card.Img variant='top' src={cert.img} className='certImg'/>
                    <Card.Text style={{minHeight:'100px'}}>
                      <p>{cert.describe}</p>
                      
                    </Card.Text>
                    <Card.Text>
                    <div style={{textAlign:"left"}}>
                      <small>Achieve at <i>{cert.achieveDate}</i></small>
                    </div>
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className='text-muted'>Provided by </small>{cert.provider}
                  </Card.Footer>
                </Card>
              </Col>
            )
          })}
        </Row>
      </Container>
    </div>
  )
}

export default Certificates
