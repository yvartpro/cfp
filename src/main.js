import { Router } from './core/router.js';
import { Header } from './components/header.js';
import { Footer } from './components/footer.js';
import { TopBar } from './components/topBar.js';

// Import Pages
import { Home } from './pages/home.js';
import { Filieres } from './pages/filieres.js';
import { FiliereDetail } from './pages/filiereDetail.js';
import { Services, ServiceDetail } from './pages/services.js';
import { Articles } from './pages/articles.js';
import { ArticleDetail } from './pages/articleDetail.js';

import { About } from './pages/about.js';

/**
 * Route Definitions
 */
const routes = [
  { path: '/', view: Home },
  { path: '/filieres', view: Filieres },
  { path: '/filiere/:slug', view: FiliereDetail },
  { path: '/services', view: Services },
  { path: '/service/:slug', view: ServiceDetail },
  { path: '/articles', view: Articles },
  { path: '/article/:slug', view: ArticleDetail },
  { path: '/about', view: About },
  { path: '/contact', view: () => `<div class="p-20 text-center"><h1 class="text-3xl font-bold text-primary">contact@cfp-portal.bi</h1><p class="text-slate-500 mt-4">Notre équipe vous répondra dans les plus brefs délais.</p></div>` }
];

/**
 * Initialize Application
 */
document.addEventListener('DOMContentLoaded', () => {
  // 1. Render TopBar, Header and Footer
  document.getElementById('top-bar-container').innerHTML = TopBar();
  document.getElementById('header-container').innerHTML = Header();
  document.getElementById('footer-container').innerHTML = Footer();

  // 2. Setup Mobile Menu Toggle
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    // Close menu on link click
    mobileMenu.addEventListener('click', (e) => {
      if (e.target.closest('[data-link]')) {
        mobileMenu.classList.add('hidden');
      }
    });
  }

  // 3. Initialize Router
  const router = new Router(routes);
  router.init();

  // 4. Initialize AOS (Animate on Scroll)
  if (window.AOS) {
    window.AOS.init({
      duration: 800,
      once: true, // changed to true to prevent weird re-animation behaviors
      mirror: false,
      easing: 'ease-in-out',
      offset: 50, // trigger animations sooner
    });
  }

  // Re-init AOS on route change (simplified)
  window.addEventListener('popstate', () => {
    setTimeout(() => {
      if (window.AOS) window.AOS.refreshHard(); // Use refreshHard
    }, 500);
  });

  // Custom event for router to tell us when view is rendered
  document.addEventListener('viewRendered', () => {
    // 1. Initialize Plyr if video exists
    if (window.Plyr && document.getElementById('player')) {
      new window.Plyr('#player', {
        controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'fullscreen'],
        settings: ['quality', 'speed']
      });
    }

    if (window.AOS) {
      // Immediate refresh
      window.AOS.refreshHard();

      // Refresh again after short delay to allow layout to settle
      setTimeout(() => window.AOS.refresh(), 200);

      // Final refresh to catch late rendering
      setTimeout(() => window.AOS.refresh(), 1000);
    }
  });
});
