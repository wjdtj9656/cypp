import apiInstance from "../api";

const api = apiInstance();

const getUserByNickname = async (nickname: string) => {
  const result = await api.get(`/user/${nickname}`);
  if (result.status !== 200) throw new Error("user info load failed");
  return result.data;
};
const setUserInfo = async (nickname: string) => {
  const result = await api.get(`/user/info/${nickname}`);
  console.log(result);
  return result.data;
};
export { getUserByNickname, setUserInfo };
