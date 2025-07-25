import { WikiPortfolioConfig } from '../components/WikiPortfolio';

// Sample configuration for a corporate IT professional
export const sampleITConfig: WikiPortfolioConfig = {
  personalInfo: {
    name: "Alexandra Chen",
    tagline: "Senior Software Engineer and Technical Lead",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b47b?w=400&h=400&fit=crop&crop=face",
    birthPlace: "San Francisco, California, United States",
    otherNames: ["Alex Chen", "A. Chen"],
    education: [
      {
        institution: "Stanford University",
        degree: "Master of Science in Computer Science",
        year: "2018"
      },
      {
        institution: "University of California, Berkeley",
        degree: "Bachelor of Science in Computer Engineering",
        year: "2016"
      }
    ],
    occupations: [
      "Software Engineer",
      "Technical Lead",
      "System Architect"
    ],
    currentRole: "Senior Software Engineer",
    company: "TechCorp Industries",
    skills: [
      "JavaScript", "TypeScript", "React", "Node.js", "Python", 
      "AWS", "Docker", "Kubernetes", "GraphQL", "PostgreSQL"
    ],
    certifications: [
      "AWS Certified Solutions Architect",
      "Certified Kubernetes Administrator (CKA)",
      "Google Cloud Professional Developer"
    ],
    awards: [
      "Employee of the Year 2023",
      "Innovation Award 2022",
      "Best Technical Presentation 2021"
    ],
    yearsExperience: "7+",
    programmingLanguages: "JavaScript, TypeScript, Python, Java, Go"
  },
  sections: [
    {
      id: "overview",
      title: "Professional Overview",
      content: "**Alexandra Chen** is a *Senior Software Engineer* and *Technical Lead* at **TechCorp Industries** with over 7 years of experience in full-stack development and system architecture. She specializes in building scalable web applications and microservices using modern technologies including React, Node.js, and cloud platforms.\n\nChen is known for her expertise in **cloud architecture** and **DevOps practices**, having led multiple digital transformation initiatives that resulted in 40% improved system performance and 60% reduction in deployment time. She is also an active contributor to open-source projects and regularly speaks at tech conferences."
    },
    {
      id: "career",
      title: "Career",
      content: "Chen began her career as a Software Engineer at StartupXYZ in 2018, where she quickly distinguished herself by developing a real-time analytics platform that handled over 1 million daily active users.",
      subsections: [
        {
          id: "techcorp",
          title: "TechCorp Industries (2020-present)",
          content: "At **TechCorp Industries**, Chen was promoted to *Senior Software Engineer* in 2021 and later became a *Technical Lead* in 2022. Her key achievements include:\n\n• **Microservices Migration**: Led the migration of a monolithic application to microservices architecture, resulting in 50% improved system scalability\n\n• **Cloud Infrastructure**: Designed and implemented cloud-native solutions on AWS, reducing infrastructure costs by 35%\n\n• **Team Leadership**: Mentored 8 junior developers and established coding standards that improved code quality metrics by 45%\n\n• **Performance Optimization**: Optimized database queries and implemented caching strategies, achieving 3x faster response times"
        },
        {
          id: "startupxyz",
          title: "StartupXYZ (2018-2020)",
          content: "As a *Software Engineer* at StartupXYZ, Chen worked on developing the company's core analytics platform. She was responsible for:\n\n• Building real-time data processing pipelines using Apache Kafka and Redis\n\n• Developing RESTful APIs and GraphQL endpoints serving millions of requests daily\n\n• Implementing automated testing frameworks that increased code coverage to 95%\n\n• Collaborating with product teams to deliver features that increased user engagement by 25%"
        }
      ]
    },
    {
      id: "technical-expertise",
      title: "Technical Expertise",
      content: "Chen's technical expertise spans multiple domains of software engineering:",
      subsections: [
        {
          id: "frontend",
          title: "Frontend Development",
          content: "Expert in **React**, **TypeScript**, and modern frontend frameworks. Proficient in state management with Redux and Context API, testing with Jest and React Testing Library, and build tools including Webpack and Vite."
        },
        {
          id: "backend",
          title: "Backend Development",
          content: "Extensive experience with **Node.js**, **Express.js**, and **NestJS**. Skilled in designing RESTful APIs, GraphQL schemas, and microservices architecture. Proficient in database design with PostgreSQL, MongoDB, and Redis."
        },
        {
          id: "cloud-devops",
          title: "Cloud & DevOps",
          content: "**AWS Certified Solutions Architect** with hands-on experience in EC2, Lambda, RDS, and S3. Expert in containerization with **Docker** and orchestration with **Kubernetes**. Experienced in CI/CD pipeline design using GitHub Actions and Jenkins."
        }
      ]
    },
    {
      id: "achievements",
      title: "Notable Achievements",
      content: "Throughout her career, Chen has received recognition for her technical contributions and leadership:",
      subsections: [
        {
          id: "awards-recognition",
          title: "Awards and Recognition",
          content: "• **Employee of the Year 2023** - Recognized for exceptional technical leadership and innovation\n\n• **Innovation Award 2022** - For developing an AI-powered code review system that reduced review time by 60%\n\n• **Best Technical Presentation 2021** - At the annual TechCorp Engineering Summit\n\n• **Open Source Contributor** - Maintained React component library with 10k+ GitHub stars"
        },
        {
          id: "publications",
          title: "Publications and Speaking",
          content: "• **\"Scaling React Applications: A Practical Guide\"** - Published in *TechCrunch* (2023)\n\n• **\"Microservices at Scale\"** - Keynote speaker at ReactConf 2022\n\n• **\"The Future of Frontend Development\"** - Panel discussion at JSConf 2021\n\n• Regular contributor to the company engineering blog with articles on system design and best practices"
        }
      ]
    },
    {
      id: "education-training",
      title: "Education and Professional Development",
      content: "Chen maintains a strong commitment to continuous learning and professional development:",
      subsections: [
        {
          id: "formal-education",
          title: "Formal Education",
          content: "Chen completed her **Master of Science in Computer Science** at *Stanford University* in 2018, where she specialized in distributed systems and machine learning. Her thesis, \"Optimizing Distributed Cache Systems for Real-time Applications,\" was published in the ACM Digital Library.\n\nShe earned her **Bachelor of Science in Computer Engineering** from the *University of California, Berkeley* in 2016, graduating summa cum laude with a 3.9 GPA."
        },
        {
          id: "certifications-training",
          title: "Professional Certifications",
          content: "• **AWS Certified Solutions Architect** (2022-2025)\n\n• **Certified Kubernetes Administrator (CKA)** (2021-2024)\n\n• **Google Cloud Professional Developer** (2020-2023)\n\n• **Scrum Master Certification** (2019)\n\nChen also completed advanced training programs in system design, leadership, and technical architecture through her company's professional development initiatives."
        }
      ]
    }
  ],
  tableOfContents: true
};

