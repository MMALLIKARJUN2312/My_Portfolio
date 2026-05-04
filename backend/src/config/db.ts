import pkg from 'pg';
import { ENV } from './env.js';

const {Pool} = pkg;

export const pool = new Pool({
    connectionString : ENV.DATABASE_URL,
})

export const connectDatabase = async () => {
    try {
        await pool.connect();
        console.log("Connected to the PostgreSQL database successfully")
    } catch (error) {
        console.error("Error connecting to the database", error);
        process.exit(1);
    }
}