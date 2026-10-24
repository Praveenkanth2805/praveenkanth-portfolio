# Praveenkanth Portfolio — Technical Specification

## 1. Project Overview

**Project:** Praveenkanth Personal Portfolio

**Goal:** Build a modern, responsive, multi-page developer portfolio showcasing software projects, technical skills, development journey, and AI-assisted development workflow.

**Target audience:**
- Recruiters and hiring managers
- Software development teams
- Potential clients
- Developer communities

**Core principles:**
- Tailwind CSS only for styling.
- Maintainable, reusable components.
- Data-driven project management.
- SEO-friendly page content.
- Responsive and accessible UI.
- Five distinct, switchable design themes.
- No unnecessary backend or paid API dependencies.
- Never invent project details, achievements, links, or credentials.

## 2. Technology Stack

| Technology | Purpose |
|---|---|
| Next.js App Router | Application framework and routing |
| TypeScript | Type safety |
| Tailwind CSS v4 | All UI styling |
| React | Interactive components and state |
| Lucide React | Icons |
| Browser localStorage | Theme persistence |
| GitHub Public API | Optional public profile information |
| Git and GitHub | Version control |
| Vercel | Hosting and deployment |

Use compatible stable versions when initializing the project.

### Strict Styling Rule

**Tailwind CSS utilities only. No custom CSS.**

- Use Tailwind classes through `className` for all component styling.
- Do not use inline CSS through React `style` props.
- Do not create CSS Modules or separate component CSS files.
- Do not write custom CSS selectors, keyframes, or media queries.
- Do not use `<style>` blocks.
- Do not introduce a second styling framework.
- Use Tailwind responsive variants such as `sm:`, `md:`, `lg:`, and `xl:`.
- Use Tailwind state variants such as `hover:`, `focus-visible:`, `active:`, and `disabled:`.
- Use Tailwind v4-supported theme and utility configuration for reusable styling.
- Use React state and event handlers for interactions that cannot be achieved with CSS utilities alone.

The `src/app/globals.css` file must contain only:

```css
@import "tailwindcss";
```

No custom CSS rules should be added to this file.

Do not use JavaScript-generated inline styles as a workaround. Theme changes should be implemented using Tailwind-supported class strategies and React state.

## 3. Project Folder Structure

```text
praveenkanth-portfolio/
├── public/
│   ├── projects/
│   │   ├── attendance.png
│   │   ├── food-ordering.png
│   │   ├── uzhavar-neradi.png
│   │   └── ui-showcase.png
│   ├── certificates/
│   ├── icons/
│   └── og/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── globals.css
│   │   ├── not-found.tsx
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── projects/
│   │   │   └── page.tsx
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   ├── sitemap.ts
│   │   └── robots.ts
│   ├── components/
│   │   ├── layout/
│   │   ├── navigation/
│   │   ├── themes/
│   │   ├── home/
│   │   ├── about/
│   │   ├── projects/
│   │   ├── contact/
│   │   └── shared/
│   ├── data/
│   │   ├── projects.ts
│   │   ├── skills.ts
│   │   ├── certifications.ts
│   │   ├── journey.ts
│   │   └── site.ts
│   ├── hooks/
│   ├── lib/
│   └── types/
├── TECH_SPEC.md
├── README.md
└── package.json
```

Folder names may be adjusted during implementation, but keep content data separate from reusable UI components.

The project preview filenames are planned names. Add the files only when genuine screenshots or correctly identified illustrations are available.

## 4. Website Routes

| Route | Purpose |
|---|---|
| `/` | Home |
| `/about` | About and skills |
| `/projects` | All projects |
| `/contact` | Contact details |
| Invalid routes | Custom 404 page |

Use Next.js App Router and a shared root layout.

## 5. Design System

### Default Theme: Midnight Indigo

- Dark navy backgrounds.
- Indigo accent colors.
- White primary text.
- Muted secondary text.
- Subtle gradients and ambient visual effects.
- Clear borders and readable surfaces.

### Five Available Themes

