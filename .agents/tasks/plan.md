# Implementation Plan: 100% Mobile Responsive Website

This plan makes the entire LogicEMB website fully mobile responsive by fixing hero sections, navigation, grids, text sizes, spacing, forms, and all interactive elements across all pages.

## Key Findings from Exploration

**Project Setup:**
- Next.js 14.2.15 with TypeScript
- Tailwind CSS 3.3.5 for styling
- Build: `npm run build`
- Dev: `npm run dev`
- Lint: `npm run lint`

**Current State:**
- Header has mobile menu but sections (Tutorials, Topics, Resources) are always expanded - needs accordion-style collapsible sections
- Hero sections use large text (text-4xl/5xl) without mobile variants
- Many grids lack proper mobile breakpoints or use 2-col minimum when 1-col is needed
- Forms don't have full-width mobile styling
- Spacing (py-14, px-6) lacks mobile-specific reductions
- Footer grid needs better mobile collapse
- Topic pages have varied patterns that need standardization

**Tailwind Breakpoints (default):**
- sm: 640px
- md: 768px
- lg: 1024px
- xl: 1280px

---

## Implementation Steps

- [ ] 1. **Fix Header mobile menu to have collapsible accordion sections for Topics, Tutorials, and Resources**
      
      Currently all sections are always expanded in mobile menu, creating a wall of links. Convert to accordion-style toggles.
      
      **Files:** `components/layout/Header.tsx`
      
      **Changes:**
      - Add state for mobile accordion: `const [mobileTutorialsOpen, setMobileTutorialsOpen] = useState(false)`, `const [mobileTopicsOpen, setMobileTopicsOpen] = useState(false)`, `const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false)`
      - In mobile menu section (lines 212-269), wrap each section's links in conditional render based on accordion state
      - Add clickable header with ChevronDown icon for each section that toggles the state
      - Change header classes: search bar `hidden sm:flex` should remain, but add search icon button for mobile that shows/toggles search
      - Ensure mobile menu has proper max-height and overflow-y-auto for scrolling: `<div className="md:hidden py-4 border-t border-gray-200 bg-white max-h-[calc(100vh-56px)] overflow-y-auto">`
      
      **Example accordion structure for Tutorials section:**
      ```tsx
      <div className="px-2">
        <button 
          onClick={() => setMobileTutorialsOpen(!mobileTutorialsOpen)}
          className="flex items-center justify-between w-full text-xs font-semibold text-gray-500 mb-2 uppercase"
        >
          Tutorials
          <ChevronDown size={16} className={`transition-transform ${mobileTutorialsOpen ? 'rotate-180' : ''}`} />
        </button>
        {mobileTutorialsOpen && (
          <div className="flex flex-col gap-2 ml-2">
            {tutorialsLinks.map((link) => (...))}
          </div>
        )}
      </div>
      ```
      
      **Verify:** `npm run build` succeeds, then test mobile menu at 375px viewport - accordion sections should toggle on click, not all expanded at once.

- [ ] 2. **Make Footer fully mobile responsive with proper grid collapse**
      
      Footer currently has 5-column grid that needs better mobile collapse pattern.
      
      **Files:** `components/layout/Footer.tsx`
      
      **Changes:**
      - Line 60: Change grid classes from `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-8` to `grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-8`
      - Line 62: Logo column classes change `lg:col-span-1 flex items-center justify-center lg:justify-start` to `col-span-2 sm:col-span-2 lg:col-span-1 flex items-center justify-center lg:justify-start mb-4 lg:mb-0`
      - Line 76: Change footer padding from `px-6 py-12` to `px-4 md:px-6 py-8 md:py-12`
      - Line 94: Bottom bar spacing `pt-8` to `pt-6 md:pt-8`
      - Line 94: Bottom bar text size `text-sm` to `text-xs sm:text-sm`
      - Line 95: Copyright text centered on mobile
      - Line 96: Links container `gap-6` to `gap-4 sm:gap-6`
      
      **Verify:** `npm run build` succeeds, footer displays 2 columns on mobile with logo spanning full width at top.

