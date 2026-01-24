/**
 * Application Configuration
 */

// Read config from global scope (injected by index.html)
// This ensures configuration is centralized in index.html
const config = window.CFP_CONFIG || {
  basePath: '',
  isLocal: true
};

export const BASE_PATH = config.basePath;

// API Base URL
export const API_BASE_URL = 'https://capbio.bi/cfp/api';
