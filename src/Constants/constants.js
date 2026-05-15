/*
   Copyright (C), 2024-2026, Maurice Williams
   Author: Maurice Williams
   FileName: constants.js
   Version: 1.0.0
   Creation: 26/11/2025
   Last modification: 21/04/2026
*/

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFigma,
  faLinkedin,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBagShopping,
  faBars,
  faDiceD6,
  faEnvelope,
  faWindowRestore,
  faX,
} from "@fortawesome/free-solid-svg-icons";

import {
  cssIcon,
  eslintIcon,
  figmaIcon,
  gitIcon,
  htmlIcon,
  jsIcon,
  nodeIcon,
  portfolio1,
  portfolio3,
  portfolio4,
  portfolio5,
  portfolio6,
  portfolio7,
  portfolio8,
  reactIcon,
  viteIcon,
} from "../assets";

library.add(faX, faBars, faWindowRestore, faBagShopping, faDiceD6);

const media = {
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  gitIcon,
  eslintIcon,
  viteIcon,
  nodeIcon,
  figmaIcon,
  portfolio1,
  portfolio3,
  portfolio4,
  portfolio5,
  portfolio6,
  portfolio7,
  portfolio8,
};

const icons = {
  faBars,
  faX,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
  faReact,
  faLinkedin,
  faEnvelope,
  faFigma,
};

const introduction = {
  text: [
    "Hello there, I'm so happy you are here! (:",
    "I'm Maurice Williams, With over 15 years of experience in full stack engineering, I specialize in building scalable SaaS platforms, AI-powered applications, and enterprise-grade systems that solve complex business challenges. My background spans fintech, healthcare, analytics, and media streaming, where I' ve delivered high-performance products using React, Next.js, TypeScript, Node.js, Python, and cloud-native technologies. I enjoy turning ambitious ideas into reliable, user-focused digital experiences that balance performance, scalability, and clean architecture.",
    "Throughout my career, I' ve led the development of modern web and mobile applications that serve thousands to millions of users. From architecting AI-driven executive assessment platforms to improving music streaming recommendation systems and optimizing large-scale transaction platforms, I focus on creating solutions that produce measurable business impact. My work combines strong frontend engineering, backend system design, microservices architecture, and cloud infrastructure expertise across AWS, Azure, Docker, and Kubernetes.",
    "Beyond writing code, I' m passionate about collaboration, mentorship, and building engineering cultures that value quality and innovation. I enjoy working closely with cross-functional teams to design intuitive user experiences, improve development workflows, and deliver secure, maintainable products at scale. Whether leading projects, modernizing legacy systems, or integrating AI into existing platforms, I bring a practical, results-driven approach to every stage of the development lifecycle.",
    "You can download my resume here",
  ],
};

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const experience = [
  {
    company: "Roebling",
    role: "Senior Full Stack Engineer Developer",
    focus: "React.js · Next.js · TypeScript · Tailwind CSS · Performance",
    period: "01 / 2022 - 02 / 2026",
    location: "New York, NY",
    highlights: [
      "Led development of enterprise React and TypeScript applications using scalable component-driven architecture and reusable frontend systems supporting analytics and executive intelligence platforms",
      "Built modern frontend applications with Tailwind CSS, Next.js, and modular UI frameworks improving maintainability and reducing development time by 30%",
      "Developed scalable design systems, reusable component libraries, and documented UI components using Storybook workflows and frontend engineering standards",
      "Integrated REST APIs, GraphQL services, and real-time application workflows using WebSockets and Socket.io for responsive user experiences",
      "Implemented advanced state management solutions with Redux Toolkit, Zustand, and Context API supporting scalable frontend data flows",
      "Developed secure authentication workflows using OAuth2, SSO integrations, JWT security standards, and enterprise access management solutions",
      "Collaborated closely with product, UX, and platform teams to shape frontend architecture, rendering strategies, and customer-facing user experiences",
      "Improved frontend performance, SSR rendering efficiency, and operational reliability through Next.js App Router strategies, monitoring, and CI/CD automation",
    ],
  },
  {
    company: "Napster",
    role: "Senior Full Stack Developer",
    focus: "React.js · Next.js · Vite.js · TypeScript · Tailwind CSS · Node.js",
    period: "03 / 2016 - 12 / 2021",
    location: "Los Angeles, CA",
    highlights: [
      "Developed high-performance streaming and subscription platforms using React, TypeScript, Next.js, and scalable frontend architectures serving millions of active users",
      "Led frontend modernization initiatives implementing reusable component libraries, Tailwind CSS styling systems, and scalable design standards improving user experience consistency",
      "Built customer-facing UI portals and web applications with advanced rendering strategies, SSR optimization, and responsive frontend performance improvements",
      "Designed and maintained reusable frontend components and Storybook documentation workflows supporting scalable development across engineering teams",
      "Developed scalable API integration layers using REST APIs and GraphQL services supporting frontend data orchestration and business workflows",
      "Optimized frontend performance, state management workflows, and deployment automation reducing deployment times by 60%",
    ],
  },
  {
    company: "Basen",
    role: "Full Stack Developer",
    focus: "React.js · JavaScript · HTML/CSS · TypeScript · UI engineering",
    period: "02 / 2012 - 02 / 2016",
    location: "San Francisco, CA",
    highlights: [
      "Engineered enterprise SaaS applications using React, TypeScript, Next.js, and scalable frontend architectures for large-scale business clients",
      "Developed reusable UI component libraries, frontend frameworks, and component-driven architecture systems improving engineering consistency and scalability",
      "Built highly interactive frontend interfaces using Tailwind CSS, responsive design principles, and scalable state management workflows with Redux Toolkit",
      "Implemented REST API and GraphQL integrations supporting analytics dashboards, intelligent reporting systems, and real-time data applications",
      "Designed modular frontend solutions and micro-frontends supporting scalable deployment and independent feature ownership across applications",
      "Integrated enterprise authentication systems using OAuth2, SAML, JWT, and SSO frameworks supporting secure platform access management",
      "Containerized frontend and backend services with Docker and implemented AWS deployment strategies supporting scalable SaaS delivery",
      "Improved frontend maintainability, testing reliability, and deployment efficiency through CI/CD workflows, automated testing, and reusable architecture standards",
    ],
  },
];

