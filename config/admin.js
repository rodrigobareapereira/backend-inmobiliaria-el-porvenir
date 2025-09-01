// config/admin.js
module.exports = ({ env }) => ({
  auth: { secret: env('ADMIN_JWT_SECRET') },
  apiToken: { salt: env('API_TOKEN_SALT') },
  transfer: { token: { salt: env('TRANSFER_TOKEN_SALT') } },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },

  // URL pública del admin (sin slash final)
  url: env('APP_URL', 'https://backend-inmobiliaria-el-porvenir.onrender.com'),

  // Orígenes permitidos para el panel
  allowedOrigins: [
    'https://backend-inmobiliaria-el-porvenir.onrender.com',
    'http://localhost:1337',
  ],

  // Asegura que sirva el panel en producción
  serveAdminPanel: env.bool('SERVE_ADMIN', true),
});


