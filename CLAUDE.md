# The Clinical Doula · theclinicaldoula.com

**Project briefing for Claude Code.** This file is the source of truth. Read it fully before generating any code.

---

## Project

A premium concierge clinical companion and crisis doula service website. The brand is restrained, literary, and authoritative — the voice of an emergency-room nurse who has sat at thousands of bedsides. Founded by April Bogle, RN, in Nashville, Tennessee.

**Primary objective:** Move a visitor from awareness to a complimentary 30-minute consultation, with a secondary path for direct crisis activation by phone.

**Audience:** Adult children of aging parents · spouses navigating a partner's hospitalization · executives and entrepreneurs who refuse to face medical chaos alone · physicians and discharge planners considering a referral.

---

## Brand System (non-negotiable)

### Color Palette
- **Ink** `#0A0806` — primary type, headlines, ink-stage section backgrounds
- **Cream** `#F5EFE4` — page background, breathing space
- **Gold** `#B8895A` — accents, rules, ornaments, descriptors. Used sparingly; gold is the exclamation point, not the baseline.

### Typography
- **Cormorant Garamond** (Google Fonts) — display, headlines, body. Default weight 300 (Light). Italic 300 for expressive moments and pull quotes.
- **Jost** (Google Fonts) — eyebrows, descriptors, labels, navigation. Always weight 300 with generous letter-spacing (`0.22em–0.32em`) and uppercase.

Together they hold the bridge between the medical world (Jost = clinical precision) and the somatic one (Cormorant = literary warmth).

### Voice
- I AM: Steady · Literary · Warm · Clinically fluent · Quietly authoritative · Present · Discreet
- I AM NOT: Performative · Cute · Cold · Aggressive · Patronizing · Absent · Loud

Write in first person. April speaks directly to the reader. No marketing-speak. No emojis. No exclamation points except where they appear in source copy.

### Visual character
- Generous whitespace at all breakpoints
- Thin gold rules separating sections
- Centered hero compositions on home and key pages
- Editorial cadence — long lines of single-column prose with drop caps on manifestos and the About story
- The "Presence Mark" SVG (outlined ink circle with a centered gold dot) appears on the home hero, About page, and as the favicon
- Ink-stage CTA sections with cream type and gold accents at the bottom of every page

---

## Site Architecture

```
theclinicaldoula.com / → Home
theclinicaldoula.com / the-work → Philosophy and approach
theclinicaldoula.com / services → Three tiers + FAQ + investment summary
theclinicaldoula.com / about → April's story
theclinicaldoula.com / for-physicians → Referral page
theclinicaldoula.com / contact → Consultation booking + crisis activation
```

### Primary Navigation (sticky, centered, cream background with subtle backdrop blur)
THE WORK · SERVICES · ABOUT · FOR PHYSICIANS · CONTACT

### Footer (three columns on desktop, stacked on mobile)
1. Brand wordmark + one-line descriptor
2. Navigation
3. Crisis activation message + 24/7 phone number `615-970-2015`

---

## Recommended Tech Stack

Per the brand owner's wireframe specification:

- **Vite + React + TypeScript**
- **react-router-dom** for client-side routing
- **Tailwind CSS** with custom theme tokens for ink/cream/gold and the two font families, OR plain CSS modules — designer's choice. Tailwind is recommended for speed.
- **Google Fonts** loaded via standard `<link>` in `index.html` (preconnect to fonts.gstatic.com, preload critical weights)
- **Netlify** for hosting with auto-deploy on `git push`
- **No CMS at launch.** All copy lives in TypeScript constants or JSON files in `src/content/`. Testimonials and FAQs in JSON for easy updates without touching JSX.
- **Forms:** Netlify Forms is the simplest path — add `data-netlify="true"` to the consultation form. No backend code needed.

### Folder structure
```
src/
  components/
    Layout.tsx          (header + footer wrapper)
    Header.tsx
    Footer.tsx
    PresenceMark.tsx    (SVG component)
    TierCard.tsx
    InkCTA.tsx          (the bottom ink-stage call-to-action used on every page)
  pages/
    Home.tsx
    TheWork.tsx
    Services.tsx
    About.tsx
    ForPhysicians.tsx
    Contact.tsx
  content/
    tiers.ts            (the three tier definitions)
    faqs.ts
    testimonials.ts
    values.ts           (the six values for /the-work)
  styles/
    globals.css         (CSS variables, base typography)
  App.tsx
  main.tsx
public/
  favicon.svg           (gold-circle monogram)
```

### Required dev dependencies
```
vite react react-dom react-router-dom typescript
@types/react @types/react-dom
```

---

## Page Specs

### / (Home)
1. **Hero** — Presence Mark SVG · "The" italic / "Clinical Doula" display · gold rule · "CONCIERGE CLINICAL COMPANION & CRISIS DOULA" descriptor · Headline: *"When a moment becomes a crisis, I am the one who shows up."* · Subhead · CTAs: "Begin a Consultation" / "How I Work"
2. **The Promise** — three centered stanzas: *Clinically Fluent · Somatically Grounded · Yours Alone*
3. **The Three Tiers** — three cards (I/II/III, Companion/Passage/Sovereign) linking to anchored sections on /services
4. **About April Snippet** — two-column with portrait placeholder + "Thirty-two years at the bedside" + link to /about
5. **Testimonial** — single rotating quote, attributed first-name only
6. **Final CTA** — ink-stage, full-width

### /the-work
1. Hero: *"The hospital was not designed to explain itself."*
2. Long-form manifesto with drop cap, single-column 720px max
3. Six Values grid (2 columns desktop, 1 column mobile): Presence · Compassion · Clarity · Sovereignty · Integration · Discretion
4. Closing ink CTA

