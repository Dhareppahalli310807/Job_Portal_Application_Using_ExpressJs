// import required model
import express, { urlencoded } from "express";
import jobRouter from './src/routes/job.route.js';
import userRouter from './src/routes/user.route.js'
import expressEjsLayouts from 'express-ejs-layouts';
import path from 'path';
import session from "express-session";
import cookieParser from "cookie-parser";

// Creating Express Server:
const server = express();

// Cookie Parser
server.use(cookieParser())

// Configuring data movements:
server.use(express.json());
server.use(express.static(path.resolve("src", "public")));
server.use(urlencoded({ extended: true }));

// Setting Ejs Layouts:
server.use(expressEjsLayouts);
server.set("view engine", "ejs");
server.set("views", path.resolve("src", "views"));
server.set("layout", path.resolve("src", "views", "layoutPage"));

// Express session setup:
server.use(
  session({
  secret: 'SecretKey',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false },
})
);

server.use(jobRouter);
server.use(userRouter);

// create a server
server.listen(9090, () => {
  console.log(`Server is running on port 9090`);
});
