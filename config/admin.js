// config/admin.js
module.exports = ({ env }) => ({
  auth: { secret: env('ADMIN_JWT_SECRET') },
  apiToken: { salt: env('API_TOKEN_SALT') },
  transfer: { token: { salt: env('TRANSFER_TOKEN_SALT') } },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },

  url: env('APP_URL', 'https://backend-inmobiliaria-el-porvenir.onrender.com'),
  allowedOrigins: [
    'https://backend-inmobiliaria-el-porvenir.onrender.com',
    'http://localhost:1337',
  ],

  // 👇 Fuerza la ruta del panel
  path: '/admin',
  serveAdminPanel: env.bool('SERVE_ADMIN', true),
});
