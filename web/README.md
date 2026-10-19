# CFP website

This React application is built as static files for Nginx. The public website is at `/` and the existing React dashboard is served from `web/public/admin` at `/admin`.

The public site retains the existing Tailwind markup and design; `src/react.jsx` mounts the site within React, while the established page components continue to provide the site's content and client-side routes. API calls use the same-origin `/api` endpoint.

During development, run `npm run dev:api` and `npm run dev:web` in separate terminals. Build production assets from the repository root with `npm run build`.
