import mongoose, { Date, Schema, Types } from "mongoose";

export type BlogKeys = {
  _id: Types.ObjectId;
  title: string;
  path: string;
  body: string;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
};

const BlogSchema: Schema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  path: {
    type: String,
    required: true,
    unique: true,
  },
  body: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    required: true,
  }
}, { timestamps: true });

const Blog = mongoose.model<BlogKeys>("Blog", BlogSchema);
export default Blog;
