// index.js
export const servicesData = [
  {
    title: "FullStack Development",
    description:
      "Your business deserves a fast, secure, and future-proof digital foundation. I develop custom web apps with clean architecture, optimized databases, and seamless integrations—ensuring reliability at every layer.",
    items: [
      {
        title: "Backend Engineering",
        description: "(REST/GraphQL APIs, Microservices, Auth Systems)",
      },
      {
        title: "Frontend Excellence",
        description: "(React, Vue, TypeScript, Interactive UI/UX)",
      },
    ],
  },

  {
    title: "Web Apps",
    description:
      "A clunky interface can sink even the best ideas. I craft responsive, pixel perfect web  apps (React Native) that users love—bridging design and functionality seamlessly.",
    items: [
      {
        title: "E-Commerce",
        description: "(Checkout flows, Payment Gateways, Inventory APIs)",
      },
      {
        title: "MERN Authentication",
        description: "(Checkout flows, Payment Gateways, Inventory APIs)",
      },
    ],
  },
];
export const projects = [
  {
    id: 1,
    name: "Shopping E-commerce Website ",
    description:
      "Discover the perfect fit for every wardrobe at our one-stop online fashion store! From playful styles for kids to everyday essentials and trendy picks for men and women – we bring you fashion that fits your lifestyle. Shop the latest in casuals, formals, and comfy wear for the whole family, all in one place",
    href: "https://trendora-by-charlie.vercel.app",
    image: "/assets/projects/trendora.png",
    bgImage: "/assets/backgrounds/blanket.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "Express" },
      { id: 2, name: "Stripe API" },
      { id: 2, name: "Razorpay API" },
      { id: 4, name: "MongoDB" },
      { id: 5, name: "Tailwind CSS" },
    ],
  },
  {
    id: 2,
    name: "iPhone Website Clone",
    description:
      "A sleek online showcase inspired by the iPhone experience – featuring smooth GSAP animations and a clean, intuitive interface. Explore premium tech vibes with a flawless UI that feels just like scrolling through a high-end Apple site.",
    href: "https://charlie-phone-x.vercel.app",
    image: "/assets/projects/iphone.png",
    bgImage: "/assets/backgrounds/curtains.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "GSAP" },
      { id: 3, name: "Three JS" },
      { id: 4, name: "Tailwind CSS" },
    ],
  },
  {
    id: 3,
    name: "Authentication system",
    description:
      "A secure MERN-based authentication platform with JWT login, protected routes, hashed passwords, and a responsive React frontend.",
    href: "https://web-works-with-charlie-auth.vercel.app",
    image: "/assets/projects/mern.png",
    bgImage: "/assets/backgrounds/map.jpg",
    frameworks: [
      { id: 1, name: "MongoDB" },
      { id: 2, name: "Express" },
      { id: 3, name: "React" },
      { id: 4, name: "JWT" },
      { id: 5, name: "Tailwind CSS" },
    ],
  },
];
export const socials = [
  { name: "Instagram", href: "https://www.instagram.com/ayush_h4x" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/ayush-sahu-83r/" },
  { name: "GitHub", href: "https://github.com/Charlie8989" },
];
