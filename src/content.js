/* =========================================================================
   content.js — the single source of truth for the portfolio.
   -------------------------------------------------------------------------
   Everything the page renders comes from here, so this is the only file you
   need to edit to update the site. Two sections pull live data instead:
     • Writing      → public/blogs.json   (Medium feed, refreshed by fetch.js)
     • Open source  → public/profile.json (GitHub pinned repos, via fetch.js)

   All titles, dates, metrics and groupings below are taken from
   public/Komal_Shehzadi_Resume.pdf, which is the authoritative record. If the
   résumé changes, change this file to match.

   The older template config (src/portfolio.js) is no longer imported.
   ========================================================================= */

export const profile = {
  name: "Komal Shehzadi",
  role: "Principal Software Engineer",
  company: "Techlogix",
  location: "Lahore, Pakistan",
  summary:
    "Principal Software Engineer with 4+ years turning complex engineering challenges into fast, scalable, maintainable products. React, Angular, TypeScript and .NET Core — with a rare depth in data-intensive systems, including a WebGL/D3.js engine that renders million-pixel semiconductor datasets 70% faster.",
  titles: [
    "Principal Software Engineer",
    "Front-end Architect",
    "Data-Visualization Engineer",
    "React & Angular Specialist"
  ],
  photo: require("./assets/images/komal.JPG"),
  // Served from public/. The phone number has been redacted out of this copy;
  // see README "Résumé" before replacing the file.
  resumeUrl: "/Komal_Shehzadi_Resume.pdf",
  email: "shehzadikomal303@gmail.com",
  openToWork: true
};

export const socials = [
  {
    name: "GitHub",
    url: "https://github.com/kshehzadi",
    icon: "fab fa-github",
    key: "github"
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/komal-shehzadi/",
    icon: "fab fa-linkedin-in",
    key: "linkedin"
  },
  {
    name: "Medium",
    url: "https://medium.com/@komalshehzadi",
    icon: "fab fa-medium",
    key: "medium"
  },
  {
    name: "Email",
    url: "mailto:shehzadikomal303@gmail.com",
    icon: "fas fa-envelope",
    key: "email"
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/komal.shehzadii",
    icon: "fab fa-instagram",
    key: "instagram"
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/komal.shehzadee",
    icon: "fab fa-facebook-f",
    key: "facebook"
  }
];

/* Bento stat tiles under the hero. Every figure is one the résumé states. */
export const stats = [
  {
    figure: "4+",
    label: "years shipping production software",
    detail: "Techlogix, since October 2020"
  },
  {
    figure: "Principal",
    label: "Software Engineer",
    detail: "Promoted January 2026"
  },
  {
    figure: "70%",
    label: "faster rendering",
    detail: "Million-pixel datasets · WebGL + D3.js"
  },
  {
    figure: "4×",
    label: "Achiever of the Month",
    detail: "Techlogix · 2021, 2022, 2023, 2025"
  },
  {
    figure: "3rd",
    label: "AI Hackathon 2024",
    detail: "Techlogix company-wide"
  }
];

/* Client and product work, newest first. Enterprise products with no public
   marketing site, so they are described rather than linked. */
