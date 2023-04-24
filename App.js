const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const connect = require("./database/connect")
const cors = require("cors")
const createtask = require("./routes/create")
const deletetask = require("./routes/delete")
const searchtask = require("./routes/search")
const updatetask = require("./routes/update")

const app = express();
dotenv.config()

app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use(cors());
app.use("/",createtask)
app.use("/",deletetask)
app.use("/",searchtask)
app.use("/",updatetask)

app.listen(process.env.PORT, async()=>{
    connect()
    console.log("port is connected at 4000")
})