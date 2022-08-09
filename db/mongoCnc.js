const mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost:27017/test');
//const db = mongoose.connection;
/*db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', ()=> {
    console.log("mongo conected")
  // we're connected!
});*/
const connectDb=async ()=> {
    try{
  await mongoose.connect('mongodb://localhost:27017/recepie');
  console.log("connected")
    }
  catch(err){
    console.log(err)
    console.log("mi")
  }
}

module.exports=connectDb
