
exports.up = function(knex, Promise) {
    return knex.schema.createTable('empresas_terceiras_prestadores', table => {
        table.integer('empresa_terceira_id').unsigned()
        table.integer('prestador_id').unsigned()
        table.foreign('empresa_terceira_id').references('empresas_terceiras.id')
        table.primary(['empresa_terceira_id', 'prestador_id'])
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('empresas_terceiras_prestadores')
};
