import { Schema, model, Document } from 'mongoose';

const levelSchema = new Schema({
    name: { type: String, unique: true, required: true, lowercase: true }, // Primer grado
    order: { type: Number, required: true }, 
    description: { type: String },
}, { timestamps: true, versionKey: false });

interface ILevel extends Document {
    name: string;
    order: number;
    description: string;
}

export const Level = model<ILevel>('Level', levelSchema);