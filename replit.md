# Overview

Lexa is a modern AI-powered legal platform designed to transform how legal professionals work. The application is a full-stack TypeScript project that combines a React frontend with an Express.js backend, featuring AI-driven legal document management, contract creation, legal research tools, and client communication systems. The platform supports multi-language legal operations and provides secure document storage with comprehensive workflow management.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript, built using Vite for fast development and optimized builds
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: Shadcn/ui component library with Radix UI primitives for accessible, customizable components
- **Styling**: Tailwind CSS with custom design tokens and CSS variables for theming
- **State Management**: TanStack Query for server state management and data fetching
- **Form Handling**: React Hook Form with Zod validation for type-safe form management
- **Animations**: Framer Motion for smooth UI transitions and micro-interactions

## Backend Architecture
- **Framework**: Express.js with TypeScript in ESM format
- **API Design**: RESTful APIs with structured error handling and request logging middleware
- **Validation**: Zod schemas for request validation with automatic error responses
- **Development Setup**: Custom Vite integration for development mode with HMR support

## Data Storage Solutions
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Connection**: Neon serverless database for scalable cloud-based storage
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Data Models**: 
  - User management with authentication fields
  - Demo request tracking for lead generation
  - Contact message system for client communications
- **Session Storage**: PostgreSQL-based session storage using connect-pg-simple

## Authentication and Authorization
- **Session Management**: Express sessions with PostgreSQL persistence
- **Data Validation**: Zod schemas ensure type safety across user inputs and API responses
- **Security**: Prepared for role-based access control with user management infrastructure

## External Dependencies
- **Database**: Neon PostgreSQL serverless database
- **UI Framework**: Radix UI primitives for accessibility-first components
- **Development Tools**: 
  - Replit integration with custom Vite plugins
  - ESBuild for production bundling
  - TypeScript for comprehensive type checking
- **Styling**: Google Fonts integration for multi-language typography support (Arabic, Urdu, Hindi, English)
- **Third-party Services**: Image hosting for avatars, company logos, and marketing assets

The architecture prioritizes type safety, developer experience, and scalability while maintaining clean separation of concerns between frontend presentation, backend logic, and data persistence layers.