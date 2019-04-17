
exports.up = function(knex, Promise) {
    return knex.schema.createTable('tokens',(table)=>{
        table.increments('id').primary();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());

        table.string('tokenable_type');
        table.integer('tokenable_id');        
        table.string('token');
        table.string('verb');
        table.string('factor');
       
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('tokens');
};
