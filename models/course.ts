import { Schema, model, Document } from 'mongoose';

const courseSchema = new Schema({
    name: { type: String, unique: true, required: true, lowercase: true }, //Matematicas
    description: { type: String },
    image: { type: String },
    type: { type: String }, // si o si cuando va ser secundaria  
    level: { type: Schema.Types.ObjectId, ref: 'Level' },
    institution: { type: Schema.Types.ObjectId, ref: 'Institution' },
    section: { type: Schema.Types.ObjectId, ref: 'Section' },
    teachers: [
        {
            teacher: { type: Schema.Types.ObjectId, ref: 'User' },
        }
    ],
    updateAt: { type: Date },
    createdAt: { type: Date, default: Date.now },
});


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