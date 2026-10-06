/* =========================================================================
   content.js — the single source of truth for the portfolio.
   -------------------------------------------------------------------------
   Everything the page renders comes from here, so this is the only file you
   need to edit to update the site. Two sections pull live data instead:
     • Writing      → public/blogs.json   (Medium feed, refreshed by fetch.js)
     • Open source  → public/profile.json (GitHub pinned repos, via fetch.js)

   All titles, dates, metrics and groupings below match the résumé, whose
   source is resume/Komal_Shehzadi_Resume_2026.html (printed to
   public/Komal_Shehzadi_Resume_2026.pdf by `npm run resume`). If one
   changes, change the other to match.

   Decisions confirmed by Komal — do not "correct" these:
     • The Principal promotion was 1 December 2025, so the Senior span ends
       there.
     • The UBP Investment Banking engagement (Sep 2026 — present) sits under
       the Principal role alongside SECP; do not give it a separate title.
     • The career starts in August 2020 with two months at NetSol before
       Techlogix (October 2020).
     • Years of experience are not written anywhere — they are counted from
       CAREER_START when the page loads, so they roll over on each anniversary.
     • Project cards carry no date ranges; the ones derived from the résumé's
       role spans were inaccurate. Dates live on the career timeline only.
     • The GenAI design-to-code generator appears in the AI section rather than
       the work grid, so it is described once instead of twice.

   The older template config (src/portfolio.js) is no longer imported.
   ========================================================================= */

/* First role, at NetSol, began August 2020; Techlogix followed in October
   2020. The month is zero-based. Every "N+ years"
   on the page comes from here, worked out in the visitor's browser, so the
   figure rolls over on the anniversary with no edit and no rebuild. */
const CAREER_START = new Date(2020, 7, 1);

function wholeYearsSince(start, now = new Date()) {
  const years = now.getFullYear() - start.getFullYear();
  return now.getMonth() < start.getMonth() ? years - 1 : years;
}

export const experience = `${wholeYearsSince(CAREER_START)}+`;

