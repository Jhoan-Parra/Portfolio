export const personalInfo = {
    name: "Jhoan",
    title: "Systems Engineer & Full Stack Developer",
    summary:
        "Passionate Systems Engineer with a strong foundation in full-stack development, building scalable web applications and crafting clean, user-centered digital experiences. Driven by continuous learning and a love for turning complex problems into elegant solutions.",
    email: "jhoan.dev@email.com",
    github: "https://github.com/jhoan",
    linkedin: "https://linkedin.com/in/jhoan",
    cvUrl: "/cv.pdf",
};

export const experiences = [
    {
        id: 1,
        role: "Software Developer",
        company: "Gatotec18",
        period: "Sep 2024 – Dec 2024",
        description:
            "Developed and maintained full-stack web applications, collaborating with cross-functional teams to deliver features on schedule. Implemented REST APIs, optimized database queries, and improved frontend performance using modern frameworks.",
        technologies: ["React", "Node.js", "PostgreSQL", "Python", "Git"],
    },
    {
        id: 2,
        role: "University Projects Applied to Businesses",
        company: "Freelance / Academic",
        period: "Mar 2024 – Present",
        description:
            "Led multiple real-world software projects as part of university coursework, collaborating directly with local businesses to deliver tailored digital solutions including inventory systems, web platforms, and data-driven dashboards.",
        technologies: ["Java", "Spring Boot", "React", "MySQL", "Docker"],
    },
];

export const projects = [
    {
        id: 1,
        title: "E-Commerce Platform",
        description:
            "Full-stack marketplace with real-time inventory, cart management, Stripe integration, and a responsive admin dashboard.",
        technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
        github: "https://github.com/jhoan/ecommerce",
        demo: "#",
        image: "🛒",
    },
    {
        id: 2,
        title: "Task Management App",
        description:
            "Collaborative project management tool with drag-and-drop boards, real-time updates via WebSockets, and role-based access.",
        technologies: ["React", "Express", "PostgreSQL", "Socket.io"],
        github: "https://github.com/jhoan/task-manager",
        demo: "#",
        image: "📋",
    },
    {
        id: 3,
        title: "AI Chat Assistant",
        description:
            "Intelligent chatbot powered by OpenAI, featuring conversation history, streaming responses, and a modern UI.",
        technologies: ["Python", "FastAPI", "React", "OpenAI API", "Redis"],
        github: "https://github.com/jhoan/ai-chat",
        demo: "#",
        image: "🤖",
    },
    {
        id: 4,
        title: "Inventory Dashboard",
        description:
            "Real-time business analytics dashboard with interactive charts, PDF report generation, and multi-warehouse support.",
        technologies: ["Java", "Spring Boot", "React", "MySQL", "Chart.js"],
        github: "https://github.com/jhoan/inventory",
        demo: "#",
        image: "📊",
    },
    {
        id: 5,
        title: "Social Media API",
        description:
            "RESTful API with authentication, media uploads, feed algorithms, and comprehensive Swagger documentation.",
        technologies: ["Node.js", "Express", "MongoDB", "JWT", "AWS S3"],
        github: "https://github.com/jhoan/social-api",
        demo: "#",
        image: "🌐",
    },
    {
        id: 6,
        title: "Portfolio Website",
        description:
            "This very site! A modern, responsive portfolio built with React and Tailwind CSS featuring galaxy-themed aesthetics.",
        technologies: ["React", "Tailwind CSS", "Vite", "Framer Motion"],
        github: "https://github.com/jhoan/portfolio",
        demo: "#",
        image: "✨",
    },
];

export const skills = {
    languages: [
        { name: "JavaScript", level: 90, icon: "JS" },
        { name: "Python", level: 85, icon: "PY" },
        { name: "Java", level: 80, icon: "JV" },
        { name: "TypeScript", level: 75, icon: "TS" },
        { name: "HTML/CSS", level: 95, icon: "HC" },
        { name: "SQL", level: 80, icon: "SQ" },
    ],
    frameworks: [
        { name: "React", level: 90, icon: "⚛️" },
        { name: "Node.js", level: 85, icon: "🟢" },
        { name: "Spring Boot", level: 75, icon: "🍃" },
        { name: "Tailwind CSS", level: 90, icon: "🎨" },
        { name: "Express.js", level: 85, icon: "🚀" },
        { name: "Next.js", level: 70, icon: "▲" },
    ],
    databases: [
        { name: "PostgreSQL", level: 85, icon: "🐘" },
        { name: "MongoDB", level: 80, icon: "🍃" },
        { name: "MySQL", level: 80, icon: "🐬" },
        { name: "Redis", level: 65, icon: "🔴" },
    ],
    tools: [
        { name: "Git", level: 90, icon: "📦" },
        { name: "Docker", level: 70, icon: "🐳" },
        { name: "Linux", level: 75, icon: "🐧" },
        { name: "AWS", level: 60, icon: "☁️" },
    ],
};

export const education = [
    {
        id: 1,
        institution: "Universidad de Pamplona",
        degree: "Systems Engineering",
        period: "2020 – Present",
        description:
            "Comprehensive program covering software engineering, algorithms, data structures, databases, networks, and systems architecture.",
        icon: "🎓",
    },
    {
        id: 2,
        institution: "SENA",
        degree: "Software Programming Technician",
        period: "2018 – 2020",
        description:
            "Intensive technical training in software development, programming fundamentals, and agile methodologies.",
        icon: "💻",
    },
];

export const certifications = [
    {
        name: "Scrum Foundation Professional Certificate",
        issuer: "CertiProf",
        icon: "🏅",
    },
];

export const languages = [
    { name: "Spanish", level: "Native", flag: "🇪🇸" },
    { name: "English", level: "A2", flag: "🇺🇸" },
];

export const navLinks = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
];
