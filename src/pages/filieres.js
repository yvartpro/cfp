import { api } from '../core/api.js';
import { seo } from '../core/seo.js';
import { Loader } from '../components/loader.js';

export const Filieres = async () => {
    seo.update({
        title: 'Nos Filières - CFP Portal',
        description: 'Explorez toutes nos formations professionnelles disponibles au CFP.',
    });

    const container = document.getElementById('router-view');
    container.innerHTML = Loader();

    try {
        const response = await api.getFilieres();
        const filieres = response.data;

        return `
            <div class="space-y-16 py-10">
                <header class="text-center max-w-3xl mx-auto px-4" data-aos="fade-down">
                    <h1 class="text-4xl md:text-5xl font-heading font-black text-primary uppercase mb-6">Nos Filières de <span class="text-secondary">Formation</span></h1>
                    <p class="text-gray-500 text-lg font-light leading-relaxed">
                        Des cursus d'excellence conçus pour répondre aux exigences réelles du marché de l'emploi et préparer les leaders techniques de demain.
                    </p>
                </header>

                <div class="container mx-auto px-4">
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        ${filieres.map((filiere, i) => `
                            <div class="bg-white rounded-none border-b-4 border-transparent hover:border-secondary shadow-lg hover:shadow-2xl transition-all duration-300 group overflow-hidden" data-aos="fade-up" data-aos-delay="${i * 100}">
                                <div class="h-64 relative overflow-hidden">
                                    <img src="${filiere.heroImage?.path || 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800'}" 
                                         class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
                                    <div class="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors"></div>
                                    <div class="absolute bottom-0 left-0 bg-white/95 px-6 py-2 text-xs font-bold text-primary uppercase tracking-widest clip-path-slant">
                                        Filière Certifiée
                                    </div>
                                </div>
                                <div class="p-8">
                                    <h3 class="text-2xl font-heading font-bold text-primary mb-4 uppercase group-hover:text-secondary transition-colors">${filiere.name}</h3>
                                    <p class="text-gray-500 mb-8 leading-relaxed line-clamp-3 font-light text-sm">${filiere.description}</p>
                                    <a href="/filiere/${filiere.slug}" data-link class="inline-block text-primary font-bold uppercase text-xs tracking-widest border-b-2 border-primary/20 pb-1 hover:text-secondary hover:border-secondary transition-colors">
                                        Découvrir le programme &rarr;
                                    </a>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
    } catch (err) {
        return `<div class="p-20 text-center font-heading font-bold text-primary text-xl">Une erreur s'est produite lors du chargement des filières.</div>`;
    }
};
