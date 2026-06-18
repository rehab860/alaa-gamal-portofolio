# Portfolio Website

A modern, responsive portfolio website showcasing data analytics and engineering projects, including Power BI dashboards, Python exploratory data analysis, and SQL query sets.

## Tech Stack

- **React 19** — UI library
- **TypeScript** — primary language
- **Vite 7** — build tool and dev server
- **Tailwind CSS 4** — styling
- **Radix UI** — accessible UI primitives (dialogs, dropdowns, tooltips, etc.)
- **TanStack React Query** — data fetching and caching
- **Framer Motion** — animations
- **Wouter** — lightweight routing
- **Zod** — schema validation
- **pnpm workspaces** — monorepo dependency management

## Project Structure

```
.
├── artifacts/
│   ├── portfolio/          # Main portfolio app (Vite + React)
│   ├── api-server/         # API server
│   └── mockup-sandbox/     # UI mockup sandbox
├── lib/                    # Shared libraries
├── scripts/                # Build/utility scripts
├── pnpm-workspace.yaml      # Workspace + dependency catalog config
└── package.json             # Root workspace config
```

This repository is a **pnpm monorepo workspace** — it does not use npm or yarn for installs.

## Getting Started

### Prerequisites

- Node.js (LTS recommended)
- pnpm (`npm install -g pnpm` if not already installed)

### Installation

From the repository root:

```bash
pnpm install
```

> **Windows note:** if the `preinstall` script fails with an `sh` error, run `pnpm install --ignore-scripts` instead. The script is a Unix-only safety check and can be safely skipped.

### Running the Portfolio App Locally

Navigate to the portfolio app and start the dev server:

```bash
cd artifacts/portfolio
pnpm dev
```

This app requires two environment variables that are normally provided automatically on Replit. For local development, set them manually:

**Windows (Command Prompt):**
```bash
set PORT=5173 && set BASE_PATH=/ && pnpm dev
```

**macOS/Linux:**
```bash
PORT=5173 BASE_PATH=/ pnpm dev
```



### Building for Production

```bash
cd artifacts/portfolio
PORT=5173 BASE_PATH=/ pnpm build
```

Output is generated in `artifacts/portfolio/dist/public`.


