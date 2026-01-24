/**
 * Dynamic Carousel Component
 */
export const Carousel = (images) => {
  if (!images || images.length === 0) return '';

  // Create unique ID for this instance
  const id = `carousel-${Math.random().toString(36).substr(2, 9)}`;

  setTimeout(() => {
    const container = document.getElementById(id);
    if (!container) return;

    const slides = container.querySelectorAll('.carousel-slide');
    let currentSlide = 0;

    const showSlide = (n) => {
      slides[currentSlide].classList.add('opacity-0');
      slides[currentSlide].classList.remove('opacity-100');
      currentSlide = (n + slides.length) % slides.length;
      slides[currentSlide].classList.remove('opacity-0');
      slides[currentSlide].classList.add('opacity-100');
    };

    // Auto-play
    const interval = setInterval(() => showSlide(currentSlide + 1), 5000);

    // Initial state check
    showSlide(0);

    // Cleanup on remove (basic)
    container.dataset.intervalId = interval;
  }, 100);

  const slidesHtml = images.map((img, index) => `
    <div class="carousel-slide absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === 0 ? 'opacity-100' : 'opacity-0'}">
      <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
      <img src="${img.path}" class="w-full h-full object-cover" alt="${img.description || 'Slide'}">
      <div class="absolute bottom-20 left-12 right-12 z-20 text-white max-w-2xl">
        <span class="inline-block px-4 py-1.5 rounded-full bg-accent/40 backdrop-blur-md border border-white/20 text-white font-bold text-xs uppercase tracking-widest mb-4">Actualités</span>
        <h2 class="text-4xl md:text-6xl font-black mb-4 leading-tight">${img.description || 'Bienvenue au Centre de Formation'}</h2>
        <p class="text-white/80 text-lg md:text-xl font-medium line-clamp-2">Découvrez une excellence académique et professionnelle sans compromis.</p>
      </div>
    </div>
  `).join('');

  return `
    <div id="${id}" class="relative h-[600px] w-full overflow-hidden bg-slate-900 group">
      ${slidesHtml}
      
      <!-- Indicators -->
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        ${images.map((_, i) => `
          <div class="w-12 h-1.5 rounded-full bg-white/20 overflow-hidden">
            <div class="h-full bg-white scale-x-0 origin-left transition-transform duration-[5000ms] ease-linear" id="${id}-indicator-${i}"></div>
          </div>
        `).join('')}
      </div>

      <!-- Navigation buttons -->
      <button class="absolute left-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all opacity-0 group-hover:opacity-100">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
      </button>
      <button class="absolute right-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all opacity-0 group-hover:opacity-100">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
      </button>
    </div>
  `;
};
