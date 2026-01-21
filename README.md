# FreakFire — Marketing Site (Vite + React)

This is a minimal Vite + React scaffold for a videogame studio marketing site called FreakFire.

Quick start (PowerShell):

```powershell
cd d:/Documents/React/FerHerrCourse/2025/freakfire
npm install
npm run dev
```

- `npm run dev` starts the Vite dev server (default: http://localhost:5173)
- `npm run build` builds production files into `dist/`
- `npm run preview` serves the built files for preview

Notes:
- This project uses `vite` and `@vitejs/plugin-react`.
- Entry point: `index.html` -> `src/main.jsx` -> `src/App.jsx`.
- Styles: `src/styles.css`.

Routing
- The app now uses React Router. Routes are defined in `src/App.jsx` and page components live in `src/pages/` (`Home.jsx`, `Games.jsx`, `Studio.jsx`, `Blog.jsx`, `Contact.jsx`).
	Start the dev server and open paths like `/games` or `/blog` to preview pages.

Email placeholder contact in the sample: `hello@freakfire.games` — replace with real contact info.
