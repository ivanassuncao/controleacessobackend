
exports.up = function(knex, Promise) {
    return knex.schema.createTable('controle_acesso_empresa_terceiras', table => {
        table.increments('id').primary()
        table.timestamp('data_entrada')
        table.integer('empresa_id').notNull()
        table.integer('empresa_terceira_id').notNull()
        table.integer('prestador_id').notNull()
        table.integer('tipo_veiculo_id')
        table.string('placa_veiculo')
        table.integer('setor_id')
        table.timestamp('data_saida')
        table.timestamp('data_criacao')
            .defaultTo(knex.fn.now())
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('controle_acesso_empresa_terceiras')
};
