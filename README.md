# CFP Kigobe full stack

Single repository for the CFP public website, React admin dashboard, and Express/Sequelize API.

- `web/` contains the React public site and the existing dashboard at `/admin`.
- `api/` contains the API, class-based Sequelize models/controllers, CLI config, and migrations.
- MySQL table names and existing column names remain `cfp_*`, including Sequelize's existing `createdAt`, `updatedAt`, and `deletedAt` columns.

## Development

Create `.env` in the repository root with `DATABASE_NAME`, `DATABASE_USER`, `DATABASE_PASSWORD`, optional `DATABASE_HOST`/`DATABASE_PORT`, and `JWT_SECRET`.

```sh
npm install
npm run dev:api
# in a second terminal
npm run dev:web
```

Visit the Vite URL shown by `npm run dev:web` for the website and dashboard. The API runs at `http://localhost:3000`; Vite proxies `/api` to Node. `/cfp/api` remains as a compatibility alias.

## Production

```sh
npm run build
npm start
```

`npm start` runs the API only. Nginx serves the static client built into `api/dist` (including `/admin`). Node runs the API and upload routes only.

## Database

The migration in `api/migrations` creates the current CFP tables while retaining their names and column structure. Review database configuration before running:

```sh
npm run db:migrate
```

Existing database contents are not altered by this code change. The migration creates tables for a new database; do not apply it on a database that already has these tables.
