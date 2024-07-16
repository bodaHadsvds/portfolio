import { nanoid } from "nanoid";
import { FaHtml5, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { BiLogoTailwindCss } from "react-icons/bi";

export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#projects", text: "projects" },
];

export const skills = [
  {
    id: nanoid(),
    title: "HTML&CSS",
    icon: <FaHtml5 className="h-16 w-16 text-emerald-500" />,
    text: "Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.",
  },
  {
    id: nanoid(),
    title: "Javascript",
    icon: <FaJs className="h-16 w-16 text-emerald-500" />,
    text: "Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality",
  },
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="h-16 w-16 text-emerald-500" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },

  {
    id: nanoid(),
    title: "NodeJs",
    icon: <FaNodeJs className="h-16 w-16 text-emerald-500" />,
    text: "Advanced proficiency in NodeJS, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
  {
    id: nanoid(),
    title: "TailwindCss",
    icon: <BiLogoTailwindCss className="h-16 w-16 text-emerald-500" />,
    text: "Advanced proficiency in Tailwindcss, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
  {
    id: nanoid(),
    title: "Nextjs",
    icon: <TbBrandNextjs className="h-16 w-16 text-emerald-500" />,
    text: "Advanced proficiency in NextJS, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
];

export const projects = [
  {
    id: nanoid(),
    img: "./images/phonex.jpg",
    url: "https://phonex-7qy6aecpv-bodahadsvds.vercel.app/",
    github: "https://github.com/bodaHadsvds/phonex",
    title: "Phonex",
    text: "E-Commerce website with modern technologies and fully responsive layout ..I used stripe for payment Method with Next.js and sanity for backend to make this awesome project Skills: TypeScript · Redux-toolkit · canvas · sanity · stripe · Next.js · Redux.js · React.js · Cascading Style Sheets (CSS)  ",
  },
  {
    id: nanoid(),
    img: "./src/images/bEACHResort.JPG",
    url: "https://beachresortsummer.netlify.app/",
    github: "https://github.com/bodaHadsvds/beachResort",
    title: "Beach Resort",
    text: "Beach Resort website - React website  Fully Responsive Design: The website is designed to be fully responsive, ensuring a seamless user experience across all devices ,Fully Responsive Design: The website is designed to be fully responsive, ensuring a seamless user experience across all devices.React Slick: Implemented React Slick for a dynamic and interactive carousel feature.Styled Components: Utilized Styled Components for writing CSS-in-JS, allowing for a cleaner and more modular approach to styling.React Router: Integrated React Router for efficient and smooth navigation between pages.User Authentication: Developed a login page to enhance user experience and security.Room Filtering: Added a filter feature for rooms, enabling users to easily find the perfect accommodation.Dark Theme: Incorporated a dark theme option, providing users with a choice of display preferences.",
  },
  {
    id: nanoid(),
    img: "./src/images/toyorAljannah.png",
    url: "https://toyor.netlify.app/#",
    github: "https://github.com/bodaHadsvds/toyor-aljanah",
    title: "Toyor Aljannah",
    text: "Toyor Aljannah is E-Commerce website with fully responsive layout skills : Html ,css ,Bootstrap ,wow.js, javascript ,jquery",
  },
  {
    id: nanoid(),
    img: "./src/images/faceRecognation.jpg",
    url: "https://face-recognation.onrender.com/",
    github: "https://github.com/bodaHadsvds/face-recognation",
    title: "Face recognation",
    text: "A Full Stack React.js website , I used clarifai API for artificial intelligence to identify and detect faces in images , sign in and register form that manage by Node.js backend server which connected to database that dealing with each user account .A Full Stack React.js website , I used clarifai API for artificial intelligence to identify and detect faces in images , sign in and register form that manage by Node.js backend server which connected to database that dealing with each user account . Skills: react hook form · clarifia API · Node.js · Back-end · tachyons · react parallax tilt · React-particles-js · React Hooks · React.js",
  },
  {
    id: nanoid(),
    img: "https://i.ibb.co/FbSqq10/tttt.png",
    url: "https://rad-bublanina-ed57fb.netlify.app/",
    github: "https://github.com/bodaHadsvds/Tours",
    title: "Tours",
    text: "simple React  UI interface website with Tours API that use React hooks (usestate) to manage state in this webpage that web have three component Tour ,Tours ,Loading .jsx skills: React.js ,React Hooks , vite, Rest API , ",
  },
  {
    id: nanoid(),
    img: "https://i.ibb.co/mXSCzcf/ffff.png",
    url: "https://sparkling-faloodeh-61295c.netlify.app/",
    github: "https://github.com/bodaHadsvds/Review",
    title: "Reviews",
    text: "simple React UI interface website that navigate with Reviews on each person Nex and prev with responsive layout  skills : React.js , React Hooks ,React icons , Css.",
  },
  {
    id: nanoid(),
    img: "https://i.ibb.co/BrL3PrT/ggggggggg.png",
    url: "https://bodahadsvds.github.io/robofrienz/",
    github: "https://github.com/bodaHadsvds/robofrienz",
    title: "robofriends",
    text: "React website that render an arrays of robots and search about them by email & name skills with fully responsive layout : React.js ,Rest Api ,Tachyons ,css ,React hooks , state management .",
  },
  {
    id: nanoid(),
    img: "https://i.ibb.co/Ws8d0f0/7777777777777777777777777.png",
    url: "https://weather-9vxg.onrender.com/",
    github: "https://github.com/bodaHadsvds/weather-app",
    title: "Weather app",
    text: "React.js website that connected to Weather API for get the weather info of the cites all over the worldReact.js website that connected to Weather API for get the weather info of the cites all over the world Skills: weather API · CSS · Html form · React.js.",
  },
  {
    id: nanoid(),
    img: "https://i.ibb.co/Y0ZFHrF/dddddddd.png",
    url: "https://spontaneous-starlight-d95dfd.netlify.app/",
    github: "https://github.com/bodaHadsvds/Birthday-Buddy",
    title: "Birthday Buddy",
    text: "React.js website  Skills:  React Hooks .javascript . CSS · State management · React.js.",
  },
  {
    id: nanoid(),
    img: "https://i.ibb.co/ByjgLYp/questions.png",
    url: "https://endearing-daffodil-c00109.netlify.app/",
    github: "https://github.com/bodaHadsvds/Questions",
    title: "Accordion",
    text: " React.js website  skills:  Reactjs .State management . javascript . css . React Hooks ",
  },
  {
    id: nanoid(),
    img: "https://i.ibb.co/CV7x45n/rrrrrrrrrrrrrwwwwwwwww.jpg",
    url: "https://lucky-kashata-a87ab5.netlify.app/",
    github: "https://github.com/bodaHadsvds/Menu",
    title: "Menu",
    text: " React.js website  skills:  Reactjs .State management . javascript . css . React Hooks  ",
  },
  {
    id: nanoid(),
    img: "https://i.ibb.co/n8z41bf/ggggggggggggggggggggggggg.png",
    url: "https://cosmic-puffpuff-1d25fc.netlify.app/",
    github: "https://github.com/bodaHadsvds/Youtubeforum",
    title: "Youtube Form",
    text: "React.js webpage  Skills:  React Hook form .javascript . CSS · Error massege · React.js.",
  },
  {
    id: nanoid(),
    img: "https://i.ibb.co/zXCnR3q/gggggggggg.png",
    url: "https://bodahadsvds.github.io/gallery-image-/",
    github: "https://github.com/bodaHadsvds/gallery-image-",
    title: "Gallery image",
    text: " Responsive Html Gallery image page that display images with hover  skills:  Html . CSS .",
  },
  {
    id: nanoid(),
    img: "https://i.ibb.co/QHCZNhS/sssssssssssss.png",
    url: "https://bodahadsvds.github.io/Background-generator/",
    github: "https://github.com/bodaHadsvds/Background-generator",
    title: "Background generator",
    text: " html page can generate 2 colors   skills:  Html . CSS .javascript",
  },
  {
    id: nanoid(),
    img: "https://i.ibb.co/yBTx2jt/snip.png",
    url: "https://bodahadsvds.github.io/startupage/",
    github: "https://github.com/bodaHadsvds/startupage",
    title: "Startup page",
    text: " html interface page design   skills:  Html . CSS .javascript,Error Massege",
  },
];
