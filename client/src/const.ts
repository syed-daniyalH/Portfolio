export const PORTFOLIO_DATA = {
  personal: {
    name: "Syed Muhammad Daniyal Haider",
    shortName: "Syed Daniyal Haider",
    title: "Junior AI Automation Engineer | Python Developer | RAG & Workflow Automation",
    location: "Lahore, Pakistan",
    phone: "0312-4476901",
    email: "daniyalhaider784@gmail.com",
    linkedin: "https://linkedin.com/in/syeddaniyalhaider3",
    github: "https://github.com/syed-daniyalH",
    resumeUrl: "/resume.pdf",
  },

  hero: {
    title: "Building AI Automation Systems That Reduce Manual Work",
    subtitle:
      "Junior AI Automation Engineer specializing in n8n, Make.com, RAG chatbots, FastAPI backends, CRM automation, and AI-powered workflows for real business operations.",
    cta: "View Projects",
    primaryCta: "View Projects",
    secondaryCta: "Download Resume",
    tertiaryCta: "Contact Me",
    description:
      "I design and ship automation systems that help businesses move faster, respond sooner, and remove repetitive work from daily operations.",
    trustBadges: [
      "RAG Chatbots",
      "Workflow Automation",
      "CRM Integrations",
      "FastAPI APIs",
      "n8n / Make.com",
    ],
  },

  summary:
    "Junior AI Automation Engineer focused on removing manual work from business operations. I build production-ready automation systems with n8n, Make.com, OpenAI, FastAPI, PostgreSQL, Qdrant, and CRM integrations to speed up lead response, automate billing, and keep workflows running with less human intervention.",

  about: {
    headline: "About Me",
    description:
      "I am a Junior AI Automation Engineer and BS Computer Science graduate from Government College University Lahore. I focus on AI automation, backend APIs, RAG systems, and workflow automation that solve real business problems. My work combines client communication, production-ready tooling, and systems that keep working after launch.",
    expertise: [
      "BS Computer Science - Government College University Lahore",
      "AI automation, backend APIs, RAG systems, and workflow automation",
      "Strong client communication and production delivery",
      "Systems that reduce manual work and scale with the business",
    ],
  },

  stats: [
    {
      label: "Manual processing reduced",
      value: "70%",
      detail: "Across active client workflows",
      tone: "success",
    },
    {
      label: "Automation workflows delivered",
      value: "5+",
      detail: "Built for real client operations",
      tone: "primary",
    },
    {
      label: "Lead response time",
      value: "15-20 min",
      detail: "Down from 4+ hours",
      tone: "primary",
    },
    {
      label: "Race event processing",
      value: "2 hrs -> 5 min",
      detail: "Structured from OCR and AI",
      tone: "accent",
    },
    {
      label: "LinkedIn automation savings",
      value: "3-4 hrs/wk",
      detail: "Saved per client through scheduled automation",
      tone: "secondary",
    },
  ],

  projects: [
    {
      id: 1,
      title: "Techionik Website Chatbot",
      subtitle: "RAG-Powered Support Agent",
      featured: true,
      problem:
        "The support team needed grounded answers from company documents and FAQs instead of relying on manual replies.",
      solution:
        "Built a RAG chatbot that chunks docs, stores vectors in Qdrant, retrieves the most relevant context, and streams grounded responses through a Next.js chat UI backed by FastAPI.",
      result:
        "Delivered a production support assistant that answers from company knowledge instead of guessing.",
      description:
        "Built a RAG-powered support chatbot using company docs and FAQs. The backend retrieves top-k semantic chunks from Qdrant and passes grounded context to the LLM. Frontend uses a streaming Next.js chat UI.",
      tech: ["Next.js", "FastAPI", "Qdrant", "OpenAI API", "Vercel", "Hostinger"],
      link: "https://techionik.com",
      liveDemo: true,
      impact: "Live production deployment with semantic search",
      links: {
        live: "https://techionik.com",
      },
    },
    {
      id: 2,
      title: "Dispatch Alex",
      subtitle: "AI-Powered Automotive CRM Automation",
      featured: true,
      problem:
        "Inbound SMS dispatch, service lookup, technician assignment, and invoicing were taking too long to manage manually.",
      solution:
        "Built a Make.com dispatch scenario that starts with Twilio, authenticates requests, pulls service and dealership data through HTTP, aggregates the records, checks availability, routes the request through an AI decision layer and translator, and returns the dispatch response before invoice follow-up.",
      result:
        "Reduced lead response from 4+ hours to 15-20 minutes and removed repetitive billing work.",
      description:
        "Automated inbound SMS dispatch routing with Twilio, service and dealership lookups, AI decisioning, technician assignment, and QuickBooks invoice generation. Live at dispatch-alex.vercel.app.",
      tech: [
        "Make.com",
        "FastAPI",
        "PostgreSQL",
        "React",
        "TypeScript",
        "QuickBooks API",
        "Vercel",
        "Render",
        "Twilio",
        "OpenAI",
      ],
      link: "https://dispatch-alex.vercel.app",
      liveDemo: true,
      impact: "End-to-end automation reducing manual work by 70%",
      links: {
        live: "https://dispatch-alex.vercel.app",
      },
    },
    {
      id: 3,
      title: "SM2 Racing",
      subtitle: "Race Data Automation & OCR Pipeline",
      featured: true,
      problem:
        "Race event notes and images were being handled manually, which slowed down reporting and data sharing.",
      solution:
        "Built two Make.com scenarios: one intake flow that receives webhooks, parses JSON, sets variables, and calls OCR/OpenAI processing, plus a reporting flow that writes the extracted race data into Google Sheets and the web app.",
      result:
        "Reduced event processing from 2 hours to under 5 minutes.",
      description:
        "Built two connected Make.com scenarios that extract lap times, tire pressures, and race metrics from race notes/images, normalize the data, and send structured records into Google Sheets and the web app.",
      tech: ["Make.com", "OCR", "OpenAI API", "Google Sheets", "Next.js", "FastAPI", "Vercel", "Render"],
      impact: "2hrs -> 5min processing time reduction",
      liveDemo: true,
      link: "https://sm-racing-blush.vercel.app/login",
      links: {
        live: "https://sm-racing-blush.vercel.app/login",
      },
    },
    {
      id: 4,
      title: "Monday.com",
      subtitle: "Instagram Lead Capture Automation",
      featured: false,
      problem:
        "Instagram lead ads needed to be entered into Monday.com without manual copying.",
      solution:
        "Built a Make.com automation triggered by webhooks that maps lead data into Monday.com board items in real time.",
      result: "Eliminated manual data entry for incoming social leads.",
      description:
        "Built an automation that captures Instagram leads and maps contact fields into Monday.com board items in real time.",
      tech: ["Monday.com", "Make.com", "Instagram Lead Ads", "Webhook Integration"],
      impact: "Real-time lead capture with zero manual entry",
      links: {},
    },
    {
      id: 5,
      title: "LinkedIn Content Automation",
      subtitle: "n8n AI Agent Workflow",
      featured: false,
      problem:
        "Weekly LinkedIn content creation was consuming several hours of manual research, writing, and design work.",
      solution:
        "Built an n8n workflow that researches topics, drafts posts, creates visuals with DALL-E, and sends approved drafts for publishing.",
      result:
        "Saved 3-4 hours per week per client while keeping a consistent posting rhythm.",
      description:
        "Scheduled n8n workflow researches trending topics via SerpAPI, generates post copy and hashtags via OpenAI, and produces a matching image via DALL-E. Approved posts publish automatically, rejections trigger regeneration - saves 3-4 hours/week per client.",
      tech: ["n8n", "OpenAI", "DALL-E", "SerpAPI", "LinkedIn API"],
      impact: "Saves 3-4 hours per week per client",
      links: {},
    },
    {
      id: 6,
      title: "ApplyPilot",
      subtitle: "LinkedIn AI Auto Job Applier",
      featured: false,
      problem:
        "Applying to jobs on LinkedIn is repetitive and time-consuming, especially when each form needs different answers.",
      solution:
        "Built a Python and Selenium automation engine that searches for roles, fills Easy Apply forms with LLM-powered answers, uploads resumes, and tracks results in a Flask dashboard.",
      result:
        "Reduced repetitive application work while keeping the workflow observable and configurable.",
      description:
        "Built a browser automation engine that searches LinkedIn by role/location, fills Easy Apply forms in real time using LLM-powered answering, and auto-uploads a configured resume. Dashboard tracks application stats live; stealth mode with human-like interactions and randomized click intervals to maintain account safety. Supports OpenAI, Gemini, and DeepSeek as interchangeable LLM backends.",
      tech: ["Python", "Selenium", "OpenAI API", "Flask", "ChromeDriver", "Gemini", "DeepSeek"],
      impact: "Multi-LLM support with stealth automation",
      links: {
        github: "https://github.com/syed-daniyalH/applypilot",
      },
    },
    {
      id: 7,
      title: "Vendor Analysis Pipeline",
      subtitle: "Python Data Cleanup Workflow",
      featured: false,
      problem:
        "Multilingual vendor data from different regions needed cleaning, normalization, and currency conversion before analysis.",
      solution:
        "Built a Python pipeline with Pandas and NumPy to clean, standardize, convert currencies, and format the output for client delivery.",
      result: "Cut manual data preparation time by about 65%.",
      description:
        "Built a Python pipeline to clean, standardize, and currency-convert multilingual vendor data from multiple regions - reduced manual prep time by 65%. Output formatted to client spec and delivered ready to use without further processing.",
      tech: ["Python", "Pandas", "NumPy", "Jupyter Notebook", "Excel/CSV"],
      impact: "65% reduction in manual data prep time",
      links: {},
    },
  ],

  experience: [
    {
      title: "Junior AI Automation Engineer",
      company: "Techionik",
      location: "Lahore, Pakistan",
      date: "Mar 2026 - Present",
      achievements: [
        "Built and managed workflows for 3+ active clients using n8n and Make.com.",
        "Integrated OpenAI, Twilio, and CRM systems to automate inbound and outbound operations.",
        "Reduced manual processing by around 70% across live workflows.",
        "Maintained a QuickBooks-FastAPI invoicing pipeline for 5+ clients.",
        "Set up AI calling agents for inbound and outbound flows.",
        "Reduced lead response time from 4+ hours to 15-20 minutes.",
        "Audited and reconfigured Zoho CRM setups for clients.",
      ],
    },
    {
      title: "AI Automation Engineer Intern",
      company: "Techionik",
      location: "Lahore, Pakistan",
      date: "Dec 2025 - Mar 2026",
      achievements: [
        "Built 5+ client automation workflows.",
        "Connected OpenAI and Twilio into CRM systems.",
        "Co-built the QuickBooks-FastAPI invoicing integration.",
        "Reduced billing time by around 70%.",
      ],
    },
  ],

  education: {
    degree: "Bachelor of Science in Computer Science",
    institution: "Government College University Lahore",
    location: "Lahore, Pakistan",
    duration: "2021 - 2025",
    fyp: "Potato Disease Detection & Recommendation System - Flutter mobile app with a REST API backend that detects potato diseases from images and provides treatment and crop management recommendations.",
    coursework: [
      "Data Structures & Algorithms",
      "Database Systems",
      "Software Engineering",
      "Artificial Intelligence",
      "Web Technologies",
      "Computer Networks",
    ],
  },

  certifications: [
    { title: "n8n Automation", issuer: "Simplilearn", date: "2026" },
    { title: "IBM Data Analyst", issuer: "Coursera", date: "Feb 2026" },
    { title: "Data Visualization with Python", issuer: "Coursera", date: "Feb 2026" },
    { title: "Data Analysis with Python", issuer: "Coursera", date: "Jan 2026" },
    { title: "Databases and SQL for Data Science with Python", issuer: "Coursera", date: "Jan 2026" },
  ],

  skills: {
    "AI & Automation": {
      items: ["LLM API Integration", "RAG Pipelines", "Prompt Engineering", "Multi-Agent Orchestration", "n8n", "Make.com"],
      description: "End-to-end workflow automation and AI agent development",
    },
    "Vector DB & RAG": {
      items: ["Qdrant", "OpenAI Embeddings", "Semantic Search", "LangChain", "RAG Pipeline Design"],
      description: "Vector database management and retrieval-augmented generation",
    },
    "Backend & API": {
      items: ["Python", "FastAPI", "REST APIs", "JSON", "Webhooks", "Flask"],
      description: "Backend service design, integrations, and automation-friendly APIs",
    },
    Databases: {
      items: ["PostgreSQL", "Neon DB", "SQL", "Database Schema Design"],
      description: "Relational databases, schema design, and query-driven systems",
    },
    "CRM & Business Automation": {
      items: ["Zoho CRM", "Monday.com", "WooCommerce", "QuickBooks", "Twilio", "Vonage"],
      description: "Client workflow automation, lead routing, billing, and communication",
    },
    "Tools & Deployment": {
      items: ["Docker", "Render", "Vercel", "Git", "GitHub", "VS Code", "Postman", "Jupyter Notebook"],
      description: "Development tools, deployment workflows, and day-to-day delivery",
    },
  },

  contact: {
    headline: "Let's Build an Automation System",
    description:
      "Available for AI automation, workflow automation, RAG chatbot, CRM integration, and backend API projects.",
    methods: [
      {
        label: "Email",
        value: "daniyalhaider784@gmail.com",
        icon: "Mail",
        display: "daniyalhaider784@gmail.com",
      },
      {
        label: "LinkedIn",
        value: "linkedin.com/in/syeddaniyalhaider3",
        icon: "Linkedin",
        display: "Syed Muhammad Daniyal Haider",
      },
      {
        label: "GitHub",
        value: "github.com/syed-daniyalH",
        icon: "Github",
        display: "syed-daniyalH",
      },
    ],
    projectTypes: [
      "AI Automation",
      "Workflow Automation",
      "RAG Chatbot",
      "CRM Integration",
      "Backend API",
      "Other",
    ],
  },
};