- [ ] 3. **Fix homepage (/) hero section and all content sections for mobile**
      
      Hero uses large text without mobile variants, 2-column grid needs to stack, search bar needs mobile styling.
      
      **Files:** `app/page.tsx`
      
      **Changes:**
      - Line 20: Hero heading `text-4xl md:text-5xl` to `text-2xl sm:text-3xl md:text-5xl`
      - Line 23: Hero description `text-lg` to `text-sm sm:text-base md:text-lg`
      - Line 18: Hero section padding `py-14` to `py-8 md:py-14`
      - Line 17: Hero container padding `px-6` to `px-4 md:px-6`
      - Line 19: Hero grid `grid-cols-1 lg:grid-cols-[1fr_550px] gap-10` to `grid-cols-1 lg:grid-cols-[1fr_550px] gap-6 md:gap-10`
      - Line 29: Search container `flex gap-0 mt-6` to `flex flex-col sm:flex-row gap-2 sm:gap-0 mt-6`
      - Line 32: Search input `px-4 py-3 text-sm` to `px-3 py-2.5 text-sm w-full sm:flex-1`
      - Line 36: Search button `px-6 py-3` to `px-4 py-2.5 w-full sm:w-auto justify-center`
      - Line 42: Stats row `flex flex-wrap gap-6 mt-8` to `grid grid-cols-2 sm:flex sm:flex-wrap gap-4 sm:gap-6 mt-6 md:mt-8`
      - Line 43-62: Each stat `text-sm` keep, but wrap content to prevent overflow
      - Line 68: CTA buttons `flex gap-3 mt-6` to `flex flex-col sm:flex-row gap-3 mt-6`
      - Line 71, 77: Both CTA buttons `px-6 py-3` to `px-6 py-2.5 text-center w-full sm:w-auto`
      - Line 84: Hero image container add `hidden lg:block` to hide on mobile, OR change height `h-[450px]` to `h-[250px] sm:h-[350px] lg:h-[450px]`
      - Line 95: Courses section padding `py-14` to `py-8 md:py-14`
      - Line 96: Courses container `px-6` to `px-4 md:px-6`
      - Line 100: Courses heading `text-2xl` to `text-xl sm:text-2xl`
      - Line 109: Courses grid already has `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` - good, keep it
      - Line 118: Course banner height `h-[180px]` to `h-[160px] sm:h-[180px]`
      - Line 123: Course banner title `text-2xl` to `text-xl sm:text-2xl`
      - Line 125: Course banner subtitle `text-xs` keep
      - Line 155: Topics section padding `py-14` to `py-8 md:py-14`
      - Line 157: Topics heading `text-2xl` to `text-xl sm:text-2xl`
      - Line 158: Topics grid `grid-cols-1 sm:grid-cols-2` already good, verify cards work at 1-col
      - Line 165: Topic card padding `p-8` to `p-6 md:p-8`
      - Line 170: Topic card heading `text-xl` to `text-lg sm:text-xl`
      - Line 183: Articles section padding `py-12` to `py-8 md:py-12`
      - Line 185: Articles container `px-6` to `px-4 md:px-6`
      - Line 189: Articles heading `text-2xl` to `text-xl sm:text-2xl`
      - Line 199: Articles grid already `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` - good
      - Line 208: Article card image `h-44` to `h-40 sm:h-44`
      - Line 215: Article card padding `p-5` to `p-4 md:p-5`
      - Line 220: Article title `text-base` to `text-sm sm:text-base`
      - Line 234: Tags section padding `py-12` to `py-8 md:py-12`
      - Line 236: Tags heading `text-2xl` to `text-xl sm:text-2xl`
      - Line 247: Newsletter section padding `py-12` to `py-8 md:py-12`
      - Line 249: Newsletter heading `text-2xl` to `text-xl sm:text-2xl`
      - Line 251: Newsletter description `text-sm` keep
      - Line 254: Newsletter form `flex gap-0` to `flex flex-col sm:flex-row gap-2 sm:gap-0`
      - Line 257: Newsletter input add `w-full sm:flex-1`
      - Line 260: Newsletter button `px-6 py-3` to `px-4 py-2.5 w-full sm:w-auto justify-center`
      
      **Verify:** `npm run build` succeeds, homepage displays properly at 375px width with all text readable, all CTAs tappable (44px min height), no horizontal scroll.

