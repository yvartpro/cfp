# Deployment

Build the React application from the repository root with `npm run build`. Start the production server with `npm start` after setting the database and JWT environment variables in the root `.env` file.

Express serves the public app from `web/dist`, the existing dashboard from `web/admin` at `/admin`, uploaded files from `/uploads`, and API routes from `/api`.
