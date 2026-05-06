// index.js
export const servicesData = [
  {
    title: "FullStack Development",
    description:
      "Your business deserves a fast, secure, and future-proof digital foundation. I develop custom web apps with clean architecture, optimized databases, and seamless integrations—ensuring reliability at every layer.",
    items: [
      {
        title: "Backend Engineering",
        description: "(REST APIs, Microservices, Auth Systems)",
      },
      {
        title: "Frontend Excellence",
        description: "(React, JavaScript, Interactive UI/UX)",
      },
    ],
  },

  {
    title: "Web Apps",
    description:
      "A clunky interface can sink even the best ideas. I craft responsive, pixel perfect web  apps (React Native) that users love—bridging design and functionality seamlessly.",
    items: [
      {
        title: "Nextflow",
        description:
          "A Clone website of Krea AI nodes feature using LLM models and more other functions",
      },
      {
        title: "BoloBoss – AI Interviewer",
        description:
          "SaaS-based mock AI interviewer app with real-time voice interaction, AI feedback, and payment integration.",
      },
      {
        title: "Trendora – E-Commerce Website",
        description:
          "Vintage-themed e-commerce site with admin panel, product management, and Stripe/Razorpay payments.",
      },
      {
        title: "TypeWithAakash - Typing Practice Web App",
        description:
          "Typing practice web app with real-time WPM, accuracy tracking, and responsive UI.",
      },
    ],
  },
  {
    title: "Web Design",
    description:
      "A clunky interface can sink even the best ideas. I design responsive, pixel-perfect websites that captivate users—seamlessly blending aesthetics and usability for an exceptional browsing experience.",
    items: [
      {
        title: "Restaurant UI Design ",
        description:
          "Created a responsive UI design for a restaurant website during a college event, earning 1st position for outstanding creativity and user experience.",
      },
      {
        title: "College Website Redesign",
        description:
          "Designed and developed a modern, responsive UI for the college website redesign project, focusing on improved usability and visual consistency.",
      },
    ],
  },
  // {
  //   title: "Graphic Design",
  //   description:
  //     "Created several posters for college events using canva — you can check them out using the Drive links below!",
  //   items: [
  //     {
  //       title: "Souvenir",
  //       description:
  //         "Designed a custom souvenir for a freelance project, blending creative visuals with personalized branding to deliver a memorable keepsake.",
  //     },
  //     {
  //       title: "Posters",
  //       description: "Checkout the posters by clicking it !!",
  //     },
  //   ],
  // },
];

export const projects = [
  {
    id: 1,
    name: "Nextflow",
    description:
      "A clone website of Krea AI nodes feature using LLM models and more other functions",
    href: "https://nextflow.ayush-codes.tech",
    image: "/assets/projects/nextflow.png",
    bgImage: "/assets/backgrounds/curtains.jpg",
    frameworks: [
      { id: 1, name: "NextJS" },
      { id: 2, name: "NodeJS" },
      { id: 3, name: "LLM Models" },
      { id: 4, name: "Trigger.dev" },
      { id: 5, name: "Supabase" },
    ],
  },
  {
    id: 2,
    name: "BOLOBOSS - An AI Recruiter",
    description:
      "A SaaS-based AI interviewer platform that conducts real-time mock interviews using voice and AI. Built with Next.js, Tailwind CSS, and integrated VAPI AI for feedback and analysis.",
    href: "https://boloboss.ayush-codes.tech",
    image: "/assets/projects/boloboss.png",
    bgImage: "/assets/backgrounds/map.jpg",
    frameworks: [
      { id: 1, name: "Supabase" },
      { id: 2, name: "NextJS" },
      { id: 3, name: "Google Auth" },
      { id: 4, name: "Razorpay" },
      { id: 5, name: "Vapi AI" },
      { id: 6, name: "OpenRouter" },
    ],
  },
  {
    id: 3,
    name: "Shopping E-commerce Website",
    description:
      "Discover the perfect fit for every wardrobe at our one-stop online fashion store! From playful styles for kids to everyday essentials and trendy picks for men and women – we bring you fashion that fits your lifestyle. Shop the latest in casuals, formals, and comfy wear for the whole family, all in one place",
    href: "https://trendora.ayush-codes.tech",
    image: "/assets/projects/trendora.png",
    bgImage: "/assets/backgrounds/blanket.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "Stripe API" },
      { id: 3, name: "Razorpay API" },
      { id: 4, name: "MongoDB" },
      { id: 5, name: "Tailwind CSS" },
    ],
  },
  {
    id: 4,
    name: "TypeWithAakash",
    description:
      "Typing practice web app with real-time WPM, accuracy tracking, and responsive UI.",
    href: "https://typewithaakash.ayush-codes.tech",
    image: "/assets/projects/typewithaakash.png",
    bgImage: "/assets/backgrounds/map.jpg",
    frameworks: [
      { id: 1, name: "NextJS" },
      { id: 2, name: "Clerk Integrated" },
      { id: 3, name: "Tailwind CSS" },
    ],
  },
  {
    id: 5,
    name: "iPhone Website Clone",
    description:
      "A sleek online showcase inspired by the iPhone experience – featuring smooth GSAP animations and a clean, intuitive interface. Explore premium tech vibes with a flawless UI that feels just like scrolling through a high-end Apple site.",
    href: "https://iphone.ayush-codes.tech",
    image: "/assets/projects/iphone.png",
    bgImage: "/assets/backgrounds/curtains.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "GSAP" },
      { id: 3, name: "Three JS" },
      { id: 4, name: "Tailwind CSS" },
    ],
  },
];

export const socials = [
  { name: "Instagram", href: "https://www.instagram.com/ayush_h4x" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/ayush-sahu-83r/" },
  { name: "GitHub", href: "https://github.com/Charlie8989" },
];
