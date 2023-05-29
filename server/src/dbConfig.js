import mongoose from 'mongoose';
import { URI_MONGO } from './const.js';


export const db = async () => {
    const conn = await mongoose.connect(URI_MONGO);
    console.log(`Conectado a la base de datos ${conn.connection.name}`)
}

db();



