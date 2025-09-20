# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a dual-platform medical/therapy application called "Movio Terapia Lara" with:

1. **Web Application** (Next.js): Main project in root directory - doctor/therapist booking interface built with v0.app
2. **Mobile Application** (React Native/Expo): Located in `movio-terapialara-mobile/` directory - mobile companion app

Both applications share the same medical booking theme but are separate codebases with different technology stacks.

## Development Commands

### Web Application (Root Directory)
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Mobile Application (movio-terapialara-mobile/)
```bash
cd movio-terapialara-mobile
npm install          # Install dependencies
npm start            # Start Expo development server
npm run android      # Run on Android emulator
npm run ios          # Run on iOS simulator
npm run web          # Run on web
npm run lint         # Run ESLint
npm run reset-project # Reset to blank template
```

## Architecture & Technology Stack

### Web Application
- **Framework**: Next.js 14 with App Router
- **UI Components**: Shadcn/ui with Radix UI primitives
- **Styling**: Tailwind CSS v4
- **Fonts**: Geist Sans & Mono
- **Analytics**: Vercel Analytics
- **Build Tool**: Next.js built-in bundler
- **Component Library**: Custom components in `components/ui/`

### Mobile Application  
- **Framework**: Expo ~54.0.6 with Expo Router
- **Navigation**: React Navigation v7 with bottom tabs
- **Styling**: NativeWind (Tailwind for React Native)
- **Icons**: Expo Vector Icons & Lucide React Native
- **Platform Support**: iOS, Android, Web
- **State Management**: React hooks (no external state library)

## Key File Structure

### Web App
- `app/` - Next.js App Router pages and layouts
- `components/ui/` - Reusable Shadcn/ui components
- `components/` - Custom components (theme-provider, etc.)
- `lib/utils.ts` - Utility functions
- `public/` - Static assets (doctor images, placeholders)

### Mobile App
- `app/` - Expo Router file-based routing
- `app/(tabs)/` - Tab navigation screens (appointments, book, explore, etc.)
- `components/` - Reusable React Native components
- `assets/` - Images and static resources
- `constants/` - Theme and color definitions
- `hooks/` - Custom React hooks

## Component Patterns

### Web Components
- Use Shadcn/ui component variants with `className` prop
- Leverage Radix UI primitives for accessibility
- Follow the established component composition pattern
- Import path aliases: `@/components`, `@/lib`, `@/hooks`

### Mobile Components
- Use NativeWind classes for styling
- Expo Router for navigation with file-based routing
- Custom themed components in `components/themed-*`
- Platform-specific code with `.ios.tsx` and `.web.tsx` suffixes

## Important Configuration Notes

- **Web**: TypeScript and ESLint errors are ignored during builds (see `next.config.mjs`)
- **Mobile**: Uses Expo's TypeScript configuration with strict mode
- **Styling**: Both apps use Tailwind-based styling systems
- **Navigation**: Web uses Next.js routing, Mobile uses Expo Router with tabs
- **Icons**: Web uses Lucide React, Mobile uses Lucide React Native

## Application Features

### Implemented Pages
- **Home Page** (`/`): Landing page with hero section, services, testimonials, contact form
- **Appointment Booking** (`/agendamento`): 4-step booking process with service selection, date/time picker, patient info, and confirmation
- **Professional Dashboard** (`/dashboard`): Admin interface for Lara Movió to manage patients, appointments, and medical records

### Key Components
- **Patient Registration**: Complete form with personal data, medical history, and therapy preferences
- **Appointment System**: Smart scheduling with availability checking and automated reminders
- **Medical Records**: Digital patient files with session notes and progress tracking
- **Payment Integration**: Ready for integration with Brazilian payment systems (PIX, credit cards)

### Design System
- **Color Palette**: Professional blue gradient theme (#1e40af to #3b82f6)
- **Animations**: CSS keyframes for floating, fade-in, slide-up, and scale effects
- **Responsive Design**: Mobile-first approach with tablet and desktop breakpoints
- **Accessibility**: ARIA labels, keyboard navigation, screen reader support

## Development Workflow

1. For web changes: Work in root directory
2. For mobile changes: Work in `movio-terapialara-mobile/` directory  
3. Both projects have independent `node_modules` and `package.json`
4. Test on multiple platforms for mobile (use simulators/emulators)
5. Web app is deployed via Vercel and synced with v0.app
6. Run `npm run dev` to start development server on http://localhost:3000
7. Use `npm run build` before deploying to production
8. Check `npm run lint` for code quality issues