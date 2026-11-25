# kithmihettiarachchi.github.io

Personal portfolio of Kithmi Hettiarachchi. Built with React and Vite, deployed to GitHub Pages.

## Editing content

All of the text on the site lives in [`src/content.js`](src/content.js):

| What | Where in `content.js` |
| --- | --- |
| Name, intro line, social links | `profile` |
| Contact email / CV | `profile.email`, `profile.resumeUrl` (put the PDF in `public/`) |
| Featured projects | `projects` (set `status` to `'complete'` or `'progress'`) |
| Repo or demo links for a project | `links: [{ label: 'GitHub', href: '…' }]` on that project |
| Older projects | `earlierProjects` |
| Skills | `toolkit` |
| About text, education | `about`, `education` |

Fields left empty (like `email`) are simply hidden.

The portrait is `public/kithmi-hettiarachchi.jpg`. Styles are in `src/index.css`.

## Run locally

```bash
npm install
npm run dev
```

## Deploy

```bash
npm run deploy
```

This builds the site and pushes `dist/` to the `gh-pages` branch.
