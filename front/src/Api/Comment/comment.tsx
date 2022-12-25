import apiInstance from "../api";

const api = apiInstance();

const saveComment = async (playerId: string, comment: string) => {
  await api.post(`/user/comments`, {
    playerId: playerId,
    comment: comment,
  });
};
export { saveComment };
