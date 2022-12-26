import apiInstance from "../api";

const api = apiInstance();

const getUserByNickname = async (nickname: string) => {
  try {
    if (!nickname) throw new Error("empty nickname");
    const result = await api.get(`/user/${nickname}`);
    return result.data.userData;
  } catch (e) {
    console.log(e, nickname);
  }
};
const setUserInfo = async (nickname: string) => {
  try {
    await api.get(`/user/info/${nickname}`);
  } catch (e) {
    console.log(e);
  }
};
export { getUserByNickname, setUserInfo };
