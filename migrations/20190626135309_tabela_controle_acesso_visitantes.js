
exports.up = function(knex, Promise) {
    return knex.schema.createTable('controle_acesso_visitantes', table => {
        table.increments('id').primary()
        table.timestamp('data_entrada')
        table.integer('empresa_id').notNull()
        table.string('nome_empresa_visitante').notNull()
        table.string('nome_visitante').notNull()
        table.string('cpf_visitante')
        table.integer('tipo_veiculo_id')
        table.string('placa_veiculo')
        table.integer('setor_id')
        table.timestamp('data_saida')
        table.timestamp('data_criacao')
            .defaultTo(knex.fn.now())
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('controle_acesso_visitantes')
};
