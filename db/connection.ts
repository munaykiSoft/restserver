import mongoose from "mongoose";

const dbcnn: string = process.env.DB_CNN || 'mongodb+srv://visita:t7CNJsBhk3sXSAf3@cluster0.8pdxp.mongodb.net/escueladb?retryWrites=true&w=majority';
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