- [ ] 4. **Fix Projects page mobile responsiveness**
      
      Hero, category grid, featured projects grid, and resource cards need mobile fixes.
      
      **Files:** `app/projects/page.tsx`
      
      **Changes:**
      - Line 141: Hero section padding `py-14` to `py-8 md:py-14`
      - Line 142: Hero container `px-6` to `px-4 md:px-6`
      - Line 148: Hero heading `text-4xl md:text-5xl` to `text-2xl sm:text-3xl md:text-5xl`
      - Line 151: Hero description `text-lg` to `text-sm sm:text-base md:text-lg`
      - Line 155: Hero CTA buttons `flex flex-wrap gap-4` to `flex flex-col sm:flex-row gap-3`
      - Line 159, 163: Both buttons `px-6 py-3` to `px-6 py-2.5 text-center w-full sm:w-auto`
      - Line 172: Categories section padding `py-12` to `py-8 md:py-12`
      - Line 174: Categories heading `text-2xl` to `text-xl sm:text-2xl`
      - Line 175: Categories grid `grid-cols-2 md:grid-cols-4` already correct for mobile
      - Line 183: Category card image height `h-32` to `h-28 sm:h-32`
      - Line 190: Category card padding `p-4` to `p-3 sm:p-4`
      - Line 191: Category card title `text-sm` keep, ensure no overflow with `break-words`
      - Line 203: Featured projects section padding `py-12` to `py-8 md:py-12`
      - Line 205: Featured projects container `px-6` to `px-4 md:px-6`
      - Line 207: Featured projects heading `text-2xl` to `text-xl sm:text-2xl`
      - Line 215: Featured projects grid already `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` - good
      - Line 223: Project card image height `h-48` to `h-44 sm:h-48`
      - Line 230: Project card padding `p-5` to `p-4 md:p-5`
      - Line 237: Project title `text-base` to `text-sm sm:text-base`
      - Line 269: Project kits section padding `py-12` to `py-8 md:py-12`
      - Line 271: Project kits heading `text-2xl` to `text-xl sm:text-2xl`
      - Line 272: Kits grid already `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` - good
      - Line 281: Kit card image height `h-48` to `h-44 sm:h-48`
      - Line 286: Kit card padding `p-5` to `p-4 md:p-5`
      - Line 287: Kit title `text-base` to `text-sm sm:text-base`
      - Line 304: Resources section padding `py-12` to `py-8 md:py-12`
      - Line 306: Resources heading `text-2xl` to `text-xl sm:text-2xl`
      - Line 307: Resources grid `grid-cols-1 md:grid-cols-2` already correct
      - Line 310: Resource card padding `p-6` to `p-5 md:p-6`
      
      **Verify:** `npm run build` succeeds, projects page fully responsive at 375px with proper card stacking and readable text.

