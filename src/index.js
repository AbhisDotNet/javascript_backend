import connectDB from "./db/index.js"
import dotenv from "dotenv"

dotenv.config({
  path: "./env",
})

connectDB()

//non used approach to connect database
/*import express from "express";
const app = Express()(
  // DB CONNECTION USING MONGODB STARTS WITH A IIFE
  async () => {
    try {
      await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
      // THIS IS A EXPRESS FEATURE TO HANDEL ERROR
      app.on("error", (error) => {
        console.log("ERROE", error);
        throw error;
      });

      app.listen(process.env.PORT, () => {
        console.log(`App is listening at port ${process.env.PORT}`);
      });
    } catch (error) {
      console.error("ERROR", error);
      throw err;
    }
  }
)();*/
