import { Schema, model, Document } from 'mongoose';

const userSchema = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    image: { type: String },
    role: { type: String, required: true, default: 'USER' },
    idTeacher: { type: Schema.Types.ObjectId, ref: 'Teacher' },
    idStudent: { type: Schema.Types.ObjectId, ref: 'Student'},
    people: {
        name: String,
        lastname: String,
        dni: String,
        email: String
    },
    status: { type: Boolean, default: true },
    token: { type: String, required: false },
    expiration: { type: Date, required: false },
}, { timestamps: true, versionKey: false  } );

userSchema.methods.toJSON = function() {
    let user:any = this;
    const { __v, _id, password, ...object } = user.toObject();
    object.uid = _id;
    return object;
}
interface IUser extends Document {
    username: string;
    password: string;
    image: string,
    role: string;
    status: string;
    token: string;
    expiration: Date;
}

export const User = model<IUser>('User', userSchema);
 





