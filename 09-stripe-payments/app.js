require("dotenv").config();
require("express-async-errors");

const express = require("express");
const app = express();

const stripeController = require('./controllers/stripeCon')

const notFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

const port = process.env.PORT || 5000;

app.use(express.json());

app.use(express.static("./public"));
app.get("/", (req, res) => {
  res.send(`<h1>Stripe Payments Starter</h1>`);
});
app.post("/stripe", stripeController);

app.use(notFound);
app.use(errorHandlerMiddleware);

const start = async () => {
  try {
    app.listen(port, console.log(`listening @ ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