export const work = [
  {
    id: "secp",
    client: "SECP",
    title: "LEAP Portal",
    summary:
      "Front-end architecture for a high-stakes government regulatory portal — a modular Angular component library that improved build consistency and cut onboarding friction, plus lazy loading and restructured state management that reduced initial load times across complex regulatory workflows.",
    contribution: "Senior Angular lead.",
    stack: ["Angular", "TypeScript", "Accessibility"],
    period: "Jan 2026 – present",
    accent: "emerald"
  },
  {
    id: "pixel-viz",
    client: "Yieldwerx",
    title: "Pixel data visualization system",
    summary:
      "A high-performance visualization engine built from scratch to interactively render million-pixel semiconductor datasets — ~70% faster render times, unlocking analysis workflows that were previously impossible in-browser.",
    contribution: "Engineered end to end.",
    stack: ["React", "D3.js", "WebGL"],
    period: "2023 – 2026",
    accent: "cyan"
  },
  {
    id: "authentix",
    client: "Authentix",
    title: "Track & Trace (Oil & Gas)",
    summary:
      "Scalable front-end for a supply-chain traceability platform handling 100,000+ product units in real time, cutting manual product verification by ~60%. Rebuilt the data-dense operational reporting UIs, halving report generation time.",
    contribution: "Led the front-end build.",
    stack: ["Angular", "TypeScript", "Reporting"],
    period: "Mar 2023 – Jan 2026",
    accent: "indigo"
  },
  {
    id: "hp-labels",
    client: "HP",
    title: "Label Designer",
    summary:
      "A full-featured canvas-based label designer enabling precise label creation, adopted rapidly across cross-functional teams — cutting label formatting errors by ~30% and eliminating costly manual rework.",
    contribution: "Built the application.",
    stack: ["Angular", "Konva.js"],
    period: "2023 – 2026",
    accent: "violet"
  },
  {
    id: "yieldwerx-process",
    client: "Yieldwerx",
    title: "Process improvement",
    summary:
      "Deep-dive analysis of 11 end-to-end workflows, identifying bottlenecks and delivering optimizations that reduced cycle time by ~25%, plus a library of reusable templates that standardized operations going forward.",
    contribution: "Analysis and optimization.",
    stack: ["Process design", "Templates"],
    period: "2023 – 2026",
    accent: "amber"
  },
  {
    id: "genai-generator",
    client: "Techlogix",
    title: "AI-powered HTML/CSS generator",
    summary:
      "An AI-driven design generator wired to GenAI APIs, converting design intent into responsive, production-ready prototypes in minutes and compressing multi-day design-to-code cycles into a near-instant feedback loop.",
    contribution: "Pioneered the tool.",
    stack: ["GenAI APIs", "HTML", "CSS"],
    period: "2023 – 2026",
    accent: "pink"
  },
  {
    id: "scheduling-app",
    client: "Techlogix",
    title: "In-house scheduling app",
    summary:
      "An internal team scheduling application taken from concept to production, reducing scheduling conflicts by ~40% and replacing fragmented manual coordination with a single source of truth.",
    contribution: "Designed and shipped.",
    stack: ["React", "Firestore", "Redux Thunk"],
    period: "2023 – 2026",
    accent: "cyan"
  },
  {
    id: "campus-cloud",
    client: "Techlogix",
    title: "Campus on Cloud",
    summary:
      "Owned key modules of a full-stack campus management platform covering student lifecycle, financial operations and academic grading, and automated manual administrative reporting to improve data accuracy for academic and finance teams.",
    contribution: "Full-stack developer.",
    stack: ["AngularJS", "Angular 7", "Kendo UI", ".NET Core"],
    period: "Oct 2020 – Mar 2023",
    accent: "indigo"
  }
];

/* Career timeline, newest first. `current: true` gets the live badge. */
export const career = [
  {
    role: "Principal Software Engineer",
    company: "Techlogix",
    logo: require("./assets/images/Techlogix-Logo.png"),
    period: "Jan 2026 — Present",
    current: true,
    clients: ["SECP LEAP Portal"],
    summary:
      "Senior Angular lead on a government regulatory portal, setting front-end architecture and engineering standards.",
    points: [
      "Spearheaded front-end architecture for a high-stakes government regulatory portal, designing a modular Angular component library that improved build consistency and reduced onboarding friction.",
      "Drove performance gains through strategic lazy loading and restructured state management, cutting initial load times and improving runtime responsiveness.",
      "Defined and enforced engineering standards — coding conventions, code review, documentation — while mentoring junior engineers.",
      "Served as the technical bridge between product, backend and QA, translating ambiguous regulatory requirements into accessible, audit-ready UI."
    ]
  },
  {
    role: "Senior Software Engineer",
    company: "Techlogix",
    logo: require("./assets/images/Techlogix-Logo.png"),
    period: "Mar 2023 — Jan 2026",
    clients: ["Authentix", "Yieldwerx", "HP"],
    summary:
      "Front-end and data-visualization work across supply-chain traceability, semiconductor analytics and design tooling.",
    points: [
      "Cut manual product verification by ~60% with a scalable front-end for Authentix Track & Trace, handling 100,000+ product units with real-time traceability.",
      "Rebuilt data-dense operational reporting for an Oil & Gas digital program, cutting report generation time by ~50%.",
      "Engineered a React, D3.js and WebGL visualization engine rendering million-pixel semiconductor datasets ~70% faster.",
      "Analysed 11 end-to-end Yieldwerx workflows, reducing cycle time by ~25% and standardizing operations with reusable templates.",
      "Shipped an internal scheduling app (React, Firestore, Redux Thunk), reducing scheduling conflicts by ~40%.",
      "Pioneered an AI-driven HTML/CSS generator using GenAI APIs, compressing design-to-code cycles from days to minutes.",
      "Built the HP Label Designer in Angular and Konva.js, cutting label formatting errors by ~30%."
    ]
  },
  {
    role: "Software Engineer",
    company: "Techlogix",
    logo: require("./assets/images/Techlogix-Logo.png"),
    period: "Oct 2020 — Mar 2023",
    clients: ["Campus on Cloud"],
    summary:
      "Full-stack developer on a campus management platform in a complex, data-heavy environment.",
    points: [
      "Developed and owned key modules covering student lifecycle, financial operations and academic grading using AngularJS/Angular 7, Kendo UI and .NET Core.",
      "Redesigned and automated manual administrative reporting workflows, improving data accuracy and freeing staff from repetitive data entry through robust CRUD services and streamlined UX flows."
    ]
  }
];

