/**
 * Loader / Loading State Component
 */
export const Loader = () => {
  return `
        <div class="flex flex-col items-center justify-center py-20 animate-pulse">
            <div class="w-12 h-12 border-4 border-accent border-t-transparent rounded-full animate-spin mb-4"></div>
            <p class="text-slate-400 font-medium">Chargement en cours...</p>
        </div>
    `;
};
