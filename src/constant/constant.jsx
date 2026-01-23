import profileImage from "../assets/images/profile-small.webp";
import profileImage2 from "../assets/images/profile-2.webp";
import EngageAi from "./../assets/images/projects/EngageAi.webp";
import Heartbeat_Design from "./../assets/images/projects/Heartbeat_Design.webp";
import PVDiagnostics from "./../assets/images/projects/PVDiagnostics.webp";
import Reblding from "./../assets/images/projects/Reblding.webp";
import Kaboodle from "./../assets/images/projects/Kaboodle.webp";
import story_lego from "./../assets/images/projects/story_lego.jpeg";
import futureagi from "./../assets/images/projects/futureagi.webp";
import miseit from "./../assets/images/projects/miseit.webp";
import responsive from "./../assets/images/icons/responsive.svg";
import ExtraMileAward from "./../assets/certificates/Extra_Mile_Award_Q01_2025.webp";
import UdemyWebDev from "./../assets/certificates/Web_Development_Udemy_course_compeletion_2022.webp";
import NamasteDevNodeJS from "./../assets/certificates/Nameste_dev_nodeJS_compeletion.webp";
import ScalerResponsive from "./../assets/certificates/Responsive_Web_Design_Workshop_2022.webp";
import frontEnd from "./../assets/images/icons/front-end.svg";
import backend from "./../assets/images/icons/backend.svg";
import api from "./../assets/images/icons/api.svg";
import { FaCss3, FaGitAlt, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiRedux,
  SiReacthookform,
  SiJira,
  SiLinear,
} from "react-icons/si";
import { BsGrid3X3Gap } from "react-icons/bs";
import { BiLogoJquery } from "react-icons/bi";
import { RiNextjsLine, RiNotionFill } from "react-icons/ri";
import { Blogs } from "./blogs";

const profileName = "Nilesh Kumar";
const typeWriterTexts = [
  "Full Stack Developer",
  "MERN Stack Developer",
  "Software Engineer",
  "Web Developer",
  "UI Developer / Designer",
];
const mainJobRole = "Full Stack Developer";
const description =
  "I’m a passionate and detail-oriented Front-End Developer with over 3+ years of experience building responsive, accessible, and SEO-optimized web interfaces. I specialize in modern front-end technologies including ReactJS, NextJS, NodeJS, ExpressJS and MongoDB.";
const aboutDescription = `with a passion for transforming ideas into dynamic web applications. Proficient in both front-end technologies like ReactJS and back-end frameworks such as Node.js, I focus on creating seamless user experiences. With a strong problem-solving mindset and a commitment to continuous learning, I thrive on collaboration and am always eager to tackle new challenges.`;

const personalDetail = [
  { title: "Full Name", value: "Nilesh Kumar" },
  { title: "Age", value: "27 Years" },
  { title: "Nationality", value: "Indian" },
  { title: "Languages", value: "English, Hindi" },
  { title: "Address", value: "Gurgaon, Haryana (122001)" },
  { title: "Job Type", value: "Full-Time" },
];

const profileLinks = {
  facebook: "https://www.facebook.com/nileshunique/",
  linkedin: "https://www.linkedin.com/in/nileshcodehub/",
  whatsapp: "https://wa.me/+919911148122",
  phone: "+919911148122",
  email: "nilesh.document1@gmail.com",
  github: "https://github.com/nileshcodehub",
  location: "Shanti Nagar, Gurgaon, Haryana, India",
};

const devBlogProfileLink = "https://dev.to/api/articles?username=nileshcodehub";

