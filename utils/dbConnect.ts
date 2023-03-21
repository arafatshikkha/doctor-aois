import mongoose from "mongoose";

const dbConnect = () =>{
    mongoose.connect(`${process.env.MONGODB_URI}`)
  .then(()=>{
    console.log("Database connection established");
  }).catch((error)=>{
    console.log(error)
  })
}

export default dbConnect;