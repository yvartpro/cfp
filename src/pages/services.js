import { api } from '../core/api.js';
import { seo } from '../core/seo.js';
import { Loader } from '../components/loader.js';

export const Services = async () => {
  seo.update({
    title: 'Nos Services',
    description: 'Découvrez les services offerts par le CFP au-delà de la formation.',
  });

  const container = document.getElementById('router-view');
  container.innerHTML = Loader();

  try {
    const response = await api.getServices();
    const services = response.data;

    return `
      <div class="max-w-7xl mx-auto space-y-12 mt-6">
        <header class="text-center max-w-3xl mx-auto">
          <h1 class="text-4xl font-extrabold text-primary mb-4 italic">Nos Services Experts</h1>
          <p class="text-slate-500 text-lg">Le CFP ne se limite pas à la formation. Nous offrons une expertise variée pour accompagner les entreprises et les particuliers.</p>
        </header>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
          ${services.map(service => `
            <div class="group bg-white rounded-3xl p-2 border border-slate-100 shadow-sm hover:shadow-2xl hover:border-transparent transition-all duration-500">
              <div class="flex flex-col h-full">
                <div class="h-64 overflow-hidden rounded-2xl mb-6 bg-slate-100">
                  <img src="${service.heroImage?.path || 'https://images.unsplash.com/photo-1454165833772-d996d49510d7?auto=format&fit=crop&q=80&w=800'}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
                </div>
                <div class="p-6 pt-0 flex-grow flex flex-col">
                  <h3 class="text-2xl font-bold text-primary mb-3">${service.name}</h3>
                  <p class="text-slate-500 leading-relaxed line-clamp-3 mb-8 text-sm">${service.description}</p>
                  <a href="/service?slug=${service.slug}" data-link class="mt-auto flex items-center justify-between group/link font-bold text-accent">
                    <span>Détails du service</span>
                    <div class="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover/link:bg-accent group-hover/link:text-white transition-all">
                      &rarr;
                    </div>
                  </a>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  } catch (err) {
    return `<div class="p-12 text-center">Erreur lors du chargement des services.</div>`;
  }
};

export const ServiceDetail = async (slug) => {
  const container = document.getElementById('router-view');
  container.innerHTML = Loader();

  try {
    const service = await api.getServiceBySlug(slug);

    seo.update({
      title: service.name,
      description: service.description,
    });

    return `
      <div class="max-w-4xl mx-auto">
        <div class="rounded-[2.5rem] overflow-hidden bg-slate-100 mb-12 shadow-lg">
          <img src="${service.heroImage?.path || 'https://images.unsplash.com/photo-1454165833772-d996d49510d7?auto=format&fit=crop&q=80&w=1200'}" class="w-full h-96 object-cover">
        </div>
        
        <h1 class="text-4xl md:text-5xl font-extrabold text-primary mb-8 italic">${service.name}</h1>
        
        <div class="prose prose-slate max-w-none mb-12 bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-sm leading-relaxed text-lg">
          ${service.description}
        </div>

        <div class="bg-accent rounded-3xl p-10 text-white flex flex-col md:flex-row items-center justify-between gap-8">
          <div class="text-center md:text-left">
            <h4 class="text-2xl font-bold mb-2 italic">Besoin de ce service ?</h4>
            <p class="text-blue-100">Contactez nos experts pour un devis personnalisé.</p>
          </div>
          <a href="/contact" data-link class="bg-white text-accent px-10 py-4 rounded-xl font-bold hover:scale-105 transition-transform shadow-lg">Demander un devis</a>
        </div>
      </div>
    `;
  } catch (err) {
    return `<div class="p-12 text-center">Service introuvable.</div>`;
  }
};
