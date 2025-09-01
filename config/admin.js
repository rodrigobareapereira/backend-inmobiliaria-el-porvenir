// config/admin.js
module.exports = ({ env }) => ({
  auth: { secret: env('ADMIN_JWT_SECRET') },
  apiToken: { salt: env('API_TOKEN_SALT') },
  transfer: { token: { salt: env('TRANSFER_TOKEN_SALT') } },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },

  // 👇 IMPORTANTES
  // La URL pública exacta de tu admin (sin / al final)
  url: env('APP_URL', 'https://backend-inmobiliaria-el-porvenir.onrender.com'),

  // Strapi validará window.location.origin contra esta lista
  allowedOrigins: [
    'https://backend-inmobiliaria-el-porvenir.onrender.com',
    'http://localhost:1337',
  ],

  // Opcional (asegura que sirva el panel)
  serveAdminPanel: env.bool('SERVE_ADMIN', true),
});

