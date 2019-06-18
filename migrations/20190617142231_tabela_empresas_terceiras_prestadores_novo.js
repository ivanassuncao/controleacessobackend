exports.up = function(knex, Promise) {
    return knex.schema.createTable('empresas_terceiras_prestadores', table => {
        table.increments('id').primary()
        table.integer('empresa_terceira_id')
        table.string('nome_prestador').notNull()
        table.string('cpf')
        table.boolean('ativo')
            .notNull().defaultTo(true)
        table.timestamp('data_criacao')
            .defaultTo(knex.fn.now())
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('empresas_terceiras_prestadores')
};