// Sample configuration for an HR professional
export const sampleHRConfig: WikiPortfolioConfig = {
  personalInfo: {
    name: "Marcus Johnson",
    tagline: "Strategic HR Leader and Organizational Development Expert",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    birthPlace: "Chicago, Illinois, United States",
    education: [
      {
        institution: "Northwestern University",
        degree: "Master of Business Administration (MBA)",
        year: "2015"
      },
      {
        institution: "University of Illinois",
        degree: "Bachelor of Arts in Psychology",
        year: "2012"
      }
    ],
    occupations: [
      "Human Resources Director",
      "Organizational Development Consultant",
      "Talent Management Specialist"
    ],
    currentRole: "Director of Human Resources",
    company: "GlobalTech Solutions",
    skills: [
      "Talent Acquisition", "Performance Management", "Leadership Development",
      "Employee Relations", "Compensation & Benefits", "Change Management",
      "HR Analytics", "Diversity & Inclusion", "Training & Development"
    ],
    certifications: [
      "Senior Professional in Human Resources (SPHR)",
      "Certified Compensation Professional (CCP)",
      "Society for Human Resource Management - Senior Certified Professional (SHRM-SCP)"
    ],
    awards: [
      "HR Excellence Award 2023",
      "Diversity Champion 2022",
      "Outstanding Leadership Award 2021"
    ],
    yearsExperience: "10+",
    specializations: "Talent Management, Organizational Development, Strategic HR Planning"
  },
  sections: [
    {
      id: "overview",
      title: "Professional Overview",
      content: "**Marcus Johnson** is an accomplished *Director of Human Resources* at **GlobalTech Solutions** with over 10 years of experience in strategic human resources management and organizational development. He specializes in talent acquisition, performance management, and creating inclusive workplace cultures that drive business results.\n\nJohnson has successfully led HR transformations across multiple organizations, implementing data-driven HR strategies that resulted in 35% improvement in employee retention and 50% reduction in time-to-hire. He is recognized as a thought leader in diversity and inclusion initiatives and has been instrumental in building high-performing teams across various industries."
    },
    {
      id: "career",
      title: "Career",
      content: "Johnson's HR career began at MidSize Corp in 2014, where he quickly established himself as an innovative HR professional focused on employee engagement and organizational effectiveness.",
      subsections: [
        {
          id: "globaltech",
          title: "GlobalTech Solutions (2019-present)",
          content: "As *Director of Human Resources* at **GlobalTech Solutions**, Johnson oversees all aspects of human resources for a 2,000+ employee technology company. His key accomplishments include:\n\n• **Talent Strategy**: Developed comprehensive talent acquisition strategy that reduced time-to-hire by 50% and improved quality of hire scores by 40%\n\n• **Culture Transformation**: Led cultural change initiative that increased employee engagement scores from 65% to 89%\n\n• **Diversity & Inclusion**: Implemented D&I programs that increased workforce diversity by 45% and earned company recognition as \"Best Place to Work for Diversity\"\n\n• **Performance Management**: Redesigned performance review process, resulting in 95% employee participation and 30% improvement in goal achievement"
        },
        {
          id: "techstartup",
          title: "TechStartup Inc. (2016-2019)",
          content: "As *Senior HR Manager* at TechStartup Inc., Johnson built the HR function from the ground up during a period of rapid growth from 50 to 500 employees:\n\n• Established recruitment processes and hired 400+ employees across technical and non-technical roles\n\n• Designed compensation and benefits framework that positioned company in 75th percentile of market\n\n• Created employee handbook and HR policies that ensured compliance and supported company culture\n\n• Implemented HRIS system that automated 80% of administrative HR tasks"
        }
      ]
    },
    {
      id: "expertise",
      title: "Areas of Expertise",
      content: "Johnson's expertise encompasses all aspects of strategic human resources management:",
      subsections: [
        {
          id: "talent-management",
          title: "Talent Management",
          content: "Expert in full-cycle recruiting, from workforce planning to onboarding. Specialized in building diverse talent pipelines and implementing innovative recruitment strategies including employer branding and candidate experience optimization."
        },
        {
          id: "organizational-development",
          title: "Organizational Development",
          content: "Skilled in designing and implementing organizational restructures, change management initiatives, and leadership development programs. Experienced in conducting organizational assessments and culture surveys."
        },
        {
          id: "employee-relations",
          title: "Employee Relations & Engagement",
          content: "Proven track record in conflict resolution, employee advocacy, and building positive workplace cultures. Expert in designing employee engagement programs and retention strategies."
        }
      ]
    }
  ],
  tableOfContents: true
};

