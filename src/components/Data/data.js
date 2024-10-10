import diplomaAPUCert from '../../assets/Certs/DiplomaAPU.jpg';
import RCCE1Cert from '../../assets/Certs/RCCE1.jpg';
import RCCE2CompleteCert from '../../assets/Certs/RCCE2_complete.jpg';
import degreeAPUCert from '../../assets/Certs/DegreeAPU.jpg';
import {FaPhp} from 'react-icons/fa';
import {AiFillWindows} from 'react-icons/ai';
import {MdSchool} from 'react-icons/md';
import EtiqaIcon from '../../assets/Logo/etiqaIcon.jpg';
import { Image } from 'react-bootstrap';
import SwiftXICon from '../../assets/Logo/swiftXIcon.jpg';
import APULogo from '../../assets/Logo/logoAPU.jpg';
import goSMAC from '../../assets/Logo/gosmac_logo.jpg';

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
    title: "Full-Stack Developer",
    positionsList: ["Penetration Tester", "Security Analyst", "Full-stack developer", "Software Engineer"],
    description: "I'm a full-stack web developer."
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
        field:"Software Development",
        proficiency:"60",
        describe:"",
        child: [
            "Django",
        ],
    },
    {
        name:"JavaScript",
        field:"Software Development",
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
        field:"Software Development",
        proficiency:"60",
        describe:"",
        child: [
            "CodeIgnitor",
        ],
    },
    {
        name:"PHP",
        field:"Software Development",
        proficiency:"70",
        describe:"",
        child: [
            "CodeIgnitor",
        ],
    },
    
    {
        name:"Web development",
        field:"Software Development",
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
        title: ".NET Developer",
        company: "Etiqa Insurance Singapore Ptd Lte",
        describe: `I am responsible to maintain and enhance the web application which written in C# ASP.NET and React JS. 
        I mainly practiced C# APS .NET and React JS with Visual Studio, VS Code, SSMS, Postman, Git, etc.`,
        duration: "November 2023 - Current",
        reflink: "",
        contentStyle:{ background: 'rgb(238, 210, 2, 0.5)', color: '#fff' },
        contentArrowStyle:{ borderRight: '7px solid  rgb(238, 210, 2, 0.5)'},
        iconStyle: { background: 'rgb(0, 0, 0, 0.2)', color: '#fff' },
        icon: <Image src={EtiqaIcon} width="100%" height='100%' style={{borderRadius:'50%'}}/>,
    },
    {
        title: "Software Developer",
        company: "SwiftX Solution Ptd Lte",
        describe: `I am responsible to maintain and enhance the company product which is an Outlook add-in and tray system application. 
        I mainly practiced C# APS .NET and JavaScript with Visual Studio and GitHub. This position allows me to sharpen my coding and debugging skills. 
        I also used to setup a content server IIS through Virtual Machine.`,
        duration: "November 2022 - November 2023",
        reflink: "",
        contentStyle:{ background: 'rgb(0, 0, 0, 0.2)', color: '#fff' },
        contentArrowStyle:{ borderRight: '7px solid  rgb(0, 0, 0, 0.2)'},
        iconStyle: { background: 'rgb(0, 0, 0,0)', color: '#fff' },
        icon: <Image src={SwiftXICon} width="100%" height='100%' style={{borderRadius:'50%'}}/>,
    },
    {
        title: "BSc (Hons) in Computer Science (Cyber Security)",
        company: "Asia Pacific University of Technology & Innovation",
        describe: `I have developed a threat intelligence platform in my FYP which written in Django. 
        I also experienced wireless hacking with Air-Crack tool, deployed AWS cloud infrastructure, performed vulnerability assessment, network administration, etc.`,
        duration: "Aug 2021 - Aug 2022",
        reflink: "https://www.youtube.com/watch?v=dRXHXnF2bCE",
        contentStyle:{ background: 'rgb(0, 0, 0, 0.2)', color: '#fff' },
        contentArrowStyle:{ borderRight: '7px solid  rgb(0, 0, 0, 0.2)'},
        iconStyle: { background: 'rgb(0, 0, 0, 0.2)', color: '#fff' },
        icon: <Image src={APULogo} width="100%" height='100%' style={{borderRadius:'50%'}}/>,

    },
    {
        title: "Software Engineer Intern",
        company: "goSMAC Sdn Bhd",
        describe: `I have used to maintain and enhance the company website which included User portal and Admin portal. 
        The skills and knowledge I have learn are PHP, CodeIgniter, JavaScript, CSS, SQL, etc.
        `,
        duration: "July 2021 - November 2021",
        reflink: "https://jobs.go-smac.com/",
        contentStyle:{ background: 'rgb(0, 0, 0, 0.2)', color: '#fff' },
        contentArrowStyle:{ borderRight: '7px solid  rgb(0, 0, 0, 0.2)'},
        iconStyle: { background: '#787cb5', color: '#fff' },
        icon: <Image src={goSMAC} width="100%" height='100%' style={{borderRadius:'50%'}}/>,
    },

    {
        title: "Diploma in Information Technology specialize in Software Engineer",
        company: "Asia Pacific University of Technology & Innovation",
        describe: `I learn about the Software Engineer knowledge and required skills such as software development method, SCRUM, etc.
        I have developed web application with PHP, desktop application with Java, console application with C++. `,
        duration: "May 2018 – May 2020",
        reflink: "",
        contentStyle:{ background: 'rgb(0, 0, 0, 0.2)', color: '#fff' },
        contentArrowStyle:{ borderRight: '7px solid  rgb(0, 0, 0, 0.2)'},
        iconStyle: { background: 'rgb(0, 0, 0, 0.2)', color: '#fff' },
        icon: <Image src={APULogo} width="100%" height='100%' style={{borderRadius:'50%'}}/>,
    },

]


export const projects = [
    // {
    //     title: "Stock Analysis",
    //     describe: "This is a Stock analysis project",
    //     refLink:"",
    //     techs:[
    //         "Python",
    //     ],
    //     duration: "In Progress",
    //     field: "Cybersecurity",
    // },
    // {
    //     title: "Bug Bounty Automative tool",
    //     describe: "My Bug Bounty automative tool.",
    //     refLink:"",
    //     techs:[
    //         "Bash Shell",
    //     ],
    //     duration: "In Progress",
    //     field: "Cybersecurity",
    // },
    {
        title: "Threat Intelligence Platform",
        describe: "Threat Intelligence Platform is my Final Year Project. It provide user to manage threats and communicate with other team member.",
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
]

export const certificates = [
    {
        title: "Bacheloar of Computer Science (Cyber Security)",
        provider: "Asia Pacific University",
        achieveDate: "August 2022",
        img: degreeAPUCert,
    },
    {
        title: "Diploma in Information and Technology specialized in Software Enginner",
        provider: "Asia Pacific University",
        achieveDate: "May 2020",
        img: diplomaAPUCert,
    },
    {
        title: "Rocheston Certified Cybersecurity Engineer (RCCE) Level 2",
        provider: "Rocheston",
        achieveDate: "September 2022",
        img: RCCE2CompleteCert,
    },
    {
        title: "Rocheston Certified Cybersecurity Engineer (RCCE) Level 1",
        provider: "Rocheston",
        achieveDate: "December 2020",
        img: RCCE1Cert,
    }
]