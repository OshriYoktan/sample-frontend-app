import axios from 'axios';

/** Single axios instance for the backend API. Vite proxies /api to the backend in development. */
export const http = axios.create({
  baseURL: '/api',
  timeout: 10_000,
});
