/**
 * Application Configuration
 */

// Base path for GitHub Pages deployment
// Set to '/cfp' for username.github.io/cfp
// Set to '' for root domain or local development
export const BASE_PATH = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
  ? ''
  : '/cfp';

// API Base URL
export const API_BASE_URL = 'https://capbio.bi/cfp/api';
