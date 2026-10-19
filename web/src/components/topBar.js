/**
 * Top Bar Component
 */
export const TopBar = () => {
    return `
        <div class="hidden md:block bg-primary text-white py-1.5 px-4 text-[11px] font-bold uppercase tracking-wide relative z-[60]">
            <div class="container flex flex-row justify-between items-center gap-2">
                <div class="flex items-center gap-3 md:gap-6">
                    <a href="mailto:etpbujumbura@gmail.com" class="flex items-center gap-1.5 hover:text-secondary transition-colors">
                        <svg class="w-4 h-4 md:w-3.5 md:h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                        </svg>
                        <span class="hidden md:inline"><span class="opacity-70">Email:</span> etpbujumbura@gmail.com</span>
                        <span class="sr-only">Email: etpbujumbura@gmail.com</span>
                    </a>
                    <span class="hidden md:inline text-white/20">|</span>
                    <a href="tel:+25722279589" class="flex items-center gap-1.5 hover:text-secondary transition-colors">
                        <svg class="w-4 h-4 md:w-3.5 md:h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                        </svg>
                        <span class="hidden md:inline"><span class="opacity-70">Appelez-nous:</span> +257 22 27 95 89</span>
                        <span class="sr-only">Téléphone: +257 22 27 95 89</span>
                    </a>
                </div>
                <div class="hidden md:flex items-center gap-6">
                    <div class="flex items-center gap-4">
                        <a href="https://www.facebook.com/CFPPortal" class="hover:text-secondary transition-colors flex items-center gap-1"><span class="w-1.5 h-1.5 bg-secondary rounded-full"></span> ESPACE FAMILLE</a>
                        <a href="https://www.facebook.com/CFPPortal" class="hover:text-secondary transition-colors flex items-center gap-1"><span class="w-1.5 h-1.5 bg-secondary rounded-full"></span> ALUMNI</a>
                        <a href="#" class="hover:text-secondary transition-colors flex items-center gap-1"><span class="w-1.5 h-1.5 bg-secondary rounded-full"></span> CAREERS</a>
                    </div>
                </div>
            </div>
        </div>
    `;
};
