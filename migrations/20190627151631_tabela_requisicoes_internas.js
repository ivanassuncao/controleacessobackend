
exports.up = function(knex, Promise) {
    return knex.schema.createTable('requisicoes_internas', table => {
        table.increments('id').primary()
        table.timestamp('data_requisicao').notNull()
        table.integer('empresa_id').notNull()
        table.integer('usuario_id').notNull()
        table.integer('setor_id').notNull()
        table.integer('item_id').notNull()
        table.string('observacao')
        table.timestamp('data_aprovacao')
        table.integer('gerente_id')
        table.timestamp('data_criacao')
            .defaultTo(knex.fn.now())
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('requisicoes_internas')
};