// Sample configuration for a Sales professional
export const sampleSalesConfig: WikiPortfolioConfig = {
  personalInfo: {
    name: "Sarah Rodriguez",
    tagline: "Enterprise Sales Leader and Revenue Growth Expert",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
    birthPlace: "Austin, Texas, United States",
    education: [
      {
        institution: "University of Texas at Austin",
        degree: "Bachelor of Business Administration - Marketing",
        year: "2014"
      }
    ],
    occupations: [
      "Regional Sales Director",
      "Enterprise Account Manager",
      "Business Development Leader"
    ],
    currentRole: "Regional Sales Director",
    company: "CloudSoft Enterprise",
    skills: [
      "Enterprise Sales", "Account Management", "Revenue Growth",
      "Sales Strategy", "Team Leadership", "CRM Management",
      "Negotiation", "Customer Success", "Market Analysis"
    ],
    certifications: [
      "Certified Sales Professional (CSP)",
      "Salesforce Certified Administrator",
      "Strategic Selling Certification"
    ],
    awards: [
      "President's Club Winner 2023",
      "Top Sales Performer 2022",
      "Sales Leader of the Year 2021"
    ],
    yearsExperience: "9+",
    salesAchievements: "Consistently exceeded quota by 120%+, Generated $50M+ in lifetime revenue"
  },
  sections: [
    {
      id: "overview",
      title: "Professional Overview",
      content: "**Sarah Rodriguez** is a dynamic *Regional Sales Director* at **CloudSoft Enterprise** with over 9 years of experience in enterprise sales and business development. She has consistently exceeded sales quotas by an average of 125% and has generated over $50 million in lifetime revenue across various technology sectors.\n\nRodriguez specializes in **enterprise software sales** and **strategic account management**, with a proven track record of building long-term client relationships and driving revenue growth. She has successfully managed sales territories across multiple states and has led high-performing sales teams to achieve record-breaking results."
    },
    {
      id: "career",
      title: "Sales Career",
      content: "Rodriguez began her sales career at TechVendor Solutions in 2015, where she quickly established herself as a top performer in the competitive software sales environment.",
      subsections: [
        {
          id: "cloudsoft",
          title: "CloudSoft Enterprise (2020-present)",
          content: "As *Regional Sales Director* for the Southwest region, Rodriguez manages a territory generating $25M+ in annual revenue and leads a team of 12 enterprise sales representatives:\n\n• **Revenue Achievement**: Exceeded annual quota by 130% in 2023, contributing $32M in new business\n\n• **Team Leadership**: Developed and mentored sales team that achieved 115% of team quota\n\n• **Strategic Accounts**: Managed relationships with Fortune 500 clients, maintaining 95% retention rate\n\n• **Sales Process**: Implemented new sales methodology that increased team close rate from 18% to 28%"
        },
        {
          id: "techvendor",
          title: "TechVendor Solutions (2015-2020)",
          content: "Progressed from *Sales Development Representative* to *Senior Account Executive*, consistently ranking in top 10% of sales organization:\n\n• Generated $18M in new business over 5-year tenure\n\n• Managed portfolio of 150+ enterprise accounts with average deal size of $250K\n\n• Achieved President's Club status in 3 out of 5 years\n\n• Mentored 15+ junior sales representatives, with 80% receiving promotions within 2 years"
        }
      ]
    },
    {
      id: "achievements",
      title: "Sales Achievements",
      content: "Rodriguez's sales performance has been consistently recognized throughout her career:",
      subsections: [
        {
          id: "performance-metrics",
          title: "Performance Metrics",
          content: "• **Lifetime Revenue**: Generated over $50 million in new business revenue\n\n• **Quota Attainment**: Exceeded annual quota 8 out of 9 years, with average of 125% achievement\n\n• **Deal Size**: Consistently closed deals 40% larger than company average\n\n• **Client Retention**: Maintained 92% client retention rate across all accounts"
        },
        {
          id: "recognition",
          title: "Awards and Recognition",
          content: "• **President's Club Winner 2023** - Top 5% of global sales organization\n\n• **Top Sales Performer 2022** - Highest revenue generation in Southwest region\n\n• **Sales Leader of the Year 2021** - Recognition for team leadership and development\n\n• **Rising Star Award 2018** - Fastest promotion from SDR to Account Executive in company history"
        }
      ]
    }
  ],
  tableOfContents: true
};

// Default export for easy customization
export const defaultConfig = sampleITConfig;