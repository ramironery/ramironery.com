# Repository Guidelines

## Project Structure & Module Organization
- `src/app/` contains the Next.js App Router routes, layouts, and page modules.
- `src/components/` groups reusable UI and layout components (`content/`, `layout/`, `ui/`).
- `src/lib/` holds utilities and content indexing logic.
- `src/types/` stores shared TypeScript types.
- `content/` is the source of Markdown lessons (organized by topic folders like `infra/`).
- `public/` hosts static assets (images, icons).

## Build, Test, and Development Commands
- `npm run dev` starts the local dev server at `http://localhost:3000`.
- `npm run build` creates the production build.
- `npm run start` serves the production build locally.
- `npm run lint` runs ESLint (Next.js core-web-vitals + TypeScript rules).

## Coding Style & Naming Conventions
- Language: TypeScript + React (Next.js 16 App Router).
- Indentation: 2 spaces, no tabs (match existing files).
- File naming: use `kebab-case` for route segments and `PascalCase` for React components.
- Imports: prefer the `@/*` alias for app code (see `tsconfig.json`).
- Styling: Tailwind CSS v4 via PostCSS (see `postcss.config.mjs`).

## Testing Guidelines
- No automated test framework is configured yet.
- If you add tests, document the runner and update this file with the command to execute them.

## Commit & Pull Request Guidelines
- Commit history uses short, descriptive messages (often in Portuguese) without a strict convention.
- Prefer clear, imperative summaries (e.g., `ajusta layout da pagina inicial`).
- PRs should include: a concise description, linked issue (if any), and screenshots for UI changes.

## Configuration Tips
- Required Node.js: >= 20.
- Content is Markdown-driven; keep front matter consistent when adding new lessons.

## Active Technologies
- TypeScript, Node.js >= 20, Next.js App Router 16 + Next.js, React, Tailwind CSS v4 (PostCSS) (001-home-page-medium)
- Arquivos Markdown em /home/ramiro/Documentos/Projetos/hub-ti/hub-ti/content (indexador local) (001-home-page-medium)

## Recent Changes
- 001-home-page-medium: Added TypeScript, Node.js >= 20, Next.js App Router 16 + Next.js, React, Tailwind CSS v4 (PostCSS)
