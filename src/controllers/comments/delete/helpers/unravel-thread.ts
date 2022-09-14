import { Types } from "mongoose";
import Comment from "../../../../models/comment";

const unravelCommentThread = async (startId: Types.ObjectId) => {
  return await Comment.aggregate([
    {
      $graphLookup: {
        from: "comments",
        startWith: "$parentId",
        connectFromField: "parentId",
        connectToField: "_id",
        as: "thread",
      },
    },
    {
      $match: {
        $or: [
          {
            _id: startId,
          },
          { "thread._id": startId },
        ],
      },
    },
  ]);
};

export default unravelCommentThread;
