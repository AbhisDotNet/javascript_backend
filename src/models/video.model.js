import mongoose, { Schema } from "mongoose"

const videoSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
      index: true,
      trim: true,
    },
    videoFile: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
    },
    title: {
      type: String,
      required: true,
    },
    watchhistory: [{ type: mongoose.Schema.ObjectId, fef: "User" }],
  },
  { timestamps: true }
)
export const Video = mongoose.model("videoSchema", videoSchema)
