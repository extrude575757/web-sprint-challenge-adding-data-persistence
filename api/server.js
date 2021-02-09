// build your server here
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');


const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());
const ProjRouter  = require('./project/router')
server.use('/api/projects', ProjRouter)

server.get('/', async(req, res) => {
    const nameInsert = (req.id) ? ` ${req.id}` : '';
  
    res.send(`
      <h2>Actions ${nameInsert} </h2>
      <p>Welcome to ${req.headers['projects']} in a project </p>
    `);
  });
  



// server.get('/api/animals', (req, res) => {
//   // get all animals from the database
//   // include species name
//   db('animals as a')
//     .leftJoin('species as s', 's.id', 'a.species_id')
//     .select('a.id', 'a.animal_name', 's.species_name')
//     .then(animals => {
//       res.status(200).json(animals);
//     })
//     .catch(error => {
//       res.status(500).json(error);
//     });
// });

// // create animal
// server.post('/api/animals', (req, res) => {
//   db('animals').insert(req.body)
//     .then(ids => {
//       const id = ids[0];

//       db('animals')
//         .where({ id })
//         .first()
//         .then(animal => {
//           res.status(201).json(animal);
//         });
//     })
//     .catch(error => {
//       res.status(500).json(error);
//     });
// });

// // remove species
// server.delete('/api/species/:id', (req, res) => {
//   db('species')
//     .where({ id: req.params.id })
//     .del()
//     .then(count => {
//       if (count > 0) {
//         res.status(204).end();
//       } else {
//         res.status(404).json({ message: 'Record not found' });
//       }
//     })
//     .catch(error => {
//       res.status(500).json(error);
//     });
// });

module.exports = server;
