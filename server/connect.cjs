// const { MongoClient } = require("mongodb"); 
// require("dotenv").config({ path: "./config.env" });

// async function main() {
//     const dbUri = process.env.ATLAS_URI;
//     // console.log(dbUri)
//     const client = new MongoClient(dbUri); 
//     try {
//         await client.connect();
//         const collections = await client.db("Netlogo_db").listCollections().toArray();
//         collections.forEach(collection => {
//             console.log(collection.name)
            
//         });
//     } catch (e) {
//         console.error("Error connecting to the database:", e);
//     } finally {
//         await client.close();
//     }
// }

// main().catch(console.error);

const mongoose = require('mongoose');
require("dotenv").config({ path: "./config.env" });

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.ATLAS_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1);
  }
};

module.exports = connectDB;
