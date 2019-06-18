exports.up = function (knex, Promise) {
    return knex.schema.alterTable('empresas_terceiras_prestadores', table => {
        table.string('cpf')
        table.string('nome_prestador')
        table.boolean('ativo').notNull().defaultTo(true)
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.alterTable('empresas_terceiras_prestadores', table => {
        table.dropColumn('cpf')
        table.dropColumn('nome_prestador')
        table.dropColumn('ativo')
    })
};