const projects = [
  {
    name: "React-first product & marketing surfaces",
    description:
      "Owned React.js features end-to-end-Next.js or Vite.js where the architecture required it-with modular components, clear boundaries, and code that lands deployment-ready after self-QA. Matched Figma specs for spacing, type, and hierarchy across breakpoints for polished, government- and enterprise-grade presentation quality.",
    image: portfolio1,
    demo_link: "https://hulkcars.com/",
  },
  {
    name: "Figma - pixel-perfect responsive UI",
    description:
      "Translated design files into responsive layouts with exceptional attention to detail: grids, component states, and motion intent-working closely with designers so the build reflects the design system, not an approximation.",
    image: portfolio3,
    demo_link: "https://scribbletogether.com/",
  },
  {
    name: "GSAP motion without sacrificing performance",
    description:
      "Implemented advanced interaction and narrative motion with GSAP (and complementary CSS techniques) while guarding Lighthouse scores above 90-profiling frames, avoiding layout thrash, and respecting reduced-motion preferences where appropriate.",
    image: portfolio4,
    demo_link: "https://habitica.com/",
  },
  {
    name: "Bundle size, rendering & Core Web Vitals",
    description:
      "Optimized large bundle builds and render performance: code splitting, lazy loading, image and font strategy, and measurable improvements to LCP, CLS, and INP-so interfaces feel fast on real devices, not just in demos.",
    image: portfolio5,
    demo_link: "https://easyappointments.org/",
  },
  {
    name: "REST API integration in the browser",
    description:
      "Connected React UIs to REST backends with predictable loading and error UX, sensible caching, and tight coordination with backend developers on payloads, pagination, and failure modes-ideal for data-driven agency delivery.",
    image: portfolio6,
    demo_link: "https://plane.so/",
  },
  {
    name: "WordPress, ACF & the path to modern CMS",
    description:
      "Supported WordPress front-end customization and ACF-driven content where clients still rely on classic CMS workflows-clean templates, editor-safe fields, and front ends that stay maintainable while the stack shifts toward React-first and custom or headless CMS solutions.",
    image: portfolio7,
    demo_link: "https://www.kryptomon.co/",
  },
  {
    name: "Vite.js delivery & disciplined Git workflow",
    description:
      "Used Vite.js for fast feedback loops and lean production output; paired with Git-based workflows-clean commits, structured PRs, and naming conventions that pass strict review-mirroring agency expectations under a strong Lead Engineer.",
    image: portfolio8,
    demo_link: "https://alphapuesta.net/",
  },
];

