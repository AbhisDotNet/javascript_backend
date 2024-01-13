import mongoose from "mongoose"
import { DB_NAME } from "../constants.js"

const connectDB = async function () {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    )
    console.log(`\n MONGODB connected !! DB HOST: ${process.env.PORT}`)
    //console.log(`${connectionInstance.connect.host}`) not working
  } catch (error) {
    console.log("MONGODB connection error", error)
    process.exit(1)
  }
}

export default connectDB
