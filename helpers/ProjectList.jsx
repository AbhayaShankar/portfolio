// import FeaturedProject from "../components/Project/FeaturedProject";
// import Project from "../components/Project/Project";

const ProjectsList = [
  {
    id: 0,
    name: "Fitness-Hub",
    desc: "Designed and developed a gym website using NextJs and Typescript. This website helps you get acquainted with the correct way to perform an exercise and help you acheive your dream physique. You can also book your online coaching from our experts. Rich features like Authentication, Contact Support and video guidance.",
    shortdesc:
      "Developed a full-stack gym website for fitness freaks. You can refer to exercises and book online coach for fitness related activities.",
    url: "/projects/fitness-hubb.png",
    skills: ["NextJS", "Typescript", "Tailwind", "Clerk", "Shadcn/ui", "Zod"],
    link: "https://fitness-hubb.vercel.app/",
    featured: true,
    // note: "App is hosted on free render server. Please give it 15-30s to spin up.",
    source: "https://github.com/AbhayaShankar/Fitness-Hub.",
    videosrc: "/projects/fitness-hubb-vid.mp4",
  },
  {
    id: 1,
    name: "Genius-AI",
    desc: "Designed and Developed a Robust User Friendly AI SaaS Application – Genius using Typescript, Next Js. With this App, you can leverage the power of AI for generating Images, Video, Music and Code along with your own chat assistant. Rich features like Authentication, Payment Integration and Customer Support. ",
    shortdesc:
      "Developed a AI Saas application - Genius for generating Images, Video, Music and Code and chat assistant using Next Js and Typescript.",
    url: "/projects/genius-ai.png",
    skills: [
      "NextJS",
      "Typescript",
      "Tailwind",
      "Clerk",
      "Stripe",
      "Shadcn/ui",
      "Crisp",
      "Prisma",
      "OpenAI",
    ],
    link: "https://genius-art.vercel.app/",
    featured: true,
    // note: "App is hosted on free render server. Please give it 15-30s to spin up.",
    source: "https://github.com/AbhayaShankar/genius-saas-ai",
    videosrc: "/projects/genius-vid.mp4",
  },
  {
    id: 2,
    name: "Jobster - JobQuest",
    desc: "Developed a Job Search Companion for tracking and managing your job applications using React JS and Express JS. Full stack app that includes login/register, Create, update, and delete job entries based on status: applied, Interviewed, or Declined and finally visual insights for analyzing your application history. ",
    shortdesc:
      "Developed a Job Search Companion for tracking and managing your job applications using React JS and Express JS.",
    url: "/projects/jobster.png",
    skills: [
      "ReactJS",
      "ExpressJS",
      "MongoDB",
      "Redux",
      "JWT",
      "Styled Components",
    ],
    link: "https://jobquest-h6so.onrender.com/",
    featured: false,
    note: "App is hosted on free render server. Please give it 15-30s to spin up.",
    source: "https://github.com/AbhayaShankar/Jobster",
    videosrc: "",
  },
  {
    id: 3,
    name: "Estates Empire",
    desc: "Designed and Developed a Robust Real Estate Web App using Next JS and Chakra UI. Rent or Buy your dream space using the features of this app, where you can filter based upon various choices like area, ratings, price and sort them according to your needs.",
    shortdesc:
      "Designed and Developed a Robust Real Estate Web App using Next JS and Chakra UI. Rent or Buy your Dream Home.",
    url: "/projects/estate-empires.png",
    skills: ["NextJS", "ChakraUI", "RapidAPI"],
    link: "https://estates-empire.vercel.app/",
    featured: true,
    note: "",
    source: "https://github.com/AbhayaShankar/estate-empires",
    videosrc: "",
  },
  {
    id: 4,
    name: "AnimxStore",
    desc: "Your Everyday go-to Anime E-commerce Website built using React JS and Sass, Backend using strapi and cloudinary - deployed on render. Offering a wide-range of High Quality Products. Filter from categories, Add to Cart, Checkout and Pay to get your Product. Payment is integrated using Stripe",
    shortdesc:
      "Your Everyday go-to Anime E-commerce Website built using React JS and Sass, Backend using strapi and cloudinary - deployed on render.",
    url: "/projects/animxstore.png",
    skills: [
      "ReactJS",
      "Sass",
      "Strapi",
      "Cloudinary",
      "Stripe",
      "MUI",
      "EmailJS",
    ],
    link: "https://animxstore.vercel.app/",
    featured: true,
    note: "App is hosted on free render server. Please give it 15-30s to spin up.",
    source: "https://github.com/AbhayaShankar/AnimxStore",
    videosrc: "/projects/animxstore-vid.mp4",
  },
  {
    id: 5,
    name: "Cinetrek",
    desc: "Designed and Developed a Movie Website using React JS and Material UI - Discover, Explore and Enjoy Movies with Cinetrek. Search, look for popular movies and read out reviews of the movie and decide your poison.",
    shortdesc:
      "Designed and Developed a Movie Website using React JS and Material UI - Discover, Explore and Enjoy Movies with Cinetrek.",
    url: "/projects/cinetrek.png",
    skills: ["ReactJS", "TMDB API", "React-Carousel", "MaterialUI"],
    link: "https://cinetrek.netlify.app/",
    featured: false,
    note: "",
    source: "https://github.com/AbhayaShankar/Cinetrek",
    videosrc: "",
  },
  // {
  //   id: 5,
  //   name: "MERN Quizzies",
  //   desc: "A Simple Quiz App for MCQ Tests using React and Redux  ",
  //   url: "/projects/mern-quizz.png",
  //   skills: ["ReactJS", "Redux"],
  //   link: "https://mern-quizzies.vercel.app/",
  //   featured: false,
  //   note: "",
  // source: "https://github.com/AbhayaShankar/Assessment-App",
  // },
];

const workExp = [
  {
    id: 1,
    company: "Capgemini",
    position: "Frontend Developer",
    jobType: "Full-time",
    startDate: "Sept 2022",
    endDate: "Present",
  },
  {
    id: 2,
    company: "AnimxStore",
    position: "Full Stack Developer",
    jobType: "Full-time",
    startDate: "Apr 2023",
    endDate: "Aug 2023",
  },
  {
    id: 3,
    company: "Memsaab",
    position: "Frontend Developer",
    jobType: "Freelance",
    startDate: "Dec 2022",
    endDate: "Jan 2023",
  },
  {
    id: 4,
    company: "Scrollify",
    position: "Frontend Developer",
    jobType: "Freelance",
    startDate: "Jun 2022",
    endDate: "Aug 2022",
  },
];

const graveyard = [
  {
    id: 1,
    name: "Memsaab",
    desc: "An online Saree E-commerce store where user can explore varieties of sarees.",
  },
];

export { workExp, ProjectsList, graveyard };
