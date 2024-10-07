
import {contactInfo} from "../../Data/data";
import {AiOutlineWhatsApp, AiOutlineMail,AiOutlineLinkedin, AiOutlineGithub} from "react-icons/ai";
import './style.css';

function SocialList(){
  return(
      <div className='social-contact'>
        <ul className='social-list'>
          <li><a href={contactInfo.whatsapp} id="whatsapp" rel="noreferrer" target="_blank"><AiOutlineWhatsApp /></a></li>
          <li><a href={"mailto:"+contactInfo.email} rel="noreferrer" target="_blank" ><AiOutlineMail /></a></li>
          <li><a href={contactInfo.linkedin} id="linkedin" target="_blank"  rel="noreferrer"><AiOutlineLinkedin /></a></li>
          <li><a href={contactInfo.github}  id="github" target="_blank" rel="noreferrer"><AiOutlineGithub /></a></li>
        </ul>
      </div>
  )
}

export default SocialList;