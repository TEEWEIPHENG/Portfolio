import React from 'react'
import {experiences} from '../Data/data';
import './style.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function Experiences() {
  return (
    <div>
      <div className='exp-slider'>
        <VerticalTimeline>
          {experiences.map((exp)=>{
            if(exp)
            return (
              <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={exp.contentStyle}
                  contentArrowStyle={exp.contentArrowStyle}
                  date={exp.duration}
                  iconStyle={exp.iconStyle}
                  icon={exp.icon}
                >
                <div className='caption-block'>
                  <h3>{exp.title}</h3>
                  <h4>{exp.company}</h4>
                  <p style={{textAlign:"justify"}}>{exp.describe}</p>
                  <p><a href={exp.reflink} target="_blank">{exp.reflink}</a></p>
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
