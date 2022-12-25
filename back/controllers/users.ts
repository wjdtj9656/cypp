import express, { Request, Response, NextFunction } from "express";
import { getUserByNickname } from "../Api/Cyphers/cypherUser";
import { User } from "../models/user";
const saveUserNickname = async (nickname: string) => {
  const userData = await getUserByNickname(nickname);
  if (!userData) throw new Error("유저 정보 불러오기 실패");
  const userInfo = userData.rows[0];
  User.upsert({ playerId: userInfo.playerId, nickname: userInfo.nickname });
};
export { saveUserNickname };
