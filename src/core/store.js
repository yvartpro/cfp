/**
 * Simple global store for state caching
 */
export const store = {
  state: {
    articles: [],
    filieres: [],
    services: [],
    currentArticle: null,
    currentFiliere: null,
    currentService: null,
    loading: false
  },

  setState(newState) {
    this.state = { ...this.state, ...newState };
    // Could implement simple observer pattern here if needed for components
  },

  getState() {
    return this.state;
  }
};
