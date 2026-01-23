import { Router } from './core/router.js';
import { Header } from './components/header.js';
import { Footer } from './components/footer.js';

// Import Pages
import { Home } from './pages/home.js';
import { Filieres } from './pages/filieres.js';
import { FiliereDetail } from './pages/filiereDetail.js';
import { Services, ServiceDetail } from './pages/services.js';
import { Articles } from './pages/articles.js';
import { ArticleDetail } from './pages/articleDetail.js';

/**
 * Static About Page (Inlined for simplicity as it's static)
 */
const About = () => {
  return `
        <div class="max-w-4xl mx-auto space-y-12 py-10">
            <header class="text-center">
                <h1 class="text-5xl font-extrabold text-primary mb-6 italic">À propos de nous</h1>
                <p class="text-xl text-slate-500 leading-relaxed">
                    Le Centre de Formation Professionnelle est une institution dédiée à l'excellence et à l'insertion professionnelle rapide.
                </p>
            </header>
            
            <section class="prose prose-slate max-w-none bg-white p-12 rounded-3xl border border-gray-100 shadow-sm">
                <h2 class="text-primary italic">Notre Vision</h2>
                <p>Nous croyons que chaque individu possède un potentiel unique qui ne demande qu'à être révélé par une formation pratique de haute qualité.</p>
                
                <h2 class="text-primary italic">Notre Mission</h2>
                <p>Offrir des programmes de formation innovants, adaptés aux réalités du marché de l'emploi burundais et international.</p>
                
                <h2 class="text-primary italic">Pourquoi nous choisir ?</h2>
                <ul>
                    <li><strong>Expertise :</strong> Des formateurs issus du monde professionnel.</li>
                    <li><strong>Équipement :</strong> Des outils de pointe pour un apprentissage concret.</li>
                    <li><strong>Réseau :</strong> Des partenariats avec les plus grandes entreprises locales.</li>
                </ul>
            </section>
        </div>
    `;
};

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
  { path: '/contact', view: () => `<div class="p-20 text-center"><h1 class="text-3xl font-bold">Contactez-nous à contact@cfp-portal.bi</h1></div>` }
];

/**
 * Initialize Application
 */
document.addEventListener('DOMContentLoaded', () => {
  // 1. Render Header and Footer
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
});
