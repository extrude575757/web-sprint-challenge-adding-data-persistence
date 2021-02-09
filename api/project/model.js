// build your `Project` model here
const db = require('../../data/db-config.js')

module.exports = {
    projDB
}

async function projDB() {
    return db('projects').limit(4);
}