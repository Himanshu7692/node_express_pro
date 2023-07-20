
import  express  from "express";
import connectDB from "./db/connectdb.js"
import {join} from 'path'
import web from './routes/web.js'
const app=express()
const port = '3000'
const DATABASE_URL="mongodb://127.0.0.1:27017";


//database connection
connectDB(DATABASE_URL);
app.use(express.urlencoded({extended:false}))


app.use('/student',express.static(join(process.cwd(),"public")))
app.use('/student/edit',express.static(join(process.cwd(),"public")))
app.set("view engine","ejs")

app.use("/student",web)
app.listen(port,()=>{
    console.log(`server listening at http://localhost:${port}`);
}) 

//run ke baad url 
// http://localhost:3000/student