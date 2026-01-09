# WaveMind Solutions Website

## Overview

This is a corporate website for WaveMind Solutions, an IT service and digital innovation company founded in 2023. The website showcases the company's services, leadership team, and provides a contact form for potential clients. It's built as a full-stack application with a React frontend and Express backend, using PostgreSQL for data persistence.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack React Query for server state
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: shadcn/ui component library (Radix UI primitives)
- **Animations**: Framer Motion for page transitions and scroll animations
- **Forms**: React Hook Form with Zod validation
- **Fonts**: Inter (body text) and Outfit (display headings)

The frontend follows a page-based structure with shared components:
- Pages: Home, About, Services, Leadership, Contact, 404
- Shared components: Navbar, Footer, ServiceCard
- UI components live in `client/src/components/ui/`

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database ORM**: Drizzle ORM with PostgreSQL
- **API Design**: Type-safe route definitions in `shared/routes.ts` with Zod schemas
- **Build System**: Vite for frontend, esbuild for backend bundling

The backend serves both the API and static frontend assets in production. In development, Vite provides HMR for the frontend.

### Shared Code
The `shared/` directory contains code used by both frontend and backend:
- `schema.ts`: Drizzle database schemas and Zod validation schemas
- `routes.ts`: API route definitions with input/output types

### Database Schema
Currently has one table:
- `contact_messages`: Stores contact form submissions (firstName, lastName, companyName, country, message, createdAt)

### Build and Development
- **Development**: `npm run dev` runs the Express server with Vite middleware
- **Production Build**: `npm run build` bundles both client (Vite) and server (esbuild)
- **Database Migrations**: `npm run db:push` uses Drizzle Kit to push schema changes

## External Dependencies

### Database
- **PostgreSQL**: Primary database, connection via `DATABASE_URL` environment variable
- **Drizzle ORM**: Type-safe database access with automatic schema inference

### UI/Design
- **Radix UI**: Headless UI primitives for accessible components
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library

### Form Handling
- **React Hook Form**: Form state management
- **Zod**: Schema validation (shared between frontend and backend)
- **@hookform/resolvers**: Zod integration for React Hook Form

### Animation
- **Framer Motion**: Animation library for React

### Build Tools
- **Vite**: Frontend build tool with HMR
- **esbuild**: Fast JavaScript bundler for server code
- **TypeScript**: Type checking across the entire codebase

### Replit-Specific
- **@replit/vite-plugin-runtime-error-modal**: Development error overlay
- **@replit/vite-plugin-cartographer**: Development tooling