1. Midnight Indigo
2. Glassmorphism
3. Claymorphism
4. Retrofuturism
5. Y2K
6. Flat Design

The list above represents the five themes plus the default theme. Midnight Indigo is the default and is counted as one of the five; therefore, the actual implementation must contain exactly these five themes:

1. Midnight Indigo
2. Glassmorphism
3. Claymorphism
4. Retrofuturism
5. Y2K
6. Flat Design

**Theme count correction for implementation:** Use Midnight Indigo, Glassmorphism, Claymorphism, Retrofuturism, Y2K, and Flat Design only if six themes are intentionally approved. Otherwise, preserve the original requirement of five themes by treating Flat Design as the fifth alternative and Midnight Indigo as the default palette. The initial build must follow the original five-theme requirement, not silently add a sixth.

### Theme Visual Direction

| Theme | Style |
|---|---|
| Midnight Indigo | Dark navy, indigo, subtle gradients |
| Glassmorphism | Translucent surfaces, blur-like visual treatment, soft borders |
| Claymorphism | Soft shapes, rounded surfaces, dimensional shadows |
| Retrofuturism | Dark surfaces, neon accents, grid-inspired visuals |
| Y2K | Glossy visual treatment, bright gradients, playful details |
| Flat Design | Solid surfaces, clear typography, minimal decoration |

Theme names and exact theme count must be finalized consistently in the theme selector before implementation.

### Theme Implementation

- Use Tailwind utility classes for theme-dependent appearance.
- Use React state to store the active theme.
- Apply theme-specific Tailwind class combinations through conditional class names.
- Persist the selected theme using localStorage.
- Default to Midnight Indigo on first visit.
- Restore the saved selection on later visits.
- Make all shared components and pages respond to theme changes.
- Use a compact theme dropdown with a theme name and icon.
- Use smooth transitions with Tailwind transition utilities.
- Keep transitions approximately 300 ms where appropriate.
- Avoid animations that delay navigation or hide content.

Do not use inline styles or custom CSS variables to implement component styling.

## 6. Global Layout

### Desktop

Use a collapsible sidebar and top toolbar.

**Sidebar**
- PK initials avatar.
- Name and professional role.
- Home, About, Projects, Contact navigation.
- Expanded state displays icons and labels.
- Collapsed state displays icons with accessible labels/tooltips.
- No social links in the sidebar.

**Toolbar**
- Sidebar toggle.
- Current page title.
- Theme selector.

### Mobile

- Sidebar becomes a slide-out drawer.
- Close on navigation.
- Close when clicking outside.
- Close with Escape.
- Keep controls touch-friendly.
- Prevent unwanted horizontal overflow.
- Keep the theme selector accessible.

Use Tailwind responsive classes to implement the layout.

## 7. Home Page

### Hero Section

Desktop:
- Introduction on the left.
- Interactive terminal on the right.

Mobile:
- Introduction first.
- Terminal underneath.

Initial headline:

**Praveenkanth — Software Developer & AI-Assisted Developer**

Supporting text:

**Full-Stack Web & Mobile Applications**

Use accurate professional content. Do not claim experience or expertise that has not been verified.

### Hero Animation

- Typing effect with a blinking cursor.
- Keep essential text present in the rendered HTML.
- Avoid delaying SEO-visible content.
- Provide an accessible reduced-motion alternative.

Implement the effect with React state and Tailwind animation utilities. Do not add custom CSS keyframes.

### Interactive Terminal

Frontend-only simulation. No shell execution, backend, or database.

Supported commands:
- `help`
- `about`
- `skills`
- `projects`
- `contact`

Requirements:
- Text input.
- Enter to execute a command.
- Quick-command buttons.
- Show the latest result only.
- Display helpful feedback for invalid commands.
- Use predefined responses from local project data.
- Never execute arbitrary user input.
- Keep the terminal responsive on mobile.

### Featured Projects

Display four projects:

1. Attendance Management System
2. Online Food Ordering System
3. Uzhavar Neradi
4. UI Style Showcase

