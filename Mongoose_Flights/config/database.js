const mongoose = require ('mongoose')
const DB = process.env.MONGO_URI 

const connectDB = async () => {
  try {
    await mongoose.connect(DB, {useNewUrlParser: true})
    console.log('Datbase connected')
  }
    catch(err){
      console.log(err)
    }
}

module.exports = connectDB; 