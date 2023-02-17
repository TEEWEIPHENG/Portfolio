import React from 'react';
import '../styles/Layout.css';
import {OverlayTrigger, Tooltip } from 'react-bootstrap';
import {NavLink } from 'react-router-dom';
import {MdWorkOutline} from 'react-icons/md';
import {BsHouse}from 'react-icons/bs';
import {AiOutlineFolder}from 'react-icons/ai';
import {TbFileCertificate}from'react-icons/tb';

function Layout() {
  return (
    <div className='layout'>
      <div className='float-navbar'>
          <OverlayTrigger key="Home" placement="top" overlay={<Tooltip>Home</Tooltip>}>
            <NavLink className='navbar-item' to="/" style={({ isActive }) => ({color: isActive ? '#00A3FF' : 'white' })}><BsHouse /></NavLink >
          </OverlayTrigger>
          <OverlayTrigger key="Experiences" placement="top" overlay={<Tooltip>Experiences</Tooltip>}>
            <NavLink className='navbar-item' to="/experiences" style={({ isActive }) => ({color: isActive ? '#00A3FF' : 'white' })}><MdWorkOutline/></NavLink>
          </OverlayTrigger>
          <OverlayTrigger key="Projects" placement="top" overlay={<Tooltip>Projects</Tooltip>}>
            <NavLink className='navbar-item' to="/projects" style={({ isActive }) => ({color: isActive ? '#00A3FF' : 'white' })}><AiOutlineFolder /></NavLink >
          </OverlayTrigger>
          <OverlayTrigger key="Certificates" placement="top" overlay={<Tooltip>Certificates</Tooltip>}>
            <NavLink className='navbar-item' to="/certificates" style={({ isActive }) => ({color: isActive ? '#00A3FF' : 'white' })}><TbFileCertificate/></NavLink >
          </OverlayTrigger>
      </div>
    </div>
  )
}

export default Layout