Use a `featured` property in the project data to control homepage visibility.

### Skills Summary

Show a compact collection of technology chips.

### CTA Buttons

- View Projects
- Contact Me

## 8. About Page

Section order:

1. Introduction
2. Skills
3. Development Journey
4. AI-Assisted Workflow
5. GitHub Profile Summary
6. Certifications

Use existing verified information only.

### Introduction

Describe:
- Computer Science education.
- Software development interests and experience.
- Web and mobile development.
- AI-assisted development workflow.
- Focus on practical applications and continuous improvement.

Avoid unsupported claims about professional experience, expertise, or production readiness.

### Skills

Organize technologies into:

- Frontend
- Backend
- Databases
- AI & Automation
- Tools & Platforms

Display icons and technology names.

Interactions:
- Subtle lift and glow on hover.
- Small icon movement.
- Brief touch feedback on mobile.
- Names remain visible.
- No percentage-based proficiency bars.
- No unsupported proficiency labels.

Store the data in `src/data/skills.ts`.

### Development Journey Timeline

Each milestone contains:
- Verified year/date.
- Milestone title.
- Short description.

Animation:
- Start when the timeline enters the viewport.
- Animate progress from the first milestone to the last.
- Duration around 3–4 seconds.
- Play only once.
- Respect reduced-motion preferences.
- Do not invent milestones or dates.

Use React state and Tailwind-supported utility animations. No custom CSS keyframes.

### AI-Assisted Workflow

Create an interactive pipeline:

1. Understand Requirements
2. Design UI and Architecture
3. AI-Assisted Scaffolding
4. Development
5. API Integration
6. Database Integration
7. Testing and Debugging
8. Deployment and Improvement

Selecting a stage updates the active stage and simulated terminal output.

- No actual command execution.
- No backend required.
- Use local predefined data.
- Keep output immediately readable.
- Use Tailwind classes for visual states and transitions.

### GitHub Profile

- Display a verified public profile link.
- Show public profile information where available.
- Use the GitHub public API if useful.
- Cache data where practical.
- Handle rate limits and network errors gracefully.
- Provide a static fallback.
- Do not show repository cards in the initial version.
- Never invent a GitHub username or profile URL.

### Certifications

Use a responsive card grid with:
- Certification name.
- Issuer.
- Icon.

Cards are non-clickable in the initial version.

Only include genuine certifications.

## 9. Projects Page

### Layout

- Responsive masonry-style layout.
- Equal visual status for all projects.
- No featured badges.
- No ranking labels.
- No search/filter controls initially.
- Technology and category tags where useful.

### Project Data

Store all project content in `src/data/projects.ts`.

```ts
export type Project = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  categories: string[];
  image?: string;
  imageType?: "screenshot" | "illustration";
  github?: string;
  liveDemo?: string;
  featured?: boolean;
};

export const projects: Project[] = [];
```

The example array must be populated with verified projects before release.

Home and Projects must consume the same data source.

### Project Cards

- Theme-specific Tailwind classes.
- Lightweight hover effects.
- Touch-friendly behavior.
- Real screenshots where available.
- Illustrations/mockups where screenshots are unavailable.
- Clearly distinguish mockups from real screenshots.

### Project Modal

Clicking a card opens a modal.

Include:
- Preview image.
- Title and description.
- Features.
- Technology chips.
- Categories.
- GitHub link only when verified.
- Live Demo link only when available.

Desktop:
- Preview left.
- Details right.

Mobile:
- Preview above details.

Behavior:
- Close button.
- Escape-key support.
- Outside-click dismissal.
- Internal scrolling for long content.
- Prevent background scrolling.
- Accessible focus handling.
- Restore focus to the triggering card.

Use React state for modal behavior and Tailwind classes for styling.

No separate project detail pages are required.

### Initial Projects

**Attendance Management System with Face Recognition**

Describe only implemented features. Verify recognition workflow, duplicate prevention, storage behavior, and technical architecture before publishing detailed claims.

**Online Food Ordering System**

