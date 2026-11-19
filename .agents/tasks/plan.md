# Implementation Plan: GeeksforGeeks-Style Homepage Redesign

## Overview
Complete homepage redesign from editorial/corporate style to GeeksforGeeks educational platform style. The redesign preserves LogicEMB branding (colors, logo, content) but adopts GFG's clean, content-focused layout patterns with card grids, horizontal navigation, search-first UI, and educational article/course presentation.

## Design Decisions

**Color System**: Keeping LogicEMB's Deep Navy (#071A30) for primary text and Signal Orange (#FF9418) for CTAs/accents. Replacing editorial dark backgrounds with clean white/light-gray backgrounds typical of educational platforms.

**Typography**: Removing IBM Plex Mono and Manrope. Using only Inter for all text (no technical monospace labels). This matches GFG's clean, readable approach.

**Layout Philosophy**: Replacing large editorial sections with compact card grids, horizontal layouts, and dense information presentation. No eyebrow tags like "[ 02 ] WHO WE ARE", no technical telemetry bars, no code snippet windows in divisions.

**Component Strategy**: Building GFG-style reusable components (TopicCard, ArticleCard, CourseCard, TagButton) that can be used across pages, not one-off editorial sections.

---

## Implementation Steps

- [ ] 1. **Update Tailwind config to remove technical/editorial design tokens and add GFG-style utility classes.**
      Remove font-mono references, add clean educational platform colors (light grays, pastel category colors), update shadows for card hover effects.
      Files: `tailwind.config.ts`
      Verify: Run `npm run build` — build completes without errors.

- [ ] 2. **Update root layout to remove IBM Plex Mono font, keep only Inter.**
      Remove `plexMono` font import and variable, remove from html className, update body to use Inter only.
      Files: `app/layout.tsx`
      Verify: Run `npm run dev` and inspect page source — only Inter font loaded, no IBM Plex Mono.

- [ ] 3. **Simplify global CSS: remove editorial classes (font-mono-tech, container-editorial, eyebrow-tag) and technical styling.**
      Keep base Tailwind, scrollbar styling, basic resets. Remove all `.font-mono-tech` and editorial utility classes.
      Files: `app/globals.css`
      Verify: Run `npm run build` — no CSS warnings about unused classes.

