import express from "express";
import cors from "cors";
import { readdirSync } from "fs";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import csrf from "csurf";

const morgan = require("morgan");
require("dotenv").config({ path: "./config.env" });

const csrfProtection = csrf({ cookie: true });

//db
const connectDb = require("./connectDb");
connectDb();

// create express app
const app = express();

// apply middlewares
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));
app.use((req, res, next) => {
    console.log("this is my own middleware");
    next();
});

// route
readdirSync("./routes").map(
    (r) => app.use("/api", 
        require(`./routes/${r}`)
    )
);

// csrf
app.use(csrfProtection);

app.get("/api/csrf-token", (req, res) => {
  res.json({ csrfToken: req.csrfToken() });
});

// port
const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
