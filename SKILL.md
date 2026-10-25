---
name: workout-template-installer
description: Install, customize, and safely update the exact workout template from its official upstream repository. Keep the user's program intact and request explicit approval before any template update.
---

# Workout Template Installer

## Absolute rule: REUSE, DO NOT REDESIGN
This repository IS the template. To give another person the same site, **copy the complete repository** (or fork it), including `index.html`, `template-version.js`, `workout-data.js`, `manifest.webmanifest`, `sw.js`, `assets/app-icon.svg`, and `.github/workflows/pages.yml`. Then change the workout data only.

Do NOT generate new HTML, new CSS, new muscle anatomy illustrations, new charts, a React application, different fonts, or alternative layouts. **Do not "implement the design" from this text.** The exact implementation is already included in the files. This is how the visual appearance remains as close as possible to the reference site.

## Steps for an agent
1. Read `index.html`, `template-version.js`, `workout-data.js`, `README.md`, and `.github/workflows/pages.yml`.
2. Ask for a routine only when the person has not supplied one. If their routine is present, proceed without extra questions. Keep prescribed movements, frequency, sets and reps intact; don't invent a training program.
3. Edit **only** `workout-data.js` (and optionally generic README text). Do not touch `index.html` or the SVG paths unless the user explicitly asks for a new feature or a genuine bug fix.
4. Update `config.sessions`: stable unique `id`, user-facing `title`, `type` of `strength` or `recovery`, and `items` entries. Each strength exercise has `{id, exercise, sets, reps}`; recovery items use `{id, exercise, prescription}`.
5. Update `config.exercises` for EVERY exercise name referenced in the sessions: the closest verified Free Exercise DB `image` slug, or `null`; and `muscles` coefficients using only recognized muscle keys. The exact spelling of `exercise` must match the catalog object key.
6. Review the generated site, especially the muscle maps and weekly radar chart. If new muscles fall outside supported keys, don't silently pretend that they are represented. Request an explicit feature expansion or explain the limitation.
7. Deploy the copied repository to its owner's GitHub Pages site using the already-provided workflow. Never publish to the original repository without authorization.

## Template version and opt-in upstream updates

**Official upstream source:** https://github.com/hmetgundogdu/my-workout-program  
**Version source of truth:** `template-version.js`, which defines `window.WORKOUT_TEMPLATE_VERSION` as a semantic version string. The current initial versioned release is **v1.2.0**. Its label is shown beside WEEKLY ROUTINE. A user's exercise customization never increases the template version.

### On installing the template
- Clone/fork the complete repository and retain `template-version.js`.
- Record the original upstream remote (`git remote add upstream https://github.com/hmetgundogdu/my-workout-program.git` when appropriate); a fork's `origin` is the user's repository.
- Preserve the customized `workout-data.js` separately and keep local changes committed. Never push or open PRs on the upstream owner's repo as part of installing or updating a user's copy.

### Check for updates when the user requests it or on a subsequent coding-agent maintenance session
1. **Read the user's local `template-version.js`** and version displayed on the page.
2. Fetch the latest `template-version.js` from the official upstream `main` (GitHub API or `git fetch upstream`); use GitHub file history, changelog/commits and a diff for changes since the user's previous upstream revision. Fetch only on request or while an agent is running, not silently from site visitors.
3. If versions are equal, report that no newer template version is advertised. If upstream is newer, summarize concrete changes to the user: new features, bug fixes, any migrations, and which files would change. A version difference is an **availability signal**, not a guarantee of compatibility; review actual diffs. If versions are equal but upstream has new commits, report them as unreleased changes rather than an official new version.
4. **ASK FOR EXPLICIT APPROVAL BEFORE applying any update, creating a commit, or deploying to the user's site.** Offer to skip or postpone. Never auto-merge on your own, even if a patch seems safe.
5. After approval, **back up** `workout-data.js` and any user modifications; identify upstream changes against the user's copy. Apply or cherry-pick only template implementation files that the user approved. Use a three-way merge when possible and resolve conflicts consciously. **Never overwrite their customized `workout-data.js`** with the upstream example. Keep user-specific meta tags, links, Pages URLs and other customized settings; update upstream-owned files only after review.
6. Run functional checks (all sessions, counts, SVGs, radar, checkmarks, mobile layout) and perform any necessary migrations. If updating checkbox keys, explicitly preserve/migrate existing localStorage or explain the reset risk before changing it.
7. Update `template-version.js` only after the upstream code for that version is actually incorporated and verified. Show the new version label on screen. Commit/deploy only to the user's copy, then report its deployment status. If conflicts can't safely be resolved, stop and ask rather than discarding changes.

**Important:** This skill instructs a coding agent to check and apply updates with approval. The browser page **does not autonomously poll upstream, message the user, download updates, or mutate the repository**. Someone must run their coding agent to carry out an update check.

### Suggested update request
"Check the official my-workout-program template for a newer version. Show me the differences and ask for my approval before applying anything. If I approve, update only the template implementation, preserve my workout-data.js and site settings, verify, then deploy my copy."

## What is already fully implemented
- Installable PWA with manifest, app icons, service worker and standalone home-screen experience
- Version label next to the header, read from `template-version.js`
- Complete minimal white CSS and responsive layout
- Native click/tap-friendly checkboxes, browser-only localStorage and per-section reset
- Grayscale thumbnails via **one source**, Free Exercise DB
- Inline SVG front and back stylized muscle figures, color mapping blue → red
- SVG radar plot plus text list for estimated weekly muscle distribution
- GitHub Pages workflow; no package manager, bundler, build step or app dependencies
- English UI, accessible labels and plain static HTML

All of these are actual code in `index.html`. **Use the code, not a visual approximation.**

## PWA preservation and update rules

- Copy `manifest.webmanifest`, `sw.js`, `assets/app-icon.svg`, the generated PNG app icons, and `.github/workflows/pwa-icons.yml` along with the normal template files.
- Manifest `start_url`, `scope`, and service worker registration are **relative**, so forks deployed under their own GitHub Pages subpaths remain in scope.
- A new installation is offered automatically only where the browser supports the `beforeinstallprompt` event. On iOS, users can select Safari's Share → Add to Home Screen.
- The service worker caches the same-origin shell and workout configuration. Third-party exercise thumbnails are deliberately network-only; never promise offline pictures or data sync.
- When accepting future official template releases that change PWA assets or caching behavior, update the cache namespace in `sw.js` and make sure the previous cache is deleted in the activate handler.
- Generated icons need a successfully completed `pwa-icons.yml` run, and installability must be tested after the PNG files are deployed. Do not promise installability before checking the manifest/icon URLs.
- Keep the user's private `workout-data.js` intact during upstream version upgrades. Do not turn the service worker into an automatic *source-code* updater; agent-managed fork upgrades still require explicit user permission.
- Validate normal install on Chromium, Add to Home Screen on iOS where possible, offline reload, checkbox persistence, and network recovery.

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
