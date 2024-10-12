import React from 'react';
import { skillsets } from "../../Data/data";
import {Col, Row} from 'react-bootstrap';
import './style.css';

function Skillsets() {
  const renderStars = (proficiency) => {
    const totalStars = 5;
    const filledStars = Math.round(proficiency / 20); 

    return (
      <div className="star-container">
        {[...Array(totalStars)].map((_, index) => (
          <span key={index} className={index < filledStars ? 'star filled' : 'star'}>&#9733;</span> // &#9733; is the HTML code for a star (★)
        ))}
      </div>
    );
  };

  return (
      <Row className='skillsets'>
        <h1>My Skills</h1>
        {skillsets.map((skill) => (
          <Col xs={6} lg={4}>
            <Row className='skills'>
                <Col xs={12} md={5}>{skill.name}</Col>
                <Col xs={12} md={4}>{renderStars(skill.proficiency)}</Col>
            </Row>
          </Col>
        ))}
      </Row>
  );
}

export default Skillsets;
