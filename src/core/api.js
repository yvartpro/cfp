/**
 * API Wrapper for CFP Backend
 */
import { API_BASE_URL } from '../config.js';

const BASE_URL = API_BASE_URL;

// Helper to fix port 4000 in image paths from legacy DB data
const fixImageUrls = (data) => {
  if (!data) return data;
  if (typeof data === 'string') {
    return data.replace('https://capbio.bi/cfp', 'https://capbio.bi/cfp');
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
  getArticleBySlug: async (slug) => {
    const result = await api.fetch(`/article/slug/${slug}`);
    // Handle { data: [article] } or { data: article } wrappers
    let article = result;
    if (result.data) {
      article = Array.isArray(result.data) ? result.data[0] : result.data;
    }

    // Parse content if it's a string (stringified JSON)
    if (article && typeof article.content === 'string') {
      try {
        article.content = JSON.parse(article.content);
      } catch (e) {
        console.error('Failed to parse article content:', e);
      }
    }

    return article;
  },
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
