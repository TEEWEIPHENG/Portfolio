import diplomaAPUCert from '../assets/Certs/DiplomaAPU.jpg';
import RCCE1Cert from '../assets/Certs/RCCE1.jpg';
import RCCE1CompleteCert from '../assets/Certs/RCCE1_complete.jpg';
import RCCE2CompleteCert from '../assets/Certs/RCCE2_complete.jpg';
import degreeAPUCert from '../assets/Certs/DiplomaAPU.jpg';
import {SiHackerone} from 'react-icons/si';
import {FaPhp} from 'react-icons/fa';
import {AiOutlineBug, AiFillWindows} from 'react-icons/ai';
import {MdSchool} from 'react-icons/md';

export const contactInfo = {
    linkedin: "https://www.linkedin.com/in/teeweipheng",
    github: "https://github.com/TEEWEIPHENG",
    youtube: "",
    phoneNumber:"+601111340629",
    email:"teeweipheng@gmail.com",
    whatsapp: "https://wa.me/601111340629",
}

export const introduction = {
    name : "TEE WEI PHENG",
    industry : "Cybersecurity",
    position: "Freash Graduate",
    positionsList: ["Penetration Tester", "Security Analyst", "Full-stack developer", "Software Engineer"],
}

export const skillsets = [
    {
        name:"Penetration Testing",
        field: "Cybersecurity",
        proficiency:"40",
        describe:`Learnt and practiced from bug bounty program, 
        RCCE training, Try Hack Me, Hack The Box, etc.`,
        child: [
            "Metasploit",
            "Burpsuite",
            "Nmap",
        ],
    },
    {
        name:"Digital Forensic",
        field:"Cybersecurity",
        proficiency:"10",
        describe:"",
        child: [
            "SIEM",
        ],
    },
    {
        name:"Python",
        field:"Programming",
        proficiency:"60",
        describe:"",
        child: [
            "Django",
        ],
    },
    {
        name:"JavaScript",
        field:"Programming",
        proficiency:"60",
        describe:"",
        child: [
            "JQuery",
            "AJAX",
            "React JS",
        ],
    },
    {
        name:"C# ASP.NET",
        field:"Programming",
        proficiency:"60",
        describe:"",
        child: [
            "CodeIgnitor",
        ],
    },
    {
        name:"PHP",
        field:"Programming",
        proficiency:"70",
        describe:"",
        child: [
            "CodeIgnitor",
        ],
    },
    
    {
        name:"Web development",
        field:"Programming",
        proficiency:"90",
        describe:"",
        child: [
            "HTML5",
            "CSS3",
            "JavaScript",
        ],
    },
    {
        name:"SQL",
        field:"Database",
        proficiency:"70",
        describe:"",
        child: [
            "MySQL",
            "SQLite",
            "",
        ],
    },
]


