import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {introduction, skillsets } from "./data";
import "../styles/Home.css";
import profileImage from "../assets/profileImage.png";
import ProgressBar from 'react-bootstrap/ProgressBar';
import Dropdown from 'react-bootstrap/Dropdown';
import { DropdownButton, OverlayTrigger, Tooltip } from 'react-bootstrap';

function displaySkillsetList(field){

  
  if(field.includes('All')){
    return skillsets.map(skill => {
      return(
        <OverlayTrigger overlay={
          <Tooltip>
            <p style={{textAlign:'justify'}}>{skill.describe}</p>
            <div style={{textAlign:"left"}}>
              {skill.child.map(subSkill=>{
                return <div>{subSkill}</div>
              })}
            </div>
          </Tooltip>
        }>
          <li>
            {skill.name}
            <ProgressBar now={skill.proficiency}/>
          </li>
        </OverlayTrigger>
      )
    })
  }else{
    return skillsets.filter(skill=>skill.field.includes(field)).map(filteredSkill=>{
      return(
        <OverlayTrigger overlay={
          <Tooltip>
            <p style={{textAlign:'justify'}}>{filteredSkill.describe}</p>
            <div style={{textAlign:"left"}}>
                {filteredSkill.child.map(subSkill=>{
                   return <div>{subSkill}</div>
                }
                )}
            </div>
            
          </Tooltip>
        }>
          <li>
            {filteredSkill.name}
            <ProgressBar now={filteredSkill.proficiency}/>
          </li> 
        </OverlayTrigger>
        
      )
    })
  }
}

function Home() {
  var field="All";
  



  const[output,setdata] = useState(['All']);
  const skillFilter = (e)=>{
    setdata(e);
    ReactDOM.render(displaySkillsetList(e), document.getElementById('skillList'));
  }
  return (
    <div className='home'>
      <div className='content'>
        
          <div className='intro-text'>
            <div className='profile-img'>
              <img src={profileImage} alt="my photo" />
            </div>
            <p>
              <h2 className='person-industry'><strong className='imp-color'>{introduction.industry}</strong></h2>
              <h2 className='person-position'>{introduction.position}</h2>
            </p>
            <div className='positions-list-div'>
              <p>
                LOOKING FOR POSITION...
              </p>
              <ul className='positions-list'>
                {introduction.positionsList.map(pos=>{
                  return (
                    <li>&#60;<span className='imp-color'>{pos}</span>&nbsp;&#47;&#62;</li>
                  );
                }
                )}
              </ul>
            </div>
          </div>
          <div className='skillsets'>
            <div className='searchSkill'>
              
            <strong style={{float:"right"}}>Skillset</strong>
                <DropdownButton variant='secondary' title={output} onSelect={skillFilter}>
                  <Dropdown.Item eventKey="All" selected>All</Dropdown.Item>
                  <Dropdown.Item eventKey="Cybersecurity">Cybersecurity</Dropdown.Item>
                  <Dropdown.Item eventKey="Software Development">Software Development</Dropdown.Item>
                  <Dropdown.Item eventKey="Cloud Computing">Cloud Computing</Dropdown.Item>
                  <Dropdown.Item eventKey="Artificial Intelligent">Artificial Intelligent</Dropdown.Item>
                  <Dropdown.Item eventKey="IoT">Internet of Things</Dropdown.Item>
                </DropdownButton>
            </div>

            <div className='skillList'>
              <ul id='skillList'>
                {displaySkillsetList('All')}
              </ul>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Home
