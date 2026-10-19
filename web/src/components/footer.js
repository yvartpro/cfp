/**
 * Global Footer Component
 */
export const Footer = () => {
    return `
        <footer class="bg-primary text-white pt-20 pb-10 mt-0 border-t-4 border-secondary">
            <div class="container mx-auto px-4">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <!-- Brand -->
                    <div>
                        <div class="flex items-center gap-2 mb-8 text-white">
                            <div class="w-10 h-10 bg-white text-primary rounded-sm flex items-center justify-center font-heading font-black text-xl">C</div>
                            <div class="flex flex-col">
                                <span class="font-heading font-bold text-xl uppercase leading-none">CFP Portal</span>
                                <span class="text-[10px] uppercase tracking-widest opacity-70">Excellence & Innovation</span>
                            </div>
                        </div>
                        <p class="text-white/70 text-sm leading-relaxed mb-8">
                            Le Centre de Formation Professionnelle est un établissement d'excellence dédié à la formation technique et professionnelle, préparant les jeunes aux défis de demain.
                        </p>
                        <div class="flex gap-4">
                            <a href="#" class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all">
                                <span class="sr-only">Facebook</span>
                                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.791-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                            </a>
                            <a href="#" class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all">
                                <span class="sr-only">Twitter</span>
                                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                            </a>
                            <a href="#" class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all">
                                <span class="sr-only">LinkedIn</span>
                                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                            </a>
                        </div>
                    </div>

                    <!-- Quick Links -->
                    <div>
                        <h4 class="text-secondary font-bold mb-8 uppercase tracking-widest text-sm">Découvrir</h4>
                        <ul class="space-y-4 text-sm font-medium text-white/50">
                            <li><a href="/about" data-link class="hover:text-white hover:translate-x-1 transition-all inline-block">&rarr; Notre Histoire</a></li>
                            <li><a href="/filieres" data-link class="hover:text-white hover:translate-x-1 transition-all inline-block">&rarr; Formations</a></li>
                            <li><a href="/admission" data-link class="hover:text-white hover:translate-x-1 transition-all inline-block">&rarr; Admissions</a></li>
                            <li><a href="/articles" data-link class="hover:text-white hover:translate-x-1 transition-all inline-block">&rarr; Actualités</a></li>
                        </ul>
                    </div>

                     <!-- Schools/Programs -->
                    <div>
                        <h4 class="text-secondary font-bold mb-8 uppercase tracking-widest text-sm">Programmes</h4>
                        <ul class="space-y-4 text-sm font-medium text-white/50">
                            <li><a href="#" class="hover:text-white hover:translate-x-1 transition-all inline-block">&rarr; Informatique</a></li>
                            <li><a href="#" class="hover:text-white hover:translate-x-1 transition-all inline-block">&rarr; Mécanique</a></li>
                            <li><a href="#" class="hover:text-white hover:translate-x-1 transition-all inline-block">&rarr; Électronique</a></li>
                            <li><a href="#" class="hover:text-white hover:translate-x-1 transition-all inline-block">&rarr; Gestion</a></li>
                        </ul>
                    </div>

                    <!-- Contact -->
                    <div>
                         <h4 class="text-secondary font-bold mb-8 uppercase tracking-widest text-sm">Nous Contacter</h4>
                         <ul class="space-y-6 text-sm text-white/70">
                            <li class="flex items-start gap-4">
                                <span class="text-2xl pt-1">📍</span>
                                <div>
                                    <span class="block font-bold text-white uppercase text-xs mb-1 tracking-wider">Adresse</span>
                                    Avenue du Cinquant&eacute;naire, Rue Muhabo
                                </div>
                            </li>
                             <li class="flex items-start gap-4">
                                <span class="text-2xl pt-1">📞</span>
                                <div>
                                    <span class="block font-bold text-white uppercase text-xs mb-1 tracking-wider">Téléphone</span>
                                    +257 22 27 95 89
                                </div>
                            </li>
                             <li class="flex items-start gap-4">
                                <span class="text-2xl pt-1">✉️</span>
                                <div>
                                    <span class="block font-bold text-white uppercase text-xs mb-1 tracking-wider">Email</span>
                                    etpbujumbura@gmail.com
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40 uppercase tracking-widest font-bold">
                    <div>&copy; ${new Date().getFullYear()} CFP Portal. Tous droits réservés.</div>
                    <div class="flex gap-6">
                        <a href="#" class="hover:text-white transition-colors">Politique de confidentialité</a>
                        <a href="#" class="hover:text-white transition-colors">Mentions Légales</a>
                    </div>
                </div>
            </div>
        </footer>
    `;
};
