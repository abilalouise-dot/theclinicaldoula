# The Clinical Doula · Website Files

A complete, working static website for theclinicaldoula.com — built to your exact brand spec.

---

## What's in this folder

| File | What it is |
|---|---|
| `index.html` | Home page |
| `the-work.html` | The Work — philosophy + six values |
| `services.html` | Services — three tiers, investment summary, FAQ |
| `about.html` | About — your story, credentials, personal note |
| `for-physicians.html` | Physician referral page |
| `contact.html` | Consultation form + crisis activation |
| `styles.css` | Complete brand design system (ink/cream/gold, Cormorant + Jost) |
| `CLAUDE.md` | Briefing document for Claude Code (when you're ready for the React production version) |

---

## How to preview the site right now

**On Windows:** Double-click `index.html`. It will open in your default browser. Click around between pages — the navigation works, the form works, the design is responsive.

**To check on your phone:** The site uses only standard HTML/CSS, so any browser will render it. You can also drag the folder into Netlify Drop (see below) to get a temporary public URL in 30 seconds.

---

## How to publish the site (three options)

### Option 1 — Netlify Drop (fastest, free)
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag this entire folder onto the page
3. You'll get a temporary URL like `random-name-123.netlify.app`
4. To use your own domain (`theclinicaldoula.com`), create a free Netlify account, claim the site, and add a custom domain. Total time: ~15 minutes once you own the domain.

### Option 2 — Convert to React + deploy to Netlify (the production path)
This is what your wireframe specifies. Open Claude Code on your computer, navigate to this folder, and run:

```
claude
```

Then paste this prompt:

> Read CLAUDE.md and follow the step-by-step build instructions inside it. Convert the static HTML files into a Vite + React + TypeScript project, then prepare it for Netlify deployment.

Claude Code will scaffold the project, port the pages, install dependencies, and prep it for git/Netlify. You'll have a real, deployable React site in about 20 minutes.

### Option 3 — Hand to a developer
The HTML, CSS, and CLAUDE.md briefing are everything a developer needs. The recommended stack and folder structure are documented. Estimated work: a junior front-end developer can ship the React version in 1-2 days.

---

## What still needs your input

These were intentionally left as placeholders for you to add:

1. **Your editorial portrait** — Replace the placeholder boxes on the home page (`.about-portrait`) and About page (`.portrait`). Your wireframe calls for a "large editorial portrait." Two-column layout. Black and white or warm-tone color photo, professional but not corporate — think *The New Yorker*, not LinkedIn.
2. **Real testimonials** — When you have them, replace the placeholder quote on the home page in `index.html`. Keep the "First name · Relationship · City" attribution format your brand brief specifies.
3. **Logo system files (SVG)** — The Presence Mark is built inline in HTML/SVG (a held circle with a centered gold dot — exactly to your spec). When you have the full logo system PDF/SVGs from your designer, swap in the wordmark SVG on the home hero for a sharper render at all sizes. Save a favicon SVG to the folder for the browser tab icon.
4. **Domain & email** — `theclinicaldoula.com` (purchase via Namecheap or Google Domains, ~$15/year). Your Proton Mail address `theclinicaldoula@proton.me` is already wired into the For Physicians page.
5. **Netlify Forms setup** — When you go React, the form will need `data-netlify="true"` added (Claude Code handles this). On the static version, the form currently shows a confirmation but doesn't email you yet. Easiest fix: use [Formspree](https://formspree.io/) or wait for the React version.

---

## Brand fidelity check

This site is built to your exact spec:

- Three colors only: Ink `#0A0806`, Cream `#F5EFE4`, Gold `#B8895A`
- Two fonts only: Cormorant Garamond Light + Italic, Jost Light
- Generous whitespace at every breakpoint
- Gold rules as section dividers
- Ink-stage closing CTA on every page
- Italic display headlines, sparing use of gold accents
- No emojis, no marketing-speak, every line of copy in your voice
- WCAG AA contrast, keyboard-navigable, skip-to-content link, meaningful alt text
- Mobile-responsive at 767px and below

If anything feels off-brand once you see it live, note the page and section and we can refine.

---

## Next steps

Open `index.html` in your browser. See if the home page feels like *you*. If yes — let's deploy. If something needs to shift, we'll shift it.

— Built for April Bogle, RN · Founder · The Clinical Doula
