// build your `/api/projects` router here
const express = require("express");

// const db = require("../../data/db-config.js");
// const User = require('./user-model.js');
// const UsersPo = require('./userPost-model')
const model = require('./model')
const router = express.Router();
const { checkNew } = require('../middleware/index.js')
/* 
  - [ ] `[POST] /api/projects`
    - Even though `project_completed` is stored as an integer, the API uses booleans when interacting with the client
    - Example of response body: `{"project_id":1,"project_name":"bar","project_description":null,"project_completed":false}`

  - [ ] `[GET] /api/projects`
    - Even though `project_completed` is stored as an integer, the API uses booleans when interacting with the client
    - Example of response body: `[{"project_id":1,"project_name":"bar","project_description":null,"project_completed":false}]`
*/

router.get('/',  (req, res,next) => {


    // get all projectss
    model.projDB('/', checkNew , (req,res,next) )
        .then( a =>{
            console.log(req.body,a);
            // res.status(200).json(a);
            next();
        })
        .catch( e =>{
            next();
            console.log(e);
        })

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

router.use((error, req, res, next) => {
    res.status(500).json({
      info: 'something horrible happened inside the projects router 500',
      message: error.message,
      stack: error.stack,
    })
  })

module.exports = router;