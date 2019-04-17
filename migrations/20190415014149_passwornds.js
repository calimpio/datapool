
exports.up = function(knex, Promise) {
    return knex.schema.createTable('passwords',(table)=>{
        table.increments('id').primary();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
                
        table.string('authenticable_type');
        table.integer('authenticable_id');        
        table.string('password');
       
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('passwords');
};
