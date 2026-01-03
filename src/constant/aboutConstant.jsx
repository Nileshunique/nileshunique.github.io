import apaapi from "./../assets/images/icons/apaapi_logo.png";
import bedrock from "./../assets/images/icons/bedrock.svg";
import responsive from "./../assets/images/icons/responsive.svg";
import frontEnd from "./../assets/images/icons/front-end.svg";
import backend from "./../assets/images/icons/backend.svg";
import api from "./../assets/images/icons/api.svg";
import { SiRedux, SiJavascript, SiExpress, SiMongodb } from "react-icons/si";
import {
  FaUbuntu,
  FaReact,
  FaHtml5,
  FaCss3,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";

export const aboutProfileList = [
  { title: "Full Name", value: "Nilesh Kumar" },
  { title: "Age", value: "27 Years" },
  { title: "Nationality", value: "Indian" },
  { title: "Languages", value: "English, Hindi" },
  { title: "Address", value: "Gurgaon, Haryana (122001)" },
  { title: "Job Type", value: "Full-Time" },
];
export const aboutProfileHeading = "About Me";
export const aboutProfileDescription =
  "I am a Full Stack Developer with a passion for creating dynamic and responsive web applications. I have experience in both front-end and back-end development, and I am always eager to learn new technologies and improve my skills.";

export const services = [
  {
    color: "bg-blue-500",
    type: "image",
    icon: responsive,
    title: "Responsive Design",
    description:
      "We craft responsive, accessible, and user-friendly UIs using modern frameworks to deliver seamless, high-performance experiences across all devices, aligned with your business goals.",
  },
  {
    color: "bg-blue-500",
    type: "image",
    icon: frontEnd,
    title: "Web Development",
    description:
      "We build dynamic, responsive web apps with smooth UX, cross-browser support, API integrations, and performance optimizations to ensure top-tier functionality across all platforms.",
  },
  {
    color: "bg-blue-500",
    type: "image",
    icon: frontEnd,
    title: "Front-End Development",
    description:
      "We create engaging, fast, and accessible front-ends with modern tools and frameworks, ensuring responsive layouts, smooth navigation, and intuitive user experiences.",
  },
  {
    color: "bg-red-500",
    type: "image",
    icon: backend,
    title: "Back-End Development",
    description:
      "We develop scalable back-end systems with secure APIs, database integration, and authentication to ensure fast, reliable, and robust application performance.",
  },
  {
    color: "bg-green-400",
    type: "image",
    icon: api,
    title: "API Development",
    description:
      "We design secure, scalable APIs for seamless data exchange between systems, supporting third-party integrations and enabling consistent app performance across platforms.",
  },
];

export const skills = [
  {
    name: "ReactJS",
    icon: <FaReact />,
    type: "icon",
    color: "bg-blue-500",
    rating: "4",
    link: "https://react.dev/",
  },
  {
    name: "Redux",
    icon: <SiRedux />,
    type: "icon",
    color: "bg-blue-500",
    rating: "4",
    link: "https://redux-toolkit.js.org/",
  },
  {
    name: "NextJS",
    icon: <RiNextjsLine />,
    type: "icon",
    color: "bg-blue-500",
    rating: "4",
    link: "https://nextjs.org/",
  },
  // {
  //   name: "MUI",
  //   icon: <SiMui />,
  //   type: "icon",
  //   color: "bg-cyan-400",
  //   rating: "4",
  //   link: "https://redux-toolkit.js.org/",
  // },
  {
    name: "JavaScript",
    icon: <SiJavascript />,
    type: "icon",
    color: "bg-yellow-400",
    rating: "4",
    link: "https://javascript.info/",
  },
  {
    name: "HTML5",
    icon: <FaHtml5 />,
    type: "icon",
    color: "bg-yellow-400",
    rating: "4",
    link: "https://www.w3schools.com/html/",
  },
  {
    name: "CSS, CSS3",
    icon: <FaCss3 />,
    type: "icon",
    color: "bg-yellow-400",
    rating: "4",
    link: "https://www.w3schools.com/css/default.asp",
  },
  {
    name: "NodeJS",
    icon: <FaNodeJs />,
    type: "icon",
    color: "bg-green-400",
    rating: "4",
    link: "https://nodejs.org/",
  },
  {
    name: "ExpressJS",
    icon: <SiExpress />,
    type: "icon",
    color: "bg-green-400",
    rating: "4",
    link: "https://expressjs.com/",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
    type: "icon",
    color: "bg-green-400",
    rating: "4",
    link: "https://www.mongodb.com/",
  },
  {
    name: "Git Source Control",
    icon: <FaGitAlt />,
    type: "icon",
    color: "bg-red-500",
    rating: "4",
    link: "https://git-scm.com/",
  },
  // {
  //   name: "Ubuntu",
  //   icon: <FaUbuntu />,
  //   type: "icon",
  //   color: "bg-red-500",
  //   rating: "4",
  //   link: "https://ubuntu.com/",
  // },
  // {
  //   name: "Amazon Bedrock",
  //   icon: bedrock,
  //   type: "image",
  //   color: "bg-yellow-500",
  //   rating: "4",
  //   link: "https://aws.amazon.com/bedrock/",
  // },
  // {
  //   name: "Amazon PAAPI Integration",
  //   icon: apaapi,
  //   type: "image",
  //   color: "bg-white-500",
  //   rating: "4",
  //   link: "https://affiliate-program.amazon.in/",
  // },
];
