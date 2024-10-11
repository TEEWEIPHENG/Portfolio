import React from 'react';
import {introduction, contactInfo } from "../Data/data";
import "./style.css";
import profileImage from "../../assets/profileImage.jpg";
import {Col, Container, Image, Row, Button} from 'react-bootstrap';
import Skillsets from '../common/Skillsets';
import SocialList from '../common/SocialList';

function Home() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = 'https://github.com/TEEWEIPHENG/Portfolio/raw/refs/heads/main/src/assets/CV/CV.docx'; // Replace with the actual path to your Word file
    link.download = 'TeeWeiPheng_CV.docx'; // Replace with the desired file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const handleContactMe = () => {
    window.open(contactInfo.whatsapp, '_blank');
  };
  return (
    <Container>
      <Row className='about'>
        <Col xs={12} md={4}>
          <Image src={profileImage} fluid roundedCircle className='profile-img'/>
        </Col>
        <Col xs={12} md={8} className='details'>
          <Row>
            <Col md={12}>
              <p>Hello I'm</p>
            </Col>
            <Col md={12}>
              <h2 className='person-position'>{introduction.title}</h2>
            </Col>
            <Col md={12}>
              <SocialList/>
            </Col>
            <Col md={12}>
              <Button variant="outline-light" className='button' onClick={handleDownload}>Download CV</Button>{' '}
              <Button variant="dark" className='button' onClick={handleContactMe}>Contact Me</Button>
            </Col>
          </Row>
        </Col>
      </Row>
      <Skillsets/>
    </Container>
  )
}

export default Home
