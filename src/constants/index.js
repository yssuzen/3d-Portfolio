import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    c_plus,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    c,
    python,
    java,
    photoshop,
    idi,
    rain,
    amazon,
    uber,
    play,
    nles,
    real_estate,
    nft,
    delivery,
    threejs,
    man,
    man2,
    avatar,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Full-Stack Web Developer",
      icon: web,
    },
    {
      title: "Frontend Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "c_plus",
      icon: c_plus,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "c",
      icon: c,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Photoshop",
      icon: photoshop,
    },
  ];
  
  const experiences = [
    {
      title: "Amazon Worker",
      company_name: "Amazon YYC5",
      icon: amazon,
      iconBg: "#383E56",
      date: "Oct 2020 - March 2021",
      points: [
        "Efficiently sorted and meticulously audited packages prior to dispatching to the distribution center, ensuring timely and accurate delivery to customers.",
        "Skillfully unloaded and sorted incoming shipments, carefully auditing packages to ensure prompt and accurate delivery to customers.",
      ],
    },
    {
      title: "Cleaner ",
      company_name: "Raindrop Janitorial Services",
      icon: rain,
      //iconBg: "#383E56",
      iconBg: "#E6DEDD",
      date: "April 2021 - Aug 2021",
      points: [
        "Enhanced store presentation by diligently cleaning and buffing surfaces to provide a welcoming and hygienic environment for customers.",
        "Provided exceptional attention to detail by meticulously waxing and polishing store surfaces, resulting in an immaculate appearance.",
      ],
    },
    {
      title: "Driver ",
      company_name: "Uber",
      icon: uber,
      //iconBg: "#383E56",
      iconBg: "#E6DEDD",
      date: "April 2021 - Present",
      points: [
        "Delivered food orders to customers in a timely and professional manner, ensuring excellent customer service and satisfaction.",
        "Navigated through different routes and locations using GPS technology, optimizing delivery times and minimizing errors.",
        "Communicated effectively with customers and restaurant partners, resolving any issues or concerns promptly and courteously.",
        "Successfully balanced part-time delivery work with other commitments, demonstrating strong time management skills and reliability.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Playouth",
      icon: play,
      iconBg: "#E6DEDD",
      date: "Mar 2023 - Present",
      points: [
        "Volunteered time and expertise to support the mission of the organization, contributing to the development and maintenance of the website without financial compensation.",
        "Ensured optimal performance and user experience of the website.",
        "Proficiently managed social media accounts and strategically crafted engaging content to increase the organization's reach and promote its mission to diverse audiences.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "NLES",
      icon: nles,
      iconBg: "#E6DEDD",
      date: "Oct 2022 - Present",
      points: [
        "Volunteered time and expertise to support the mission of the organization, contributing to the development and maintenance of the website without financial compensation.",
        "Ensured optimal performance and user experience of the website.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Intercultural Dialogue Institute Ottawa",
      icon: idi,
      iconBg: "#E6DEDD",
      date: "Jun 2022 - Present",
      points: [
        "Developing, designing, and maintaining a website, ensuring its optimal performance and user experience.",
        "Proficiently managed social media accounts and strategically crafted engaging content to increase the organization's reach and promote its mission to diverse audiences.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Expertly planned and executed a project, including designing effective presentations and securing strategic partnerships.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I was impressed with Yavuz Selim's professional and creative approach to web development and design. He delivered excellent results with great attention to detail.",
      name: "Fatih Gencoglu",
      designation: "Executive Director",
      company: "IDI-Ottawa",
      image: man,
    },
    {
      testimonial:
        "Yavuz Selim is a dedicated and passionate volunteer who contributed greatly to the development of our website.",
      name: "Bilal Tastekin",
      designation: "Facility Manager",
      company: "NLES",
      image: man2,
    },
    {
      testimonial:
        "Yavuz Selim is a dedicated and passionate volunteer who contributed greatly to the development of our website and social media presence. They are a team player and made a significant impact on our organization.",
      name: "Batuhan Kopuz",
      designation: "President",
      company: "Playouth",
      image: avatar,
    },
  ];
  
  const projects = [
    {
      name: "MERN Real Estate",
      description:
        "Web-based platform that allows users to search, book, and manage property rentals from various providers, providing a convenient and efficient solution for rental needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "typescript",
          color: "pink-text-gradient",
        },
      ],
      image: real_estate,
      source_code_link: "https://github.com/",
    },
    {
      name: "Card Game",
      description:
        "Web application that enables players to play against players from around the world in real-time with stunning graphics and unique NFT cards.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: nft,
      source_code_link: "https://github.com/",
    },
    {
      name: "Delivery Management",
      description:
        "The app records and assigns customer orders to a franchise location, and dispatches delivery drivers when enough orders have been received without any memory leak.",
      tags: [
        {
          name: "c++",
          color: "blue-text-gradient",
        },
        {
          name: "python",
          color: "green-text-gradient",
        },
        {
          name: "linked-list",
          color: "pink-text-gradient",
        },
      ],
      image: delivery,
      source_code_link: "https://github.com/yssuzen/Delivery-Management/tree/main/delivery%20management",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };