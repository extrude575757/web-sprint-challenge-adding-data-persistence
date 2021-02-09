
/*
A **resource assignment** connects a resource and a project, and is stored in a `
project_resources` table. You decide what columns to use.

*/

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
        tab.string('resource_name',128).notNullable().unique();
        tab.string('resource_description');
        tab.boolean('resource_completed');
    })
    .createTable('task', tab =>{
        tab.increments('task_id').unsigned();
        tab.string('task_description').notNullable();
        tab.string('task_notes')
        tab.boolean('task_completed');
        tab.integer('project_id').notNullable()
            .references('id').inTable('projects')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
    })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('resource')
        .dropTableIfExists('task')
        .dropTableIfExists('projects')
};
