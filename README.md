# AUHM - An Ultimate Hackathon Matrix

## Problem Statement
Students often struggle to find a good platform to discover remote hackathons related to their domain. Many don’t know which hackathons require which skills, and there’s no proper guidance or roadmap to help them prepare, build projects, and shine.

## Solution
**AUHM** is a one-stop web app built for students to:
- Discover hackathons from various domains like Web3, Data Science, AI/ML, Healthcare, Cloud Computing, and more.
- Get AI-powered recommendations based on their skills.
- Access summary/ roadmaps to participate in hackathons.
- Receive guidance with tips, tricks, and project ideas.

---

## Overview
AUHM is a comprehensive hackathon discovery platform featuring:
- Modern React frontend with TypeScript
- Node.js/Express backend
- AI-powered assistant
- Clean UI with light/dark mode
- Interactive animated background
- Hackathon search and filtering

---

## System Architecture

### Frontend
- React 18 + TypeScript
- Tailwind CSS + shadcn/ui + Radix UI
- Wouter for routing
- TanStack Query for API state management
- Framer Motion for animations
- Custom theming with light/dark mode

### Backend
- Express.js with TypeScript
- RESTful API with modular routing
- In-memory storage (dev) with Drizzle ORM for PostgreSQL migration
- Dependency injection for storage flexibility

### Data Storage
- `MemStorage` implementing `IStorage` interface
- Seeded hackathon data across domains
- Search and filtering built-in
- PostgreSQL ready with Drizzle ORM
- Schema definitions for users, hackathons, and chat messages

### Authentication
- Not yet implemented (future-ready schema included)

### API Endpoints
- `GET /api/hackathons` → Retrieve hackathons (with search & filter)
- `POST /api/chat` → AI chatbot endpoint

### AI Integration
- **Ollama** with **Gemma 2B** model
- Local AI-powered assistant
- Context-aware hackathon discovery & tips
- Expandable chat widget with smooth animations

---

## External Dependencies

### UI & Styling
- shadcn/ui, Tailwind CSS, Radix UI, Framer Motion, Lucide React

### State Management
- TanStack Query, React Hook Form, Zod

### Build Tools
- Vite, TypeScript, ESBuild

### Database
- Drizzle ORM, Neon Database, PostgreSQL

### AI & External Services
- Ollama (local AI server)
- Gemma 2B model

---
## 📂 Project Structure
```
AUHM/
│
├── client/
│ ├── src/
│ └── index.html
│
├── node_modules/ # dependencies
│
├── server/
│ ├── index.ts
│ ├── llm.ts
│ ├── routes.ts
│ ├── storage.ts
│ └── vite.ts
│
├── shared/
│ └── schema.ts
│
├── .gitignore
├── components.json
├── drizzle.config.ts
├── package-lock.json
├── package.json
├── postcss.config.js
├── AUHM-An-Ultimate-Hackathon-matrix.pptx
├── README.md
├── tailwind.config.ts
├── test.ts
├── tsconfig.json
└── vite.config.ts
```
---
## Getting Started

### 1. Clone the Repository
```bash
git clone <your-repo-link>
cd AUHM
```
### 2. Install dependencies
```bash
npm i

npm run dev: Start development server (The app will be running on http://localhost:5000)

npm run build: Build project for production

npm run preview: Preview production build 
```
---
## 🤝 Contributing
Pull requests are welcome. For major changes, open an issue first to discuss what you’d like to change.

---
## 📜 License

This project is licensed under the MIT License.

---
## Developer: Kavya Sharma (Rayat Bahra University)
