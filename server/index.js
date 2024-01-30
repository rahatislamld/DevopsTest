const express = require("express");
const mongoose = require("mongoose");
const app = express();
const router = require("./routes/router");

const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(router);

const mongodbUrl = "mongodb+srv://raisul:raisul123@cluster0.ini6mbm.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(mongodbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Database Connected Successfully");
    app.listen(5000, () => {
      console.log("Server is running on port 5000");
    });
  })
  .catch((err) => {
    console.error("Error connecting to the database:", err);
  });
