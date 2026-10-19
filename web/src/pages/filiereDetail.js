import { api } from '../core/api.js';
import { seo } from '../core/seo.js';
import { Loader } from '../components/loader.js';

export const FiliereDetail = async (slug) => {
    const container = document.getElementById('router-view');
    container.innerHTML = Loader();

    try {
        const filiere = await api.getFiliereBySlug(slug);

        seo.update({
            title: filiere.name,
            description: filiere.description,
        });

        return `
            <div class="max-w-6xl mx-auto space-y-16">
                <!-- Hero -->
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div class="order-2 lg:order-1">
                        <span class="inline-block px-3 py-1 rounded-lg bg-blue-50 text-accent text-sm font-bold mb-4">Formation Professionnelle</span>
                        <h1 class="text-4xl md:text-5xl font-extrabold text-primary mb-6 leading-tight">${filiere.name}</h1>
                        <p class="text-slate-600 text-lg leading-relaxed mb-8">${filiere.description}</p>
                        <div class="flex flex-wrap gap-4">
                            <a href="#register" class="bg-accent text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-blue-500/20">S'inscrire maintenant</a>
                            <div class="flex items-center gap-2 text-slate-500 px-4">
                                <span class="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">🎓</span>
                                <span class="text-sm font-medium">Diplôme Certifié</span>
                            </div>
                        </div>
                    </div>
                    <div class="order-1 lg:order-2 rounded-3xl overflow-hidden shadow-2xl">
                        <img src="${filiere.heroImage?.path || 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1000'}" class="w-full h-full object-cover aspect-square md:aspect-video lg:aspect-square">
                    </div>
                </div>

                <!-- Stats / Features -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center bg-white p-10 rounded-3xl border border-gray-100 shadow-sm">
                    <div>
                        <div class="text-3xl font-bold text-accent mb-2 italic">100%</div>
                        <div class="text-sm text-slate-500 font-medium">Pratique & Ateliers</div>
                    </div>
                    <div class="border-y md:border-y-0 md:border-x border-gray-100 py-6 md:py-0">
                        <div class="text-3xl font-bold text-accent mb-2 italic">Durée</div>
                        <div class="text-sm text-slate-500 font-medium font-bold">2 ans</div>
                    </div>
                    <div>
                        <div class="text-3xl font-bold text-accent mb-2 italic">Emploi</div>
                        <div class="text-sm text-slate-500 font-medium font-bold">Accompagnement pro</div>
                    </div>
                </div>

                <!-- Call to action simple -->
                <section id="register" class="bg-slate-900 rounded-[2.5rem] p-12 text-white relative overflow-hidden">
                    <div class="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
                    <div class="relative z-10 max-w-xl">
                        <h2 class="text-3xl font-bold mb-4 italic">Rejoignez ${filiere.name}</h2>
                        <p class="text-slate-400 mb-8 font-bold">Nos conseillers sont disponibles pour répondre à toutes vos questions sur les pré-requis et les débouchés.</p>
                        <form class="flex flex-col md:flex-row gap-4">
                            <input type="email" placeholder="Votre email" class="flex-grow bg-white/10 border border-white/20 rounded-xl px-6 py-4 focus:outline-none focus:border-accent">
                            <button class="bg-white text-slate-900 px-8 py-4 rounded-xl font-bold hover:bg-slate-100 transition-all">Envoyer</button>
                        </form>
                    </div>
                </section>
            </div>
        `;
    } catch (err) {
        return `<div class="p-12 text-center text-red-500">Cette filière n'existe pas ou est momentanément indisponible.</div>`;
    }
};
