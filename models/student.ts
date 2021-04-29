import { Schema, model, Document } from 'mongoose';

const studentSchema = new Schema({
    idPeople: { type: Schema.Types.ObjectId, ref: 'People'},
    people: {
        name: String,
        lastName: String,
        documentNumber: String
    },
    updatedBy: { type: Schema.Types.ObjectId, ref: 'User'},
    courses: [{ teacher: { type: Schema.Types.ObjectId, ref: 'Course' }}],
    levels: [{ level: { type: Schema.Types.ObjectId, ref: 'Level' }}],
},{ timestamps: true });


interface IStudent extends Document {
    name: string;
    lastname: string;
    birthday: Date;
    gender: string;
    email: string;
    ubigeo: string;
    address: string;
    documentType: string;
    documentNumber: string;
    updatedBy: string;
    courses: string;
}

export const Student = model<IStudent>('Student', studentSchema);