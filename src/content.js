/* =========================================================================
   content.js — the single source of truth for the portfolio.
   -------------------------------------------------------------------------
   Everything the page renders comes from here, so this is the only file you
   need to edit to update the site. Two sections pull live data instead:
     • Writing      → public/blogs.json   (Medium feed, written by fetch.js)
     • Open source  → public/profile.json (GitHub pinned repos, via fetch.js)

   The older template config (src/portfolio.js) is no longer imported.
   ========================================================================= */

export const profile = {
  name: "Komal Shehzadi",
  role: "Principal Software Engineer",
  company: "Techlogix",
  location: "Lahore, Pakistan",
  // Shown under the name in the hero. Keep it to one or two sentences.
  summary:
    "I lead front-end architecture for enterprise and public-sector products — turning complex domains like government company registration, track-and-trace and semiconductor yield analytics into interfaces people can actually work in. Six years of shipping Angular and React at production scale.",
  // Cycled by the hero's typing effect.
  titles: [
    "Principal Software Engineer",
    "Front-end Architect",
    "Angular & React Specialist",
    "Design-System Builder"
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

/* The bento stat tiles directly under the hero. Every figure here is drawn
   from the career and education entries further down this file. */
export const stats = [
  {
    figure: "6+",
    label: "years shipping production UI",
    detail: "Full-time since July 2020"
  },
  {
    figure: "Principal",
    label: "Software Engineer",
    detail: "Promoted December 2025"
  },
  {
    figure: "3×",
    label: "Achiever of the Month",
    detail: "Techlogix · 2022, 2023, 2025"
  },
  {
    figure: "3rd",
    label: "AI Hackathon 2024",
    detail: "Techlogix company-wide"
  },
  {
    figure: "8",
    label: "semesters on the Dean's Roll of Honour",
    detail: "UET Lahore · BS & MS"
  }
];

/* Client and product work, newest first. Most are enterprise products with no
   public marketing site, so they are presented without links rather than with
   dead ones. */
export const work = [
  {
    id: "secp",
    client: "SECP",
    title: "LEAP Portal",
    summary:
      "Government portal for registering businesses and companies with the Securities & Exchange Commission of Pakistan — public-sector scale, with the compliance and accessibility expectations that come with it.",
    contribution: "Front-end engineer on the portal.",
    stack: ["Angular 14 & 18", "TypeScript"],
    period: "May 2026 – present",
    accent: "emerald"
  },
  {
    id: "authentix",
    client: "Authentix",
    title: "Track & trace platform",
    summary:
      "Front-end for a supply-chain authentication platform used to track and verify goods through their distribution chain.",
    contribution: "Led the Angular front-end.",
    stack: ["Angular", "TypeScript", "RxJS"],
    period: "2025 – early 2026",
    accent: "indigo"
  },
  {
    id: "yieldwerx",
    client: "Yieldwerx",
    title: "Semiconductor yield analytics",
    summary:
      "Data-dense analytics interfaces for a semiconductor yield-management product — large result sets, heavy charting, engineer users.",
    contribution: "Built the React front-end.",
    stack: ["React", "JavaScript", "Charting"],
    period: "2023 – 2025",
    accent: "cyan"
  },
  {
    id: "hp-labels",
    client: "HP",
    title: "Label design application",
    summary:
      "Browser-based label designer — a canvas editor with drag-and-drop placement, typography controls and print-accurate output.",
    contribution: "Front-end development.",
    stack: ["Angular", "Canvas", "SCSS"],
    period: "2021 – 2022",
    accent: "violet"
  },
  {
    id: "campus-cloud",
    client: "Techlogix",
    title: "Campus on Cloud",
    summary:
      "Cloud-hosted institution management system covering admissions, academics and administration for education customers.",
    contribution: "Full-stack: Angular front-end, .NET Core services.",
    stack: ["Angular", ".NET Core", "SQL"],
    period: "2020 – 2022",
    accent: "amber"
  },
  {
    id: "uet-portal",
    client: "UET Lahore",
    title: "Admissions & assessment portal",
    summary:
      "Admission and online-assessment portal for the UET Computer Science and IBM departments.",
    contribution: "Front-end and back-end development.",
    stack: ["JavaScript", "SQL"],
    period: "2019 – 2020",
    accent: "pink"
  }
];

/* Career timeline, newest first. `current: true` gets the live badge. */
export const career = [
  {
    role: "Principal Software Engineer",
    company: "Techlogix",
    logo: require("./assets/images/Techlogix-Logo.png"),
    period: "Dec 2025 — Present",
    current: true,
    clients: ["Authentix", "SECP"],
    summary:
      "Driving front-end architecture and technical direction across client engagements — the Authentix track-and-trace platform, then the SECP LEAP Portal.",
    points: [
      "Carried the Authentix track-and-trace platform through to early 2026.",
      "Front-end engineer on the SECP LEAP Portal from May 2026 — a government service for registering businesses and companies, built in Angular 14 and 18.",
      "Own front-end architecture and design-system decisions across product teams.",
      "Mentor and technically lead engineers through design and code reviews.",
      "Set performance, accessibility and code-quality standards for the Angular and React platforms."
    ]
  },
  {
    role: "Senior Software Engineer",
    company: "Techlogix",
    logo: require("./assets/images/Techlogix-Logo.png"),
    period: "Mar 2022 — Dec 2025",
    summary:
      "Senior front-end engineer across enterprise products and client engagements.",
    points: [
      "React front-end for semiconductor yield platform Yieldwerx, 2023 to 2025.",
      "Track-and-trace application in Angular for Authentix, from 2025."
    ]
  },
  {
    role: "Software Engineer",
    company: "Techlogix",
    logo: require("./assets/images/Techlogix-Logo.png"),
    period: "Oct 2020 — Mar 2022",
    summary:
      "Full-stack work on cloud products as part of the Techlogix product team.",
    points: [
      "Label-design web application for HP, 2021 to 2022.",
      "Front-end and back-end of a cloud-based institution management system.",
      "Design, development and integration of Campus on Cloud.",
      "Worked across several Angular versions and .NET Core services."
    ]
  },
  {
    role: "Software Engineer",
    company: "Netsol Technologies",
    logo: require("./assets/images/Netsol-Logo.png"),
    period: "Jul 2020 — Oct 2020",
    summary: "Trained on the in-house framework and tooling.",
    points: ["Database schemas and queries for the core system."]
  },
  {
    role: "Software Engineer Intern",
    company: "UET CS Department",
    logo: require("./assets/images/Uet-logo.png"),
    period: "May 2019 — Apr 2020",
    summary:
      "Built the admission and online-assessment portal for the CS and IBM departments.",
    points: ["Front-end and back-end development, from schema to screens."]
  }
];

/* Grouped rather than rated. Self-assigned percentage bars read as noise to
   most reviewers, so the stack is presented as what it is: a grouped list. */
export const stack = [
  {
    group: "Front-end",
    items: [
      {
        name: "Angular",
        icon: "fab fa-angular",
        img: require("./assets/tech/angular.png")
      },
      {
        name: "React",
        icon: "fab fa-react",
        img: require("./assets/tech/react.png")
      },
      {
        name: "TypeScript",
        icon: "fas fa-code",
        img: require("./assets/tech/typescript.png")
      },
      {
        name: "JavaScript",
        icon: "fab fa-js",
        img: require("./assets/tech/javascript.png")
      },
      {
        name: "HTML5",
        icon: "fab fa-html5",
        img: require("./assets/tech/html5.png")
      },
      {
        name: "CSS3",
        icon: "fab fa-css3-alt",
        img: require("./assets/tech/css3.png")
      },
      {
        name: "Sass",
        icon: "fab fa-sass",
        img: require("./assets/tech/sass.png")
      }
    ]
  },
  {
    group: "Back-end & data",
    items: [
      {
        name: "Node.js",
        icon: "fab fa-node",
        img: require("./assets/tech/nodejs.png")
      },
      {
        name: ".NET Core",
        icon: "fas fa-server",
        img: require("./assets/tech/dotnet.png")
      },
      {
        name: "SQL",
        icon: "fas fa-database",
        img: require("./assets/tech/sql.png")
      },
      {
        name: "Python",
        icon: "fab fa-python",
        img: require("./assets/tech/python.png")
      }
    ]
  },
  {
    group: "Cloud & tooling",
    items: [
      {name: "AWS", icon: "fab fa-aws", img: require("./assets/tech/aws.png")},
      {
        name: "Firebase",
        icon: "fas fa-fire",
        img: require("./assets/tech/firebase.png")
      },
      {
        name: "Docker",
        icon: "fab fa-docker",
        img: require("./assets/tech/docker.png")
      },
      {
        name: "Git",
        icon: "fab fa-git-alt",
        img: require("./assets/tech/git.png")
      },
      {name: "npm", icon: "fab fa-npm"}
    ]
    /* Items without `img` are listed in the grouped cards but skipped by the
       3D balls, which need a texture. */
  }
];

export const awards = [
  {
    title: "Achiever of the Month",
    issuer: "Techlogix",
    year: "2025",
    kind: "award",
    note: "Recognised company-wide for engineering contribution.",
    url: "https://www.linkedin.com/posts/komal-shehzadi_grateful-and-humbled-to-be-recognized-as-activity-7425277142315405312-nRMl?utm_source=share&utm_medium=member_desktop&rcm=ACoAACgQ5uEB0pFEncIg-6eYUVfo2_ceRVBJwTw"
  },
  {
    title: "3rd place, AI Hackathon",
    issuer: "Techlogix",
    year: "2024",
    kind: "award",
    note: "Company-wide AI hackathon, team entry.",
    url: "https://www.linkedin.com/posts/komal-shehzadi_ai-hackathon2024-teamwork-activity-7223387312632586240-8rjQ?utm_source=share&utm_medium=member_desktop&rcm=ACoAACgQ5uEB0pFEncIg-6eYUVfo2_ceRVBJwTw"
  },
  {
    title: "Achiever of the Month",
    issuer: "Techlogix",
    year: "2023",
    kind: "award",
    url: "https://www.linkedin.com/posts/komal-shehzadi_techlogix-techxian-risingstars-activity-6962703016214822913-Sv7G?utm_source=share&utm_medium=member_desktop"
  },
  {
    title: "Achiever of the Month",
    issuer: "Techlogix",
    year: "2022",
    kind: "award",
    url: "https://www.linkedin.com/posts/komal-shehzadi_coc-techlogix-almusnet-activity-6925913612477685760-taDW?utm_source=share&utm_medium=member_desktop"
  },
  {
    title: "Node.js, Express, MongoDB & More: The Complete Bootcamp",
    issuer: "Udemy",
    year: "2022",
    kind: "certification",
    url: "https://www.udemy.com/certificate/UC-c34d9ab6-8682-4746-9908-0013467298c0/"
  },
  {
    title: "Front-End Web UI Frameworks and Tools: Bootstrap 4",
    issuer: "Coursera",
    year: "2020",
    kind: "certification",
    url: "https://www.coursera.org/account/accomplishments/certificate/F5V63UECGA69"
  }
];

export const education = [
  {
    degree: "MS, Computer Science",
    school: "University of Engineering and Technology, Lahore",
    period: "2021 — 2023",
    logo: require("./assets/images/Uet-logo.png"),
    points: [
      "Research in network security; authored one systematic literature review and two papers.",
      "Dean's Roll of Honour in the 3rd and 4th semesters."
    ]
  },
  {
    degree: "BS, Computer Science",
    school: "University of Engineering and Technology, Lahore",
    period: "2016 — 2020",
    logo: require("./assets/images/Uet-logo.png"),
    points: [
      "Ranked in the top 10% of the programme.",
      "Dean's Roll of Honour in the 3rd through 8th semesters.",
      "Best Final Year Project award from COMSATS and UET."
    ]
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
