import { Schema, model, Document } from 'mongoose';

const studentSchema = new Schema({
    idPeople: { type: Schema.Types.ObjectId, ref: 'People'},
    people: {
        name: String,
        lastName: String,
        documentNumber: String
    },
    updatedBy: { type: Schema.Types.ObjectId, ref: 'User'},
    courses: [{ idCourse: { type: Schema.Types.ObjectId, ref: 'Course' }}],
},{ timestamps: true });


interface IStudent extends Document {
    idPeople: string;
    people: string;
    updatedBy: string;
    courses: string;
}

export const Student = model<IStudent>('Student', studentSchema);