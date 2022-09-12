import express, { Express } from "express";
import cookieParser from "cookie-parser";
import connectToMongoDb from "./utility/mongo-db/connect-to-mongo-db";
import authRouter from "./routes/auth-routes";

import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 3001;
const app: Express = express();

// Middleware to parse POST/PUT requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware to parse cookies
app.use(cookieParser());

// Set up the routes
app.use(authRouter);

// Establish connection to database
connectToMongoDb();

// Begin listening
app.listen(PORT);
