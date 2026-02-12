---
name: cover-letter
description: Write a tailored cover letter for a job posting. Paste the job description as the argument.
argument-hint: <paste full job description>
allowed-tools: Read, Glob, Grep, Write, Task
---

# Write Cover Letter

Write a cover letter for Colton Williams tailored to the following job posting: $ARGUMENTS

## Process

1. **Analyze the job posting** — Identify the company name, role title, required technologies, desired qualifications, and cultural values.
2. **Read portfolio projects** — Use Explore agents to read ALL portfolio project files in `src/html/portfolio/*.njk` to gather specific details, metrics, and technologies for each project. Do NOT skip this step. Every cover letter must be grounded in real project details.
3. **Read the resume** — Read `scripts/resume-2026.html` for current job titles, dates, and career timeline.
4. **Read the template** — Read `cover_letter_example.md` for tone, structure, and formatting.
5. **Write the cover letter** — Save as `cover_letter_<company_name_snake_case>.md` in the project root.

## Template Structure (from cover_letter_example.md)

Follow this exact formatting pattern:

```markdown
# Cover Letter - [Role Title]

**Colton Williams**
Full-Stack Software Engineer
Portfolio: [coltons-apps.tech](https://coltons-apps.tech)

---

**[Company Name]**
[Role Title]

---

To the [Company/Team Name],

[Opening paragraph — role applied for, years of experience, key stack alignment, why this company]

## [Section headers tailored to the role — 3-5 sections highlighting relevant experience]

[Each section leads with the MOST relevant project for that skill area, using **bold project names** and specific metrics/details from the portfolio]

## [If there are technology gaps, include an honest "Addressing the [X] Requirement" section]

## Working Style

[Remote experience, collaboration, mentorship — keep brief]

---

[Closing line specific to the company's mission or goals]

Thank you for your consideration.

**Colton Williams**

---

_References available upon request._
```

## Colton Williams — Background

**Years of Experience:** 7+
**Primary Stack:** PHP/Laravel, Vue.js, Tailwind CSS, MySQL
**Work Style:** 100% remote for 3+ years, distributed teams, daily standups, async communication
**Location:** Central Time Zone

### Current Work History

1. **Roof Maxx** — Senior Software Engineer III (promoted Sep 2025) — Dec 2024–Present, Remote
2. **Colton Williams Ventures, LLC** — Owner — Jun 2023–Present, Benton, AR
3. **SOLTECH** — Full Stack Developer (Contract) — Nov 2023–Dec 2024, Remote
4. **Active Logic** — Software Engineer — Oct 2022–Nov 2023, Remote
5. **FLEX360** — Senior Full Stack Laravel/PHP Developer — Feb 2022–Oct 2022, Little Rock, AR
6. **FLEX360** — Web Developer — Oct 2018–Feb 2022, Little Rock, AR

### Contact

- Email: colton@coltons-apps.tech
- Portfolio: https://coltons-apps.tech
- GitHub: https://github.com/clwilliams8
- LinkedIn: https://www.linkedin.com/in/colton-williams7/

### Key Projects (read the .njk files for full details)

