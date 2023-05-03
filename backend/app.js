const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const cors = require("cors");
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use("/books",router)

mongoose
  .connect(
    "mongodb+srv://shifananazrin15:5NjQNxORngDV4QYt@cluster0.m9citru.mongodb.net/test"
  )
  .then(() => {
    app.listen(5000, ()=>{
      console.log("Server started on port 5000 Database Connected");
    });
  })
  .catch((err) => console.log(err));