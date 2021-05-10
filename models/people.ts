import { Schema, model, Document } from 'mongoose';

const peopleSchema = new Schema({
    name: { type: String, required: true }, //Matematicas
    lastname: { type: String, required: true }, //Matematicas
    birthday: { type: Date, required: false },
    gender: { type: String, required: true },
    email: { type: String, required: true },
    ubigeo: { type: String, required: true },
    address: { type: String, required: true },
    documentType: { type: String, required: true },
    documentNumber: { type: String, required: true, unique: true },
    updatedBy: { type: Schema.Types.ObjectId, ref: 'User'},
},{ timestamps: true, versionKey: false  });


interface IPeople extends Document {
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
}

export const People = model<IPeople>('People', peopleSchema);