const services = [
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

const skills = [
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
  {
    name: "React-Hook-Form",
    icon: <SiReacthookform />,
    type: "icon",
    color: "bg-pink-400",
    rating: "4",
    link: "https://javascript.info/",
  },
  {
    name: "React-Query",
    icon: <BiLogoJquery />,
    type: "icon",
    color: "bg-blue-400",
    rating: "4",
    link: "https://javascript.info/",
  },
  {
    name: "React-Ag-Grid",
    icon: <BsGrid3X3Gap />,
    type: "icon",
    color: "bg-orange-400",
    rating: "4",
    link: "https://javascript.info/",
  },
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
  {
    name: "Jira",
    icon: <SiJira />,
    type: "icon",
    color: "bg-blue-500",
    rating: "4",
    link: "https://www.atlassian.com/software/jira",
  },
  {
    name: "Linear",
    icon: <SiLinear />,
    type: "icon",
    color: "bg-gray-800",
    rating: "4",
    link: "https://linear.app/",
  },
  {
    name: "Notion",
    icon: <RiNotionFill />,
    type: "icon",
    color: "bg-black",
    rating: "4",
    link: "https://www.notion.com/",
  },
];

const experience = [
  {
    title: "MERN Stack Developer",
    company: "Oodles Technology",
    duration: "Since May 2022",
    description: `I'm an experienced Frontend Developer with expertise in ReactJS and a deep understanding of the latest technologies. I have practical experience working with tools and frameworks such as JavaScript, Material UI, React-Bootstrap, and Redux-Toolkit. I have made significant contributions to projects such as Heartbeat Design, Plant Tagging, ReBuilding, EngageAI and KaboodleAI by utilizing my expertise to develop innovative solutions that meet project requirements. I ensures that the frontend of the projects I works on is intuitive and user-friendly. I'm committed to enhancing my skills and knowledge by staying up-to-date with industry trends to deliver the best possible results.`,
  },
];

const education = [
  {
    title: "Bachelor of Computer Application",
    institution: "Indira Gandhi National Open University",
    duration: "July 2015 - June 2021",
    description:
      "Completed a comprehensive undergraduate program focused on computer science and applications. Gained in-depth knowledge of programming, database management, software development, and web technologies. Developed problem-solving skills and hands-on experience through academic projects and practical assignments.",
  },
];

const certificates = [
  {
    title: "Certificate of Appreciation – Extra Mile Award",
    institution: "Oodles Technology",
    duration: "Q1 2025",
    description:
      "Recognized for exceptional dedication, outstanding performance, and consistently going above and beyond in delivering high-quality results.",
    image: ExtraMileAward,
  },
  {
    title: "The Complete 2022 Web Development Bootcamp",
    institution: "Udemy",
    duration: "2022",
    description:
      "Completed comprehensive web development bootcamp covering modern web technologies, frameworks, and best practices for building full-stack applications.",
    image: UdemyWebDev,
  },
  {
    title: "Certificate of Completion – Node.js",
    institution: "Namaste Dev",
    duration: "2022",
    description:
      "Successfully completed Node.js course covering server-side JavaScript, Express.js, REST APIs, and backend development fundamentals.",
    image: NamasteDevNodeJS,
  },
  {
    title: "Responsive Web Page Design Workshop",
    institution: "Scaler Academy",
    duration: "2022",
    description:
      "Completed workshop on responsive web design principles, CSS Grid, Flexbox, and mobile-first development approaches.",
    image: ScalerResponsive,
  },
];

const portfolioItems = [
  {
    image: miseit,
    alt: "MiseIt AI",
    title: "MiseIt AI",
    description:
      "An AI-powered restaurant operations platform that helps restaurant owners and super admins manage recipes, policies, staff workflows, and daily operations with intelligent automation.",
    action: "See More",
    link: "https://miseit.ai/",
    projectData: {
      name: "MiseIt AI",
      tech: [
        "ReactJS",
        "Tailwind CSS",
        "Redux Toolkit",
        "React Hook Form",
        "React Query",
        "React Ag Grid",
        "Axios",
        "REST APIs",
      ],
      description:
        "A complete restaurant operations automation platform that enables owners and super admins to manage recipes, policies, staff workflows, and day-to-day operations using AI-driven features to improve efficiency and reduce manual tasks.",
      responsibilities: [
        "Developed scalable UI components for Super Admin and Restaurant Owner dashboards.",
        "Integrated REST APIs for restaurant management, workflows, recipes, and policy features.",
        "Implemented responsive UI based on Figma designs with optimized user experience.",
        "Created role-based layouts and interactions for multi-level access control.",
        "Added analytics tracking to enhance user engagement and operational insights.",
      ],
    },
  },
  {
    image: futureagi,
    alt: "Future AGI",
    title: "Future AGI",
    description:
      "This project Build, evaluate, observe, and optimize your LLMs applications 10x faster without Human-in-the-Loop or Ground Truth.",
    action: "See More",
    link: "https://app.futureagi.com/",
    projectData: {
      name: "Future AGI",
      tech: [
        "ReactJS",
        "MUI",
        "React-ag-grid",
        "React-form-hook",
        "React-query",
      ],
      description:
        "This project Build, evaluate, observe, and optimize your LLMs applications 10x faster without Human-in-the-Loop or Ground Truth.",
      responsibilities: [
        "Create UI and Integrate rest api for all the required functionality.",
        "Revamp UI according to Figma.",
        "Create multiple complex UI and its functionality as different sections.",
      ],
    },
  },
  {
    image: "",
    alt: "Caregrowth Language App",
    title: "Caregrowth Language App",
    description:
      "This is a language learning app that helps users to learn english languages with the help of AI.",
    // action: "See More",
    link: "",
    projectData: {
      name: "Caregrowth Language App",
      tech: [
        "React Native",
        "Zustand",
        "Tailwind CSS",
        "Django",
        "Postgres",
        "OpenAI",
      ],
      description:
        "This is the English language learning app. It includes google login, apple login for ios, simple email password login for all.",
      responsibilities: [
        "Create UI for all screens and REST API integration",
        "Record audio for pronunciation and send it to BE",
        "Create practices for listening, speaking, vocabulary, and writing.",
        "Build and test apk for android and test flight for IOS.",
      ],
    },
  },
  {
    image: story_lego,
    alt: "Chatwell AI Dashboard",
    title: "ChatWell AI",
    description:
      "This project works to record the thought and transcribe it. Then all thoughts within a login session combine together and generate a story in text and audio format.",
    // action: "See More",
    // link: "https://app.writeoutloud.app/",
    projectData: {
      name: "Chatwell AI",
      tech: [
        "ReactJS",
        "Redux Toolkit",
        "Tailwind",
        "Django",
        "Postgres",
        "OpenAI",
      ],
      description:
        "This project works to record the thought and transcribe it. Then all thoughts within a login session combine together and generate a story in text and audio format.",
      responsibilities: [
        "Create UI for all pages and REST API integration",
        "Record audio and send it to backend to transcribe it",
        "play recorded audio and Edit transcript data of the same audio",
        "Export PDF of the generated stories and download the audio for the same story",
      ],
    },
  },
  {
    image: Kaboodle,
    alt: "Kaboodle Dashboard",
    title: "Kaboodle",
    description:
      "It generates four different responses to a given prompt. It also has the functionality to change the tone of response for each LLM.",
    // action: "See More",
    // link: "https://www.kaboodleai.com",
    projectData: {
      name: "Kaboodle AI",
      tech: [
        "ReactJS",
        "Redux Toolkit",
        "Tailwind CSS",
        "Nodejs",
        "MongoDB",
        "Amazon Bedrock",
        "OpenAI",
        "amazon PAAPI",
      ],
      description:
        "This project works to generate four different responses to a given prompt. It also has the functionality to change the tone of response for each LLM.",
      responsibilities: [
        "REST API creation and integration",
        "Integrate Amazon bedrock api for the LLM and open ai api",
        "Create a history of the chat if the user searches for it for the first time for each prompt",
        "Integrate Amazon Product Affiliate API to show the product list according to the prompt",
      ],
    },
  },
  {
    image: EngageAi,
    alt: "EngageAi Dashboard",
    title: "Engage Ai",
    description:
      "It analyze the uploaded resumes and result in the score according to our requirement.",
    action: "See More",
    link: "https://engage-ai.tech/",
    // link: "https://recruitai.engage-ai.tech/login",
    projectData: {
      name: "Engage AI",
      tech: ["ReactJS", "Redux Toolkit", "Tailwind CSS"],
      description:
        "This project works to analyze the uploaded resumes and result in the score according to our requirement.",
      responsibilities: [
        "REST API integration",
        "Implement the functionality to logout if the user is not active for a long time",
        "Add validation to the fields and api calling functionality",
      ],
    },
  },
  {
    image: Heartbeat_Design,
    alt: "Heartbeat_Design Dashboard",
    title: "Heartbeat Design",
    description:
      "It is an IVF hospital management to provide a complete solution to manage their work.",
    action: "See More",
    link: "https://www.heartbeat.design/",
    projectData: {
      name: "Heartbeat Design",
      tech: ["ReactJS", "Apex Chart", "MUI", "Devexpress React scheduler"],
      description:
        "This project works for IVF hospital to provide a complete solution to manage their work.",
      responsibilities: [
        "Worked in the Reception module to register the patient and manage all the details of that person",
        "Worked on Laboratory view to make their work easy by easily drag and drop feature and create form for each test report",
        "REST API integration",
        "Creating UI for the project",
      ],
    },
  },
  {
    image: PVDiagnostics,
    alt: "PVDiagnostics Dashboard",
    title: "PV Diagnostics",
    description:
      "The project keeps an eye on the Solar plant by the help of a map and shows all details about each section of that plant.",
    action: "See More",
    link: "https://dashboard.pv-diagnostics.com/",
    projectData: {
      name: "PV Diagnostic",
      tech: ["ReactJS", "Highchart", "react-google-maps/api"],
      description:
        "The project keeps an eye on the Solar plant by the help of a map and shows all details about each section of that plant.",
      responsibilities: [
        "REST API integration",
        "Add filters to identify all the different types of solar plant and its module",
        "Create charts for different types of modules",
        "Render maps and create markers to identify the different modules",
      ],
    },
  },
  {
    image: Reblding,
    alt: "Reblding Dashboard",
    title: "Reblding",
    description:
      "It deals in recreating, restructuring and fixing some issues in houses and create a interface for 3 types of users login (Admin, Homeowner, Contractor).",
    action: "See More",
    link: "https://www.reblding.com/",
    projectData: {
      name: "REBLDING",
      tech: ["ReactJS", "Redux Toolkit"],
      description:
        "The project has 3 types of user login (Admin, Homeowner, Contractor). It deals in recreating, restructuring and fixing some issues in houses.",
      responsibilities: [
        "Converting previous written code in new format",
        "replace some deprecated libraries",
        "Replace graphql api to REST Api",
        "REST API integration",
      ],
    },
  },
];

const userProfile = {
  profileName: profileName,
  profileImage2: profileImage2,
  typeWriterTexts,
  description,
  profileImage,
  mainJobRole,
  aboutDescription,
  personalDetail,
  profileLinks,
  services,
  skills,
  experience,
  education,
  certificates,
  portfolioItems,
  devBlogProfileLink,
  blogs: Blogs,
};

export default userProfile;
