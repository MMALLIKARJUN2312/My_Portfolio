import express from 'express';
import cors from 'cors';
import projectRoutes from './routes/project.routes.js'

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Health check route
app.get("/api/health", (_req, res) => {
    res.status(200).send({status : "OK"});
})

app.use("/api/projects", projectRoutes)

export default app;