# Implementation Plan: LogicEMB Orange Rebrand & Logo Placement

## Overview
Replace ALL green colors (#2f8d46 and variants) with an orange/circuit theme and correctly place three logo variants throughout the LogicEMB Next.js website.

**Logo Files Available:**
1. `/public/LogicEMB_logo_with title.svg` — Logo + Title (transparent) → Header
2. `/public/LogicEMB Circuit Learning Logo with title and background.png` — Full logo with background → Hero, Footer
3. `/public/only logo.png` — Icon only → Favicon

**New Brand Colors:**
- Primary Orange: `#FF6B00`
- Orange Hover: `#FF8533`
- Orange Light: `#FFA366`
- Orange Dark: `#CC5500`
- Orange Deep: `#FF4500`
- Circuit Blue (accent): `#00A8E8`
- Text: `#212529`, `#495057`, `#6C757D`
- Background: `#FFFFFF`, `#F8F9FA`
- Border: `#DEE2E6`

---

## Implementation Steps

- [ ] 1. **Replace Tailwind color palette with orange theme**
      Update tailwind.config.ts to replace all green primary colors (DEFAULT: #2f8d46, 50-900 shades) with orange shades, and update gfg.green references to orange equivalents.
      
      **Color Mappings:**
      - `primary.DEFAULT`: `#2f8d46` → `#FF6B00`
      - `primary.50`: `#f0faf2` → `#FFF5F0`
      - `primary.100`: `#d9f2de` → `#FFE8DB`
      - `primary.200`: `#b4e4be` → `#FFD1B3`
      - `primary.300`: `#7ecf91` → `#FFB380`
      - `primary.400`: `#44b25e` → `#FF944D`
      - `primary.500`: `#2f8d46` → `#FF6B00`
      - `primary.600`: `#237036` → `#FF8533`
      - `primary.700`: `#1d5a2c` → `#CC5500`
      - `primary.800`: `#194825` → `#B34B00`
      - `primary.900`: `#163c20` → `#994000`
      - `gfg.green`: `#2f8d46` → `#FF6B00`
      - `gfg.darkGreen`: `#1b5e20` → `#CC5500`
      - `gfg.lightGreen`: `#e8f5e9` → `#FFF5F0`
      
      **Files:** `tailwind.config.ts`
      
      **Verify:** Run `npm run build` and confirm zero TypeScript/build errors

- [ ] 2. **Update CSS variables to orange theme**
      Replace all CSS color variables in globals.css from green to orange values.
      
      **Variable Changes:**
      - `--color-primary`: `#2f8d46` → `#FF6B00`
      - `--color-primary-dark`: `#1b5e20` → `#CC5500`
      - `--color-primary-light`: `#e8f5e9` → `#FFF5F0`
      
      **Files:** `app/globals.css`
      
      **Verify:** Run `npm run build` and inspect the compiled CSS in `.next/static/css/` to confirm orange hex values appear

- [ ] 3. **Update DSA category color in constants**
      Change the DSA category color from green (#2f8d46) to orange (#FF6B00) in the CATEGORIES array.
      
      **Change:**
      - Line 6: `color: '#2f8d46'` → `color: '#FF6B00'`
      
      **Files:** `lib/constants.ts`
      
      **Verify:** Run `npm run build` with zero errors

- [ ] 4. **Replace Header logo with LogicEMB_logo_with title.svg**
      Remove the BookOpen icon placeholder and use the actual logo SVG file. Update the logo to use the SVG with proper sizing for both desktop and mobile views.
      
      **Changes:**
      - Replace the `<div className="w-8 h-8 bg-primary-500...">` with `<img>` tag
      - Logo src: `/LogicEMB_logo_with title.svg`
      - Add alt text: "LogicEMB - Circuit Learning"
      - Set height: h-8 (32px) for desktop, maintain aspect ratio
      - Remove the text "LogicEmb" span element (logo already includes title)
      
      **Files:** `components/layout/Header.tsx`
      
      **Verify:** Run `npm run dev`, open http://localhost:3000, confirm logo appears in header (desktop + mobile menu)

- [ ] 5. **Replace Footer logo with Circuit Learning Logo (full background version)**
      Use the full logo with orange/circuit background in the footer brand section.
      
      **Changes:**
      - Replace the `<div className="w-8 h-8 bg-primary-500...">` and adjacent text span with `<img>` tag
      - Logo src: `/LogicEMB Circuit Learning Logo with title and background.png`
      - Add alt text: "LogicEMB Circuit Learning"
      - Set appropriate sizing (h-12 or h-16)
      - The logo includes title and background, so remove separate text elements
      
      **Files:** `components/layout/Footer.tsx`
      
      **Verify:** Run `npm run dev`, scroll to footer, confirm full logo with background appears

- [ ] 6. **Add favicon using only logo.png**
      Add favicon link in the layout metadata using the icon-only logo variant.
      
      **Changes:**
      - Add favicon link in `<head>` via Next.js metadata
      - Add to metadata object: `icons: { icon: '/only logo.png', apple: '/only logo.png' }`
      - Optionally also add as `/favicon.ico` by copying/converting the PNG
      
      **Files:** `app/layout.tsx`
      
      **Verify:** Run `npm run dev`, check browser tab shows LogicEMB icon

- [ ] 7. **Update layout theme-color meta tag to orange**
      Change the theme-color meta tag from green to primary orange.
      
      **Changes:**
      - Add to metadata in layout.tsx: `themeColor: '#FF6B00'`
      
      **Files:** `app/layout.tsx`
      
      **Verify:** Inspect page source, confirm `<meta name="theme-color" content="#FF6B00">`

- [ ] 8. **Replace Hero section gradient background with orange**
      Update the hero section background gradient from green to orange tones.
      
      **Changes:**
      - Line 13: `from-primary-500 to-primary-700` stays (now resolves to orange after Tailwind config change)
      - Verify gradient displays orange shades, not green
      
      **Files:** `app/page.tsx`
      
      **Verify:** Run `npm run dev`, hero section shows orange gradient background

- [ ] 9. **Use Circuit Learning Logo in Hero section**
      Replace any logo placeholder in the hero with the full Circuit Learning logo with background.
      
      **Consideration:** The current hero doesn't show a logo. Optionally add the Circuit Learning logo (with background) above or next to the H1 title for brand reinforcement.
      
      **Suggested change:**
      - Add `<img src="/LogicEMB Circuit Learning Logo with title and background.png" alt="LogicEMB" className="h-16 md:h-20 mx-auto mb-6" />`
      - Place between container-main opening and Badge
      
      **Files:** `app/page.tsx`
      
      **Verify:** Run `npm run dev`, hero shows Circuit Learning logo

- [ ] 10. **Update CTA/Newsletter section gradient to orange**
      Change the newsletter section gradient from green to orange.
      
      **Changes:**
      - Line 110: `from-primary-600 to-primary-500` stays (resolves to orange after config change)
      - Confirm no explicit green color classes remain
      
      **Files:** `app/page.tsx`
      
      **Verify:** Run `npm run dev`, scroll to newsletter section, confirm orange gradient

- [ ] 11. **Verify all hover states use orange (Button component)**
      Confirm Button.tsx primary and outline variants use orange colors (already references primary-* so should auto-update).
      
      **Current state:** Uses `bg-primary-500`, `hover:bg-primary-600`, `border-primary-500`, `hover:bg-primary-50`, `focus:ring-primary-500`
      
      **Action:** No changes needed; these Tailwind classes will resolve to orange after step 1
      
      **Files:** `components/ui/Button.tsx`
      
      **Verify:** Run `npm run dev`, test button hover states show orange

- [ ] 12. **Verify Badge category variant uses orange**
      Confirm Badge.tsx category variant uses orange (already references primary-* classes).
      
      **Current state:** Uses `bg-primary-50 text-primary-600`
      
      **Action:** No changes needed; auto-updates via Tailwind config
      
      **Files:** `components/ui/Badge.tsx`
      
      **Verify:** Run `npm run dev`, category badges show orange backgrounds

- [ ] 13. **Verify Input focus ring uses orange**
      Confirm Input.tsx focus ring uses orange (already references primary-500).
      
      **Current state:** Uses `focus:ring-2 focus:ring-primary-500`
      
      **Action:** No changes needed; auto-updates via Tailwind config
      
      **Files:** `components/ui/Input.tsx`
      
      **Verify:** Run `npm run dev`, click into input fields, focus ring is orange

- [ ] 14. **Verify SearchBar focus ring uses orange**
      Confirm SearchBar.tsx focus ring uses orange.
      
      **Current state:** Uses `focus:ring-2 focus:ring-primary-500`
      
      **Action:** No changes needed; auto-updates via Tailwind config
      
      **Files:** `components/features/SearchBar.tsx`
      
      **Verify:** Run `npm run dev`, click search bar, focus ring is orange

- [ ] 15. **Verify ArticleCard hover state uses orange**
      Confirm ArticleCard.tsx title hover color is orange.
      
      **Current state:** Uses `group-hover:text-primary-500`
      
      **Action:** No changes needed; auto-updates via Tailwind config
      
      **Files:** `components/features/ArticleCard.tsx`
      
      **Verify:** Run `npm run dev`, hover over article cards, title turns orange

- [ ] 16. **Update CodeBlock copy button hover to orange** (Optional enhancement)
      Consider changing the copy button hover state to orange for brand consistency.
      
      **Current state:** Uses `hover:text-white`
      
      **Suggested change:** `hover:text-primary-400` or keep as white
      
      **Files:** `components/features/CodeBlock.tsx`
      
      **Verify:** Run `npm run dev`, if CodeBlock is rendered, test copy button hover

- [ ] 17. **Final build verification - zero green colors**
      Run full production build and search compiled output for any remaining green hex codes.
      
      **Commands:**
      ```bash
      npm run build
      grep -r "#2f8d46\|#10b981\|#16a34a\|#1b5e20\|#e8f5e9" .next/static/css/ || echo "No green colors found"
      ```
      
      **Expected:** No green color hex codes found in compiled CSS
      
      **Files:** N/A (verification step)
      
      **Verify:** Build succeeds, grep finds zero green colors, all pages render with orange theme

- [ ] 18. **Visual QA - check all pages and components**
      Manually test the site to ensure all interactive elements use orange.
      
      **Test cases:**
      - Header logo displays correctly (transparent SVG)
      - Footer logo displays correctly (full background PNG)
      - Favicon shows in browser tab
      - Hero section: orange gradient + Circuit logo
      - Category cards: hover borders are orange
      - Article cards: hover titles are orange
      - Buttons: primary variant is orange
      - Links: hover states are orange
      - Form inputs: focus rings are orange
      - Newsletter section: orange gradient background
      - Search bar: focus ring is orange
      - No green colors visible anywhere
      
      **Files:** N/A (manual testing)
      
      **Verify:** Complete visual inspection confirms 100% orange theme, proper logo placement

---

## Success Criteria

✅ **Zero green colors remain** - No #2f8d46, #10b981, #16a34a, or any green hex codes in production build  
✅ **All three logos correctly placed** - SVG in header, full PNG in footer, icon PNG as favicon  
✅ **Build passes** - `npm run build` completes with zero errors  
✅ **Orange theme complete** - All buttons, links, hovers, focus states use orange (#FF6B00 family)  
✅ **Brand consistency** - Primary interactions use orange, accents use circuit blue when appropriate

---

## Notes

- The existing codebase uses Tailwind's `primary-*` color scale extensively, so updating the Tailwind config (step 1) will cascade changes throughout most components automatically
- Focus verification on compiled CSS output in `.next/static/css/` to catch any hard-coded green values
- The CSS variables in globals.css are primarily for documentation; Tailwind classes take precedence
- After logo replacement, the brand text "LogicEmb" in Header/Footer becomes redundant since logo SVG/PNG includes the title
