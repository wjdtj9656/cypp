import apiInstance from "./api";

const api = apiInstance();

const getUserByNickname = async (nickname: string) => {
  const result = await api.get(`/players`, {
    params: {
      nickname: nickname,
      wordType: "full",
      limit: 50,
      apikey: "cgigC93Ycx9CcI6OakihuKr6k8PbxjuQ",
    },

    headers: { "Access-Control-Allow-Origin": "*" },
  });
  return result.data;
};
export { getUserByNickname };
