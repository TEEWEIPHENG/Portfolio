import diplomaAPUCert from '../assets/Certs/DiplomaAPU.jpg';
import RCCE1Cert from '../assets/Certs/RCCE1.jpg';
import RCCE1CompleteCert from '../assets/Certs/RCCE1_complete.jpg';
import RCCE2CompleteCert from '../assets/Certs/RCCE2_complete.jpg';
import degreeAPUCert from '../assets/Certs/DegreeAPU.jpg';
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
    industry : "Cyber Security",
    position: "Fresh Graduate",
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
        title: "Software Developer",
        company: "SwiftX Solution Ptd Lte",
        describe: `I am responsible to maintain and enhance the company product which is an Outlook add-in and tray system application. 
        I mainly practiced C# APS .NET and JavaScript with Visual Studio and GitHub. This position allows me to sharpen my coding and debugging skills. 
        I also used to setup a content server IIS through Virtual Machine.`,
        duration: "November 2022 - Current",
        reflink: "",
        contentStyle:{ background: 'rgb(33, 150, 243)', color: '#fff' },
        contentArrowStyle:{ borderRight: '7px solid  rgb(33, 150, 243)'},
        iconStyle: { background: 'rgb(33, 150, 243)', color: '#fff' },
        icon: <AiFillWindows/>,
    },
    {
        title:"Bug Bounty Hunter",
        company: "HackerOne",
        describe: `
        I learn the bug bounty skills from online resource. I have practiced skills like penetration testing, research, and report writting.
        The project focused on is web application. 
        `,
        duration: "October 2022 - Current",
        reflink: "https://hackerone.com/teewp?type=user",
        contentStyle:{ background: 'rgb(33, 150, 243)', color: '#fff' },
        contentArrowStyle:{ borderRight: '7px solid  rgb(33, 150, 243)'},
        iconStyle: { background: 'rgb(0, 0, 0)', color: '#fff' },
        icon: <SiHackerone/>,
    },
    {
        title: "BSc (Hons) in Computer Science (Cyber Security)",
        company: "Asia Pacific University of Technology & Innovation",
        describe: `I have developed a threat intelligence platform in my FYP which written in Django. 
        I also experienced wireless hacking with Air-Crack tool, deployed AWS cloud infrastructure, performed vulnerability assessment, network administration, etc.`,
        duration: "Aug 2021 - Aug 2022",
        reflink: "https://www.youtube.com/watch?v=dRXHXnF2bCE",
        contentStyle:{ background: 'rgb(33, 150, 243)', color: '#fff' },
        contentArrowStyle:{ borderRight: '7px solid  rgb(33, 150, 243)'},
        iconStyle: { background: 'rgb(33, 150, 243)', color: '#fff' },
        icon: <MdSchool/>,
    },
    {
        title: "Software Engineer Intern",
        company: "goSMAC Sdn Bhd",
        describe: `I have used to maintain and enhance the company website which included User portal and Admin portal. 
        The skills and knowledge I have learn are PHP, CodeIgniter, JavaScript, CSS, SQL, etc.
        `,
        duration: "July 2021 - November 2021",
        reflink: "https://jobs.go-smac.com/",
        contentStyle:{ background: 'rgb(33, 150, 243)', color: '#fff' },
        contentArrowStyle:{ borderRight: '7px solid  rgb(33, 150, 243)'},
        iconStyle: { background: '#787cb5', color: '#fff' },
        icon: <FaPhp/>,
    },

    {
        title: "Diploma in Information Technology specialize in Software Engineer",
        company: "Asia Pacific University of Technology & Innovation",
        describe: `I learn about the Software Engineer knowledge and required skills such as software development method, SCRUM, etc.
        I have developed web application with PHP, desktop application with Java, console application with C++. `,
        duration: "May 2018 – May 2020",
        reflink: "",
        contentStyle:{ background: 'rgb(33, 150, 243)', color: '#fff' },
        contentArrowStyle:{ borderRight: '7px solid  rgb(33, 150, 243)'},
        iconStyle: { background: 'rgb(33, 150, 243)', color: '#fff' },
        icon: <MdSchool/>,
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
        describe: `I obtained a Bachelor's degree in Computer Science (Cybersecurity) from Asia Pacific University (APU) in 2022. During my studies, I gained a comprehensive understanding of computer systems and networks, including their vulnerabilities and methods for protecting them from cyber threats. I have experience in network security, cryptography, penetration testing, and security auditing.
        
        Throughout my Bachelor's program, I was able to participate in a range of cybersecurity projects, both individually and in team settings. These projects allowed me to apply my knowledge and skills to solve real-world cybersecurity challenges and to develop my abilities in project management, communication, and teamwork.

        Overall, I am a highly motivated and dedicated individual with a passion for cybersecurity. My Bachelor's degree in Computer Science (Cybersecurity) from APU, combined with my practical experience in cybersecurity, make me well-equipped to contribute to cybersecurity projects and to continue growing my skills and knowledge in this field.
        `,
        achieveDate: "August 2020",
        img: degreeAPUCert,
    },
    {
        title: "Diploma in Information and Technology specialized in Software Enginner",
        provider: "Asia Pacific University",
        describe: `I have obtained a diploma in Software Engineering Asia Pacific University (APU) in 2020. During my studies, I gained a strong foundation in software development concepts and best practices, including programming languages such as Java and Python, software development life cycles, and version control systems such as Git. I also have experience in developing web applications using technologies such as HTML, CSS, and JavaScript.
        
        Throughout my diploma program, I was able to participate in a range of software development projects, both individually and in team settings. These projects allowed me to apply my knowledge and skills to solve real-world problems and to develop my abilities in project management, communication, and teamwork.
        
        Overall, I am a highly motivated and dedicated individual with a passion for software development. My diploma in Software Engineering from APU, combined with my practical experience in software development, make me well-equipped to contribute to software development projects and to continue growing my skills and knowledge in this field.`,
        achieveDate: "May 2020",
        img: diplomaAPUCert,
    },
    {
        title: "Rocheston Certified Cybersecurity Engineer (RCCE) Level 2",
        provider: "Rocheston",
        describe: `The Rocheston Certified Cybersecurity Engineer Level 2 (RCCE2) certification program is designed for experienced cybersecurity professionals seeking to enhance their skills and knowledge in advanced cybersecurity topics. The program covers topics such as incident response, threat intelligence, advanced cryptography, and ethical hacking. Participants learn skills such as threat detection, response planning, risk assessment, and penetration testing. 
        
        Additionally, some RCCE2 training providers may include a hands-on CTF activity as part of the program. This activity provides participants with the opportunity to apply their knowledge and skills in a practical, team-based environment. Obtaining the RCCE2 certification demonstrates a higher level of technical expertise and knowledge in the field of cybersecurity and can help advance careers in this rapidly evolving industry. The RCCE2 program provides cybersecurity professionals with the tools and techniques to effectively manage complex cybersecurity challenges and to stay up to date with the latest cybersecurity trends and technologies.`,
        achieveDate: "September 2022",
        img: RCCE2CompleteCert,
    },
    {
        title: "Rocheston Certified Cybersecurity Engineer (RCCE) Level 1",
        provider: "Rocheston",
        describe: `The Rocheston Certified Cybersecurity Engineer Level 1 certification program provides participants with comprehensive training in network security, cryptography, application security, cloud security, and security auditing. Participants learn skills such as designing secure network infrastructures, performing penetration testing, securing cloud infrastructures, and conducting security audits. Obtaining this certification demonstrates technical skills and knowledge in the field of cybersecurity and can help advance careers in this rapidly growing field.
        
        In addition to the Rocheston certification, taking courses in Linux fundamentals and software fundamentals can further enhance technical skills and knowledge essential to cybersecurity. Linux fundamentals cover the use of the Linux operating system, basic commands, and package managers, while software fundamentals cover software development life cycles, programming languages, and version control systems. Combining these courses with the Rocheston certification can help cybersecurity professionals gain a deeper understanding of the technology supporting cybersecurity systems and processes, leading to more effective roles in the field.`,
        achieveDate: "December 2020",
        img: RCCE1Cert,
    }
]