
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, name: 'rowValue1',description:'prck'
          ,completed: true
      },
        {id: 2, name: 'rowValue2',description:'prck'
        ,completed: true
      },
        {id: 3, name: 'rowValue3', description:'prck'
        ,completed: true
      },
      {id: 4, name: 'rowValue36', description:'prck'
      ,completed: false
    }
      ]);
    });
};
