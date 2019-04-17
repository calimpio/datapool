
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users',(table)=>{
        table.increments('id').primary();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
        
        table.string('username').unique();
        table.string('name');
        table.string('email');        
        table.string('celphone');
       
    });
  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
