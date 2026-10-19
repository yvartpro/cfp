# CFP Kigobe full stack

Single repository for the CFP public website, React admin dashboard, and Express/Sequelize API.

- `web/` contains the React public site and the existing dashboard at `/admin`.
- `api/` contains the API, class-based Sequelize models/controllers, CLI config, and migrations.
- MySQL table names and existing column names remain `cfp_*`, including Sequelize's existing `createdAt`, `updatedAt`, and `deletedAt` columns.

## Development

Create `.env` in the repository root with `DATABASE_NAME`, `DATABASE_USER`, `DATABASE_PASSWORD`, optional `DATABASE_HOST`/`DATABASE_PORT`, and `JWT_SECRET`.

```sh
npm --prefix web install
npm --prefix api install
npm run dev
```

Visit `http://localhost:3000` or `http://localhost:3000/admin`. The API is available at `/api`; `/cfp/api` remains as a compatibility alias.

## Production

```sh
npm run build
npm start
```

The Express server serves `web/dist` and the dashboard in `web/admin`.

## Database

The migration in `api/migrations` creates the current CFP tables while retaining their names and column structure. Review database configuration before running:

```sh
npm run db:migrate
```

Existing database contents are not altered by this code change. The migration creates tables for a new database; do not apply it on a database that already has these tables.
