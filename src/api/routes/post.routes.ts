import express from "express";
import {
  createPost,
  deletePost,
  getPosts,
  getPost,
  updatePost,
} from "../controllers/post.controller";
import { verifyJWT } from "../controllers/auth.controller";

const router = express.Router();

router.get("/", verifyJWT, getPosts);
router.post("/", verifyJWT, createPost);
router.get("/:id", verifyJWT, getPost);
router.put("/:id", verifyJWT, updatePost);
router.delete("/:id", verifyJWT, deletePost);

export default router;
