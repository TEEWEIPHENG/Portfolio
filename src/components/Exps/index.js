import React from 'react'
import {experiences} from '../Data/data';
import './style.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Image } from 'react-bootstrap';

function Icon(src){
  return (
    <Image src={src} width="100%" height='100%' style={{ borderRadius: '50%' }} />
  );
}
function Experiences() {
  const contentStyle = { background: 'rgb(0, 0, 0, 0.05)'};
  const contentArrowStyle = { borderRight: '7px solid rgb(0, 0, 0, 0.05)' };
  const iconStyle = { background: 'rgb(0, 0, 0, 0.05)' };
  return (
    <div>
      <div className='exp-slider'>
        <VerticalTimeline>
          {experiences.map((exp)=>{
            if(exp)
            return (
              <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={contentStyle}
                  contentArrowStyle={contentArrowStyle}
                  date={exp.duration}
                  iconStyle={iconStyle}
                  icon={Icon(exp.icon)}
                >
                <div className='caption-block'>
                  <h3>{exp.title}</h3>
                  <h5>{exp.company}</h5>
                  <hr/>
                  <p style={{textAlign:"justify"}}>{exp.describe}</p>
                  {/* <p><a href={exp.reflink} target="_blank">{exp.reflink}</a></p> */}
                </div>
              </VerticalTimelineElement>
            )
          })}
      </VerticalTimeline>
      </div>
      

    </div>
  )
}

export default Experiences
