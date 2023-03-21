import dotenv from "dotenv";
import app from "./app";
import dbConnect from "./utils/dbConnect";


dotenv.config()


// database connection
dbConnect();



// server
const PORT: number | string = process.env.PORT ||8080;



app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
  });