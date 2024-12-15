require("dotenv").config({ path: "./config.env" });
var Express = require("express");
var Mongoclient = require("mongodb").MongoClient;
var cors = require("cors");
const multer = require("multer");

var app = Express();

app.use(cors());

var conn_str = process.env.ATLAS_URI

var DATABASE_NAME = "Netlogo_db"
var database;

app.listen(5083,()=>{
    Mongoclient.connect(conn_str,(error,client)=>{
        database=client.db(DATABASE_NAME);
        console.log("Mongo DB Connection Successful");
    })
})

app.get("/api/idea/GetIdeas",(request,response)=>{
    database.collection("Idea").find({}).toArray((error,result)=>{
        response.send(result);
    })
})