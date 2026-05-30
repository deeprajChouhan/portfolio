import { portfolioList, testimonialList } from "./Data";

export const profile = {
  name: "Deepraj Chouhan",
  role: "AI Systems Engineer",
  tagline: "LLM Applications, RAG, Agentic Workflows & Secure AI Systems",
  location: "United Kingdom",
  email: "deeprajchouhan012@gmail.com",
  phone: "+44 7767551504",
  cvUrl:
    "https://drive.google.com/file/d/1cUlVwt1R7hCJI71U63SSwDbbmEN2WleE/view?usp=sharing",
  github: "https://github.com/deeprajChouhan",
  linkedin: "https://linkedin.com/in/deepraj-chouhan-265a10165",
  visa: "UK Graduate Visa valid until Feb 2027 - no sponsorship required",
  summary:
    "AI Systems Engineer with 6+ years of software engineering experience building production backend systems, full-stack products, secure cloud platforms, and AI-powered workflow automation. Hands-on with LLM applications, RAG pipelines, semantic search, vector databases, AI orchestration, evaluation workflows, observability, and secure deployment patterns.",
};

export const navItems = [
  { id: "about", label: "About", icon: "fa-circle-user" },
  { id: "skills", label: "Skills", icon: "fa-code" },
  { id: "projects", label: "Projects", icon: "fa-folder-open" },
  { id: "experience", label: "Experience", icon: "fa-timeline" },
  { id: "contact", label: "Contact", icon: "fa-paper-plane" },
];

export const metrics = [
  { value: "6+", label: "Years engineering systems" },
  { value: "50%", label: "Capacity improvement delivered" },
  { value: "40%", label: "Operational performance lift" },
];

export const skills = [
  {
    title: "AI / LLM Engineering",
    items: ["LLM applications", "RAG", "OpenAI APIs", "Semantic search", "Embeddings", "Prompt engineering"],
  },
  {
    title: "Agentic Workflows",
    items: ["LangChain", "LangGraph", "AI orchestration", "Async services", "Workflow automation", "External APIs"],
  },
  {
    title: "Evaluation & Observability",
    items: ["Response scoring", "Retry analysis", "Token analytics", "Tracing", "Prompt reliability", "Workflow monitoring"],
  },
  {
    title: "Secure AI Platforms",
    items: ["PII masking", "Prompt-injection safeguards", "Audit logging", "Encrypted credentials", "Access controls"],
  },
  {
    title: "Backend & Data",
    items: ["Python", "FastAPI", "Django", "PostgreSQL", "Redis", "Docker", "AWS", "Qdrant", "Pinecone"],
  },
  {
    title: "Product Engineering",
    items: ["TypeScript", "React", ".NET services", "REST APIs", "GraphQL", "Responsive UI"],
  },
];

export const experience = [
  {
    period: "11/2024 - Present",
    title: "Software Engineer",
    company: "T1 Tech Dubai",
    focus: "LLM-assisted workflow automation, AI service integrations, React/TypeScript interfaces, .NET services, SQL Server, and Python automation pipelines.",
    impact: "Improved product scalability by 50% and operational performance by 40% through architecture redesign and AI-assisted sales automation.",
  },
  {
    period: "02/2023 - 08/2023",
    title: "Software Engineer",
    company: "Seven Islands Shipping Limited",
    focus: "Scalable automation, data processing, AI-assisted workflow enhancements, Python extraction pipelines, React/TypeScript applications, and mobile delivery.",
    impact: "Improved system efficiency by 30% and contributed to a 40% improvement in engagement and operational efficiency.",
  },
  {
    period: "02/2021 - 01/2023",
    title: "System Engineer",
    company: "Tata Consultancy Services",
    focus: "SAP CRM access control, compliance validation, application security testing, production monitoring, auditability, and Oracle Cloud migration support.",
    impact: "Built the security-first foundation now applied to protected AI workflows, access control, monitoring, and audit logging.",
  },
  {
    period: "01/2019 - 01/2021",
    title: "Part-time Fullstack Engineer",
    company: "Fireblaze Technologies Pvt Ltd",
    focus: "Full-stack foundation for Ignite, an e-learning platform focused on engagement, usability, scalable delivery, and performance.",
    impact: "Supported product, design, and marketing decisions with data-informed platform improvements.",
  },
];

export const education = [
  {
    period: "2023 - 2024",
    title: "MSc Applied Cyber Security",
    place: "University of South Wales",
  },
  {
    period: "2016 - 2020",
    title: "Bachelor of Engineering in Information Technology",
    place: "SB Jain College of Engineering, Management & Research",
  },
];

export const projects = portfolioList.slice(0, 9);

export const aiProjects = [
  {
    title: "Apply Forge Pro",
    category: "AI Workflow Intelligence Platform",
    intro:
      "Automates job discovery, application personalization, tracking, and recruiter outreach using RAG-based candidate memory, embeddings, semantic retrieval, vector search, evaluation, observability, token tracking, and secure AI controls.",
  },
  {
    title: "Traffic Segregation on CICIDS2017",
    category: "Machine Learning / Security",
    intro:
      "Applied supervised and unsupervised ML with Python and R to classify network traffic and distinguish attack patterns from normal behaviour for security monitoring use cases.",
  },
  {
    title: "Spectre Attack POC",
    category: "Security Research",
    intro:
      "Created and tested a proof of concept for Spectre CVE-2017-5753 and CVE-2017-5715, documenting exploit behaviour, impact, and mitigation approaches.",
  },
  {
    title: "Medical Image Consent Research",
    category: "Privacy / Cryptography",
    intro:
      "Ongoing research embedding encrypted consent data in medical images using AES-256, Pixel Value Differencing, robustness testing, and healthcare privacy compliance.",
  },
];

export const testimonials = testimonialList;
