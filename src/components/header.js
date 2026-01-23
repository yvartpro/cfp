/**
 * Global Header Component
 */
export const Header = () => {
  return `
        <header class="glass-header border-b border-gray-100 shadow-sm">
            <div class="container mx-auto px-4 max-w-7xl h-20 flex items-center justify-between">
                <!-- Logo -->
                <a href="/" data-link class="flex items-center gap-2 group">
                    <div class="w-10 h-10 bg-accent rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-500/30 group-hover:scale-105 transition-transform">
                        C
                    </div>
                    <span class="text-xl font-bold tracking-tight text-primary">CFP<span class="text-accent">Portal</span></span>
                </a>

                <!-- Desktop Nav -->
                <nav class="hidden md:flex items-center gap-8">
                    <a href="/" data-link class="text-sm font-medium text-slate-600 hover:text-accent transition-colors">Accueil</a>
                    <a href="/filieres" data-link class="text-sm font-medium text-slate-600 hover:text-accent transition-colors">Filières</a>
                    <a href="/services" data-link class="text-sm font-medium text-slate-600 hover:text-accent transition-colors">Services</a>
                    <a href="/articles" data-link class="text-sm font-medium text-slate-600 hover:text-accent transition-colors">Blog</a>
                </nav>

                <!-- CTA -->
                <div class="hidden md:block">
                    <a href="/contact" data-link class="bg-primary text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-slate-800 transition-all shadow-md">
                        Nous contacter
                    </a>
                </div>

                <!-- Mobile Menu Button (Toggle logic in main.js) -->
                <button id="mobile-menu-btn" class="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                </button>
            </div>
            
            <!-- Mobile Nav (Hidden by default) -->
            <div id="mobile-menu" class="hidden md:hidden bg-white border-b border-gray-100 px-4 py-4 space-y-3">
                <a href="/" data-link class="block py-2 text-slate-600 font-medium">Accueil</a>
                <a href="/filieres" data-link class="block py-2 text-slate-600 font-medium">Filières</a>
                <a href="/services" data-link class="block py-2 text-slate-600 font-medium">Services</a>
                <a href="/articles" data-link class="block py-2 text-slate-600 font-medium">Blog</a>
                <a href="/contact" data-link class="block py-2 text-accent font-bold">Nous contacter</a>
            </div>
        </header>
    `;
};
