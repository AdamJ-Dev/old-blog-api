import { Types } from "mongoose";
import Comment, { CommentKeys } from "../../../../models/comment";

const deleteCommentById = async (id: Types.ObjectId) => {
  await Comment.findByIdAndDelete(id);
};

export const getPromisesToDeleteComments = (comments: CommentKeys[]) => {
  return comments.map((comment) => deleteCommentById(comment._id));
};
