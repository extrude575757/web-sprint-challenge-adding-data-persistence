
exports.up = function(knex) {
    return knex.schema
    .createTable('projects', tab =>{
        tab.increments('id').unsigned();
        tab.text('name').notNullable();
        tab.text('description').notNullable();
        tab.boolean('completed')
    })

    .createTable('actions', tab =>{
        tab.increments('id').unsigned()
        tab.integer('project_id');
        tab.string('description',128).notNullable();
        tab.string('notes').notNullable();
        tab.boolean('completed');
    })
};

exports.down = function(knex) {
  
};
