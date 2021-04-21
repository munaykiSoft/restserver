import { Schema, model, Document } from 'mongoose';

const userSchema = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    image: { type: String },
    role: { type: String, required: true, default: 'USER' },
    status: { type: Boolean, default: true },
    token: { type: String, required: false },
    expiration: { type: Date, required: false },

    name: { type: String, required: true }, 
    last_name: { type: String, required: true, unique: true },
    m_lastName: { type: String, required: true },
    birthday: { type: Date, required: true },
    gender: { type: String, required: true },
    email: { type: String, required: true },
    ubigeo: { type: String, required: true },
    address: { type: String, required: true },
    document_type: { type: String, required: true },
    document: { type: String, required: true, unique: true },
    createdAt: { type: Date, default: Date.now()},
    updatedAt: { type: Date }
});

userSchema.methods.toJSON = function() {
    let user = this;
    let userObject: any = user.toObject();
    delete userObject.password;
}

interface IUser extends Document {
    username: string;
    password: string;
    image: string,
    role: string;
    status: string;
    token: string;
    expiration: Date;

    name: string;
    last_name: string;
    m_lastName: string,
    gender: string,
    birthday: string,
    email: string,
    ubigeo: string,
    address: string,
    document_type: string;
    document: string;
    createdAt: Date;
    updatedAt: Date;
}

export const User = model<IUser>('User', userSchema);
 





