/**
 * SEO Management Helper
 */
export const seo = {
  update({ title, description, canonical }) {
    // Document Title
    if (title) {
      document.title = `${title} | CFP`;
    }

    // Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    if (description) {
      metaDescription.content = description;
    }

    // Canonical URL
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.rel = 'canonical';
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.href = canonical || window.location.href;
  }
};
