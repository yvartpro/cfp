# CFP API

Express and Sequelize API for the CFP Kigobe website.

## Layout

- `models/`: class-based Sequelize models and associations
- `controllers/`: class-based request controllers
- `routes/`: API route definitions
- `migrations/`: sequelize-cli migrations
- `middleware/`: authentication and role checks

The schema retains the existing `cfp_users`, `cfp_files`, `cfp_filieres`, `cfp_services`, `cfp_articles`, and `cfp_article_files` table names and existing timestamp column names.

Configure `DATABASE_NAME`, `DATABASE_USER`, `DATABASE_PASSWORD`, `DATABASE_HOST`, `DATABASE_PORT`, and `JWT_SECRET` in the repository root `.env`. Run from the repository root:

```sh
npm run db:migrate
npm start
```

The server serves the React website at `/`, dashboard at `/admin`, and API at `/api`. `/cfp/api` is retained for compatibility with existing clients.
