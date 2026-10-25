---
name: minimal-workout-page
description: Build or customize a clean, responsive single-page workout checklist with exercise thumbnails, per-session muscle anatomy SVG heatmaps, and a weekly workload radar chart. Use for creating a site like this repository or safely modifying its routine and visualizations.
---

# Minimal Workout Page — Coding Agent Skill

## Goal
Create an elegant, white, mobile-first workout program website with immediately usable exercise checklists, unobtrusive grayscale exercise illustrations, front/back muscle heatmaps, and a weekly muscle-distribution radar chart. The site should be readable on phones and desktop, self-contained, and publishable to GitHub Pages.

This skill documents the implementation pattern, **not a prescribed workout**. Accept the user's own routine. Do not infer, disclose, or embed medical conditions, names, identity, clinical motivations, or other private details in site content, metadata, source comments, README, commit messages, or analytics.

## When to use
- User wants a personal workout display/checklist with the same minimal visual language.
- User wants to add, remove, or rename exercises or sessions.
- User wants anatomical muscle emphasis and an aggregated chart.
- User wants to deploy a static workout site to GitHub Pages.

## Repository layout
- `index.html`: canonical implementation — HTML, CSS, JS and inline generated SVG, no framework/build.
- `README.md`: public description and usage.
- `.github/workflows/pages.yml`: deploy to GitHub Pages when `main` changes.
- `SKILL.md`: this agent specification.

Read the current files before editing; preserve any user changes. Use the existing language (English by default) unless explicitly asked to change it.

## UI specification
1. A clean white page, centered narrow content column (about 760 px max), generous whitespace, thin light-gray separators, unobtrusive typography.
2. Program sections rendered **all at once** with section title, exercise count, optional muscle-emphasis panel, exercise list, completion count, and *Clear checks* button. No calendar, date navigation, dashboard cards or accounts unless requested.
3. Each exercise row: a native accessible checkbox, name, set/rep prescription and optional thumbnail at the right. Keep rows touch-friendly.
4. Thumbnails should come from a single consistent, permission-compatible source. This repository uses [Free Exercise DB](https://github.com/yuhonas/free-exercise-db): `https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/<EXERCISE_SLUG>/0.jpg`. Respect upstream terms, use a truthful mapping to each exercise (nearest variation only when clearly disclosed), add lazy loading and a graceful missing-image fallback. CSS: `filter: grayscale(1) contrast(.85) brightness(1.05)`, subtle opacity, `object-fit: contain`. Avoid visually dominant images.
5. Each strength section: small **front and back anatomical figure**. Create vector paths with inline SVG (`createElementNS` or static markup). Map primary worked muscle areas to color based on session-specific relative weighted set volume. Visual palette: neutral inactive, blue low, intermediate desaturated tones, red high. Keep a discrete legend. The figures are *stylized schematic muscle maps*, not exact medical anatomy.
6. Bottom section: a readable **weekly distribution radar chart**, also self-contained SVG. Include text-value list for accessibility and exact estimated values. No extra charting library.
7. Active recovery can omit muscular heatmap when intensity modeling is not meaningful.

## Data model and exercise accounting
Current `index.html` defines:
- `plans = [{id,title,meta,items}]` where each `items` entry is `[exerciseName, prescriptionText]`.
- `imagePaths = {exerciseName: exerciseDbSlug}`.
- `muscleWeights = {exerciseName: {groupKey: coefficient}}`.
- `groups` / `names` for chart labels and matching front/back anatomical locations.
- `metrics(plan)` computes approximate weekly/session *weighted working sets* from numeric set counts in prescriptions (e.g. `3 × 12–15` → 3). A coefficient of 1 indicates principal work and fractional coefficients represent secondary involvement.
- `bodySvg(view,values,max)` draws front/back and `radarChart()` aggregates only strength sessions.

The coefficients are **illustrative estimates**, not EMG measurements or medically validated muscular activation. Do not call them precise activation, training effectiveness or biological intensity. Radar compares relative *estimated set emphasis*, not true strength stimulus. Do not count the same secondary muscle as another full primary set unless intended. When editing an exercise, update `plans`, `imagePaths` and `muscleWeights` together. Add SVG-region support for any new muscle group and check both front and back renderings.

Avoid breaking calculations when prescriptions contain ranges, durations or unusual formats: parse strength sets explicitly or use structured `sets` in a refactor. Do not count rest-day walking/minutes as weight-training sets. If the user changes the number of sections, do not assume `plans.slice(0,3)`; filter by section type or another reliable flag.

## Checkboxes & persistence
- Preserve `localStorage` key `simple-workout-checks-v1` for backward compatibility.
- Checkbox records are indexed by stable section ID and exercise index. If rearranging existing items, **migrate to exercise-ID-based keys** to avoid misattributing old checkmarks, or deliberately migrate existing records.
- Handle unavailable/blocked localStorage gracefully.
- Clear checks must reset **only the selected section**.
- Do not transmit progress to a server. There is no authentication or cross-device sync.
- Maintain keyboard focus, semantic labels, contrast and screen-reader-readable chart descriptions.

## Implementation workflow
1. Read `index.html`, `README.md` and workflow before writing. Check existing GitHub Pages status.
2. Update the exercise data first, then illustration mapping and chart muscle weights; avoid modifying the visual system unnecessarily.
3. Render/exercise-test: small mobile viewport (~360 px), desktop (~1280 px), check no overflow; test image failures, all checkboxes, persistence across reload, section reset, SVG front/back and radar totals. Compare expected counts to displayed values and verify no JavaScript syntax errors.
4. Search source and public copy for private identifiers or medical explanations; keep all visible interface labels in English unless requested otherwise.
5. Commit changes to `main` after validation. The Pages workflow publishes automatically if enabled. Confirm successful deployment status instead of promising the site is live before confirmation.

## Acceptance criteria
- A visitor sees only a simple, complete workout plan.
- Each exercise is legible and easy to check, without losing previous checkmarks.
- Single-source grayscale images are accurate and do not dominate the page.
- The right session's SVG figures highlight relevant muscles; diagrams and radar update with changes in the plan.
- Overall radar has an accompanying numerical, accessible summary.
- Mobile and desktop layouts are clean; no framework, build or extra account required.
- No personal, sensitive, or diagnostic information is exposed.
- GitHub Pages deploys successfully.

## Example coding-agent request
"Using SKILL.md, customize index.html for the following training sessions and exercises. Preserve the minimal white layout, exercise checkboxes, grayscale images from one source, front/back SVG muscle diagrams and the bottom weekly workload radar. Keep data local, the interface in English, and publish through the existing GitHub Pages workflow. Validate the layout and numerical summary before deploying."
