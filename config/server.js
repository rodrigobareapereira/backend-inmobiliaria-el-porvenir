// config/server.js
module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('APP_URL', 'https://backend-inmobiliaria-el-porvenir.onrender.com'),

  // 👇 ESTA PARTE ES OBLIGATORIA
  app: {
    // Lee APP_KEYS desde el entorno como array
    keys: env.array('APP_KEYS'),
  },
});
