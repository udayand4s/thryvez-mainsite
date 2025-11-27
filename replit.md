# ThryvezX - Online Learning Platform

## Overview

ThryvezX is a modern online learning platform built with Next.js 13+ that connects professionals with expert-led courses in growth strategy, product management, and marketing. The platform features a GrowthX-inspired dark theme aesthetic with bold typography, smooth animations, and an emphasis on community-driven learning.

The application is a marketing/landing page style website showcasing courses from industry experts at companies like Google, CRED, Swiggy, and Razorpay. It includes sections for featured courses, testimonials, statistics, FAQ, and newsletter signup.

## Recent Changes (November 2025)

- Redesigned website to match GrowthX.club aesthetic with dark theme (black background, white text)
- Simplified header navigation to only include Home, Courses, and About links
- Created Courses page with mentor photo cards featuring gradient text overlays
- Added FAQ accordion section with smooth expand/collapse animations
- Created About page with team information and company story
- Updated all components to use bold, modern typography

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: Next.js 13+ with App Router
- Uses the modern App Router paradigm with server components by default
- TypeScript for type safety throughout the application
- React Server Components (RSC) enabled for optimal performance

**Styling Strategy**: Tailwind CSS with shadcn/ui component library
- Custom dark theme with black background and white/gray text
- CSS variables for theming defined in `globals.css`
- Component-based UI using Radix UI primitives wrapped by shadcn/ui
- Responsive design with mobile-first approach
- Custom animations and transitions for enhanced UX

**Component Organization**:
- Page components in `app/` directory (page.tsx, layout.tsx, loading.tsx, not-found.tsx)
- Reusable components in `components/` directory
- UI primitives in `components/ui/` from shadcn/ui
- Client components marked with 'use client' directive for interactivity
- Server components used by default for better performance

**State Management**:
- React hooks (useState, useEffect, useRef) for local component state
- No global state management library (Redux, Zustand) currently implemented
- Theme management via next-themes for dark/light mode support

**Animation & Interaction**:
- Intersection Observer API for scroll-based animations
- CSS transitions and transforms for smooth visual effects
- Embla Carousel for testimonial/course carousels
- Progressive reveal animations on scroll

### Routing & Navigation

**Pages Structure**:
- `/` - Home page with hero, courses, testimonials, FAQ
- `/courses` - Courses listing page
- `/about` - About page with team information
- 404 handling with custom not-found page

**Navigation Pattern**:
- Sticky header with responsive mobile menu
- Client-side navigation using Next.js Link components
- Smooth scroll behavior enabled globally

### Forms & Validation

**Form Handling**:
- React Hook Form for form state management
- Zod schemas via @hookform/resolvers for validation
- Custom form components built on Radix UI primitives

### Performance Optimizations

**Build Configuration**:
- ESLint ignored during builds for faster deployment
- Image optimization disabled (unoptimized: true) - likely for compatibility with static hosting
- TypeScript strict mode enabled
- Incremental builds enabled

**Loading States**:
- Skeleton components for loading states
- Dedicated loading.tsx for route-level loading UI
- Lazy loading and code splitting via Next.js automatic optimization

### Design System

**UI Component Library**: shadcn/ui
- Headless UI components from Radix UI
- Customizable with Tailwind CSS
- Accessible by default (ARIA attributes, keyboard navigation)
- Extensive component collection (40+ components available)

**Typography & Icons**:
- Inter font family from Google Fonts
- Lucide React for icon system
- Semantic HTML structure

**Color Palette**:
- Black background (#000000)
- White and gray text with opacity variants
- HSL color system for theming flexibility
- Neutral base color scheme

### Third-Party Integrations

**UI & Animation Libraries**:
- Radix UI: Headless component primitives
- Tailwind CSS: Utility-first styling
- class-variance-authority: Component variant management
- embla-carousel-react: Carousel functionality
- date-fns: Date formatting and manipulation

**Development Tools**:
- TypeScript: Static type checking
- ESLint: Code quality and consistency
- PostCSS with Autoprefixer: CSS processing

## External Dependencies

### Backend Services

**Supabase** (@supabase/supabase-js v2.58.0):
- Integrated but not actively used in current codebase
- Prepared for future authentication, database, and storage needs
- No database schema currently implemented
- No API routes or server actions currently defined

### Potential Future Integrations

Based on the Supabase dependency, the application is architected to support:
- User authentication and authorization
- Course enrollment and progress tracking
- Payment processing for course purchases
- User profiles and preferences
- Comments and community features

### Hosting & Deployment

**Platform Indicators**:
- Development server configured for host 0.0.0.0 on port 5000
- Static export compatible (images unoptimized)
- Likely deployed on Vercel, Netlify, or similar JAMstack platform

### Analytics & Monitoring

No analytics or monitoring services currently integrated, but the architecture supports easy addition of:
- Google Analytics / Plausible
- Error tracking (Sentry)
- Performance monitoring
- User behavior analytics

### Content Management

Currently static content hardcoded in components. Architecture supports future integration with:
- Headless CMS (Contentful, Sanity, Strapi)
- Markdown-based content
- API-driven course data