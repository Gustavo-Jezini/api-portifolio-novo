module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 5433),
      database: env('DATABASE_NAME', 'api_portifolio'),
      user: env('DATABASE_USERNAME', ''),
      password: env('DATABASE_PASSWORD', 'Jezini271828'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
