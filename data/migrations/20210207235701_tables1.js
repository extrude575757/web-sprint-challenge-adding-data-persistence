
exports.up = function(knex) {
    return knex.schema
    .createTable('projects', tab =>{
        tab.increments('id').unsigned();
        tab.string('name').notNullable();
        tab.string('description').notNullable();
        tab.boolean('completed')
    })

    .createTable('resource', tab =>{
        tab.increments('resource_id').unsigned();
        // tab.integer('project_id');
        tab.string('resource_name',128).notNullable();
        tab.string('resource_description').notNullable();
        tab.boolean('resource_completed');
    })
};

exports.down = function(knex) {
  
};