const skills = [
  {
    id: "react",
    title: "React.js (primary)",
    icon: reactIcon,
    description:
      "Strong React competency-components, hooks, and patterns suited to a React-first agency roadmap and the role’s mandatory React requirement.",
  },
  {
    id: "next",
    title: "Next.js",
    icon: reactIcon,
    description:
      "Solid production experience shipping Next.js features-routing, SSR/SSG tradeoffs, image/font optimization, and builds tuned for performance.",
  },
  {
    id: "vite",
    title: "Vite.js",
    icon: viteIcon,
    description:
      "Production experience with Vite.js for fast iteration and optimized bundles-aligned with the role’s Next-or-Vite expectation.",
  },
  {
    id: "html",
    title: "HTML5",
    icon: htmlIcon,
    description:
      "Semantic, robust markup for accessible, SEO-aware interfaces-must-have foundation for enterprise and government-facing sites.",
  },
  {
    id: "css",
    title: "CSS3 & responsive UI",
    icon: cssIcon,
    description:
      "Pixel-perfect responsive layouts: spacing systems, typography, breakpoints, and polish that survive design QA.",
  },
  {
    id: "javascript",
    title: "Modern JavaScript (ES6+)",
    icon: jsIcon,
    description:
      "Strong ES6+ proficiency for readable, maintainable React code-including TypeScript where the codebase adopts it.",
  },
  {
    id: "motion",
    title: "GSAP & advanced UI motion",
    icon: cssIcon,
    description:
      "Hands-on GSAP (and complementary CSS motion) for highly polished interaction-balanced against Lighthouse and frame budgets.",
  },
  {
    id: "perf",
    title: "Performance & Core Web Vitals",
    icon: viteIcon,
    description:
      "Advanced optimization: bundle size, rendering, lazy loading, and measurable Core Web Vitals-targeting Lighthouse scores above 90 as required.",
  },
  {
    id: "figma",
    title: "Figma - production UI",
    icon: figmaIcon,
    description:
      "Translate Figma into deployment-ready front ends with exceptional attention to hierarchy, spacing, typography, and component states.",
  },
  {
    id: "apis",
    title: "REST API integration",
    icon: nodeIcon,
    description:
      "Integrate REST APIs in React apps with clear loading/error UX and close coordination with backend developers.",
  },
  {
    id: "wp",
    title: "WordPress & ACF",
    icon: htmlIcon,
    description:
      "Support front-end customization and ACF when WordPress remains in the stack-while aligning with the long-term shift toward modern frameworks and custom CMS.",
  },
  {
    id: "git",
    title: "Git workflows",
    icon: gitIcon,
    description:
      "Git-based delivery: clean commits, structured PRs, and conventions that pass strict review-no dependency on a separate QA gate.",
  },
  {
    id: "eslint",
    title: "Architecture, docs & self-QA",
    icon: eslintIcon,
    description:
      "Clean, modular, documented code; strict naming and structure; thorough self-QA before submission-cross-browser, responsive, accessibility, and performance.",
  },
  {
    id: "ai",
    title: "AI-assisted development",
    icon: jsIcon,
    description:
      "Use Copilot, Claude, and similar tools responsibly to accelerate delivery while preserving architectural integrity and reviewability.",
  },
];

const markerSvg = `<svg viewBox="-4 0 36 36">
    <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
    <circle fill="black" cx="14" cy="14" r="7"></circle>
  </svg>`;

export { experience, icons, introduction, markerSvg, media, projects, skills };
