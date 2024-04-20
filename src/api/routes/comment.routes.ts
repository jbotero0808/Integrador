import express from "express";
import {
  createComment,
  deleteComment,
  getComment,
  getComments,
  updateComment,
} from "../controllers/comment.controller";
import { verifyJWT } from "../controllers/auth.controller";

const router = express.Router();

router.get("/", verifyJWT, getComments);
router.post("/", verifyJWT, createComment);
router.get("/:id", verifyJWT, getComment);
router.put("/:id", verifyJWT, updateComment);
router.delete("/:id", verifyJWT, deleteComment);

export default router;