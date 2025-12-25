export const projects = [
  {
    id: 1,
    title: "Elyvo",
    subtitle: "Enterprise-Grade Interview Engine",
    description: "A comprehensive technical interview platform featuring 1-on-1 video calls, real-time collaborative coding, and secure isolated code execution with automated test-case feedback.",
    technologies: ["Next.js", "Stream Video", "Clerk", "Inngest", "Docker", "TanStack Query"],
    github: "https://github.com/Abhibhadouria08", 
    demo: "https://elyvo.onrender.com",
    image: "/Elyvo.png",
    metrics: "35% Latency Reduction",
    featured: true,
    highlights: [
      "VSCode-powered editor with secure Docker execution",
      "1-on-1 Video calls & Screen sharing via Stream",
      "Async background tasks & system stability via Inngest",
      "Real-time Chat Messaging by Stream"
    ]
  },
  {
    id: 2,
    title: "Nebula Notes",
    subtitle: "Document Processing Platform",
    description: "An intelligent document engine featuring text analysis, grammar correction, and structured content refinement with a modular backend design.",
    technologies: ["React", "Node.js", "Python", "REST APIs", "Pandas"],
    github: "https://github.com/Abhibhadouria08",
    demo: "https://nebula-notes-89lj.vercel.app/",
    image: "/NebulaNotes.png", 
    metrics: "Optimized API Performance",
    featured: true
  },
  {
    id: 3,
    title: "House Price Predictor",
    subtitle: "ML Inference System",
    description: "Predictive model achieving high accuracy using feature engineering and cross-validation, containerized for portable deployment.",
    technologies: ["Python", "Scikit-learn", "Flask", "Docker", "NumPy"],
    github: "https://github.com/Abhibhadouria08",
    demo: "https://house-price-prediction-pxps.onrender.com",
    image: "/HousePrediction.png", 
    metrics: "85% R² Score",
    featured: true
  },
  {
    id: 4,
    title: "Background Changer",
    subtitle: "React State Engine",
    description: "A minimal React setup leveraging Vite and HMR to implement a high-speed dynamic theme and background manipulation engine.",
    technologies: ["React", "Vite", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/Abhibhadouria08",
    demo: "https://background-changer-theta.vercel.app",
    image: "/BackgroundChanger.png",
    metrics: "Fast Refresh HMR",
    featured: false
  }
]