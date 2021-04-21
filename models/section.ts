import { Schema, model, Document } from 'mongoose';

const sectionSchema = new Schema({
    name: { type: String, required: true }, // Sección A
    description: { type: String },
    image: { type: String },
    type: { type: String }, // Primaria O secundaria
    teachers: [
        {
            teacher: { type: Schema.Types.ObjectId, ref: 'User' },
        }
    ],
    students: [
        {
            student: { type: Schema.Types.ObjectId, ref: 'User' }
        }
    ],
    level: { type: Schema.Types.ObjectId, ref: 'Level' },
    institution: { type: Schema.Types.ObjectId, ref: 'Institution' },
    updateAt: { type: Date },
    createdAt: { type: Date, default: Date.now },
});


interface ISection extends Document {
    name: string;
    description: string;
    image: string;
    teachers: any;
    students: any;
    level: string;
    institution: string;
    updateAt: Date;
    createdAt: Date;
}

export const Section = model<ISection>('Section', sectionSchema);