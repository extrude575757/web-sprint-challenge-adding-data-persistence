
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resource').del()
    .then(function () {
      // Inserts seed entries
      return knex('resource').insert([
        {resource_id: 1, resource_name:'saccc 2',
         resource_description: 'rowValue3',
         resource_completed: true
          }, 
          {resource_id: 2, resource_name:'df 2',
         resource_description: 'rowValue3',
         resource_completed: true
          }, 
          {resource_id: 3, resource_name:'wfd2',
         resource_description: 'rowValue3',
         resource_completed: true
          }, 
          {resource_id: 4, resource_name:'dfae22 2',
         resource_description: 'rowValue3',
         resource_completed: true
          }
      ]);
    });
};