- [ ] 5. **Fix Tutorials page mobile responsiveness**
      
      Hero, filter bar, tutorials grid, and cheat sheets section need mobile fixes.
      
      **Files:** `app/tutorials/page.tsx`
      
      **Changes:**
      - Line 46: Hero section padding `py-16` to `py-10 md:py-16`
      - Line 47: Hero container `px-6` to `px-4 md:px-6`
      - Line 49: Hero heading `text-3xl md:text-5xl` to `text-2xl sm:text-3xl md:text-5xl`
      - Line 52: Hero description `text-base md:text-lg` already has breakpoint, change to `text-sm sm:text-base md:text-lg`
      - Line 57: Search input container `mt-8` to `mt-6`
      - Line 60: Search input `pl-11 pr-4 py-3.5 text-sm` to `pl-10 pr-4 py-3 text-sm`
      - Line 72: Filter bar `px-6 py-4` to `px-4 py-3`
      - Line 73: Filter bar flex container `flex flex-col sm:flex-row gap-4` already correct
      - Line 75: Category pills container add `flex-nowrap` and ensure horizontal scroll: `flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none flex-nowrap`
      - Line 89: Level dropdown on mobile should be full-width on smallest screens: add `w-full sm:w-auto` to select
      - Line 106: Tutorials section padding `py-12` to `py-8 md:py-12`
      - Line 107: Tutorials container `px-6` to `px-4 md:px-6`
      - Line 109: Showing count heading `text-xl` to `text-base sm:text-xl`
      - Line 125: Empty state padding `p-12` to `p-8 md:p-12`
      - Line 139: Tutorials grid already `grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6` - good
      - Line 147: Tutorial card image height `h-44` to `h-40 sm:h-44`
      - Line 164: Tutorial card body padding `p-5` to `p-4 md:p-5`
      - Line 165: Tutorial meta text already `text-xs` - good
      - Line 177: Tutorial title `text-base` to `text-sm sm:text-base`
      - Line 182: Tutorial excerpt `text-xs` keep
      - Line 221: Cheat sheets section padding `py-14` to `py-10 md:py-14`
      - Line 222: Cheat sheets container `px-6` to `px-4 md:px-6`
      - Line 227: Cheat sheets heading `text-2xl` to `text-xl sm:text-2xl`
      - Line 234: Cheat sheets grid `grid-cols-1 md:grid-cols-2 lg:grid-cols-4` - change to `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4` for better mobile stacking
      - Line 238: Cheat sheet card padding `p-5` to `p-4 md:p-5`
      
      **Verify:** `npm run build` succeeds, tutorials page fully responsive with horizontal scrolling category pills and proper card stacking.

- [ ] 6. **Fix Courses page mobile responsiveness**
      
      Hero, filter bar, courses grid, and why section need mobile fixes.
      
      **Files:** `app/courses/page.tsx`
      
      **Changes:**
      - Line 43: Hero section padding `py-16` to `py-10 md:py-16`
      - Line 44: Hero container `px-6` to `px-4 md:px-6`
      - Line 47: Hero heading `text-3xl md:text-5xl` to `text-2xl sm:text-3xl md:text-5xl`
      - Line 50: Hero description `text-base md:text-lg` to `text-sm sm:text-base md:text-lg`
      - Line 54: Stats grid `grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-8` already good
      - Line 56: Stat value `text-2xl` to `text-xl sm:text-2xl`
      - Line 73: Filter bar `px-6 py-4` to `px-4 py-3`
      - Line 74: Filter container `flex flex-col lg:flex-row gap-4` already good
      - Line 76: Category pills ensure horizontal scroll: `overflow-x-auto pb-2 lg:pb-0 scrollbar-none` already present - good
      - Line 93: Search container change `flex-1 sm:w-64` to `w-full sm:w-64`
      - Line 103: Level dropdown ensure full width on mobile: add `w-full sm:w-auto`
      - Line 118: Courses section padding `py-12` to `py-8 md:py-12`
      - Line 119: Courses container `px-6` to `px-4 md:px-6`
      - Line 121: Showing count heading `text-xl` to `text-base sm:text-xl`
      - Line 142: Empty state padding `p-12` to `p-8 md:p-12`
      - Line 159: Courses grid already `grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6` - good
      - Line 169: Course banner height `h-[190px]` to `h-[160px] sm:h-[190px]`
      - Line 175: Course banner title `text-2xl` to `text-xl sm:text-2xl`
      - Line 183: Course body padding `p-5` to `p-4 md:p-5`
      - Line 193: Course title `text-base` to `text-sm sm:text-base`
      - Line 240: Why section padding `py-14` to `py-10 md:py-14`
      - Line 241: Why container `px-6` to `px-4 md:px-6`
      - Line 243: Why heading `text-2xl` to `text-xl sm:text-2xl`
      - Line 251: Why grid `grid-cols-1 md:grid-cols-3` already good
      - Line 253: Why card padding `p-6` to `p-5 md:p-6`
      
      **Verify:** `npm run build` succeeds, courses page fully responsive with proper filter bar behavior on mobile.

