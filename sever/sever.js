import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import colors from 'colors';
import connectDatabase from './config/db.js';
import authRoute from "./routes/authRoute.js";
import {errorHandler} from './middlewares/errorHandler.js'

//App
const app = express();

dotenv.config();

//Cors
app.use(cors());

//Body Parser
// app.use(express.json());
app.use(bodyParser.json());

//Connect DB
connectDatabase();

//Route
app.use('/api/v1/auth', authRoute);

//errorHandler
app.use(errorHandler);

//Port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });