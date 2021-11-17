import { Schema, model, Document } from 'mongoose';

const courseSchema = new Schema({
    name: { type: String, unique: true, required: true, lowercase: true }, //Matematicas
    description: { type: String },
    image: { type: String },
    teachers: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    students: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    modules: [{
        title: { type: String },
        subtitle: { type: String },
        description: { type: String },
        video: { type: String }
    }, { timestamps: true, versionKey: false  }],
},{ timestamps: true, versionKey: false  });


interface ICourse extends Document {
    name: string;
    description: string;
    image: string;
    teachers: string;
    students: string;
    modules: string;
    // idLevel: string;
    // idSection: any;
}

export const Course = model<ICourse>('Course', courseSchema);