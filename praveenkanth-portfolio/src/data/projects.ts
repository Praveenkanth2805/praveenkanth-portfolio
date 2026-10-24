import type { Project } from "@/types/project";

export const projects: Project[] = [
  // --- PROFESSIONAL WORK (CONFIDENTIAL) ---
  {
    id: "whatsapp-data-analyzer",
    title: "WhatsApp Data Analyzer",
    description:
      "Engineered authentication and modernized the UI for an existing data analyzer. Refactored core logic to improve the accuracy of IN/OUT times and penalty calculations from exported chat data.",
    technologies: ["React", "API Integration", "Auth", "UI/UX"],
    categories: ["Professional Work", "Data Analysis"],
    featured: true,
    isConfidential: true,
    imageType: "illustration",
    // image: "/projects/whatsapp-analyzer.png", // Add image path here
    // imageType: "screenshot",                 // Change to "screenshot" if you add a real image
    features: [
      "Built secure authentication flow for data access.",
      "Refactored IN/OUT time and penalty calculation logic.",
      "Modernized the UI for better user experience.",
      "Utilized AI tools for debugging and testing.",
    ],
  },
  {
    id: "employee-management-system",
    title: "Employee Management System",
    description:
      "Integrated the WhatsApp Analyzer API into the existing Employee Management platform to fetch and display real-time IN/OUT times and attendance data automatically.",
    technologies: ["API Integration", "System Architecture"],
    categories: ["Professional Work", "Enterprise App"],
    featured: false,
    isConfidential: true,
    imageType: "illustration",
    // image: "/projects/employee-management.png", // Add image path here
    // imageType: "screenshot",                   // Change to "screenshot" if you add a real image
    features: [
      "Connected WhatsApp Analyzer API with the Employee Management backend.",
      "Automated attendance and IN/OUT tracking.",
    ],
  },
  {
    id: "corporate-website",
    title: "Corporate Website Updates",
    description:
      "Enhanced the company's corporate website by integrating a chatbot and implementing a centralized header and footer layout for consistency.",
    technologies: ["Frontend", "Chatbot Integration", "UI Correction"],
    categories: ["Professional Work", "Web App"],
    featured: false,
    isConfidential: true,
    imageType: "illustration",
    // image: "/projects/corporate-website.png", // Add image path here
    // imageType: "screenshot",                 // Change to "screenshot" if you add a real image
    features: [
      "Integrated chatbot functionality.",
      "Created centralized, responsive header and footer components.",
    ],
  },
  {
    id: "flutter-employee-app",
    title: "Flutter Employee App Bug Fixes",
    description:
      "Resolved critical UI and backend bugs in an existing Flutter mobile application, improving app stability and user experience.",
    technologies: ["Flutter", "Dart", "Debugging"],
    categories: ["Professional Work", "Mobile App"],
    featured: false,
    isConfidential: true,
    imageType: "illustration",
    // image: "/projects/flutter-app.png", // Add image path here
    // imageType: "screenshot",            // Change to "screenshot" if you add a real image
    features: [
      "Fixed UI rendering issues across devices.",
      "Resolved backend API connection bugs.",
    ],
  },

  // --- FREELANCE & ACADEMIC PROJECTS ---
  {
    id: "attendance-face-recognition",
    title: "Attendance Management System with Face Recognition",
    description:
      "Real-time attendance web app that uses face recognition through the webcam. Specifically tailored for college rules (e.g., 5-hour attendance logic).",
    technologies: ["Next.js", "TypeScript", "Python", "FastAPI", "PostgreSQL"],
    categories: ["Full-Stack", "Computer Vision", "Web App"],
    featured: true,
    github: "https://github.com/Praveenkanth2805/Attendance-Management-Web-App-with-Face-Recognition",
    imageType: "illustration",
    // image: "/projects/attendance.png", // Add image path here
    // imageType: "screenshot",           // Change to "screenshot" if you add a real image
    features: [
      "Real-time face recognition via webcam.",
      "Custom college attendance rules (last period absent = full day absent).",
      "Deployed on Vercel (Frontend) and Render (Backend).",
      "Admin authentication with cookie-based sessions.",
    ],
  },
  {
    id: "dccreation",
    title: "DC Creation",
    description:
      "A complete full-stack business website built for a client. Features dynamic content management, image handling, and a responsive UI.",
    technologies: ["Next.js", "PostgreSQL", "Cloudinary", "Tailwind CSS"],
    categories: ["Freelance", "Business Website", "Full-Stack"],
    featured: true,
    liveDemo: "https://dccreation.vercel.app/",
    imageType: "illustration",
    // image: "/projects/dc-creation.png", // Add image path here
    // imageType: "screenshot",            // Change to "screenshot" if you add a real image
    features: [
      "Full-stack Next.js application handling both frontend and backend.",
      "PostgreSQL database for data storage.",
      "Cloudinary integration for optimized image management.",
    ],
  },
  {
    id: "kaviya-boutique",
    title: "Kaviya Boutique",
    description:
      "An elegant e-commerce style website for a boutique, showcasing collections with a smooth user experience and robust backend.",
    technologies: ["React", "Python", "PostgreSQL", "Cloudinary", "Tailwind CSS"],
    categories: ["Freelance", "E-commerce", "Web App"],
    featured: true,
    liveDemo: "https://kaviyaboutique.vercel.app/",
    imageType: "illustration",
    // image: "/projects/kaviya-boutique.png", // Add image path here
    // imageType: "screenshot",                // Change to "screenshot" if you add a real image
    features: [
      "React frontend for a highly responsive and interactive UI.",
      "Python backend to handle business logic and API requests.",
      "Cloudinary integration for hosting and serving high-quality product images.",
    ],
  },
  {
    id: "college-fee-management",
    title: "College Fee Management System",
    description:
      "A comprehensive system to manage student fee structures, payments, and pending dues for college administration.",
    technologies: ["Full-Stack", "Database Management"],
    categories: ["Freelance", "Web App"],
    featured: false,
    imageType: "illustration",
    // image: "/projects/fee-management.png", // Add image path here
    // imageType: "screenshot",               // Change to "screenshot" if you add a real image
    features: [
      "Fee collection tracking.",
      "Student database management.",
      "Receipt generation.",
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
    // image: "/projects/uzhavar-neradi.png", // Add image path here
    // imageType: "screenshot",               // Change to "screenshot" if you add a real image
    features: [
      "Farmer & customer workflows",
      "Email + OTP authentication",
      "Product management",
      "Tamil / multilingual interface",
      "Online payment integration (Razorpay)",
    ],
  },
  {
    id: "ui-style-showcase",
    title: "UI Style Showcase",
    description:
      "A showcase of implemented UI themes, layouts, component styling, and responsive interactions — exploring distinct design languages under a single consistent component architecture.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    categories: ["Frontend", "Design System"],
    featured: false,
    imageType: "illustration",
    // image: "/projects/ui-showcase.png", // Add image path here
    // imageType: "screenshot",            // Change to "screenshot" if you add a real image
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
    imageType: "illustration",
    // image: "/projects/ai-chatbot.png", // Add image path here
    // imageType: "screenshot",           // Change to "screenshot" if you add a real image
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