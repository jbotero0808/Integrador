import mongoose, { Schema, Document } from "mongoose";

interface IPost extends Document {
    idUser: string;
    title: string;
    content: string;
    image: string;
}

const postSchema = new Schema<IPost>({
    idUser: { type: String, required: true },
    title: { type: String, required: true },
    content: { type: String, required: true },
    image: { type: String, required: true }
});

export default mongoose.model<IPost>("Post", postSchema);