import mongoose, { Date, Schema, Types } from "mongoose";

export type CommentKeys = {
  _id: Types.ObjectId;
  author: {
    name: string;
    isUser: boolean;
    isAdmin: boolean;
  };
  body: string;
  pinned: boolean;
  blogId: Types.ObjectId;
  parentId?: Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
};

const CommentSchema: Schema = new mongoose.Schema(
  {
    author: {
      name: {
        type: String,
        required: true,
      },
      isUser: {
        type: Boolean,
        required: true,
      },
      isAdmin: {
        type: Boolean,
        required: true,
      },
    },
    body: {
      type: String,
      required: true,
    },
    pinned: {
      type: Boolean,
      required: true,
    },
    blogId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    parentId: {
      type: Schema.Types.ObjectId,
      required: false,
    },
  },
  { timestamps: true }
);

const Comment = mongoose.model<CommentKeys>("Comment", CommentSchema);
export default Comment;
