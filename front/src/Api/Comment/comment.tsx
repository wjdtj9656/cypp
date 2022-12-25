import apiInstance from "../api";

const api = apiInstance();

const saveComment = async (playerId: string, comment: string) => {
  await api.post(`/user/comments`, {
    playerId: playerId,
    comment: comment,
  });
  return;
};
const loadComments = async (playerId: string, pageNo: Number) => {
  const result = await api.get(`/user/comments/${playerId}?countperpage=5&pageno=${pageNo}`);
  return result.data;
};
export { saveComment, loadComments };
