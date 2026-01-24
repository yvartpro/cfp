/**
 * Global Header Component
 */
export const Header = () => {
    return `
        <header class="bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm sticky top-0 z-50">
            <div class="container h-24 flex items-center justify-between">
                <!-- Logo -->
                <a href="/" data-link class="flex items-center gap-3 group">
                    <div class="w-12 h-12 bg-primary text-white flex items-center justify-center rounded-sm font-heading font-black text-2xl shadow-lg group-hover:bg-secondary transition-colors duration-300">
                        C
                    </div>
                    <div class="flex flex-col">
                        <span class="font-heading font-bold text-xl leading-none text-primary uppercase tracking-tight">CFP<span class="text-secondary">Portal</span></span>
                        <span class="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Excellence & Innovation</span>
                    </div>
                </a>

                <!-- Desktop Nav -->
                <nav class="hidden lg:flex items-center gap-8">
                    <a href="/" data-link class="text-sm font-bold text-gray-700 hover:text-primary uppercase tracking-wide transition-colors py-2 border-b-2 border-transparent hover:border-secondary">Accueil</a>
                    <a href="/about" data-link class="text-sm font-bold text-gray-700 hover:text-primary uppercase tracking-wide transition-colors py-2 border-b-2 border-transparent hover:border-secondary">Notre École</a>
                    <a href="/filieres" data-link class="text-sm font-bold text-gray-700 hover:text-primary uppercase tracking-wide transition-colors py-2 border-b-2 border-transparent hover:border-secondary">Programmes</a>
                    <a href="/services" data-link class="text-sm font-bold text-gray-700 hover:text-primary uppercase tracking-wide transition-colors py-2 border-b-2 border-transparent hover:border-secondary">Services</a>
                    <a href="/articles" data-link class="text-sm font-bold text-gray-700 hover:text-primary uppercase tracking-wide transition-colors py-2 border-b-2 border-transparent hover:border-secondary">Actualités</a>
                </nav>

                <!-- CTA -->
                <div class="hidden lg:block">
                    <a href="/contact" data-link class="bg-secondary text-primary px-8 py-3 rounded-sm text-sm font-black uppercase tracking-wider hover:bg-primary hover:text-white transition-all shadow-md transform hover:-translate-y-0.5">
                        Postuler Maintenant
                    </a>
                </div>

                <!-- Mobile Menu Button (Toggle logic in main.js) -->
                <button id="mobile-menu-btn" class="lg:hidden p-2 text-primary hover:bg-gray-50 rounded-lg">
                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                </button>
            </div>
            
            <!-- Mobile Nav -->
            <div id="mobile-menu" class="hidden lg:hidden bg-white border-t border-gray-100 shadow-xl overflow-hidden">
                <div class="container py-4 space-y-2">
                    <a href="/" data-link class="block px-4 py-3 text-sm font-bold text-gray-700 hover:bg-gray-50 hover:text-primary uppercase border-l-4 border-transparent hover:border-secondary transition-all">Accueil</a>
                    <a href="/about" data-link class="block px-4 py-3 text-sm font-bold text-gray-700 hover:bg-gray-50 hover:text-primary uppercase border-l-4 border-transparent hover:border-secondary transition-all">Notre École</a>
                    <a href="/filieres" data-link class="block px-4 py-3 text-sm font-bold text-gray-700 hover:bg-gray-50 hover:text-primary uppercase border-l-4 border-transparent hover:border-secondary transition-all">Programmes</a>
                    <a href="/services" data-link class="block px-4 py-3 text-sm font-bold text-gray-700 hover:bg-gray-50 hover:text-primary uppercase border-l-4 border-transparent hover:border-secondary transition-all">Services</a>
                    <a href="/articles" data-link class="block px-4 py-3 text-sm font-bold text-gray-700 hover:bg-gray-50 hover:text-primary uppercase border-l-4 border-transparent hover:border-secondary transition-all">Actualités</a>
                    <div class="px-4 py-4 mt-2 border-t border-gray-100">
                        <a href="/contact" data-link class="block w-full text-center bg-secondary text-primary px-6 py-3 rounded-sm text-sm font-black uppercase tracking-wider hover:bg-primary hover:text-white transition-all shadow-sm">
                            Postuler Maintenant
                        </a>
                    </div>
                </div>
            </div>
        </header>
    `;
};
