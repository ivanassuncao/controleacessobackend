
exports.up = function(knex, Promise) {
    return knex.schema.createTable('tipo_veiculos', table => {
        table.increments('id').primary()
        table.string('nome_tipo_veiculo').notNull()
        table.boolean('ativo')
            .notNull().defaultTo(true)
        table.timestamp('data_criacao')
            .defaultTo(knex.fn.now())
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('tipo_veiculos')
};
