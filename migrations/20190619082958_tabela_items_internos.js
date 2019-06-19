exports.up = function(knex, Promise) {
    return knex.schema.createTable('items_internos', table => {
        table.increments('id').primary()
        table.string('nome_item').notNull().unique()
        table.string('unidade').notNull()
        table.boolean('ativo')
            .notNull().defaultTo(true)
        table.timestamp('data_criacao')
            .defaultTo(knex.fn.now())
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('items_internos')
};
