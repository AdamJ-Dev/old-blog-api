import mongoose from "mongoose";
import dotenv from "dotenv";
import { CONNECTED_TO_DB } from "../../constants/success";

dotenv.config();

const DB_URI = process.env.MONGO_URI!;

const logConnectionSuccess = () => {
  console.log(CONNECTED_TO_DB);
};

const logConnectionError = (error: unknown) => {
  console.log(error);
};

const connectToMongoDb = () => {
  mongoose.connect(DB_URI).then(logConnectionSuccess).catch(logConnectionError);
};

export default connectToMongoDb;
