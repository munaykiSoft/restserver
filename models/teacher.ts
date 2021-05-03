import { Schema, model, Document } from 'mongoose';

const teacherSchema = new Schema({
    idPeople: { type: Schema.Types.ObjectId, ref: 'People'},
    people: {
        name: String,
        lastName: String,
        documentNumber: String
    },
    updatedBy: { type: Schema.Types.ObjectId, ref: 'User'},
},{ timestamps: true, versionKey: false });


interface ITeacher extends Document {
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

export const Teacher = model<ITeacher>('Teacher', teacherSchema);