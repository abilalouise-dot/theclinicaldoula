# Deploying The Clinical Doula to the live web

A plain-language guide to publishing this site at theclinicaldoula.com via GitHub → Netlify.

**Total time:** 30–45 minutes the first time. After that, every change auto-deploys in seconds.

---

## Before you start

You'll need:
- A free **GitHub** account ([github.com](https://github.com))
- **GitHub Desktop** installed ([desktop.github.com](https://desktop.github.com)) — this is the friendly visual app, not the command line
- A free **Netlify** account ([netlify.com](https://netlify.com))
- Eventually: the domain `theclinicaldoula.com` purchased from a registrar (Namecheap, Google Domains, etc.) — but you can deploy first and add the domain later

---

## Step 0 — Delete the leftover `.git` folder

A partial git setup got created during automation. Before anything else, remove it:

1. In **File Explorer**, navigate to your Desktop folder `The Clinical Doula`.
2. Click the **View** tab at the top, and check **Hidden items**.
3. You'll see a folder called `.git` (with the dot in front).
4. Right-click it → **Delete**. (If Windows says you need permission, click **Continue**.)

That's it. Now the folder is clean and ready for GitHub Desktop.

---

## Step 1 — Create your GitHub account

1. Go to [github.com](https://github.com) and click **Sign up**.
2. Use your email `abila.bogle@gmail.com` (or whichever you prefer).
3. Pick a username — short, professional. Suggestions: `aprilbogle`, `theclinicaldoula`, `april-rn`. This becomes part of your repo URL, so something readable.
4. Verify your email when GitHub sends the confirmation.

---

## Step 2 — Install GitHub Desktop

1. Go to [desktop.github.com](https://desktop.github.com) and download the Windows installer.
2. Run it. Sign in with the GitHub account you just created.
3. When it asks for "Git config name/email," enter `April Bogle` and your email. (This is just for labeling commits.)

---

## Step 3 — Add your project to GitHub Desktop

1. Open **GitHub Desktop**.
2. Click **File → Add local repository**.
3. Browse to `Desktop\The Clinical Doula` and click **Select Folder**.
4. GitHub Desktop will say "this folder isn't a git repository" — click **Create a repository here**.
5. Fill in:
   - **Name:** `theclinicaldoula` (or whatever you like — this becomes the GitHub URL)
   - **Description:** `The Clinical Doula — concierge clinical companion website`
   - **Local path:** (already filled — leave it)
   - **Initialize with README:** uncheck (we already have one)
   - **Git ignore:** None (we already have one)
   - **License:** None (private project)
6. Click **Create Repository**.

You'll now see a list of every file in the project under "Changes." That's good — they're all staged for the first commit.

---

## Step 4 — Make your first commit

1. At the bottom-left of GitHub Desktop, type a commit message: `Initial commit — The Clinical Doula site`
2. Click **Commit to main**.

---

## Step 5 — Publish to GitHub

1. At the top of GitHub Desktop, click **Publish repository**.
2. Choose **Keep this code private** (recommended — you can change later).
3. Click **Publish repository**.

Done. Your code is now on GitHub. You can see it by clicking **View on GitHub** in the same menu.

---

## Step 6 — Connect Netlify to your GitHub repo

1. Go to [app.netlify.com](https://app.netlify.com) and sign in with your GitHub account (easiest — it links them automatically).
2. On your Netlify dashboard, click **Add new site → Import an existing project**.
3. Click **Deploy with GitHub** and authorize Netlify to access your repos.
4. Select your `theclinicaldoula` repository.
5. **Build settings:** leave everything blank/default. The site is plain HTML, no build step needed. The `netlify.toml` in your folder tells Netlify exactly what to do.
6. Click **Deploy site**.

In about 30 seconds, Netlify gives you a live URL like `tender-curie-7a3b4c.netlify.app`. **Click it.** Your site is live on the internet.

---

## Step 7 — Rename the site (optional but nice)

1. In Netlify, click **Site configuration → Change site name**.
2. Rename to `theclinicaldoula` or `clinicaldoula` — gives you `theclinicaldoula.netlify.app` as a public URL until your real domain is ready.

---

## Step 8 — Connect your real domain (when ready)

When you've purchased `theclinicaldoula.com`:

1. In Netlify: **Domain management → Add custom domain → enter `theclinicaldoula.com`**.
2. Netlify shows you DNS records to add at your domain registrar (Namecheap, Google Domains, etc.).
3. Add the records they show you. Wait 10 minutes to a few hours for DNS to propagate.
4. Netlify auto-provisions a free HTTPS certificate (Let's Encrypt). Site is now live at theclinicaldoula.com with the green padlock.

---

## How updates work after this

Every time you want to change something on the site:

1. Edit a file in `Desktop\The Clinical Doula` (or have me edit it for you).
2. Open **GitHub Desktop**. It shows the changed files.
3. Type a commit message (e.g., `Update homepage testimonial`) → click **Commit to main**.
4. Click **Push origin**.
5. Netlify auto-deploys the change in ~30 seconds. Your live site updates.

That's the whole loop. No FTP, no uploading, no developer needed.

---

## What's in your repo (and what isn't)

**Published to GitHub & Netlify:**
- All `.html`, `.css`, `.toml`, `.md` files
- Your portrait image `The Clinical Doula.jpeg`
- The `.gitignore` (which keeps the next bullet out)

**Kept local only (excluded by `.gitignore`):**
- All PDFs (your brand brief, pricing, intake forms, sovereign agreement, etc.) — these contain business-sensitive content and should not be public
- The ProtonMail installer
- OS junk and editor files

If you ever want to share a PDF intentionally, copy it into a separate `public/` folder or remove the `*.pdf` line from `.gitignore`.

---

## If something goes wrong

| Symptom | Fix |
|---|---|
| GitHub Desktop says "this is already a repository" | You skipped Step 0. Go delete the `.git` folder. |
| Netlify deploys but the site is broken (no fonts/colors) | Make sure `styles.css` got pushed — it should appear in your GitHub repo's file list. |
| Image doesn't show on About page | Make sure `The Clinical Doula.jpeg` got pushed (large files sometimes need extra confirmation in GitHub Desktop). |
| `theclinicaldoula.com` doesn't load after DNS setup | Wait longer (DNS can take up to 24 hours, though usually 10-30 minutes). Check that you copied the records exactly. |

If you get stuck on any step, screenshot it and I can walk you through.

— Built for April Bogle, RN · Founder · The Clinical Doula