/* Grouped exactly as the résumé's Core Competencies. Entries without `img`
   appear in the grouped cards but are skipped by the 3D balls, which need a
   texture. */
export const stack = [
  {
    group: "Front-end",
    items: [
      {
        name: "React",
        icon: "fab fa-react",
        img: require("./assets/tech/react.png")
      },
      {
        name: "Angular",
        icon: "fab fa-angular",
        img: require("./assets/tech/angular.png")
      },
      {
        name: "AngularJS",
        icon: "fab fa-angular",
        img: require("./assets/tech/angularjs.png")
      },
      {
        name: "TypeScript",
        icon: "fas fa-code",
        img: require("./assets/tech/typescript.png")
      },
      {
        name: "JavaScript ES2022+",
        icon: "fab fa-js",
        img: require("./assets/tech/javascript.png")
      },
      {
        name: "Tailwind CSS",
        icon: "fas fa-wind",
        img: require("./assets/tech/tailwind.png")
      },
      {
        name: "Bootstrap",
        icon: "fab fa-bootstrap",
        img: require("./assets/tech/bootstrap.png")
      },
      {
        name: "Material Design",
        icon: "fas fa-layer-group",
        img: require("./assets/tech/materialdesign.png")
      },
      {name: "Shadcn/UI", icon: "fas fa-cube"}
    ]
  },
  {
    group: "Visualization",
    items: [
      {
        name: "D3.js",
        icon: "fas fa-chart-line",
        img: require("./assets/tech/d3.png")
      },
      {name: "WebGL", icon: "fas fa-cubes"},
      {name: "Konva.js", icon: "fas fa-draw-polygon"}
    ]
  },
  {
    group: "Back-end",
    items: [
      {
        name: ".NET Core",
        icon: "fas fa-server",
        img: require("./assets/tech/dotnet.png")
      },
      {name: "ASP.NET", icon: "fas fa-server"},
      {name: "RESTful APIs", icon: "fas fa-plug"},
      {
        name: "Firestore",
        icon: "fas fa-fire",
        img: require("./assets/tech/firebase.png")
      }
    ]
  },
  {
    group: "Data",
    items: [
      {
        name: "SQL Server",
        icon: "fas fa-database",
        img: require("./assets/tech/sql.png")
      },
      {name: "Firestore (NoSQL)", icon: "fas fa-fire"}
    ]
  },
  {
    group: "Practices",
    items: [
      {name: "Agile / Scrum", icon: "fas fa-sync-alt"},
      {
        name: "Code review",
        icon: "fab fa-git-alt",
        img: require("./assets/tech/git.png")
      },
      {name: "Mentoring", icon: "fas fa-user-graduate"},
      {name: "Component libraries", icon: "fas fa-cubes"},
      {name: "Performance", icon: "fas fa-tachometer-alt"},
      {name: "ADA accessibility", icon: "fas fa-universal-access"}
    ]
  },
  {
    group: "AI / GenAI",
    items: [
      {name: "GenAI API integration", icon: "fas fa-robot"},
      {name: "AI code generation", icon: "fas fa-magic"},
      {name: "Rapid prototyping", icon: "fas fa-bolt"}
    ]
  }
];

