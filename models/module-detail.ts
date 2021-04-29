import { Schema, model, Document } from 'mongoose';

const moduleDetailSchema = new Schema({
    title: { type: String },
    description: { type: String },
    details: [
        {
            title: { type: String },
            image: { type: String },
            description: { type: String },
        },
    ], 
    module: { type: Schema.Types.ObjectId, ref: 'Module' },
    updateAt: { type: Date },
    createdAt: { type: Date, default: Date.now },
});


interface IModuleDetail extends Document {
    title: string,
    description: string,
    details: any,
    level: string,
    institution: string,
    section: string,
    course: string,
    module: string,
    updateAt: Date,
    createdAt: Date,
}

export const ModuleDetail = model<IModuleDetail>('ModuleDetail', moduleDetailSchema);