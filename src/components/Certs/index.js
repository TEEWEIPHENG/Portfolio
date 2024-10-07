import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';
import { certificates } from '../Data/data';
import './style.css';
function Certificates() {
  return (
    <div className='certificates'>
      <Container>
        <Row xs={1} md={2} className="g-4">
          {certificates.map(cert=>{
            return(
              <Col>
                <Card className='bg-dark text-white'   style={{minHeight:'40rem'}}>
                  <Card.Header style={{minHeight:'5rem'}}>
                    <Card.Title>
                      {cert.title}
                    </Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <Card.Img variant='top' src={cert.img} className='certImg'/>
                    <Card.Text>
                    <div style={{display:"flex", justifyContent:"space-evenly"}}>
                      <div className='text-muted'>Archive at</div> 
                      <div>{cert.achieveDate}</div>
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
