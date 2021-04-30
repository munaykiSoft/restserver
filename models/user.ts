import { Schema, model, Document } from 'mongoose';

const userSchema = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    image: { type: String },
    role: { type: String, required: true, default: 'USER' },
    status: { type: Boolean, default: true },
    token: { type: String, required: false },
    expiration: { type: Date, required: false },
}, { timestamps: true } );

// userSchema.methods.toJSON = function() {
//     let user = this;
//     let userObject: any = user.toObject();
//     delete userObject.password;
// }

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
 





