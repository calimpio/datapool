require('module-alias/register')
const bookshelf = require('@config/database');
const Model = require('bookshelf-modelbase')(bookshelf)
module.exports = Model;