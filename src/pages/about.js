import { seo } from '../core/seo.js';

export const About = () => {
    seo.update({
        title: 'À Propos - Direction & Valeurs',
        description: 'Découvrez l\'équipe dirigeante du CFP et nos valeurs fondamentales.',
    });

    const staffMembers = [
        {
            name: "Dr. Jean-Bosco Niyongabo",
            role: "Directeur Général",
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400",
            bio: "Plus de 20 ans d'expérience dans l'éducation technique et professionnelle."
        },
        {
            name: "Mme. Marie Chantal Iteriteka",
            role: "Préfet des Études",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
            bio: "Garante de la discipline et de la rigueur académique au sein du centre."
        },
        {
            name: "Ir. Alain Kwizera",
            role: "Responsable des Filières",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
            bio: "Expert en ingénierie pédagogique et suivi des programmes techniques."
        },
        {
            name: "M. Patrick Bucumi",
            role: "Responsable des Services",
            image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400",
            bio: "Coordonne les services aux entreprises et l'insertion professionnelle."
        }
    ];

    const values = [
        { title: "Excellence", icon: "💎", desc: "La recherche constante de perfection." },
        { title: "Innovation", icon: "🚀", desc: "Adopter les technologies de demain." },
        { title: "Intégrité", icon: "🤝", desc: "Transparence et éthique." },
        { title: "Engagement", icon: "🔥", desc: "Passion pour la réussite." }
    ];

    return `
        <div class="space-y-0 text-gray-700">
            <!-- Hero / Intro -->
            <section class="bg-gray-50 py-20 text-center">
                <div class="container mx-auto px-4 max-w-4xl" data-aos="fade-up">
                    <span class="text-secondary font-bold uppercase tracking-widest text-sm mb-4 block">Notre Philosophie</span>
                    <h1 class="text-4xl md:text-6xl font-heading font-black text-primary mb-8 tracking-tight uppercase">Bâtir l'avenir par <br/><span class="text-secondary">l'Excellence</span></h1>
                    <p class="text-xl text-gray-500 leading-relaxed font-light">
                        Le Centre de Formation Professionnelle (CFP) est bien plus qu'une école. <br/>C'est un pôle d'innovation dédié à la transformation des talents en leaders de demain.
                    </p>
                </div>
            </section>

             <!-- History / Mission Boxed -->
            <section class="py-24 container mx-auto px-4">
                 <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div class="space-y-8" data-aos="fade-right">
                        <div class="border-l-4 border-secondary pl-6">
                             <h2 class="text-3xl font-heading font-bold text-primary uppercase mb-2">Notre Vision</h2>
                             <p class="text-gray-400 font-bold uppercase tracking-widest text-xs">Strategique</p>
                        </div>
                       
                        <p class="text-gray-600 leading-relaxed text-lg font-light">
                            Fondé sur la conviction que la formation technique est le moteur du développement économique, le CFP s'est imposé comme une référence au Burundi. 
                        </p>
                        <p class="text-gray-800 leading-relaxed text-lg font-medium">
                            Nous formons non seulement des techniciens, mais des créateurs de solutions capables de s'adapter aux défis mondiaux de l'industrie 4.0.
                        </p>
                        <div class="pt-6">
                            <a href="/filieres" data-link class="btn-primary inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-sm border-b-2 border-primary pb-1 hover:text-secondary hover:border-secondary transition-all">
                                Découvrez nos programmes <span>&rarr;</span>
                            </a>
                        </div>
                    </div>
                    <div class="relative group" data-aos="fade-left">
                        <div class="absolute -top-4 -right-4 w-full h-full border-4 border-secondary z-0"></div>
                        <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800" class="relative z-10 w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-700 shadow-xl">
                    </div>
                </div>
            </section>

            <!-- Core Values -->
            <section class="bg-primary text-white py-24">
                <div class="container mx-auto px-4">
                     <div class="text-center mb-16" data-aos="fade-up">
                        <h2 class="text-3xl font-heading font-bold uppercase mb-4">Nos Valeurs</h2>
                        <div class="w-20 h-1 bg-secondary mx-auto"></div>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                        ${values.map((v, i) => `
                            <div class="bg-white/5 p-8 border border-white/10 text-center hover:bg-white/10 transition-colors" data-aos="fade-up" data-aos-delay="${i * 100}">
                                <div class="text-5xl mb-6">${v.icon}</div>
                                <h3 class="text-xl font-heading font-bold mb-3 text-secondary uppercase">${v.title}</h3>
                                <p class="text-white/60 text-sm leading-relaxed">${v.desc}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </section>

            <!-- Board of Direction -->
            <section class="py-24 container mx-auto px-4">
                 <div class="text-center mb-16" data-aos="fade-up">
                    <span class="text-secondary font-bold uppercase tracking-widest text-xs mb-2 block">Leadership</span>
                    <h2 class="text-3xl md:text-5xl font-heading font-bold text-primary uppercase">Conseil de <span class="text-gray-300">Direction</span></h2>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    ${staffMembers.map((member, i) => `
                        <div class="group" data-aos="fade-up" data-aos-delay="${i * 100}">
                            <div class="relative h-96 overflow-hidden mb-6 bg-gray-100 shadow-sm">
                                <img src="${member.image}" class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500">
                                <div class="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                                    <p class="text-white text-xs leading-relaxed font-light">${member.bio}</p>
                                </div>
                            </div>
                            <h3 class="text-lg font-heading font-bold text-primary mb-1 uppercase">${member.name}</h3>
                            <p class="text-secondary font-bold text-xs uppercase tracking-widest border-t border-gray-100 pt-2 mt-2 inline-block">${member.role}</p>
                        </div>
                    `).join('')}
                </div>
            </section>
        </div>
    `;
};
