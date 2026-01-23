import { api } from '../core/api.js';
import { seo } from '../core/seo.js';
import { Loader } from '../components/loader.js';

export const Articles = async () => {
  seo.update({
    title: 'Blog & Actualités',
    description: 'Toutes les actualités du Centre de Formation Professionnelle.',
  });

  const container = document.getElementById('router-view');
  container.innerHTML = Loader();

  try {
    const response = await api.getArticles();
    const articles = response.data;

    return `
            <div class="max-w-6xl mx-auto space-y-12">
                <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-gray-100 pb-8">
                    <div>
                        <h1 class="text-4xl font-extrabold text-primary mb-2 italic">Derniers Articles</h1>
                        <p class="text-slate-500">Restez informé des dernières nouvelles et annonces.</p>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    ${articles.map(article => `
                        <article class="flex flex-col group">
                            <a href="/article/${article.slug}" data-link class="block overflow-hidden rounded-2xl mb-6 aspect-video bg-slate-100">
                                <img src="${article.heroImage?.path || 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=800'}" 
                                     class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                            </a>
                            <div class="space-y-3">
                                <span class="text-xs font-bold text-accent uppercase tracking-widest">${article.category || 'INFO'}</span>
                                <h2 class="text-2xl font-bold text-primary group-hover:text-accent transition-colors leading-tight">
                                    <a href="/article/${article.slug}" data-link>${article.title}</a>
                                </h2>
                                <p class="text-slate-500 line-clamp-2 text-sm leading-relaxed">${article.excerpt || ''}</p>
                                <div class="flex items-center gap-3 pt-4 text-xs text-slate-400">
                                    <span class="font-medium text-slate-600">${article.author?.name || 'Admin'}</span>
                                    <span>•</span>
                                    <span>${new Date(article.createdAt).toLocaleDateString('fr-FR')}</span>
                                </div>
                            </div>
                        </article>
                    `).join('')}
                </div>
                
                ${articles.length === 0 ? '<div class="text-center py-20 text-slate-400">Aucun article publié pour le moment.</div>' : ''}
            </div>
        `;
  } catch (err) {
    return `<div class="p-12 text-center">Erreur lors du chargement des articles.</div>`;
  }
};
