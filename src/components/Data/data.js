import diplomaAPUCert from '../../assets/DiplomaAPU.jpg';
import RCCE1Cert from '../../assets/RCCE1.jpg';
import RCCE2CompleteCert from '../../assets/RCCE2_complete.jpg';
import degreeAPUCert from '../../assets/DegreeAPU.jpg';
import EtiqaIcon from '../../assets/etiqaIcon.jpg';
import SwiftXICon from '../../assets/swiftXIcon.jpg';
import APULogo from '../../assets/logoAPU.jpg';
import goSMAC from '../../assets/gosmac_logo.jpg';
import Django from '../../assets/django.png';
import ReactJS from '../../assets/reactjs.png';

export const contactInfo = {
    linkedin: "https://www.linkedin.com/in/teeweipheng",
    github: "https://github.com/TEEWEIPHENG",
    youtube: "",
    phoneNumber: "+601111340629",
    email: "teeweipheng@gmail.com",
    whatsapp: "https://wa.me/601111340629",
};

export const introduction = {
    name: "TEE WEI PHENG",
    title: "Full Stack Developer",
    description: `Dynamic Full Stack Developer with over 2 years of experience specializing in C# ASP.NET, React JS, and SQL. Passionate about cybersecurity and delivering secure and scalable solutions.`,
};

export const skillsets = [
    { name: "C#", proficiency: "100", describe: "" },
    { name: "ASP .NET", proficiency: "100", describe: "" },
    { name: "React JS", proficiency: "100", describe: "" },
    { name: "SQL", proficiency: "70", describe: "" },
    { name: "Python", proficiency: "70", describe: "" },
    { name: "JavaScript", proficiency: "70", describe: "" },
    { name: "Git", proficiency: "70", describe: "" },
    { name: "GitHub Actions", proficiency: "60", describe: "" },
    { name: "Postman", proficiency: "60", describe: "" },
    { name: "Burp Suite", proficiency: "50", describe: "" },
    { name: "IIS Environment", proficiency: "60", describe: "" },
    { name: "Nmap", proficiency: "50", describe: "" },
].sort((a, b) => b.proficiency - a.proficiency);

export const experiences = [
    {
        title: ".NET Developer",
        company: "Etiqa Insurance Singapore Ptd Ltd",
        describe: `Enhanced and debugged fintech and eCommerce-related systems, including customer and admin portals. Increased transaction efficiency and delivered high-quality solutions using DevOps and Agile methodologies.`,
        duration: "November 2023 - Current",
        reflink: "",
        icon: EtiqaIcon,
    },
    {
        title: "Software Developer",
        company: "SwiftX Solutions Pte Ltd",
        describe: `Maintained and enhanced a Microsoft Outlook Add-In application. Migrated a Windows Form application to a Razor web application to support web-based Outlook.`,
        duration: "November 2022 - November 2023",
        reflink: "",
        icon: SwiftXICon,
    },
    {
        title: "Software Engineer Intern",
        company: "goSMAC Sdn Bhd",
        describe: `Developed new features for eCommerce web and admin portals. Troubleshot and resolved bugs in existing systems.`,
        duration: "July 2021 - December 2021",
        reflink: "https://jobs.go-smac.com/",
        icon:goSMAC,
    },
];

export const projects = [
    {
        priority: 1,
        title: "Threat Intelligence Platform",
        describe: `A web-based threat intelligence platform. Designed with microservices architecture with API gateway.`,
        youtube: "",
        github: "https://github.com/CyberTIP",
        techs: ["C#", "ASP .NET", "React JS", "SQL"],
        status: "In Progress",
        carousel: ReactJS,
    },
    {
        priority: 2,
        title: "Portfolio",
        describe: `A static web application to showcase professional experiences and skills. 
        Designed and deployed using React JS and GitHub Pages.`,
        youtube: "",
        github: "https://teeweipheng.github.io/Portfolio",
        techs: ["React JS", "GitHub Pages"],
        status: "Deployed",
        carousel: ReactJS,
    },
].sort((a, b) => b.priority + a.priority);

export const certificates = [
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
    },
];
