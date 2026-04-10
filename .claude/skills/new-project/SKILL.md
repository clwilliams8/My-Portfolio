---
name: new-project
description: Add a new project to Colton's portfolio. Creates a detail page under src/html/portfolio/, adds a listing card to portfolio.njk, and places images under src/assets/images/portfolio/{slug}/. Use when the user wants to showcase a new project they've built.
argument-hint: <project name or absolute path to the project repo>
allowed-tools: Read, Glob, Grep, Write, Edit, Bash(ls *), Bash(mkdir *), Bash(cp *), Bash(file *), Task
---

# New Project

Adds a project to the portfolio site. The portfolio is a Gulp + Nunjucks static site (see `CLAUDE.md`). Adding a project requires touching **three** locations — do not skip any.

## Process

1. **Get the source project location.** If the user only gave a name, ask for the absolute path to the repo. Read its `README.md`, `package.json` (or `composer.json`), and `.git/config` to gather:
   - Project name, one-sentence description, longer description
   - Tech stack (framework, key libraries, hosting)
   - Live URL and repo URL
   - Role (sole dev? team? rescue? greenfield?)
   - 3–7 notable technical highlights for the Summary section
2. **Pick a slug.** kebab-case, matches the live domain or project name. Examples: `roof-maxx`, `montana-tags`, `arkansas-honeyworks`.
3. **Choose the section** in `src/html/portfolio.njk`:
   - `#idustry` — "Industry Projects" — salaried employer work or agency-for-client work
   - `#ios-android` — mobile app binaries shipped to App Store / Play Store
   - `#personal` — "Personal / Free Lance Projects" — side projects, family/friend builds, OSS, rescues
   - If ambiguous, **ask the user** before placing.
4. **Place an image** under `src/assets/images/portfolio/{slug}/`:
   - Prefer a real brand logo (`logo.png` / `logo.svg`)
   - If no logo exists, use a responsive-mockup screenshot or a representative photo (see `montana-tags/responsive-showcase-mockup.png` for the mockup pattern)
   - Create the directory with `mkdir -p`, then `cp` the file in
   - If nothing suitable exists in the source repo, **ask the user** which image to use — do not invent one
5. **Create the detail page** at `src/html/portfolio/{slug}.njk` using the template below. Copy the wording style from `src/html/portfolio/montana-tags.njk` (small/medium project) or `src/html/portfolio/roof-maxx.njk` (large project with many achievements).
6. **Insert the listing card** into `src/html/portfolio.njk` at the **top of the chosen section** (so newest work appears first). Use the listing-card template below.
7. **Tell the user how to preview and deploy.** Do NOT run `npm run deploy` yourself.
   ```
   cd /Users/cwilliams/Desktop/Code/My-Portfolio
   nvm use
   gulp            # full build
   npx serve dist  # preview at http://localhost:3000/portfolio.html
   npm run deploy  # when you're happy — pushes to GitHub Pages
   ```

## Detail-page template

Save to `src/html/portfolio/{slug}.njk`. Replace every `{{PLACEHOLDER}}`. Keep the partial includes exactly as written.

```html
<!DOCTYPE HTML>
<!--
    Editorial by HTML5 UP
    html5up.net | @ajlkn
    Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
-->
<html>
{% include "./partials/headPortfolioDetail.html" %}

<body class="is-preload">

    <!-- Wrapper -->
    <div id="wrapper">

        <!-- Main -->
        <div id="main">

            <div class="inner">

                <!-- Header -->
                {% include "./partials/header-socialLinks.html" %}

                <!-- Content -->
                <!-- Back button -->
                <a href="../portfolio.html" class="button" style="margin-top: 35px;"><i class="fas fa-chevron-left"></i> Back to portfolio</a>
                <section>
                    <header class="main">
                        <h1>{{TITLE}}</h1>
                    </header>
                    <span class="image main"><img src="../images/portfolio/{{SLUG}}/{{IMAGE_FILENAME}}" alt="" /></span>

                    <h2>About {{CLIENT_OR_PROJECT}}</h2>
                    <p>{{ABOUT_PARAGRAPH}}</p>

                    <hr class="major" />

                    <h2>About The Project</h2>
                    <p><strong>Mission:</strong> {{MISSION_PARAGRAPH}}</p>
                    <p><strong>Technologies Used:</strong> {{COMMA_SEPARATED_TECHS}}.</p>
                    <p><strong>Links</strong>
                        <ul style="margin-left: 28px; margin-top: -20px;">
                            <li style="padding-bottom: 7px;"><a href="{{LIVE_URL}}" target="_blank">{{LIVE_URL_LABEL}}</a></li>
                            <!-- Repeat <li> for each key tech doc link -->
                        </ul>
                    </p>
                    <p><strong>Live Site: </strong><a target="_blank" href="{{LIVE_URL}}">{{LIVE_URL_DISPLAY}}</a></p>

                    <h2>Summary</h2>
                    <p>{{ROLE_PARAGRAPH}}</p>

                    <p><strong>{{ACHIEVEMENT_1_TITLE}}:</strong> {{ACHIEVEMENT_1_BODY}}</p>
                    <p><strong>{{ACHIEVEMENT_2_TITLE}}:</strong> {{ACHIEVEMENT_2_BODY}}</p>
                    <!-- Repeat for each achievement (3–7 is typical) -->

                </section>
            </div>
        </div>

        <!-- Sidebar & Footer -->
        {% include "./partials/sidebar-footer.html" %}

    </div>

    <!-- Scripts -->
    {% include "./partials/scriptsPortfolioDetail.html" %}
</body>

</html>
```

