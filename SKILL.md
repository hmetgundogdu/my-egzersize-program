---
name: workout-template-installer
description: Reuse this exact workout site's source files and visual design. Customize only workout-data.js to implement a user's selected routine; never recreate the UI from prose.
---

# Workout Template Installer

## Absolute rule: REUSE, DO NOT REDESIGN
This repository IS the template. To give another person the same site, **copy the complete repository** (or fork it), including `index.html`, `workout-data.js`, and `.github/workflows/pages.yml`. Then change the workout data only.

Do NOT generate new HTML, new CSS, new muscle anatomy illustrations, new charts, a React application, different fonts, or alternative layouts. **Do not "implement the design" from this text.** The exact implementation is already included in the files. This is how the visual appearance remains as close as possible to the reference site.

## Steps for an agent
1. Read `index.html`, `workout-data.js`, `README.md`, and `.github/workflows/pages.yml`.
2. Ask for a routine only when the person has not supplied one. If their routine is present, proceed without extra questions. Keep prescribed movements, frequency, sets and reps intact; don't invent a training program.
3. Edit **only** `workout-data.js` (and optionally generic README text). Do not touch `index.html` or the SVG paths unless the user explicitly asks for a new feature or a genuine bug fix.
4. Update `config.sessions`: stable unique `id`, user-facing `title`, `type` of `strength` or `recovery`, and `items` entries. Each strength exercise has `{id, exercise, sets, reps}`; recovery items use `{id, exercise, prescription}`.
5. Update `config.exercises` for EVERY exercise name referenced in the sessions: the closest verified Free Exercise DB `image` slug, or `null`; and `muscles` coefficients using only recognized muscle keys. The exact spelling of `exercise` must match the catalog object key.
6. Review the generated site, especially the muscle maps and weekly radar chart. If new muscles fall outside supported keys, don't silently pretend that they are represented. Request an explicit feature expansion or explain the limitation.
7. Deploy the copied repository to its owner's GitHub Pages site using the already-provided workflow. Never publish to the original repository without authorization.

## What is already fully implemented
- Complete minimal white CSS and responsive layout
- Native click/tap-friendly checkboxes, browser-only localStorage and per-section reset
- Grayscale thumbnails via **one source**, Free Exercise DB
- Inline SVG front and back stylized muscle figures, color mapping blue → red
- SVG radar plot plus text list for estimated weekly muscle distribution
- GitHub Pages workflow; no package manager, bundler, build step or app dependencies
- English UI, accessible labels and plain static HTML

All of these are actual code in `index.html`. **Use the code, not a visual approximation.**

## Configuration reference
`workout-data.js` defines `window.WORKOUT_CONFIG`:

```js
window.WORKOUT_CONFIG = {
  title: "My workout plan.",
  eyebrow: "WEEKLY ROUTINE",
  subtitle: "3 workouts · Active recovery · A simple routine",
  sessions: [
    { id: "day-a", title: "Push Focus", type: "strength", items: [
      { id: "chest", exercise: "Machine Chest Press", sets: 3, reps: "10–15" }
    ]},
    { id: "recovery", title: "Active Recovery", type: "recovery", items: [
      { id: "walk", exercise: "Walking", prescription: "20–30 min" }
    ]}
  ],
  exercises: {
    "Machine Chest Press": { image: "Leverage_Chest_Press",
      muscles: { chest: 1, triceps: 0.35, shoulders: 0.25 } },
    "Walking": { image: "Walking_Treadmill", muscles: {} }
  }
};
```

Recognized muscle keys, all already drawn on the SVGs:
`chest`, `back`, `shoulders`, `biceps`, `triceps`, `quads`, `hamstrings`, `calves`, `lowerBack`, `glutes`.

The radar sums (strength-session sets × estimated coefficient) for each key. An exercise's `sets` MUST be a number, not "3 × 12". The `reps` field is display text. A non-strength `prescription` is never treated as weighted sets. Estimates are not direct muscle activation measurements.

Image URLs are derived from
`https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/SLUG/0.jpg`.
Check the real slug in the [source directory](https://github.com/yuhonas/free-exercise-db/tree/main/exercises). Do not make up a slug. If there is no appropriate image, use `image: null`; don't attach an unrelated image. Source images are styled with the template's original grayscale CSS.

## Checklist storage
The deployed site uses browser-local key `simple-workout-checks-v1` and section IDs + exercise indices. For a **new person / new repository**, independent localStorage means they have separate progress. For edits to an already-used routine, reordering exercises can misattribute checkmarks; reset or explicitly migrate existing data if changing order.

## Privacy and content
Use generic site title and descriptions; never insert a real person's identifying information, health status, medical history, personal notes, or training motivation unless explicitly requested. Do not track users or send checkbox data to a server. Separate **exercise content** from any personal context motivating the plan.

## Validation requirements
- Open both mobile (~360px) and desktop (~1280px) sizes, verify no horizontal overflow.
- Confirm each prescribed item renders with correct sets/reps and appropriate image.
- Confirm three things separately: per-section SVG muscle shading, radar totals, and checkboxes/reset/persistence.
- Confirm all strength sessions (not a fixed first-three assumption) are included in radar. Recovery sessions are excluded.
- Confirm all UI labels remain English and the reference layout/CSS was not regenerated.
- Verify the GitHub Actions workflow is successful before reporting the new site as live.

## If the user asks for a different design
Only then should you modify template source code. Back up the original first. For a site that looks **the same**, leave `index.html` untouched.

## User-facing agent prompt
"Use this repository as an exact ready-made template. Read SKILL.md. Do NOT redesign anything; modify only workout-data.js for my routine below, keeping the existing anatomy SVGs, grayscale thumbnails, chart, styling, and checklist behavior. Then validate and deploy my own copy of the site."
