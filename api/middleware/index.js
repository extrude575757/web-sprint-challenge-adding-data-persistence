
const pMod = require('../project/model.js');

function checkNew(req, res, next) {
    console.log('middleware checking new ',req,res)
    // res.set('actions', 'true')
  // check that req body has correct shape
  // if req.body legit, proceed
  // otherwise send back a 400 error
  const  projectdb  = pMod.projDB();
  try{
    if (projectdb) {
        next();
      } else {
        res.status(400).json({
 error: "please provide actionname 400 midware checkNew "
            ,projectdb
         });
      }
  } catch(er){
      res.status(500).json({
          
        message:"missing checknew 500 midwar"
        ,er
    })
  }
}

module.exports = {checkNew}