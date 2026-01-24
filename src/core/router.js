/**
 * Simple client-side router for SPA navigation
 */
export class Router {
  constructor(routes) {
    this.routes = routes;
    this.view = document.getElementById('router-view');
    this.currentRoute = null;

    // Listen for history changes
    window.addEventListener('popstate', () => this.handleRoute());

    // Listen for clicks on links with data-link attribute
    document.addEventListener('click', (e) => {
      if (e.target.matches('[data-link]') || e.target.closest('[data-link]')) {
        e.preventDefault();
        const link = e.target.matches('[data-link]') ? e.target : e.target.closest('[data-link]');
        this.navigateTo(link.href);
      }
    });
  }

  navigateTo(url) {
    history.pushState(null, null, url);
    this.handleRoute();
  }

  async handleRoute() {
    const path = window.location.pathname;
    let match = this.routes.find(route => {
      const regex = new RegExp("^" + route.path.replace(/:[^\s/]+/g, "([\\w-]+)") + "$");
      return path.match(regex);
    });

    if (!match) {
      match = this.routes.find(r => r.path === '/404') || {
        path: '/404',
        view: () => '<h1>404 - Page Not Found</h1>'
      };
    }

    const regex = new RegExp("^" + match.path.replace(/:[^\s/]+/g, "([\\w-]+)") + "$");
    const params = path.match(regex)?.slice(1) || [];

    // Scroll to top
    window.scrollTo(0, 0);

    // Render the view
    if (typeof match.view === 'function') {
      try {
        // Dynamic import support if needed, but here we assume views are functions returning Template strings or DOM
        const content = await match.view(...params);
        if (typeof content === 'string') {
          this.view.innerHTML = content;
        } else if (content instanceof HTMLElement) {
          this.view.innerHTML = '';
          this.view.appendChild(content);
        }

        // Dispatch event for components that need to know when view is ready (like AOS)
        document.dispatchEvent(new CustomEvent('viewRendered'));
      } catch (error) {
        console.error('Routing error:', error);
        this.view.innerHTML = `<div class="p-8 text-center text-red-500">Une erreur est survenue lors du chargement de la page.</div>`;
      }
    }
  }

  init() {
    this.handleRoute();
  }
}
