
exports.up = function(knex, Promise) {
    return knex.schema.createTable('setores', table => {
        table.increments('id').primary()
        table.string('nome_setor').notNull()
        table.boolean('ativo')
            .notNull().defaultTo(true)
        table.timestamp('data_criacao')
            .defaultTo(knex.fn.now())
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('setores')
};
