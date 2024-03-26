import mongoose from "mongoose";

const likeSchema = new mongoose.Schema(
  {
    likeId: { type: String, required: true },
    postId: { type: mongoose.Schema.Types.ObjectId, ref: 'Posts', required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'Users', required: true },
  },
  {
    timestamps: true,
  }
);

var LikeModel = mongoose.model("Likes", likeSchema);
export default LikeModel;
