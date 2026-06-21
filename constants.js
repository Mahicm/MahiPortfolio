
import resuMatch from './images/ResuMatch.png';
import idrooms from './images/Idrooms.png';

export const PERSONAL_INFO = {
  name: "Mahindha C",
  title: "AI & Data Science Engineer | Full Stack Developer",
  email: "mahichinu02@gmail.com",
  about: "I am a B.Tech graduate in AI & Data Science (2024) with over 1 year of practical experience in full-stack development. I bridge the gap between robust software engineering and intelligent data solutions. My expertise spans building scalable web applications with React and Node.js to developing machine learning models with Python.",
  location: "Bangalore, India",
  resumeLink: "#" ,
  linkedin: "https://www.linkedin.com/in/mahindha-c-b5a758215/",
  github: "https://github.com/Mahicm"


};
export const EXPERIENCES = [
   {
    id: 1,
    role: "Frontend Developer",
    company: "PS Software Solutions", 
    period: "2025 - Present",
    description: [
      "Developed and maintained scalable web applications using React.js, Next.js, Redux, and Tailwind CSS.",
"Built the complete frontend for a hotel, PG, and hostel booking platform, including customer, agent, admin, and super-admin dashboards.",
"Created reusable UI components and implemented responsive, mobile-first designs for seamless user experiences across devices.",
"Integrated 20+ REST APIs using Axios and TanStack Query with efficient data fetching, caching, error handling, and loading states.",
"Implemented authentication, role-based access control, booking workflows, search, filtering, and reporting features.",
"Optimized application performance through lazy loading, code splitting, image optimization, and efficient state management.",
"Worked with Zoho Catalyst and Zoho APIs to build backend workflows and business automation solutions.",
"Collaborated directly with clients to gather requirements, provide demos, and deliver production-ready solutions."
    ],
    technologies: [
      "React","Next.js", "Redux", "JavaScript", "REST APIs",
      "Tailwind CSS", "Github", "Tanstack query"
    ]
  },
  {
    id: 2,
    role: "Frontend Developer",
    company: "Elite Tech Corp", 
    period: "2024 - 2025",
    description: [
      "Built responsive and high-performance UI using React.js, Redux, and modern JavaScript.",
      "Developed reusable components and implemented global state management using Redux Toolkit.",
      "Integrated REST APIs, handled error states, data loading, and optimized UI rendering.",
      "Created proof-of-concept (POC) demo applications for client meetings.",
      "Worked with Node.js to build backend APIs and connect data to the frontend.",
      "Integrated Zoho REST APIs and worked with Zoho Catalyst for backend workflows.",
      "Collaborated with clients to understand requirements, provide updates, and deliver demos."
    ],
    technologies: [
      "React", "Redux", "JavaScript", "Node.js", "REST APIs",
      "Tailwind CSS", "Zoho Catalyst", "Zoho REST APIs"
    ]
  }
];

export const EDUCATION = [
  {
    id: 1,
    degree: "B.Tech in Artificial Intelligence & Data Science",
    institution: "Karpagam Institute of Technology", // Update this
    year: "2024",
    description: "Specialized in Machine Learning, Deep Learning, and Data Structures. Graduated with honors.",
  },
  // {
  //   id: 2,
  //   degree: "B.Tech in Artificial Intelligence & Data Science",
  //   institution: "Karpagam Institute of Technology", // Update this
  //   year: "2024",
  //   description: "Specialized in Machine Learning, Deep Learning, and Data Structures. Graduated with honors.",
  // }
];

export const PROJECTS = [
   {
  id: 1,
  title: "idrooms.in",
  description: "idrooms.in is a comprehensive hotel, PG, and hostel booking platform designed to simplify accommodation discovery and reservations. I developed the complete frontend application using React.js and Next.js, implementing customer, agent, admin, and super-admin dashboards. The platform includes advanced search and filtering, booking workflows, role-based access control, authentication, real-time data handling, and responsive mobile-first user interfaces. Integrated 20+ REST APIs using TanStack Query and Axios, while optimizing performance through lazy loading, code splitting, and efficient state management.",
  tags: [
    "React.js",
    "Next.js",
    "Redux",
    "TanStack Query",
    "Tailwind CSS",
    "REST APIs",
    "Axios",
    "Responsive Design",
    "Role-Based Access Control",
    "Vercel"
  ],
  url: idrooms,
  link: "https://idrooms.in",
  gitlink: ""
},
  {
    id: 2,
    title: "ResuMatch AI",
    description: "ResumeMatch AI is an intelligent resume analyzer that uses Google Gemini AI to extract structured information from resumes (PDFs, Docs) and compare them with job descriptions. The system calculates a match score, highlights missing skills, generates improved bullet points, and provides ATS-optimized suggestions to increase job-fit and resume quality. Users can upload their resume, paste a job description, and instantly receive a detailed analysis powered by generative AI.",
    tags: ["React", "Vite", "Tailwind CSS","Google Gemini 2.5 Flash API","Vercel Deployment"],
    url:resuMatch,
    link:"https://resu-match-ai-ten.vercel.app/",
    gitlink:"https://github.com/Mahicm/ResuMatchAI"
  },
 


  // {
  //   id: 2,
  //   title: "AI-Powered Analytics Dashboard",
  //   description: "A comprehensive dashboard for visualizing complex datasets using ML models to predict trends.",
  //   tags: ["Python", "React", "D3.js", "Machine Learning"],
  //   link:"https://resu-match-ai-ten.vercel.app/"
  // },
  // {
  //   id: 3,
  //   title: "E-Commerce Platform",
  //   description: "Full-stack e-commerce solution with Redux state management and secure payment gateway integration.",
  //   tags: ["React", "Redux", "Node.js", "MongoDB"],
  //   link:"https://resu-match-ai-ten.vercel.app/"
  // }
];

export const SKILLS = [
  {
    category: "Frontend",
    skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Next.js", "Redux", "Tailwind CSS","Material UI"]
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "RESTful APIs", "Python", "SQL"]
  },
  {
    category: "AI & Data Science",
    skills: ["Python", "Machine Learning", "Model Building", "Pandas", "NumPy", "Gemini API"]
  },
  {
    category: "Tools & Others",
    skills: ["Flask","Git", "VS Code", "Postman", "Zoho Catalyst", "Jupyter Notebook", "Google Colab", "Zoho Products"]
  }
];

export const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  {name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];
