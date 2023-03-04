import React, { useState } from 'react';
import '../styles/Layout.css';
import {OverlayTrigger, Tooltip } from 'react-bootstrap';
import {NavLink } from 'react-router-dom';
import {MdWorkOutline} from 'react-icons/md';
import {BsHouse}from 'react-icons/bs';
import {AiOutlineFolder}from 'react-icons/ai';
import {TbFileCertificate}from'react-icons/tb';
import {introduction, contactInfo} from "./data";
import {AiOutlineWhatsApp, AiOutlineMail,AiOutlineLinkedin, AiOutlineGithub, AiOutlineShareAlt} from "react-icons/ai";
import {CopyToClipboard} from 'react-copy-to-clipboard';

function Layout() {
  const onClick = React.useCallback(()=> {
    alert("Copied to the clipboard! Share it to your friend now!")
  }, [])
  var state = {
    value: 'https://github.io/#my_github_page',
    copied: false,
  };
  const [activeNav, setActiveNav] = useState(introduction.name);
  const currentUrl = window.location.href;

  return (
    <div className='layout'>
      <div className='float-navbar'>
          <div className='page-name'>
            <OverlayTrigger key="Home">
              <NavLink className='navbar-item' to="/" style={({ isActive }) => ({color: isActive ? '#00A3FF' : 'white' })} onClick={() => setActiveNav(introduction.name)}>{activeNav}</NavLink >
            </OverlayTrigger>
          </div>
          <div className='navItems'>
            <OverlayTrigger key="Home" placement="bottom" overlay={<Tooltip>Home</Tooltip>}>
              <NavLink className='navbar-item' to="/" style={({ isActive }) => ({color: isActive ? '#00A3FF' : 'white' })} onClick={() => setActiveNav('TEE WEI PHENG')}><BsHouse /></NavLink >
            </OverlayTrigger>
            <OverlayTrigger key="Experiences" placement="bottom" overlay={<Tooltip>Experiences</Tooltip>}>
              <NavLink className='navbar-item' to="/experiences" style={({ isActive }) => ({color: isActive ? '#00A3FF' : 'white' })} onClick={() => setActiveNav('Experiences')}><MdWorkOutline/></NavLink>
            </OverlayTrigger>
            <OverlayTrigger key="Projects" placement="bottom" overlay={<Tooltip>Projects</Tooltip>}>
              <NavLink className='navbar-item' to="/projects" style={({ isActive }) => ({color: isActive ? '#00A3FF' : 'white' })} onClick={() => setActiveNav('Projects')}><AiOutlineFolder /></NavLink >
            </OverlayTrigger>
            <OverlayTrigger key="Certificates" placement="bottom" overlay={<Tooltip>Certificates</Tooltip>}>
              <NavLink className='navbar-item' to="/certificates" style={({ isActive }) => ({color: isActive ? '#00A3FF' : 'white' })} onClick={() => setActiveNav('Certificates')}><TbFileCertificate/></NavLink >
            </OverlayTrigger>
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
    </div>
  )
}

export default Layout
