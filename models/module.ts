import { Schema, model, Document } from 'mongoose';

const moduleSchema = new Schema({
    title: { type: String },
    description: { type: String },
    level: { type: Schema.Types.ObjectId, ref: 'Level' },
    institution: { type: Schema.Types.ObjectId, ref: 'Institution' },
    section: { type: Schema.Types.ObjectId, ref: 'Section' },
    course: { type: Schema.Types.ObjectId, ref: 'Course' },
    updateAt: { type: Date },
    createdAt: { type: Date, default: Date.now },
});


interface IModule extends Document {
    title: string;
    description: string;
    level: string;
    institution: string;
    section: string;
    course: string;
    updateAt: Date,
    createdAt: Date,
}

export const Module = model<IModule>('Module', moduleSchema);