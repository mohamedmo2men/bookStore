const express = require("express");
const app = express();
const mongoose = require("mongoose");

const userRouter = require("./routers/users")
const bookRouter = require("./routers/book")

const URL = "mongodb+srv://mohamedmo2men:<password>@backend1.fdwqel5.mongodb.net/backend1?retryWrites=true&w=majority";
const bodyParser = require("body-parser");
app.use(bodyParser.json());

const connectDb = async () => {
  try {
    mongoose.set("strictQuery", false);
     mongoose.connect(URL);
    console.log("connected to mongo");
  } catch (err) {
    console.log(err);
    process.exit();
  }
};
connectDb();


app.use("/" , userRouter)



app.use("/" , bookRouter)



app.listen(8080);
