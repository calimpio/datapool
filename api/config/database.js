require('custom-env').env();

//Database Config:
const database ={
    client : process.env.DB_DRIVER,
    connection:{
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    }    
}

const knex = require('knex')(database);



//Conections:
const bookshelf = require('bookshelf')(knex);


module.exports = bookshelf;
