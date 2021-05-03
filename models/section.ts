import { Schema, model, Document } from 'mongoose';

const sectionSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String },
    image: { type: String },
}, { timestamps: true });


interface ISection extends Document {
    name: string;
    description: string;
    image: string;
}

export const Section = model<ISection>('Section', sectionSchema);