## Listing-card template

Insert into `src/html/portfolio.njk` at the **top** of the chosen `<div class="posts">` block. The `<img>` path is relative to `dist/` (no `../` prefix — the listing page sits one level above detail pages).

```html
<article>
    <a href="portfolio/{{SLUG}}.html" class="image"><img src="images/portfolio/{{SLUG}}/{{IMAGE_FILENAME}}" alt="" /></a>
    <h3>{{TITLE}}</h3>
    <p>{{2–3 SENTENCE SUMMARY — stack, role, and 1–2 standout features}}</p>
    <ul class="actions block">
        <li><a href="portfolio/{{SLUG}}.html" class="button">About the project</a></li><br>
        <li><a href="{{LIVE_URL}}" target="_blank" class="btn-blue">Go To {{LIVE_DOMAIN}}</a></li>
    </ul>
</article>
```

If the live site is a GitHub repo (OSS / no live URL), the second button should read `Go To {{ProjectName}}` and link to the repo — see the `attendIT` and `OpenGL_3D_Game` entries for examples.

## Conventions & gotchas

- **Relative paths only.** In detail pages use `../images/portfolio/{slug}/...`. In `portfolio.njk` use `images/portfolio/{slug}/...` (no leading `/`, no `../`).
- **Never edit `dist/`.** It's generated by `gulp`. All edits go under `src/`.
- **Image file location:** `src/assets/images/portfolio/{slug}/` — create the dir with `mkdir -p`. Gulp optimizes images with `gulp-imagemin` at build time, so drop raw files in — no pre-optimization needed.
- **Match the listing section order.** New work goes at the top of its section so recent projects are seen first.
- **Copy the section wording style** from an existing similar project — the portfolio has a consistent voice (achievement-focused, bolded subsection titles, concrete technical details).
- **Don't invent tech.** Only list technologies you can verify from the source repo's `package.json` / `composer.json` / config files.
- **Don't fabricate metrics or quotes.** If the user doesn't mention a specific number or testimonial, leave it out.

## Section heuristic

| Type of work | Section |
|---|---|
| Salaried W-2 employer project | `#idustry` |
| Agency client work (paid by firm) | `#idustry` |
| Contract / 1099 freelance for a business | `#idustry` |
| Family, friend, or personal side-build | `#personal` |
| Open-source or school/capstone project | `#personal` |
| Portfolio/self site or experiments | `#personal` |
| iOS or Android app shipped to a store | `#ios-android` |

When in doubt, ask.

## Completion checklist

- [ ] Image file exists at `src/assets/images/portfolio/{slug}/{filename}`
- [ ] Detail page exists at `src/html/portfolio/{slug}.njk` with all sections filled
- [ ] Listing `<article>` inserted at top of correct section in `src/html/portfolio.njk`
- [ ] Image paths: detail page uses `../images/...`, listing uses `images/...`
- [ ] Live URL + repo URL accurate (verify by opening)
- [ ] Stack list only contains tech actually used in the repo
- [ ] `gulp` build runs clean (no errors)
- [ ] Reminded the user to run `npx serve dist` to preview and `npm run deploy` to publish
