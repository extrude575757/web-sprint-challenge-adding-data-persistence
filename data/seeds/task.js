
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('task').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('task').insert([
        {task_id: 1, task_description: 'rowValue1',
        task_notes: 'Notes here',task_completed: false,
        project_id: 1
      },
      {task_id: 2, task_description: 'rowValue1',
        task_notes: 'Notes here',task_completed: false,
        project_id: 2
      },
      {task_id: 3, task_description: 'rowValue1',
        task_notes: 'Notes here',task_completed: false,
        project_id: 4
      },
      {task_id: 4, task_description: 'rowValue1',
        task_notes: 'Notes here',task_completed: false,
        project_id: 3
      },
       
      ]);
    });
};
