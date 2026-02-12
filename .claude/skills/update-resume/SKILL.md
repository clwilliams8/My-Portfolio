---
name: update-resume
description: Update Colton Williams' resume PDF with new job history, skills, or other content changes. Use when the user wants to modify, update, or regenerate the resume.
argument-hint: [description of changes]
allowed-tools: Read, Glob, Grep, Edit, Write, Bash(node *)
---

# Update Resume

Update Colton Williams' resume based on the requested changes: $ARGUMENTS

## Key Files

| File | Purpose |
|------|---------|
| `scripts/resume-2026.html` | **HTML source** — edit this file to change resume content |
| `scripts/generate-resume.cjs` | **PDF generator** — Puppeteer script that converts HTML to PDF |
| `src/assets/images/Colton Williams - Resume 2026.pdf` | **Output PDF** — the generated resume |
| `src/html/partials/sidebar-footer.html` | **Sidebar link** — update the resume filename here when renaming |

## Resume Structure

The HTML resume has a two-column layout across 2 pages:

**Page 1 (two-column):**
- Left column (62%): Work Experience (first 3 entries)
- Right column (38%): Career Objective, Education, Skills

**Page 2 (single column, 62% width):**
- Work Experience (continued) — remaining entries

## Current Work History (in order)

1. **Roof Maxx** — Senior Software Engineer III (promoted Sep 2025 from Senior SE II) — Dec 2024–Present, Remote
2. **Colton Williams Ventures, LLC** — Owner — Jun 2023–Present, Benton, AR
3. **SOLTECH** — Full Stack Developer (Contract) — Nov 2023–Dec 2024, Remote
4. **Active Logic** — Software Engineer — Oct 2022–Nov 2023, Remote
5. **FLEX360** — Senior Full Stack Laravel/PHP Developer — Feb 2022–Oct 2022, Little Rock, AR
6. **FLEX360** — Web Developer — Oct 2018–Feb 2022, Little Rock, AR

## Design Details

- Font: Roboto (loaded from Google Fonts)
- Accent color: `#4A90D9` (blue for company names, links, section dividers)
- Page size: US Letter (8.5in x 11in)
- Pages use `overflow: hidden` with fixed height to prevent content bleeding across page boundaries

## Content Sources

- **Portfolio projects** are the source of truth for job descriptions: `src/html/portfolio/*.njk`
- **LinkedIn profile** descriptions may contain additional detail not in the portfolio
- When adding a new job, distill portfolio/LinkedIn content into concise, impactful resume bullets written for a CTO / tech recruiter / tech PM audience

## How to Regenerate the PDF

After editing `scripts/resume-2026.html`, run:

```bash
node scripts/generate-resume.cjs
```

This outputs to `src/assets/images/Colton Williams - Resume 2026.pdf`.

**Important:** Puppeteer must be installed (`npm install puppeteer`). The generate script uses `.cjs` extension because the project has `"type": "module"` in package.json.

## When Updating for a New Year

1. Update the filename references in `scripts/generate-resume.cjs` (output path)
2. Rename the HTML source file if desired
3. Keep the previous year's PDF intact as a backup
4. Update this skill file with any structural changes

## Contact Info

- Email: colton@coltons-apps.tech
- Phone: (501) 304-4100
- Location: Benton, AR
- LinkedIn: https://www.linkedin.com/in/colton-williams7/
- GitHub: https://github.com/clwilliams8

## Checklist

After making changes:
1. Edit `scripts/resume-2026.html` with the requested content changes
2. Run `node scripts/generate-resume.cjs` to regenerate the PDF
3. Read the generated PDF to visually verify no content is clipped or overflowing
4. If content overflows page 1, consider moving entries to page 2 or reducing bullet count
5. Confirm all dates, titles, company names, and links are correct
