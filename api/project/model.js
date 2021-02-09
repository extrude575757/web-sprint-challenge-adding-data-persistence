// build your `Project` model here
const db = require('../../data/db-config.js')


 function projDB() {
    return db('projects');
}

module.exports = {
    projDB
}
