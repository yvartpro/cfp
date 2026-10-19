import { api } from '../core/api.js';
import { seo } from '../core/seo.js';
import { Loader } from '../components/loader.js';

export const Articles = async () => {
    seo.update({
        title: 'Blog & Actualités - CFP Portal',
        description: 'Toutes les actualités du Centre de Formation Professionnelle.',
    });

    const container = document.getElementById('router-view');
    container.innerHTML = Loader();

    try {
        const response = await api.getArticles();
        const articles = response.data;

        return `
            <div class="max-w-7xl mx-auto px-4 py-10 space-y-16">
                <header class="border-b border-gray-200 pb-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-end" data-aos="fade-right">
                    <div>
                        <span class="text-secondary font-bold uppercase tracking-widest text-sm mb-2 block">Blog & News</span>
                        <h1 class="text-4xl md:text-5xl font-heading font-black text-primary uppercase">Dernières <span class="text-secondary">Actualités</span></h1>
                    </div>
                     <p class="text-gray-500 font-light text-lg">
                        Restez connecté avec la vie du campus, les événements académiques et les réussites de nos étudiants.
                    </p>
                </header>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    ${articles.map((article, i) => `
                        <article class="flex flex-col group cursor-pointer" data-aos="fade-up" data-aos-delay="${i * 100}">
                            <a href="/article/${article.slug}" data-link class="block overflow-hidden shadow-lg mb-6 aspect-video bg-gray-100 relative">
                                <img src="${article.heroImage?.path || 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=800'}" 
                                     class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
                                <div class="absolute top-0 right-0 bg-secondary text-primary font-bold text-xs uppercase px-4 py-2">
                                    ${article.category || 'INFO'}
                                </div>
                            </a>
                            <div class="space-y-4 px-2">
                                <div class="flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                                    <span>${new Date(article.createdAt).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                                    <span>•</span>
                                    <span>${article.author?.name || 'Rédaction'}</span>
                                </div>
                                <h2 class="text-xl font-heading font-bold text-primary group-hover:text-secondary transition-colors leading-tight">
                                    <a href="/article/${article.slug}" data-link>${article.title}</a>
                                </h2>
                                <p class="text-gray-500 line-clamp-3 text-sm leading-relaxed font-light">${article.excerpt || '...'}</p>
                                <a href="/article/${article.slug}" data-link class="inline-block pt-2 text-primary font-bold text-xs uppercase tracking-widest hover:text-secondary transition-colors">
                                    Lire l'article &rarr;
                                </a>
                            </div>
                        </article>
                    `).join('')}
                </div>
                
                ${articles.length === 0 ? '<div class="text-center py-20 text-gray-400 font-light italic">Aucun article publié pour le moment.</div>' : ''}
            </div>
        `;
    } catch (err) {
        return `<div class="p-20 text-center font-heading font-bold text-primary">Erreur lors du chargement des articles.</div>`;
    }
};
