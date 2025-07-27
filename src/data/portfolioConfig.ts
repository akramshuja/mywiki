import { WikiPortfolioConfig } from '../components/WikiPortfolio';

export const sampleITConfig: WikiPortfolioConfig = {
  personalInfo: {
    name: "Akram Shuja",
    tagline: "R&D Engineer at OpenText",
    image: "https://akramshuja.github.io/mywiki/Profile.jpeg",
    birthPlace: "Hyderabad, Telangana, India",
    otherNames: ["Samar"],
    education: [
      {
        institution: "BITS Pilani",
        degree: "M.Tech. in Artificial Intelligence and Machine Learning",
        year: "2026"
      },
      {
        institution: "Lovely Professional University",
        degree: "Bachelor of Technology, Computer Science and Engineering",
        year: "2014"
      }
    ],
    occupations: [
      "Software Development Engineer",
      "Scrum Master"
    ],
    currentRole: "Senior Software Engineer",
    company: "OpenText",
    skills: [
      "Java", "Spring Boot", "Relational Databases(MySQL, Oracle)", "JPA",
      "HTML", "CSS", "Javascript", "React JS", 
      "Apache Wicket", "Microservices",
      "Maven", "Bitbucket", "Jira", "Crucible", "Confluence"
    ],
    certifications: [],
    awards: [
      "JOSH Event - Best Musician and Singer, Virtusa (2017)",
      "Codestorm - Runners-up, Association of Computer Engineers, LPU (2014)",
      "Codestorm - Runners-up, Association of Computer Engineers, LPU (2012)"
    ],
    yearsExperience: "11+",
    programmingLanguages: "Java, Javascript"
  },
  sections: [
    {
      id: "overview",
      title: "Professional Overview",
      content: "**Akram Shuja** is a *Senior Software Engineer* and *Scrum Master* at **OpenText** with over 11 years of experience in developing robust code for product development and customer solutions in Java and related technologies. He has a proven track record of writing quality and optimized code and delivering on time. Akram is an enthusiastic team player and a creative thinker. He specializes in full-stack development. In his current role at OpenText, he works on one of their publishing products used by leading news dailies. \n\nHe is currently pursuing his M.Tech. in Artifical Intelligence and Machine Learning from **BITS, Pilani**."
    },
    {
      id: "career",
      title: "Career",
      content: "Akram's career spans several reputable technology companies, demonstrating a consistent upward trajectory and diverse experience.",
      subsections: [
        {
          id: "opentext",
          title: "OpenText (October 2023 - Present)",
          content: "As a *Senior Software Engineer* and *Scrum Master* at **OpenText**, Akram works on a publishing product used by leading news dailies like News UK, News Australia and DG. He contributes to developing robust code for the product."
        },
        {
          id: "planon-softwares",
          title: "Planon Softwares (January 2018 - October 2023)",
          content: "At **Planon Softwares**, Akram served as a *Principal Software Engineer*, having previously held roles as *Senior Software Engineer* and *Software Engineer*. His key contributions included: \n\n• **Team Leadership**: Leading a team of developers and testers to achieve sprint goals and guiding interns.\n\n• **Full Stack Development**: Adding new features to existing enterprise products and optimizing solutions.\n\n• **Development Practices**: Following test-driven development (Junit, Mockito), adhering strictly to Agile and Scrum methodologies (Sprint preparation, planning, review, retrospective meetings), and performing code reviews through Crucible for best coding practices.\n\n• **CI/CD**: Following best build and deploy approaches using Jenkins for CI/CD."
        },
        {
          id: "virtusa",
          title: "Virtusa (April 2016 - January 2018)",
          content: "As a *Software Engineer* at **Virtusa**, Akram worked on the Citi bank project for their TRIMS OCR and BE product."
        },
        {
          id: "cognizant",
          title: "Cognizant Technology Solutions (July 2014 - March 2016)",
          content: "At **Cognizant Technology Solutions**, Akram worked with Ameriprise Financial, managing their content using Oracle UCM with customization in Java."
        }
      ]
    },
    {
      id: "technical-expertise",
      title: "Technical Expertise",
      content: "Akram's technical expertise spans across various aspects of software development:",
      subsections: [
        {
          id: "backend",
          title: "Backend Development",
          content: "Proficient in **Java** and **Spring Boot**. Experienced with **Microservices** architecture and **JPA**. Skilled in working with **Relational Databases** like MySQL, Oracle and Postgres."
        },
        {
          id: "frontend",
          title: "Frontend Development",
          content: "Experienced with **HTML**, **CSS**, **Javascript**, and **React JS**. Has also worked with Apache Wicket."
        },
        {
          id: "tools-methodologies",
          title: "Tools & Methodologies",
          content: "Adept at using **Maven**, **Bitbucket**, **Jira**, **Crucible**, and **Confluence**. Strong understanding and application of **Agile and Scrum** methodologies, **Test Driven Development** (Junit, Mockito), and **CI/CD** with Jenkins."
        }
      ]
    },
    {
      id: "projects",
      title: "Notable Projects",
      content: "Akram has contributed to a variety of impactful projects throughout his career:",
      subsections: [
        {
          id: "planon-stateflow-diagrammer",
          title: "Planon Stateflow Diagrammer (June 2023 - Present)",
          content: "Developed a solution to display and configure status transitions of Business Objects diagrammatically for end users."
        },
        {
          id: "development-improvement-program",
          title: "Development Improvement Program - Getting rid of GUIDs from Planon (January - August 2023)",
          content: "Developed an easier alternative to managing GUIDs for changing Planon entity names, which are rarely changed but previously required significant effort."
        },
        {
          id: "secured-documents-storage",
          title: "Improve the storage of Secured Documents in Planon (August 2022 - Present)",
          content: "Working on a strategy and proof-of-concept to optimize the storage and retrieval of secured documents, including batch processing of existing documents and migration to AWS S3 storage."
        },
        {
          id: "mailing-framework-api",
          title: "Mailing Framework API, Planon Product (April - August 2021)",
          content: "Developed an API over the Planon Framework to allow third-party solution developers to implement their own mailing interfaces, supporting various authentication schemes like OAuth, in response to growing security concerns and discontinuation of basic authentication."
        },
        {
          id: "soko",
          title: "SOKO (January 2020 - August 2022)",
          content: "Developed the frontend and RESTful APIs for the SOKO Android app, Storefront, and Admin for an e-commerce startup. The APIs were written using Spring Boot and Hibernate, the frontend in React JS, and the application used MySQL database and was deployed on Digital Ocean."
        },
        {
          id: "light-and-dark-themes",
          title: "Light and Dark Themes, Planon Product (June 2019 - March 2020)",
          content: "Led a complete overhaul of the Planon UI, introducing Light and Dark Themes and later High Contrast Theme, utilizing Sass and Javascript."
        },
        {
          id: "configuration-labelling",
          title: "Configuration Labelling, Planon Product (October 2018 - March 2019)",
          content: "Developed an efficient way for administrators to work with and transfer configuration sets between Planon environments."
        },
        {
          id: "akamai-cache-buster",
          title: "Akamai Cache Buster (January - March 2016)",
          content: "Developed a custom component in Core Java and Remote Intradoc Client to clear Akamai Server content cache more granularly when content is published or deleted in Oracle WebCenter Content. It also provided the option to clear the entire website's cache."
        }
      ]
    },
    {
      id: "education-training",
      title: "Education and Professional Development",
      content: "Akram has a strong academic background and is committed to continuous learning.",
      subsections: [
        {
          id: "formal-education",
          title: "Formal Education",
          content: "Currently pursuing an **M.Tech. in Artificial Intelligence and Machine Learning** from **BITS Pilani** (2024-2026). He earned his **Bachelor of Technology in Computer Science and Engineering** from **Lovely Professional University** in 2014, graduating with an 8.63 CGPA. He also completed his SSC in Science with 71.8% and HSC Matriculation from St. Xavier's, Patna with 86.2%."
        }
      ]
    },
    {
      id: "awards-interests",
      title: "Awards and Interests",
      content: "Akram has received recognition for his talents and engages in various activities outside of work.",
      subsections: [
        {
          id: "awards",
          title: "Awards",
          content: "• **Best Musician and Singer** at JOSH Event, Virtusa (2017)\n\n• **Runners-up** at Codestorm, Association of Computer Engineers, LPU (2014)\n\n• **Runners-up** at Codestorm, Association of Computer Engineers, LPU (2012)"
        },
        {
          id: "interests",
          title: "Interests",
          content: "Akram's interests include **Music**, **Cricket**, **Table Tennis**, **Films** and **Traveling**. His interest in music ranges from semi classical music like ghazals and sufi to progressive rock."
        },
        {
          id: "extracurricular",
          title: "Extra-Curricular Activities",
          content: "• Airtel Marathon, 10K Event (2018, 2019)\n\n• Green-a-thon, Marathon for a cause (2012)\n\n• Cricket Captain, Lovely Premier League (2011)\n\n• Infosys Campus Connect (2010)\n\n• English Elocution Contest (2002-2006)"
        }
      ]
    }
  ],
  tableOfContents: true
};

// Default export for easy customization
export const defaultConfig = sampleITConfig;
