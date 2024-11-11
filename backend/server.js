const express = require("express");
const {MongoClient} = require("mongodb");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());

const uri = 'mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.3.3';
const dbName = "feedbackdb";
let db;

MongoClient.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(client => {
    console.log("connected");
    db = client.db(dbName);
  })
  .catch(error => {
    console.error("Error: ", error);
  })

app.post("/api/feedback", async (req, res) => {
  const {name, email, message} = req.body;

  if(!name || !email || !message){
    return res.status(400).json({ message: 'All fields are required' });
  }

  try{
    const feedbackCollection = db.collection("feedbacks");
    await feedbackCollection.insertOne({name, email, message});

    res.status(200).json({message: "Feedback Recieved"});
  } catch(error){
    console.error("Error Saving feedback: ", error);
    res.status(500).json({message: "Failed To save feedback"});
  }
})

app.listen(PORT, ()=> {
  console.log(`Server running on ${PORT}`);
})
