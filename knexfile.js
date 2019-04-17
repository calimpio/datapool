// Update with your config settings.
require('custom-env').env();

module.exports = {

  development: {
    client : process.env.DB_DRIVER,
    connection:{
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    },
    migrations: {
      tableName: 'knex_migrations'
    }  
  },

  staging: {
    client : process.env.DB_DRIVER,
    connection:{
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client : process.env.DB_DRIVER,
    connection:{
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {      
      tableName: 'knex_migrations'
    }
  }

};
