# Snow Cai · Software Engineering & Game Development

I’m Xuerou “Snow” Cai, a Computer Science & Engineering master’s student at the University of Nevada, Reno. This portfolio covers my work in Unity gameplay systems, AI integration, and simulation. Project pages document my contributions, technical decisions, and outcomes, with gameplay screenshots and demos where available.

[Live portfolio](https://snow-cai.github.io/) · [All projects](https://snow-cai.github.io/projects/) · [itch.io](https://mioolm.itch.io/) · [LinkedIn](https://www.linkedin.com/in/xuerou-cai-71b282337/)

## Featured projects

- [Bound Spirit](https://snow-cai.github.io/projects/bound-spirit/) — a Unity puzzle RPG capstone.
- [VibeAI](https://snow-cai.github.io/projects/vibeai/) — a Unity app that matches Spotify tracks to facial expressions. It won first place in its hackathon’s AI category.
- [Are You a Human?](https://snow-cai.github.io/projects/the-8-puzzle/) — a CAPTCHA-themed sliding puzzle with hints powered by bidirectional breadth-first search.
- [Group Movement & Pathfinding Simulation](https://snow-cai.github.io/projects/group-movement-pathfinding/) — a simulation of how groups navigate around obstacles.

## Run locally

The site uses React, TypeScript, Vite, and Tailwind CSS. Use Node.js 22.12 or later and npm. The deployment workflow uses Node.js 24.

```sh
npm ci
npm run dev
```

Open the local URL printed by Vite. Run `npm run build` to type-check and build the site. Run `npm run preview` to serve the production build locally.

## Add or update a project

Edit [src/data/projects.ts](src/data/projects.ts). Add an entry to `projects` using a unique lowercase, hyphenated `slug`. The catalog card, detail page, and production HTML entry all come from this data. Set `featured: true` to also show it on the homepage. The first featured project gets the wide card.

Set `title`, `year`, `summary`, `overview`, `stack`, and `implementation` for each project. The catalog groups projects by completion year, newest first. Projects from the same year follow their order in the data file.

- `category` is the label displayed on the project, such as `Puzzle RPG · Capstone`.
- `categories` controls which catalog filters include the project. The current filters are Game Development, Graphics & Pathfinding, and AI & Software. Sunset and Firefly is filed under Game Development.
- `contributions`, `challenges`, and `outcomes` describe the work and what came out of it.
- `repository` is optional and should point to public source code. For a game demo, set `demo.href` and choose `demo.kind` of `browser` or `download`.

## Screenshots and videos

Keep original screenshots in `assets/projects/<slug>/`. Save web-ready media in `public/media/projects/<slug>/` and set its paths in the project data relative to `public/`, for example `media/projects/bound-spirit/cover.webp`.

- `screenshots` is a list of `src` and `alt` pairs. The first screenshot is used as the cover by default. Write alt text that describes the relevant gameplay.
- To use a separate cover, set `cover` to a `src` and an `alt`.
- `video` takes a `src`, `description`, and optional `captions` pointing to a WebVTT file. Use compressed MP4 or WebM and include captions where the audio carries information.
- For a hosted video, set `video` to an `href` and `description`. Use `resources` for additional links such as a project site or poster.

Published game screenshots come from their [itch.io listings](https://mioolm.itch.io/). Bound Spirit’s graveyard cover uses a frame from the [official project video](https://www.youtube.com/watch?v=aNfl_b2h7eg), and the interface captures come from the [project repository](https://github.com/Snow-Cai/BoundSpirit/tree/main/Assets/Sprites/UISprites/HelpBook). The itch.io profile icon comes from the [itch.io press kit](https://itch.io/press-kit).

## Update profile and contact information

Edit [src/data/profile.ts](src/data/profile.ts) to update the bio, skills, experience, education, and public contact links.

## Deploy to GitHub Pages

1. Run `npm run build` to type-check the code and generate the site, including HTML for direct project links.
2. Commit your website changes and push them to `main`.
3. Open [Deploy portfolio to GitHub Pages](https://github.com/Snow-Cai/snow-cai.github.io/actions/workflows/pages.yml) and select **Run workflow** on `main`. This repository uses GitHub Actions for publishing. The workflow runs when started manually.
4. After the workflow succeeds, open the [live portfolio](https://snow-cai.github.io/) to check your changes.

The workflow sets the Vite base from the GitHub Pages configuration. To test a repository subpath locally on PowerShell, set `$env:PORTFOLIO_BASE = '/your-repository/'` before both `npm run build` and `npm run preview`, then open the resulting subpath. Clear it with `Remove-Item Env:PORTFOLIO_BASE` when finished. See the [Vite static deployment guide](https://vite.dev/guide/static-deploy#github-pages).
