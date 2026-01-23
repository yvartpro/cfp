/**
 * Article JSON Renderer
 * Converts structured content from the API into HTML.
 */

const blockRenderers = {
  text: (block) => {
    return `<div class="prose prose-slate max-w-none mb-8">${block.value}</div>`;
  },

  image: (block) => {
    if (!block.file) return '';
    return `
            <figure class="my-8">
                <img src="${block.file.path}" alt="${block.file.description || ''}" class="w-full h-auto rounded-xl shadow-lg border border-gray-100">
                ${block.file.description ? `<figcaption class="mt-2 text-center text-sm text-gray-500 italic">${block.file.description}</figcaption>` : ''}
            </figure>
        `;
  },

  gallery: (block) => {
    if (!block.images || block.images.length === 0) return '';

    const gridClass = block.layout === 'grid-3' ? 'grid-cols-1 md:grid-cols-3' : 'grid-cols-1 md:grid-cols-2';

    const imagesHtml = block.images.map(img => `
            <div class="overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <img src="${img.file.path}" class="w-full h-48 object-cover modal-trigger cursor-pointer" data-full="${img.file.path}">
            </div>
        `).join('');

    return `
            <div class="grid ${gridClass} gap-4 my-8">
                ${imagesHtml}
            </div>
        `;
  },

  cta: (block) => {
    return `
            <div class="bg-blue-600 rounded-2xl p-8 text-white text-center my-12 shadow-xl shadow-blue-500/20">
                <h3 class="text-2xl font-bold mb-4">${block.title || 'Prêt à commencer ?'}</h3>
                <p class="mb-6 text-blue-100">${block.text || 'Inscrivez-vous dès aujourd\'hui pour booster votre carrière.'}</p>
                <a href="${block.url || '/contact'}" data-link class="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">
                    ${block.buttonText || 'Contactez-nous'}
                </a>
            </div>
        `;
  }
};

export const renderArticle = (content) => {
  if (!content || !content.sections) return '<p>Pas de contenu disponible.</p>';

  let html = '';

  content.sections.forEach(section => {
    if (section.title && section.id !== 'main') {
      html += `<h2 class="text-2xl font-bold mt-12 mb-6 text-primary">${section.title}</h2>`;
    }

    section.blocks.forEach(block => {
      const renderer = blockRenderers[block.type];
      if (renderer) {
        html += renderer(block);
      } else {
        console.warn(`No renderer found for block type: ${block.type}`);
      }
    });
  });

  return html;
};

/**
 * Allows registering new block renderers for extensibility
 */
export const registerBlockRenderer = (type, rendererFn) => {
  blockRenderers[type] = rendererFn;
};
