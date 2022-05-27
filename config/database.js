const path = require('path');

module.exports = ({ env }) => {
  console.log({
    host: env("DATABASE_HOST", "127.0.0.1"),
    port: env.int("DATABASE_PORT", 5432),
    database: env("DATABASE_NAME", "strapi"),
    user: env("DATABASE_USERNAME", "strapi"),
    password: env("DATABASE_PASSWORD", "strapi")
  })

  return {
    connection: {
      client: env("DATABASE_CLIENT", "postgres"),
      connection: {
        host: env("DATABASE_HOST", "127.0.0.1"),
        port: env.int("DATABASE_PORT", 5432),
        database: env("DATABASE_NAME", "strapi"),
        user: env("DATABASE_USERNAME", "strapi"),
        password: env("DATABASE_PASSWORD", "strapi")
      },
      debug: false,

      // client: 'sqlite',
      // connection: {
      //   filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
      // },
      // useNullAsDefault: true,
    },
  }
};
