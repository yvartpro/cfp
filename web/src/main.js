import { Router } from './core/router.js';
import { Header } from './components/header.js';
import { Footer } from './components/footer.js';
import { TopBar } from './components/topBar.js';
import { Home } from './pages/home.js';
import { Filieres } from './pages/filieres.js';
import { FiliereDetail } from './pages/filiereDetail.js';
import { Services, ServiceDetail } from './pages/services.js';
import { Articles } from './pages/articles.js';
import { ArticleDetail } from './pages/articleDetail.js';
import { About } from './pages/about.js';
const routes = [
  { path: '/', view: Home }, { path: '/filieres', view: Filieres }, { path: '/filiere/:slug', view: FiliereDetail },
  { path: '/services', view: Services }, { path: '/service/:slug', view: ServiceDetail }, { path: '/articles', view: Articles },
  { path: '/article/:slug', view: ArticleDetail }, { path: '/about', view: About },
  { path: '/contact', view: () => `<div class="p-20 text-center"><h1 class="text-3xl font-bold text-primary">contact@cfp-portal.bi</h1><p class="text-slate-500 mt-4">Notre équipe vous répondra dans les plus brefs délais.</p></div>` },
];
export function initializeSite() {
  document.getElementById('top-bar-container').innerHTML = TopBar();
  document.getElementById('header-container').innerHTML = Header();
  document.getElementById('footer-container').innerHTML = Footer();
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
    mobileMenu.addEventListener('click', e => { if (e.target.closest('[data-link]')) mobileMenu.classList.add('hidden'); });
  }
  new Router(routes).init();
  if (window.AOS) window.AOS.init({ duration: 800, once: true, mirror: false, easing: 'ease-in-out', offset: 50 });
  window.addEventListener('popstate', () => setTimeout(() => window.AOS?.refreshHard(), 500));
  document.addEventListener('viewRendered', () => {
    if (window.Plyr && document.getElementById('player')) new window.Plyr('#player', { controls: ['play-large','play','progress','current-time','mute','volume','fullscreen'], settings: ['quality','speed'] });
    if (window.AOS) { window.AOS.refreshHard(); setTimeout(() => window.AOS.refresh(), 200); setTimeout(() => window.AOS.refresh(), 1000); }
  });
}
