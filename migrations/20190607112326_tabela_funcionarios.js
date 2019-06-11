
exports.up = function(knex, Promise) {
    return knex.schema.createTable('funcionarios', table => {
        table.increments('id').primary()
        table.string('nome_funcionario').notNull()
        table.string('email_funcionario').notNull().unique()
        table.boolean('ativo')
            .notNull().defaultTo(true)
        table.timestamp('data_criacao')
            .defaultTo(knex.fn.now())
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('funcionarios')
};
