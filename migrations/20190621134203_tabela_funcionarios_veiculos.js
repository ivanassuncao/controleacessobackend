exports.up = function(knex, Promise) {
    return knex.schema.createTable('funcionarios_veiculos', table => {
        table.increments('id').primary()
        table.integer('funcionario_id')
        table.string('placa_veiculo').notNull()
        table.boolean('ativo')
            .notNull().defaultTo(true)
        table.timestamp('data_criacao')
            .defaultTo(knex.fn.now())
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('funcionarios_veiculos')
};
