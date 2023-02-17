import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {introduction, contactInfo, skillsets } from "./data";
import "../styles/Home.css";
import profileImage from "../assets/profileImage.png";
import {AiOutlineWhatsApp, AiOutlineMail,AiOutlineLinkedin, AiOutlineGithub, AiOutlineShareAlt} from "react-icons/ai";
import {CopyToClipboard} from 'react-copy-to-clipboard';
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
  
  var state = {
    value: 'https://github.io/#my_github_page',
    copied: false,
  };
  const onClick = React.useCallback(()=> {
    alert("Copied to the clipboard! Share it to your friend now!")
  }, [])

  const[output,setdata] = useState(['All']);
  const skillFilter = (e)=>{
    setdata(e);
    ReactDOM.render(displaySkillsetList(e), document.getElementById('skillList'));
  }
  return (
    <div className='home'>
      <div className='profile-img'>
        <img src={profileImage} alt="my photo" />
      </div>
      <div className='intro-text'>
        <p className='greeting'>Hello, I'm</p>
        <h1 className='person-name'><strong>{introduction.name}</strong></h1>
        <h2 className='person-title'><strong className='imp-color'>{introduction.industry}</strong>&nbsp;{introduction.position}</h2>
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
              <Dropdown.Item eventKey="Programming">Programming</Dropdown.Item>
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
      <div className='social-contact'>
        <ul className='social-list'>
          <OverlayTrigger placement='left' overlay={<Tooltip>WhatsApp</Tooltip>}><li><a href={contactInfo.whatsapp} target="_blank"><AiOutlineWhatsApp /></a></li></OverlayTrigger>
          <OverlayTrigger placement='left' overlay={<Tooltip>Email</Tooltip>}><li><a href={"mailto:"+contactInfo.email} target="_blank"><AiOutlineMail /></a></li></OverlayTrigger>
          <OverlayTrigger placement='left' overlay={<Tooltip>LinkedIn</Tooltip>}><li><a href={contactInfo.linkedin} target="_blank"><AiOutlineLinkedin /></a></li></OverlayTrigger>
          <OverlayTrigger placement='left' overlay={<Tooltip>GitHub</Tooltip>}><li><a href={contactInfo.github} target="_blank"><AiOutlineGithub /></a></li></OverlayTrigger>
          <OverlayTrigger placement='left' overlay={<Tooltip>Copy link to clipboard</Tooltip>}><li><a style={{cursor:"pointer"}}><CopyToClipboard text={state.value} onCopy={() => state.copied=true}><AiOutlineShareAlt onClick={onClick}/></CopyToClipboard></a></li></OverlayTrigger>
        </ul>
      </div>
    </div>
  )
}

export default Home
