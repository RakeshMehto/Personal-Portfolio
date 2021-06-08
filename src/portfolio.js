import emoji from "react-easy-emoji";

import googlelogo from "./assets/img/icons/common/google.svg";
import github from "./assets/img/icons/common/github.svg";
import airbnb from "./assets/img/icons/common/airbnbLogo.png";

export const greetings = {
  name: "Rakesh Mehto",
  title: "Hi everyone, I'm Rakesh Mehto",
  description:
    "A Computer Science Student wanted to contribute knowledge and skills to Organization with continuous learning and teamwork",
  resumeLink:
    "https://drive.google.com/file/d/1rbRn35bqmCVidm2AFBJXqrCLj9u5Fvpa/view?usp=sharing",
};

export const openSource = {
  githubUserName: "RakeshMehto",
};

export const contact = {};

export const socialLinks = {
  facebook: "https://www.facebook.com/rakesh.mehto.5680/",
  instagram: "https://www.instagram.com/rakesh__mehto__/",
  twitter: "https://mobile.twitter.com/RakeshMehto10",
  github: "https://github.com/RakeshMehto",
  linkedin: "https://www.linkedin.com/in/RakeshMehto/",
};

export const skillsSection = {
  title: "What I do",
  subTitle:
    "PROGRAMMING AND DATA SCIENCE ENTHUSIAST WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web applications"
    ),
    emoji(
      "⚡ Identifying a problem, developing an algorithm for the identified problem and finally implementing the algorithm to develop a computer program"
    ),
    emoji("⚡ Always curious to know 'How things work?'"),
    emoji("⚡ ability to Learn new things efficiently"),
  ],

  softwareSkills: [
    {
      skillName: "java",
      fontAwesomeClassname: "logos:java",
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "vscode-icons:file-type-html",
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "vscode-icons:file-type-css",
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "logos:sass",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "logos:javascript",
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "vscode-icons:file-type-reactjs",
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "logos:nodejs-icon",
    },

    {
      skillName: "npm",
      fontAwesomeClassname: "vscode-icons:file-type-npm",
    },

    {
      skillName: "python",
      fontAwesomeClassname: "logos:python",
    },
    {
      skillName: "git",
      fontAwesomeClassname: "logos:git-icon",
    },
  ],
};

export const SkillBars = [
  {
    Stack: "Frontend/Design", //Insert stack or technology you have experience in
    progressPercentage: "60", //Insert relative proficiency in percentage
  },
  {
    Stack: "Data Structure & Algorithms",
    progressPercentage: "40",
  },
  {
    Stack: "Problem Solving",
    progressPercentage: "30",
  },
];

export const educationInfo = [
  {
    schoolName: "Indian Institute of Technology, Madras",
    subHeader: "Bachelor of Science in Programming and Data Science",
    duration: "September 2020 - ongoing",
    desc: "first Online Degree Programme of India started by IIT Madras",
    descBullets: [
      "Studying subjects like Statistics, Machine Learning, Computational Thinking and Python",
      "Scored 7 GPA in First Term",
    ],
  },
  {
    schoolName: "ABES Institute of Technology",
    subHeader: "Bachelor of Technology in Computer Science",
    duration: "September 2020 - ongoing",
    desc: "Abdul Kalam Technical University",
    descBullets: [
      "Due to Online Semesters, not participated in any Extra-Curriculars",
    ],
  },
  {
    schoolName: "Government Polytechnic, Ghaziabad",
    subHeader: "Diploma in Information Technology",
    duration: "September 2017 - July 2020",
    desc: "gave an edge to my Basics and fundamentals of Computer Science",
    descBullets: ["Completed Diploma with and overall percentage of 76.9"],
  },
];

export const experience = [
  {
    role: "Software Engineer",
    company: "Google",
    companylogo: googlelogo,
    date: "June 2018 – Present",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    descBullets: [
      "Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    ],
  },
  {
    role: "Front-End Developer",
    company: "Github",
    companylogo: github,
    date: "May 2017 – May 2018",
    desc: "Lorem ipsum dolor sit amet, consefdctetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    role: "Software Engineer Intern",
    company: "Airbnb",
    companylogo: airbnb,
    date: "Jan 2015 – Sep 2015",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export const projects = [
  {
    name: "Restaurant Website",
    desc: "Design and Developed a simple Responsive website(frontEnd only) • Implemented using HTML, CSS, BootStrap",
  },
  {
    name: "Bouncy Ball Game",
    desc: "Developed a simple Chrome Dino based Game • Implemented using Python • Used pyGame module",
  },
  {
    name: "EvolvFit",
    desc: "Design and Developed a React & Redux website • Implemented using JSX, CSS, BootStrap • Contains loginPage, userPage and adminPage",
    link: {
      name: "visit",
      url: "https://rakeshmehto.github.io/home",
    },
  },
];
