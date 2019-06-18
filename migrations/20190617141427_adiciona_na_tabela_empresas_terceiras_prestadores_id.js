exports.up = function (knex, Promise) {
    return knex.schema.dropTable('empresas_terceiras_prestadores')
};

exports.down = function (knex, Promise) {

}
