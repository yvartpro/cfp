# CFP website

This React application is served by the repository's Express server. The public website is at `/` and the existing React dashboard is served from `web/admin` at `/admin`.

The public site retains the existing Tailwind markup and design; `src/react.jsx` mounts the site within React, while the established page components continue to provide the site's content and client-side routes. API calls use the same-origin `/api` endpoint.

From the repository root, use `npm run dev` for development, `npm run build` for production assets, and `npm start` to serve the production build.
