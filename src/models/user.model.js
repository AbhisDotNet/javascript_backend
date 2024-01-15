import mongoose, { Schema } from "mongoose"

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
      index: true,
      trim: true,
    },
    fullname: {
      type: String,
      required: true,
      lowercase: true,
      index: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    avatar: {
      type: String,
      required: true,
      lowercase: true,
    },
    coverimage: {
      type: String,
      required: true,
      lowercase: true,
    },
    refreshtoken: {
      type: String,
    },

    watchhistory: [{ type: mongoose.Schema.ObjectId, fef: "Video" }],

    password: {
      type: String,
      required: [true, "password is required"],
    },
  },
  { timestamps: true }
)

export const User = mongoose.model("User", userSchema)
