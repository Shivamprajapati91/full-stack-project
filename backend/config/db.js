const mongoose = require('mongoose')

async function connectDb() {
    try{
         mongoose.connect(process.env.MONGODB_URI)
         console.log("connected to db")
    }catch(err){
        console.log(err)
    }
    
}

module.exports = connectDb