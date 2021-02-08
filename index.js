// start your server here
const server = require('./api/server.js');
const PORT = process.env.PORT || 8210;
server.listen(PORT, () =>{
    console.log(`Listening on port ${PORT}`);
})