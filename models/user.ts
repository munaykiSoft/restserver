import { Schema, model, Document } from 'mongoose';

const userSchema = new Schema({
    password: { type: String, required: true },
    image: { type: String },
    role: { type: String, required: false, default: 'STUDENT' },
    status: { type: Boolean, default: true },
    token: { type: String, required: false },
    expiration: { type: Date, required: false },

    // Datos personales
    name: { type: String, required: true }, 
    lastname: { type: String, required: true },
    birthday: { type: Date, required: false },
    gender: { type: String, required: false },
    email: { type: String, required: false },
    department: { type: String, required: false },
    province: { type: String, required: false },
    district: { type: String, required: false },
    address: { type: String, required: false },
    cedula: { type: String, required: false, unique: true },
    updatedBy: { type: Schema.Types.ObjectId, ref: 'User'},
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
    status: boolean;
    token: string;
    expiration: Date;
    // Datos personales
    name: string;
    lastname: string;
    birthday: Date;
    gender: string;
    email: string;
    department: string;
    province: string;
    district: string;
    address: string;
    cedula: string;
    updatedBy: string;
}

export const User = model<IUser>('User', userSchema);
 





