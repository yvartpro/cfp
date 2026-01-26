import { api } from '../core/api.js';
import { seo } from '../core/seo.js';
import { Loader } from '../components/loader.js';
import { Carousel } from '../components/carousel.js';

export const Home = async () => {
  seo.update({
    title: 'Acceuil - CFP Portal',
    description: 'Bienvenue au Centre de Formation Professionnelle. Excellence, Innovation et Avenir.',
  });

  const container = document.getElementById('router-view');
  container.innerHTML = Loader();

  // Robust data fetching helper
  const safeFetch = async (fetchFn, defaultValue = { data: [] }) => {
    try {
      const res = await fetchFn();
      return res || defaultValue;
    } catch (err) {
      console.warn('Silent Fetch Error:', err);
      return defaultValue;
    }
  };

  try {
    const [articles, filieres, files] = await Promise.all([
      safeFetch(() => api.getArticles('?limit=3')),
      safeFetch(() => api.getFilieres()),
      safeFetch(() => api.getFiles('?limit=6'))
    ]);

    const hasArticles = articles.data && articles.data.length > 0;
    const hasFilieres = filieres.data && filieres.data.length > 0;

    const carouselImages = files.data && files.data.length > 0
      ? files.data.slice(0, 5).map(f => ({ path: f.path, description: f.description }))
      : [
        { path: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2670&auto=format&fit=crop', description: 'Bienvenue au CFP' },
        { path: 'https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=2670&auto=format&fit=crop', description: 'Une éducation de qualité' }
      ];

    return `
      <div class="overflow-x-hidden font-sans text-gray-700">
        
        <!-- Hero Section (Carousel) -->
        <section class="h-[600px] md:h-[700px] relative">
          ${Carousel(carouselImages)}
          <div class="absolute inset-0 bg-black/30 pointer-events-none z-10"></div>
          <div class="absolute inset-0 z-20 flex items-center justify-center md:justify-end text-center md:text-right">
            <div class="container px-4 md:px-8 lg:px-12" data-aos="fade-up">
              <h1 class="text-4xl md:text-6xl lg:text-7xl font-heading font-black text-white uppercase tracking-tight mb-6 drop-shadow-lg">
                Excellence & <br/><span class="text-secondary">Innovation</span>
              </h1>
              <div class="flex flex-col md:flex-row gap-4 justify-center md:justify-end">
                  <a href="/about" data-link class="bg-primary hover:bg-white hover:text-primary text-white border-2 border-primary px-8 py-4 uppercase font-bold tracking-widest text-sm transition-all duration-300">
                    Découvrir l'école
                  </a>
                  <a href="/contact" data-link class="bg-secondary hover:bg-white hover:text-secondary text-primary border-2 border-secondary px-8 py-4 uppercase font-bold tracking-widest text-sm transition-all duration-300">
                    Contactez-nous
                  </a>
              </div>
            </div>
          </div>
        </section>

        <!-- Welcome Message Section -->
        <section class="py-20 md:py-32 bg-white">
          <div class="container mx-auto px-4">
            <div class="flex flex-col lg:flex-row gap-16 items-center">
              <div class="lg:w-1/2" data-aos="fade-right">
                <div class="relative">
                  <div class="absolute -top-6 -left-6 w-20 h-20 border-t-4 border-l-4 border-secondary"></div>
                  <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2574&auto=format&fit=crop" 
                       alt="Directeur" 
                       class="w-full h-auto shadow-2xl z-10 relative grayscale hover:grayscale-0 transition-all duration-500">
                  <div class="absolute -bottom-6 -right-6 w-20 h-20 border-b-4 border-r-4 border-primary"></div>
                </div>
              </div>
              <div class="lg:w-1/2" data-aos="fade-left">
                <h4 class="text-secondary font-bold uppercase tracking-widest mb-2">Bienvenue</h4>
                <h2 class="text-3xl md:text-4xl font-heading font-bold text-primary mb-8 uppercase leading-tight">
                  Message du <span class="text-black">Directeur</span>
                </h2>
                <div class="space-y-6 text-lg font-light leading-relaxed text-gray-600">
                  <p>
                    Chers parents, étudiants et partenaires,<br/><br/>
                    C'est avec une immense fierté que je vous accueille sur le portail numérique de notre Centre de Formation Professionnelle. Depuis notre ouverture, nous nous sommes engagés à offrir une éducation technique de classe mondiale.
                  </p>
                  <p>
                    Notre mission est simple : démocratiser l'accès à une formation de qualité et fournir aux jeunes talents les compétences nécessaires pour exceller dans un marché du travail en constante évolution.
                  </p>
                  <div class="pt-4">
                    <p class="font-heading font-bold text-primary text-xl">M. Directeur General</p>
                    <p class="text-sm uppercase tracking-wide text-gray-400">Directeur du CFP</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Key Stats Section (Enko Style) -->
        <section class="py-20 bg-light">
            <div class="container mx-auto px-4">
                <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-gray-200">
                    <div class="p-4" data-aos="fade-up" data-aos-delay="0">
                        <div class="text-4xl md:text-5xl font-heading font-black text-primary mb-2">2016</div>
                        <div class="text-xs font-bold uppercase tracking-widest text-gray-500">Année d'ouverture</div>
                    </div>
                    <div class="p-4" data-aos="fade-up" data-aos-delay="100">
                        <div class="text-4xl md:text-5xl font-heading font-black text-primary mb-2">500+</div>
                        <div class="text-xs font-bold uppercase tracking-widest text-gray-500">Diplômés</div>
                    </div>
                     <div class="p-4" data-aos="fade-up" data-aos-delay="200">
                        <div class="text-4xl md:text-5xl font-heading font-black text-primary mb-2">15</div>
                        <div class="text-xs font-bold uppercase tracking-widest text-gray-500">Programmes</div>
                    </div>
                     <div class="p-4" data-aos="fade-up" data-aos-delay="300">
                        <div class="text-4xl md:text-5xl font-heading font-black text-primary mb-2">98%</div>
                        <div class="text-xs font-bold uppercase tracking-widest text-gray-500">Taux de Réussite</div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Programs Showcase -->
        ${hasFilieres ? `
        <section class="py-24 bg-white relative">
          <div class="container mx-auto px-4">
            <div class="text-center mb-16" data-aos="fade-up">
              <h2 class="text-3xl md:text-5xl font-heading font-bold text-primary uppercase mb-4">Nos <span class="text-secondary">Programmes</span></h2>
              <div class="w-20 h-1 bg-secondary mx-auto"></div>
              <p class="mt-6 text-gray-500 max-w-2xl mx-auto text-lg font-light">
                Des cursus adaptés aux besoins du marché, alliant théorie et pratique intensive.
              </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              ${filieres.data.slice(0, 3).map((filiere, i) => `
                <a href="/filiere/${filiere.slug}" data-link class="group block relative h-[400px] overflow-hidden shadow-lg" data-aos="fade-up" data-aos-delay="${i * 100}">
                  <img src="${filiere.heroImage?.path || 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2670&auto=format&fit=crop'}" 
                       class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
                  <div class="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center p-8">
                      <div class="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          <h3 class="text-2xl font-bold text-white uppercase mb-4">${filiere.name}</h3>
                          <p class="text-white/80 text-sm mb-6 line-clamp-3">${filiere.description}</p>
                          <span class="inline-block border border-white text-white px-6 py-2 uppercase text-xs font-bold tracking-widest hover:bg-white hover:text-primary transition-colors">En savoir plus</span>
                      </div>
                  </div>
                  <div class="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent pointer-events-none group-hover:opacity-0 transition-opacity">
                      <h3 class="text-xl font-bold text-white uppercase">${filiere.name}</h3>
                  </div>
                </a>
              `).join('')}
            </div>
            
            <div class="text-center mt-12">
                 <a href="/filieres" data-link class="inline-block bg-white text-primary border border-gray-200 px-10 py-4 uppercase font-bold tracking-widest text-xs hover:bg-primary hover:text-white transition-colors shadow-sm">
                    Voir tous les programmes
                  </a>
            </div>
          </div>
        </section>
        ` : ''}

        <!-- Why Choose Us (Grid with Icons) -->
        <section class="py-24 bg-primary text-white">
            <div class="container mx-auto px-4">
                <div class="flex flex-col md:flex-row gap-16">
                    <div class="md:w-1/3" data-aos="fade-right">
                        <h2 class="text-3xl md:text-5xl font-heading font-bold uppercase leading-none mb-6">Pourquoi <br/><span class="text-secondary">Choisir</span><br/>Le CFP ?</h2>
                        <p class="text-white/70 text-lg font-light leading-relaxed mb-8">
                            Nous offrons plus qu'un diplôme : une véritable expérience de vie et un passeport pour l'emploi.
                        </p>
                        <a href="/about" data-link class="text-secondary font-bold uppercase tracking-widest border-b border-secondary pb-1 hover:text-white hover:border-white transition-colors">
                            À propos de nous &rarr;
                        </a>
                    </div>
                    <div class="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div class="bg-white/5 p-8 border border-white/10 hover:bg-white/10 transition-colors">
                            <div class="text-4xl mb-4 text-secondary">01.</div>
                            <h3 class="text-xl font-bold uppercase mb-3">Excellence Académique</h3>
                            <p class="text-white/60 font-light">Programmes certifiés et reconnus par l'État et les partenaires internationaux.</p>
                        </div>
                        <div class="bg-white/5 p-8 border border-white/10 hover:bg-white/10 transition-colors">
                            <div class="text-4xl mb-4 text-secondary">02.</div>
                            <h3 class="text-xl font-bold uppercase mb-3">Insertion Pro</h3>
                            <p class="text-white/60 font-light">80% de pratique en atelier pour une employabilité immédiate dès la sortie.</p>
                        </div>
                        <div class="bg-white/5 p-8 border border-white/10 hover:bg-white/10 transition-colors">
                            <div class="text-4xl mb-4 text-secondary">03.</div>
                            <h3 class="text-xl font-bold uppercase mb-3">Innovations</h3>
                            <p class="text-white/60 font-light">Laboratoires équipés des dernières technologies et outils du marché.</p>
                        </div>
                        <div class="bg-white/5 p-8 border border-white/10 hover:bg-white/10 transition-colors">
                            <div class="text-4xl mb-4 text-secondary">04.</div>
                            <h3 class="text-xl font-bold uppercase mb-3">Communauté</h3>
                            <p class="text-white/60 font-light">Un réseau d'alumni puissant et des événements réguliers.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Video Presentation Section -->
        <section class="py-24 bg-white">
          <div class="container mx-auto px-4">
            <div class="flex flex-col lg:flex-row gap-12 items-center">
              <!-- Video Column -->
              <div class="lg:w-5/12 w-full" data-aos="fade-right">
                <div class="relative group overflow-hidden rounded-2xl shadow-2xl bg-black aspect-video flex items-center justify-center">
                  <!-- Replace source src with your static video link once uploaded -->
                  <video 
                    class="w-full h-full object-cover" 
                    controls 
                    playsinline
                    poster="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2672&auto=format&fit=crop"
                  >
                    <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
              <!-- Text Column -->
              <div class="lg:w-7/12 w-full" data-aos="fade-left">
                <h4 class="text-secondary font-bold uppercase tracking-widest mb-2">Notre Présentation</h4>
                <h2 class="text-3xl md:text-4xl font-heading font-bold text-primary mb-6 uppercase leading-tight">
                  Découvrez l'excellence <span class="text-black">en mouvement</span>
                </h2>
                <div class="space-y-6 text-lg font-light leading-relaxed text-gray-600">
                  <p>
                    Nous croyons que la formation professionnelle est un levier de transformation. À travers cette vidéo, découvrez nos installations modernes, nos formateurs experts et l'énergie qui anime nos campus au quotidien.
                  </p>
                  <p>
                    Du génie civil à l'informatique, chaque parcours est une aventure vers la maîtrise et le succès professionnel. Regardez comment nos étudiants transforment leurs ambitions en compétences concrètes.
                  </p>
                </div>
                <div class="mt-8">
                    <a href="/about" data-link class="inline-block bg-primary text-white px-8 py-3 uppercase font-bold text-sm tracking-widest hover:bg-secondary transition-colors">
                        En savoir plus sur nous
                    </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- News Section -->
        ${hasArticles ? `
        <section class="py-24 bg-gray-50">
            <div class="container mx-auto px-4">
                <div class="flex justify-between items-end mb-16" data-aos="fade-up">
                    <div>
                        <h2 class="text-3xl md:text-5xl font-heading font-bold text-primary uppercase">Actualités</h2>
                        <div class="w-16 h-1 bg-secondary mt-4"></div>
                    </div>
                    <a href="/articles" data-link class="hidden md:block text-primary font-bold uppercase tracking-widest hover:text-secondary transition-colors">Toutes les news &rarr;</a>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    ${articles.data.map((article, i) => `
                        <article class="bg-white group cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col h-full" data-aos="fade-up" data-aos-delay="${i * 100}">
                            <a href="/article/${article.slug}" data-link class="block relative overflow-hidden h-64">
                                <img src="${article.heroImage?.path || 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2676&auto=format&fit=crop'}" 
                                     class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                                <div class="absolute top-4 left-4 bg-secondary text-primary text-[10px] font-bold uppercase px-3 py-1 tracking-widest">
                                    ${article.category || 'News'}
                                </div>
                            </a>
                            <div class="p-8 flex flex-col flex-grow">
                                <div class="text-xs text-gray-400 font-bold uppercase tracking-widest mb-3">
                                    ${new Date(article.createdAt).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
                                </div>
                                <h3 class="text-xl font-bold text-primary mb-4 leading-snug group-hover:text-secondary transition-colors">
                                    <a href="/article/${article.slug}" data-link>${article.title}</a>
                                </h3>
                                <p class="text-gray-500 font-light text-sm line-clamp-3 mb-6 flex-grow">
                                    ${article.excerpt || 'Découvrez les détails de cet événement marquant pour notre établissement...'}
                                </p>
                                <a href="/article/${article.slug}" data-link class="inline-flex items-center text-primary font-bold text-xs uppercase tracking-widest hover:text-secondary transition-colors mt-auto">
                                    Lire la suite <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                                </a>
                            </div>
                        </article>
                    `).join('')}
                </div>
            </div>
        </section>
        ` : ''}

      </div>
    `;
  } catch (err) {
    console.error(err);
    return `
        <div class="h-screen flex items-center justify-center bg-gray-50">
            <div class="text-center">
                <h2 class="text-3xl font-heading font-bold text-primary mb-4">Une erreur est survenue</h2>
                <p class="text-gray-500 mb-8">Impossible de charger le contenu. Veuillez réessayer.</p>
                <button onclick="window.location.reload()" class="bg-primary text-white px-8 py-3 uppercase font-bold text-xs tracking-widest">
                    Rafraîchir
                </button>
            </div>
        </div>
    `;
  }
};