### /services
1. Hero: *"Three tiers. One philosophy. Choose the one that meets the moment."*
2. Three tier sections (anchor IDs `#companion`, `#passage`, `#sovereign`) — each with dark editorial header bar (Roman numeral + name + descriptor + price), full prose with phase headings, dark "What Is Included" grid, primary CTA button.
3. Investment Summary table (dark band)
4. FAQ accordion (6 questions)
5. Closing ink CTA

### /about
1. Hero — two-column: portrait left, "I have spent thirty-two years at the bedsides of strangers." right
2. The Story — single-column long-form, drop cap on first paragraph
3. Credentials — clean bulleted list with gold arrow markers
4. Personal Note — italic, intimate, single column centered
5. Closing ink CTA

### /for-physicians
1. Hero — clinical aesthetic, no manifesto language: *"An independent registered nurse advocate for your most complex patients."*
2. What I Do for Your Patients — three-column icon grid (Translate · Stabilize · Coordinate)
3. What I Do for Your Team — single-column factual list
4. How to Refer — three numbered steps
5. HIPAA & Legal Standing — plain text, ink background
6. Direct Contact for Physicians — email, phone, response time

### /contact
1. Hero with two equal CTAs side-by-side: "Schedule a Consultation" / "This is a Crisis — Call Now"
2. Consultation form (5 fields, no date picker — April follows up to schedule)
3. Confirmation message (replaces form on submit)
4. Crisis Activation section — visually distinct, ink stage, with large `tel:` button
5. Hours & Geography block

---

## Copy

The complete site copy is already written in the static HTML files (`index.html`, `the-work.html`, `services.html`, `about.html`, `for-physicians.html`, `contact.html`) accompanying this brief. **Use that copy verbatim.** It has been carefully crafted in April's voice. Do not rewrite, summarize, or "improve" it.

When porting to React, extract long-form copy blocks into `src/content/*.ts` files as named exports so they're easy to update without editing JSX.

---

## Forms

### Physician Referral Form (Google Forms)
Already integrated on `/for-physicians`. The "Refer a Patient" CTA opens this URL in a new tab:

```
https://docs.google.com/forms/d/e/1FAIpQLSdxPaenl5vZ9Bz3sCrUYoViEHHzS3tRDrhamcsL9HcfSH657w/viewform?usp=header
```

Preserve this exact link when porting to React. The button uses `target="_blank" rel="noopener noreferrer"`. Do **not** embed the form via iframe — Google Forms cannot be re-skinned and would clash with the brand. A new-tab link keeps the site brand-pure while putting the form one tap away.

### Consultation Form (Contact page)

Single form on `/contact`:

- Name (required, text)
- Phone (required, tel)
- Email (required, email)
- "In one or two sentences, what is happening?" (required, textarea)
- "Optional: Who referred you?" (optional, text)

On submit:
- Use Netlify Forms (`data-netlify="true"` and a hidden `form-name` input)
- Show the confirmation message in place of the form (no page redirect)
- Send a notification email to April at `theclinicaldoula@proton.me`

The crisis activation button is a `tel:` link, never a form.

---

## Technical Requirements

- **Performance:** First contentful paint under 2 seconds on mobile. Lazy-load images. Preload Cormorant Garamond Light + Italic and Jost Light.
- **Accessibility:** WCAG AA contrast on all text. All buttons keyboard-navigable. Skip-to-content link. Meaningful alt text on every image. Form fields with proper `<label>` associations and visible focus states.
- **SEO:**
  - Meta title (home): "The Clinical Doula · Concierge Clinical Companion & Crisis Doula"
  - Meta description (home): "Independent registered nurse and crisis doula serving Nashville families. 32 years of bedside experience. Concierge support during hospitalizations, crises, and the long weeks of healing afterward."
  - Each page should have a unique title and description
  - JSON-LD `LocalBusiness` schema in the home page `<head>`
- **Responsive breakpoints:**
  - Desktop: 1280px and up
  - Tablet: 768–1279px
  - Mobile: 767px and below
- **Hero typography:** display headline scales from 72pt desktop down to 44pt mobile via `clamp()`.
- **No third-party tracking** that delays first paint. Plausible or Fathom Analytics if any analytics are needed.

---

## Step-by-Step Build Prompt for Claude Code

Paste the following into Claude Code after running `cd` into an empty directory:

> Read CLAUDE.md and the six accompanying HTML files (index.html, the-work.html, services.html, about.html, for-physicians.html, contact.html) and the styles.css file. Then scaffold a Vite + React + TypeScript project, install react-router-dom, and convert the static HTML pages into React components with the file structure described in CLAUDE.md. Preserve every line of copy verbatim. Set up the Cormorant Garamond + Jost fonts via Google Fonts `<link>` in index.html. Implement the design system (ink/cream/gold + the two font families) as CSS variables in src/styles/globals.css. Wire up react-router-dom with the URLs listed in CLAUDE.md. Implement the Contact form using Netlify Forms. Add a netlify.toml with `[[redirects]]` rules so all routes serve index.html (SPA fallback). Initialize a git repo, commit, and print the commands to deploy to Netlify.

---

## Reference materials in this folder

- `index.html` — built home page (use as React port reference)
- `the-work.html` — built philosophy page
- `services.html` — built services page with all three tiers, investment summary, and FAQ
- `about.html` — built about page
- `for-physicians.html` — built physician referral page
- `contact.html` — built contact page with form and crisis section
- `styles.css` — complete design system (CSS variables, typography, components, responsive breakpoints)
- `README.md` — instructions for previewing the static site

---

*This is the foundation. Build everything from here.*

The Clinical Doula · Concierge Clinical Companion & Crisis Doula
Founded by April Bogle, RN · Ohm Academy of Healing · Nashville, Tennessee · Est 2026
