import { Comment } from "../models/comment";

const saveComments = async (userInfo: any) => {
  if (!userInfo.playerId) throw new Error("playerId가 비었습니다.");
  if (!userInfo.comment) throw new Error("comment가 비었습니다.");
  Comment.create({ playerId: userInfo.playerId, comment: userInfo.comment });
};
export { saveComments };