export const profile = {
  name: "Komal Shehzadi",
  role: "Principal Software Engineer",
  company: "Techlogix",
  location: "Lahore, Pakistan",
  summary: `Principal engineer with ${experience} years shipping data-intensive products in domains where being wrong is expensive — investment banking, securities regulation, oil & gas, semiconductor yield, enterprise supply chain. I own frontend architecture end to end: the component systems teams build on, the rendering and state work that keeps million-point interfaces fast, and the observability that explains what actually happened in production. Lately that ownership extends to how the team builds — agentic tooling, purpose-built AI subagents and MCP-connected workflows.`,
  titles: [
    "Principal Software Engineer",
    "Frontend Architect",
    "Performance Engineer",
    "Observability Practitioner",
    "AI-Enabled Engineer"
  ],
  /* The résumé's "Open to" line, rendered as chips in the contact card. */
  openTo: [
    "Principal / Staff Engineer",
    "Frontend Architect",
    "Lead Frontend or Full-Stack",
    "AI-Enabled Engineering"
  ],
  photo: require("./assets/images/komal.JPG"),
  // Served from public/. The phone number has been redacted out of this copy;
  // see README "Résumé" before replacing the file. The 2026 revision is
  // what the Résumé button serves; the older PDF is still in public/ unchanged.
  resumeUrl: "/Komal_Shehzadi_Resume_2026.pdf",
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

/* Bento stat tiles under the hero — the current engagement, tenure and the
   résumé's four headline figures. A `figure` that starts with a digit is
   animated by <CountUp>; any other figure renders as written. app.scss lays
   these out three per row (two below 1000px), so keep this at six. */
export const stats = [
  {
    figure: "UBP",
    label: "investment-banking engagement",
    detail: "Full-stack delivery & planning, since Sep 2026"
  },
  {
    figure: experience,
    label: "years shipping production software",
    detail: "Since Aug 2020 · Techlogix from Oct 2020"
  },
  {
    figure: "70%",
    label: "faster rendering",
    detail: "Million-pixel semiconductor datasets · WebGL + D3.js"
  },
  {
    figure: "100K+",
    label: "product units traceable",
    detail: "Live supply-chain UI, in real time"
  },
  {
    figure: "50%",
    label: "cut in report generation",
    detail: "Oil & gas digital program"
  },
  {
    figure: "4×",
    label: "Achiever of the Month",
    detail: "Plus an AI Hackathon podium finish"
  }
];

/* Client and product work, newest first. Enterprise products with no public
   marketing site, so they are described rather than linked. Keep this list at
   nine entries: the first (the current engagement) spans the full row and
   Work.js pairs the column spans of the other eight, so no row is left with an
   orphan. */
export const work = [
  {
    id: "ubp",
    client: "UBP",
    title: "Investment banking platform",
    summary:
      "Full-stack engineering for UBP's investment-banking business — features built end to end across the interface, services and data, in a domain where accuracy is non-negotiable. Also part of planning the work: scoping, estimation and sequencing alongside product and engineering leads.",
    contribution: "Full-stack delivery and planning.",
    stack: ["Full-stack", "Investment banking", "Delivery planning"],
    accent: "pink"
  },
  {
    id: "secp",
    client: "SECP",
    title: "LEAP Portal",
    summary:
      "Frontend architecture for a national securities-regulator portal, standardised around a dynamic form engine and a shared component library — so new statutory workflows ship as configuration rather than copied screens. Lazy loading and restructured state management keep the heaviest regulatory flows responsive.",
    contribution: "Owned the frontend architecture.",
    stack: ["Angular", "TypeScript", "Design system", "Accessibility"],
    accent: "emerald"
  },
  {
    id: "secp-observability",
    client: "SECP",
    title: "Production observability & root cause",
    summary:
      "Instrumented the portal with Grafana Faro — tiered HTTP telemetry, named business events, and LogQL queries over Loki that reconstruct one applicant's journey. Turns “it failed for a single user” into a reproducible timeline; it is how recurring API failures were traced to fail-open submit gates and mis-sequenced role APIs.",
    contribution: "Designed the telemetry and led the RCA.",
    stack: ["Grafana Faro", "Loki / LogQL", "Telemetry tiering"],
    accent: "amber"
  },
  {
    id: "pixel-viz",
    client: "Yieldwerx",
    title: "Pixel data visualization system",
    summary:
      "A high-performance visualization engine built from scratch to interactively render million-pixel semiconductor datasets — ~70% faster render times, making in-browser analysis that was previously impractical routine.",
    contribution: "Architected and built end to end.",
    stack: ["React", "D3.js", "WebGL"],
    accent: "cyan"
  },
  {
    id: "authentix",
    client: "Authentix",
    title: "Track & Trace (Oil & Gas)",
    summary:
      "Frontend for a supply-chain traceability platform carrying 100,000+ product units in real time, cutting manual product verification by ~60%. Rebuilt the data-dense operational reporting for the same oil & gas digital program, halving report generation time.",
    contribution: "Led the frontend build.",
    stack: ["Angular", "TypeScript", "Reporting"],
    accent: "indigo"
  },
  {
    id: "hp-labels",
    client: "HP",
    title: "Label Designer",
    summary:
      "A canvas-based label designer for precise label creation, adopted quickly across cross-functional teams — cutting label formatting errors by ~30% and eliminating costly manual rework.",
    contribution: "Built the application.",
    stack: ["Angular", "Konva.js", "Canvas rendering"],
    accent: "violet"
  },
  {
    id: "yieldwerx-process",
    client: "Yieldwerx",
    title: "Process improvement",
    summary:
      "Deep-dive analysis of 11 end-to-end workflows, removing bottlenecks for a ~25% cycle-time reduction, plus a library of reusable templates that standardized operations going forward.",
    contribution: "Analysis and optimization.",
    stack: ["Process design", "Templates"],
    accent: "amber"
  },
  {
    id: "scheduling-app",
    client: "Techlogix",
    title: "In-house scheduling app",
    summary:
      "An internal team scheduling product taken from concept to production, replacing fragmented manual coordination with one source of truth and cutting scheduling conflicts by ~40%.",
    contribution: "Designed and shipped.",
    stack: ["React", "Firestore", "Redux Thunk"],
    accent: "cyan"
  },
  {
    id: "campus-cloud",
    client: "Techlogix",
    title: "Campus on Cloud",
    summary:
      "Owned key modules of a full-stack campus management platform spanning student lifecycle, financial operations and academic grading, and automated manual administrative reporting to improve data accuracy for academic and finance teams.",
    contribution: "Full-stack developer.",
    stack: ["AngularJS", "Angular", "Kendo UI", ".NET Core"],
    accent: "indigo"
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
    clients: ["UBP Investment Banking", "SECP LEAP Portal"],
    summary:
      "Now on UBP's investment-banking engagement, delivering across the full stack and shaping how the work is planned. Before that, owned frontend architecture on a national securities-regulator portal — the component systems, the production observability and the team's AI-assisted delivery workflow.",
    points: [
      "On UBP's investment-banking engagement (Sep 2026 — present), deliver features end to end across frontend, backend services and data, in a domain where accuracy and reliability are non-negotiable.",
      "Contribute to delivery planning — scoping and breaking down work, estimating effort and sequencing dependencies alongside product and engineering leads.",
      "On SECP's LEAP Portal (Dec 2025 — Sep 2026), owned frontend architecture for a high-stakes government regulatory platform, standardising it around a dynamic form engine and shared component library so new statutory workflows shipped as configuration rather than copied screens.",
      "Instrumented the portal with Grafana Faro — tiered HTTP telemetry, named business events and LogQL queries over Loki that reconstruct one applicant's journey, turning “it failed for a single user” into a reproducible timeline.",
      "Led production root-cause analysis across the frontend/backend boundary: traced recurring API failures to fail-open submit gates and mis-sequenced role APIs, then shipped verified fixes through a dual-branch staging and hotfix release process.",
      "Built the team's AI-assisted delivery workflow — purpose-built subagents for observability instrumentation and defect-to-PR automation, wired into Jira and Bitbucket through MCP tooling.",
      "Set engineering standards for conventions, review depth and documentation while mentoring junior engineers and acting as the technical bridge across product, backend and QA.",
      "Improved responsiveness across complex regulatory workflows through lazy loading and state-management restructuring."
    ]
  },
  {
    role: "Senior Software Engineer",
    company: "Techlogix",
    logo: require("./assets/images/Techlogix-Logo.png"),
    period: "Mar 2023 — Dec 2025",
    clients: ["Yieldwerx", "Authentix", "HP"],
    summary:
      "Visualization, traceability and analytics products — high-performance rendering, data-dense reporting, and the company's first GenAI delivery tooling.",
    points: [
      "Architected and built a React + D3.js + WebGL visualization engine from scratch for million-pixel semiconductor datasets, achieving ~70% faster rendering and making previously impractical in-browser analysis routine.",
      "Engineered the frontend for Authentix Track & Trace, supporting real-time traceability across 100,000+ product units and cutting manual product-verification time by ~60%.",
      "Rebuilt data-dense operational reporting for an oil & gas digital program, reducing report-generation time by ~50% and improving live operational visibility.",
      "Analysed 11 end-to-end Yieldwerx workflows, removed process bottlenecks for a ~25% cycle-time reduction, and left reusable templates behind for standardised operations.",
      "Shipped a React + Firestore + Redux Thunk scheduling product from concept to production, replacing fragmented coordination with one source of truth and cutting scheduling conflicts by ~40%.",
      "Built an AI-powered design-to-code generator on GenAI APIs, compressing multi-day HTML/CSS prototyping cycles into minutes.",
      "Delivered an Angular + Konva.js canvas label designer for HP, reducing label-formatting errors by ~30% and eliminating manual rework."
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
      "Developed and owned key modules of a full-stack campus management platform spanning student lifecycle, finance and academic grading, on AngularJS/Angular, Kendo UI and .NET Core.",
      "Automated manual administrative reporting through robust CRUD services and streamlined UX flows, improving data accuracy and removing repetitive data entry."
    ]
  },
  {
    role: "Software Engineer",
    company: "NetSol Technologies",
    logo: require("./assets/images/Netsol-Logo.png"),
    period: "Aug 2020 — Sep 2020",
    summary:
      "First role after graduating — a short stint before joining Techlogix.",
    points: [
      "Completed training on the company's in-house application framework and development toolchain.",
      "Contributed database schema design and query development for its core platform."
    ]
  }
];

/* The résumé's AI-Enabled Engineering section: what the AI work actually is,
   rather than a list of model names. `kind` renders as the card's eyebrow, and
   these reuse the work-card styles so the two grids read as one system. Newest
   practice first. AI.js lays them out two per row; with an odd count the
   first card takes a full row so the grid never ends on an orphan. */
export const aiWork = [
  {
    id: "fullstack",
    kind: "Delivery",
    title: "Full-stack delivery",
    summary:
      "On UBP's investment-banking engagement, building features end to end across the interface, services and data layer — with every change reviewed and verified before it ships, in a domain where accuracy is non-negotiable.",
    stack: ["Full-stack", "Investment banking", "Code review"],
    accent: "amber"
  },
  {
    id: "ai-planning",
    kind: "Planning",
    title: "AI-assisted planning",
    summary:
      "Use AI to turn incoming requirements into scoped, estimable work — breaking features into tasks, drafting acceptance criteria and surfacing dependencies and risks early — so planning starts from a solid draft rather than a blank page.",
    stack: ["Scoping", "Estimation", "Acceptance criteria"],
    accent: "indigo"
  },
  {
    id: "subagents",
    kind: "Agentic tooling",
    title: "Purpose-built engineering subagents",
    summary:
      "Authored domain-specific AI agents that own real tasks — adding observability instrumentation correctly, and carrying a defect from root cause through to a reviewed pull request — with team conventions encoded as their instructions.",
    stack: ["Custom subagents", "Agentic workflows"],
    accent: "emerald"
  },
  {
    id: "mcp-loop",
    kind: "Tool integration",
    title: "MCP-connected delivery loop",
    summary:
      "Connected issue tracking and source control through MCP so triage, root-cause write-ups, branch discipline and PR drafting happen in one continuous loop instead of four context switches.",
    stack: ["MCP", "Jira", "Bitbucket"],
    accent: "cyan"
  },
  {
    id: "ai-standards",
    kind: "Practice",
    title: "Standards for AI-assisted work",
    summary:
      "Define where generated code is trusted and where it is not: build verification before every PR, confirmed root causes over plausible-sounding explanations, and review depth that scales with blast radius. Carried from regulatory software into investment banking, where a wrong answer costs just as much.",
    stack: ["Prompt design", "AI-assisted review"],
    accent: "violet"
  },
  {
    id: "genai-generator",
    kind: "Product",
    title: "GenAI design-to-code generator",
    summary:
      "Built an AI-powered HTML/CSS generator on GenAI APIs that turned multi-day design-to-code prototyping into a minutes-long cycle — third place across the engineering org at the Techlogix AI Hackathon.",
    stack: ["GenAI APIs", "HTML", "CSS"],
    accent: "pink"
  }
];

/* Grouped exactly as the résumé's skills columns. Entries without `img`
   appear in the grouped cards but are skipped by the 3D balls, which need a
   texture. */
export const stack = [
  {
    group: "AI & agentic engineering",
    items: [
      {name: "LLM / GenAI APIs", icon: "fas fa-robot"},
      {name: "Agentic workflows", icon: "fas fa-project-diagram"},
      {name: "MCP integrations", icon: "fas fa-plug"},
      {name: "Custom subagents", icon: "fas fa-user-astronaut"},
      {name: "Prompt design", icon: "fas fa-comment-dots"},
      {name: "AI-assisted review", icon: "fas fa-search-plus"},
      {name: "AI-assisted planning", icon: "fas fa-tasks"}
    ]
  },
  {
    group: "Core languages",
    items: [
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
      {name: "C#", icon: "fas fa-hashtag"},
      {
        name: "SQL",
        icon: "fas fa-database",
        img: require("./assets/tech/sql.png")
      },
      {name: "HTML5", icon: "fab fa-html5"},
      {name: "CSS3", icon: "fab fa-css3-alt"}
    ]
  },
  {
    group: "Frontend",
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
      {name: "RxJS", icon: "fas fa-stream"},
      {name: "Redux / Thunk", icon: "fas fa-atom"},
      {name: "Design systems", icon: "fas fa-cubes"},
      {
        name: "Tailwind",
        icon: "fas fa-wind",
        img: require("./assets/tech/tailwind.png")
      },
      {
        name: "Material UI",
        icon: "fas fa-layer-group",
        img: require("./assets/tech/materialdesign.png")
      },
      {name: "shadcn/ui", icon: "fas fa-cube"}
    ]
  },
  {
    group: "Visualization & performance",
    items: [
      {name: "WebGL", icon: "fas fa-cubes"},
      {
        name: "D3.js",
        icon: "fas fa-chart-line",
        img: require("./assets/tech/d3.png")
      },
      {name: "Konva.js", icon: "fas fa-draw-polygon"},
      {name: "Canvas rendering", icon: "fas fa-paint-brush"},
      {name: "Lazy loading", icon: "fas fa-hourglass-half"},
      {name: "State optimization", icon: "fas fa-sliders-h"}
    ]
  },
  {
    group: "Observability",
    items: [
      {name: "Grafana Faro", icon: "fas fa-chart-area"},
      {name: "Loki / LogQL", icon: "fas fa-scroll"},
      {name: "Telemetry tiering", icon: "fas fa-layer-group"},
      {name: "Business events", icon: "fas fa-bullseye"}
    ]
  },
  {
    group: "Backend, data & platform",
    items: [
      {
        name: ".NET Core",
        icon: "fas fa-server",
        img: require("./assets/tech/dotnet.png")
      },
      {name: "REST APIs", icon: "fas fa-plug"},
      {name: "SQL Server", icon: "fas fa-database"},
      {
        name: "Firestore",
        icon: "fas fa-fire",
        img: require("./assets/tech/firebase.png")
      },
      {name: "ClickHouse", icon: "fas fa-database"},
      {name: "RabbitMQ", icon: "fas fa-exchange-alt"},
      {name: "Docker", icon: "fab fa-docker"},
      {name: "Kubernetes", icon: "fas fa-dharmachakra"},
      {name: "AWS / Azure / GCP", icon: "fab fa-aws"},
      {name: "Jenkins", icon: "fab fa-jenkins"},
      {name: "Bitbucket Pipelines", icon: "fab fa-bitbucket"}
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

/* Flat list for the 3D tech balls — only the entries that have a texture.
   Textures under 10kB are inlined into the main bundle by CRA, so an `img` is
   only worth adding for a logo that earns the bytes. */
export const techIcons = stack
  .reduce((all, group) => all.concat(group.items), [])
  .filter(item => item.img);

export const nav = [
  {id: "work", label: "Work"},
  {id: "career", label: "Career"},
  {id: "ai", label: "AI"},
  {id: "stack", label: "Stack"},
  {id: "awards", label: "Awards"},
  {id: "writing", label: "Writing"},
  {id: "contact", label: "Contact"}
];