export const awards = [
  {
    title: "Achiever of the Month — four times",
    issuer: "Techlogix",
    year: "2021, 2022, 2023 & 2025",
    kind: "award",
    note: "One of very few engineers to earn this recognition four separate times — sustained, year-over-year excellence in delivery, collaboration and technical impact.",
    url: "https://www.linkedin.com/posts/komal-shehzadi_grateful-and-humbled-to-be-recognized-as-activity-7425277142315405312-nRMl?utm_source=share&utm_medium=member_desktop&rcm=ACoAACgQ5uEB0pFEncIg-6eYUVfo2_ceRVBJwTw"
  },
  {
    title: "3rd place — AI Hackathon",
    issuer: "Techlogix",
    year: "2024",
    kind: "award",
    note: "Top three out of the full engineering organization, prototyping an AI-powered solution under competitive, time-boxed conditions.",
    url: "https://www.linkedin.com/posts/komal-shehzadi_ai-hackathon2024-teamwork-activity-7223387312632586240-8rjQ?utm_source=share&utm_medium=member_desktop&rcm=ACoAACgQ5uEB0pFEncIg-6eYUVfo2_ceRVBJwTw"
  },
  {
    title: "Front-End Web UI Frameworks and Tools: Bootstrap 4",
    issuer: "Coursera · HKUST",
    year: "",
    kind: "certification",
    url: "https://www.coursera.org/account/accomplishments/certificate/F5V63UECGA69"
  },
  {
    title: "Node.js, Express, MongoDB & More: The Complete Bootcamp",
    issuer: "Udemy",
    year: "2022",
    kind: "certification",
    url: "https://www.udemy.com/certificate/UC-c34d9ab6-8682-4746-9908-0013467298c0/"
  }
];

export const education = [
  {
    degree: "MS, Computer Science",
    school: "University of Engineering & Technology (UET), Lahore",
    period: "2020 — 2023",
    logo: require("./assets/images/Uet-logo.png"),
    points: ["GPA 3.6 / 4.0"]
  },
  {
    degree: "BS, Computer Science",
    school: "University of Engineering & Technology (UET), Lahore",
    period: "2016 — 2020",
    logo: require("./assets/images/Uet-logo.png"),
    points: ["GPA 3.6 / 4.0"]
  }
];

/* Fallbacks used only if public/blogs.json cannot be loaded. `fetch.js` keeps
   that file current on every build, so these are just a safety net. */
export const writingFallback = [
  {
    title: "Load Balancers: The Traffic Cop That Saved the Internet",
    url: "https://medium.com/@komalshehzadi/load-balancers-the-traffic-cop-that-saved-the-internet-ec566be63da7",
    description:
      "How load balancers keep large systems standing up, and what actually happens to a request on its way through one."
  },
  {
    title: "Scaling: Vertical vs. Horizontal",
    url: "https://medium.com/@komalshehzadi/scaling-vertical-vs-horizontal-how-systems-learn-to-handle-more-2fae10c97c62",
    description:
      "How systems learn to handle more — the trade-offs between scaling up and scaling out."
  },
  {
    title: "Your 200 OK is lying to you",
    url: "https://medium.com/@komalshehzadi/your-200-ok-is-lying-to-you-aa4a0eca344c",
    description:
      "Why a successful status code is not the same as a successful request, and how that bites you in production."
  }
];

/* Flat list for the 3D tech balls — only the entries that have a texture. */
export const techIcons = stack
  .reduce((all, group) => all.concat(group.items), [])
  .filter(item => item.img);

export const nav = [
  {id: "work", label: "Work"},
  {id: "career", label: "Career"},
  {id: "stack", label: "Stack"},
  {id: "awards", label: "Awards"},
  {id: "writing", label: "Writing"},
  {id: "contact", label: "Contact"}
];
