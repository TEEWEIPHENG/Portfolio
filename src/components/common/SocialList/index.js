
import {contactInfo} from "../Data/data";
import {AiOutlineWhatsApp, AiOutlineMail,AiOutlineLinkedin, AiOutlineGithub, AiOutlineShareAlt} from "react-icons/ai";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import './style.css';

function SocialList(){
  return(
      <div className='social-contact'>
        <ul className='social-list'>
          <OverlayTrigger placement='left' overlay={<Tooltip>WhatsApp</Tooltip>}><li><a href={contactInfo.whatsapp} target="_blank"><AiOutlineWhatsApp /></a></li></OverlayTrigger>
          <OverlayTrigger placement='left' overlay={<Tooltip>Email</Tooltip>}><li><a href={"mailto:"+contactInfo.email} target="_blank"><AiOutlineMail /></a></li></OverlayTrigger>
          <OverlayTrigger placement='left' overlay={<Tooltip>LinkedIn</Tooltip>}><li><a href={contactInfo.linkedin} target="_blank"><AiOutlineLinkedin /></a></li></OverlayTrigger>
          <OverlayTrigger placement='left' overlay={<Tooltip>GitHub</Tooltip>}><li><a href={contactInfo.github} target="_blank"><AiOutlineGithub /></a></li></OverlayTrigger>
          <OverlayTrigger placement='left' overlay={<Tooltip>Copy link to clipboard</Tooltip>}><li><a style={{cursor:"pointer"}}><CopyToClipboard text={state.value} onCopy={() => state.copied=true}><AiOutlineShareAlt onClick={onClick}/></CopyToClipboard></a></li></OverlayTrigger>
        </ul>
      </div>
  )
}

export default SocialList();