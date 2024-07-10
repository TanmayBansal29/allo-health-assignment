const express = require("express")
const app = express();
require("dotenv").config();
var cors = require("cors");

const path = require("path");

app.use(express.static(path.join(__dirname, "dist")));

app.use(cors({origin: "*",}));

const PORT = process.env.PORT || 3002;
app.use(express.json());

require("./config/database").connect();

const resData = require("./routes/resData");
const authData = require("./routes/authData");
app.use("/api/v1", resData)
app.use("/api/v1", authData)

app.listen(PORT, () => {
    console.log(`Server Started at PORT: ${PORT}`)
})