/**
 * Global Footer Component
 */
export const Footer = () => {
  return `
        <footer class="bg-primary text-slate-400 py-12 border-t border-slate-800 mt-20">
            <div class="container mx-auto px-4 max-w-7xl">
                <div class="grid grid-cols-1 md:grid-cols-4 gap-12">
                    <!-- Brand -->
                    <div class="col-span-1 md:col-span-2">
                        <div class="flex items-center gap-2 mb-6 text-white">
                            <div class="w-8 h-8 bg-accent rounded-lg flex items-center justify-center font-bold">C</div>
                            <span class="text-lg font-bold">CFP Portal</span>
                        </div>
                        <p class="max-w-sm mb-6 leading-relaxed">
                            Le Centre de Formation Professionnelle accompagne les futurs talents dans leur apprentissage métier avec une vision moderne et innovante.
                        </p>
                        <div class="flex gap-4">
                            <!-- Social Icons placeholders -->
                            <div class="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-accent hover:text-white transition-all cursor-pointer">f</div>
                            <div class="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-accent hover:text-white transition-all cursor-pointer">t</div>
                            <div class="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-accent hover:text-white transition-all cursor-pointer">in</div>
                        </div>
                    </div>

                    <!-- Quick Links -->
                    <div>
                        <h4 class="text-white font-bold mb-6 italic">Navigation</h4>
                        <ul class="space-y-4 text-sm">
                            <li><a href="/" data-link class="hover:text-white transition-colors">Accueil</a></li>
                            <li><a href="/filieres" data-link class="hover:text-white transition-colors">Nos Filières</a></li>
                            <li><a href="/services" data-link class="hover:text-white transition-colors">Nos Services</a></li>
                            <li><a href="/articles" data-link class="hover:text-white transition-colors">Articles & Blog</a></li>
                        </ul>
                    </div>

                    <!-- Contact -->
                    <div>
                        <h4 class="text-white font-bold mb-6 italic">Contact</h4>
                        <ul class="space-y-4 text-sm">
                            <li class="flex items-center gap-2">📍 Bujumbura, Burundi</li>
                            <li class="flex items-center gap-2">📞 +257 00 00 00 00</li>
                            <li class="flex items-center gap-2">✉️ contact@cfp-portal.bi</li>
                        </ul>
                    </div>
                </div>

                <div class="border-t border-slate-800 mt-12 pt-8 text-center text-xs opacity-50">
                    &copy; ${new Date().getFullYear()} CFP Portal. Tous droits réservés. Design by Senior Frontend Architect.
                </div>
            </div>
        </footer>
    `;
};
