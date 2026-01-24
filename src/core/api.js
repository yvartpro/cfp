/**
 * API Wrapper for CFP Backend
 */
const BASE_URL = 'http://127.0.0.1:5000/cfp/api';

// Helper to fix port 4000 in image paths from legacy DB data
const fixImageUrls = (data) => {
  if (!data) return data;
  if (typeof data === 'string') {
    return data.replace('http://127.0.0.1:4000', 'http://127.0.0.1:5000');
  }
  if (Array.isArray(data)) {
    return data.map(item => fixImageUrls(item));
  }
  if (typeof data === 'object') {
    const newData = {};
    for (const key in data) {
      newData[key] = fixImageUrls(data[key]);
    }
    return newData;
  }
  return data;
};

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

      const data = await response.json();
      return fixImageUrls(data);
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
  getFiliereBySlug: (slug) => api.fetch(`/filiere/slug/${slug}`),

  // Services
  getServices: () => api.fetch('/service'),
  getServiceBySlug: (slug) => api.fetch(`/service/slug/${slug}`),

  // Files
  getFiles: (params = '') => api.fetch(`/file${params}`),
};
