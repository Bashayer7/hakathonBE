//                    importation

const express = require("express");
// const cors = require("cors");
// const path = require("path");
// const passport = require("passport");
// const morgan = require("morgan");
// const logger = require("./middleware/logger");
// const errorHandler = require("./middleware/errorHandler");
//                   DB
const connectDB = require("./db/database");

const app = express();
app.use(express.json());

//handling error
app.use((req, res, next) => {
  res.status(404).json({ message: "Path not found" });
});

connectDB(); //connect to the database
const PORT = 8000; //connection to a host
app.listen(PORT, () => console.log(`Application running on localhost:${PORT}`));
