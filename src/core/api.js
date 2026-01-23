/**
 * API Wrapper for CFP Backend
 */
const BASE_URL = 'http://127.0.0.1:4000/cfp/api'; // Standard default, should be configurable for production

export const api = {
  async fetch(endpoint, options = {}) {
    try {
      const response = await fetch(`${BASE_URL}${endpoint}`, {
        ...options,
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
      });

      if (!response.ok) {
        throw new Error(`API Error: ${response.status} ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error('API Fetch Error:', error);
      throw error;
    }
  },

  // Articles
  getArticles: (params = '') => api.fetch(`/article${params}`),
  getArticleBySlug: (slug) => api.fetch(`/article/slug/${slug}`),
  getArticleById: (id) => api.fetch(`/article/${id}`),

  // Filieres
  getFilieres: () => api.fetch('/filiere'),
  getFiliereBySlug: (slug) => api.fetch(`/filiere/${slug}`),

  // Services
  getServices: () => api.fetch('/service'),
  getServiceBySlug: (slug) => api.fetch(`/service/${slug}`),
};