| Project | Stack | Key Metrics |
|---------|-------|-------------|
| **Roof Maxx** | Laravel, Vue.js, Go, Shadcn, AWS S3, Google Cloud Pub/Sub, GitHub Actions | 300+ franchise dealerships, monolith-to-microservices, Laravel Horizon, Pennant feature flags |
| **ABA Toolbox** | Laravel, GraphQL, Quasar/Vue.js, PostgreSQL, Kubernetes, Docker | HIPAA/FERPA compliant, 1,000+ curriculum lessons, 13-step data migration, offshore team |
| **Sunnybrook TMS** | Laravel, Vue.js, Bootstrap 5, MySQL, Azure, Meilisearch | 80% of codebase, $50M+ revenue client, 300+ daily shipments, 20-status state machine, sub-100ms search |
| **Hank's Fine Furniture** | Laravel, Tailwind, Storis eBridge API, MySQL | $70K first-month sales, 18 stores, real-time inventory sync, Haversine geolocation |
| **Be Pro Be Proud** | Laravel, Tailwind, Twilio SMS, Google Maps, MySQL | Multi-tenant, 6 state instances, student enrollment + sponsor matching |
| **Tutor Chest** | Laravel, WordPress REST API, Stripe/Laravel Cashier | Platform rescue after 2 failed contractors + agency |
| **Arkansas House of Representatives** | Laravel, Bootstrap, Google Maps, MySQL | Government CMS, long-term client, CSV exports, Find My Representative |
| **Sunnybrook/AVECC** | Laravel, Tailwind, FLEX360 CMS | WordPress-to-Laravel migration, dynamic mascot system |
| **Montana Tags** | Shopify, Liquid, JavaScript | Tax savings calculator, greenfield e-commerce |
| **Fish 'N Stuff** | Shopify, Google Sheets, CSV | 45,000+ row product migration |
| **Low's Bridal** | Laravel, Tailwind, MySQL | 2,500+ dress inventory, advanced multi-faceted filtering |
| **Reed's Metals** | Laravel, Bootstrap, Google Maps, MySQL | Intelligent quote routing, cookie-based location persistence, 10 locations |
| **Union Corrugating** | Laravel, Tailwind, Google Maps, FLEX360 CMS | ~90% individual contribution, roof visualization tool, contractor locator |
| **Hank's Mobile App** | GoodBarber, PWA, HTML5/CSS3 | Cross-platform, App Store + Google Play in 2 weeks |
| **Arkansas Bride** | Laravel, Tailwind, Passwordless Auth, MySQL | 800+ vendor portal, revision-based approval workflow, print integration |
| **Clinton School** | Laravel, Bootstrap, CyberSource/Visa | 2,000+ blog post migration, ADA compliance (WCAG) |
| **SeaArk Boats** | FLEX360 CMS, PHP, MySQL | Tournament module with datetime-based categorization |
| **Professional Consulting Services** | Laravel, Tailwind | First-ever website for 30+ year healthcare company |
| **Kajacs Contractors** | Laravel, Tailwind | WordPress rebuild, multi-state industrial contractor |
| **AttendIT** | Android SDK, Java, SQLite | Capstone project, native Android, UML/SRS documentation |
| **OpenGL 3D Game** | Java, OpenGL, GLSL | Custom vertex/fragment shaders, 3D rendering engine |

### Technical Skills Summary

**Backend:** PHP/Laravel (7+ years, 100s of production apps), GraphQL, Go microservices
**Frontend:** Vue.js (Quasar, Pinia), Tailwind CSS, Bootstrap, JavaScript/ES6+
**Databases:** MySQL (primary), PostgreSQL, Azure SQL Server, Meilisearch
**Cloud:** AWS S3, Azure (VMs, SQL Server, Blob Storage, AD), Google Cloud Pub/Sub
**DevOps:** Kubernetes, Docker, Laravel Forge/Sail/Horizon, GitHub Actions CI/CD
**Integrations:** Twilio SMS, Stripe/Laravel Cashier, QuickBooks API, HubSpot CRM, Google Maps/Geocoding, Macropoint GPS, Storis eBridge, CyberSource/Visa
**Architecture:** Multi-tenant (Tenancy for Laravel), monolith-to-microservices, event-driven, feature flags (Pennant), state machines
**Practices:** PHPUnit, Agile/Scrum, Document-Driven Development (MkDocs), AI-assisted development (Claude Code)

## Writing Guidelines

1. **Be specific, not generic.** Every claim must reference a real project with concrete details and metrics from the portfolio.
2. **Tailor sections to the job.** Don't use the same section headers every time. Name sections after the skills/values the job posting emphasizes.
3. **Lead with the strongest match.** The opening paragraph and first project section should highlight whatever aligns most directly with the role.
4. **Be honest about gaps.** If the role requires a technology Colton hasn't used extensively in production, include a section that honestly addresses it while framing transferable experience. Never fabricate experience.
5. **Keep it concise.** The cover letter should be scannable. Use bold project names, short paragraphs, and specific numbers.
6. **Match their language.** Mirror the job posting's terminology and values in section headers and descriptions.
7. **Don't repeat the same intro.** Vary the opening paragraph structure — don't always start with "I'm applying for the X position. With 7+ years..."
8. **End with mission alignment.** The closing should connect to the company's specific mission, not be generic.
9. **Audience is recruiters, engineers, and CTOs.** Write technically but accessibly. Show depth without jargon overload.
10. **No emojis.** Keep the tone professional and direct.
