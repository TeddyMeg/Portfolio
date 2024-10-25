import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.png";

export const HERO_CONTENT = `I am Tewodros Tassew (Teddy). I am a passionate content creator, full stack and app developer with a knack for crafting robust and scalable web applications. With 3 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer, researcher, and educator with a passion for creating efficient and user-friendly web and mobile applications. With 3 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects. I am also a content creater on youtube on the channel visual learners.`;

export const EXPERIENCES = [
  {
    year: "2023",
    role: "Cornell, Maryland, Max Planck Pre-doctoral Fellow",
    company: "CMMRS",
    description: `Outstanding undergraduate and Masters students are invited to learn about cutting-edge research in computer
science. Attendees will gain exposure to advanced computer science research, interact with top scientists from US and
European academic institutions, and network with like-minded students.`,
    technologies: ["Python", "Cybersecurity", "Computer Vison", "Data Science"],
  },
  {
    year: "July 2023 - August 2023",
    role: "MIT SGI Research Fellow",
    company: "MIT",
    description: `This summer, I participated
in the MIT Summer Geometry Initiative (MIT SGI 2023), a wonderful program that brought together some of the
best minds in geometry. I learned a lot from the instructors and peers from different backgrounds and countries.
I did two projects during the program. The first one was about geometric surface characterization, where I used
the ModelNet dataset to improve the quality and accuracy of some meshes for classification purposes. The second
one was about Ex-vivo surface mesh reconstruction from in-vivo FreeSurfer meshes with Harvard Medical Lab. This
project aims to generate realistic ex-vivo surface models of the brain from in-vivo FreeSurfer meshes. Both projects
have potential for publication after the program.`,
    technologies: ["MatLab", "Python", "PyTorch", "MeshLab"],
  },
  
  {
    year: "2023 - 2024",
    role: "Student Intern",
    company: "Yizhen Medical Cloud Service",
    description: `Developing web apps to aid in medical imaging. Providing high-speed image viewing and reporting features for all departments. Integrate seamlessly image data and clinical data.`,
    technologies: ["Next JS", "React", "Python", "Sqlite"],
  },
  {
    year: "Dec 2022 - Feb 2022",
    role: "Student Intern",
    company: "Yalong Intelligent Equipment Group",
    description: `Developed ERP system for the company. Completed training sessions utilizing several world-class smart equipments. Assisted with projects by applying strong analytical
skills and studies.`,
    technologies: ["SAP and Microsoft Dynamics", "React", "MongoDB", "Express"],
  },
];

export const PROJECTS = [
  {
    title: "MERN Stack E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
    url: "https://github.com/TeddyMeg/Ecommerce_MERN",
  },
  {
    title: "Visual Learners Website",
    image: project2,
    description:
      "Visual Learners is a website and youtube channel created with the sole purpose of delivering high-quality tutorials regarding current Computer Vision and Deep Learning topics.",
    technologies: ["Wix", "YouTube", "Next.js"],
    url: "https://www.visual-learners.com",
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["CSS", "Vite", "React", "Tailwind", "Framer Motion"],
    url: "https://github.com/TeddyMeg/My-Portfolio",
  },
  {
    title: "EthioMusic Website",
    image: project4,
    description:
      "EthioMusic is a music streaming platform that allows users to stream and listen to music from a wide range of genres and artists.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "MongoDB"],
    url: "https://github.com/TeddyMeg/EthioMusic",
  },
  {
    title: "MERN Stack Movies App",
    image: project5,
    description:
      "A MERN Stack Movies App that allows users to search for movies, view details, and add them to their favorites list.  This project is a full-stack movie application built using the MERN stack (MongoDB, Express.js, React, and Node.js).",
    technologies: ["React", "CSS", "TMDB API", "Express", "MongoDB"],
    url: "https://github.com/TeddyMeg/Movie_MERN",
  },
];

export const CONTACT = {
  address: "6 Kilo, Gulele, Addis Ababa, Ethiopia ",
  phoneNo: "+251936444940",
  email: "teddy.meg1234@gmail.com",
};
