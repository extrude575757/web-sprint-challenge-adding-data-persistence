
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('actions').del()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {id: 3, project_id: 2, description: 'rowValue3',
         notes:'prck',completed: true
          },
          {id: 3, project_id: 2, description: 'rowValue3',
          notes:'prck',completed: true
           },
           {id: 3, project_id: 2, description: 'rowValue3',
         notes:'prck',completed: false
          },
          {id: 3, project_id: 2, description: 'rowValue3',
         notes:'prck',completed: true
          },
          {id: 3, project_id: 2, description: 'rowValue3',
         notes:'prck',completed: true
          },
      ]);
    });
};
