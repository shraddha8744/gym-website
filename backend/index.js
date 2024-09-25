const express=require("express")
require("dotenv").config()
const app=express();
app.use(express.json());
const connection=require("./database/config")
const port=process.env.PORT
connection()
const authRouter=require("./routes/authRoute")
const cors=require("cors")
app.use(cors())


app.use("/api",authRouter)

app.listen(port,()=>{
    console.log("server started",port);
})

//mongodb+srv://<username>:<password>@cluster0.dg3gosr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0