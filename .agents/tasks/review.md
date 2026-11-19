# LogicEMB Orange Rebrand

The website was rebranded from a green theme (#2f8d46) to an orange/circuit theme (#FF6B00). Three LogicEMB logo variants were added and placed across the site: a transparent SVG with title in the header, a full logo with background in the hero and footer, and an icon-only PNG as the favicon. The Tailwind config, CSS variables, and primary DSA category color were updated to orange. The build exists and the commit message claims zero TypeScript errors.

**Watch for:** Beginner difficulty badges still use Tailwind green-* classes (confirmed), image path with spaces may break in production (likely), no build verification note exists as requested (confirmed), contrast ratio for #FF6B00 on white is below WCAG AA (confirmed).

**Verdict**: NEEDS_CHANGES

## High-level view

All primary orange shades were correctly updated in the Tailwind config and CSS variables, with the DSA category color changed from green to orange. The three logo files exist in the public directory and are referenced in the header (transparent SVG), hero and footer (full background PNG), and layout metadata (icon PNG). However, the DIFFICULTY_COLORS mapping in constants.ts still uses `bg-green-100 text-green-700` for Beginner badges, meaning green Tailwind classes remain in the codebase. The logo image path in the hero section uses a filename with spaces, which Next.js Image will handle but may cause issues if the path is used elsewhere. No build-note.md file exists in .agents/tasks/ as the review instructions specified should be checked. The primary orange (#FF6B00) has a contrast ratio of approximately 3.0:1 against white, falling below the WCAG AA standard of 4.5:1 for normal text.

<details>
<summary>Issues (4)</summary>

1. **Green difficulty badges** — `lib/constants.ts` line 28 maps Beginner difficulty to `bg-green-100 text-green-700`. Replace with orange equivalents: `bg-orange-100 text-orange-700`.

2. **Logo filename with spaces** — The Circuit Learning logo path uses spaces in the filename. Next.js Image handles this, but if the path is copied or used in raw HTML elsewhere, it will break. Rename to `logicemb-circuit-learning-full.png` and update all references.

3. **No build verification note** — The review instructions specified checking `d:\side-agency\web-dev\logicemb\.agents\tasks\build-note.md` for build success, but this file doesn't exist. The commit message claims the build passed, but there's no independent verification.

4. **Contrast ratio below WCAG AA** — #FF6B00 on white is approximately 3.0:1, below the 4.5:1 minimum for normal text. Small orange text on white backgrounds will fail accessibility checks. Use #CC5500 or darker for text, or ensure orange is only used on dark backgrounds or for large UI elements.

</details>

<details>
<summary>Details</summary>

## Green classes in difficulty badges

The DIFFICULTY_COLORS mapping in lib/constants.ts line 28 defines Beginner difficulty as `bg-green-100 text-green-700`. These are Tailwind utility classes that reference the default Tailwind green palette, not the custom primary colors. Beginner difficulty badges will render in green, directly violating the requirement that all green colors be removed.

## Logo filenames with spaces

The Circuit Learning logo filename includes spaces: "LogicEMB Circuit Learning Logo with title and background.png". Next.js Image handles this internally, but if the path is used in non-Next.js contexts or copied elsewhere, it will break. The transparent SVG and icon PNG also have spaces in their names.

## Missing build verification

The review instructions specified checking `build-note.md` in .agents/tasks/ for build success. This file doesn't exist. The commit message claims "Build verified: zero TypeScript errors, no green colors in compiled CSS," but there's no independent verification artifact. A build directory exists (`.next/`), confirming some build ran, but the current state can't be verified without the note or a fresh build.

## Contrast ratio below WCAG AA

The primary brand color #FF6B00 has a contrast ratio of approximately 3.0:1 against white. WCAG AA requires 4.5:1 for normal text and 3.0:1 for large text (18pt+ or 14pt+ bold). Small orange text on white backgrounds fails accessibility checks. The current implementation mostly uses orange for backgrounds (buttons, gradients, badges) or large text, limiting exposure, but any future use of orange for body text or small labels on white will violate accessibility standards. The darker orange #CC5500 (primary-700) has approximately 4.6:1 contrast and should be used for text.

</details>

<details>
<summary>File map</summary>

**Changed files (11):**
- `.agents/tasks/plan.md` — implementation plan document (new)
- `app/globals.css` — CSS variables updated to orange theme
- `app/layout.tsx` — added favicon and theme-color metadata
- `app/page.tsx` — added Circuit Learning logo to hero section
- `components/layout/Footer.tsx` — replaced icon with full Circuit logo
- `components/layout/Header.tsx` — replaced icon with transparent SVG logo
- `lib/constants.ts` — DSA category color changed to orange
- `public/LogicEMB Circuit Learning Logo with title and background.png` — new logo asset (175 KB)
- `public/LogicEMB_logo_with title.svg` — new logo asset (2.4 KB)
- `public/only logo.png` — new logo asset (111 KB)
- `tailwind.config.ts` — primary color palette replaced with orange shades

**Full diff:** `git show a9d7702`

</details>
