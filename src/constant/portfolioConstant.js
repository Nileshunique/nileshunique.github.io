import EngageAi from "./../assets/images/projects/EngageAi.png";
import Heartbeat_Design from "./../assets/images/projects/Heartbeat_Design.png";
import PVDiagnostics from "./../assets/images/projects/PVDiagnostics.png";
import Reblding from "./../assets/images/projects/Reblding.png";
import Kaboodle from "./../assets/images/projects/Kaboodle.png";
import story_lego from "./../assets/images/projects/story_lego.jpeg";
import futureagi from "./../assets/images/projects/futureagi.png";

export const portfolioItems = [
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
  // {
  //   image: "",
  //   alt: "Caregrowth Language App",
  //   title: "Caregrowth Language App",
  //   description:
  //     "This is a language learning app that helps users to learn english languages with the help of AI.",
  //   // action: "See More",
  //   link: "",
  //   projectData: {
  //     name: "Caregrowth Language App",
  //     tech: [
  //       "React Native",
  //       "Zustand",
  //       "Tailwind CSS",
  //       "Django",
  //       "Postgres",
  //       "OpenAI",
  //     ],
  //     description:
  //       "This is the English language learning app. It includes google login, apple login for ios, simple email password login for all.",
  //     responsibilities: [
  //       "Create UI for all screens and REST API integration",
  //       "Record audio for pronunciation and send it to BE",
  //       "Create practices for listening, speaking, vocabulary, and writing.",
  //       "Build and test apk for android and test flight for IOS.",
  //     ],
  //   },
  // },
  {
    image: story_lego,
    alt: "Chatwell AI Dashboard",
    title: "ChatWell AI",
    description:
      "This project works to record the thought and transcribe it. Then all thoughts within a login session combine together and generate a story in text and audio format.",
    action: "See More",
    link: "https://app.writeoutloud.app/",
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
    action: "See More",
    link: "https://www.kaboodleai.com",
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
    link: "http://191.101.232.33:5173/",
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
