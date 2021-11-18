import { Schema, model, Document } from 'mongoose';

const courseSchema = new Schema({
    name: { type: String, required: true }, //Matematicas
    description: { type: String },
    image: { type: String , default: 'https://www.kenyons.com/wp-content/uploads/2017/04/default-image.jpg' },
    publicId: { type: String },
    teachers: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    students: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    modules: [{
        title: { type: String },
        subtitle: { type: String },
        description: { type: String },
        video: { type: String }
    }, { timestamps: true, versionKey: false  }],
    status: { type: Boolean, default: true}
},{ timestamps: true, versionKey: false  });


interface ICourse extends Document {
    name: string;
    description: string;
    image: string;
    teachers: string;
    students: string;
    modules: string;
}

export const Course = model<ICourse>('Course', courseSchema);