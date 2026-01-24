/**
 * Top Bar Component
 */
export const TopBar = () => {
  return `
        <div class="bg-primary text-white py-1.5 px-4 text-[11px] font-bold uppercase tracking-wide relative z-[60]">
            <div class="container flex flex-col md:flex-row justify-between items-center gap-2">
                <div class="flex items-center gap-6">
                    <span class="flex items-center gap-1.5 hover:text-secondary transition-colors cursor-pointer">
                         <span class="opacity-70">Email:</span> admission@cfp-portal.bi
                    </span>
                    <span class="hidden md:inline text-white/20">|</span>
                    <span class="flex items-center gap-1.5 hover:text-secondary transition-colors cursor-pointer">
                         <span class="opacity-70">Appelez-nous:</span> +257 00 00 00 00
                    </span>
                </div>
                <div class="flex items-center gap-6">
                    <div class="flex items-center gap-4">
                        <a href="#" class="hover:text-secondary transition-colors flex items-center gap-1"><span class="w-1.5 h-1.5 bg-secondary rounded-full"></span> ESPACE FAMILLE</a>
                        <a href="#" class="hover:text-secondary transition-colors flex items-center gap-1"><span class="w-1.5 h-1.5 bg-secondary rounded-full"></span> ALUMNI</a>
                        <a href="#" class="hover:text-secondary transition-colors flex items-center gap-1"><span class="w-1.5 h-1.5 bg-secondary rounded-full"></span> CAREERS</a>
                    </div>
                </div>
            </div>
        </div>
    `;
};
