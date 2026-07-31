# Portfolio — Gerald John Alviar

Two-column minimalist portfolio. Static HTML + vanilla JS. Content mirrored from
the Google Sites portfolio at `sites.google.com/view/gerald-alviar/landing`.

## What's populated

Real content pulled from your Google Sites:

- **8 projects** — Capstones (MySQL Masterclass, SQL Murder Mystery, Market Data Analysis) + Personal Works (2025 PBI Pinas, HR Data Set, MMARAS, Power BI Overview)
- **2 speaking gigs** — DAXdakan @ Microsoft PH, DAXdakan again @ AIM
- **Real resume link** — pointing to your Google Drive file
- **Real Excel Expert credential** — badge in sidebar
- **Placeholder avatar** — `placehold.co/400x400` in the sidebar until you upload `Headshot.jpg`

Project links currently point to your Google Sites pages, so the case studies stay
where they already are — you're not rebuilding them.

## To replace the placeholder avatar with your real photo

1. Add `Headshot.jpg` to the repo root.
2. In `data.js`, change:
   ```js
   avatar: "https://placehold.co/400x400/0a0a0a/ffffff?text=GJA",
   ```
   to:
   ```js
   avatar: "Headshot.jpg",
   ```

## What still needs filling in

- **GitHub URL** — replace `github.com/username` in `siteData.socials` with your real handle
- **Recommendations** — currently empty. Add LinkedIn quotes when ready.
- **Consider moving your resume out of Drive** — a Drive link works, but a proper PDF in the repo root (`resume.pdf`) is faster and doesn't require Google login for some viewers.

## Deploy to GitHub Pages

1. Create a repo. Name it `username.github.io` for a root URL like `https://username.github.io/`.
2. Upload every file in this folder (including `.nojekyll` — hidden, may need "Show hidden files" enabled).
3. Settings → Pages → Source: Deploy from a branch → main → / (root) → Save.
4. Wait ~1 minute.

## File map

```
index.html               homepage (two-column)
projects.html            projects list
project-sample.html      case study template (optional, for future case studies)
certifications.html      certifications list
recommendations.html     recommendations list
404.html                 fallback
style.css                all styling
data.js                  content (edit this)
components.js            HTML builders
app.js                   page conductor
.nojekyll                required for GitHub Pages
README.md                this file
Headshot.jpg             (optional) your photo — replaces the placeholder
```
