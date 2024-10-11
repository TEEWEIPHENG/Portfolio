import React from 'react';
import {introduction} from "../Data/data";
import "./style.css";
import profileImage from "../../assets/profileImage.jpg";
import {Col, Container, Image, Row} from 'react-bootstrap';
import Skillsets from '../common/Skillsets';
import SocialList from '../common/SocialList';
function Home() {
 
  return (
    <Container>
      <Row className='about'>
        <Col xs={12} md={4}>
          <Image src={profileImage} fluid rounded className='profile-img'/>
        </Col>
        <Col xs={12} md={8} className='details'>
          <h2 className='person-position'>{introduction.title}</h2>
          <div className='positions-list-div'>
            <ul className='positions-list'>
              {introduction.positionsList.map(pos=>{
                return (
                  <li>&#60;<span className='imp-color'>{pos}</span>&nbsp;&#47;&#62;</li>
                );
              }
              )}
            </ul>
          </div>     
        </Col>
      </Row>
      <Skillsets/>
      <SocialList/>
    </Container>
  )
}

export default Home
