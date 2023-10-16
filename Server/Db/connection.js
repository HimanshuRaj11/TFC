const mongoose = require('mongoose')

mongoose.connect(`${process.env.MONGO_URI}/TFC`).then(()=>{
    console.log(`Connection successful`);
}).catch((e)=>{
    console.log('error to connect'+e);
})