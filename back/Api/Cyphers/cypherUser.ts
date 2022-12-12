import apiInstance from "./api";
const api = apiInstance();
const getUserByNickname = async (nickname: string) => {
  const result = await api.get(`/players`, {
    params: {
      nickname: nickname,
      wordType: "full",
      limit: 50,
      // apikey: "cgigC93Ycx9CcI6OakihuKr6k8PbxjuQ",
      apikey: `${process.env.API_KEY_NEOPLE}`,
    },

    headers: { "Access-Control-Allow-Origin": "*" },
  });
  return result.data;
};
export { getUserByNickname };
