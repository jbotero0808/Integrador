import mongoose, { Schema, Document } from "mongoose";

interface IComment extends Document {
    idPost: string;
    comentario: string;
    idUser: string;
}

const commentSchema = new Schema<IComment>({
    idPost: { type: String, required: true },
    comentario: { type: String, required: true },
    idUser: { type: String, required: true }
});

export default mongoose.model<IComment>("Comment", commentSchema);