export const experiences = [
    {
        title: "Software Developer",
        company: "SwiftX Solution Ptd Lte",
        describe: "I have develop Windows application by using C# and ASP.NET. Rest API",
        duration: "November 2022 - Current",
        reflink: "https://jobs.go-smac.com/",
        contentStyle:{ background: 'rgb(33, 150, 243)', color: '#fff' },
        contentArrowStyle:{ borderRight: '7px solid  rgb(33, 150, 243)'},
        iconStyle: { background: 'rgb(33, 150, 243)', color: '#fff' },
        icon: <AiFillWindows/>,
    },
    {
        title:"Bug Bounty Hunter",
        company: "Hackerone",
        describe: "",
        duration: "October 2022 - Current",
        reflink: "https://hackerone.com/teewp?type=user",
        contentStyle:{ background: 'rgb(33, 150, 243)', color: '#fff' },
        contentArrowStyle:{ borderRight: '7px solid  rgb(33, 150, 243)'},
        iconStyle: { background: 'rgb(33, 150, 243)', color: '#fff' },
        icon: <SiHackerone/>,
    },
    {
        title: "BSc (Hons) in Computer Science (Cyber Security)",
        company: "Asia Pacific University of Technology & Innovation",
        describe: `Share my thought about the degree`,
        duration: "Aug 2021 - Aug 2022",
        reflink: "",
        contentStyle:{ background: 'rgb(33, 150, 243)', color: '#fff' },
        contentArrowStyle:{ borderRight: '7px solid  rgb(33, 150, 243)'},
        iconStyle: { background: 'rgb(33, 150, 243)', color: '#fff' },
        icon: <MdSchool/>,
    },
    {
        title: "Software Engineer Intern",
        company: "goSMAC Sdn Bhd",
        describe: `Develop company website
        •	Enhance and develop company’s website with PHP and CodeIgniter. 
        •	Design logo and edit background image with Photopea – an online photo editor similar with Adobe Photoshop.
        •	Practice full-stack web development skills.
        `,
        duration: "July 2021 - November 2021",
        reflink: "https://jobs.go-smac.com/",
        contentStyle:{ background: 'rgb(33, 150, 243)', color: '#fff' },
        contentArrowStyle:{ borderRight: '7px solid  rgb(33, 150, 243)'},
        iconStyle: { background: 'rgb(33, 150, 243)', color: '#fff' },
        icon: <FaPhp/>,
    },

    {
        title: "Diploma in Information Technology specialize in Software Engineer",
        company: "Asia Pacific University of Technology & Innovation",
        describe: `Share my thought about the diploma`,
        duration: "May 2018 – May 2020",
        reflink: "",
        contentStyle:{ background: 'rgb(33, 150, 243)', color: '#fff' },
        contentArrowStyle:{ borderRight: '7px solid  rgb(33, 150, 243)'},
        iconStyle: { background: 'rgb(33, 150, 243)', color: '#fff' },
        icon: <MdSchool/>,
    },

]


export const projects = [
    {
        title: "Threat Intelligence Platform",
        describe: "Threat Intelligence Platform is my Final Year Project.",
        refLink:"https://www.youtube.com/embed/dRXHXnF2bCE",
        techs:[
            "Django",
            "JavaScript",
            "MySQL",
            "Bootstrap",
            "VirusTotal API",
        ],
        duration: "Completed at July 2022",
        field: "Web Development, Cybersecurity"
    },
    {
        title: "Portfolio",
        describe: `Portfolio project has been developed for people who want to know more about me.
        I learnt the React JS through YouTube's tutorial video and reading the documentation. 
        After implementation stage, I have deployed the portfolio website to GitHub page.
        `,
        refLink:"",
        techs:[
            "React JS",
            "GitHub Page",
        ],
        duration: "Completed at July 2022",
        field: "Web Development",

    },
    {
        title: "TEE's Keylogger",
        describe: "This is a keylogger project",
        refLink:"",
        techs:[
            "Python",
        ],
        duration: "In Progress",
        field: "Cybersecurity",
    },
    {
        title: "Mini Game",
        describe: "This is a console game project.",
        refLink:"",
        techs:[
            "Python",
        ],
        duration: "In Progress",
        field: "Game Development",
    },
    {
        title: "Bug Bounty Scanner",
        describe: "My Bug Bounty automative tool.",
        refLink:"",
        techs:[
            "Bash Shell",
        ],
        duration: "In Progress",
        field: "Cybersecurity",
    },
]

export const certificates = [
    {
        title: "Degree in Cybersecurity",
        provider: "Asia Pacific University",
        describe: "Will insert some testimonal about the diploma programme",
        achieveDate: "19th Novemenber 2020",
        img: degreeAPUCert,
    },
    {
        title: "Diploma in Software Enginner",
        provider: "Asia Pacific University",
        describe: "Will insert some testimonal about the diploma programme",
        achieveDate: "19th Novemenber 2020",
        img: diplomaAPUCert,
    },
    {
        title: "RCCE Level 2",
        provider: "Rocheston",
        describe: "",
        achieveDate: "",
        img: RCCE2CompleteCert,
    },
    {
        title: "RCCE Level 1",
        provider: "Rocheston",
        describe: "",
        achieveDate: "",
        img: RCCE1Cert,
    }
]