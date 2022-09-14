import findAllComments from "./get/find-all";
import findComment from "./get/find-comment";
import { createAdminComment, createUserComment, createOrdinaryComment } from "./post";
import updateComment from "./put";
import deleteComment from "./delete";

const CommentControllers = {
  findAllComments,
  findComment,
  createAdminComment,
  createUserComment,
  createOrdinaryComment,
  updateComment,
  deleteComment,
};

export default CommentControllers;