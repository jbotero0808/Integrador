import { Request, Response } from "express";
import Comment from "../../models/comment.model";

// Trae todos los comentarios creados por un usuario
export const getUserComments = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const comments = await Comment.find({ idUsuario: id });
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).send("Error al traer los comentarios");
  }
};

// Trae todos los comentarios de unas publicidad
export const getPostComments = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const comments = await Comment.find({ idPost: id });
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).send("Error al traer los comentarios");
  }
};

// Trae todos los comentarios
export const getComments = async (req: Request, res: Response) => {
  try {
    const comments = await Comment.find();
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).send("Error al traer los comentarios");
  }
};

// Crea un comentario
export const createComment = async (req: Request, res: Response) => {
  try {
    const { idUser, idPost, comentario } = req.body;
    const comment = new Comment({ idUser, idPost, comentario });
    await comment.save();
    res.status(201).json(comment);
  } catch (error) {
    res.status(500).send("Error al crear el comentario");
  }
};  

// Trae un comentario
export const getComment = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const comment = await Comment.findById(id);
    res.status(200).json(comment);
  } catch (error) {
    res.status(500).send("Error al obtener el comentario");
  }
};

// Actualiza un comentario
export const updateComment = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { comentario } = req.body;
    const comment = await Comment.findByIdAndUpdate(id, { comentario });
    res.status(200).json(comment);
  } catch (error) {
    return res.status(404).send("El comentario no existe");
  }
};

// Elimina un comentario
export const deleteComment = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await Comment.findByIdAndDelete(id);
    res.status(204).send("Comentario eliminado");
  } catch (error) {
    return res.status(404).send("Comentario no encontrado");
  }
};
