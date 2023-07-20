

import  express  from "express";
import connectDB from "./db/connectdb.js"
const app=express()
const port = '3000'
import web from './routes/web.js'
const DATABASE_URL="mongodb://127.0.0.1:27017";

//database connection
connectDB(DATABASE_URL);
app.use(express.json())
app.use("/crud",web)

app.listen(port,()=>{
    console.log(`server listening at http://localhost:${port}`);
}) 

