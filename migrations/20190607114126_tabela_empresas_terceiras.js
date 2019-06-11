
exports.up = function(knex, Promise) {
    return knex.schema.createTable('empresas_terceiras', table => {
        table.increments('id').primary()
        table.string('nome_empresa_terceira').notNull()
        table.string('cnpj_cpf')
        table.boolean('ativo')
            .notNull().defaultTo(true)
        table.timestamp('data_criacao')
            .defaultTo(knex.fn.now())
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('empresas_terceiras')
};
