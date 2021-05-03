import { Schema, model, Document } from 'mongoose';

const courseSchema = new Schema({
    name: { type: String, unique: true, required: true, lowercase: true }, //Matematicas
    description: { type: String },
    image: { type: String },
    teachers: [{ idTeacher: { type: Schema.Types.ObjectId, ref: 'Teacher' }}],
    modules: [{ idModule: { type: Schema.Types.ObjectId, ref: 'Module' }}],
    idLevel: { type: Schema.Types.ObjectId, ref: 'Level' },
    idSection: { type: Schema.Types.ObjectId, ref: 'Section' },
},{ timestamps: true });


interface ICourse extends Document {
    name: string;
    description: string;
    image: string;
    teachers: string;
    modules: string;
    idLevel: string;
    idSection: any;
}

export const Course = model<ICourse>('Course', courseSchema);