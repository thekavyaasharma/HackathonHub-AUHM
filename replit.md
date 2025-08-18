# AUHM - An Ultimate Hackathon Matrix

## Overview

AUHM is a comprehensive hackathon discovery platform built for students to explore hackathons around the globe. The application features a modern React frontend with a Node.js/Express backend, providing a clean, minimalist interface for discovering hackathons across various domains like Web3, AI/ML, Data Science, Cloud Computing, and Healthcare. The platform includes an AI-powered chat assistant with smooth animations and an interactive animated background that works in both light and dark modes.

## Recent Updates (August 2025)

✓ Simplified header navigation - removed logo and nav items, kept only theme toggle
✓ Restructured hero section - moved "An Ultimate Hackathon Matrix" title below main "AUHM" heading
✓ Enhanced animated background with 7 larger, rotating circles and gradient overlays
✓ Fixed chat auto-scrolling - only scrolls for AI responses, not user messages
✓ Added 8 comprehensive hackathons with registration links across all domains
✓ Improved chat scroll detection for better user control

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The application uses a modern React architecture with TypeScript and a component-based design pattern. The frontend is built using:
- **React 18** with functional components and hooks for modern state management
- **TypeScript** for type safety and better developer experience
- **Tailwind CSS** with shadcn/ui components for consistent, modern styling with dark/light mode support
- **Wouter** for lightweight client-side routing
- **TanStack Query** for server state management and API data fetching with caching
- **Framer Motion** for smooth animations and transitions
- **Custom theme system** with localStorage persistence for seamless dark/light mode switching

The component structure follows a clear separation of concerns with reusable UI components, page components, and custom hooks. The architecture emphasizes modularity with components like AnimatedBackground, HackathonGrid, SearchFilters, and AIAssistant that can be easily maintained and extended.

### Backend Architecture
The backend follows a RESTful API design pattern using:
- **Express.js** as the web framework with TypeScript for type safety
- **Modular routing** with separated route handlers for clean code organization
- **Interface-based storage design** using IStorage interface for easy database migration
- **Memory storage implementation** for development with seeded sample data
- **Vite integration** for development server with hot module replacement

The server architecture uses dependency injection patterns through the storage interface, making it easy to swap storage implementations from memory to database solutions without changing business logic.

### Data Storage Solutions
Currently implements an in-memory storage system for development:
- **MemStorage class** implementing the IStorage interface for consistent data access patterns
- **Seeded sample data** for hackathons across multiple domains (Web3, AI/ML, Healthcare, etc.)
- **Search and filtering capabilities** built into the storage layer
- **Drizzle ORM configuration** prepared for PostgreSQL migration with schema definitions
- **Database schema** defining users, hackathons, and chat messages with proper typing using Zod

The storage system is architected with PostgreSQL in mind, using Drizzle ORM for future database integration. The schema includes proper relationships and constraints for hackathon entities.

### Authentication and Authorization
Currently, the application doesn't implement user authentication, focusing on public hackathon discovery. The architecture includes user schema definitions and is prepared for future authentication implementation through the existing query infrastructure and backend patterns.

### API Design
The backend exposes a clean RESTful API structure:
- **GET /api/hackathons** - Retrieve hackathons with optional search query and domain filtering
- **POST /api/chat** - AI chatbot integration endpoint for user assistance
- Consistent error handling and response formatting across all endpoints
- Structured request/response patterns using Zod schemas for validation

The API design emphasizes simplicity and extensibility, making it easy to add new endpoints as the platform grows.

### AI Integration
The platform includes an AI-powered assistant feature:
- **Ollama integration** using the Gemma 2B model for local AI processing
- **Chat interface** with message history and real-time responses
- **Context-aware responses** focused on hackathon discovery and participation tips
- **Expandable chat widget** with smooth animations and user-friendly interface

The AI assistant is designed to help users find relevant hackathons, provide participation tips, and answer questions about the platform and hackathon ecosystem.

## External Dependencies

### UI and Design System
- **shadcn/ui components** - Complete UI component library with Radix UI primitives
- **Tailwind CSS** - Utility-first CSS framework for responsive design
- **Radix UI** - Accessible, unstyled UI components for complex interactions
- **Framer Motion** - Animation library for smooth transitions and micro-interactions
- **Lucide React** - Icon library for consistent iconography

### State Management and Data Fetching
- **TanStack Query** - Server state management with caching, background updates, and error handling
- **React Hook Form** - Form state management with validation
- **Zod** - TypeScript-first schema declaration and validation

### Development and Build Tools
- **Vite** - Fast build tool with hot module replacement for development
- **TypeScript** - Type safety across the entire application stack
- **ESBuild** - Fast JavaScript bundler for production builds

### Database and ORM
- **Drizzle ORM** - TypeScript ORM with excellent PostgreSQL support
- **Neon Database** - Serverless PostgreSQL database provider
- **PostgreSQL** - Primary database for production deployment

### AI and External Services
- **Ollama** - Local AI model serving for the chat assistant functionality
- **Gemma 2B model** - Lightweight language model for hackathon-focused assistance

### Development Environment
- **Replit** - Cloud development environment with integrated tooling
- **Node.js** - Runtime environment for the backend server
- **Express.js** - Web framework for API development