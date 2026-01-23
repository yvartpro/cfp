import { api } from '../core/api.js';
import { seo } from '../core/seo.js';
import { Loader } from '../components/loader.js';

export const Filieres = async () => {
  seo.update({
    title: 'Nos Filières',
    description: 'Explorez toutes nos formations professionnelles disponibles au CFP.',
  });

  const container = document.getElementById('router-view');
  container.innerHTML = Loader();

  try {
    const response = await api.getFilieres();
    const filieres = response.data;

    return `
            <div class="space-y-12">
                <header class="text-center max-w-2xl mx-auto">
                    <h1 class="text-4xl font-extrabold text-primary mb-4">Nos Filières de Formation</h1>
                    <p class="text-slate-500 text-lg">Choisissez parmi une large gamme de formations adaptées aux besoins du marché de l'emploi.</p>
                </header>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    ${filieres.map(filiere => `
                        <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-xl transition-all group">
                            <div class="h-56 relative overflow-hidden">
                                <img src="${filiere.heroImage?.path || 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800'}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
                                <div class="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-accent shadow-sm">
                                    ${filiere.articleCount || 0} articles
                                </div>
                            </div>
                            <div class="p-8">
                                <h3 class="text-2xl font-bold text-primary mb-4">${filiere.name}</h3>
                                <p class="text-slate-500 mb-8 leading-relaxed line-clamp-3">${filiere.description}</p>
                                <a href="/filiere/${filiere.slug}" data-link class="block text-center bg-slate-50 hover:bg-accent hover:text-white text-slate-700 py-3 rounded-xl font-bold transition-all">
                                    Découvrir la filière
                                </a>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
  } catch (err) {
    return `<div class="p-12 text-center">Une erreur s'est produite lors du chargement des filières.</div>`;
  }
};
