import dotenv from 'dotenv';
import { connectDatabase } from './config/db.js';
import app from './app.js';

dotenv.config();
await connectDatabase();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on the PORT: ${PORT}`)
})