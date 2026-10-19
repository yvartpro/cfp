# Deployment

Build the React client with `npm run build` from the repository root. Vite writes the static site to `api/dist`; Nginx should use `/home/yves/apps/cfp/api/dist` as the site root and proxy `/api` and `/cfp/api` to the Node API port. Keep `/uploads` routed to the API or serve the upload directory directly.

Node runs `api/app.mjs` and exposes the API and uploaded-file routes only. Start it with `npm start` after configuring the root `.env` file.
