export const projects = [
  {
    title: "FedVision",
    description:
      "Federated learning system that aggregates client models with Weighted FedAvg over WebRTC. A Go orchestrator coordinates training rounds while Python Flask microservices handle model work. Published as an academic paper with co-authors.",
    tech: ["Go", "Python", "Flask", "WebRTC", "Federated Learning"],
    githubUrl: "https://github.com/Omkardalvi01/IPD",
  },
  {
    title: "ModelMux",
    description:
      "OpenAI-compatible gateway routing to OpenAI, Gemini, Anthropic, and local Ollama models. Includes LAN accounts with RBAC, encrypted provider credentials, per-member API keys, and persistent usage reporting.",
    tech: ["Go", "Ollama", "CouchDB"],
    githubUrl: "https://github.com/Omkardalvi01/ModelMux",
  },
  {
    title: "Sentry",
    description:
      "DAST framework that detects shadow and zombie APIs in microservices using topology-aware Isolation Forest anomaly detection. Subject of an IEEE-format paper.",
    tech: ["Go", "Python", "Memgraph", "Kafka", "Redis"],
    githubUrl: "https://github.com/Omkardalvi01/Sentry",
  },
  {
    title: "GhostDrop",
    description:
      "Anonymous file-sharing backend on EC2 behind nginx and Certbot, using Redis and S3. Dockerized with Gunicorn, Celery, and Redis; frontend hosted on Vercel.",
    tech: ["AWS EC2/S3", "nginx", "Celery", "Docker Compose"],
    githubUrl: "https://github.com/Omkardalvi01/GhostDrop",
  },
  {
    title: "SkillSphere",
    description:
      "AI career platform with Gemini resume parsing, career coach chat, a WebRTC mock-interview arena with live code compiler, and a LinkedIn job-tracker extension.",
    tech: ["Next.js", "Express", "PostgreSQL", "Gemini"],
    githubUrl: "https://github.com/Omkardalvi01/skill-sphere",
  },
  {
    title: "Ragtrack",
    description:
      "Lightweight local video retrieval with cached Moondream captions, MiniLM embeddings, cosine-threshold temporal selection, and FFmpeg clip extraction. Validated on a QVHighlights pilot.",
    tech: ["Ollama", "FFmpeg", "Python"],
    githubUrl: "https://github.com/Omkardalvi01/Ragtrack",
  },
  {
    title: "Pokedex",
    description:
      "A fun weekend terminal Pokedex built with Go, Bubble Tea, and Lip Gloss. It fetches Pokemon data from the official Pokedex API and presents it in an interactive terminal UI.",
    tech: ["Go", "Bubble Tea", "Lip Gloss", "REST API"],
    githubUrl: "https://github.com/Omkardalvi01/Pokedex",
  },
  {
    title: "Cron Job Scheduler",
    description:
      "Lightweight Go scheduler with Redis-backed persistent job metadata and delayed execution via sorted sets. Accepts HTTP task submissions, runs a concurrent worker pool, and supports cancellation, rescheduling, and pluggable task logic for URL health checks or custom jobs.",
    tech: ["Go", "Redis", "HTTP"],
    githubUrl: "https://github.com/Omkardalvi01/Cron-Job-Scheduler",
  },
];
