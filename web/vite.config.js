import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// The admin dashboard is a prebuilt SPA in public/admin. Serve its index.html
// for /admin and any /admin/* route that isn't a real file (e.g. /admin/login).
const adminSpaFallback = {
  name: 'admin-spa-fallback',
  configureServer(server) {
    server.middlewares.use((req, _res, next) => {
      const url = (req.url || '').split('?')[0];
      if (url === '/admin' || (url.startsWith('/admin/') && !/\.[a-z0-9]+$/i.test(url))) {
        req.url = '/admin/index.html';
      }
      next();
    });
  },
};

export default defineConfig({
  plugins: [react(), adminSpaFallback],
  server: {
    proxy: {
      '/api': 'http://localhost:3000',
      '/cfp/api': 'http://localhost:3000',
      '/uploads': 'http://localhost:3000',
      '/cfp/uploads': 'http://localhost:3000',
    },
  },
  build: { outDir: '../api/dist', emptyOutDir: true },
});
