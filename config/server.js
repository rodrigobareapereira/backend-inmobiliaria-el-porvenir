// config/server.js
module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337), // Render inyecta su propio puerto
  url: env('APP_URL', 'https://backend-inmobiliaria-el-porvenir.onrender.com'),
});
