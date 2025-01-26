import React from 'react';
import {introduction, contactInfo } from "../Data/data";
import "./style.css";
import profileImage from "../../assets/logo.png";
import {Col, Container, Image, Row, Button} from 'react-bootstrap';
import Skillsets from '../common/Skillsets';
import SocialList from '../common/SocialList';

function Home() {
  const handleDownload = () => {
    const link = document.createElement('a');
    
    link.href = 'https://1drv.ms/w/c/28f7504be24af934/ETT5SuJLUPcggCg1CgIAAAABSoMNATnymZUnu2N-5P_sxA?e=AAzDAv'; 
    link.target = '_blank';
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
        <Col xs={12} md={7} className='details'>
          <Row>
            <Col md={12}>
              <p>Hello, I'm Tee.</p>
            </Col>
            <Col md={12}>
              <h2 className='person-position'>{introduction.title}</h2>
            </Col>
            <Col md={12}>
              <article style={{textAlign:'justify'}}>{introduction.description}</article></Col>
            <Col md={12}>
              <SocialList/>
            </Col>
            <Col md={12}>
              <Button variant="outline-dark" className='button' onClick={handleDownload}>Resume</Button>{' '}
              <Button variant="dark" className='button' onClick={handleContactMe}>Contact Me</Button>
            </Col>
          </Row>
        </Col>
        <Col xs={12} md={1}></Col>
      </Row>
      <Skillsets/>
    </Container>
  )
}

export default Home
