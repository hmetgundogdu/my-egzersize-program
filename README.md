# Workout Plan Template

A ready-made, minimalist workout checklist site for desktop and mobile. It includes grayscale exercise images, front/back muscle SVG heatmaps and a weekly working-set radar chart.

**Live example:** https://hmetgundogdu.github.io/my-egzersize-program/

## Create your own workout site

**Do not ask an agent to recreate the site from scratch.** Fork or copy this repository. All UI styling, anatomy figures, checklist logic and charts are already implemented.

1. Copy or fork the full repository.
2. Tell your coding agent to read [SKILL.md](./SKILL.md).
3. Supply your preferred exercises, sets, reps and session names.
4. Have the agent edit **only [workout-data.js](./workout-data.js)**.
5. Set **Settings → Pages → Source: GitHub Actions** in your copy. The existing workflow deploys automatically when you push to `main`.

**Example prompt:**

> Use this repository's SKILL.md and existing code as an exact template. Do not redesign the site. Customize only workout-data.js using my routine, including matched exercise illustrations and muscle coefficients. Validate the chart and publish my own copy on GitHub Pages.

## Repository files

| File | Purpose |
| --- | --- |
| [index.html](./index.html) | **Fixed renderer:** minimalist styling, checkbox logic, SVG body maps, radar, thumbnail layout |
| [workout-data.js](./workout-data.js) | **Editable routine:** sections, exercises, repetitions, image lookup and weighted-muscle estimates |
| [SKILL.md](./SKILL.md) | Instructions for other coding agents to reuse the exact existing implementation |
| [.github/workflows/pages.yml](./.github/workflows/pages.yml) | GitHub Pages deployment |

The application needs no framework or build step. Open `index.html` locally or publish through GitHub Pages. Unlike a separate fetched JSON file, the bundled `workout-data.js` is also compatible with ordinary file browsing.

Checkbox completion is saved to the current browser's `localStorage`. There is no account, online synchronization or telemetry. If you change the order of exercises on an existing live site, stored index-based checkmarks may need to be cleared or migrated.

Images use the [Free Exercise DB](https://github.com/yuhonas/free-exercise-db) collection and a common grayscale CSS treatment. Some equipment variants are approximations; verify the correct matching exercise. Muscle heatmaps and the radar describe *estimated set emphasis*, not measured muscle activation or guaranteed results.

## Consistency

The supplied renderer preserves the reference page's exact HTML/CSS/JS instead of leaving design choices to an agent. Rendering can still differ slightly by browser, screen size, or image availability. For major source-code changes, test visually at mobile and desktop widths.
