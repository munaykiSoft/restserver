import { Schema, model, Document } from 'mongoose';

const courseSchema = new Schema({
    name: { type: String, unique: true, required: true, lowercase: true }, //Matematicas
    description: { type: String },
    image: { type: String },
    teachers: [{ teacher: { type: Schema.Types.ObjectId, ref: 'Teacher' }}],
    modules: [{ teacher: { type: Schema.Types.ObjectId, ref: 'Module' }}],
},{ timestamps: true });


interface ICourse extends Document {
    name: string;
    description: string;
    image: string;
    type: string;
    level: string;
    institution: string;
    section: string;
    teachers: any;
    updateAt: Date;
    createdAt: Date;
}

export const Course = model<ICourse>('Course', courseSchema);