require("dotenv").config({ path: "./config.env" });
var Express = require("express");
var Mongoclient = require("mongodb").MongoClient;
var cors = require("cors");
const multer = require("multer");

var app = Express();

app.use(cors());

var conn_str = process.env.ATLAS_URI;

var DATABASE_NAME = "Netlogo_db";
var database;

Mongoclient.connect(conn_str, (error, client) => {
    if (error) {
        console.error("MongoDB Connection Failed:", error);
        return;
    }
    database = client.db(DATABASE_NAME);
    console.log("Mongo DB Connection Successful");

    // Start the server only after MongoDB connection is established
    app.listen(5083, () => {
        console.log("Server is running on port 5083");
    });
});

// Routes
app.get("/api/idea/GetIdeas", (request, response) => {
    database.collection("Idea").find({}).toArray((error, result) => {
        if (error) {
            response.status(500).send("Error fetching ideas");
        } else {
            response.send(result);
        }
    });
});

app.post("/api/idea/AddIdea", multer().none(), (request, response) => {
    database.collection("Idea").insertOne({
        title: request.body.ideaTitle,
        description: request.body.ideaDesc,
        author: request.body.authName
    }, (error, result) => {
        if (error) {
            response.status(500).send("Error adding idea");
        } else {
            response.json("Added Successfully");
        }
    });
});

app.delete("/api/idea/DeleteIdea", (request, response) => {
    database.collection("Idea").deleteOne({
        _id: request.query._id
    }, (error, result) => {
        if (error) {
            response.status(500).send("Error deleting idea");
        } else {
            response.json("Deleted Successfully");
        }
    });
});
