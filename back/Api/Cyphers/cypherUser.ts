import apiInstance from "./api";
const api = apiInstance();
const getUserByNickname = async (nickname: string) => {
  const result = await api.get(`/players`, {
    params: {
      nickname: nickname,
      wordType: "full",
      limit: 20,
      apikey: `${process.env.API_KEY_NEOPLE}`,
    },
  });
  if (!result) throw new Error("유저정보 불러오기 실패");
  return result.data;
};
export { getUserByNickname };
