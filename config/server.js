module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 10000),
  url: env('PUBLIC_URL', 'https://backend-inmobiliaria-el-porvenir.onrender.com'),
  app: {
    keys: env.array('APP_KEYS'),
  },
});
