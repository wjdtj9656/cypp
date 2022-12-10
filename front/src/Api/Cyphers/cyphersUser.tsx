import apiInstance from "./api";

const api = apiInstance();

const getUserByNickname = async (nickname: string) => {
  const result = await api.get(`/user/${nickname}`);
  console.log(result.data);
  return result.data;
};
export { getUserByNickname };
