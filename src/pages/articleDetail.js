import { api } from '../core/api.js';
import { seo } from '../core/seo.js';
import { Loader } from '../components/loader.js';
import { renderArticle } from '../renderers/articleRenderer.js';

export const ArticleDetail = async (slug) => {
    const container = document.getElementById('router-view');
    container.innerHTML = Loader();

    try {
        const article = await api.getArticleBySlug(slug);

        seo.update({
            title: article.title,
            description: article.excerpt || article.title,
            canonical: `${window.location.origin}/article/${slug}`
        });

        return `
        <article class="max-w-4xl mx-auto">
            <header class="mb-12">
                <div class="flex items-center gap-2 mb-6 text-sm font-bold text-accent uppercase tracking-widest">
                    <a href="/articles" data-link class="hover:underline">Blog</a>
                    <span>/</span>
                    <span>${article.category || 'Article'}</span>
                </div>
                <h1 class="text-4xl md:text-5xl font-extrabold text-primary mb-6 leading-tight">${article.title}</h1>
                
                <div class="flex items-center gap-6 py-8 border-y border-gray-100 mb-10">
                    <div class="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-500">
                        ${article.author?.name?.charAt(0) || 'A'}
                    </div>
                    <div>
                        <div class="font-bold text-slate-900">${article.author?.name || 'Administrateur'}</div>
                        <div class="text-sm text-slate-500">Publié le ${new Date(article.createdAt).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}</div>
                    </div>
                </div>

                ${article.heroImage ? `
                    <img src="${article.heroImage.path}" class="w-full h-[450px] object-cover rounded-3xl shadow-xl mb-12 shadow-slate-200">
                ` : ''}
            </header>

            <div class="article-content">
                ${renderArticle(article.content)}
            </div>

            <footer class="mt-20 pt-10 border-t border-gray-100">
                <div class="bg-slate-50 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                        <h4 class="font-bold text-lg text-primary mb-1 italic">Cet article vous a plu ?</h4>
                        <p class="text-slate-500">Partagez-le avec vos collègues ou inscrivez-vous à notre newsletter.</p>
                    </div>
                    <button class="bg-primary text-white px-6 py-3 rounded-xl font-bold hover:bg-slate-800 transition-colors">Partager l'article</button>
                </div>
            </footer>
        </article>
        `;
    } catch (err) {
        return `<div class="p-12 text-center text-red-500">L'article demandé est introuvable.</div>`;
    }
};

