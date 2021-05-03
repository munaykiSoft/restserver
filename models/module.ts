import { Schema, model, Document } from 'mongoose';

const moduleSchema = new Schema({
    title: { type: String },
    description: { type: String },
    detail: [{
        title: { type: String },
        description: { type: String },
    }, { timestamps: true }]
}, { timestamps: true, versionKey: false  });


interface IModule extends Document {
    title: string;
    description: string;
}

export const Module = model<IModule>('Module', moduleSchema);