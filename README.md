# Workout Plan

A minimal, responsive workout checklist for mobile and desktop.

## Features

- Workout A, B, C, and active recovery
- Checkboxes for each exercise
- Reset checkmarks independently for each section
- Local browser storage for progress
- Clean white design
- Single HTML file with no external dependencies

**Live site:** https://hmetgundogdu.github.io/my-egzersize-program/

## Deployment

Changes pushed to `main` trigger the GitHub Pages workflow automatically. Set the Pages deployment source to **GitHub Actions** under repository settings.

## Exercise illustrations

Exercise thumbnails are loaded from [Free Exercise DB](https://github.com/yuhonas/free-exercise-db), an open public-domain exercise dataset. Images are displayed in grayscale and may show a comparable variation for some machine exercises. Images are illustrative; exercise names and prescribed repetitions remain the source of truth.

## For coding agents — `SKILL.md`

The repository includes a reusable [coding-agent skill](./SKILL.md) documenting how to build or adapt this style of workout page: minimalist responsive HTML, local checkboxes, grayscale exercise images, front/back SVG muscle maps, and the weekly radar distribution chart. It includes the data model, implementation rules, accessibility, privacy precautions, testing checklist, and deployment steps.

To use it in another project, give your coding agent the `SKILL.md` file and your own exercise routine. Ask it to follow the skill while generating or customizing `index.html`. Review exercise prescriptions and estimated muscle-set weights before publishing; visualization values are estimates rather than measured muscle activation.
