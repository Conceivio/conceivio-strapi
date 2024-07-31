module.exports = [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:', 'https://*.mux.com'],
          'img-src': ["'self'", 'data:', 'blob:', 'market-assets.strapi.io', 'res.cloudinary.com', 'media.strapiapp.com'],
          'media-src': ["'self'", 'data:', 'blob:', 'market-assets.strapi.io', 'res.cloudinary.com', 'https://*.mux.com'],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];