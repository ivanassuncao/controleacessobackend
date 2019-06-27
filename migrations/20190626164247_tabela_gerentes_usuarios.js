
exports.up = function(knex, Promise) {
    return knex.schema.createTable('gerentes_usuarios', table => {
        table.increments('id').primary()
        table.integer('gerente_id').unsigned()
        table.integer('usuario_id').unsigned()
        table.boolean('ativo')
            .notNull().defaultTo(true)
        table.timestamp('data_criacao')
            .defaultTo(knex.fn.now())
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('gerentes_usuarios')
};

