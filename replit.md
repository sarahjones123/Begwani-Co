# replit.md

## Overview

This is a modern full-stack web application built with React and Express.js, featuring a professional company website for "Begwani & Co., Chartered Accountants." The application follows a monorepo structure with shared schemas and uses modern web technologies including TypeScript, TailwindCSS, and shadcn/ui components.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **Styling**: TailwindCSS with shadcn/ui component library
- **Build Tool**: Vite for development and production builds
- **UI Components**: Radix UI primitives with custom shadcn/ui components

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Schema Management**: Shared TypeScript schemas with Zod validation
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **API Design**: RESTful API with JSON responses

### Key Technologies
- **TypeScript**: Full type safety across frontend and backend
- **ESM**: Modern ES modules throughout the application
- **Framer Motion**: Animation library for smooth UI transitions
- **React Hook Form**: Form handling with Zod validation

## Key Components

### Database Schema
- **Users Table**: Basic user management (id, username, password)
- **Contact Submissions Table**: Stores contact form submissions (name, email, subject, message, timestamp)
- **Validation**: Zod schemas for runtime validation and TypeScript type inference

### API Endpoints
- `POST /api/contact`: Contact form submission endpoint with validation

### UI Components
- **Navigation**: Sticky navigation with smooth scrolling
- **Hero Section**: Carousel with rotating slides and call-to-action
- **Services Section**: Service cards with hover effects
- **About Section**: Company information and team profiles
- **Contact Section**: Contact form with validation and toast notifications
- **Stats Section**: Animated counters with intersection observer

### Storage Layer
- **Interface**: IStorage interface for extensibility
- **Implementation**: Currently using in-memory storage (MemStorage)
- **Database Ready**: Drizzle ORM configured for PostgreSQL transition

## Data Flow

1. **Form Submission**: Contact form → Zod validation → API endpoint → Storage layer
2. **UI Updates**: TanStack Query manages server state and cache invalidation
3. **Real-time Feedback**: Toast notifications for user feedback
4. **Animation**: Framer Motion handles UI transitions and scroll-triggered animations

## External Dependencies

### UI/UX Libraries
- **Radix UI**: Accessible component primitives
- **Lucide React**: Icon library
- **Framer Motion**: Animation library
- **Embla Carousel**: Carousel functionality

### Development Tools
- **Vite**: Build tool and development server
- **ESBuild**: Production bundling
- **PostCSS**: CSS processing
- **Autoprefixer**: CSS vendor prefixing

### Database & Validation
- **Drizzle ORM**: Type-safe database queries
- **Zod**: Schema validation
- **Neon Database**: Serverless PostgreSQL

## Deployment Strategy

### Build Process
- **Frontend**: Vite builds React app to `dist/public`
- **Backend**: ESBuild bundles Node.js server to `dist/index.js`
- **Type Checking**: TypeScript compilation verification

### Development Environment
- **Hot Reloading**: Vite middleware for frontend changes
- **API Logging**: Request/response logging with timing
- **Error Handling**: Comprehensive error boundaries and middleware

### Production Considerations
- **Static Assets**: Frontend served from `dist/public`
- **API Routes**: Express server handles `/api/*` routes
- **Database**: PostgreSQL with connection pooling
- **Environment Variables**: `DATABASE_URL` for database connection

### Monorepo Structure
- **client/**: React frontend application
- **server/**: Express.js backend application
- **shared/**: Common schemas and types
- **Root configs**: Build tools, TypeScript, and dependency management

The application is designed for easy deployment to platforms like Replit, Vercel, or traditional hosting providers with minimal configuration changes.