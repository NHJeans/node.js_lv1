// routes/posts.router.js
import express from "express";
import { Posts } from "../schemas/posts.schemas.js";

const router = express.Router();

// 게시글 생성
router.post("/", async (req, res) => {
  try {
    const { user, password, title, content } = req.body;
    await Posts.create({ user, password, title, content });
    return res.status(200).json({ message: "게시글을 생성하였습니다." });
  } catch {
    return res
      .status(400)
      .json({ message: "데이터 형식이 올바르지 않습니다." });
  }
});

// 게시글 조회
router.get("/", async (req, res) => {
  try {
    // Posts 컬렉션에서 password와 content 필드를 제외하고 모든 문서를 조회
    const post = await Posts.find({}, { password: 0, content: 0 });
    const postPrint = post.map((value) => {
      return {
        postId: value._id,
        user: value.user,
        title: value.title,
        createdAt: value.createdAt,
      };
    });
    res.json({ data: postPrint });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "서버로 인한 오류발생" });
  }
});

// 게시글 상세조회
router.get("/:_postId", async (req, res) => {
  try {
    const { _postId } = req.params;
    const post = await Posts.findOne({ _id: _postId }, { password: 0, __v: 0 });
    const postPrint = {
      postId: post._id,
      user: post.user,
      title: post.title,
      content: post.content,
      createdAt: post.createdAt,
    };
    res.json({ data: postPrint });
  } catch (err) {
    console.error(err);
    res.status(400).send({ message: "데이터 형식이 올바르지 않습니다." });
  }
});

// 게시글 수정
router.put("/:_postId", async (req, res) => {
  try {
    const { _postId } = req.params;
    const { password, title, content } = req.body;
    const [post] = await Posts.find({ _id: _postId });
    if (!post) {
      return res.status(404).json({ message: "게시글 조회에 실패하였습니다." });
    }
    if (password === post.password) {
      await Posts.updateOne(
        { _id: _postId },
        { $set: { title: title, content: content } }
      );
      return res.status(200).json({ message: "게시글을 수정하였습니다." });
    } else {
      console.error("비밀번호가 다릅니다.");
      return res.status(405).json({ message: "비밀번호가 다릅니다." });
    }
  } catch (err) {
    console.error(err);
    res.status(400).send({ message: "데이터 형식이 올바르지 않습니다." });
  }
});

// 게시글 삭제
router.delete("/:_postId", async (req, res) => {
  try {
    const { _postId } = req.params;
    const { password } = req.body;
    const [post] = await Posts.find({ _id: _postId }).exec();
    if (!post) {
      return res.status(404).json({ message: "게시글 조회에 실패하였습니다." });
    }

    if (password === post.password) {
      await Posts.deleteOne({ _id: _postId }).exec();
      return res.status(200).json({ message: "게시글을 삭제하였습니다." });
    } else {
      return res.status(404).json({ message: "비밀번호가 다릅니다." });
    }
  } catch (err) {
    console.error(err);
    res.status(400).send({ message: "데이터 형식이 올바르지 않습니다." });
  }
});

export default router;
