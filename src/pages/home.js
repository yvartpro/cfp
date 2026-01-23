import { api } from '../core/api.js';
import { seo } from '../core/seo.js';
import { Loader } from '../components/loader.js';

export const Home = async () => {
  seo.update({
    title: 'Accueil',
    description: 'Bienvenue au Centre de Formation Professionnelle. Trouvez votre voie vers l\'excellence.',
  });

  // We can fetch highlights for the home page
  const container = document.getElementById('router-view');
  container.innerHTML = Loader();

  try {
    const [articles, filieres] = await Promise.all([
      api.getArticles('?limit=3'),
      api.getFilieres()
    ]);

    return `
            <div class="space-y-20">
                <!-- Hero Section -->
                <section class="relative h-[500px] flex items-center overflow-hidden rounded-3xl bg-slate-900 text-white">
                    <div class="absolute inset-0 z-0">
                        <div class="absolute inset-0 bg-gradient-to-r from-slate-900 to-transparent z-10"></div>
                        <img src="https://images.unsplash.com/photo-1524178232363-1fb28f74b671?auto=format&fit=crop&q=80&w=2070" class="w-full h-full object-cover opacity-60">
                    </div>
                    
                    <div class="relative z-20 px-12 max-w-2xl">
                        <span class="inline-block px-4 py-1.5 rounded-full bg-accent/20 border border-accent/30 text-accent font-semibold text-sm mb-6 uppercase tracking-wider">Formation de Qualité</span>
                        <h1 class="text-5xl font-extrabold mb-6 leading-tight">Préparez votre avenir professionnel avec le <span class="text-accent underline decoration-4 underline-offset-8">CFP</span>.</h1>
                        <p class="text-slate-300 text-lg mb-8 leading-relaxed">
                            Découvrez nos filières, profitez de nos services et restez informé des dernières actualités pour booster votre carrière.
                        </p>
                        <div class="flex gap-4">
                            <a href="/filieres" data-link class="bg-accent hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-blue-600/20">Voir nos filières</a>
                            <a href="/articles" data-link class="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-8 py-4 rounded-xl font-bold transition-all">Consulter le blog</a>
                        </div>
                    </div>
                </section>

                <!-- Featured Filieres -->
                <section>
                    <div class="flex justify-between items-end mb-10">
                        <div>
                            <h2 class="text-3xl font-bold text-primary italic">Nos Filières</h2>
                            <p class="text-slate-500 mt-2">Choisissez la formation qui vous correspond</p>
                        </div>
                        <a href="/filieres" data-link class="text-accent font-bold hover:underline">Voir tout &rarr;</a>
                    </div>
                    
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                        ${filieres.data.slice(0, 3).map(filiere => `
                            <div class="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
                                <div class="h-48 overflow-hidden bg-slate-200">
                                    <img src="${filiere.heroImage?.path || 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800'}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                                </div>
                                <div class="p-6">
                                    <h3 class="text-xl font-bold text-primary mb-3">${filiere.name}</h3>
                                    <p class="text-slate-500 text-sm line-clamp-3 mb-6">${filiere.description}</p>
                                    <a href="/filiere/${filiere.slug}" data-link class="text-sm font-bold text-accent group-hover:gap-2 transition-all flex items-center">
                                        En savoir plus <span class="ml-1 opacity-0 group-hover:opacity-100 transition-opacity">&rarr;</span>
                                    </a>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </section>

                <!-- Latest Articles -->
                <section class="bg-slate-100 -mx-4 px-4 py-20 rounded-[3rem]">
                    <div class="container mx-auto max-w-7xl">
                        <div class="text-center mb-16">
                            <h2 class="text-3xl font-bold text-primary mb-4 italic">Actualités & Blog</h2>
                            <p class="text-slate-500 max-w-xl mx-auto">Restez informé des derniers événements et conseils du Centre.</p>
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            ${articles.data.slice(0, 3).map(article => `
                                <article class="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col">
                                    <img src="${article.heroImage?.path || 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=800'}" class="h-56 w-full object-cover">
                                    <div class="p-6 flex-grow flex flex-col">
                                        <div class="text-xs font-bold text-accent uppercase tracking-wider mb-2">${article.category || 'Article'}</div>
                                        <h3 class="text-xl font-bold text-primary mb-4 line-clamp-2">${article.title}</h3>
                                        <p class="text-slate-500 text-sm line-clamp-3 mb-6">${article.excerpt || ''}</p>
                                        <div class="mt-auto pt-6 border-t border-gray-50 flex justify-between items-center text-xs text-slate-400">
                                            <span>${new Date(article.createdAt).toLocaleDateString('fr-FR')}</span>
                                            <a href="/article/${article.slug}" data-link class="text-accent font-bold">Lire la suite &rarr;</a>
                                        </div>
                                    </div>
                                </article>
                            `).join('')}
                        </div>
                    </div>
                </section>
            </div>
        `;
  } catch (err) {
    return `<div class="p-12 text-center text-red-500">Erreur lors de la récupération des données.</div>`;
  }
};
