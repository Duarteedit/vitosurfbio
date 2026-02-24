# Visual Asset Hub

## Overview
A full-stack web application built with React + Express + TypeScript. It features a landing page for "Vitor Surf" men's fashion brand with a premium, visually striking design.

## Project Architecture
- **Frontend**: React 19 with Vite, TailwindCSS v4, Radix UI components, wouter routing
- **Backend**: Express 5 (TypeScript) serving both API and frontend
- **Database**: PostgreSQL via Drizzle ORM
- **Build**: Vite for client, esbuild for server bundling
- **Port**: 5000 (single server for both API and client)

## Project Structure
```
client/          - React frontend (Vite root)
  src/
    components/  - UI components (shadcn/ui based)
    pages/       - Page components
    lib/         - Utilities
server/          - Express backend
  index.ts       - Entry point
  routes.ts      - API routes
  storage.ts     - Data storage layer
  vite.ts        - Vite dev server middleware
  static.ts      - Production static file serving
shared/          - Shared types and schema (Drizzle)
script/          - Build scripts
```

## Key Commands
- `npm run dev` - Development server (port 5000)
- `npm run build` - Production build
- `npm run start` - Production server
- `npm run db:push` - Push schema to database

## Recent Changes
- 2026-02-24: Initial setup in Replit environment
