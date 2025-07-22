export const config = {
  api: {
    baseUrl: import.meta.env.VITE_API_BASE_URL || 'http://localhost:5173',
    timeout: Number(import.meta.env.VITE_API_TIMEOUT) || 5000,
  },
  features: {
    enableAuth: import.meta.env.VITE_ENABLE_AUTH === 'true',
    enableAdmin: import.meta.env.VITE_ENABLE_ADMIN === 'true',
  },
  external: {
    amazonAffiliateId: import.meta.env.VITE_AMAZON_AFFILIATE_ID || '',
  },
} as const;