import mongoose from "mongoose";

const connectDatabase = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URL);
    console.log("Mongo DB Connected: ", connection.connection.host);
  } catch (error) {
    console.log("Error in Mongodb:" ,error);
    process.exit(1)
  }
};

export default connectDatabase;
