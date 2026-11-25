# Snow Cai Portfolio

A static portfolio built with React, TypeScript, Vite, and Tailwind CSS. The production build emits an HTML entry for each project so shared project URLs work directly on GitHub Pages.

## Run locally

Use Node.js 22.12 or later and npm. The deployment workflow uses Node.js 24.

```sh
npm ci
npm run dev
```

Open the local URL printed by Vite. Run `npm run build` to type-check and build the site. Run `npm run preview` to serve the production build locally.

## Add or update a project

Edit [src/data/projects.ts](src/data/projects.ts). Add an entry to `projects` using a unique lowercase, hyphenated `slug`. The catalog card, detail page, and production HTML entry all come from this data. Set `featured: true` to also show it on the homepage. The first featured project gets the wide card.

Set `title`, `year`, `category`, `summary`, `overview`, `stack`, and `implementation` for each project. Use the year the project was completed. The catalog groups projects by year, newest first, and entries in the same year follow their order in the data file. Use the category label for the project type and context, such as `Puzzle RPG · Capstone`. Keep the card summary to one sentence. Set `categories` to one or more filters defined in the same file. Fill in `contributions`, `challenges`, and `outcomes` as details are confirmed. Set `repository` to the public source URL. For a playable game, set `demo` to an `href` and choose `kind: 'browser'` or `kind: 'download'`.

## Screenshots and videos

Keep original screenshots in `assets/projects/<slug>/`. Save web-ready media in `public/media/projects/<slug>/` and set its paths in the project data relative to `public/`, for example `media/projects/bound-spirit/cover.webp`.

- `screenshots` is a list of `src` and `alt` pairs. The first screenshot is used as the cover by default. Write alt text that describes the relevant gameplay.
- To use a separate cover, set `cover` to a `src` and an `alt`.
- `video` takes a `src`, `description`, and optional `captions` pointing to a WebVTT file. Use compressed MP4 or WebM and include captions where the audio carries information.
- For a hosted video, set `video` to an `href` and `description`. Use `resources` for additional links such as a project site or poster.

Published game screenshots come from their [itch.io listings](https://mioolm.itch.io/). Bound Spirit’s graveyard cover uses a frame from the [official project video](https://www.youtube.com/watch?v=aNfl_b2h7eg), and the interface captures come from the [project repository](https://github.com/Snow-Cai/BoundSpirit/tree/main/Assets/Sprites/UISprites/HelpBook). The itch.io profile icon comes from the [itch.io press kit](https://itch.io/press-kit).

## Update the résumé and contact information

Edit [src/data/profile.ts](src/data/profile.ts) to update the skills, experience, and education. Set `email`, `github`, `linkedin`, and `itch` to the contact details you approve for public use. Add a public recruiting PDF to `public/media/resume.pdf` and set `resume: 'media/resume.pdf'` in the same file. Review all files under `public/` before publishing because GitHub Pages serves them directly.

## Deploy to GitHub Pages

1. Review the portfolio for approved public content, then push it to your GitHub repository.
2. In **Settings → Pages → Build and deployment**, choose **GitHub Actions** as the source.
3. In **Actions → Deploy portfolio to GitHub Pages**, choose **Run workflow**. The workflow runs only when manually dispatched.

The workflow sets the Vite base from the GitHub Pages configuration. To test a repository subpath locally on PowerShell, set `$env:PORTFOLIO_BASE = '/your-repository/'` before both `npm run build` and `npm run preview`, then open the resulting subpath. Clear it with `Remove-Item Env:PORTFOLIO_BASE` when finished. See the [Vite static deployment guide](https://vite.dev/guide/static-deploy#github-pages).
