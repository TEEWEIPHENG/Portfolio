import React from 'react';
import {introduction} from "../Data/data";
import "./style.css";
import profileImage from "../../assets/profileImage.jpg";


function Home() {
 
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
         
      </div>
    </div>
  )
}

export default Home