Describe actual customer, restaurant, admin, order, cart, and payment features. Do not claim incomplete functionality as finished.

**Uzhavar Neradi**

Describe the farmer-to-customer platform and implemented Tamil-language, product, authentication, and payment features accurately.

**UI Style Showcase**

Showcase implemented UI themes, layouts, component styling, and responsive interactions.

## 10. Contact Page

Use modern contact cards and a simulated terminal-style contact section.

Potential cards:
- Email
- GitHub
- LinkedIn
- Location

Rules:
- Show only verified details.
- Email uses a `mailto:` link.
- External profiles open the correct URL.
- No contact form.
- No backend.
- No availability badge.
- Hide missing contact information.

The terminal uses predefined frontend responses only.

## 11. Footer

Create a terminal-inspired footer.

Include:
- Home
- About
- Projects
- Contact
- Copyright.
- Verified social links where available.

Make it responsive and theme-aware using Tailwind utilities.

## 12. 404 Page

Create a terminal-style not-found page.

Include:
- Clear not-found message.
- Return Home link.
- Responsive layout.
- Theme-aware design.
- Keyboard accessibility.

Use Next.js `not-found.tsx` and appropriate routing behavior.

## 13. SEO

SEO is a priority, but search rankings cannot be guaranteed.

### Metadata

Set unique titles and descriptions for all primary pages.

Suggested homepage title:

`Praveenkanth | Software Developer & AI-Assisted Developer`

Suggested description:

`Explore Praveenkanth's software projects, full-stack development skills, and AI-assisted development workflow.`

### Technical SEO

- Semantic HTML.
- Next.js Metadata API.
- Sitemap.
- Robots rules.
- Canonical URLs where appropriate.
- Open Graph metadata.
- Social preview metadata.
- Meaningful image alt text.
- Accurate structured data where applicable.
- Essential content accessible without animations.
- No analytics or tracking scripts initially.

After deployment, verify the website in Google Search Console and submit the sitemap.

## 14. Social Preview Image

Create a portfolio social preview image using:
- Midnight Indigo visual identity.
- Name and professional headline.
- Subtle terminal-inspired graphics.
- Readable typography.

Ensure the referenced image actually exists in the repository.

## 15. Responsive Design

Support:
- Mobile phones.
- Tablets.
- Laptops.
- Desktop monitors.

Requirements:
- Responsive sidebar/drawer.
- Stacked mobile hero.
- Responsive project cards and modal.
- Responsive skill and certification grids.
- Readable typography.
- Touch-friendly controls.
- No unintended horizontal scrolling.
- Lightweight effects on mobile.

Use Tailwind responsive variants. Do not write custom media queries.

## 16. Accessibility

- Semantic HTML landmarks.
- Correct heading hierarchy.
- Keyboard navigation.
- Visible focus states.
- Accessible labels for icon buttons.
- Suitable contrast across themes.
- Escape support for modals and drawers.
- Descriptive image alt text.
- Controls usable without hover.
- Respect reduced-motion settings.
- No essential content hidden behind animations.

Use native HTML semantics, accessible React patterns, and Tailwind utilities.

## 17. Performance and Reliability

- Prefer Server Components by default.
- Use Client Components only where interaction requires them.
- Minimize client-side JavaScript.
- Optimize images.
- Avoid unnecessary dependencies.
- Avoid expensive effects.
- Handle GitHub API failures gracefully.
- Avoid unnecessary external requests.
- Keep the portfolio functional without the GitHub API.

The initial website does not require:
- Database.
- Authentication.
- Custom backend.
- Contact-form service.
- Paid APIs.
- Analytics.

## 18. Data Management

| File | Responsibility |
|---|---|
| `projects.ts` | Project descriptions, technologies, images, links and featured status |
| `skills.ts` | Skill categories, names and icons |
| `certifications.ts` | Certification details |
| `journey.ts` | Genuine milestones |
| `site.ts` | Site identity, navigation and verified links |

Project content must not be duplicated between pages.

Adding a project should normally require editing `projects.ts` and adding the required image asset.

