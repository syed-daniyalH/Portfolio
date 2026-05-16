export const PORTFOLIO_DATA = {
  personal: {
    name: "Syed Daniyal Haider",
    title: "Junior AI Automation Engineer | Python Developer",
    location: "Lahore, Pakistan",
    phone: "0312-4476901",
    email: "daniyalhaider784@gmail.com",
    linkedin: "https://linkedin.com/in/syeddaniyalhaider3",
    github: "https://github.com/syed-daniyalH",
  },

  hero: {
    title: "AI Automation Engineer & Python Developer",
    subtitle: "Building Systems That Run Themselves",
    cta: "View My Work",
    description: "AI Automation Engineer with hands-on experience shipping production-grade automation systems for real clients. Specialise in end-to-end workflow automation, RAG-powered AI agents, and custom backend integrations."
  },

  summary: "AI Automation Engineer with hands-on experience shipping production-grade automation systems for real clients. Specialise in end-to-end workflow automation (n8n, Make.com), RAG-powered AI agents (Qdrant, LangChain, OpenAI), and custom backend integrations (FastAPI, PostgreSQL). Built and deployed a RAG chatbot with semantic search, an autonomous LinkedIn job applier with multi-LLM support, and AI-driven CRM pipelines that cut manual processing by up to 70%. Focused on building systems that run themselves.",

  about: {
    headline: "About Me",
    description: "I'm a Junior AI Automation Engineer at Techionik, Lahore. I specialise in building end-to-end automation systems using n8n, Make.com, and OpenAI — backed by FastAPI and PostgreSQL for custom logic. I've shipped RAG-powered chatbots, AI calling agents, and CRM pipelines that run on their own once deployed. I care about one thing: building systems that work without anyone having to watch them.",
    expertise: [
      "AI & Automation (n8n, Make.com, OpenAI integration)",
      "RAG Pipelines & Vector Databases (Qdrant, LangChain)",
      "Backend Development (FastAPI, Python, PostgreSQL)",
      "Full-Stack Applications (Next.js, React, TypeScript)"
    ]
  },

  stats: [
    { label: "70% Manual Work Eliminated", value: "70%" },
    { label: "5+ Clients Automated", value: "5+" },
    { label: "2hrs → 5min Processing", value: "96%" },
    { label: "15min Lead Response", value: "15min" }
  ],

  projects: [
    {
      id: 1,
      title: "Techionik Website Chatbot",
      subtitle: "RAG-Powered Support Agent",
      featured: true,
      description: "Chunked and embedded company docs/FAQs via OpenAI; stored vectors in Qdrant for semantic retrieval. FastAPI backend retrieves top-k chunks per query and passes context to the LLM for grounded responses; streaming UI built in Next.js, deployed live on the Techionik website via Hostinger.",
      tech: ["Next.js", "FastAPI", "Qdrant", "OpenAI API", "Vercel", "Hostinger"],
      link: "https://techionik.com",
      liveDemo: true,
      impact: "Live production deployment with semantic search"
    },
    {
      id: 2,
      title: "Dispatch Alex",
      subtitle: "AI-Powered Automotive CRM Automation",
      featured: true,
      description: "Automated inbound SMS handling via Twilio and OpenAI intent detection; replies sent without manual intervention. FastAPI backend handled technician assignment and job tracking on creation; auto-generated QuickBooks invoices on completion.",
      tech: ["Make.com", "FastAPI", "PostgreSQL", "React", "TypeScript", "QuickBooks API", "Vercel", "Render"],
      link: "https://dispatch-alex.vercel.app",
      liveDemo: true,
      impact: "End-to-end automation reducing manual work by 70%"
    },
    {
      id: 3,
      title: "SM2 Racing OCR Pipeline",
      description: "Pipeline ingests raw race notes and images via OCR and OpenAI, extracts key metrics (lap times, tire pressures, RR bound data) into Google Sheets — reduced event processing from 2 hours to under 5 minutes.",
      tech: ["Make.com", "OCR", "OpenAI API", "Google Sheets", "Next.js", "FastAPI", "Vercel", "Render"],
      impact: "2hrs → 5min processing time reduction"
    },
    {
      id: 4,
      title: "Monday.com Lead Capture Automation",
      description: "Built a Make.com pipeline triggered by Instagram Lead Ad webhooks; automatically maps all contact fields into structured Monday.com board items in real time — eliminating manual data entry entirely.",
      tech: ["Make.com", "Monday.com", "Instagram Lead Ads", "Webhook Integration"],
      impact: "Real-time lead capture with zero manual entry"
    },
    {
      id: 5,
      title: "LinkedIn Content Automation",
      description: "Scheduled n8n workflow researches trending topics via SerpAPI, generates post copy and hashtags via OpenAI, and produces a matching image via DALL-E. Approved posts publish automatically, rejections trigger regeneration — saves ~3–4 hours/week per client.",
      tech: ["n8n", "OpenAI", "DALL-E", "SerpAPI", "LinkedIn API"],
      impact: "Saves 3-4 hours per week per client"
    },
    {
      id: 6,
      title: "ApplyPilot",
      description: "Built a browser automation engine that searches LinkedIn by role/location, fills Easy Apply forms in real time using LLM-powered answering, and auto-uploads a configured resume. Dashboard tracks application stats live; stealth mode with human-like interactions and randomized click intervals to maintain account safety. Supports OpenAI, Gemini, and DeepSeek as interchangeable LLM backends.",
      tech: ["Python", "Selenium", "OpenAI API", "Flask", "ChromeDriver", "Gemini", "DeepSeek"],
      impact: "Multi-LLM support with stealth automation"
    },
    {
      id: 7,
      title: "Vendor Analysis Pipeline",
      description: "Built a Python pipeline to clean, standardize, and currency-convert multilingual vendor data from multiple regions — reduced manual prep time by ~65%. Output formatted to client spec and delivered ready to use without further processing.",
      tech: ["Python", "Pandas", "NumPy", "Jupyter Notebook", "Excel/CSV"],
      impact: "65% reduction in manual data prep time"
    },
  ],

  experience: [
    {
      title: "Junior AI Automation Engineer",
      company: "Techionik",
      location: "Lahore, Pakistan",
      date: "Mar 2026 – Present",
      achievements: [
        "Built and managed automation workflows for 3+ active clients using n8n and Make.com, covering integrations with OpenAI, Twilio, and existing CRM platforms — manual processing time dropped ~70% after go-live.",
        "Maintained and extended the QuickBooks–FastAPI invoicing pipeline, automating billing for 5+ clients and eliminating manual work per billing cycle.",
        "Set up AI calling agents for inbound/outbound flows; lead response times reduced from 4+ hours to 15–20 minutes across several accounts.",
        "Audited and reconfigured Zoho CRM setups for clients — resolved broken workflows, rebuilt pipeline stages, and integrated WooCommerce and QuickBooks for end-to-end deal automation."
      ]
    },
    {
      title: "AI Automation Engineer (Intern)",
      company: "Techionik",
      location: "Lahore, Pakistan",
      date: "Dec 2025 – Mar 2026",
      achievements: [
        "Built 5+ client automation workflows using n8n and Make.com, connecting OpenAI and Twilio into existing CRM setups to remove manual steps.",
        "Co-built the QuickBooks–FastAPI invoicing integration; manual billing time per job dropped by ~70% post-launch."
      ]
    }
  ],

  education: {
    degree: "Bachelor of Science, Computer Science",
    institution: "Government College University (GCU), Lahore",
    location: "Lahore, Pakistan",
    duration: "2021 – 2025",
    fyp: "Potato Disease Detection & Recommendation System — Flutter mobile app with a REST API backend that detects potato diseases from images and provides information on disease lifecycle, treatment, and crop management recommendations.",
    coursework: [
      "Data Structures & Algorithms",
      "Database Systems",
      "Software Engineering",
      "Artificial Intelligence",
      "Web Technologies",
      "Computer Networks"
    ]
  },

  certifications: [
    { title: "n8n Automation", issuer: "Simplilearn", date: "2026" },
    { title: "IBM Data Analyst", issuer: "Coursera", date: "Feb 2026" },
    { title: "Data Visualization with Python", issuer: "Coursera", date: "Feb 2026" },
    { title: "Data Analysis with Python", issuer: "Coursera", date: "Jan 2026" },
    { title: "Databases and SQL for Data Science with Python", issuer: "Coursera", date: "Jan 2026" }
  ],

  skills: {
    "AI & Automation": {
      items: ["LLM API Integration", "RAG Pipelines", "Prompt Engineering", "Multi-Agent Orchestration", "n8n", "Make.com", "GoHighLevel", "Agenda Pro"],
      description: "End-to-end workflow automation and AI agent development"
    },
    "Vector DB & RAG": {
      items: ["Qdrant", "OpenAI Embeddings", "Semantic Search", "LangChain", "RAG Pipeline Design"],
      description: "Vector database management and retrieval-augmented generation"
    },
    "CRM & Integrations": {
      items: ["Zoho CRM — Auditing & Configuration", "Zoho CRM — Workflow Automation", "Zoho CRM — Lead Sequences", "WooCommerce Integration", "QuickBooks Integration", "Monday.com", "Instagram Lead Capture via Make.com", "Webhook Automation"],
      description: "CRM auditing, configuration, workflow automation, lead sequences, and third-party platform integration"
    },
    "Python Stack": {
      items: ["Python 3.x", "Pandas", "NumPy", "Matplotlib", "Selenium", "Flask"],
      description: "Data processing and automation scripting"
    },
    "Backend & APIs": {
      items: ["FastAPI", "RESTful API Design", "JSON", "Webhook Handling", "PostgreSQL", "Neon DB", "SQL"],
      description: "Backend development and database design"
    },
    "DevOps & Tools": {
      items: ["Docker", "Render", "Vercel", "Git", "GitHub", "VS Code", "Postman", "Jupyter Notebook"],
      description: "Development tools and deployment platforms"
    },
    "Communication": {
      items: ["Twilio", "Vonage", "DALL-E", "SerpAPI", "LinkedIn API"],
      description: "Third-party APIs and communication services"
    },
    "Methodology": {
      items: ["Agile/Scrum", "No-code Automation", "API Documentation", "Client Communication"],
      description: "Development practices and client engagement"
    }
  },

  contact: {
    headline: "Let's Automate Something",
    description: "Open to freelance projects, full-time roles, and automation consulting.",
    methods: [
      { label: "Email", value: "daniyalhaider784@gmail.com", icon: "Mail" },
      { label: "LinkedIn", value: "linkedin.com/in/syeddaniyalhaider3", icon: "Linkedin" },
      { label: "GitHub", value: "github.com/syed-daniyalH", icon: "Github" }
    ]
  }
};
