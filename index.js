const express = require("express");
const authMiddleware = require("./middleware/auth");
const route = require("./routes/routes");
const cors = require("cors");
const app = express();
app.use(
  cors({
    origin: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization", "auth"],
  })
);

//for body data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(authMiddleware); //check auth

app.use("/api", route); //all routes (entry point)
app.listen(5000, () => {
  console.log("server is running");
});
