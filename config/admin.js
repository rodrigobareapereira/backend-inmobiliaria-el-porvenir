// config/admin.js
module.exports = ({ env }) => ({
  auth: { secret: env('ADMIN_JWT_SECRET') },
  apiToken: { salt: env('API_TOKEN_SALT') },
  transfer: { token: { salt: env('TRANSFER_TOKEN_SALT') } },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },

  // URL pública (sin slash final)
  url: env('APP_URL', 'https://backend-inmobiliaria-el-porvenir.onrender.com'),

  // Orígenes válidos
  allowedOrigins: [
    'https://backend-inmobiliaria-el-porvenir.onrender.com',
    'http://localhost:1337',
  ],

  // ⚠️ No definas "path" aquí en v4.
  serveAdminPanel: env.bool('SERVE_ADMIN', true),
});
