import express, { Request, Response, NextFunction } from "express";
import { getUserByNickname } from "../Api/Cyphers/cypherUser";
import { loadComment, saveComments } from "../controllers/comments";
import { saveUserNickname } from "../controllers/users";

const router = express.Router();
router.get("/:nickname", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userData = await getUserByNickname(req.params.nickname);
    res.json({ ok: true, userData: userData.rows });
  } catch (e) {
    // console.log(e);
  }
});
router.get("/info/:nickname", async (req: Request, res: Response, next: NextFunction) => {
  try {
    saveUserNickname(req.params.nickname);
    res.json({ ok: true });
  } catch (e) {
    console.log(e);
  }
});
router.post("/comments", async (req: Request, res: Response, next: NextFunction) => {
  try {
    saveComments(req.body);
    res.json({ ok: true });
  } catch (e) {
    console.log(e);
  }
});
router.get("/comments/:playerId", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result: any = await loadComment(req.params.playerId);
    const commentList = [];
    result.sort((a: any, b: any) => {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });
    let pageNo = Number(req.query.pageno) - 1;
    let countPerPage = Number(req.query.countperpage);
    let index = countPerPage * pageNo;
    for (let i = index; i < index + countPerPage; i++) {
      if (!result[i]) break;
      commentList.push([result[i].comment, result[i].createdAt]);
    }
    res.json({ ok: true, commentInfo: [result.length, commentList], result });
  } catch (e) {
    console.log(e);
  }
});
export { router };
