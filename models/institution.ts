import { Schema, model, Document } from 'mongoose';

const institutionSchema = new Schema({
    name: { type: String, unique: true, required: true, lowercase: true }, // IEP 730003 HUANCANE
    shortName: { type: String, lowercase: true },
    description: { type: String },
    image: { type: String },
    address: { type: String },
    ubigeo: { type: String },
    category: { type: String, required: true, enum: ['primaria', 'secundaria'] },
    updateAt: { type: Date },
    createdAt: { type: Date, default: Date.now },
});


interface IInstitution extends Document {
    name: string;
    short_name: string;
    description: string;
    image: string;
    address: string;
    ubigeo: string;
    category: string;
    updateAt: Date,
    createdAt: Date,
}

export const Institution = model<IInstitution>('Institution', institutionSchema);