// build your `/api/projects` router here
const express = require("express");

// const db = require("../../data/db-config.js");
// const User = require('./user-model.js');
// const UsersPo = require('./userPost-model')
const model = require('./model')
const router = express.Router();

/* 
  - [ ] `[POST] /api/projects`
    - Even though `project_completed` is stored as an integer, the API uses booleans when interacting with the client
    - Example of response body: `{"project_id":1,"project_name":"bar","project_description":null,"project_completed":false}`

  - [ ] `[GET] /api/projects`
    - Even though `project_completed` is stored as an integer, the API uses booleans when interacting with the client
    - Example of response body: `[{"project_id":1,"project_name":"bar","project_description":null,"project_completed":false}]`
*/

router.get('/', async (req, res) => {


    // get all projectss
    try{
            const proj = await model.projDB();
           if(proj === undefined){
            res.status(404).json({
                message: 'Failed 404 get /api/projects'
            })
           }else{
            res.status(200).json(proj);
           }
    }
      catch(error) {
        res.status(500).json({
            message: 'failed 500 api/proj ',
            error});
      
}


});
// server.get('/api/projects', (req, res) => {
//     // get all projectss
//     db('projects')
//       .then(p => {
//         res.status(200).json(p);
//       })
//       .catch(error => {
//         res.status(500).json(error);
//       });
//   })

// router.use((error, req, res, next) => {
//     res.status(500).json({
//       info: 'something horrible happened inside the actions router',
//       message: error.message,
//       stack: error.stack,
//     })
//   })

module.exports = router;