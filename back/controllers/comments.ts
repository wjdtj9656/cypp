import { Comment } from "../models/comment";

const saveComments = async (userInfo: any) => {
  if (!userInfo.playerId) throw new Error("playerId가 비었습니다.");
  if (!userInfo.comment) throw new Error("comment가 비었습니다.");
  Comment.create({ playerId: userInfo.playerId, comment: userInfo.comment });
};
const loadComment = async (playerId: string) => {
  if (!playerId) throw new Error("닉네임이 비었습니다.");
  const commentList = await Comment.findAll({
    where: {
      playerId: playerId,
    },
  });
  return commentList;
};
export { saveComments, loadComment };
