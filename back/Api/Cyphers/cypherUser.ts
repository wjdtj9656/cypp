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

    headers: { "Access-Control-Allow-Origin": "*" },
  });
  return result.data;
};
export { getUserByNickname };