- [ ] 7. **Fix all topic pages (Python, JavaScript, Java, C, C++, C#, SQL, Embedded, PCB Design, Microcontrollers, Electronics) for mobile**
      
      These pages follow the same pattern. Python page will serve as the template - fix it first, then apply same changes to others.
      
      **Files:** 
      - `app/python/page.tsx`
      - `app/javascript/page.tsx`
      - `app/java/page.tsx`
      - `app/c/page.tsx`
      - `app/cpp/page.tsx`
      - `app/csharp/page.tsx`
      - `app/sql/page.tsx`
      - `app/embedded/page.tsx`
      - `app/pcb-design/page.tsx`
      - `app/microcontrollers/page.tsx`
      - `app/electronics/page.tsx`
      
      **Changes for Python page (apply same pattern to all others):**
      - Line 83: Hero section padding `py-14` to `py-8 md:py-14`
      - Line 84: Hero container `px-6` to `px-4 md:px-6`
      - Line 89: Hero heading `text-4xl md:text-5xl` to `text-2xl sm:text-3xl md:text-5xl`
      - Line 92: Hero description `text-lg` to `text-sm sm:text-base md:text-lg`
      - Line 96: Hero CTA buttons `flex flex-wrap gap-4` to `flex flex-col sm:flex-row gap-3`
      - Line 99, 104: Both buttons `px-6 py-3` to `px-6 py-2.5 text-center w-full sm:w-auto`
      - Line 115: Topics section padding `py-12` to `py-8 md:py-12`
      - Line 117: Topics heading `text-2xl` to `text-xl sm:text-2xl`
      - Line 118: Topics grid currently `grid-cols-2 sm:grid-cols-4` - this is good for small icon cards
      - Line 123: Topic card padding `p-5` to `p-4 md:p-5`
      - Line 124: Topic icon `text-4xl` to `text-3xl sm:text-4xl`
      - Line 125: Topic title `text-sm` keep
      - Line 134: Tutorials section padding `py-12` to `py-8 md:py-12`
      - Line 135: Tutorials container `px-6` to `px-4 md:px-6`
      - Line 138: Tutorials heading `text-2xl` to `text-xl sm:text-2xl`
      - Line 147: Tutorials grid already `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` - good
      - Line 153: Tutorial card padding `p-5` to `p-4 md:p-5`
      - Line 161: Tutorial title `text-base` to `text-sm sm:text-base`
      - Line 177: Courses section padding `py-12` to `py-8 md:py-12`
      - Line 179: Courses heading `text-2xl` to `text-xl sm:text-2xl`
      - Line 180: Courses grid already `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` - good
      - Line 187: Course banner height `h-32` to `h-28 sm:h-32`
      - Line 190: Course card padding `p-5 space-y-3` to `p-4 md:p-5 space-y-3`
      - Line 191: Course title `text-base` to `text-sm sm:text-base`
      - Line 215: Code examples section padding `py-12` to `py-8 md:py-12`
      - Line 217: Code examples heading `text-2xl` to `text-xl sm:text-2xl`
      - Line 218: Code examples grid `grid-cols-1 md:grid-cols-2` already good
      - Line 220: Code example card padding `p-6` to `p-5 md:p-6`
      
      **After Python is fixed, apply same pattern to all other topic pages listed above.**
      
      **Verify:** `npm run build` succeeds, all topic pages display properly at 375px with proper text sizing and card stacking.

- [ ] 8. **Fix Login, Signup, Forgot Password, and Reset Password pages for mobile**
      
      Form pages need full-width inputs, proper spacing, and touch-friendly buttons on mobile.
      
      **Files:**
      - `app/login/page.tsx`
      - `app/signup/page.tsx`
      - `app/forgot-password/page.tsx`
      - `app/reset-password/page.tsx`
      
      **Changes for Login page (apply similar pattern to other auth pages):**
      - Line 23: Container padding `px-4 py-12` to `px-4 py-8 md:py-12`
      - Line 24: Max width container already `max-w-md w-full` - good
      - Line 29: Logo size `width={80} height={80}` to `width={60} height={60}`
      - Line 34: Heading `text-3xl` to `text-2xl sm:text-3xl`
      - Line 35: Description `text-gray-600` already proper size
      - Line 40: Form card padding `p-8` to `p-6 md:p-8`
      - Line 41: Form spacing `space-y-6` to `space-y-5`
      - Line 45: Label `text-sm` keep
      - Line 50: Input `py-3` to `py-2.5` for better mobile sizing, ensure `text-base` (not text-sm) to prevent iOS zoom
      - Line 60: Password input same as above
      - Line 81: Submit button `py-3` to `py-2.5` with min height `h-11` (44px touch target)
      - Line 96: Social login buttons `py-3` to `py-2.5 h-11`
      - Line 100: Social login grid already `grid-cols-2` - good, but ensure gap: `gap-3` to `gap-2 sm:gap-3`
      
      **Apply similar changes to signup, forgot-password, and reset-password pages.**
      
      **Verify:** `npm run build` succeeds, all auth pages have full-width forms with 44px minimum touch targets at 375px width.

- [ ] 9. **Fix Contact page mobile responsiveness**
      
      Contact page has hero, info cards, form, and FAQ sections that need mobile optimization.
      
      **Files:** `app/contact/page.tsx`
      
      **Changes:**
      - Line 65: Hero section padding `py-16` to `py-10 md:py-16`
      - Line 66: Hero container `px-6` to `px-4 md:px-6`
      - Line 74: Hero heading `text-4xl md:text-5xl` to `text-2xl sm:text-3xl md:text-5xl`
      - Line 77: Hero description `text-lg` to `text-sm sm:text-base md:text-lg`
      - Line 85: Contact info section padding `py-14` to `py-10 md:py-14`
      - Line 86: Contact info container `px-6` to `px-4 md:px-6`
      - Line 87: Contact info grid `grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6` to `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6`
      - Line 92: Contact info card padding `p-6` to `p-5 md:p-6`
      - Line 105: Form section padding `py-14` to `py-10 md:py-14`
      - Line 106: Form container `px-6` to `px-4 md:px-6`
      - Line 109: Form heading `text-3xl` to `text-2xl sm:text-3xl`
      - Line 115: Form card padding `p-8` to `p-6 md:p-8`
      - Line 117: Form spacing `space-y-6` to `space-y-5`
      - Line 120: Input grid `grid-cols-1 md:grid-cols-2 gap-6` to `grid-cols-1 md:grid-cols-2 gap-4 md:gap-6`
      - Line 128: All inputs `py-3` to `py-2.5` with `text-base` (not text-sm) to prevent iOS zoom
      - Line 169: Textarea `py-3` to `py-2.5`
      - Line 177: Submit button `py-3` to `py-2.5 h-11` for 44px touch target
      - Line 194: FAQ section padding `py-14` to `py-10 md:py-14`
      - Line 195: FAQ container `px-6` to `px-4 md:px-6`
      - Line 197: FAQ heading `text-3xl` to `text-2xl sm:text-3xl`
      - Line 202: FAQ card padding `p-6` to `p-5 md:p-6`
      
      **Verify:** `npm run build` succeeds, contact page fully responsive with proper form sizing and touch targets.

- [ ] 10. **Fix Community and Newsletter pages for mobile**
      
      These pages likely follow similar patterns to other pages. Apply consistent mobile fixes.
      
      **Files:**
      - `app/community/page.tsx`
      - `app/newsletter/page.tsx`
      
      **Changes (if pages exist):**
      - Hero sections: heading `text-4xl md:text-5xl` → `text-2xl sm:text-3xl md:text-5xl`
      - Hero sections: description `text-lg` → `text-sm sm:text-base md:text-lg`
      - Hero sections: padding `py-16` → `py-10 md:py-16`
      - Container padding: `px-6` → `px-4 md:px-6`
      - Section padding: `py-14` → `py-8 md:py-14`, `py-12` → `py-8 md:py-12`
      - Section headings: `text-2xl` → `text-xl sm:text-2xl`, `text-3xl` → `text-2xl sm:text-3xl`
      - Card grids: ensure proper mobile breakpoints (1-col on mobile)
      - Card padding: `p-6` → `p-4 md:p-6`, `p-5` → `p-4 md:p-5`
      - Form inputs: full-width with `text-base` size to prevent iOS zoom
      - Buttons: full-width on mobile with `h-11` minimum height
      
      **Verify:** `npm run build` succeeds, community and newsletter pages responsive.

- [ ] 11. **Fix dynamic course and tutorial detail pages for mobile**
      
      Dynamic pages for individual courses and tutorials need mobile responsiveness.
      
      **Files:**
      - `app/courses/[id]/page.tsx`
      - `app/tutorials/[slug]/page.tsx`
      
      **Changes (apply consistent mobile patterns):**
      - Container padding: `px-6` → `px-4 md:px-6`
      - Hero/header sections: padding `py-14` → `py-8 md:py-14`
      - Headings: `text-3xl` → `text-xl sm:text-2xl md:text-3xl`, `text-4xl` → `text-2xl sm:text-3xl md:text-4xl`
      - Body text: `text-lg` → `text-sm sm:text-base md:text-lg`
      - Sidebar layouts: stack on mobile (flex-col), side-by-side on desktop (flex-row)
      - Course/tutorial content area: full-width on mobile
      - Navigation buttons: full-width on mobile with proper touch targets
      - Code blocks: ensure `overflow-x-auto` and `max-w-full` classes present
      
      **Verify:** `npm run build` succeeds, detail pages display properly on mobile with readable content and no horizontal scroll.

- [ ] 12. **Fix CodeBlock component for mobile horizontal scroll**
      
      Code blocks must handle overflow properly on mobile to prevent page-wide horizontal scroll.
      
      **Files:** `components/features/CodeBlock.tsx`
      
      **Changes:**
      - Line 20: Add wrapper div with mobile-safe widths: `<div className="rounded-lg overflow-hidden border border-gray-700 my-4 max-w-full">`
      - Line 29: Pre tag needs horizontal scroll: `<pre className="code-block rounded-none overflow-x-auto max-w-full"><code>{code}</code></pre>`
      - Ensure parent div has `overflow-x-auto` and `max-w-full` to prevent content from breaking layout
      
      **Verify:** `npm run build` succeeds, code blocks scroll horizontally on mobile without breaking page layout.

- [ ] 13. **Fix UI components (Button, Card, Input, Badge) for mobile touch targets and sizing**
      
      Ensure all reusable UI components have proper mobile sizing and 44px minimum touch targets.
      
      **Files:**
      - `components/ui/Button.tsx`
      - `components/ui/Card.tsx` (if exists)
      - `components/ui/Input.tsx` (if exists)
      - `components/ui/Badge.tsx` (if exists)
      
      **Changes for Button component:**
      - Line 24: Small button `px-3 py-1.5` already borderline, ensure min height: add `min-h-[36px]`
      - Line 25: Medium button `px-4 py-2` - add `min-h-[40px]`
      - Line 26: Large button `px-6 py-3` - add `min-h-[44px]`
      - Ensure all variants maintain minimum 44px height for touch targets when size="lg"
      
      **Changes for other UI components (if they exist):**
      - Input components: use `text-base` (not smaller) to prevent iOS zoom, `py-2.5` minimum
      - Card components: `p-4 md:p-6` for mobile-friendly padding
      - Badge components: ensure text is readable at small sizes
      
      **Verify:** `npm run build` succeeds, all UI components have proper touch targets.

- [ ] 14. **Fix ArticleCard and SearchBar components for mobile**
      
      Feature components used across pages need mobile optimization.
      
      **Files:**
      - `components/features/ArticleCard.tsx` (if exists as separate component)
      - `components/features/SearchBar.tsx` (if exists as separate component)
      
      **Changes:**
      - ArticleCard: ensure image has responsive height, padding is mobile-friendly, text sizes scale
      - SearchBar: ensure full-width on mobile, proper input sizing, search button is touch-friendly
      - Apply patterns from page-level fixes to these components
      
      **Verify:** `npm run build` succeeds, components render properly on mobile.

- [ ] 15. **Add global mobile-specific CSS utilities and ensure no horizontal scroll**
      
      Add any missing global styles for mobile scrolling behavior and touch optimization.
      
      **Files:** `app/globals.css`
      
      **Changes:**
      - Verify lines 6-11 have proper overflow handling: `max-width: 100vw; overflow-x: hidden;` already present - good
      - Add utility class for hiding scrollbars on mobile horizontal scroll containers:
        ```css
        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-none {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        ```
      - Add smooth scrolling for better mobile UX:
        ```css
        html {
          scroll-behavior: smooth;
        }
        ```
      - Ensure tap highlight color is set:
        ```css
        * {
          -webkit-tap-highlight-color: rgba(230, 81, 0, 0.1);
        }
        ```
      
      **Verify:** `npm run build` succeeds, no horizontal scroll occurs on any page at 375px width.

- [ ] 16. **Final mobile testing and verification across all pages**
      
      Comprehensive test of all pages at mobile viewport to ensure complete responsiveness.
      
      **Testing checklist:**
      - Test at 375px (iPhone SE), 390px (iPhone 12), 414px (iPhone Pro Max)
      - Verify no horizontal scroll on any page
      - Verify all text is readable (minimum 12px effective size)
      - Verify all tap targets are minimum 44px height
      - Verify forms are usable with full-width inputs
      - Verify images scale properly and don't overflow
      - Verify navigation menu works with accordion sections
      - Verify cards stack properly in single column
      - Verify buttons are full-width where appropriate
      - Test all interactive elements (dropdowns, modals, accordions)
      
      **Files to verify:** All pages listed in original task
      
      **Verify:** Manual testing at multiple mobile widths confirms 100% mobile responsiveness. `npm run build` succeeds. `npm run dev` runs without errors. All pages render correctly on mobile devices.

---

## Summary

This plan systematically makes the entire LogicEMB website 100% mobile responsive by:

1. **Navigation:** Converting mobile menu to collapsible accordion sections
2. **Typography:** Scaling all headings and body text appropriately for mobile (text-2xl/3xl on mobile, text-4xl/5xl on desktop)
3. **Layout:** Ensuring all grids stack to 1 column on mobile (or 2 columns for small cards)
4. **Spacing:** Reducing padding and margins on mobile (py-8 instead of py-14, px-4 instead of px-6)
5. **Forms:** Making all inputs full-width with proper touch targets (44px minimum height)
6. **Images:** Scaling images responsively and hiding/reducing hero images on mobile
7. **CTAs:** Making buttons full-width on mobile with proper touch targets
8. **Components:** Ensuring all reusable components work properly on mobile
9. **Code blocks:** Adding horizontal scroll without breaking page layout
10. **Testing:** Comprehensive verification at multiple mobile viewport sizes

The implementation follows a systematic file-by-file approach with specific Tailwind class changes documented for each element, ensuring the developer can implement changes precisely without guessing.
