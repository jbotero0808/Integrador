import express from "express";
import {
  createComment,
  deleteComment,
  getComment,
  getComments,
  updateComment,
  getUserComments,
  getPostComments
} from "../controllers/comment.controller";
import { verifyJWT } from "../controllers/auth.controller";

const router = express.Router();

router.get("/", verifyJWT, getComments);
router.post("/", verifyJWT, createComment);
router.get("/:id", verifyJWT, getComment);
router.put("/:id", verifyJWT, updateComment);
router.delete("/:id", verifyJWT, deleteComment);
router.get("/user/:id", verifyJWT, getUserComments);
router.get("/post/:id", verifyJWT, getPostComments);

export default router;