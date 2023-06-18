import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import colors from 'colors';
import cookieParser from "cookie-parser";
import connectDatabase from './config/db.js';
import userRoute from "./routes/userRoute.js";
import blogRoute from "./routes/blogRoute.js";
import uploadRoute from "./routes/uploadRoute.js"
import productCategoryRoute from "./routes/productCategoryRoute.js"
import errorHandler from './middlewares/errorHandler.js'
import blogCategoryRouter from"./routes/blogCategoryRoute.js";

//App
const app = express();

dotenv.config();

//Cors
app.use(cors());

//Body Parser
// app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

//Connect DB
connectDatabase();

//Route
app.use('/api/v1/user', userRoute);
app.use('/api/v1/upload', uploadRoute);
app.use('/api/v1/blog', blogRoute);
app.use("/api/v1/blogcategory", blogCategoryRouter);
app.use("/api/v1/productcategory", productCategoryRoute);

//errorHandler
app.use(errorHandler);

//Port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });