exports.up = function(knex, Promise) {
    return knex.schema.createTable('gerentes', table => {
        table.increments('id').primary()
        table.integer('usuario_id').unique()
        table.boolean('ativo')
            .notNull().defaultTo(true)
        table.timestamp('data_criacao')
            .defaultTo(knex.fn.now())
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('gerentes')
};
