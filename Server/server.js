require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const corsOptions = {
  origin: process.env.CLIENT_URL,
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  credentials: true,
};

require("./Db/connection")


app.use(cors(corsOptions));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get("/", (req, res) => {
  res.send("Server is Running...");
});

// ---------Routers-------

const CategoryRouter = require("./Routes/Category.route")
app.use("/category/", CategoryRouter)

const DishesRouter = require("./Routes/Dishes.route");
app.use("/dish", DishesRouter)



// -----------Server Listining---------
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is Running on port: ${port}`);
});