## 19. Content Accuracy

- Do not invent contact details.
- Do not invent repository or live demo URLs.
- Do not invent certifications.
- Do not invent education dates or career milestones.
- Do not claim unimplemented features are complete.
- Clearly distinguish mockups from screenshots.
- Do not overstate professional experience.
- Verify privacy statements about biometric data.
- Hide unavailable details until the owner supplies them.

## 20. Deployment

Use Vercel.

Steps:
1. Initialize the Next.js project.
2. Configure TypeScript and Tailwind CSS v4.
3. Implement the shared layout and themes.
4. Build all primary pages.
5. Add verified content and assets.
6. Configure metadata, sitemap and robots rules.
7. Push the project to GitHub.
8. Connect the repository to Vercel.
9. Deploy and verify the production build.
10. Test navigation, themes, modals, terminal commands and mobile layout.
11. Verify links, assets and SEO metadata.
12. Submit the sitemap to Google Search Console.

The core site must deploy without secrets or backend credentials.

## 21. Complete Implementation Requirement

Build the entire portfolio as one complete project according to this technical specification.

Do not divide implementation into development phases or deliver the website as separate partial versions.

Implement all agreed features together, including:

- Complete Next.js, TypeScript and Tailwind CSS v4 setup.
- All agreed pages and shared layouts.
- All five themes, theme selector and persistent theme preferences.
- Responsive sidebar, mobile drawer and toolbar.
- Home page, hero animations and interactive frontend-only terminal.
- Featured projects and reusable project cards.
- Projects page and accessible project detail modals.
- About page, skills grid, development timeline and AI workflow.
- GitHub public profile integration with fallback handling.
- Certification cards.
- Contact page and responsive footer.
- Custom 404 page.
- SEO metadata, sitemap, robots rules and social preview metadata.
- Responsive design, accessibility and reduced-motion support.
- Verified project content and available assets.
- Production configuration and Vercel deployment readiness.

### Completion Requirements

- Implement the complete agreed functionality before considering the project finished.
- Ensure every page and interaction works together.
- Test the complete application, including desktop, mobile, themes, navigation, modals, terminal commands, external links and error states.
- Resolve build errors and integration issues.
- Do not leave placeholder implementations for agreed functionality.
- Do not fabricate missing personal details, project links, certifications or assets. Hide unavailable optional content until genuine information is supplied.
- Keep the project maintainable and follow every technical and styling rule in this specification.

The deliverable is one complete, integrated, production-ready portfolio project, not a series of phase-based implementations.

## 22. Acceptance Criteria

The portfolio is ready when:

- All primary routes work.
- The agreed themes work across all pages.
- Theme preference persists after refresh.
- Desktop and mobile navigation work.
- The simulated terminal accepts only predefined commands.
- Home and Projects use the same project data.
- Project modals support keyboard and touch.
- The About page follows the agreed section order.
- Timeline animations respect reduced motion.
- Skills and certifications display responsively.
- GitHub API failure does not break the site.
- Contact links are verified.
- SEO metadata and sitemap are configured.
- The site builds and deploys successfully.
- No custom CSS, inline CSS, or CSS Modules have been introduced.
- All UI styling uses Tailwind CSS utilities.
- No unsupported claims or fabricated links are published.

## 23. Final Rules

1. This specification is the main development reference.
2. Tailwind CSS utilities are the only styling approach.
3. `globals.css` contains only `@import "tailwindcss";`.
4. No custom CSS selectors, keyframes, inline styles, or separate CSS files.
5. Keep data, components, and application logic separate.
6. Use React state for interactions.
7. Keep the terminal frontend-only and safe.
8. Prioritize accessibility, performance, responsive design, and SEO.
9. Use verified project information and genuine assets.
10. Update this specification if a major requirement changes.

**Final stack:** Next.js + TypeScript + Tailwind CSS v4 + React + Lucide React.

**Hosting:** Vercel.

**Backend:** Not required for the initial version.

**Styling:** Tailwind CSS utilities only.
