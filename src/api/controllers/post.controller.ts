import { Request, Response } from "express";
import Post from "../../models/post.model";

export const getPosts = async (req: Request, res: Response) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).send("Error al traer las publicaciones");
  }
};

export const createPost = async (req: Request, res: Response) => {
  try {
    const { idUser, title, content, image } = req.body;
    const post = new Post({ idUser, title, content, image });
    await post.save();
    res.status(201).json(post);
  } catch (error) {
    res.status(500).send("Error al crear la publicacion");
  }
};  

export const getPost = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const post = await Post.findById(id);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).send("Error al obtener la publicidad");
  }
};

export const updatePost = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { title, content, image } = req.body;
    const post = await Post.findByIdAndUpdate(id, { title, content, image });
    res.status(200).json(post);
  } catch (error) {
    return res.status(404).send("Publicidad no encontrada");
  }
};

export const deletePost = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await Post.findByIdAndDelete(id);
    res.status(204).send("Publicación eliminada");
  } catch (error) {
    return res.status(404).send("Publicidad no encontrada");
  }
};
