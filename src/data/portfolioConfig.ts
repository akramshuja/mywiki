import { WikiPortfolioConfig } from '../components/WikiPortfolio';

// Sample configuration for a corporate IT professional
export const sampleITConfig: WikiPortfolioConfig = {
  personalInfo: {
    name: "Akram Shuja",
    tagline: "Senior Software Engineer and Scrum Master",
    image: "/Profile.jpeg",
    [cite_start]birthPlace: "Patna, Bihar, India", // Inferred from St. Xavier's, Patna for HSC [cite: 69]
    education: [
      {
        institution: "BITS Pilani",
        degree: "M.Tech. in Artificial Intelligence and Machine Learning",
        year: "2026"
      },
      {
        [cite_start]institution: "Lovely Professional University", [cite: 54]
        [cite_start]degree: "Bachelor of Technology, Computer Science and Engineering", [cite: 59]
        [cite_start]year: "2014" [cite: 60]
      }
    ],
    occupations: [
      [cite_start]"Software Engineer", [cite: 42]
      [cite_start]"Principal Software Engineer", [cite: 23]
      [cite_start]"Programmer Analyst", [cite: 38]
      "Scrum Master" // New role information
    ],
    currentRole: "Senior Software Engineer", // New role information
    company: "OpenText", // New company information
    skills: [
      [cite_start]"Java", [cite: 12] [cite_start]"Spring Boot", [cite: 13] [cite_start]"Relational Databases(MySQL, Oracle)", [cite: 16, 18] [cite_start]"JPA", [cite: 17]
      [cite_start]"HTML", [cite: 34] [cite_start]"CSS", [cite: 35] [cite_start]"Javascript", [cite: 39] [cite_start]"React JS", [cite: 41]
      [cite_start]"Apache Wicket", [cite: 52] [cite_start]"Microservices", [cite: 53]
      [cite_start]"Maven", [cite: 62] [cite_start]"Bitbucket", [cite: 63] [cite_start]"Jira", [cite: 67] [cite_start]"Crucible", [cite: 68] [cite_start]"Confluence" [cite: 71]
    ],
    certifications: [
      // No certifications listed in the CV. Add if available.
    ],
    awards: [
      [cite_start]"JOSH Event - Best Musician and Singer, Virtusa (2017)", [cite: 75, 77, 79, 83, 86]
      [cite_start]"Codestorm - Runners-up, Association of Computer Engineers, LPU (2014)", [cite: 76, 78, 80, 84, 85, 87]
      [cite_start]"Codestorm - Runners-up, Association of Computer Engineers, LPU (2012)" [cite: 88, 89, 90, 91, 92, 93]
    ],
    yearsExperience: "11+", // Updated experience
    [cite_start]programmingLanguages: "Java, Javascript" // Inferred from skills [cite: 12, 39]
  },
  sections: [
    {
      id: "overview",
      title: "Professional Overview",
      [cite_start]content: "**Akram Shuja** is a *Senior Software Engineer* and *Scrum Master* at **OpenText** with over 11 years of experience in developing robust code for product development and customer solutions in Java and related technologies. [cite: 1] [cite_start]He has a proven track record of writing quality and optimized code and delivering on time. [cite: 2] [cite_start]Akram is an enthusiastic team player and a creative thinker. [cite: 3] [cite_start]He specializes in full-stack development. [cite: 5] In his current role at OpenText, he works on one of their publishing products used by leading news dailies."
    },
    {
      id: "career",
      title: "Career",
      content: "Akram's career spans several reputable technology companies, demonstrating a consistent upward trajectory and diverse experience.",
      subsections: [
        {
          id: "opentext",
          title: "OpenText (October 2023 - Present)",
          content: "As a *Senior Software Engineer* and *Scrum Master* at **OpenText**, Akram works on a publishing product used by leading news dailies like News UK and DG. He contributes to developing robust code for the product."
        },
        {
          id: "planon-softwares",
          title: "Planon Softwares (January 2018 - October 2023)", // Adjusted end date based on new role
          [cite_start]content: "At **Planon Softwares**, Akram served as a *Principal Software Engineer*, having previously held roles as *Senior Software Engineer* and *Software Engineer*. [cite: 25] [cite_start]His key contributions included: \n\n• **Team Leadership**: Leading a team of developers and testers to achieve sprint goals and guiding interns. [cite: 26][cite_start]\n\n• **Full Stack Development**: Adding new features to existing enterprise products and optimizing solutions. [cite: 27][cite_start]\n\n• **Development Practices**: Following test-driven development (Junit, Mockito) [cite: 28][cite_start], adhering strictly to Agile and Scrum methodologies (Sprint preparation, planning, review, retrospective meetings) [cite: 29][cite_start], and performing code reviews through Crucible for best coding practices [cite: 30][cite_start].\n\n• **CI/CD**: Following best build and deploy approaches using Jenkins for CI/CD. [cite: 31]"
        },
        {
          id: "virtusa",
          [cite_start]title: "Virtusa (April 2016 - January 2018)", [cite: 33]
          [cite_start]content: "As a *Programmer Analyst* at **Virtusa**, Akram worked on the Citi bank project for their TRIMS OCR and BE product. [cite: 43]"
        },
        {
          id: "cognizant",
          [cite_start]title: "Cognizant Technology Solutions (July 2014 - March 2016)", [cite: 45]
          [cite_start]content: "At **Cognizant Technology Solutions**, Akram worked with Ameriprise Financial, managing their content using Oracle UCM with customization in Java. [cite: 46, 47]"
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
          [cite_start]content: "Proficient in **Java** [cite: 12] [cite_start]and **Spring Boot**[cite: 13]. [cite_start]Experienced with **Microservices** [cite: 53] [cite_start]architecture and **JPA**[cite: 17]. [cite_start]Skilled in working with **Relational Databases** like MySQL and Oracle. [cite: 16, 18]"
        },
        {
          id: "frontend",
          title: "Frontend Development",
          [cite_start]content: "Experienced with **HTML** [cite: 34][cite_start], **CSS** [cite: 35][cite_start], **Javascript** [cite: 39][cite_start], and **React JS**[cite: 41]. [cite_start]Has also worked with Apache Wicket. [cite: 52]"
        },
        {
          id: "tools-methodologies",
          title: "Tools & Methodologies",
          [cite_start]content: "Adept at using **Maven** [cite: 62][cite_start], **Bitbucket** [cite: 63][cite_start], **Jira** [cite: 67][cite_start], **Crucible** [cite: 68][cite_start], and **Confluence**[cite: 71]. [cite_start]Strong understanding and application of **Agile and Scrum** methodologies [cite: 29][cite_start], **Test Driven Development** (Junit, Mockito) [cite: 28][cite_start], and **CI/CD** with Jenkins. [cite: 31]"
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
          [cite_start]title: "Planon Stateflow Diagrammer (June 2023 - Present)", [cite: 82]
          [cite_start]content: "Developed a solution to display and configure status transitions of Business Objects diagrammatically for end users. [cite: 81, 103, 104] [cite_start]The frontend was designed using React JS, with the core product in Java/J2EE. [cite: 105]"
        },
        {
          id: "development-improvement-program",
          [cite_start]title: "Development Improvement Program - Getting rid of GUIDs from Planon (January - August 2023)", [cite: 107, 109]
          [cite_start]content: "Developed an easier alternative to managing GUIDs for changing Planon entity names, which are rarely changed but previously required significant effort. [cite: 108, 110, 111, 112, 113]"
        },
        {
          id: "secured-documents-storage",
          [cite_start]title: "Improve the storage of Secured Documents in Planon (August 2022 - Present)", [cite: 114, 116]
          [cite_start]content: "Working on a strategy and proof-of-concept to optimize the storage and retrieval of secured documents, including batch processing of existing documents and migration to AWS S3 storage. [cite: 115, 117, 118, 119, 120]"
        },
        {
          id: "mailing-framework-api",
          [cite_start]title: "Mailing Framework API, Planon Product (April - August 2021)", [cite: 121, 123]
          [cite_start]content: "Developed an API over the Planon Framework to allow third-party solution developers to implement their own mailing interfaces, supporting various authentication schemes like OAuth, in response to growing security concerns and discontinuation of basic authentication. [cite: 122, 124, 125]"
        },
        {
          id: "soko",
          [cite_start]title: "SOKO (January 2020 - August 2022)", [cite: 126, 128]
          [cite_start]content: "Developed the frontend and RESTful APIs for the SOKO Android app, Storefront, and Admin for an e-commerce startup. [cite: 127, 129] [cite_start]The APIs were written using Spring Boot and Hibernate, the frontend in React JS, and the application used MySQL database and was deployed on Digital Ocean. [cite: 132, 133]"
        },
        {
          id: "light-and-dark-themes",
          [cite_start]title: "Light and Dark Themes, Planon Product (June 2019 - March 2020)", [cite: 157, 158]
          [cite_start]content: "Led a complete overhaul of the Planon UI, introducing Light and Dark Themes and later High Contrast Theme, utilizing Sass and Javascript. [cite: 159, 160]"
        },
        {
          id: "configuration-labelling",
          [cite_start]title: "Configuration Labelling, Planon Product (October 2018 - March 2019)", [cite: 161, 162, 163]
          [cite_start]content: "Developed an efficient way for administrators to work with and transfer configuration sets between Planon environments. [cite: 161, 164]"
        },
        {
          id: "akamai-cache-buster",
          [cite_start]title: "Akamai Cache Buster (January - March 2016)", [cite: 165, 167]
          [cite_start]content: "Developed a custom component in Core Java and Remote Intradoc Client to clear Akamai Server content cache more granularly when content is published or deleted in Oracle WebCenter Content. [cite: 166, 169, 170] [cite_start]It also provided the option to clear the entire website's cache. [cite: 171]"
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
          content: "Currently pursuing an **M.Tech. in Artificial Intelligence and Machine Learning** from **BITS Pilani** (2024-2026). [cite_start]He earned his **Bachelor of Technology in Computer Science and Engineering** from **Lovely Professional University** in 2014 [cite: 54, 59, 60][cite_start], graduating with an 8.63 CGPA[cite: 61]. [cite_start]He also completed his SSC in Science from NIOS with 71.8% [cite: 64, 65, 66] [cite_start]and HSC Matriculation from St. Xavier's, Patna with 86.2%. [cite: 69, 70, 72]"
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
          [cite_start]content: "• **Best Musician and Singer** at JOSH Event, Virtusa (2017) [cite: 75, 77, 79, 83, 86][cite_start]\n\n• **Runners-up** at Codestorm, Association of Computer Engineers, LPU (2014) [cite: 76, 78, 80, 84, 85, 87][cite_start]\n\n• **Runners-up** at Codestorm, Association of Computer Engineers, LPU (2012) [cite: 88, 89, 90, 91, 92, 93]"
        },
        {
          id: "interests",
          title: "Interests",
          [cite_start]content: "Akram's interests include: [cite: 94][cite_start]\n\n• Music - Playing guitar, geoshred, and singing [cite: 95, 96][cite_start]\n\n• Playing and watching cricket [cite: 97, 98][cite_start]\n\n• Visiting new places [cite: 99][cite_start]\n\n• Playing table tennis [cite: 100, 101][cite_start]\n\n• Binge watching [cite: 102]"
        },
        {
          id: "extracurricular",
          title: "Extra-Curricular Activities",
          [cite_start]content: "• Airtel Marathon, 10K Event (2018, 2019) [cite: 140, 141, 143, 145][cite_start]\n\n• Green-a-thon, Marathon for a cause (2012) [cite: 142, 144][cite_start]\n\n• Cricket Captain, Lovely Premier League (2011) [cite: 146, 148, 150, 151][cite_start]\n\n• Infosys Campus Connect (2010) [cite: 147, 149][cite_start]\n\n• English Elocution Contest (2002-2006) [cite: 152, 153, 154, 155]"
        }
      ]
    }
  ],
  tableOfContents: true
};

// Default export for easy customization
export const defaultConfig = sampleITConfig;
