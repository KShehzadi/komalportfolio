/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Komal Shehzadi",
  title: "Hi all, I'm Komal",
  subTitle: emoji(
    "🚀 Passionate Frontend Engineer — I craft pixel-perfect, accessible UIs with React and Angular. I love building fast, responsive single‑page apps using JavaScript & TypeScript, turning complex problems into delightful user experiences. 💡🔥"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1sP2i0K1kBzQ-iY3bdaYF22e_4hSMdgf2/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/kshehzadi",
  linkedin: "https://www.linkedin.com/in/komal-shehzadi/",
  gmail: "shehzadikomal303@gmail.com@gmail.com",
  facebook: "https://www.facebook.com/komal.shehzadee",
  instagram: "https://www.instagram.com/komal.shehzadii",
  twitter: "https://www.twitter.com/komalshehzadi_",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "PASSIONATE FRONT-END DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK AND FRAMEWORK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "Reactjs / React",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Angularjs",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "fas fa-laptop-code"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Engineering and Technology, Lahore.",
      logo: require("./assets/images/Uet-logo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "2021 -  2023",
      desc: "Participated in the research of network security and wrote 1 SLR and 2 papers.",
      descBullets: [
        "Awarded with Dean's Role of Honour in 3rd and 4th Semester."
      ]
    },
    {
      schoolName: "University of Engineering and Technology, Lahore.",
      logo: require("./assets/images/Uet-logo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "2016 - 2020",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: [
        "Awarded with Dean's Role of Honour in 3rd, 4th, 5th, 6th, 7th and 8th Semester",
        "Won best Final Year Project award from COMSTATS and UET."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "50%"
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Senior Software Engineer",
      company: "Techlogix",
      companylogo: require("./assets/images/Techlogix-Logo.png"),
      date: "March 2022 – Present",
      desc: "Experienced frontend engineer at Techlogix, specializing in crafting intuitive user interfaces and enhancing user experiences.",
      descBullets: [
        "Front-end development of track and trace application using Angular for Authentix.",
        "Front-end development in React for a semiconductor company, Yieldwerx.",
        "Front-end development experience in label designing web application of HP."
      ]
    },
    {
      role: "Software Engineer",
      company: "Techlogix",
      companylogo: require("./assets/images/Techlogix-Logo.png"),
      date: "October 2020 – March 2022",
      desc: "Worked on frontend and backend features and cloud integrations as part of the Techlogix product team.",
      descBullets: [
        "Front-end and back-end development of a cloud-based institution management system.",
        "Worked with the team on the design, development, and integration of a product campus on cloud.",
        "Experience with different versions of Angular frameworks and services in .NET Core."
      ]
    },
    {
      role: "Software Engineer",
      company: "Netsol",
      companylogo: require("./assets/images/Netsol-Logo.png"),
      date: "July 2020 – October 2020",
      desc: "",
      descBullets: [
        "During my time at Netsol, I got trained on their framework and tools.",
        "Worked on database schemas and queries for their system."
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "UET CS Department",
      companylogo: require("./assets/images/Uet-logo.png"),
      date: "May 2019 – April 2020",
      desc: "Front-end and back-end development of admission and online assessment portal for UET CS and IBM department."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Achiever of the Month",
      subtitle:
        "Awarded with achiever of the month and AI Hackathon winner award at Techlogix, Lahore.",
      image: require("./assets/images/Techlogix-Logo.png"),
      imageAlt: "techlogix logo",
      footerLink: [
        {
          name: "🌟 Achiever of the Month - 2025 🌟",
          url: "https://www.linkedin.com/posts/komal-shehzadi_grateful-and-humbled-to-be-recognized-as-activity-7425277142315405312-nRMl?utm_source=share&utm_medium=member_desktop&rcm=ACoAACgQ5uEB0pFEncIg-6eYUVfo2_ceRVBJwTw"
        },
        {
          name: "🌟 Ranked 3rd in AI Hackathon - 2024 🌟",
          url: "https://www.linkedin.com/posts/komal-shehzadi_ai-hackathon2024-teamwork-activity-7223387312632586240-8rjQ?utm_source=share&utm_medium=member_desktop&rcm=ACoAACgQ5uEB0pFEncIg-6eYUVfo2_ceRVBJwTw"
        },
        {
          name: "🌟 Achiever of the Month - 2023 🌟",
          url: "https://www.linkedin.com/posts/komal-shehzadi_techlogix-techxian-risingstars-activity-6962703016214822913-Sv7G?utm_source=share&utm_medium=member_desktop"
        },
        {
          name: "🌟 Achiever of the Month - 2022 🌟",
          url: "https://www.linkedin.com/posts/komal-shehzadi_coc-techlogix-almusnet-activity-6925913612477685760-taDW?utm_source=share&utm_medium=member_desktop"
        }
      ]
    },
    {
      title: "The Complete Bootcamp 2022",
      subtitle:
        "Completed Certification of The complete bootcamp 2022 from Udemy.",
      image: require("./assets/images/udemy.png"),
      imageAlt: "udemy logo",
      footerLink: [
        {
          name: "Node.JS, Express, MongoDB & More: The Complete Bootcamp 2022",
          url: "https://www.udemy.com/certificate/UC-c34d9ab6-8682-4746-9908-0013467298c0/"
        }
      ]
    },

    {
      title: "Front-End Web UI Frameworks and Tools: Bootstrap 4",
      subtitle:
        "Completed Certifcation from coursera for Front-End Web UI Frameworks and Tools using Bootstrap 4.",
      image: require("./assets/images/coursera.png"),
      imageAlt: "coursera logo",
      footerLink: [
        {
          name: "Front-End Web UI Frameworks and Tools: Bootstrap 4",
          url: "https://www.coursera.org/account/accomplishments/certificate/F5V63UECGA69"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write, explore and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/@komalshehzadi/my-experience-at-pycon-2024-insights-innovations-and-inspirations-6bab2f3f1cb6",
      title: "Pycon - 2024",
      description:
        "Attended Pycon 2024 event, that was arranged at LUMS. Many python enthusiasts joined for insights on trending and new tech stacks."
    },
    {
      url: "https://medium.com/@komalshehzadi/why-angular-is-the-best-framework-4fbec7f4aeb4",
      title: "Why Angular is The Best?",
      description:
        "A powerful front-end framework by Google for building dynamic web applications with robust features and seamless scalability."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: "shehzadikomal303@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "kshehzadi_", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
