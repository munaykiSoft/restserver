import mongoose from "mongoose";

const dbcnn: string = process.env.DB_CNN || 'mongodb://localhost:27017/escueladb';
const dbConnection = async() => {
    try {
        await mongoose.connect( dbcnn, {
            useNewUrlParser: true, 
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });
        console.log('DB Online');
    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de iniciar la BD ver logs')
    }
}

export default dbConnection;