- [ ] 4. **Redesign Header component to match GFG style: white background, horizontal nav, search bar, Login/Sign Up buttons.**
      Structure:
      - White bg with 1px bottom border (#E0E0E0)
      - Logo left: `/only logo.png` + "LogicEMB" text (no subtitle)
      - Horizontal nav: Tutorials | Courses | PCB Design | Embedded | Python | Projects
      - Center: Search input with magnifying glass icon
      - Right: "Login" (outline button) + "Sign Up" (orange filled)
      - Sticky with shadow on scroll
      - Mobile: hamburger menu
      Remove top telemetry bar, remove dropdown menus initially (flat nav).
      Files: `components/layout/Header.tsx`
      Verify: Run `npm run dev`, navigate to localhost — header displays with GFG styling, no console errors.

- [ ] 5. **Redesign Footer to match GFG dark footer style: dark background, 4-column links, newsletter input.**
      Structure:
      - Dark bg (#1A1A2E or #2C3E50)
      - 4 columns: Company (About, Vision, Contact), Learning (Tutorials, Courses, Guides), Engineering (PCB, Embedded, Projects), Connect (newsletter input)
      - White/light-gray link text
      - Bottom: copyright + social icon placeholders
      Remove top telemetry band, remove technical metadata, remove mono-tech font classes.
      Files: `components/layout/Footer.tsx`
      Verify: Run `npm run dev` — footer renders with dark theme, links readable, no technical bars.

- [ ] 6. **Update constants file to restructure data for new GFG-style sections.**
      Changes:
      - Add `POPULAR_TOPICS` array (8 topics: Python, C/C++, PCB Design, Embedded Systems, Electronics, JavaScript, Microcontrollers, Projects) with emoji icons, article counts
      - Update `EDITORIAL_ARTICLES` to add category badge colors (orange, blue, green)
      - Add `RECOMMENDED_COURSES` array (3 courses with instructor, difficulty, description)
      - Add `POPULAR_TAGS` array (STM32, PCB Layout, Python, Arduino, ESP32, UART, I2C, etc.)
      - Remove or simplify `DIVISIONS` code snippets (keep title/description only)
      - Simplify `CAPABILITIES` to remove technical specs grids
      Files: `lib/constants.ts`
      Verify: Run TypeScript check `npx tsc --noEmit` — no type errors.

- [ ] 7. **Create TopicCard component for "Popular Topics" section (GFG category cards).**
      Component structure:
      - Props: `{ title: string; icon: string; articleCount: number; bgColor: string; href: string }`
      - White card with rounded corners (rounded-lg)
      - Colored icon/emoji at top
      - Topic name (font-semibold)
      - Article count badge (small gray)
      - Hover: lift shadow + orange border
      Files: `components/features/TopicCard.tsx` (new file)
      Verify: Import in a test page, render with sample data — card displays correctly with hover effects.

- [ ] 8. **Create ArticleCard component for "Latest Articles" section (GFG article list style).**
      Component structure:
      - Props: `{ category: string; categoryColor: string; title: string; excerpt: string; author: string; date: string; readTime: string; href: string }`
      - White bg, border, rounded
      - Category badge pill (small, colored)
      - Title (2-line clamp, font-semibold)
      - Excerpt (3-line clamp, text-sm, muted)
      - Footer: author + date + read time (text-xs)
      - Hover: shadow lift
      Files: `components/features/ArticleCard.tsx` (update existing or create new)
      Verify: Render with sample data — card layout matches GFG style, text clamps properly.

- [ ] 9. **Create CourseCard component for "Recommended Courses" section.**
      Component structure:
      - Props: `{ title: string; description: string; instructor: string; difficulty: string; icon: string; href: string }`
      - White card with border
      - Icon/emoji thumbnail left
      - Title + description (text-sm)
      - Instructor name + difficulty badge
      - "Enroll Free" orange button bottom right
      - Horizontal layout (flex row on desktop)
      Files: `components/features/CourseCard.tsx` (new file)
      Verify: Render with sample data — horizontal layout displays, button positioned correctly.

- [ ] 10. **Create TagButton component for "Popular Tags" section (GFG tag cloud).**
      Component structure:
      - Props: `{ label: string; href: string }`
      - Rounded-full button
      - Light gray bg (#F5F5F5), dark text (#333)
      - Hover: orange bg, white text
      - Small padding (px-3 py-1.5), text-xs
      Files: `components/ui/TagButton.tsx` (new file)
      Verify: Render multiple in a flex-wrap container — tags wrap properly, hover works.

- [ ] 11. **Redesign homepage hero section to GFG two-column layout: left content (headline, search, stats), right image.**
      Structure:
      - Remove full-width overlay hero
      - Two-column grid: 55% left, 45% right
      - Left: H1 "Learn Electronics & Programming the Right Way", subtext, search bar with orange button, 4 stat badges (Articles: 500+, Learners: 10K+, Topics: 50+, Projects: 100+)
      - Right: `hero-img.webp` as contained image (not background cover)
      - Light background (#F9F9F9 or white)
      - CTA buttons: "Explore Tutorials" (orange solid), "View Courses" (outline)
      - NO bold except H1 headline
      Files: `app/page.tsx` (sections 01)
      Verify: Run dev server, check homepage — hero displays in two columns, image visible, stats readable.

- [ ] 12. **Replace "Company Introduction" section with "Popular Topics" section (8 category cards in 4-column grid).**
      Structure:
      - Section heading: "Explore Topics" (text-2xl, font-semibold, mb-6)
      - 8 TopicCard components in grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4
      - Cards: Python, C/C++, PCB Design, Embedded Systems, Electronics, JavaScript, Microcontrollers, Engineering Projects
      - Each card uses TopicCard component from step 7
      Files: `app/page.tsx` (replace section 02)
      Verify: Homepage displays 8 topic cards in responsive grid, hover effects work.

- [ ] 13. **Replace "Core Business Divisions" section with "Latest Articles" section (6 article cards in 3-column grid).**
      Structure:
      - Heading: "Latest Articles" with "View All →" link (top right)
      - 6 ArticleCard components in grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6
      - Use existing `EDITORIAL_ARTICLES` data (add 2 more dummy articles to reach 6)
      - Each card uses ArticleCard component from step 8
      Files: `app/page.tsx` (replace section 03)
      Verify: Homepage displays 6 article cards, category badges colored, excerpts clamped.

- [ ] 14. **Replace "Engineering Capabilities" section with "Popular Tags" section (tag cloud wrapped).**
      Structure:
      - Heading: "Popular Tags" (text-2xl, font-semibold, mb-4)
      - Flex-wrap container with gap-2
      - 20+ TagButton components (STM32, PCB Layout, Python, Arduino, ESP32, Oscilloscope, Op-Amp, MOSFET, UART, I2C, SPI, FreeRTOS, etc.)
      - Uses TagButton component from step 10
      Files: `app/page.tsx` (replace section 04)
      Verify: Homepage displays wrapped tag buttons, hover changes color to orange.

- [ ] 15. **Replace "Learning Ecosystem" section with "Recommended Courses" section (3 course cards horizontal).**
      Structure:
      - Heading: "Recommended Courses" (text-2xl, font-semibold, mb-6)
      - 3 CourseCard components in grid-cols-1 lg:grid-cols-3 gap-6
      - Sample courses: "PCB Design Fundamentals", "Embedded C Programming", "Python for Hardware Testing"
      - Each card uses CourseCard component from step 9
      Files: `app/page.tsx` (replace section 05)
      Verify: Homepage displays 3 course cards, horizontal layout on desktop, buttons visible.

- [ ] 16. **Remove "Engineering Showcase" section entirely (section 06).**
      This section is too editorial/corporate for GFG style. Content can be moved to dedicated Projects page later.
      Files: `app/page.tsx` (delete section 06)
      Verify: Homepage renders without showcase section, no broken imports.

- [ ] 17. **Simplify "Knowledge & Insights" section or remove (section 07 — optional based on space).**
      Decision: Keep a simplified version below courses as "Featured Articles" with 2 large cards side-by-side (same as Latest Articles but fewer).
      Files: `app/page.tsx` (simplify section 07)
      Verify: Homepage displays 2 featured article cards, visually distinct from latest articles section.

- [ ] 18. **Replace "Final Brand Statement" section with "Newsletter/CTA Strip" (email signup).**
      Structure:
      - Centered section with light gray bg (#F5F5F5)
      - Heading: "Stay Updated with LogicEMB" (text-xl, font-semibold)
      - Subtext: "Get the latest tutorials, articles, and courses delivered to your inbox."
      - Email input + orange "Subscribe" button (horizontal flex)
      - Simple, compact, no dark bg
      Files: `app/page.tsx` (replace section 08)
      Verify: Homepage displays newsletter section, input and button aligned horizontally.

- [ ] 19. **Clean up homepage: remove all editorial styling classes (font-mono-tech, eyebrow-tag, technical metadata).**
      Go through entire `app/page.tsx` and remove:
      - All `font-mono-tech` classes
      - All eyebrow tags like `[ 02 ] WHO WE ARE`
      - All technical metadata displays (SPEC numbers, REV codes, telemetry bands)
      - All code snippet windows
      - Replace font-semibold/font-bold usage: only use bold for H1 in hero, keep other headings semibold
      Files: `app/page.tsx`
      Verify: Run dev server, inspect homepage — no monospace fonts, no technical overlays, clean educational look.

- [ ] 20. **Update navigation constants to match new flat structure (no dropdown initially).**
      Simplify `NAVIGATION_ITEMS` in constants to flat links for GFG-style horizontal nav:
      - Home, Tutorials, Courses, PCB Design, Embedded, Python, Projects, About, Contact
      - Remove nested `items` arrays initially (can add dropdown later if needed)
      Files: `lib/constants.ts`
      Verify: Header renders flat horizontal nav, no dropdown menus.

- [ ] 21. **Add sample data for new sections to constants file.**
      Add to `lib/constants.ts`:
      - `POPULAR_TOPICS` (8 items with icons, counts, links)
      - `RECOMMENDED_COURSES` (3 items with instructors, difficulty)
      - `POPULAR_TAGS` (20+ string array)
      - Expand `EDITORIAL_ARTICLES` to 6 items (add 2 more)
      Files: `lib/constants.ts`
      Verify: TypeScript check passes, data structure correct.

- [ ] 22. **Final homepage integration: assemble all new sections in order.**
      Homepage section order:
      1. Hero (two-column with search)
      2. Popular Topics (8 cards grid)
      3. Latest Articles (6 cards grid)
      4. Popular Tags (wrapped buttons)
      5. Recommended Courses (3 cards)
      6. Featured Articles (2 large cards, optional)
      7. Newsletter CTA (email signup)
      All sections use components built in previous steps.
      Files: `app/page.tsx`
      Verify: Run dev server, scroll through entire homepage — all sections render in order, no layout breaks.

- [ ] 23. **Responsive testing: verify mobile, tablet, desktop layouts.**
      Test breakpoints:
      - Mobile (< 640px): single column for all grids
      - Tablet (640px - 1024px): 2 columns for topics/articles, stacked hero
      - Desktop (> 1024px): 4 columns topics, 3 columns articles, side-by-side hero
      Adjust Tailwind grid classes if needed.
      Files: `app/page.tsx`, all component files
      Verify: Open dev server, use browser responsive mode — layouts adapt properly at all breakpoints.

- [ ] 24. **Accessibility check: ensure all interactive elements have proper labels and keyboard navigation.**
      - Add aria-labels to search inputs
      - Ensure all links have descriptive text (no "click here")
      - Verify tab order is logical
      - Check color contrast ratios (navy on white, orange buttons)
      Files: `components/layout/Header.tsx`, `app/page.tsx`
      Verify: Run axe DevTools or Lighthouse accessibility audit — no critical issues.

- [ ] 25. **Performance check: optimize images and remove unused code.**
      - Verify hero-img.webp is optimized (already .webp format)
      - Remove unused imports from page.tsx (old icons, removed constants)
      - Check bundle size with `npm run build`
      Files: `app/page.tsx`, all components
      Verify: Run `npm run build` — build size reasonable (< 500KB first load JS), no warnings about large images.

- [ ] 26. **Final build verification: ensure production build succeeds with no errors or warnings.**
      Run full production build, check for:
      - No TypeScript errors
      - No missing image warnings
      - No unused CSS warnings
      - No hydration errors
      Command: `npm run build && npm run start`
      Files: N/A (build verification)
      Verify: Build completes successfully, start server runs without errors, visit homepage — all sections render correctly in production mode.

---

## Summary

This plan transforms the LogicEMB homepage from an editorial/corporate design to a GeeksforGeeks-style educational platform. The key changes are:

1. **Typography**: Inter only, no IBM Plex Mono or Manrope
2. **Layout**: Card grids instead of large editorial sections
3. **Components**: Reusable TopicCard, ArticleCard, CourseCard, TagButton
4. **Navigation**: Flat horizontal nav with search bar, Login/Sign Up buttons
5. **Sections**: Hero → Popular Topics → Latest Articles → Popular Tags → Recommended Courses → Newsletter
6. **Styling**: Clean white backgrounds, subtle shadows, orange CTAs, no technical overlays

All existing functionality (routing, Next.js SSR, responsive design) is preserved while completely redesigning the visual presentation and content structure.
