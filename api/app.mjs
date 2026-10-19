import express from 'express';
import cors from 'cors';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer as createViteServer } from 'vite';
import dotenv from 'dotenv';
import userRouter from './routes/user.mjs';
import articleRouter from './routes/article.mjs';
import fileRouter from './routes/file.mjs';
import filiereRouter from './routes/filiere.mjs';
import serviceRouter from './routes/service.mjs';
import { docsHtml } from './service/docs.mjs';

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;
const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const webDir = path.join(rootDir, 'web');
const apiDir = path.dirname(fileURLToPath(import.meta.url));
const router = express.Router();
router.use('/user', userRouter);
router.use('/article', articleRouter);
router.use('/file', fileRouter);
router.use('/filiere', filiereRouter);
router.use('/service', serviceRouter);
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));
app.use((req, _res, next) => { if (req.body === undefined) req.body = {}; next(); });
app.use('/api', router);
app.use('/cfp/api', router);
app.use('/uploads', express.static(path.join(apiDir, 'uploads')));
app.use('/cfp/uploads', express.static(path.join(apiDir, 'uploads')));
app.get('/cfp/docs/api', (_req, res) => {
  const endpoints = {
    user: [{ method: 'POST', path: '/api/user/login' }, { method: 'GET', path: '/api/user/me' }],
    article: [{ method: 'GET', path: '/api/article' }, { method: 'POST', path: '/api/article' }],
    file: [{ method: 'GET', path: '/api/file' }, { method: 'POST', path: '/api/file' }],
    filiere: [{ method: 'GET', path: '/api/filiere' }, { method: 'POST', path: '/api/filiere' }],
    service: [{ method: 'GET', path: '/api/service' }, { method: 'POST', path: '/api/service' }],
  };
  res.send(docsHtml(endpoints, process.env.BASE_URL || '', 'CFP API Documentation', 'CFP Kigobe API'));
});

async function start() {
  if (process.env.NODE_ENV === 'production') {
    app.use('/admin', express.static(path.join(webDir, 'admin')));
    app.use(express.static(path.join(webDir, 'dist')));
    app.get('/admin/*', (_req, res) => res.sendFile(path.join(webDir, 'admin', 'index.html')));
    app.get('*', (_req, res) => res.sendFile(path.join(webDir, 'dist', 'index.html')));
  } else {
    const vite = await createViteServer({ root: webDir, server: { middlewareMode: true }, appType: 'spa' });
    app.use(vite.middlewares);
  }
  app.use((err, _req, res, _next) => { console.error(err); res.status(500).json({ error: 'Internal server error' }); });
  app.listen(port, '0.0.0.0', () => console.log(`[CFP] Running on http://0.0.0.0:${port}`));
}
start();
