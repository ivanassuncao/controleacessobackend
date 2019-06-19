
exports.up = function(knex, Promise) {
    return knex.schema.createTable('controle_acesso_funcionarios', table => {
        table.increments('id').primary()
        table.timestamp('data_entrada').notNull()
        table.integer('empresa_id').notNull()
        table.integer('funcionario_id').notNull()
        table.string('placa_veiculo')
        table.timestamp('data_saida')
        table.timestamp('data_criacao')
            .defaultTo(knex.fn.now())
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('controle_acesso_funcionarios')
};
