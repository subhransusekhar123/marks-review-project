require("dotenv").config();
const express = require('express');
const dbConnect=require("./db");
const cors = require("cors");
const userRouter = require("./Router.js/userRouter");
const topicRouter = require("./Router.js/topicRouter");

const app = express()

app.use(express.json());
app.use(cors());

app.use("/auth",userRouter);
app.use("/topic",topicRouter);

app.get('/', function (req, res) {
  res.send('Hello World')
})

dbConnect(process.env.mongoURL)
.then(()=>{
    app.listen(4000,()=>{
        console.log(`live on ${4000}`)
    })
})
.catch((err)=>{
    console.log("err connecting ")
})

