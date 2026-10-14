// If running locally, empty string uses the Webpack dev-server proxy to avoid CORS completely.
// In production, uses REACT_APP_API_URL or defaults to railway domain.
const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
const rawUrl = isLocal ? '' : (process.env.REACT_APP_API_URL || 'https://shaky-car-production.up.railway.app');
const baseUrl = rawUrl.replace(/\/+$/, '').replace(/\/api$/, '');

const config = {
  apiUrl: baseUrl,
};

export default config;
