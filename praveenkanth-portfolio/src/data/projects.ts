import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "attendance-face-recognition",
    title: "Attendance Management System with Face Recognition",
    description:
      "Real-time attendance web app that uses face recognition through the webcam — no manual entry, no photos stored, and duplicate-proof by design.",
    technologies: [
      "Next.js", "TypeScript", "Tailwind CSS", "Prisma", "SQLite",
      "Python", "FastAPI", "OpenCV", "face_recognition",
    ],
    categories: ["Full-Stack", "Computer Vision", "Web App"],
    featured: true,
    github:
      "https://github.com/Praveenkanth2805/Attendance-Management-Web-App-with-Face-Recognition",
    imageType: "illustration",
    features: [
      "Real-time face recognition via webcam — auto-marks attendance on match",
      "Admin authentication with cookie-based sessions",
      "Public attendance page with no login required",
      "Live dashboard: Total, Present, Absent, Attendance %",
      "Full student CRUD with search, class and year",
      "Class & year management with duplicate prevention",
      "Face registration per student via webcam",
      "DB-enforced duplicate prevention (UNIQUE register_number, date)",
      "Frontend + backend validation on every field",
      "Responsive UI with green brand theme",
    ],
  },
  {
    id: "assignment-monitoring",
    title: "Assignment Monitoring System",
    description:
      "First complete full-stack web application — manages and monitors student assignments with timely WhatsApp notifications.",
    technologies: ["ASP.NET", "SQL", "HTML", "CSS", "JavaScript", "WhatsApp API"],
    categories: ["Full-Stack", "Web App"],
    featured: false,
    github: "https://github.com/Praveenkanth2805/Assignment-Monitoring-System",
    imageType: "illustration",
    features: [
      "Student management",
      "Assignment creation & management",
      "Assignment submission tracking",
      "Assignment status monitoring",
      "Admin / user workflows",
      "Dashboard & reporting",
      "Database-driven architecture",
      "WhatsApp notifications",
      "REST API integration",
    ],
  },
  {
    id: "food-ordering",
    title: "Online Food Ordering System",
    description:
      "Full-stack food ordering platform with separate experiences for customers, restaurant owners, and administrators.",
    technologies: ["Laravel", "PHP", "React", "Tailwind CSS", "MySQL"],
    categories: ["Full-Stack", "E-commerce", "Web App"],
    featured: true,
    imageType: "illustration",
    features: [
      "User authentication",
      "Restaurant management",
      "Food & category management",
      "Cart & order management",
      "Restaurant availability / status",
      "Admin dashboard",
      "Owner dashboard",
      "Search & filtering",
      "REST API integration",
      "Payment integration",
    ],
  },
  {
    id: "uzhavar-neradi",
    title: "Uzhavar Neradi",
    description:
      "Tamil-first platform connecting farmers directly with customers, reducing unnecessary intermediaries.",
    technologies: ["React", "Tailwind CSS", "Django REST Framework", "PostgreSQL", "Razorpay"],
    categories: ["Full-Stack", "E-commerce", "Web App"],
    featured: true,
    github: "https://github.com/Praveenkanth2805/Uzhavar-Neradi-Direct-from-Farmers",
    imageType: "illustration",
    features: [
      "Farmer & customer workflows",
      "Email + OTP authentication",
      "Product management",
      "REST APIs",
      "Responsive UI",
      "Tamil / multilingual interface",
      "Online payment integration (Razorpay)",
      "Cash on Delivery",
    ],
  },
  {
    id: "ui-style-showcase",
    title: "UI Style Showcase",
    description:
      "A showcase of implemented UI themes, layouts, component styling, and responsive interactions — exploring distinct design languages under a single consistent component architecture.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    categories: ["Frontend", "Design System"],
    featured: true,
    imageType: "illustration",
    features: [
      "Multiple distinct themes",
      "Responsive layouts",
      "Reusable component primitives",
      "Theme-switching interactions",
    ],
  },
  {
    id: "ai-chatbot-experiments",
    title: "AI & Chatbot Experiments",
    description:
      "Exploration of API-driven automation, agentic workflows, and chatbot development using LLMs, WhatsApp Cloud API, Instagram Graph API, and webhook pipelines.",
    technologies: [
      "OpenAI", "Claude", "Gemini", "n8n", "WhatsApp Cloud API",
      "Instagram Graph API", "Webhooks",
    ],
    categories: ["AI & Automation", "Experiments"],
    featured: false,
    // imageType: "illustration",
    // image: "/projects/attendance.png", // Uncomment this line if you have a screenshot image for this project
    // imageType: "screenshot", // Uncomment this line if you have a screenshot image for this project
    features: [
      "AI / LLM integrations (OpenAI, Claude, Gemini)",
      "Prompt engineering for structured code generation",
      "Agentic workflows with n8n",
      "Instagram Graph API integration",
      "WhatsApp Cloud API integration",
      "Webhooks & ngrok for local development",
    ],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);